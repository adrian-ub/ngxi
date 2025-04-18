import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatTestTubeIcon],svg[fluent-emoji-flat-test-tube-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#C3EF3C" d="M12.314 12.757L20.5 11l5.249 2.465l-14.142 14.142a5 5 0 0 1-7.072-7.071l1.057-1.057l1.057.087v-1.144l3.197-3.197l1.049-.03v-1.019z"></svg:path><svg:path fill="#AEDDFF" d="M21.86 2.504a1.5 1.5 0 1 0-2.122 2.122l.354.353l-4.975 4.975L15.5 11l-1.396-.033l-1.79 1.79l13.435.707l1.414-1.414l.354.354a1.5 1.5 0 1 0 2.12-2.121z"></svg:path><svg:path fill="#008463" d="m15.142 9.929l2.298 2.298a.75.75 0 1 1-1.06 1.06l-2.3-2.297zM10.9 14.172l2.297 2.298a.75.75 0 0 1-1.06 1.06l-2.298-2.298zm-1.945 6.54l-2.298-2.298l-1.06 1.06l2.297 2.299a.75.75 0 0 0 1.061-1.06"></svg:path></svg:g>`,
})
export class FluentEmojiFlatTestTubeIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
