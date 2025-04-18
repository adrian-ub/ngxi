import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[guidanceSettingsIcon],svg[guidance-settings-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:path d="m10.5 1.5l-.181.543a7 7 0 0 1-.716 1.514a4.63 4.63 0 0 1-3.717 2.146a7 7 0 0 1-1.668-.137l-.561-.115l-1.5 2.598l.38.429c.374.422.693.884.953 1.376a4.63 4.63 0 0 1 0 4.292a7 7 0 0 1-.953 1.376l-.38.429l1.5 2.598l.56-.115a7 7 0 0 1 1.67-.137a4.63 4.63 0 0 1 3.716 2.146c.296.47.537.979.716 1.514l.181.543h3l.181-.543q.27-.806.716-1.514a4.63 4.63 0 0 1 3.717-2.146a7 7 0 0 1 1.668.137l.561.115l1.5-2.598l-.38-.429a7 7 0 0 1-.953-1.376a4.63 4.63 0 0 1 0-4.292c.26-.492.579-.954.953-1.376l.38-.429l-1.5-2.598l-.56.115a7 7 0 0 1-1.67.137a4.63 4.63 0 0 1-3.716-2.146a7 7 0 0 1-.716-1.514L13.5 1.5z"></svg:path><svg:path d="M15.502 12a3.502 3.502 0 1 1-7.004 0a3.502 3.502 0 0 1 7.004 0Z"></svg:path></svg:g>`,
})
export class GuidanceSettingsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
