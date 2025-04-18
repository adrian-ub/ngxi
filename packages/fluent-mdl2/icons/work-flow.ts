import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2WorkFlowIcon],svg[fluent-mdl2-work-flow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M640 512V215q-132 63-236 164T232 609l-119-49q70-137 176-247t241-185H256V0h512v512zm1176 97q-63-121-159-217t-218-160l49-118q144 74 258 188t189 258zM128 1024q0 68 10 135t31 132l-118 49Q0 1187 0 1024t51-316l119 49q-20 65-31 132t-11 135m103 415q63 121 160 218t218 160l-49 119q-144-75-258-189t-190-259zm1708-76l90 90l-557 558l-269-270l90-90l179 178zm-19-339q0-68-11-135t-31-132l119-49q51 153 51 316zM757 1879q65 21 132 31t135 10v128q-164 0-317-51z"></svg:path>`,
})
export class FluentMdl2WorkFlowIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
