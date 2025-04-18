import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatBlueberriesIcon],svg[fluent-emoji-flat-blueberries-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#6B438B" d="M26.394 2.063c-.55.01-.818.448-.852.672l2.22 1.67l1.535 2.096c.285-.106.566-.375.616-.644c.079-.521-.061-.751-.258-.947c-.196-.196-.358-.247-.88-.253c.438-.252.718-.711.6-1.266c0 0-.123-.56-.69-.723c-.487-.151-1.019 0-1.338.588c.022-.269-.05-.627-.107-.706s-.297-.498-.846-.487"></svg:path><svg:circle cx="22.5" cy="9.5" r="7.5" fill="#8D65C5"></svg:circle><svg:circle cx="10" cy="11" r="8" fill="#6B438B"></svg:circle><svg:path fill="#AA7DE5" d="M9.253 5.284c-1.053-.574-2.003.188-2.264.24s-1.262-.407-2.066.47c-.803.876-.417 1.731-.427 2.097s-.741 1.335-.157 2.212c.584.876 1.67.876 1.962 1.053c.292.178.584.908 1.836.793s1.45-1.262 1.648-1.47c.199-.21 1.409-.71 1.409-1.837s-.887-1.555-.98-1.795c-.095-.24.093-1.19-.96-1.763"></svg:path><svg:circle cx="7.55" cy="8.545" r="2.25" fill="#533566"></svg:circle><svg:circle cx="19" cy="21" r="9" fill="#8D65C5"></svg:circle><svg:path fill="#BCA4EB" d="M23.852 14.838c-.562-.404-1.09-1.862-2.829-1.845s-2.073 1.195-2.618 1.652s-2.214.58-2.636 2.179s.51 2.267.808 3.11c.299.844-.088 1.828 1.037 2.864c1.124 1.037 2.653.3 3.409.3s2.32.755 3.304-.194s.896-2.372 1.124-2.97c.229-.597 1.67-1.933.72-3.514c-.948-1.582-1.756-1.178-2.319-1.582"></svg:path><svg:circle cx="21.01" cy="18.49" r="3.4" fill="#533566"></svg:circle></svg:g>`,
})
export class FluentEmojiFlatBlueberriesIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
