import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ciPauseCircleOutlineIcon],svg[ci-pause-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22c-5.52-.006-9.994-4.48-10-10v-.2C2.11 6.305 6.635 1.928 12.13 2c5.497.074 9.904 4.569 9.868 10.065C21.962 17.562 17.497 22 12 22Zm-.016-2H12a8 8 0 1 0-.016 0ZM15 16h-2V8h2v8Zm-4 0H9V8h2v8Z"></svg:path>`,
})
export class CiPauseCircleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
