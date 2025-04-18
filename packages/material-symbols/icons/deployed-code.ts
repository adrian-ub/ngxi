import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsDeployedCodeIcon],svg[material-symbols-deployed-code-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 21.725L4 17.7q-.475-.275-.737-.725t-.263-1v-7.95q0-.55.263-1T4 6.3l7-4.025Q11.475 2 12 2t1 .275L20 6.3q.475.275.738.725t.262 1v7.95q0 .55-.262 1T20 17.7l-7 4.025Q12.525 22 12 22t-1-.275m0-9.15v6.85L12 20l1-.575v-6.85L19 9.1V8.05l-1.075-.625L12 10.85L6.075 7.425L5 8.05V9.1z"></svg:path>`,
})
export class MaterialSymbolsDeployedCodeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
