import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsRssUnlockedIcon],svg[hugeicons-rss-unlocked-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12.992 22c.72 0 1-.004 1-.004c3.417-.025 5.3-.186 6.542-1.24C22 19.51 22 17.505 22 13.5M11.99 5C7.273 5 4.914 5 3.448 6.245C2.324 7.198 2.062 8.597 2 11m14.531-5.64V3.952A1.96 1.96 0 0 1 18.5 2c.489 0 .936.177 1.28.469M17.844 11h1.312c1.022 0 1.532 0 1.919-.205c.305-.162.555-.41.718-.712C22 9.699 22 9.193 22 8.18s0-1.52-.207-1.903a1.74 1.74 0 0 0-.718-.712c-.387-.205-.897-.205-1.919-.205h-1.312c-1.022 0-1.532 0-1.919.205c-.305.162-.555.41-.718.712C15 6.661 15 7.167 15 8.18s0 1.52.207 1.903c.163.302.413.55.718.712c.387.205.897.205 1.919.205M2.982 21h.01M2 17.235c2.493 0 4.77 2.265 4.77 4.765M10 22c0-4.5-4.005-8-7.955-8" color="currentColor"></svg:path>`,
})
export class HugeiconsRssUnlockedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
