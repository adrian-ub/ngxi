import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icRoundJoinInnerIcon],svg[ic-round-join-inner-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.68 6.8c-.39-.35-.98-.35-1.37 0C9.35 8.56 9 10.84 9 12c0 1.15.35 3.44 2.32 5.2c.39.35.98.35 1.37 0C14.65 15.44 15 13.16 15 12c0-1.15-.35-3.44-2.32-5.2"></svg:path><svg:path fill="currentColor" d="M9.04 16.87c-.33.08-.68.13-1.04.13c-2.76 0-5-2.24-5-5s2.24-5 5-5c.36 0 .71.05 1.04.13c.39-.56.88-1.12 1.49-1.63C9.75 5.19 8.9 5 8 5c-3.86 0-7 3.14-7 7s3.14 7 7 7c.9 0 1.75-.19 2.53-.5c-.61-.51-1.1-1.07-1.49-1.63M16 5c-.9 0-1.75.19-2.53.5c.61.51 1.1 1.07 1.49 1.63c.33-.08.68-.13 1.04-.13c2.76 0 5 2.24 5 5s-2.24 5-5 5c-.36 0-.71-.05-1.04-.13c-.39.56-.88 1.12-1.49 1.63c.78.31 1.63.5 2.53.5c3.86 0 7-3.14 7-7s-3.14-7-7-7"></svg:path>`,
})
export class IcRoundJoinInnerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
