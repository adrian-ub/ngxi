import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2SunAddIcon],svg[fluent-mdl2-sun-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960 512q93 0 174 35t143 96t96 142t35 175q0 93-35 174t-96 143t-142 96t-175 35q-93 0-174-35t-143-96t-96-142t-35-175q0-93 35-174t96-143t142-96t175-35m0 768q66 0 124-25t101-68t69-102t26-125t-25-124t-69-101t-102-69t-124-26t-124 25t-102 69t-69 102t-25 124t25 124t68 102t102 69t125 25m64-896H896V0h128zM896 1536h128v384H896zm640-640h384v128h-384zM384 1024H0V896h384zm123-426L236 326l90-90l272 271zm906 0l-91-91l272-271l90 90zm-906 724l91 91l-272 271l-90-90zm1541 470h-256v256h-128v-256h-256v-128h256v-256h128v256h256z"></svg:path>`,
})
export class FluentMdl2SunAddIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
