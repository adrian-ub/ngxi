import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsAlttpTrackerIcon],svg[arcticons-alttp-tracker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M22.694 20.974h2.699m8.044 2.487v2.368h-.805v.803H29.32v1.446H18.766v-1.446h-3.205v-.803h-.837v-2.368"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M18.771 33.61v-1.416h-3.245V30.91h-1.504v-1.823H12.5l.016-10.174h1.522v-1.82h1.504v-1.287h3.245V14.39h10.426v1.416h3.245v1.287h1.504v1.82h1.522l.016 10.174h-1.522v1.823h-1.504v1.284h-3.245v1.416z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.149 22.679h1.831v.953h1.21v.888h3.523v-.888h1.228v-.953h1.9v-3.455H27.01v-1.326h-1.468v-.889h-2.986v.889h-1.507v1.326h-1.9z"></svg:path>`,
})
export class ArcticonsAlttpTrackerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
