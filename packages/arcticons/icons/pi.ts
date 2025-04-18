import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsPiIcon],svg[arcticons-pi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M35.5 14.824v1.426a2.775 2.775 0 0 1-2.811 2.737H15.311a2.775 2.775 0 0 0-2.812 2.737v1.427m15.718-4.163v16.577m-8.435-16.577v16.577"></svg:path><svg:ellipse cx="19.782" cy="13.461" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1.541" ry="1.5"></svg:ellipse><svg:ellipse cx="28.217" cy="13.461" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1.541" ry="1.5"></svg:ellipse><svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsPiIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
