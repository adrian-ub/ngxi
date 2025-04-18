import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2CheckedOutByYou12Icon],svg[fluent-mdl2-checked-out-by-you-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M939 171q129 0 248 33t224 95t190 147t147 190t95 224t34 249q0 129-33 248t-95 224t-147 191t-190 147t-224 95t-249 34q-129 0-249-33t-224-95t-190-147t-147-190t-95-225t-34-249t33-248t95-224t148-190t190-147t224-95t249-34m426 1365V853h-170v361L673 693L522 843l522 522H683v171z"></svg:path>`,
})
export class FluentMdl2CheckedOutByYou12Icon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
