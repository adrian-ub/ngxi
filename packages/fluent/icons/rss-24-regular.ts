import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentRss24RegularIcon],svg[fluent-rss-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M6.75 7.5c-.405 0-.75-.317-.75-.722v-.055c0-.393.305-.721.698-.723h.052C12.963 6 18 11.037 18 17.25v.052a.71.71 0 0 1-.723.698h-.055c-.405 0-.722-.345-.722-.75A9.75 9.75 0 0 0 6.75 7.5"></svg:path><svg:path d="M13.294 18c.38 0 .701-.287.705-.666L14 17.25A7.25 7.25 0 0 0 6.666 10c-.379.005-.666.327-.666.706v.09c0 .399.351.704.75.704a5.75 5.75 0 0 1 5.75 5.75c0 .399.305.75.704.75zM9 16.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0"></svg:path><svg:path d="M6.25 3A3.25 3.25 0 0 0 3 6.25v11.5A3.25 3.25 0 0 0 6.25 21h11.5A3.25 3.25 0 0 0 21 17.75V6.25A3.25 3.25 0 0 0 17.75 3zM4.5 6.25c0-.966.784-1.75 1.75-1.75h11.5c.966 0 1.75.784 1.75 1.75v11.5a1.75 1.75 0 0 1-1.75 1.75H6.25a1.75 1.75 0 0 1-1.75-1.75z"></svg:path></svg:g>`,
})
export class FluentRss24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
