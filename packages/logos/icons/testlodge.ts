import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosTestlodgeIcon],svg[logos-testlodge-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#C5CF21" d="M256 7.569L142.885 60.452l3.073 1.243L252.982 75.98l3.018-.513z"></svg:path><svg:path fill="#70B540" d="M256 75.467L142.885 60.452l1.891 2.78l55.969 42.391l2.612.297z"></svg:path><svg:path fill="#006D69" d="m203.357 105.92l-60.472-45.468l.44 4.024l42.495 129.038l2.95 2.312z"></svg:path><svg:path fill="#008CA9" d="m188.77 195.826l-60.773 22.952l14.888-158.326z"></svg:path><svg:path fill="#70B540" d="m127.982 38.006l.311-.596l.07-22.053l-.381-.489L37.21 0l1.582 1.402l85.818 35.563z"></svg:path><svg:path fill="#008CA9" d="m0 7.569l113.115 52.883l-3.073 1.243L3.018 75.98L0 75.467z"></svg:path><svg:path fill="#006D69" d="M127.982 38.006V14.868L218.79 0l-1.582 1.402l-85.818 35.563z"></svg:path><svg:path fill="#C5CF21" d="M127.854 38.006L37.21 0L0 7.569z"></svg:path><svg:path fill="#006D69" d="m0 75.467l113.115-15.015l-1.891 2.78l-55.969 42.391l-2.612.297z"></svg:path><svg:path fill="#C5CF21" d="m52.643 105.92l60.472-45.468l-.44 4.024L70.18 193.514l-2.951 2.312z"></svg:path><svg:path fill="#70B540" d="m67.229 195.826l60.768 22.952l-14.882-158.326z"></svg:path><svg:path fill="#008CA9" d="M128.146 38.006L218.79 0L256 7.569z"></svg:path>`,
})
export class LogosTestlodgeIcon {
  readonly viewBox = input("0 0 256 219")
  readonly width = input("1.17em")
  readonly height = input("1em")
}
