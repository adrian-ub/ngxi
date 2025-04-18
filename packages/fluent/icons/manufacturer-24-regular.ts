import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentManufacturer24RegularIcon],svg[fluent-manufacturer-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="M2.924 4.129A2.25 2.25 0 0 1 5.171 2H6.33a2.25 2.25 0 0 1 2.247 2.129l.838 15.5A2.25 2.25 0 0 1 7.167 22H4.333a2.25 2.25 0 0 1-2.246-2.371l.837-15.5zM5.171 3.5a.75.75 0 0 0-.749.71l-.838 15.5a.75.75 0 0 0 .75.79h2.833a.75.75 0 0 0 .749-.79l-.838-15.5a.75.75 0 0 0-.75-.71H5.172z" fill="currentColor"></svg:path><svg:path d="M9.512 22H19.75A2.25 2.25 0 0 0 22 19.75V6a.75.75 0 0 0-1.27-.541l-4.98 4.781V6a.75.75 0 0 0-1.228-.578L9.856 9.284l.1 1.864l4.294-3.554V12a.75.75 0 0 0 1.27.541L20.5 7.76v11.99a.75.75 0 0 1-.75.75h-1V16A1.75 1.75 0 0 0 17 14.25h-4A1.75 1.75 0 0 0 11.25 16v4.5h-.92a3.248 3.248 0 0 1-.818 1.5zm7.738-6v4.25h-4.5V16a.25.25 0 0 1 .25-.25h4a.25.25 0 0 1 .25.25z" fill="currentColor"></svg:path></svg:g>`,
})
export class FluentManufacturer24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
