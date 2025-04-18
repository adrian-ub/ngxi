import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiUmbrellaClosedIcon],svg[mdi-umbrella-closed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2q-.6 0-.9.6L6.5 15H11v4c0 .6-.4 1-1 1s-1-.4-1-1v-1H7v1c0 1.7 1.3 3 3 3s3-1.3 3-3v-4h4.5L12.9 2.6Q12.6 2 12 2"></svg:path>`,
})
export class MdiUmbrellaClosedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
