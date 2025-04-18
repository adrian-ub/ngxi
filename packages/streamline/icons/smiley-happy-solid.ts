import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineSmileyHappySolidIcon],svg[streamline-smiley-happy-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7 0a7 7 0 1 0 0 14A7 7 0 0 0 7 0M3.343 8.223a.25.25 0 0 1 .25-.25h6.782a.25.25 0 0 1 .25.25c0 .552-.27 1.337-.852 1.983c-.59.656-1.504 1.173-2.79 1.173c-1.284 0-2.198-.517-2.789-1.173c-.581-.646-.85-1.43-.85-1.983Zm1.239-2.247a1.024 1.024 0 0 1 .002-2.049h.003a1.024 1.024 0 0 1-.003 2.049zm4.831 0a1.024 1.024 0 0 1 .003-2.049h.002a1.024 1.024 0 0 1-.002 2.049z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineSmileyHappySolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
