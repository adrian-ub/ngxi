import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ciHappyIcon],svg[ci-happy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10c-.006 5.52-4.48 9.994-10 10Zm0-18a8 8 0 1 0 8 8a8.009 8.009 0 0 0-8-8Zm0 14a4.837 4.837 0 0 1-4-2a6.3 6.3 0 0 1-1-2h10v.008A6.422 6.422 0 0 1 16 16a4.838 4.838 0 0 1-4 2Zm-3.5-6a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3Zm6.993-.014a1.493 1.493 0 1 1 0-2.986a1.493 1.493 0 0 1 0 2.986Z"></svg:path>`,
})
export class CiHappyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
