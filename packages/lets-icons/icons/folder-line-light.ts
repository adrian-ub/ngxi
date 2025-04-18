import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsFolderLineLightIcon],svg[lets-icons-folder-line-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:path stroke-miterlimit="1.414" d="M4.5 11.5h15"></svg:path><svg:path d="M4.5 6.9c0-.84 0-1.26.163-1.581a1.5 1.5 0 0 1 .656-.656c.32-.163.74-.163 1.581-.163h2.572c.376 0 .564 0 .735.052a1.2 1.2 0 0 1 .413.221c.137.113.242.27.45.582l.86 1.29c.208.313.313.47.45.582c.122.1.263.176.413.222c.171.051.359.051.735.051H17.1c.84 0 1.26 0 1.581.164a1.5 1.5 0 0 1 .656.655c.163.321.163.741.163 1.581v6.2c0 .84 0 1.26-.163 1.581a1.5 1.5 0 0 1-.656.656c-.32.163-.74.163-1.581.163H6.9c-.84 0-1.26 0-1.581-.163a1.5 1.5 0 0 1-.656-.656c-.163-.32-.163-.74-.163-1.58z"></svg:path></svg:g>`,
})
export class LetsIconsFolderLineLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
