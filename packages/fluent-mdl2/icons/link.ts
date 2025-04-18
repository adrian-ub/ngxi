import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2LinkIcon],svg[fluent-mdl2-link-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1536 768v128q76 0 145 17t123 56t84 99t32 148q0 66-25 124t-69 101t-102 69t-124 26h-512q-66 0-124-25t-101-69t-69-102t-26-124q0-87 31-147t85-99t122-56t146-18V768h-64q-93 0-174 35t-142 96t-96 142t-36 175q0 93 35 174t96 142t142 96t175 36h512q93 0 174-35t142-96t96-142t36-175q0-93-35-174t-96-142t-142-96t-175-36zm-640 512v-128q76 0 145-17t123-56t84-99t32-148q0-66-25-124t-69-101t-102-69t-124-26H448q-66 0-124 25t-101 69t-69 102t-26 124q0 87 31 147t85 99t122 56t146 18v128h-64q-93 0-174-35t-142-96t-96-142T0 832q0-93 35-174t96-142t142-96t175-36h512q93 0 174 35t142 96t96 142t36 175q0 93-35 174t-96 142t-142 96t-175 36z"></svg:path>`,
})
export class FluentMdl2LinkIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
