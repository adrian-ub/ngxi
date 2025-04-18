import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uimHtml3Icon],svg[uim-html3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17.476 6.123l-.534 5.994l.002.033l-.002.074v-.001l-.38 4.192l-.041.372L12 18.037v.001l-.004.003l-4.512-1.258l-.306-3.465h2.213l.157 1.762l2.453.665l-.001.001l2.461-.675l.261-2.869H9.576l-.044-.485l-.101-1.136l-.052-.611h5.538l.202-2.231H6.682l-.044-.485l-.1-1.137l-.053-.61h11.044z" opacity=".5"></svg:path><svg:path fill="currentColor" d="m3.195 2l1.602 17.994L11.989 22l7.212-2.013L20.805 2zm14.281 4.123l-.534 5.994l.002.033l-.002.074v-.001l-.38 4.192l-.041.372L12 18.037v.001l-.004.003l-4.512-1.258l-.306-3.465h2.213l.157 1.762l2.453.665l-.001.001l2.461-.675l.261-2.869H9.576l-.044-.485l-.101-1.136l-.052-.611h5.538l.202-2.231H6.682l-.044-.485l-.1-1.137l-.053-.61h11.044z"></svg:path>`,
})
export class UimHtml3Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
