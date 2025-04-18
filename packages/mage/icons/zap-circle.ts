import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageZapCircleIcon],svg[mage-zap-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M8.196 20.731a9.511 9.511 0 0 1 0-17.424m7.609 17.424a9.511 9.511 0 0 0 0-17.424"></svg:path><svg:path d="m12.859 4.333l-6.476 8.76a.6.6 0 0 0-.098.228a.5.5 0 0 0 0 .253a.47.47 0 0 0 .155.196a.4.4 0 0 0 .22.065h4.894l-.742 5.71a.17.17 0 0 0 0 .105a.16.16 0 0 0 .073.074a.14.14 0 0 0 .098 0a.13.13 0 0 0 .09-.057l6.475-8.76a.6.6 0 0 0 .098-.236a.5.5 0 0 0-.195-.44a.4.4 0 0 0-.22-.066h-4.894l.742-5.71a.17.17 0 0 0 0-.105a.16.16 0 0 0-.074-.074a.14.14 0 0 0-.097 0a.13.13 0 0 0-.05.057"></svg:path></svg:g>`,
})
export class MageZapCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
