import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2MarkAsProtectedIcon],svg[fluent-mdl2-mark-as-protected-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1193 1611L489 907l283-283l704 704zm102-283L772 805L670 907l523 523zm369 592v-640h128v768H128V0h922L922 128H256v1792zm305-1481l-215 87l245 245l-268 268l-72-73l-89 86l-582-582l89-86l-70-69l268-268l241 242l91-212l74-74l362 362zm-275-242l-98 168l79 82l172-97zm124 574l-543-543l-110 121l543 543z"></svg:path>`,
})
export class FluentMdl2MarkAsProtectedIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
