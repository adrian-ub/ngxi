import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2ShareIcon],svg[fluent-mdl2-share-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1408 1536l128-128v384H0V512h128v1152h1280zm-128-512q-128 0-250 25t-237 75t-217 121t-192 163v-128q0-124 32-238t90-214t140-181t181-140t214-91t239-32V0l704 704l-704 704zm101-512q-56 0-105 1t-97 6t-96 18t-102 35q-87 36-161 92T687 791t-99 155t-60 176q168-112 359-169t393-57h128v203l395-395l-395-395v203z"></svg:path>`,
})
export class FluentMdl2ShareIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
