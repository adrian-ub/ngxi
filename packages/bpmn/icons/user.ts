import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bpmnUserIcon],svg[bpmn-user-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g stroke="currentColor"><svg:path fill="none" stroke-linecap="round" stroke-miterlimit="2.3" stroke-width="70" d="M722.297 656.594C722.317 737.279 768 840 821.517 880.15c14.362 10.775 1.471 7.63 18.999 18.584C704.714 939.974 528 1010 448 1160v420h1087.5v-420c-80-150-256.714-220.026-392.515-261.266c96-60 118.195-143.433 118.218-242.14C1260.89 520 1151.5 400 991.75 400S722.61 520 722.297 656.594z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M752 550c38.64 3.52 39.962-25.563 145.847-19.322c158.153 9.322 107.028 57.135 214.93 60.28c84.098-3.145 80.524-29.91 119.223-40.958c-64-70-127.297-114.535-240-150q-144 45-240 150z"></svg:path><svg:path fill="none" stroke-width="70" d="M684 1560v-280m614 280v-280M768 920s-37.712 122.288 0 160c105.595 105.595 342.405 105.595 448 0c37.712-37.712 0-160 0-160"></svg:path></svg:g>`,
})
export class BpmnUserIcon {
  readonly viewBox = input("0 0 2000 2000")
  readonly width = input("1em")
  readonly height = input("1em")
}
