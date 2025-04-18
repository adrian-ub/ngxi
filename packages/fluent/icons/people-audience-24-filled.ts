import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPeopleAudience24FilledIcon],svg[fluent-people-audience-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.754 10c.966 0 1.75.784 1.75 1.75V15H16.5v1h-9v-3h.002v-1.25c0-.966.783-1.75 1.75-1.75zM22 11.75A1.75 1.75 0 0 0 20.25 10h-3.375c.393.475.629 1.085.629 1.75V13H17.5v3h3.75a.75.75 0 0 0 .75-.75zM6.5 15h.002v-3.25l.009-.22a2.7 2.7 0 0 1 .62-1.53H3.75l-.144.006A1.75 1.75 0 0 0 2 11.75v3.5c0 .414.336.75.75.75H6.5zM12 3a3 3 0 1 1 0 6a3 3 0 0 1 0-6m6.5 1a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0-5m-13 0a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0-5M2 17.75a.75.75 0 0 1 .75-.75h18.5a.75.75 0 0 1 .75.75v.5A3.75 3.75 0 0 1 18.25 22H5.75A3.75 3.75 0 0 1 2 18.25z"></svg:path>`,
})
export class FluentPeopleAudience24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
