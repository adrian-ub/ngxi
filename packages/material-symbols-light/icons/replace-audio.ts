import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightReplaceAudioIcon],svg[material-symbols-light-replace-audio-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.327 8.77q.739-2.572 2.864-4.171T12 3q2.223 0 4.099 1.144T19 7.234V4h1v4.77h-4.77v-1h2.862q-.84-1.726-2.49-2.748T12 4Q9.725 4 7.907 5.306t-2.52 3.463zM10.769 21q-1.142 0-1.936-.794t-.795-1.937t.795-1.936t1.936-.794q.496 0 .939.18t.792.49v-5.055h4v1h-3v6.115q0 1.143-.794 1.937T10.769 21"></svg:path>`,
})
export class MaterialSymbolsLightReplaceAudioIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
