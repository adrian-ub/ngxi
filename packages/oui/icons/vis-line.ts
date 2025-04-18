import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ouiVisLineIcon],svg[oui-vis-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.654 3.48c.248.225.552.389.888.467L11.24 9.43a2 2 0 0 0-.915-.404zM9.146 9.19a2 2 0 0 0-.769.64l-1.572-2a2 2 0 0 0 .785-.618zM5.581 7.956l-2.134 4.268a.5.5 0 0 1-.894-.448l2.134-4.268c.25.22.557.376.894.448M1 15h13.5a.5.5 0 1 1 0 1H.5a.5.5 0 0 1-.5-.5v-14a.5.5 0 0 1 1 0zm5-8a1 1 0 1 1 0-2a1 1 0 0 1 0 2m4 5a1 1 0 1 1 0-2a1 1 0 0 1 0 2m4-9a1 1 0 1 1 0-2a1 1 0 0 1 0 2"></svg:path>`,
})
export class OuiVisLineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
