import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightVideoFileIcon],svg[material-symbols-light-video-file-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.116 17.616h4q.251 0 .433-.182t.182-.434v-1.461l1.846.972V13.49l-1.846.972V13q0-.252-.182-.434t-.433-.182h-4q-.252 0-.434.182T8.5 13v4q0 .252.182.434t.433.181M6.615 21q-.69 0-1.152-.462T5 19.385V4.615q0-.69.463-1.152T6.616 3H14.5L19 7.5v11.885q0 .69-.462 1.153T17.384 21zM14 8h4l-4-4z"></svg:path>`,
})
export class MaterialSymbolsLightVideoFileIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
