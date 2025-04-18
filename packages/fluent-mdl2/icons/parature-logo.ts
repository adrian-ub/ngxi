import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2ParatureLogoIcon],svg[fluent-mdl2-parature-logo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1339 0q94 14 169 55t129 103t83 144t29 176q0 115-38 227t-106 211t-158 184t-195 146t-218 96t-227 35l-158 671l-296-920q-21-65-38-132t-17-136q0-45 9-86t22-83v-1h1q1-10 9-31t18-45t20-45t16-32q-8 31-12 62t-4 64q0 89 30 160t85 122t128 77t161 27q89 0 179-27t174-77t155-116t125-147t84-167t31-181q0-106-47-194T1339 0M785 685q-49 0-90-15t-72-43t-48-68t-18-91q0-77 37-149t98-129t136-90t151-34q49 0 91 15t72 43t48 69t17 91q0 51-17 101t-48 94t-70 82t-88 65t-98 43t-101 16"></svg:path>`,
})
export class FluentMdl2ParatureLogoIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
