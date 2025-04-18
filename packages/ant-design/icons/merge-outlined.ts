import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[antDesignMergeOutlinedIcon],svg[ant-design-merge-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M248 752h72V264h-72z"></svg:path><svg:path d="M740 863c61.856 0 112-50.144 112-112c0-48.327-30.608-89.505-73.496-105.206l-.018-113.037c-.003-21.932-14.1-41.379-34.944-48.204L308.643 342.15l-22.405 68.425l420.25 137.608l.014 95.914C661.009 658.336 628 700.813 628 751c0 61.856 50.144 112 112 112m-456 61c61.856 0 112-50.144 112-112s-50.144-112-112-112s-112 50.144-112 112s50.144 112 112 112m456-125c-26.51 0-48-21.49-48-48s21.49-48 48-48s48 21.49 48 48s-21.49 48-48 48m-456 61c-26.51 0-48-21.49-48-48s21.49-48 48-48s48 21.49 48 48s-21.49 48-48 48m0-536c61.856 0 112-50.144 112-112s-50.144-112-112-112s-112 50.144-112 112s50.144 112 112 112m0-64c-26.51 0-48-21.49-48-48s21.49-48 48-48s48 21.49 48 48s-21.49 48-48 48"></svg:path></svg:g>`,
})
export class AntDesignMergeOutlinedIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
