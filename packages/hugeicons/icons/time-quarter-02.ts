import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTimeQuarter02Icon],svg[hugeicons-time-quarter-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M21.28 9.212a.76.76 0 0 0 .94.5c.4-.12.62-.54.5-.94c-.16-.53-.36-1.05-.6-1.55a.745.745 0 0 0-1-.36c-.37.18-.54.62-.36 1c.2.44.38.89.52 1.35m-2.03-3.58c.15.18.37.27.58.27c.17 0 .34-.05.48-.17c.31-.27.36-.74.09-1.06c-.17-.2-.34-.38-.52-.56q-.27-.27-.54-.51a.747.747 0 0 0-1.06.06c-.28.31-.25.79.06 1.06q.24.21.48.45c.15.14.29.3.43.46m-2.845-2.34h.005h-.01zm-.315-.07c.098.05.206.07.315.07a.752.752 0 0 0 .325-1.43c-.54-.26-1.03-.45-1.52-.59a.75.75 0 1 0-.42 1.44c.41.12.83.29 1.3.51M12 22.742c-5.93 0-10.75-4.82-10.75-10.75S6.07 1.242 12 1.242c.41 0 .75.34.75.75s-.34.75-.75.75c-5.1 0-9.25 4.15-9.25 9.25s4.15 9.25 9.25 9.25s9.25-4.15 9.25-9.25c0-.41.34-.75.75-.75s.75.34.75.75c0 5.93-4.82 10.75-10.75 10.75m4-10h-4c-.41 0-.75-.34-.75-.75v-6c0-.41.34-.75.75-.75s.75.34.75.75v5.25H16c.41 0 .75.34.75.75s-.34.75-.75.75" color="currentColor"></svg:path>`,
})
export class HugeiconsTimeQuarter02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
