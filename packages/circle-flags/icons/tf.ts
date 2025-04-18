import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsTfIcon],svg[circle-flags-tf-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsTf0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsTf0)"><svg:path fill="#0052b4" d="M256 0h256v512H0V256Z"></svg:path><svg:path fill="#eee" d="M0 0h256v256H0z"></svg:path><svg:path fill="#0052b4" d="M0 0h75v224H0z"></svg:path><svg:path fill="#d80027" d="M149 0h75v224h-75z"></svg:path><svg:path fill="#eee" d="m323 158l13 21h36v71l-27-43l-37 59h18l19-34l39 70l39-70l19 34h18l-37-59l-27 43v-39h16l12-20h-28v-12h36l13-21zm43 88h-40v14h40zm76 0h-40v14h40z"></svg:path><svg:path fill="#eee" d="m301 181l13 38l-34-23h42l-34 23zm166 0l13 38l-34-23h42l-34 23zM339 282l13 38l-34-23h42l-34 23zm90 0l13 38l-34-23h42l-34 23zm-45 34l13 38l-34-23h42l-34 23z"></svg:path></svg:g>`,
})
export class CircleFlagsTfIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
