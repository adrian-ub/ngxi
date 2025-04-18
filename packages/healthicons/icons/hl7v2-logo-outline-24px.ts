import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsHl7v2LogoOutline24pxIcon],svg[healthicons-hl7v2-logo-outline-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M15.507 2h-6.95c-.77 0-1.164.933-.614 1.481l.993.991l-3.306 3.3a.867.867 0 0 0 0 1.227l3.755 3.747a.87.87 0 0 0 1.226 0l3.308-3.301l.975.973c.545.543 1.481.162 1.481-.614V2.867c0-.48-.39-.867-.868-.867m-5.063 1.858l-.359-.358h4.79v4.78l-.342-.342a.87.87 0 0 0-1.226 0l-3.31 3.301l-2.859-2.854l3.306-3.299a.867.867 0 0 0 0-1.228"></svg:path><svg:path d="M14.615 11.254a.87.87 0 0 0-1.226 0l-3.308 3.301l-.975-.973c-.545-.543-1.481-.162-1.481.614v6.937c0 .48.39.867.868.867h6.95c.77 0 1.164-.933.614-1.481l-.993-.991l3.306-3.3a.867.867 0 0 0 0-1.227zm-3.921 4.808l3.308-3.301l2.86 2.854l-3.306 3.299a.867.867 0 0 0 0 1.228l.359.358h-4.79v-4.78l.342.342a.87.87 0 0 0 1.226 0"></svg:path></svg:g>`,
})
export class HealthiconsHl7v2LogoOutline24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
