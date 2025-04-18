import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2EditStyleIcon],svg[fluent-mdl2-edit-style-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1055 896H609l-85 256H384L768 0h128l330 988l-106 105zm-43-128L832 228L652 768zm581 131q42 0 78 14t63 41t42 61t16 79q0 39-15 76t-43 65l-717 717l-377 94l94-377l717-716q28-28 65-41t77-13m50 246q21-21 21-51q0-32-20-50t-52-19q-14 0-27 4t-23 14l-692 692l-34 135l135-34z"></svg:path>`,
})
export class FluentMdl2EditStyleIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
