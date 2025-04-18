import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsUserUnlock01Icon],svg[hugeicons-user-unlock-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16.531 16.36v-1.408A1.96 1.96 0 0 1 18.5 13c.489 0 .936.177 1.28.469M17.844 22h1.312c1.022 0 1.532 0 1.919-.205c.305-.162.555-.41.718-.712c.207-.384.207-.89.207-1.903s0-1.52-.207-1.903a1.74 1.74 0 0 0-.718-.712c-.387-.205-.897-.205-1.919-.205h-1.312c-1.022 0-1.532 0-1.919.205c-.305.162-.555.41-.718.712c-.207.384-.207.89-.207 1.903s0 1.52.207 1.903c.163.302.413.55.718.712c.387.205.897.205 1.919.205M12.5 22H6.59c-1.545 0-2.774-.752-3.877-1.803c-2.26-2.153 1.45-3.873 2.865-4.715a10.67 10.67 0 0 1 7.922-1.187m3-7.795a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0" color="currentColor"></svg:path>`,
})
export class HugeiconsUserUnlock01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
