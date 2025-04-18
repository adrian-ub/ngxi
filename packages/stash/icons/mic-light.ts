import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[stashMicLightIcon],svg[stash-mic-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9 6.5a3 3 0 1 1 6 0v6a3 3 0 1 1-6 0zm3-2a2 2 0 0 0-2 2v6a2 2 0 1 0 4 0v-6a2 2 0 0 0-2-2M7 12a.5.5 0 0 1 .5.5a4.5 4.5 0 1 0 9 0a.5.5 0 0 1 1 0a5.5 5.5 0 0 1-5 5.478V19.5H15a.5.5 0 0 1 0 1H9a.5.5 0 0 1 0-1h2.5v-1.522a5.5 5.5 0 0 1-5-5.478a.5.5 0 0 1 .5-.5" clip-rule="evenodd"></svg:path>`,
})
export class StashMicLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
