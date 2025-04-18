import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCameraOff02Icon],svg[hugeicons-camera-off-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M21 21.121c-.873.879-2.278.879-5.089.879h-7.95c-2.81 0-4.215 0-5.088-.879S2 18.828 2 16v-4.5c0-2.347 0-3.52.616-4.328a3 3 0 0 1 .55-.553c.675-.522 1.255-.605 2.809-.618M21.993 17.5q.009-.673.007-1.5v-4.5c0-2.346 0-3.518-.62-4.326a3 3 0 0 0-.554-.554C20.018 6 19.346 6 17 6h-.4m.4 1l-.4-1M8 4.5c.352-.877.691-1.799 1.583-2.24C10.107 2 10.738 2 12 2s1.892 0 2.417.26c.982.486 1.315 1.57 1.697 2.525L16.6 6"></svg:path><svg:path d="M11.06 11A3.39 3.39 0 0 0 9 14.112c0 1.87 1.529 3.388 3.414 3.388a3.42 3.42 0 0 0 3.086-1.936M12 6h.009M2 2l20 20"></svg:path></svg:g>`,
})
export class HugeiconsCameraOff02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
