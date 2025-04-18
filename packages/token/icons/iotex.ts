import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenIotexIcon],svg[token-iotex-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.856 3.494v4.094l3.548-2.05z"></svg:path><svg:path fill="currentColor" d="M17.446 5.538v4.094l3.548-2.044z" opacity=".9"></svg:path><svg:path fill="currentColor" d="M13.892 7.588v4.093l3.554-2.05zm3.554 2.044v4.093l3.549-2.044zm-3.554 2.05v4.093l3.554-2.05z" opacity=".8"></svg:path><svg:path fill="currentColor" d="M17.446 13.725v4.094l3.548-2.044z"></svg:path><svg:path fill="currentColor" d="M4.705 7.45v4.093l3.548-2.05z" opacity=".4"></svg:path><svg:path fill="currentColor" d="M9.184 8.971v4.094l3.554-2.05z" opacity=".2"></svg:path><svg:path fill="currentColor" d="M6.554 11.56v4.095l3.548-2.05z" opacity=".3"></svg:path><svg:path fill="currentColor" d="M8.891 14.65v4.094l3.554-2.05z" opacity=".9"></svg:path><svg:path fill="currentColor" d="M13.857 16.413v4.093l3.555-2.05z" opacity=".7"></svg:path><svg:path fill="currentColor" d="M9.775 6.95v4.094L13.33 9z" opacity=".9"></svg:path><svg:path fill="currentColor" d="M13.892 3.494v4.094l-3.554-2.05z" opacity=".8"></svg:path><svg:path fill="currentColor" d="M9.775 5.228v4.094L6.227 7.277zm3.554 2.032v4.094l-3.548-2.05z" opacity=".6"></svg:path><svg:path fill="currentColor" d="M9.172 8.971v4.094l-3.554-2.05z" opacity=".95"></svg:path><svg:path fill="currentColor" d="M13.892 11.681v4.094l-3.554-2.05z" opacity=".6"></svg:path><svg:path fill="currentColor" d="M6.554 12.635v4.088L3 14.679z" opacity=".55"></svg:path><svg:path fill="currentColor" d="M20.994 7.588v4.093l-3.548-2.05z"></svg:path><svg:path fill="currentColor" d="M17.446 9.632v4.093l-3.554-2.044z" opacity=".95"></svg:path><svg:path fill="currentColor" d="M21 11.681v4.094l-3.554-2.05z" opacity=".9"></svg:path><svg:path fill="currentColor" d="M17.44 13.725v4.094l-3.548-2.044z" opacity=".7"></svg:path><svg:path fill="currentColor" d="M13.105 15.436v4.094l-3.554-2.044z" opacity=".4"></svg:path><svg:path fill="currentColor" d="M17.446 5.538v4.094l-3.554-2.044z"></svg:path>`,
})
export class TokenIotexIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
