import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightAudioVideoReceiverOutlineSharpIcon],svg[material-symbols-light-audio-video-receiver-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 14.692h16V7.116H4zm-1 1V6.116h18v9.576h-2v1.27h-1v-1.27H6v1.27H5v-1.27zm1-1V7.116zM16.616 12.5q.632 0 1.066-.434q.434-.433.434-1.066t-.434-1.066t-1.066-.434t-1.067.434q-.433.433-.433 1.066t.433 1.066t1.067.434m-10.231 0h6.461v-3H6.385z"></svg:path>`,
})
export class MaterialSymbolsLightAudioVideoReceiverOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
