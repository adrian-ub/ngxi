import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiUserSettingsIcon],svg[mynaui-user-settings-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M15 7.5a3 3 0 1 1-6 0a3 3 0 0 1 6 0m4.5 13c-.475-9.333-14.525-9.333-15 0"></svg:path><svg:path d="M11.192 17.565c.394-.21.591-.315.808-.315s.414.105.808.315l.134.072c.394.21.591.315.7.488s.108.383.108.804v.142c0 .42 0 .63-.108.804c-.109.173-.306.278-.7.488l-.134.072c-.394.21-.591.315-.808.315s-.414-.105-.808-.315l-.134-.072c-.394-.21-.591-.315-.7-.488s-.108-.383-.108-.804v-.142c0-.42 0-.63.108-.804c.109-.173.306-.278.7-.488z"></svg:path></svg:g>`,
})
export class MynauiUserSettingsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
