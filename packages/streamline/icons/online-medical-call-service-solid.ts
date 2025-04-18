import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineOnlineMedicalCallServiceSolidIcon],svg[streamline-online-medical-call-service-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.879.593c0-.272.22-.493.492-.493h1.602c.272 0 .493.22.493.493V2.47h1.94c.272 0 .492.221.492.493v1.602c0 .272-.22.492-.492.492h-1.94v1.94a.493.493 0 0 1-.493.493H9.37A.493.493 0 0 1 8.88 7V5.06H7a.493.493 0 0 1-.493-.493V2.964c0-.272.22-.493.493-.493h1.879zm-.185 13.292a2.66 2.66 0 0 1-1.723-.409A23.9 23.9 0 0 1 .506 7.011a2.66 2.66 0 0 1 .404-3.32l.375-.375a.897.897 0 0 1 1.261 0l1.518 1.577a.887.887 0 0 1 0 1.251a.897.897 0 0 0 0 1.262l2.513 2.513a.897.897 0 0 0 1.261 0a.887.887 0 0 1 1.252 0l1.577 1.567a.897.897 0 0 1 0 1.261l-.375.374a2.66 2.66 0 0 1-1.598.764" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineOnlineMedicalCallServiceSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
