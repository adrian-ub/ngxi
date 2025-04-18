import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsFileUnlockedIcon],svg[hugeicons-file-unlocked-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M11 22h-.273c-3.26 0-4.892 0-6.024-.798a4.1 4.1 0 0 1-.855-.805C3 19.331 3 17.797 3 14.727v-2.545c0-2.963 0-4.445.469-5.628c.754-1.903 2.348-3.403 4.37-4.113C9.095 2 10.668 2 13.818 2c1.798 0 2.698 0 3.416.252c1.155.406 2.066 1.263 2.497 2.35C20 5.278 20 6.125 20 7.818V10"></svg:path><svg:path d="M3 12a3.333 3.333 0 0 1 3.333-3.333c.666 0 1.451.116 2.098-.057A1.67 1.67 0 0 0 9.61 7.43c.173-.647.057-1.432.057-2.098A3.333 3.333 0 0 1 13 2m2.531 14.36v-1.408A1.96 1.96 0 0 1 17.5 13c.489 0 .936.177 1.28.469M16.844 22h1.312c1.022 0 1.532 0 1.919-.205c.305-.162.555-.41.718-.712c.207-.384.207-.89.207-1.903s0-1.52-.207-1.903a1.74 1.74 0 0 0-.718-.712c-.387-.205-.897-.205-1.919-.205h-1.312c-1.022 0-1.532 0-1.919.205c-.305.162-.555.41-.718.712c-.207.384-.207.89-.207 1.903s0 1.52.207 1.903c.163.302.413.55.718.712c.387.205.897.205 1.919.205"></svg:path></svg:g>`,
})
export class HugeiconsFileUnlockedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
