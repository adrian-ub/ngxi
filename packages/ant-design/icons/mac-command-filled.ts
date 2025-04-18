import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[antDesignMacCommandFilledIcon],svg[ant-design-mac-command-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M624 672c0 26.5 21.5 48 48 48s48-21.5 48-48s-21.5-48-48-48h-48zm96-320c0-26.5-21.5-48-48-48s-48 21.5-48 48v48h48c26.5 0 48-21.5 48-48"></svg:path><svg:path fill="currentColor" d="M928 64H96c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32M672 560c61.9 0 112 50.1 112 112s-50.1 112-112 112s-112-50.1-112-112v-48h-96v48c0 61.9-50.1 112-112 112s-112-50.1-112-112s50.1-112 112-112h48v-96h-48c-61.9 0-112-50.1-112-112s50.1-112 112-112s112 50.1 112 112v48h96v-48c0-61.9 50.1-112 112-112s112 50.1 112 112s-50.1 112-112 112h-48v96z"></svg:path><svg:path fill="currentColor" d="M464 464h96v96h-96zM352 304c-26.5 0-48 21.5-48 48s21.5 48 48 48h48v-48c0-26.5-21.5-48-48-48m-48 368c0 26.5 21.5 48 48 48s48-21.5 48-48v-48h-48c-26.5 0-48 21.5-48 48"></svg:path>`,
})
export class AntDesignMacCommandFilledIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
