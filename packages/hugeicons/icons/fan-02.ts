import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsFan02Icon],svg[hugeicons-fan-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M9.58 12.629A5.05 5.05 0 0 0 7 17.042a5.04 5.04 0 0 0 3.053 4.645c.701.3 1.052.45 1.5.15s.447-.79.447-1.77V14.5a2.5 2.5 0 0 1-2.42-1.871M9.5 12H3.933c-.98 0-1.47 0-1.77-.448c-.3-.447-.15-.798.15-1.5A5.04 5.04 0 0 1 6.958 7c1.9 0 3.553 1.041 4.413 2.58A2.5 2.5 0 0 0 9.5 12M12 9.5V3.933c0-.98 0-1.47.448-1.77c.447-.3.798-.15 1.5.15A5.04 5.04 0 0 1 17 6.958c0 1.9-1.041 3.553-2.58 4.413A2.5 2.5 0 0 0 12 9.5m.629 4.92A2.5 2.5 0 0 0 14.5 12h5.567c.98 0 1.47 0 1.77.448c.3.447.15.798-.15 1.5A5.04 5.04 0 0 1 17.042 17a5.05 5.05 0 0 1-4.413-2.58"></svg:path><svg:path d="M14.5 12a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0"></svg:path></svg:g>`,
})
export class HugeiconsFan02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
