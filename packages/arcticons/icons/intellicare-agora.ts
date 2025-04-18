import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsIntellicareAgoraIcon],svg[arcticons-intellicare-agora-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.394 6.018a3.86 3.86 0 0 0-1.931 3.344v29.27c.001 2.973 3.22 4.83 5.794 3.345l25.348-14.634c2.576-1.487 2.576-5.205 0-6.692L13.257 6.017a3.86 3.86 0 0 0-3.863 0z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m7.98 7.432l24.831 14.335l-17.624 10.174"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M40.025 22.063L15.188 36.401V16.053"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.326 42.5V13.823l17.623 10.174"></svg:path>`,
})
export class ArcticonsIntellicareAgoraIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
