import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggPushChevronDownOIcon],svg[gg-push-chevron-down-o-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M16 14v2H8v-2zM7.757 8.703l1.415-1.415L12 10.117l2.828-2.829l1.415 1.415L12 12.945z"></svg:path><svg:path fill-rule="evenodd" d="M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1S1 5.925 1 12s4.925 11 11 11m0-2a9 9 0 1 0 0-18a9 9 0 0 0 0 18" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgPushChevronDownOIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
