import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCameraAdd02Icon],svg[hugeicons-camera-add-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M17 6c2.346 0 3.018 0 3.826.62a3 3 0 0 1 .554.554c.62.808.62 1.98.62 4.326V16c0 2.828 0 4.243-.879 5.121C20.243 22 18.828 22 16 22H8c-2.828 0-4.243 0-5.121-.879C2 20.243 2 18.828 2 16v-4.5c0-2.346 0-3.518.62-4.326a3 3 0 0 1 .554-.554C3.982 6 4.654 6 7 6"></svg:path><svg:path d="m17 7l-.886-2.215c-.382-.955-.715-2.039-1.697-2.525C13.892 2 13.262 2 12 2s-1.892 0-2.417.26c-.982.486-1.315 1.57-1.697 2.525L7 7m5-1h.009M8.5 14.5h7M12 18v-7"></svg:path></svg:g>`,
})
export class HugeiconsCameraAdd02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
