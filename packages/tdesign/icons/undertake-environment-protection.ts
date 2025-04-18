import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignUndertakeEnvironmentProtectionIcon],svg[tdesign-undertake-environment-protection-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 3.513c.21.257.446.561.681.897C18.421 5.466 19 6.617 19 7.5a2 2 0 1 1-4 0c0-.883.579-2.034 1.319-3.09c.235-.336.471-.64.681-.897M17 .57l-.714.73h-.002l-.003.004l-.008.008l-.03.031l-.105.112a18 18 0 0 0-1.457 1.806C13.921 4.346 13 5.945 13 7.5a4 4 0 0 0 8 0c0-1.555-.921-3.154-1.681-4.238a18 18 0 0 0-1.562-1.917l-.03-.031l-.008-.01l-.003-.002l-.002-.002zM8.435 13.25a1.25 1.25 0 0 0-.885.364l-2.05 2.05V19.5h5.627l5.804-1.451l3.531-1.507a.555.555 0 0 0-.163-1.032a.6.6 0 0 0-.253.01l-.02.005L13.614 17H10v-2h3.125a.875.875 0 0 0 0-1.75zm7.552 1.152l3.552-.817a2.556 2.556 0 0 1 1.797 4.757l-.027.013l-3.74 1.596l-6.196 1.549H0v-7.25h4.086l2.052-2.052a3.25 3.25 0 0 1 2.3-.948h.002h-.002h4.687a2.875 2.875 0 0 1 2.862 3.152M3.5 16.25H2v3.25h1.5z"></svg:path>`,
})
export class TdesignUndertakeEnvironmentProtectionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
