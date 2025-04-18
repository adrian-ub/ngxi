import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineGramophoneSolidIcon],svg[streamline-gramophone-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.724.053a.5.5 0 0 0-.598.115l-4 4.5A.5.5 0 0 0 5.5 5.5c1.13 0 2.526.458 3.67 1.334a5.6 5.6 0 0 1 1.62 1.919h3.144c-.243-3.1-1.117-5.179-2.018-6.53a7.8 7.8 0 0 0-1.47-1.67a4 4 0 0 0-.7-.488zM1.5 10h6.928l.058.003h5.509q.005.245.005.497v2a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 0 12.5v-1A1.5 1.5 0 0 1 1.5 10M.986 7.25a.75.75 0 0 0 0 1.5H6.5a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineGramophoneSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
