import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiFlagMoldovaIcon],svg[twemoji-flag-moldova-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#DD2E44" d="M32 5h-8v26h8a4 4 0 0 0 4-4V9a4 4 0 0 0-4-4"></svg:path><svg:path fill="#265FB5" d="M4 5a4 4 0 0 0-4 4v18a4 4 0 0 0 4 4h8V5z"></svg:path><svg:path fill="#FFCC4D" d="M12 5h12v26H12z"></svg:path><svg:path fill="#DD2E44" d="M16 15h4v3h-4z"></svg:path><svg:path fill="#269" d="M16 18v2l2 1l2-1v-2z"></svg:path><svg:path fill="#A0724A" d="M16 11v1h1v2h2v-3zm3 10l-1 .625L17 21l-1 3l2 1l2-1zm-4-8l-1-1l-1 1v10l2-2v-7h1zm7-1l-1 1l-1 1h1v7l2 2V13z"></svg:path><svg:path fill="#FFCC4D" d="M16.234 17.594h.531V18h-.531zm3 0h.531V18h-.531z"></svg:path><svg:path fill="#77B255" d="M15.637 22.743c-.106.062-.263-.01-.35-.159l-2.232-3.866c-.086-.15-.07-.321.037-.383l.136-.078c.106-.062.263.01.349.159l2.232 3.867c.087.149.07.32-.036.382z"></svg:path><svg:path fill="#FFCC4D" d="M22.817 18.393c.107.061.125.23.039.377l-2.191 3.798c-.086.147-.24.216-.348.155l-.135-.078c-.106-.062-.124-.23-.039-.378l2.192-3.798c.085-.146.24-.217.347-.154z"></svg:path><svg:path fill="#DD2E44" d="m16 21l-1 1v1l1-1zm4 0v1l1 1v-1z"></svg:path><svg:path fill="#FFCC4D" d="m18 17l-1-1v2.958L18 20l1-1.042V16z"></svg:path>`,
})
export class TwemojiFlagMoldovaIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
