import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsFolderUnlockedIcon],svg[hugeicons-folder-unlocked-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12.009 20.5c-4.718 0-7.078 0-8.543-1.465C2 17.572 2 15.215 2 10.5V7.444c0-1.816 0-2.724.38-3.406A3 3 0 0 1 3.54 2.88c.682-.38 1.59-.38 3.409-.38c1.164 0 1.747 0 2.257.191c1.164.436 1.644 1.493 2.169 2.542l.634 1.267m-5.005 0h9.759c2.108 0 3.163 0 3.92.506c.328.218.61.5.829.827c.34.51.452 1.155.488 2.167m-5.469 5.86v-1.408A1.96 1.96 0 0 1 18.5 12.5c.489 0 .936.177 1.28.469M17.844 21.5h1.312c1.022 0 1.532 0 1.919-.205c.305-.162.555-.41.718-.712c.207-.384.207-.89.207-1.903s0-1.52-.207-1.903a1.74 1.74 0 0 0-.718-.712c-.387-.205-.897-.205-1.919-.205h-1.312c-1.022 0-1.532 0-1.919.205c-.305.162-.555.41-.718.712c-.207.384-.207.89-.207 1.903s0 1.52.207 1.903c.163.302.413.55.718.712c.387.205.897.205 1.919.205" color="currentColor"></svg:path>`,
})
export class HugeiconsFolderUnlockedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
