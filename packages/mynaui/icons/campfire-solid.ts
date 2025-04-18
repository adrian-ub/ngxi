import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiCampfireSolidIcon],svg[mynaui-campfire-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M4.717 15.66a.75.75 0 0 1 .962-.447l6.321 2.3l6.321-2.3a.75.75 0 1 1 .513 1.41l-4.641 1.688l4.641 1.69a.75.75 0 0 1-.513 1.41L12 19.11l-6.321 2.3A.75.75 0 1 1 5.166 20l4.641-1.689l-4.641-1.689a.75.75 0 0 1-.449-.961"></svg:path><svg:path d="M9.17 3.106a.75.75 0 0 1 .94-.293c1.735.762 2.57 2.275 2.969 3.503q.072.221.127.433a7 7 0 0 1 2.137-1.548a.75.75 0 0 1 1.021.442l.176.511c.266.766.56 1.611.73 2.445c.213 1.04.262 2.166-.192 3.257A5.5 5.5 0 0 1 12 15.25c-3.04 0-5.5-2.472-5.5-5.517c0-2.457.836-3.759 2.01-5.586c.21-.327.43-.67.66-1.041"></svg:path></svg:g>`,
})
export class MynauiCampfireSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
