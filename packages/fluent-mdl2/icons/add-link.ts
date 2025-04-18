import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2AddLinkIcon],svg[fluent-mdl2-add-link-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M768 1216q0 66 25 124t68 102t102 69t125 25h192v128h-192q-93 0-174-35t-142-96t-96-142t-36-175q0-93 35-174t96-142t142-96t175-36h64v128h-64q-66 0-124 25t-102 69t-69 102t-25 124m768-320V768h64q93 0 174 35t142 96t96 142t36 175q0 88-33 169t-95 144v-313q0-66-25-124t-69-101t-102-69t-124-26zM960 384q93 0 174 35t142 96t96 142t36 175q0 93-35 174t-96 142t-142 96t-175 36h-64v-128h64q66 0 124-25t101-68t69-102t26-125t-25-124t-69-101t-102-69t-124-26H448q-66 0-124 25t-102 69t-69 102t-25 124t25 124t68 102t102 69t125 25h64v128h-64q-93 0-174-35t-142-96t-96-142T0 832q0-93 35-174t96-142t142-96t175-36zm1088 1280v128h-256v256h-128v-256h-256v-128h256v-256h128v256z"></svg:path>`,
})
export class FluentMdl2AddLinkIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
