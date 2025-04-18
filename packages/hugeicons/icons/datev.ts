import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDatevIcon],svg[hugeicons-datev-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.496 14.994c-.28 0-.5-.22-.5-.5v-5c0-.28.22-.5.5-.5h1c1.65 0 3 1.35 3 3s-1.35 3-3 3zm.5-1h.5c1.1 0 2-.9 2-2s-.9-2-2-2h-.5zm4 1c-.06 0-.12-.01-.19-.04a.5.5 0 0 1-.28-.65l2-5c.15-.38.78-.38.93 0l2 5c.06.15.04.33-.05.47a.49.49 0 0 1-.41.22h-1.71c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h.97l-1.26-3.15l-1.54 3.84c-.08.2-.27.31-.46.31m14.541-.31c.07.19.26.31.46.31l.01.01c.2 0 .38-.12.46-.31l2-5a.52.52 0 0 0-.05-.47a.48.48 0 0 0-.41-.22h-1.71c-.28 0-.5.22-.5.5s.22.5.5.5h.97l-1.26 3.15l-1.54-3.84a.501.501 0 0 0-.93.37zm-8.54.31c-.28 0-.5-.22-.5-.5v-4.5h-1c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h3c.28 0 .5.22.5.5s-.22.5-.5.5h-1v4.5c0 .28-.22.5-.5.5m3 0h2.5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5h-2v-1.5h2c.28 0 .5-.22.5-.5s-.22-.5-.5-.5h-2v-1.5h2c.28 0 .5-.22.5-.5s-.22-.5-.5-.5h-2.5c-.28 0-.5.22-.5.5v5c0 .28.22.5.5.5" color="currentColor"></svg:path>`,
})
export class HugeiconsDatevIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
