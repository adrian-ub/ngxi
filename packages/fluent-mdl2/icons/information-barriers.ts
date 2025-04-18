import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2InformationBarriersIcon],svg[fluent-mdl2-information-barriers-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M384 128h1664v640h-128v320l-320-320h-64V640h117l139 139V640h128V256H512v299q-42 47-73 100t-52 113h-3zm576 1280q-93 0-174-35t-143-96t-96-142t-35-175q0-93 35-174t96-143t142-96t175-35q93 0 174 35t143 96t96 142t35 175q0 93-35 174t-96 143t-142 96t-175 35m320-448q0-66-25-124t-69-101t-102-69t-124-26q-47 0-92 13t-84 40l443 443q26-39 39-84t14-92m-640 0q0 66 25 124t68 102t102 69t125 25q47 0 92-13t84-40L693 784q-26 39-39 84t-14 92m896 576v-512h128v640H448l-320 320v-320H0v-640h384v128H128v384h128v139l139-139z"></svg:path>`,
})
export class FluentMdl2InformationBarriersIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
