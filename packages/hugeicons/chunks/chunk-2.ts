import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsColorsIcon],svg[hugeicons-colors-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.58 9.71a6 6 0 0 0-7.16 3.58m7.16-3.58A6 6 0 1 1 12 19.972M17.58 9.71a6 6 0 1 0-11.16 0m4 3.58A6 6 0 0 0 10 15.5c0 1.777.773 3.374 2 4.472m-1.58-6.682a6.01 6.01 0 0 1-4-3.58m0 0A6 6 0 1 0 12 19.972" color="currentColor"></svg:path>`,
})
export class HugeiconsColorsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsColosseumIcon],svg[hugeicons-colosseum-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m11.893 20.865l.128-1.838m-4.105 1.897l.128-1.897m-1.989-3.504V13.52m3.977-4.765L8.133 4.167c-.24-.638-1.252-1.823-2.892-.706L3.025 4.97a1.96 1.96 0 0 0-.858 1.515c-.2 3.84-.229 10.365-.04 12.52c.004.724.299 2.051 2.559 1.986c0 0 14.227-.056 14.87 0s2.37-.125 2.37-1.987c.085-1.445.1-3.582.027-4.982c-.03-.566-.256-1.102-.688-1.464c-.814-.684-2.255-1.633-4.28-2.534l-.061 2.032l-3.508-.087m-11.412.884c1.48-1.816 6.36-4.274 9.413-4.213c.352.007.649.244.784.57l2.477 5.98m0 0l2.29 5.777m-2.29-5.777c-5.826-.59-10.58.83-12.643 1.873m12.643-1.873c2.262.23 4.422.599 7.316 1.801m-11.962-1.97V13.02" color="currentColor"></svg:path>`,
})
export class HugeiconsColosseumIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsColumnDeleteIcon],svg[hugeicons-column-delete-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5.5 3c1.404 0 2.107 0 2.611.38c.219.164.406.375.552.62C9 4.568 9 5.358 9 6.938v10.125c0 1.58 0 2.37-.337 2.937a2.1 2.1 0 0 1-.552.621c-.504.38-1.207.38-2.611.38s-2.107 0-2.611-.38a2.1 2.1 0 0 1-.552-.62C2 19.432 2 18.642 2 17.062V6.938c0-1.58 0-2.37.337-2.938a2.1 2.1 0 0 1 .552-.62C3.393 3 4.096 3 5.5 3M20 11.938v5.124c0 1.58 0 2.37-.337 2.938a2.1 2.1 0 0 1-.552.62c-.504.38-1.207.38-2.611.38s-2.107 0-2.611-.38a2.1 2.1 0 0 1-.552-.62C13 19.433 13 18.642 13 17.063V6.938c0-1.58 0-2.37.337-2.938M22 9l-6-6m6 0l-6 6" color="currentColor"></svg:path>`,
})
export class HugeiconsColumnDeleteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsColumnInsertIcon],svg[hugeicons-column-insert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.5 7c1.404 0 2.107 0 2.611.337a2 2 0 0 1 .552.552C21 8.393 21 9.096 21 10.5v8c0 1.404 0 2.107-.337 2.611a2 2 0 0 1-.552.552C19.607 22 18.904 22 17.5 22s-2.107 0-2.611-.337a2 2 0 0 1-.552-.552C14 20.607 14 19.904 14 18.5v-8c0-1.404 0-2.107.337-2.611a2 2 0 0 1 .552-.552C15.393 7 16.096 7 17.5 7m-11 0c1.404 0 2.107 0 2.611.337a2 2 0 0 1 .552.552C10 8.393 10 9.096 10 10.5v8c0 1.404 0 2.107-.337 2.611a2 2 0 0 1-.552.552C8.607 22 7.904 22 6.5 22s-2.107 0-2.611-.337a2 2 0 0 1-.552-.552C3 20.607 3 19.904 3 18.5v-8c0-1.404 0-2.107.337-2.611a2 2 0 0 1 .552-.552C4.393 7 5.096 7 6.5 7M15 2l-1.586 1.533c-.666.645-1 .967-1.414.967s-.748-.322-1.414-.967L9 2" color="currentColor"></svg:path>`,
})
export class HugeiconsColumnInsertIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsComet01Icon],svg[hugeicons-comet-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M4.05 10.05a7 7 0 0 0 9.9 9.9L17.899 16M12.1 2L6.5 7.6M22 11.9l-2 2"></svg:path><svg:path d="M11.121 12.879A3 3 0 1 1 6.88 17.12a3 3 0 0 1 4.242-4.242m-4.243.002L14 5.758M17.758 2L16 3.758m6 2.485l-6.636 6.637"></svg:path></svg:g>`,
})
export class HugeiconsComet01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsComet02Icon],svg[hugeicons-comet-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m15 2l-1.001 1.001M9 8l3-3m9.414 5.586a2 2 0 1 1-2.828 2.828a2 2 0 0 1 2.828-2.828M2.121 16.163l.902-2.846a2.7 2.7 0 0 1 1.393-1.599l1.092-.53c.854-.415 1.893-.121 2.384.674l1.021 1.655c.253.408.379.612.54.718a.88.88 0 0 0 .771.092c.183-.063.356-.232.702-.568c.816-.792 2.173-.662 2.812.27l.802 1.169a2.6 2.6 0 0 1 .355 2.208l-.235.797a2.68 2.68 0 0 1-1.409 1.65l-3.84 1.866a2.81 2.81 0 0 1-2.819-.215l-3.444-2.39a2.62 2.62 0 0 1-1.027-2.95M22 2l-8 8" color="currentColor"></svg:path>`,
})
export class HugeiconsComet02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsComingSoon01Icon],svg[hugeicons-coming-soon-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M5 16H3a1 1 0 0 0-1 1v.5a1 1 0 0 0 1 1h1a1 1 0 0 1 1 1v.5a1 1 0 0 1-1 1H2m6.5-5h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1m5.5 0h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1m8 0v5l-3.5-5v5M17 8A5 5 0 1 0 7 8a5 5 0 0 0 10 0"></svg:path><svg:path d="M13.5 8.5L12 8V5.5"></svg:path></svg:g>`,
})
export class HugeiconsComingSoon01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsComingSoon02Icon],svg[hugeicons-coming-soon-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M20.5 13.5a8.5 8.5 0 1 1-17 0a8.5 8.5 0 0 1 17 0"></svg:path><svg:path d="M12 19a5.5 5.5 0 1 1 0-11m1.5-4.5a1.5 1.5 0 1 0-3 0a1.5 1.5 0 0 0 3 0m-1.5 10L15 9"></svg:path></svg:g>`,
})
export class HugeiconsComingSoon02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCommandIcon],svg[hugeicons-command-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 9v6H9V9zm0 6h3a3 3 0 1 1-3 3zm-6 .002H6a3 3 0 1 0 3 3zM15 9V6a3 3 0 1 1 3 3zM9 9V6a3 3 0 1 0-3 3z" color="currentColor"></svg:path>`,
})
export class HugeiconsCommandIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCommandLineIcon],svg[hugeicons-command-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12 2.5c4.478 0 6.718 0 8.109 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109S16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391S2.5 16.479 2.5 12m0-3h19M7 6h.009M11 6h.009"></svg:path><svg:path d="m16 13l1.227 1.057c.515.445.773.667.773.943s-.258.498-.773.943L16 17m-8-4l-1.227 1.057C6.258 14.502 6 14.724 6 15s.258.498.773.943L8 17m5-5l-2 6"></svg:path></svg:g>`,
})
export class HugeiconsCommandLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsComment01Icon],svg[hugeicons-comment-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 13.5h8m-8-5h4M6.099 19q-1.949-.192-2.927-1.172C2 16.657 2 14.771 2 11v-.5c0-3.771 0-5.657 1.172-6.828S6.229 2.5 10 2.5h4c3.771 0 5.657 0 6.828 1.172S22 6.729 22 10.5v.5c0 3.771 0 5.657-1.172 6.828S17.771 19 14 19c-.56.012-1.007.055-1.445.155c-1.199.276-2.309.89-3.405 1.424c-1.563.762-2.344 1.143-2.834.786c-.938-.698-.021-2.863.184-3.865" color="currentColor"></svg:path>`,
})
export class HugeiconsComment01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsComment02Icon],svg[hugeicons-comment-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6.099 19q-1.949-.192-2.927-1.172C2 16.657 2 14.771 2 11v-.5c0-3.771 0-5.657 1.172-6.828S6.229 2.5 10 2.5h4c3.771 0 5.657 0 6.828 1.172S22 6.729 22 10.5v.5c0 3.771 0 5.657-1.172 6.828S17.771 19 14 19c-.56.012-1.007.055-1.445.155c-1.199.276-2.309.89-3.405 1.424c-1.563.762-2.344 1.143-2.834.786c-.938-.698-.021-2.863.184-3.865" color="currentColor"></svg:path>`,
})
export class HugeiconsComment02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsComment03Icon],svg[hugeicons-comment-03-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" d="M2 10.5C2 5.5 6 3 12 3s10 2.5 10 7.5S18 18 12 18v3S2 18 2 10.5m6-2h8m-8 4h4" color="currentColor"></svg:path>`,
})
export class HugeiconsComment03Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCommentAdd01Icon],svg[hugeicons-comment-add-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14 6h8m-4-4v8M6.099 19.5q-1.949-.192-2.927-1.172C2 17.157 2 15.271 2 11.5V11c0-3.771 0-5.657 1.172-6.828S6.229 3 10 3h1.5m-5 15c-.205 1.002-1.122 3.166-.184 3.865c.49.357 1.271-.024 2.834-.786c1.096-.535 2.206-1.148 3.405-1.424c.438-.1.885-.143 1.445-.155c3.771 0 5.657 0 6.828-1.172C21.947 17.21 21.998 15.44 22 12M8 14h6M8 9h3" color="currentColor"></svg:path>`,
})
export class HugeiconsCommentAdd01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCommentAdd02Icon],svg[hugeicons-comment-add-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14 6h8m-4-4v8M6.099 19.5q-1.949-.192-2.927-1.172C2 17.157 2 15.271 2 11.5V11c0-3.771 0-5.657 1.172-6.828S6.229 3 10 3h1.5m-5 15c-.205 1.002-1.122 3.166-.184 3.865c.49.357 1.271-.024 2.834-.786c1.096-.535 2.206-1.148 3.405-1.424c.438-.1.885-.143 1.445-.155c3.771 0 5.657 0 6.828-1.172C21.947 17.21 21.998 15.44 22 12" color="currentColor"></svg:path>`,
})
export class HugeiconsCommentAdd02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCommentAdd03Icon],svg[hugeicons-comment-add-03-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" d="M2 10.5C2 5.5 6 3 12 3s10 2.5 10 7.5S18 18 12 18v3S2 18 2 10.5m6.5 0h7M12 7v7" color="currentColor"></svg:path>`,
})
export class HugeiconsCommentAdd03Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCommentBlock01Icon],svg[hugeicons-comment-block-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6.099 19.5q-1.949-.192-2.927-1.172C2 17.157 2 15.271 2 11.5V11c0-3.771 0-5.657 1.172-6.828S6.229 3 10 3h1.5m-5 15c-.205 1.002-1.122 3.166-.184 3.865c.49.357 1.271-.024 2.834-.786c1.096-.535 2.206-1.148 3.405-1.424c.438-.1.885-.143 1.445-.155c3.771 0 5.657 0 6.828-1.172C21.947 17.21 21.998 15.44 22 12M8 14h6M8 9h3m4.2-5.8l5.6 5.6M22 6a4 4 0 1 0-8 0a4 4 0 0 0 8 0" color="currentColor"></svg:path>`,
})
export class HugeiconsCommentBlock01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCommentBlock02Icon],svg[hugeicons-comment-block-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6.099 19.5q-1.949-.192-2.927-1.172C2 17.157 2 15.271 2 11.5V11c0-3.771 0-5.657 1.172-6.828S6.229 3 10 3h1.5m-5 15c-.205 1.002-1.122 3.166-.184 3.865c.49.357 1.271-.024 2.834-.786c1.096-.535 2.206-1.148 3.405-1.424c.438-.1.885-.143 1.445-.155c3.771 0 5.657 0 6.828-1.172C21.947 17.21 21.998 15.44 22 12m-6.8-8.8l5.6 5.6M22 6a4 4 0 1 0-8 0a4 4 0 0 0 8 0" color="currentColor"></svg:path>`,
})
export class HugeiconsCommentBlock02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCommentBlock03Icon],svg[hugeicons-comment-block-03-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="m9.6 8.05l4.9 4.9m1.05-2.45a3.5 3.5 0 1 0-7 0a3.5 3.5 0 0 0 7 0"></svg:path><svg:path d="M2 10.5C2 5.5 6 3 12 3s10 2.5 10 7.5S18 18 12 18v3S2 18 2 10.5"></svg:path></svg:g>`,
})
export class HugeiconsCommentBlock03Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCommentRemove01Icon],svg[hugeicons-comment-remove-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m15 2l3.5 3.5m0 0L22 9m-3.5-3.5L22 2m-3.5 3.5L15 9M6.099 19.5q-1.949-.192-2.927-1.172C2 17.157 2 15.271 2 11.5V11c0-3.771 0-5.657 1.172-6.828S6.229 3 10 3h1.5m-5 15c-.205 1.002-1.122 3.166-.184 3.865c.49.357 1.271-.024 2.834-.786c1.096-.535 2.206-1.148 3.405-1.424c.438-.1.885-.143 1.445-.155c3.771 0 5.657 0 6.828-1.172C21.947 17.21 21.998 15.44 22 12M8 14h6M8 9h3" color="currentColor"></svg:path>`,
})
export class HugeiconsCommentRemove01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCommentRemove02Icon],svg[hugeicons-comment-remove-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m15 2l3.5 3.5m0 0L22 9m-3.5-3.5L22 2m-3.5 3.5L15 9M6.099 19.5q-1.949-.192-2.927-1.172C2 17.157 2 15.271 2 11.5V11c0-3.771 0-5.657 1.172-6.828S6.229 3 10 3h1.5m-5 15c-.205 1.002-1.122 3.166-.184 3.865c.49.357 1.271-.024 2.834-.786c1.096-.535 2.206-1.148 3.405-1.424c.438-.1.885-.143 1.445-.155c3.771 0 5.657 0 6.828-1.172C21.947 17.21 21.998 15.44 22 12" color="currentColor"></svg:path>`,
})
export class HugeiconsCommentRemove02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCommentRemove03Icon],svg[hugeicons-comment-remove-03-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" d="M2 10.5C2 5.5 6 3 12 3s10 2.5 10 7.5S18 18 12 18v3S2 18 2 10.5m7-3l3 3m0 0l3 3m-3-3l3-3m-3 3l-3 3" color="currentColor"></svg:path>`,
})
export class HugeiconsCommentRemove03Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCompassIcon],svg[hugeicons-compass-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:circle cx="12" cy="13" r="9"></svg:circle><svg:path d="M12 3.5V2m-2 0h4m.773 8.257c.733.727-.44 6.636-1.644 6.74c-1.01.088-1.325-1.904-1.538-2.536c-.21-.623-.443-.847-1.061-1.052c-1.57-.519-2.355-.779-2.51-1.19c-.412-1.089 5.816-2.89 6.753-1.962"></svg:path></svg:g>`,
})
export class HugeiconsCompassIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCompass01Icon],svg[hugeicons-compass-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M10 10L5 22m9-12l5 12M12 4V2"></svg:path><svg:circle cx="12" cy="7" r="3"></svg:circle><svg:path d="M3 13c1.99 3.024 5.28 5 9 5s7.01-1.976 9-5m-9 4v2"></svg:path></svg:g>`,
})
export class HugeiconsCompass01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsComplaintIcon],svg[hugeicons-complaint-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16.996 9.013h.008m0-2.004V4.505M22 6.792c0 2.646-2.24 4.792-5.004 4.792q-.488 0-.968-.09c-.23-.043-.344-.064-.425-.052c-.08.012-.194.072-.42.194a3.25 3.25 0 0 1-2.114.329c.274-.338.46-.743.543-1.177c.05-.265-.074-.523-.26-.712a4.67 4.67 0 0 1-1.36-3.284c0-2.646 2.24-4.792 5.004-4.792S22 4.146 22 6.792M7.502 22H4.718c-.323 0-.648-.046-.945-.173c-.966-.415-1.457-.964-1.685-1.307a.54.54 0 0 1 .03-.631c1.12-1.488 3.716-2.386 5.384-2.386M7.507 22h2.783c.324 0 .648-.046.945-.173c.967-.415 1.457-.964 1.686-1.307a.54.54 0 0 0-.03-.631c-1.12-1.488-3.716-2.386-5.384-2.386m2.778-5.214a2.776 2.776 0 0 1-2.778 2.772a2.776 2.776 0 0 1-2.78-2.772a2.776 2.776 0 0 1 2.78-2.773a2.776 2.776 0 0 1 2.778 2.773" color="currentColor"></svg:path>`,
})
export class HugeiconsComplaintIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsComputerIcon],svg[hugeicons-computer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14 2h-4c-3.28 0-4.919 0-6.081.814a4.5 4.5 0 0 0-1.105 1.105C2 5.08 2 6.72 2 10s0 4.919.814 6.081a4.5 4.5 0 0 0 1.105 1.105C5.08 18 6.72 18 10 18h4c3.28 0 4.919 0 6.081-.814a4.5 4.5 0 0 0 1.105-1.105C22 14.92 22 13.28 22 10s0-4.919-.814-6.081a4.5 4.5 0 0 0-1.105-1.105C18.92 2 17.28 2 14 2m-3 13h2m1.5 7l-.316-.419c-.71-.944-.887-2.387-.437-3.581M9.5 22l.316-.419c.71-.944.887-2.387.437-3.581M7 22h10" color="currentColor"></svg:path>`,
})
export class HugeiconsComputerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsComputerActivityIcon],svg[hugeicons-computer-activity-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M14 21h2m-2 0a1.5 1.5 0 0 1-1.5-1.5V17H12m2 4h-4m0 0H8m2 0a1.5 1.5 0 0 0 1.5-1.5V17h.5m0 0v4m4-18H8c-2.828 0-4.243 0-5.121.879C2 4.757 2 6.172 2 9v2c0 2.828 0 4.243.879 5.121C3.757 17 5.172 17 8 17h8c2.828 0 4.243 0 5.121-.879C22 15.243 22 13.828 22 11V9c0-2.828 0-4.243-.879-5.121C20.243 3 18.828 3 16 3"></svg:path><svg:path d="M7 10h2.5l1.5 3l2-6l1.5 3H17"></svg:path></svg:g>`,
})
export class HugeiconsComputerActivityIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsComputerAddIcon],svg[hugeicons-computer-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11.505 2h-1.501c-3.281 0-4.921 0-6.084.814a4.5 4.5 0 0 0-1.106 1.105C2 5.08 2 6.72 2 10s0 4.919.814 6.081a4.5 4.5 0 0 0 1.106 1.105C5.083 18 6.723 18 10.004 18h4.002c3.28 0 4.921 0 6.084-.814a4.5 4.5 0 0 0 1.105-1.105c.63-.897.772-2.08.805-4.081m-8-6h4m0 0h4m-4 0V2m0 4v4m-7 5h2m-1 3v4m-4 0h8" color="currentColor"></svg:path>`,
})
export class HugeiconsComputerAddIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsComputerArrowDownIcon],svg[hugeicons-computer-arrow-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M14 21h2m-2 0a1.5 1.5 0 0 1-1.5-1.5V17H12m2 4h-4m0 0H8m2 0a1.5 1.5 0 0 0 1.5-1.5V17h.5m0 0v4m4-18H8c-2.828 0-4.243 0-5.121.879C2 4.757 2 6.172 2 9v2c0 2.828 0 4.243.879 5.121C3.757 17 5.172 17 8 17h8c2.828 0 4.243 0 5.121-.879C22 15.243 22 13.828 22 11V9c0-2.828 0-4.243-.879-5.121C20.243 3 18.828 3 16 3"></svg:path><svg:path d="M9 10s2.21 3 3 3s3-3 3-3m-3 2.5V7"></svg:path></svg:g>`,
})
export class HugeiconsComputerArrowDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsComputerArrowUpIcon],svg[hugeicons-computer-arrow-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M16 3H8c-2.828 0-4.243 0-5.121.879C2 4.757 2 6.172 2 9v2c0 2.828 0 4.243.879 5.121C3.757 17 5.172 17 8 17h8c2.828 0 4.243 0 5.121-.879C22 15.243 22 13.828 22 11V9c0-2.828 0-4.243-.879-5.121C20.243 3 18.828 3 16 3m-1.75 18H16m-1.75 0a1.5 1.5 0 0 1-1.5-1.5V17H12m2.25 4h-4.5m0 0H8m1.75 0a1.5 1.5 0 0 0 1.5-1.5V17H12m0 0v4"></svg:path><svg:path d="M9 10s2.21-3 3-3s3 3 3 3m-3-2.5V13"></svg:path></svg:g>`,
})
export class HugeiconsComputerArrowUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsComputerChartDownIcon],svg[hugeicons-computer-chart-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M14 21h2m-2 0a1.5 1.5 0 0 1-1.5-1.5V17H12m2 4h-4m0 0H8m2 0a1.5 1.5 0 0 0 1.5-1.5V17h.5m0 0v4m4-18H8c-2.828 0-4.243 0-5.121.879C2 4.757 2 6.172 2 9v2c0 2.828 0 4.243.879 5.121C3.757 17 5.172 17 8 17h8c2.828 0 4.243 0 5.121-.879C22 15.243 22 13.828 22 11V9c0-2.828 0-4.243-.879-5.121C20.243 3 18.828 3 16 3"></svg:path><svg:path d="m16 12l-2.5-2.5c-.273-.273-.409-.409-.556-.482a1 1 0 0 0-.888 0c-.147.073-.283.21-.556.482c-.273.273-.409.409-.556.482a1 1 0 0 1-.888 0c-.147-.073-.283-.21-.556-.482L7 7m10 3v1.714c0 .606 0 .91-.188 1.098c-.189.188-.492.188-1.098.188H14"></svg:path></svg:g>`,
})
export class HugeiconsComputerChartDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsComputerChartUpIcon],svg[hugeicons-computer-chart-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M14 21h2m-2 0a1.5 1.5 0 0 1-1.5-1.5V17H12m2 4h-4m0 0H8m2 0a1.5 1.5 0 0 0 1.5-1.5V17h.5m0 0v4m4-18H8c-2.828 0-4.243 0-5.121.879C2 4.757 2 6.172 2 9v2c0 2.828 0 4.243.879 5.121C3.757 17 5.172 17 8 17h8c2.828 0 4.243 0 5.121-.879C22 15.243 22 13.828 22 11V9c0-2.828 0-4.243-.879-5.121C20.243 3 18.828 3 16 3"></svg:path><svg:path d="m16 8l-2.5 2.5c-.273.273-.409.409-.556.482a1 1 0 0 1-.888 0c-.147-.073-.283-.21-.556-.482c-.273-.273-.409-.409-.556-.482a1 1 0 0 0-.888 0c-.147.073-.283.21-.556.482L7 13m7-6h1.714c.606 0 .91 0 1.098.188c.188.189.188.492.188 1.098V10"></svg:path></svg:g>`,
})
export class HugeiconsComputerChartUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsComputerCheckIcon],svg[hugeicons-computer-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M21.999 11c-.008 2.626-.086 4.044-.813 5.081a4.5 4.5 0 0 1-1.105 1.105C18.92 18 17.28 18 14 18h-4c-3.28 0-4.919 0-6.081-.814a4.5 4.5 0 0 1-1.105-1.105C2 14.92 2 13.28 2 10s0-4.919.814-6.081a4.5 4.5 0 0 1 1.105-1.105C5.08 2 6.72 2 10 2h1.5"></svg:path><svg:path d="M14 6s1 0 2 2c0 0 3.177-5 6-6M11 15h2m-1 3v4m-4 0h8"></svg:path></svg:g>`,
})
export class HugeiconsComputerCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsComputerCloudIcon],svg[hugeicons-computer-cloud-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M11 2h-1c-3.28 0-4.919 0-6.081.814a4.5 4.5 0 0 0-1.105 1.105C2 5.08 2 6.72 2 10s0 4.919.814 6.081a4.5 4.5 0 0 0 1.105 1.105C5.08 18 6.72 18 10 18h4c3.28 0 4.919 0 6.081-.814a4.5 4.5 0 0 0 1.105-1.105c.68-.97.792-2.272.81-4.581"></svg:path><svg:path d="M13 6.667C13 7.955 14.007 9 15.25 9h4.725C21.093 9 22 8.06 22 6.9s-.917-2.1-2.035-2.1C20.09 3.364 18.98 2 17.5 2c-1.294 0-2.357 1.03-2.466 2.344C13.893 4.457 13 5.454 13 6.667M11 15h2m-1 3v4m-4 0h8"></svg:path></svg:g>`,
})
export class HugeiconsComputerCloudIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsComputerDesk01Icon],svg[hugeicons-computer-desk-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M22 12H2m18 5h-4c-1.886 0-2.828 0-3.414-.586S12 14.886 12 13v-1m-8 0v10m16-10v10M7 6V5c0-1.414 0-2.121.44-2.56C7.878 2 8.585 2 10 2h4c1.414 0 2.121 0 2.56.44C17 2.878 17 3.585 17 5v1c0 1.414 0 2.121-.44 2.56C16.122 9 15.415 9 14 9h-4c-1.414 0-2.121 0-2.56-.44C7 8.122 7 7.415 7 6m6.5 3l.5 3m-3.5-3l-.5 3" color="currentColor"></svg:path>`,
})
export class HugeiconsComputerDesk01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsComputerDesk02Icon],svg[hugeicons-computer-desk-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M22 12H2m15 0V8c0-.827.173-1 1-1h1c.827 0 1 .173 1 1v4m0 5h-4c-1.886 0-2.828 0-3.414-.586S12 14.886 12 13v-1m-8 0v10m16-10v10M3 6V5c0-1.414 0-2.121.44-2.56C3.878 2 4.585 2 6 2h4c1.414 0 2.121 0 2.56.44C13 2.878 13 3.585 13 5v1c0 1.414 0 2.121-.44 2.56C12.122 9 11.415 9 10 9H6c-1.414 0-2.121 0-2.56-.44C3 8.122 3 7.415 3 6m6.5 3l.5 3M6.5 9L6 12" color="currentColor"></svg:path>`,
})
export class HugeiconsComputerDesk02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsComputerDesk03Icon],svg[hugeicons-computer-desk-03-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M22 12H2m17.765 0l.61-1.674c.46-1.263.69-1.894.609-2.457a2.15 2.15 0 0 0-.488-1.091c-.355-.415-.951-.602-2.143-.976m0 0c0 .321 0 .482-.038.623c-.055.208-.168.39-.323.524c-.106.091-.242.15-.513.27l-.252.11c-.525.23-.787.346-.982.23a.5.5 0 0 1-.074-.055C16 7.349 16 7.038 16 6.417v-1.23c0-.62 0-.93.17-1.086a.5.5 0 0 1 .075-.055c.195-.117.457-.001.982.23l.252.11c.271.119.407.178.513.27c.155.133.268.316.323.523c.038.142.038.303.038.623M20 17h-4c-1.886 0-2.828 0-3.414-.586S12 14.886 12 13v-1m-8 0v10m16-10v10M3 6V5c0-1.414 0-2.121.44-2.56C3.878 2 4.585 2 6 2h4c1.414 0 2.121 0 2.56.44C13 2.878 13 3.585 13 5v1c0 1.414 0 2.121-.44 2.56C12.122 9 11.415 9 10 9H6c-1.414 0-2.121 0-2.56-.44C3 8.122 3 7.415 3 6m6.5 3l.5 3M6.5 9L6 12" color="currentColor"></svg:path>`,
})
export class HugeiconsComputerDesk03Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsComputerDollarIcon],svg[hugeicons-computer-dollar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="m14.5 22l-.316-.419c-.71-.944-.887-2.387-.437-3.581M9.5 22l.316-.419c.71-.944.887-2.387.437-3.581M7 22h10M12 7c-1.105 0-2 .672-2 1.5s.895 1.5 2 1.5s2 .672 2 1.5s-.895 1.5-2 1.5m0-6c.87 0 1.612.417 1.886 1M12 7V6m0 7c-.87 0-1.612-.417-1.886-1M12 13v1"></svg:path><svg:path d="M14 2h-4c-3.28 0-4.919 0-6.081.814a4.5 4.5 0 0 0-1.105 1.105C2 5.08 2 6.72 2 10s0 4.919.814 6.081a4.5 4.5 0 0 0 1.105 1.105C5.08 18 6.72 18 10 18h4c3.28 0 4.919 0 6.081-.814a4.5 4.5 0 0 0 1.105-1.105C22 14.92 22 13.28 22 10s0-4.919-.814-6.081a4.5 4.5 0 0 0-1.105-1.105C18.92 2 17.28 2 14 2"></svg:path></svg:g>`,
})
export class HugeiconsComputerDollarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsComputerEthernetIcon],svg[hugeicons-computer-ethernet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" d="M14 21h2m-2 0a1.5 1.5 0 0 1-1.5-1.5V17H12m2 4h-4m0 0H8m2 0a1.5 1.5 0 0 0 1.5-1.5V17h.5m0 0v4m2-18H8c-2.828 0-4.243 0-5.121.879C2 4.757 2 6.172 2 9v2c0 2.828 0 4.243.879 5.121C3.757 17 5.172 17 8 17h8.5m2.5-7h1a2 2 0 0 0 2-2V5.5h-5V8a2 2 0 0 0 2 2m.5 0v11M17 5.5h5v-2a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 0-.5.5z" color="currentColor"></svg:path>`,
})
export class HugeiconsComputerEthernetIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsComputerPhoneSyncIcon],svg[hugeicons-computer-phone-sync-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M20 17.186C18.843 18 17.21 18 13.946 18H9.964c-3.264 0-4.897 0-6.054-.814a4.5 4.5 0 0 1-1.1-1.105C2 14.92 2 13.28 2 10s0-4.919.81-6.081c.3-.43.672-.804 1.1-1.105C5.067 2 6.7 2 9.964 2M12 18v4m-4 0h8"></svg:path><svg:path d="M18 2c1.886 0 2.828 0 3.414.586S22 4.114 22 6v4c0 1.886 0 2.828-.586 3.414S19.886 14 18 14h-1c-1.886 0-2.828 0-3.414-.586S13 11.886 13 10V6c0-1.886 0-2.828.586-3.414S15.114 2 17 2zm-.5 9.5h.009"></svg:path></svg:g>`,
})
export class HugeiconsComputerPhoneSyncIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsComputerProgramming01Icon],svg[hugeicons-computer-programming-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M14 2h-4c-3.28 0-4.919 0-6.081.814a4.5 4.5 0 0 0-1.105 1.105C2 5.08 2 6.72 2 10s0 4.919.814 6.081a4.5 4.5 0 0 0 1.105 1.105C5.08 18 6.72 18 10 18h4c3.28 0 4.919 0 6.081-.814a4.5 4.5 0 0 0 1.105-1.105C22 14.92 22 13.28 22 10s0-4.919-.814-6.081a4.5 4.5 0 0 0-1.105-1.105C18.92 2 17.28 2 14 2"></svg:path><svg:path d="m16 8l1.227 1.057c.515.445.773.667.773.943s-.258.498-.773.943L16 12M8 8L6.773 9.057C6.258 9.502 6 9.724 6 10s.258.498.773.943L8 12m5-5l-2 6m3.656 9l-.42-.419a3.1 3.1 0 0 1-.58-3.581M9 22l.42-.419A3.1 3.1 0 0 0 10 18m-3 4h10"></svg:path></svg:g>`,
})
export class HugeiconsComputerProgramming01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsComputerProgramming02Icon],svg[hugeicons-computer-programming-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M14 2h-4c-3.28 0-4.919 0-6.081.814a4.5 4.5 0 0 0-1.105 1.105C2 5.08 2 6.72 2 10s0 4.919.814 6.081a4.5 4.5 0 0 0 1.105 1.105C5.08 18 6.72 18 10 18h4c3.28 0 4.919 0 6.081-.814a4.5 4.5 0 0 0 1.105-1.105C22 14.92 22 13.28 22 10"></svg:path><svg:path d="M18.83 2.754c.298-.323.447-.484.605-.578a1.24 1.24 0 0 1 1.241-.02c.161.09.315.247.622.561s.46.47.548.635c.212.397.205.878-.018 1.268c-.092.162-.25.314-.566.619L17.5 8.862c-.599.577-.898.865-1.273 1.011c-.374.147-.786.136-1.609.114l-.112-.002c-.25-.007-.376-.01-.449-.093c-.072-.083-.062-.21-.043-.466l.011-.138c.056-.719.084-1.078.224-1.4c.14-.324.383-.586.867-1.11zM14.656 22l-.42-.419a3.1 3.1 0 0 1-.58-3.581M9 22l.42-.419A3.1 3.1 0 0 0 10 18m-3 4h10M8 10h7"></svg:path></svg:g>`,
})
export class HugeiconsComputerProgramming02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsComputerProtectionIcon],svg[hugeicons-computer-protection-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M10.014 2c-3.778 0-5.667 0-6.84 1.172S2 6.229 2 10s0 5.657 1.174 6.828S6.236 18 10.014 18h4.007c3.778 0 5.667 0 6.84-1.172c.81-.808 1.061-1.956 1.139-3.828m-10 5v4m-4 0h8m-5-7h2"></svg:path><svg:path d="M17.5 2c-1.426 0-2.35.909-3.442 1.24c-.444.134-.666.202-.756.297s-.116.233-.169.51c-.563 2.969.668 5.713 3.605 6.78c.315.116.473.173.763.173s.447-.057.763-.172c2.936-1.068 4.166-3.812 3.603-6.78c-.053-.278-.08-.417-.169-.511s-.312-.163-.756-.297C19.849 2.909 18.924 2 17.499 2"></svg:path></svg:g>`,
})
export class HugeiconsComputerProtectionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsComputerRemoveIcon],svg[hugeicons-computer-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11.5 2h-1.496c-3.281 0-4.921 0-6.084.814a4.5 4.5 0 0 0-1.106 1.105C2 5.08 2 6.72 2 10s0 4.919.814 6.081a4.5 4.5 0 0 0 1.106 1.105C5.083 18 6.723 18 10.004 18h4.002c3.28 0 4.921 0 6.084-.814a4.5 4.5 0 0 0 1.105-1.105c.63-.897.772-2.08.805-4.081M15 2l3.5 3.5m0 0L22 9m-3.5-3.5L22 2m-3.5 3.5L15 9m-4 6h2m-1 3v4m-4 0h8" color="currentColor"></svg:path>`,
})
export class HugeiconsComputerRemoveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsComputerScreenShareIcon],svg[hugeicons-computer-screen-share-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M14 21h2m-2 0a1.5 1.5 0 0 1-1.5-1.5V17H12m2 4h-4m0 0H8m2 0a1.5 1.5 0 0 0 1.5-1.5V17h.5m0 0v4m4-18H8c-2.828 0-4.243 0-5.121.879C2 4.757 2 6.172 2 9v2c0 2.828 0 4.243.879 5.121C3.757 17 5.172 17 8 17h8c2.828 0 4.243 0 5.121-.879C22 15.243 22 13.828 22 11V9c0-2.828 0-4.243-.879-5.121C20.243 3 18.828 3 16 3"></svg:path><svg:path d="M13.5 12S16 10.159 16 9.5S13.5 7 13.5 7m2 2.5h-3c-1.405 0-2.107 0-2.611.337a2 2 0 0 0-.552.552C9 10.893 9 11.596 9 13"></svg:path></svg:g>`,
})
export class HugeiconsComputerScreenShareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsComputerSettingsIcon],svg[hugeicons-computer-settings-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M11.003 2h-.997c-3.282 0-4.922 0-6.086.814a4.5 4.5 0 0 0-1.106 1.105C2 5.08 2 6.72 2 10s0 4.919.814 6.081c.302.43.676.804 1.106 1.105C5.084 18 6.724 18 10.006 18h4.003c3.282 0 4.923 0 6.086-.814c.43-.3.805-.675 1.106-1.105c.615-.877.765-1.987.799-3.081"></svg:path><svg:path d="M18 9.714V11m0-1.286a3.36 3.36 0 0 1-2.774-1.43M18 9.713a3.36 3.36 0 0 0 2.774-1.43M18 3.285c1.157 0 2.176.568 2.774 1.43M18 3.287a3.36 3.36 0 0 0-2.774 1.43M18 3.287V2m4 1.929l-1.226.788M14 9.07l1.226-.788M14 3.93l1.226.788M22 9.07l-1.226-.788m0-3.566a3.12 3.12 0 0 1 0 3.566m-5.548-3.566a3.12 3.12 0 0 0 0 3.566M11 15h2m-1 3v4m-4 0h8"></svg:path></svg:g>`,
})
export class HugeiconsComputerSettingsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsComputerTerminal01Icon],svg[hugeicons-computer-terminal-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="m7 7l1.227 1.057C8.742 8.502 9 8.724 9 9s-.258.498-.773.943L7 11m4 0h3"></svg:path><svg:path d="M12 21c3.75 0 5.625 0 6.939-.955a5 5 0 0 0 1.106-1.106C21 17.625 21 15.749 21 12s0-5.625-.955-6.939a5 5 0 0 0-1.106-1.106C17.625 3 15.749 3 12 3s-5.625 0-6.939.955A5 5 0 0 0 3.955 5.06C3 6.375 3 8.251 3 12s0 5.625.955 6.939a5 5 0 0 0 1.106 1.106C6.375 21 8.251 21 12 21"></svg:path></svg:g>`,
})
export class HugeiconsComputerTerminal01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsComputerTerminal02Icon],svg[hugeicons-computer-terminal-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" d="M12 21c3.75 0 5.625 0 6.939-.955a5 5 0 0 0 1.106-1.106C21 17.625 21 15.749 21 12s0-5.625-.955-6.939a5 5 0 0 0-1.106-1.106C17.625 3 15.749 3 12 3s-5.625 0-6.939.955A5 5 0 0 0 3.955 5.06C3 6.375 3 8.251 3 12s0 5.625.955 6.939a5 5 0 0 0 1.106 1.106C6.375 21 8.251 21 12 21m4-14L8 17" color="currentColor"></svg:path>`,
})
export class HugeiconsComputerTerminal02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsComputerUserIcon],svg[hugeicons-computer-user-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M14 21h2m-2 0a1.5 1.5 0 0 1-1.5-1.5V17H12m2 4h-4m0 0H8m2 0a1.5 1.5 0 0 0 1.5-1.5V17h.5m0 0v4m4-18H8c-2.828 0-4.243 0-5.121.879C2 4.757 2 6.172 2 9v2c0 2.828 0 4.243.879 5.121C3.757 17 5.172 17 8 17h8c2.828 0 4.243 0 5.121-.879C22 15.243 22 13.828 22 11V9c0-2.828 0-4.243-.879-5.121C20.243 3 18.828 3 16 3"></svg:path><svg:path d="M12 10.5a2 2 0 1 0 0-4a2 2 0 0 0 0 4m0 0a3 3 0 0 0-3 3m3-3a3 3 0 0 1 3 3"></svg:path></svg:g>`,
})
export class HugeiconsComputerUserIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsComputerVideoIcon],svg[hugeicons-computer-video-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M11 15h2m-1 3v4m-4 0h8M9 2.001c-2.625.008-4.043.086-5.081.813a4.5 4.5 0 0 0-1.105 1.105C2 5.08 2 6.72 2 10s0 4.919.814 6.081a4.5 4.5 0 0 0 1.105 1.105C5.08 18 6.72 18 10 18h4c3.28 0 4.919 0 6.081-.814a4.5 4.5 0 0 0 1.105-1.105c.727-1.037.805-2.456.813-5.081"></svg:path><svg:path d="m19.5 4.146l.063-.045c1.058-.764 1.587-1.146 2.012-.961S22 3.935 22 5.158v.684c0 1.223 0 1.834-.425 2.018c-.425.185-.954-.197-2.012-.96l-.063-.046M15.5 9h.5c1.65 0 2.475 0 2.987-.448c.513-.449.513-1.17.513-2.614v-.875c0-1.444 0-2.166-.513-2.615C18.475 2 17.65 2 16 2h-.5c-1.65 0-2.475 0-2.987.448C12 2.897 12 3.618 12 5.063v.875c0 1.443 0 2.165.513 2.614C13.025 9 13.85 9 15.5 9"></svg:path></svg:g>`,
})
export class HugeiconsComputerVideoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsComputerVideoCallIcon],svg[hugeicons-computer-video-call-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M14 2h-4c-3.28 0-4.919 0-6.081.814a4.5 4.5 0 0 0-1.105 1.105C2 5.08 2 6.72 2 10s0 4.919.814 6.081a4.5 4.5 0 0 0 1.105 1.105C5.08 18 6.72 18 10 18h4c3.28 0 4.919 0 6.081-.814a4.5 4.5 0 0 0 1.105-1.105C22 14.92 22 13.28 22 10s0-4.919-.814-6.081a4.5 4.5 0 0 0-1.105-1.105C18.92 2 17.28 2 14 2m.5 20l-.316-.419c-.71-.944-.887-2.387-.437-3.581M9.5 22l.316-.419c.71-.944.887-2.387.437-3.581M7 22h10"></svg:path><svg:path d="M8 14c1.838-2.595 6.119-2.737 8 0m-2-6a2 2 0 1 1-4 0a2 2 0 0 1 4 0"></svg:path></svg:g>`,
})
export class HugeiconsComputerVideoCallIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCone01Icon],svg[hugeicons-cone-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M21 18c0-2.21-4.03-4-9-4s-9 1.79-9 4s4.03 4 9 4s9-1.79 9-4"></svg:path><svg:path d="m20.5 16.5l-4.344-9.106C14.343 3.798 13.436 2 12 2S9.657 3.798 7.844 7.394L3.5 16.5"></svg:path></svg:g>`,
})
export class HugeiconsCone01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCone02Icon],svg[hugeicons-cone-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M12 19h3m0 0a3 3 0 1 0-6 0a3 3 0 0 0 6 0M12 3v3m0 6h.009M12 9h.009"></svg:path><svg:path d="M2.949 11.496C4.922 14.216 8.24 16 12 16s7.078-1.784 9.051-4.504c.709-.976 1.063-1.464.916-2.314s-.783-1.29-2.057-2.17l-5.51-3.81C13.239 2.401 12.659 2 12 2c-.66 0-1.239.4-2.399 1.202L4.09 7.012c-1.274.88-1.91 1.32-2.057 2.17s.207 1.338.916 2.314"></svg:path></svg:g>`,
})
export class HugeiconsCone02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsConferenceIcon],svg[hugeicons-conference-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M19 15V9c0-2.828 0-4.243-.879-5.121C17.243 3 15.828 3 13 3h-2c-2.828 0-4.243 0-5.121.879C5 4.757 5 6.172 5 9v6c0 2.828 0 4.243.879 5.121C6.757 21 8.172 21 11 21h2c2.828 0 4.243 0 5.121-.879C19 19.243 19 17.828 19 15m3-8v10M2 7v10"></svg:path><svg:path d="M14 8.509a2 2 0 1 1-4 0a2 2 0 0 1 4 0m-5.956 7.223c1.059-1.63 2.74-2.24 3.955-2.238c1.217 0 2.848.609 3.906 2.238c.069.106.088.235.026.345c-.248.439-1.016 1.31-1.571 1.369c-.638.067-2.306.077-2.36.077c-.052 0-1.772-.01-2.41-.077c-.555-.06-1.324-.93-1.571-1.37c-.062-.109-.043-.238.025-.344"></svg:path></svg:g>`,
})
export class HugeiconsConferenceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsConfiguration01Icon],svg[hugeicons-configuration-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M2.256 15.632c.034-.323.268-.583.736-1.104l1.031-1.153c.252-.32.431-.875.431-1.375s-.179-1.056-.43-1.375L2.991 9.472c-.468-.52-.702-.781-.736-1.104s.14-.627.49-1.234l.494-.857c.373-.648.56-.972.878-1.1c.317-.13.676-.028 1.395.176l1.22.343c.459.106.94.046 1.358-.169l.337-.194a2 2 0 0 0 .788-.968l.334-.997c.22-.66.33-.99.591-1.18C10.403 2 10.75 2 11.444 2h1.115c.694 0 1.042 0 1.303.189s.371.519.59 1.179l.335.997a2 2 0 0 0 .788.968l.337.194c.418.215.9.275 1.358.17l1.22-.344c.719-.204 1.078-.306 1.395-.177c.318.13.505.453.878 1.101l.493.857c.35.607.525.91.491 1.234s-.268.583-.736 1.104l-1.031 1.153c-.252.319-.431.875-.431 1.375s.179 1.056.43 1.375l1.032 1.153c.468.52.702.781.736 1.104s-.14.627-.49 1.234l-.494.857c-.373.648-.56.972-.878 1.1c-.317.13-.676.028-1.395-.176l-1.22-.343a2 2 0 0 0-1.359.169l-.336.194c-.36.23-.636.57-.788.968l-.334.997c-.22.66-.33.99-.591 1.18c-.261.188-.609.188-1.303.188h-1.115c-.694 0-1.041 0-1.303-.189c-.261-.189-.371-.518-.59-1.178"></svg:path><svg:path d="M2.737 18.78c1.08-1.08 4.752-4.716 5.112-5.136c.381-.444.072-1.044.256-2.904c.089-.9.282-1.574.836-2.076c.66-.624 1.2-.624 3.06-.666c1.62.042 1.812-.138 1.98.282c.12.3-.24.48-.672.96c-.96.96-1.524 1.44-1.578 1.74c-.39 1.32 1.146 2.1 1.986 1.26c.318-.318 1.788-1.8 1.932-1.92c.108-.096.367-.092.492.06c.108.106.12.12.108.6c-.01.444-.006 1.082-.004 1.74c.001.852-.044 1.8-.404 2.28c-.72 1.08-1.92 1.14-3 1.188c-1.02.06-1.86-.048-2.124.144c-.216.108-1.356 1.308-2.736 2.688l-2.46 2.46c-2.04 1.62-4.284-.9-2.784-2.7"></svg:path></svg:g>`,
})
export class HugeiconsConfiguration01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsConfiguration02Icon],svg[hugeicons-configuration-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M8.73 21.499c1.293-2.223 4.252-2.485 5.937-.787c.377.38.566.57.733.593s1.215-.579 1.587-.792c.38-.218 1.432-.821 1.498-.979s-.003-.427-.142-.965c-.503-1.957.718-4.017 2.668-4.548c.522-.142.783-.213.886-.35c.103-.135.103-1.33.103-1.768s0-1.632-.103-1.768s-.364-.207-.886-.35c-1.95-.53-3.172-2.59-2.67-4.547c.14-.539.208-.808.142-.966s-1.118-.76-1.497-.978c-.372-.214-1.42-.815-1.588-.792c-.167.023-.355.212-.732.592a3.775 3.775 0 0 1-5.333 0c-.377-.38-.566-.57-.733-.592s-1.215.578-1.587.792c-.38.217-1.432.82-1.498.979c-.066.157.003.427.142.965c.503 1.957-.718 4.017-2.668 4.548c-.522.142-.783.213-.886.349S2 11.466 2 11.903s0 1.633.103 1.769s.364.207.886.349l.018.005"></svg:path><svg:path d="M2.489 18.183c1.08-1.08 4.752-4.714 5.112-5.134c.38-.444.072-1.044.256-2.903c.088-.9.282-1.574.836-2.075c.66-.624 1.2-.624 3.06-.666c1.62.042 1.812-.138 1.98.282c.12.3-.24.48-.672.96c-.96.96-1.524 1.439-1.578 1.739c-.39 1.32 1.146 2.099 1.986 1.26c.318-.318 1.788-1.8 1.932-1.92c.108-.096.366-.091.492.06c.108.106.12.12.108.6c-.011.444-.006 1.082-.005 1.74c.002.851-.043 1.798-.403 2.278c-.72 1.08-1.92 1.14-3 1.188c-1.02.06-1.86-.048-2.124.144c-.216.108-1.356 1.307-2.736 2.686l-2.46 2.46c-2.04 1.619-4.284-.9-2.784-2.7"></svg:path></svg:g>`,
})
export class HugeiconsConfiguration02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsConfusedIcon],svg[hugeicons-confused-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:circle cx="12" cy="12" r="10"></svg:circle><svg:path d="M8.009 9H8m8 0h-.009M10 16l5-2"></svg:path></svg:g>`,
})
export class HugeiconsConfusedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCongruentToIcon],svg[hugeicons-congruent-to-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 13h16M4 19h16M4 6.927C6.667 3.928 9.333 4.806 12 7s5.333 3.072 8 .073" color="currentColor"></svg:path>`,
})
export class HugeiconsCongruentToIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCongruentToCircleIcon],svg[hugeicons-congruent-to-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M7.5 12.502h9M7.5 16h9m-9-6.496c.9-1.862 3-1.955 4.5-.5m4.5-.504c-.9 1.862-3 1.955-4.5.5"></svg:path><svg:circle cx="12" cy="12" r="10"></svg:circle></svg:g>`,
})
export class HugeiconsCongruentToCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCongruentToSquareIcon],svg[hugeicons-congruent-to-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M7 12.5h10M7 16h10M7 9.5c1-1.863 3.333-1.956 5-.5m5-.505c-1 1.864-3.333 1.957-5 .5"></svg:path><svg:path d="M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12 2.5c4.478 0 6.718 0 8.109 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109S16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391S2.5 16.479 2.5 12"></svg:path></svg:g>`,
})
export class HugeiconsCongruentToSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsConnectIcon],svg[hugeicons-connect-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.513 19.487c2.512 2.392 5.503 1.435 6.7.466c.618-.501.897-.825 1.136-1.065c.837-.777.784-1.555.24-2.177c-.219-.249-1.616-1.591-2.956-2.967c-.694-.694-1.172-1.184-1.582-1.58c-.547-.546-1.026-1.172-1.744-1.154c-.658 0-1.136.58-1.735 1.179c-.688.688-1.196 1.555-1.375 2.333c-.539 2.273.299 3.888 1.316 4.965m0 0L2 21.999M19.487 4.515c-2.513-2.394-5.494-1.42-6.69-.45c-.62.502-.898.826-1.138 1.066c-.837.778-.784 1.556-.239 2.178c.078.09.31.32.635.644m7.432-3.438c1.017 1.077 1.866 2.71 1.327 4.985c-.18.778-.688 1.645-1.376 2.334c-.598.598-1.077 1.179-1.735 1.179c-.718.018-1.09-.502-1.639-1.048m3.423-7.45L22 2m-5.936 9.964c-.41-.395-.994-.993-1.688-1.687c-.858-.882-1.74-1.75-2.321-2.325m4.009 4.012l-1.562 1.524m-3.99-3.983l1.543-1.553" color="currentColor"></svg:path>`,
})
export class HugeiconsConnectIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsConsoleIcon],svg[hugeicons-console-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M20.61 18.105A3.375 3.375 0 0 0 18.625 12h-.251a3.375 3.375 0 0 0-1.984 6.105m4.218 0a3.36 3.36 0 0 1-1.984.645h-.25a3.36 3.36 0 0 1-1.984-.645m4.218 0l.583 1.835c.222.7.334 1.05.303 1.268c-.063.454-.433.79-.87.792c-.21 0-.524-.164-1.153-.494c-.27-.142-.404-.212-.542-.254a1.5 1.5 0 0 0-.86 0c-.138.042-.273.112-.542.254c-.629.33-.943.495-1.153.494c-.437-.002-.807-.338-.87-.792c-.03-.218.08-.568.303-1.268l.583-1.835M13 11a2 2 0 1 1-4 0a2 2 0 0 1 4 0"></svg:path><svg:path d="M20 9.131C19.13 5.057 15.475 2 11.098 2C6.073 2 2 6.03 2 11s4.073 9 9.098 9q.716 0 1.402-.106m4.863-15.258l-2.121 2.121m-8.484 8.485l-2.122 2.121"></svg:path></svg:g>`,
})
export class HugeiconsConsoleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsConstellationIcon],svg[hugeicons-constellation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 14a2 2 0 1 0 0-4a2 2 0 0 0 0 4m8 4a2 2 0 1 0 0-4a2 2 0 0 0 0 4m-9 4a2 2 0 1 0 0-4a2 2 0 0 0 0 4m4-16a2 2 0 1 0 0-4a2 2 0 0 0 0 4M4 10a2 2 0 1 0 0-4a2 2 0 0 0 0 4m10.298-4.127l-1.595 4.254m.418-5.443L5.88 7.316m5.872 6.669l-.504 4.03m2.541-5.12l4.422 2.21m-.04 1.707l-5.343 2.375" color="currentColor"></svg:path>`,
})
export class HugeiconsConstellationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsContactIcon],svg[hugeicons-contact-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M12 22c-4.007 0-6.01 0-7.255-1.318S3.5 17.242 3.5 13s0-6.364 1.245-7.682S7.993 4 12 4s6.01 0 7.255 1.318S20.5 8.758 20.5 13s0 6.364-1.245 7.682S16.007 22 12 22M8 4V2m8 2V2"></svg:path><svg:path d="M14.018 9.493a2 2 0 1 1-4 0a2 2 0 0 1 4 0m-5.955 7.223c1.058-1.63 2.739-2.24 3.955-2.239s2.848.61 3.906 2.24c.068.105.087.234.025.344c-.247.439-1.016 1.31-1.57 1.369c-.638.067-2.307.077-2.36.077s-1.772-.01-2.41-.077c-.556-.06-1.324-.93-1.572-1.37c-.061-.109-.042-.238.026-.344"></svg:path></svg:g>`,
})
export class HugeiconsContactIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsContact01Icon],svg[hugeicons-contact-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:rect width="17.5" height="20" x="4" y="2" rx="4"></svg:rect><svg:path d="M10.59 13.74c-.629.422-2.277 1.282-1.273 2.358c.49.526 1.037.902 1.723.902h3.92c.686 0 1.233-.376 1.723-.902c1.004-1.076-.644-1.936-1.273-2.357a4.29 4.29 0 0 0-4.82 0M15 9a2 2 0 1 1-4 0a2 2 0 0 1 4 0M5 6H2.5M5 12H2.5M5 18H2.5"></svg:path></svg:g>`,
})
export class HugeiconsContact01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsContact02Icon],svg[hugeicons-contact-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M4 10c0-3.771 0-5.657 1.172-6.828S8.229 2 12 2h1.5c3.771 0 5.657 0 6.828 1.172S21.5 6.229 21.5 10v4c0 3.771 0 5.657-1.172 6.828S17.271 22 13.5 22H12c-3.771 0-5.657 0-6.828-1.172S4 17.771 4 14z"></svg:path><svg:path d="M9.8 11.974c-.427-.744-.633-1.351-.757-1.967c-.184-.91.237-1.8.933-2.368c.295-.24.632-.158.806.155l.393.705c.311.558.467.838.436 1.134c-.03.296-.24.537-.66 1.02zm0 0a10.36 10.36 0 0 0 3.726 3.726m0 0c.744.427 1.351.633 1.967.757c.91.184 1.8-.237 2.368-.933c.24-.295.158-.632-.155-.806l-.704-.393c-.56-.311-.839-.467-1.135-.436c-.296.03-.537.24-1.02.66zM5 6H2.5M5 12H2.5M5 18H2.5"></svg:path></svg:g>`,
})
export class HugeiconsContact02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsContactBookIcon],svg[hugeicons-contact-book-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M4.5 10c0-3.771 0-5.657 1.172-6.828S8.729 2 12.5 2H14c3.771 0 5.657 0 6.828 1.172S22 6.229 22 10v4c0 3.771 0 5.657-1.172 6.828S17.771 22 14 22h-1.5c-3.771 0-5.657 0-6.828-1.172S4.5 17.771 4.5 14zm0-4H2m2.5 6H2m2.5 6H2"></svg:path><svg:path d="M15.275 8.493a2 2 0 1 1-4 0a2 2 0 0 1 4 0M9.32 15.716c1.058-1.63 2.739-2.24 3.955-2.239s2.847.61 3.906 2.24a.33.33 0 0 1 .025.344c-.247.439-1.016 1.31-1.57 1.369c-.638.067-2.307.077-2.36.077s-1.773-.01-2.41-.077c-.556-.06-1.324-.93-1.572-1.37c-.061-.109-.043-.238.026-.344"></svg:path></svg:g>`,
})
export class HugeiconsContactBookIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsContainerTruckIcon],svg[hugeicons-container-truck-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M10 9v2"></svg:path><svg:circle cx="17" cy="18" r="2"></svg:circle><svg:circle cx="7" cy="18" r="2"></svg:circle><svg:path d="M5 17.972c-1.097-.054-1.78-.217-2.268-.704C2 16.535 2 15.357 2 13V9c0-2.357 0-3.536.732-4.268S4.643 4 7 4h3.3c1.117 0 1.675 0 2.127.147a3 3 0 0 1 1.926 1.926c.147.452.147 1.01.147 2.127c0 .745 0 1.117.098 1.418a2 2 0 0 0 1.284 1.284c.301.098.673.098 1.418.098H22v2c0 2.357 0 3.535-.732 4.268c-.487.487-1.171.65-2.268.704M9 18h6"></svg:path><svg:path d="M14.5 6h1.821c1.456 0 2.183 0 2.775.354c.593.353.938.994 1.628 2.276L22 11M6 9v2"></svg:path></svg:g>`,
})
export class HugeiconsContainerTruckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsContainerTruck01Icon],svg[hugeicons-container-truck-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M19.5 17.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0m-10 0a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0"></svg:path><svg:path d="M14.5 17.5h-5m10 0h.763c.22 0 .33 0 .422-.012a1.5 1.5 0 0 0 1.303-1.302c.012-.093.012-.203.012-.423V13a6.5 6.5 0 0 0-6.5-6.5m-.5 9V7c0-1.414 0-2.121-.44-2.56C14.122 4 13.415 4 12 4H5c-1.414 0-2.121 0-2.56.44C2 4.878 2 5.585 2 7v8c0 .935 0 1.402.201 1.75a1.5 1.5 0 0 0 .549.549c.348.201.815.201 1.75.201M6.5 7v4m4-4v4"></svg:path></svg:g>`,
})
export class HugeiconsContainerTruck01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsContainerTruck02Icon],svg[hugeicons-container-truck-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M19.5 17.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0m-10 0a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0"></svg:path><svg:path d="M14.5 17.5h-5m5.5-2V7c0-1.414 0-2.121-.44-2.56C14.122 4 13.415 4 12 4H5c-1.414 0-2.121 0-2.56.44C2 4.878 2 5.585 2 7v8c0 .935 0 1.402.201 1.75a1.5 1.5 0 0 0 .549.549c.348.201.815.201 1.75.201m11-11h1.801c.83 0 1.245 0 1.589.195c.344.194.557.55.984 1.262l1.699 2.83c.212.354.318.532.373.728c.054.197.054.403.054.816V15c0 .935 0 1.402-.201 1.75a1.5 1.5 0 0 1-.549.549c-.348.201-.815.201-1.75.201M6.5 7v4m4-4v4"></svg:path></svg:g>`,
})
export class HugeiconsContainerTruck02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsContentWritingIcon],svg[hugeicons-content-writing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.55 1.75H9.94c-1.83 0-3.29 0-4.43.15c-1.17.16-2.12.49-2.87 1.24S1.56 4.84 1.4 6.01c-.09.67-.12 1.46-.14 2.36c-.01.05-.01.09-.01.13s0 .07.01.1c-.01.57-.01 1.18-.01 1.84v1.12c0 1.83 0 3.29.15 4.43c.16 1.17.49 2.12 1.24 2.87s1.7 1.08 2.87 1.24c1.14.15 2.6.15 4.43.15H10c.41 0 .75-.34.75-.75s-.34-.75-.75-.75c-1.91 0-3.26 0-4.29-.14c-1.01-.14-1.58-.39-2.01-.81c-.42-.43-.67-1-.81-2.01c-.14-1.03-.14-2.38-.14-4.29V9.25h17.5V10c0 .41.34.75.75.75s.75-.34.75-.75V8.41c-.01-.9-.04-1.68-.12-2.33c-.12-1.04-.38-1.88-.96-2.59q-.3-.36-.66-.66c-.71-.58-1.55-.84-2.59-.96c-1-.12-2.27-.12-3.87-.12m6.68 6H2.78c.02-.59.05-1.09.11-1.54c.14-1.01.39-1.58.81-2.01c.43-.42 1-.67 2.01-.81c1.03-.14 2.38-.14 4.29-.14h3.5c1.66 0 2.84 0 3.75.11c.89.1 1.41.3 1.81.63q.255.195.45.45c.33.4.53.92.63 1.81c.05.43.08.92.09 1.5M4.5 5.5c0-.55.45-1 1-1h.01c.55 0 1 .45 1 1s-.45 1-1 1H5.5c-.55 0-1-.45-1-1m3.99 0c0-.55.45-1 1-1h.01c.55 0 1 .45 1 1s-.45 1-1 1h-.01c-.55 0-1-.45-1-1m13.22 6.91c-.88-.88-2.3-.88-3.18 0l-5.47 5.47c-.52.52-.81 1.22-.81 1.95v1.67c0 .41.34.75.75.75h1.67c.73 0 1.43-.29 1.95-.81l5.47-5.47c.88-.88.88-2.3 0-3.18zm-2.12 1.06c.29-.29.77-.29 1.06 0l.38.38c.29.29.29.77 0 1.06l-5.47 5.47c-.24.24-.56.37-.89.37h-.92v-.92c0-.33.13-.65.37-.89z" color="currentColor"></svg:path>`,
})
export class HugeiconsContentWritingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsContractsIcon],svg[hugeicons-contracts-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M18 6c-.047-1.553-.22-2.48-.862-3.121C16.258 2 14.842 2 12.01 2H8.007c-2.832 0-4.248 0-5.127.879C2 3.757 2 5.172 2 8v8c0 2.828 0 4.243.88 5.121S5.175 22 8.007 22h4.004c2.831 0 4.247 0 5.127-.879c.642-.641.815-1.567.862-3.121"></svg:path><svg:path d="m20.242 11.742l1.177-1.177c.27-.27.406-.406.478-.552a1 1 0 0 0 0-.88c-.072-.146-.208-.282-.478-.552s-.406-.406-.552-.478a1 1 0 0 0-.88 0c-.146.072-.281.208-.552.478l-1.177 1.177m1.984 1.984l-5.266 5.266L12 18l.992-2.976l5.266-5.266m1.984 1.984l-1.984-1.984M5 19h1l1.25-2.5L8.5 19h1M6 6h8m-8 4h6"></svg:path></svg:g>`,
})
export class HugeiconsContractsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsConversationIcon],svg[hugeicons-conversation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 6V5c0-1.414 0-2.121.44-2.56C7.878 2 8.585 2 10 2h4c1.414 0 2.121 0 2.56.44C17 2.878 17 3.585 17 5v1c0 1.414 0 2.121-.44 2.56C16.122 9 15.415 9 14 9h-1l-3 2V9c-1.414 0-2.121 0-2.56-.44C7 8.122 7 7.415 7 6M3.59 18.74c-.629.422-2.277 1.282-1.273 2.358c.49.526 1.037.902 1.723.902h3.92c.686 0 1.233-.376 1.723-.902c1.004-1.076-.644-1.936-1.273-2.357a4.29 4.29 0 0 0-4.82 0m12-.001c-.629.422-2.277 1.282-1.273 2.358c.49.526 1.037.902 1.723.902h3.92c.686 0 1.233-.376 1.723-.902c1.004-1.076-.644-1.936-1.273-2.357a4.29 4.29 0 0 0-4.82 0M8 13.5a2 2 0 1 1-4 0a2 2 0 0 1 4 0m12 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0" color="currentColor"></svg:path>`,
})
export class HugeiconsConversationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCookBookIcon],svg[hugeicons-cook-book-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M21 16.929V10c0-3.771 0-5.657-1.172-6.828S16.771 2 13 2h-1C8.229 2 6.343 2 5.172 3.172S4 6.229 4 10v9.5"></svg:path><svg:path d="M21 17H6.5a2.5 2.5 0 0 0 0 5H21"></svg:path><svg:path d="M21 22a2.5 2.5 0 0 1 0-5M14.388 6.85a1.97 1.97 0 0 1 1.112-.341c1.105 0 2 .903 2 2.017c0 1.097-.904 2.014-2 2.014v.96c0 .943 0 1.414-.293 1.707s-.764.293-1.707.293h-2c-.943 0-1.414 0-1.707-.293S9.5 12.443 9.5 11.5v-.835c-1.168 0-2-.87-2-2.139c0-1.114.895-2.017 2-2.017c.412 0 .794.125 1.112.34A2 2 0 0 1 12.5 5.5c.872 0 1.614.563 1.888 1.35m0 0q.11.314.112.668"></svg:path></svg:g>`,
})
export class HugeiconsCookBookIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCookieIcon],svg[hugeicons-cookie-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12.058 22c4.915 0 9.006-3.506 9.884-8.141c.258-1.362-.349-1.29-1.632-1.515c-.91-.16-1.76-.777-2.077-1.756c-.215-.666-.295-.693-.998-.722c-1.449-.06-2.61-1.597-2.032-2.84c.216-.464.209-.517-.195-.832c-.707-.55-1.037-1.577-.91-2.568c.137-1.067.217-1.451-.913-1.571C7.457 1.445 2 6.02 2 11.995C2 17.52 6.503 22 12.058 22m-1.05-10h-.01m-4.99-2h-.01m6.01 8h-.01M10 6L9 7m8 7l-1 1m-9 0l1 1" color="currentColor"></svg:path>`,
})
export class HugeiconsCookieIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCoordinate01Icon],svg[hugeicons-coordinate-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.008 5c.59-.607 2.159-3 2.999-3s2.409 2.393 2.999 3m-3-2.15V22m11.996-8.005c.607.59 3 2.159 3 2.999s-2.393 2.409-3 2.998m2.189-2.998H1.998" color="currentColor"></svg:path>`,
})
export class HugeiconsCoordinate01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCoordinate02Icon],svg[hugeicons-coordinate-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13.5 2L12 3.5m0 0V5m0-1.5L10.5 2M2 14h3l-3 3h3m14-3l3 3m0-3l-3 3m-7-9v8m0 0l-9 6m9-6l9 6" color="currentColor"></svg:path>`,
})
export class HugeiconsCoordinate02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCopilotIcon],svg[hugeicons-copilot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M13.846 4c.822 0 1.534.624 1.712 1.5l.213 1.048C16.005 7.688 16.93 8.5 18 8.5h-6.617M13.846 4c-.79 0-1.484.578-1.692 1.412L11.383 8.5M13.846 4H7.98c-1.653 0-3.1 1.207-3.534 2.948l-1.38 6.026c-.318 1.272.559 2.526 1.766 2.526h2.83c1.238 0 2.324-.905 2.65-2.21l1.07-4.79"></svg:path><svg:path d="M10.154 20c-.822 0-1.534-.624-1.712-1.5l-.214-1.048C7.996 16.312 7.07 15.5 6 15.5h6.617M10.154 20c.79 0 1.484-.578 1.692-1.412l.771-3.088M10.154 20h5.867c1.652 0 3.099-1.207 3.534-2.948l1.38-6.026c.317-1.272-.56-2.526-1.767-2.526h-2.83c-1.238 0-2.324.905-2.65 2.21l-1.07 4.79"></svg:path></svg:g>`,
})
export class HugeiconsCopilotIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCopy01Icon],svg[hugeicons-copy-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M9 15c0-2.828 0-4.243.879-5.121C10.757 9 12.172 9 15 9h1c2.828 0 4.243 0 5.121.879C22 10.757 22 12.172 22 15v1c0 2.828 0 4.243-.879 5.121C20.243 22 18.828 22 16 22h-1c-2.828 0-4.243 0-5.121-.879C9 20.243 9 18.828 9 16z"></svg:path><svg:path d="M17 9c-.003-2.957-.047-4.489-.908-5.538a4 4 0 0 0-.554-.554C14.43 2 12.788 2 9.5 2c-3.287 0-4.931 0-6.038.908a4 4 0 0 0-.554.554C2 4.57 2 6.212 2 9.5c0 3.287 0 4.931.908 6.038a4 4 0 0 0 .554.554c1.05.86 2.58.906 5.538.908"></svg:path></svg:g>`,
})
export class HugeiconsCopy01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCopy02Icon],svg[hugeicons-copy-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M16.964 8.982c-.003-2.95-.047-4.478-.906-5.524a4 4 0 0 0-.553-.554C14.4 2 12.76 2 9.48 2s-4.92 0-6.024.905a4 4 0 0 0-.553.554C1.998 4.56 1.998 6.2 1.998 9.48s0 4.92.906 6.023q.25.304.553.553c1.047.86 2.575.904 5.525.906"></svg:path><svg:path d="m14.028 9.025l2.966-.043m-2.98 13.02l2.966-.043m4.992-7.937l-.028 2.96M9.01 14.036l-.028 2.96m2.505-7.971c-.832.149-2.17.302-2.477 2.024m10.485 10.91c.835-.137 2.174-.27 2.508-1.986M19.495 9.025c.832.149 2.17.302 2.477 2.024M11.5 21.957c-.833-.148-2.17-.301-2.478-2.023"></svg:path></svg:g>`,
})
export class HugeiconsCopy02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCopyLinkIcon],svg[hugeicons-copy-link-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M14.556 13.218a2.67 2.67 0 0 1-3.774-3.774l2.359-2.36a2.67 2.67 0 0 1 3.628-.135m-.325-3.167a2.669 2.669 0 1 1 3.774 3.774l-2.359 2.36a2.67 2.67 0 0 1-3.628.135"></svg:path><svg:path d="M21 13c0 3.771 0 5.657-1.172 6.828S16.771 21 13 21h-2c-3.771 0-5.657 0-6.828-1.172S3 16.771 3 13v-2c0-3.771 0-5.657 1.172-6.828S7.229 3 11 3"></svg:path></svg:g>`,
})
export class HugeiconsCopyLinkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCopyrightIcon],svg[hugeicons-copyright-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10"></svg:path><svg:path d="M15 14a2 2 0 0 1-2 2h-1c-.932 0-1.398 0-1.765-.152a2 2 0 0 1-1.083-1.083C9 14.398 9 13.932 9 13v-2c0-.932 0-1.398.152-1.765a2 2 0 0 1 1.083-1.083C10.602 8 11.068 8 12 8h1a2 2 0 0 1 2 2"></svg:path></svg:g>`,
})
export class HugeiconsCopyrightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCornIcon],svg[hugeicons-corn-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M3.885 20.132c2.103 2.078 5.978 1.618 8.655-1.026c3.059-3.021 4.642-3.927 5.753-4.547c.224-.125.28-.436.098-.616c-3.609-3.565-9.633-.897-10.284 3.807m-4.222 2.382L2.5 21.5m1.385-1.368c-2.103-2.077-1.638-5.904 1.039-8.548c.847-.628 2.472-2.407 2.734-4.81c.026-.243.335-.366.51-.193a6.53 6.53 0 0 1 1.955 4.666"></svg:path><svg:path d="M17.592 13c2.35-3.624 4.94-8.276 3.487-9.954c-1.73-2-7.07 1.892-11.079 5.29"></svg:path></svg:g>`,
})
export class HugeiconsCornIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCorporateIcon],svg[hugeicons-corporate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 22V6c0-1.886 0-2.828-.586-3.414S9.886 2 8 2H6c-1.886 0-2.828 0-3.414.586S2 4.114 2 6v12c0 1.886 0 2.828.586 3.414S4.114 22 6 22zm0 0h6c1.886 0 2.828 0 3.414-.586S22 19.886 22 18v-6c0-1.886 0-2.828-.586-3.414S19.886 8 18 8h-6m6.5 8h-3m3-4h-3m-7 2h-3m3-4h-3m3-4h-3" color="currentColor"></svg:path>`,
})
export class HugeiconsCorporateIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCosIcon],svg[hugeicons-cos-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.5 9.5a2.5 2.5 0 0 1 5 0v5a2.5 2.5 0 0 1-5 0zm12.19-.884C21.264 7.652 20.443 7 19.5 7H19c-1.105 0-2 1.12-2 2.5s.895 2.5 2 2.5h1c1.105 0 2 1.12 2 2.5s-.895 2.5-2 2.5h-.5c-1.025 0-1.906-.771-2.292-1.875M7 8.314C6.55 7.532 5.67 7 4.659 7C3.19 7 2 8.12 2 9.5v5C2 15.88 3.19 17 4.659 17C5.67 17 6.55 16.468 7 15.686" color="currentColor"></svg:path>`,
})
export class HugeiconsCosIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCosine01Icon],svg[hugeicons-cosine-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M22 20.729c-4 1.936-5.412-7.074-5.669-8.684C15.467 6.638 14.121 3 12 3c-2.12 0-3.467 3.638-4.331 9.045C7.412 13.655 6 22.665 2 20.73M2 12h2.5m15 0H22m-11.5 0h3" color="currentColor"></svg:path>`,
})
export class HugeiconsCosine01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCosine02Icon],svg[hugeicons-cosine-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M22 3.271c-4-1.936-5.412 7.074-5.669 8.684C15.467 17.362 14.121 21 12 21c-2.12 0-3.467-3.638-4.331-9.045C7.412 10.345 6 1.335 2 3.27M2 12h3m14 0h3m-12 0h4" color="currentColor"></svg:path>`,
})
export class HugeiconsCosine02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCottageIcon],svg[hugeicons-cottage-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M3 21h18"></svg:path><svg:circle cx="12" cy="9" r="2"></svg:circle><svg:path d="M4 21V11a8 8 0 1 1 16 0v10"></svg:path><svg:path d="M9 21v-3c0-1.823 1.06-3 3-3s3 1.177 3 3v3"></svg:path></svg:g>`,
})
export class HugeiconsCottageIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCottonCandyIcon],svg[hugeicons-cotton-candy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16.314 3.95a2.927 2.927 0 0 0-5.403-.282c-.31.65-1.089 1.242-1.807 1.308a3.415 3.415 0 0 0-.816 6.625m8.026-7.652a2.93 2.93 0 0 1-.69 3.048m.69-3.048a2.927 2.927 0 1 1 4.83 3.047c-.308.308-.308 1.073-.001 1.38a2.927 2.927 0 0 1-2.33 4.985m-10.525-1.76a2.927 2.927 0 1 0 3.887 4.365a.222.222 0 0 1 .352.06a3.415 3.415 0 0 0 6.286-2.665m-10.525-1.76a2.927 2.927 0 0 1 3.886.225m4.257-.118a2.93 2.93 0 0 0 2.382 1.653M2 22l6-6" color="currentColor"></svg:path>`,
})
export class HugeiconsCottonCandyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCoupon01Icon],svg[hugeicons-coupon-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m10.874 21.512l-2.03-1.205c-.516-.306-.773-.459-1.06-.467c-.308-.01-.57.137-1.127.467c-.624.37-1.864 1.39-2.666.904c-.491-.298-.491-1.054-.491-2.565V8c0-2.828 0-4.243.879-5.121C5.257 2 6.672 2 9.5 2h5c2.828 0 4.243 0 5.121.879c.879.878.879 2.293.879 5.121v10.646c0 1.511 0 2.267-.49 2.565c-.803.486-2.043-.534-2.667-.904c-.515-.306-.773-.459-1.058-.467c-.31-.01-.572.137-1.128.467l-2.03 1.205c-.548.325-.822.488-1.127.488s-.579-.163-1.126-.488M15 8l-6 6m6 0h-.009M9.009 8H9" color="currentColor"></svg:path>`,
})
export class HugeiconsCoupon01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCoupon02Icon],svg[hugeicons-coupon-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m7.832 21.348l-.519-.69c-.455-.607-1.423-.558-1.807.09c-.54.912-2.006.549-2.006-.496V3.748c0-1.045 1.466-1.408 2.006-.497c.384.649 1.352.698 1.807.091l.519-.69c.653-.87 2.017-.87 2.67 0l.081.109c.693.922 2.14.922 2.834 0l.081-.109c.653-.87 2.017-.87 2.67 0l.519.69c.455.607 1.423.558 1.807-.09c.54-.911 2.006-.549 2.006.496v16.504c0 1.045-1.466 1.408-2.006.497c-.384-.649-1.352-.698-1.807-.091l-.518.69c-.654.87-2.018.87-2.67 0l-.082-.109c-.693-.922-2.14-.922-2.834 0l-.081.109c-.653.87-2.017.87-2.67 0M15 9l-6 6m6 0h-.009M9.009 9H9" color="currentColor"></svg:path>`,
})
export class HugeiconsCoupon02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCoupon03Icon],svg[hugeicons-coupon-03-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.464 9.344c-.248 0-.475-.202-.464-.465c.067-1.542.255-2.546.78-3.34a4.7 4.7 0 0 1 1.11-1.174C5.055 3.5 6.7 3.5 9.992 3.5h4.014c3.292 0 4.937 0 6.104.865c.431.32.807.717 1.109 1.174c.525.794.713 1.798.78 3.34c.011.263-.216.465-.465.465c-1.386 0-2.51 1.189-2.51 2.656s1.124 2.656 2.51 2.656c.249 0 .476.202.465.466c-.067 1.541-.255 2.545-.78 3.34a4.7 4.7 0 0 1-1.11 1.173c-1.166.865-2.811.865-6.103.865H9.993c-3.292 0-4.937 0-6.104-.865a4.7 4.7 0 0 1-1.109-1.174c-.525-.794-.713-1.798-.78-3.34c-.011-.263.216-.465.464-.465c1.386 0 2.51-1.189 2.51-2.656S3.85 9.344 2.464 9.344" color="currentColor"></svg:path>`,
})
export class HugeiconsCoupon03Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCouponPercentIcon],svg[hugeicons-coupon-percent-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.464 9.344c-.248 0-.475-.202-.464-.465c.067-1.542.255-2.546.78-3.34a4.7 4.7 0 0 1 1.11-1.174C5.055 3.5 6.7 3.5 9.992 3.5h4.014c3.292 0 4.937 0 6.104.865c.431.32.807.717 1.109 1.174c.525.794.713 1.798.78 3.34c.011.263-.216.465-.465.465c-1.386 0-2.51 1.189-2.51 2.656s1.124 2.656 2.51 2.656c.249 0 .476.202.465.466c-.067 1.541-.255 2.545-.78 3.34a4.7 4.7 0 0 1-1.11 1.173c-1.166.865-2.811.865-6.103.865H9.993c-3.292 0-4.937 0-6.104-.865a4.7 4.7 0 0 1-1.109-1.174c-.525-.794-.713-1.798-.78-3.34c-.011-.263.216-.465.464-.465c1.386 0 2.51-1.189 2.51-2.656S3.85 9.344 2.464 9.344M9.5 14.5l5-5m-5 0h.011m4.978 5h.011" color="currentColor"></svg:path>`,
})
export class HugeiconsCouponPercentIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCourseIcon],svg[hugeicons-course-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M6.514 2c-1.304.129-2.182.419-2.838 1.076c-1.175 1.177-1.175 3.072-1.175 6.863v4.02c0 3.79 0 5.686 1.175 6.864S6.743 22 10.526 22h2.007c3.783 0 5.675 0 6.85-1.177c1.067-1.07 1.166-2.717 1.175-5.846"></svg:path><svg:path d="m10.526 7l1.003 3.5c.56 1.11 1.263 1.4 3.01 1.5c1.389-.034 2.195-.198 2.883-.796c.469-.408.681-1.023.784-1.635L18.55 7.5m2.508-2v5M8.601 4.933c1.587-1.317 3.001-2.024 5.934-2.802a1.94 1.94 0 0 1 1.009.005c2.596.714 3.998 1.348 5.876 2.758c.08.06.104.172.048.255c-.613.902-1.982 1.633-5.34 2.935a2.98 2.98 0 0 1-2.171-.012c-3.576-1.42-5.22-2.18-5.42-2.969a.17.17 0 0 1 .064-.17"></svg:path></svg:g>`,
})
export class HugeiconsCourseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCourtHouseIcon],svg[hugeicons-court-house-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M5 9.083C5 7.917 6 7.5 6.5 7.5c.994 0 1.5.754 1.5 1.583C8 11.016 6.657 12 5 12s-3-1.567-3-3.5S3.343 5 5 5h14c1.657 0 3 1.567 3 3.5S20.657 12 19 12s-3-.984-3-2.917c0-.83.506-1.583 1.5-1.583c.5 0 1.5.417 1.5 1.583M3 20a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1zM13 9h-2M9.5 19v-4m5 4v-4M19 5c0-1.414 0-2.121-.44-2.56C18.122 2 17.415 2 16 2H8c-1.414 0-2.121 0-2.56.44C5 2.878 5 3.585 5 5"></svg:path><svg:path d="M5 12v7h14v-7"></svg:path></svg:g>`,
})
export class HugeiconsCourtHouseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCourtLawIcon],svg[hugeicons-court-law-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M2.351 13.214c-.353-2.298-.53-3.446-.095-4.465c.434-1.018 1.398-1.715 3.325-3.108L7.021 4.6C9.418 2.867 10.617 2 12 2s2.582.867 4.979 2.6l1.44 1.041c1.927 1.393 2.89 2.09 3.325 3.108c.434 1.019.258 2.167-.095 4.464l-.301 1.96c-.5 3.256-.751 4.884-1.919 5.856s-2.875.971-6.29.971H10.86c-3.415 0-5.122 0-6.29-.971c-1.168-.972-1.418-2.6-1.919-5.857z"></svg:path><svg:path d="M11.25 13.25c1.187 1.187 2.75 2.393 2.75 2.393l2.143-2.143s-1.206-1.563-2.393-2.75S11 8.357 11 8.357L8.857 10.5s1.206 1.563 2.393 2.75m0 0L7.5 17m9-3.857L13.643 16m-2.286-8L8.5 10.857"></svg:path></svg:g>`,
})
export class HugeiconsCourtLawIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCovariateIcon],svg[hugeicons-covariate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 21H10c-3.3 0-4.95 0-5.975-1.025S3 17.3 3 14V3m15 8h.009M14 15h.009M12 6h.009M8 10h.009M4.5 19.5L21 3" color="currentColor"></svg:path>`,
})
export class HugeiconsCovariateIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCovidInfoIcon],svg[hugeicons-covid-info-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:circle cx="12" cy="12" r="10"></svg:circle><svg:path d="M14.527 15.082c4.001-3.068 3.368-6.469 1.515-7.563c-1.452-.859-2.72-.513-3.482.038c-.312.226-.468.339-.56.339s-.248-.113-.56-.339c-.762-.55-2.03-.897-3.482-.038c-1.846 1.09-2.309 4.595 1.655 7.662A21 21 0 0 0 12 16.771C13.779 17.797 16.417 19 19 19M5 19c1.549 0 3.117-.433 4.508-1"></svg:path></svg:g>`,
})
export class HugeiconsCovidInfoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCowboyHatIcon],svg[hugeicons-cowboy-hat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M16.276 18c-.985 1.102-2.264 2-4.276 2s-3.29-.898-4.276-2m8.552 0c1.211-1.354 1.979-3.016 3.122-3.692M16.276 18c2.069 0 5.724.562 5.724-2.5c0-.787-.68-1.5-1.5-1.5c-.282 0-.54.053-.781.15m0 0q-.166.066-.321.158m.32-.159l-.32.16m0 0C18.073 14.955 15.68 16 12 16s-6.073-1.044-7.398-1.692M7.724 18c-1.211-1.354-1.979-3.016-3.122-3.692M7.724 18C5.655 18 2 18.562 2 15.5c0-.787.68-1.5 1.5-1.5c.282 0 .54.053.781.15m0 0q.166.066.321.158m-.32-.159l.32.16M6 12c0-1.505.442-5.37 2.576-7.599C8.838 4.127 9.2 4 9.567 4c.27 0 .523.144.673.384l.205.328c.347.555.93.888 1.555.888a1.84 1.84 0 0 0 1.555-.888l.205-.328A.8.8 0 0 1 14.433 4c.367 0 .729.127.991.401C17.558 6.631 18 10.495 18 12"></svg:path><svg:path d="M6.5 10c1.416.51 2.89 1 5.5 1s4.084-.49 5.5-1"></svg:path></svg:g>`,
})
export class HugeiconsCowboyHatIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCppIcon],svg[hugeicons-cpp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12 2.5c4.478 0 6.718 0 8.109 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109S16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391S2.5 16.479 2.5 12"></svg:path><svg:path d="M8.732 10A2 2 0 0 0 5 11v2a2 2 0 0 0 3.732 1M12 10.5v3M10.5 12h3m4-1.5v3M16 12h3"></svg:path></svg:g>`,
})
export class HugeiconsCppIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCpuIcon],svg[hugeicons-cpu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 12c0-3.771 0-5.657 1.172-6.828S8.229 4 12 4s5.657 0 6.828 1.172S20 8.229 20 12s0 5.657-1.172 6.828S15.771 20 12 20s-5.657 0-6.828-1.172S4 15.771 4 12M9.5 2v2m5-2v2m-5 16v2m5-2v2M13 9l-4 4m6 0l-2 2m9-.5h-2m-16-5H2m2 5H2m20-5h-2" color="currentColor"></svg:path>`,
})
export class HugeiconsCpuIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCpuChargeIcon],svg[hugeicons-cpu-charge-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M9.5 2v2m5-2v2m-5 16v2m5-2v2m7.5-7.5h-2m-16-5H2m2 5H2m20-5h-2m-7.306-1l-2.091 2.537c-.224.272-.064.663.302.736l2.19.434c.39.077.538.51.266.774L10.767 15.5"></svg:path><svg:path d="M4 12c0-3.771 0-5.657 1.172-6.828S8.229 4 12 4s5.657 0 6.828 1.172S20 8.229 20 12s0 5.657-1.172 6.828S15.771 20 12 20s-5.657 0-6.828-1.172S4 15.771 4 12"></svg:path></svg:g>`,
})
export class HugeiconsCpuChargeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCpuSettingsIcon],svg[hugeicons-cpu-settings-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M20 10c-.036-2.48-.22-3.885-1.163-4.828C17.664 4 15.777 4 12.004 4s-5.66 0-6.832 1.172S4 8.229 4 12s0 5.657 1.172 6.828C6.235 19.891 7.886 19.99 11 20"></svg:path><svg:path d="M18 19.714V21m0-1.286a3.36 3.36 0 0 1-2.774-1.43M18 19.713a3.36 3.36 0 0 0 2.774-1.43M18 13.285c1.157 0 2.176.568 2.774 1.43M18 13.287a3.36 3.36 0 0 0-2.774 1.43M18 13.287V12m4 1.929l-1.226.788M14 19.07l1.226-.788M14 13.93l1.226.788M22 19.07l-1.226-.788m0-3.566a3.12 3.12 0 0 1 0 3.566m-5.548-3.566a3.12 3.12 0 0 0 0 3.566M9.5 2v2m5-2v2m-5 16v2M4 9.5H2m2 5H2m20-5h-2M12 8H8"></svg:path></svg:g>`,
})
export class HugeiconsCpuSettingsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCrabIcon],svg[hugeicons-crab-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 3c2.287 0 6.096 0 4.7 4.97m0 0c-1.333.167-3.176.53-3.684-1.97m3.685 1.97l.091.73a3.97 3.97 0 0 1-1.595 3.69L18.016 14M7 3C4.713 3 .904 3 2.3 7.97m0 0c1.333.167 3.176.53 3.684-1.97M2.299 7.97l-.091.73a3.97 3.97 0 0 0 1.595 3.69L5.984 14M18 15.19c0 2.281-2.64 4.276-4.418 5.36c-.982.6-2.182.6-3.164 0C8.64 19.467 6 17.472 6 15.19C6 11.75 8.686 10 12 10s6 1.75 6 5.19M8 19c-1.455 0-2.91 0-4 2m12-2c1.454 0 2.91 0 4 2M6 16.5c-1 0-3-.5-4-2m16 2c1 0 3-.5 4-2M14 10l.5-1.5M10 10l-.5-1.5" color="currentColor"></svg:path>`,
})
export class HugeiconsCrabIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCraneIcon],svg[hugeicons-crane-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15.254 16.001H5.25a3 3 0 1 0 0 6h10.003a3 3 0 1 0 0-6m-2.177-9.388l-1.67-1.546c-.568-.527-.852-.79-1.205-.928c-.352-.138-1.175-.138-1.95-.138h.004c-1.886 0-2.83 0-3.415.586c-.586.586-.586 1.528-.586 3.414v1c0 1.886 0 2.828.586 3.414s1.529.586 3.415.586h2.316c1.581 0 2.372 0 2.914-.422q.196-.153.35-.35c.422-.541.422-1.332.422-2.913c0-.724-.104-1.324-.223-1.653c-.161-.312-.427-.558-.958-1.05m0 0s3.041-3.372 3.498-3.792c.505-.404.78-.822 2.52-.816c.331-.007.72-.006 1.165-.006m0 3.498v.504m-.048 5.496v.444c0 .094.024.048.024.048c.122.005.48.096.48.096s1.092.336 1.032 1.536c-.033.66-.556 1.203-1.188 1.344c-.698.155-1.525-.204-1.8-.96m1.5-5.502v.498m-10.011 10h.009m-4.006 0h.009m7.984 0h.01" color="currentColor"></svg:path>`,
})
export class HugeiconsCraneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCrazyIcon],svg[hugeicons-crazy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:circle cx="12" cy="12" r="10"></svg:circle><svg:path d="M10 10c0 .5-.678 1-1.5 1S7 10.552 7 10m10 0c0-1.657-.672-3-1.5-3S14 8.343 14 10m2.633 3.5c.483.653.554 1.636-.185 2.321c-1.458 1.352-3.3-.117-4.242-.15c-.942-.034-1.444.884-3.343 1.284C7.709 17.2 7 16.5 7 15.67"></svg:path></svg:g>`,
})
export class HugeiconsCrazyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCreativeMarketIcon],svg[hugeicons-creative-market-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10.796 2.913a3.12 3.12 0 0 1 2.36-.91l5.603.277a3.12 3.12 0 0 1 2.96 2.961l.277 5.604a3.12 3.12 0 0 1-.91 2.359l-7.578 7.578a4.16 4.16 0 0 1-5.88 0l-4.41-4.41a4.16 4.16 0 0 1 0-5.88zM17.5 6.5h-.009m-4.509 5.706L10 14m0 0l-2.98 1.794M10 14l.019 3.5M10 14l-.018-3.5M10 14l3 1.706M10 14l-3-1.707" color="currentColor"></svg:path>`,
})
export class HugeiconsCreativeMarketIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCreditCardIcon],svg[hugeicons-credit-card-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2 12c0-3.537 0-5.306 1.053-6.487q.253-.284.554-.522C4.862 4 6.741 4 10.5 4h3c3.759 0 5.638 0 6.892.99q.302.24.555.523C22 6.693 22 8.463 22 12s0 5.306-1.053 6.487a4.4 4.4 0 0 1-.555.522C19.138 20 17.26 20 13.5 20h-3c-3.759 0-5.638 0-6.893-.99a4.4 4.4 0 0 1-.554-.523C2 17.307 2 15.537 2 12m8 4h1.5m3 0H18M2 9h20" color="currentColor"></svg:path>`,
})
export class HugeiconsCreditCardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCreditCardAcceptIcon],svg[hugeicons-credit-card-accept-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11 20h-.5c-3.759 0-5.638 0-6.893-.99a4.4 4.4 0 0 1-.554-.523C2 17.307 2 15.537 2 12s0-5.306 1.053-6.487q.253-.284.554-.522C4.862 4 6.741 4 10.5 4h3c3.759 0 5.638 0 6.892.99q.302.24.555.523C21.896 6.577 21.99 8.118 22 11M2 9h20m-8 9s1 0 2 2c0 0 3.177-5 6-6" color="currentColor"></svg:path>`,
})
export class HugeiconsCreditCardAcceptIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCreditCardAddIcon],svg[hugeicons-credit-card-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12.5 20h-2c-3.759 0-5.638 0-6.893-.99a4.4 4.4 0 0 1-.554-.523C2 17.307 2 15.537 2 12s0-5.306 1.053-6.487q.253-.284.554-.522C4.862 4 6.741 4 10.5 4h3c3.759 0 5.638 0 6.892.99q.302.24.555.523c.892 1 1.029 2.423 1.05 4.987M18.5 20v-7M15 16.5h7M2 9h20" color="currentColor"></svg:path>`,
})
export class HugeiconsCreditCardAddIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCreditCardChangeIcon],svg[hugeicons-credit-card-change-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M22 9.5c-.037-2.252-.21-3.553-1.044-4.487a4.4 4.4 0 0 0-.555-.522C19.146 3.5 17.266 3.5 13.506 3.5h-3.002c-3.76 0-5.64 0-6.896.99a4.4 4.4 0 0 0-.555.523C2 6.193 2 7.963 2 11.5s0 5.306 1.053 6.487q.254.284.555.522c1.256.991 3.136.991 6.896.991H11m-9-11h20"></svg:path><svg:path d="m19.333 12.5l.824.758c.179.176.268.264.237.339s-.159.075-.412.075h-3.104c-1.59 0-2.878 1.266-2.878 2.828c0 .352.066.69.185 1m2.482 3l-.824-.758c-.179-.176-.268-.264-.237-.339s.159-.075.412-.075h3.104c1.59 0 2.878-1.266 2.878-2.828c0-.352-.066-.69-.185-1"></svg:path></svg:g>`,
})
export class HugeiconsCreditCardChangeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCreditCardDefrostIcon],svg[hugeicons-credit-card-defrost-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M22 9.5c-.037-2.252-.21-3.553-1.044-4.487a4.4 4.4 0 0 0-.555-.522C19.146 3.5 17.266 3.5 13.506 3.5h-3.002c-3.76 0-5.64 0-6.896.99a4.4 4.4 0 0 0-.555.523C2 6.193 2 7.963 2 11.5s0 5.306 1.053 6.487q.254.284.555.522c1.256.991 3.136.991 6.896.991h.996M2 8.5h20"></svg:path><svg:path d="M15.016 12.5c-3.17 2.794 2.304 4.752 0 8m3.2-8c-3.17 2.794 2.303 4.752 0 8m3.2-8c-3.17 2.794 2.303 4.752 0 8"></svg:path></svg:g>`,
})
export class HugeiconsCreditCardDefrostIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCreditCardFreezeIcon],svg[hugeicons-credit-card-freeze-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M22 9c-.037-2.252-.21-3.553-1.044-4.487a4.4 4.4 0 0 0-.555-.522C19.146 3 17.266 3 13.506 3h-3.002c-3.76 0-5.64 0-6.896.99a4.4 4.4 0 0 0-.555.523C2 5.693 2 7.463 2 11s0 5.306 1.053 6.487q.254.284.555.522C4.864 19 6.744 19 10.504 19h.996M2 8h20m-4 5v1.778m0 0v4.444m0-4.444L19.5 14m-1.5.778L16.5 14m1.5 5.222V21m0-1.778L16.5 20m1.5-.778l1.5.778m2.5-3h-1.778m0 0h-4.444m4.444 0L21 18.5m-.778-1.5L21 15.5M15.778 17H14m1.778 0L15 15.5m.778 1.5L15 18.5" color="currentColor"></svg:path>`,
})
export class HugeiconsCreditCardFreezeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCreditCardNotAcceptIcon],svg[hugeicons-credit-card-not-accept-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12.5 20h-2c-3.759 0-5.638 0-6.893-.99a4.4 4.4 0 0 1-.554-.523C2 17.307 2 15.537 2 12s0-5.306 1.053-6.487q.253-.284.554-.522C4.862 4 6.741 4 10.5 4h3c3.759 0 5.638 0 6.892.99q.302.24.555.523C21.896 6.577 21.99 8.118 22 11M2 9h20m0 5l-6 6m6 0l-6-6" color="currentColor"></svg:path>`,
})
export class HugeiconsCreditCardNotAcceptIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCreditCardNotFoundIcon],svg[hugeicons-credit-card-not-found-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.463 4.5c-.318.128-.6.289-.856.49q-.301.24-.554.523C2 6.693 2 8.463 2 12s0 5.306 1.053 6.487q.253.284.554.522C4.862 20 6.741 20 10.5 20h3c2.992 0 4.757 0 6-.5M8 4.016C8.728 4 9.554 4 10.5 4h3c3.759 0 5.638 0 6.892.99q.302.24.555.523C22 6.693 22 8.463 22 12c0 2.313 0 3.87-.294 5M2 2l20 20M2.5 9H9m12.5 0h-8" color="currentColor"></svg:path>`,
})
export class HugeiconsCreditCardNotFoundIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCreditCardPosIcon],svg[hugeicons-credit-card-pos-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m3.346 16.198l12.829-12.83m2.457 7.688l-2.2 2.2m-1.877 1.854l-.979.979m-10.401.052a4.01 4.01 0 0 1 0-5.672l7.294-7.294a4.01 4.01 0 0 1 5.672 0l4.684 4.684a4.01 4.01 0 0 1 0 5.672l-7.294 7.294a4.01 4.01 0 0 1-5.672 0zM4 22h16" color="currentColor"></svg:path>`,
})
export class HugeiconsCreditCardPosIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCreditCardValidationIcon],svg[hugeicons-credit-card-validation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path stroke="currentColor" d="M15 7.5s.5 0 1 1c0 0 1.588-2.5 3-3"></svg:path><svg:path stroke="currentColor" d="M22 7a5 5 0 1 1-10 0a5 5 0 0 1 10 0"></svg:path><svg:path fill="currentColor" d="m3.607 21.01l.465-.59zm-.554-.523l.56-.499zm17.894 0l-.56-.499zm-.555.523l-.464-.59zM3.607 6.99l-.464-.588zm-.554.522l.56.5zm19.697 5.732a.75.75 0 1 0-1.5.002zM9.066 6.753a.75.75 0 0 0-.009-1.5zM13.5 21.25h-3v1.5h3zm-3 0c-1.897 0-3.256 0-4.301-.119c-1.03-.116-1.655-.338-2.127-.71l-.93 1.177c.784.619 1.726.893 2.889 1.024c1.148.13 2.607.128 4.469.128zM1.25 14c0 1.75-.001 3.132.138 4.223c.141 1.11.439 2.016 1.105 2.764l1.12-.999c-.387-.433-.616-1.002-.737-1.955c-.125-.974-.126-2.244-.126-4.033zm2.822 6.42a3.6 3.6 0 0 1-.46-.432l-1.119.999q.297.332.65.611zM21.25 14c0 1.789-.001 3.06-.126 4.033c-.121.953-.35 1.522-.737 1.955l1.12.999c.666-.748.964-1.653 1.105-2.764c.14-1.09.138-2.474.138-4.223zm-7.75 8.75c1.862 0 3.321.002 4.47-.128c1.162-.131 2.104-.405 2.887-1.024l-.93-1.177c-.47.372-1.095.594-2.126.71c-1.044.118-2.404.12-4.301.12zm6.887-2.762q-.208.234-.46.433l.93 1.177q.353-.279.65-.611zM2.75 14c0-1.788.001-3.059.126-4.032c.121-.953.35-1.522.737-1.956l-1.12-.998c-.666.747-.964 1.653-1.105 2.764c-.14 1.09-.138 2.473-.138 4.222zm.393-7.597q-.353.278-.65.611l1.12.998q.208-.234.46-.432zM22.75 14v-.755l-1.5.002V14zM9.057 5.253c-1.407.008-2.553.04-3.491.188c-.953.15-1.747.428-2.423.962l.93 1.177c.407-.322.928-.53 1.726-.657c.813-.128 1.852-.162 3.267-.17z"></svg:path><svg:path stroke="currentColor" d="M10 18h1.5m3 0H18M2.5 11H10"></svg:path></svg:g>`,
})
export class HugeiconsCreditCardValidationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCricketBatIcon],svg[hugeicons-cricket-bat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M7 14.473c0 .46 0 .691.086.898s.248.37.574.696l.273.273c.326.326.489.488.696.574s.437.086.898.086h.853c.69 0 1.036 0 1.347-.129c.31-.128.554-.372 1.043-.861l7.773-7.773c.743-.743 1.114-1.114 1.285-1.528a2.25 2.25 0 0 0 0-1.725c-.171-.414-.542-.785-1.285-1.527c-.742-.743-1.113-1.114-1.527-1.285a2.25 2.25 0 0 0-1.725 0c-.414.171-.785.542-1.528 1.285L7.99 11.23c-.488.489-.733.733-.861 1.043C7 12.583 7 12.93 7 13.62z"></svg:path><svg:path d="M6.925 15L2.43 19.496a1.467 1.467 0 1 0 2.075 2.074L9 17.075M6.5 20L4 17.5"></svg:path><svg:circle cx="2.5" cy="2.5" r="2.5" transform="matrix(-1 0 0 1 21 16)"></svg:circle></svg:g>`,
})
export class HugeiconsCricketBatIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCricketHelmetIcon],svg[hugeicons-cricket-helmet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M21 9.44C19.695 5.663 16.05 3 11.757 3C6.368 3 2 7.281 2 12.562c0 2.941 1.355 5.572 3.487 7.326c1.349 1.11 2.754 1.097 4.447 1.097c1.177 0 2.792.211 3.506-.955c1.255-2.048-1.17-4.9.416-7.005c.468-.621 1.244-.966 2.796-1.655zm0 0l1-.445M10.008 17h-.01"></svg:path><svg:path d="m22 15.911l-4.366.557C15.816 16.7 14.08 15.664 13.5 14"></svg:path><svg:path d="m16 12l.605 5.442c.188 1.692.282 2.538.851 3.048c.57.51 1.421.51 3.124.51H22m-1.5-5v5"></svg:path></svg:g>`,
})
export class HugeiconsCricketHelmetIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCroissantIcon],svg[hugeicons-croissant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3.503 10.497c-.455.46-.778 1.33-1.33 3.33c-.117.423-.202.86-.162 1.297c.06.648.28 1.05.72 1.38c.468.353 1.077.44 1.664.44h1.52c1.047 0 2.146-.207 2.847-.978c.799-.877 1.006-1.85.756-2.493m.502-9.92l3.35-1.326c1.024-.405 2.255-.288 3.002.516c.362.39.594.787.665 1.306v2.063c0 1.204-.52 2.393-1.564 3.014c-.598.355-1.177.605-1.945.875M4.005 8.017c1.206-2.15 2.075-3.03 4.01-3.968c.441-.238.81-.374 1.159-.398c1.392-.095 2.141 1.546 2.708 2.808l1.008 2.243c.091.204.162.417.196.637c.157.998.003 1.499-.56 2.15l-.917.907c-.39.386-.806.774-1.332.936c-.15.046-.291.071-.433.077c-.937.036-1.817-.468-2.701-.777c-1.133-.394-1.97-1.03-3.138-2.135c-.622-.985-.593-1.529 0-2.48m13.032-.472c1.178.204 1.839.323 3.008.498c.458.067.8.005 1.184-.253c.595-.399.926-1.16.694-1.835c-.228-.664-.78-1.192-1.878-1.897c-1.153-.801-1.812-1.135-3.008-1.495M2.501 17.01c.094 1.388.578 2.273 2.005 3.985c.646.661 1.117.933 1.742.999c.49.051.967-.187 1.274-.57c.377-.47.53-.857.493-1.425l-.502-2.989" color="currentColor"></svg:path>`,
})
export class HugeiconsCroissantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCropIcon],svg[hugeicons-crop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 2v2m18 16h-2m-3.5 0H10c-2.828 0-4.243 0-5.121-.879C4 18.243 4 16.828 4 14V7.5M20 22V12c0-3.771 0-5.657-1.172-6.828S15.771 4 12 4H2" color="currentColor"></svg:path>`,
})
export class HugeiconsCropIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCrowdfundingIcon],svg[hugeicons-crowdfunding-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:circle cx="12" cy="5" r="3"></svg:circle><svg:circle cx="12" cy="20" r="2"></svg:circle><svg:circle cx="20" cy="20" r="2"></svg:circle><svg:circle cx="4" cy="20" r="2"></svg:circle><svg:path d="M20 15c0-1.105-1.12-2-2.5-2h-11c-1.38 0-2.5.895-2.5 2m8-4v4"></svg:path></svg:g>`,
})
export class HugeiconsCrowdfundingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCrownIcon],svg[hugeicons-crown-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3.518 10.306c-.388-1.074-.582-1.611-.5-1.955c.091-.377.359-.67.701-.768c.313-.09.8.127 1.773.56c.86.382 1.29.573 1.695.563c.446-.012.874-.19 1.215-.507c.31-.287.517-.744.932-1.658l.915-2.016C11.013 2.842 11.395 2 12 2s.987.842 1.751 2.525l.915 2.016c.415.914.623 1.371.932 1.658c.341.316.77.495 1.215.507c.404.01.835-.181 1.695-.564c.974-.432 1.46-.649 1.773-.559c.342.098.61.391.7.768c.083.344-.111.88-.5 1.955l-1.667 4.616c-.714 1.975-1.07 2.962-1.817 3.52S15.285 19 13.356 19h-2.712c-1.93 0-2.894 0-3.64-.558c-.747-.558-1.104-1.545-1.818-3.52zM12 14h.009M7 22h10" color="currentColor"></svg:path>`,
})
export class HugeiconsCrownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCrown02Icon],svg[hugeicons-crown-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" d="M5 20h14M8 12a2 2 0 0 1-1.907-2.606L3.54 7.224a.95.95 0 0 0-1.268.04a.88.88 0 0 0-.229.91l2.5 7.461A2 2 0 0 0 6.439 17h11.122a2 2 0 0 0 1.896-1.365l2.5-7.461a.88.88 0 0 0-.229-.91a.95.95 0 0 0-1.268-.04l-2.553 2.17q.091.289.093.606a2 2 0 1 1-3.238-1.571l-2.07-4.967a.75.75 0 0 0-1.384 0l-2.07 4.967A2 2 0 0 1 8 12" color="currentColor"></svg:path>`,
})
export class HugeiconsCrown02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCrown03Icon],svg[hugeicons-crown-03-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" d="M5 20.5h14m-2.128-3H7.128c-1.028 0-1.542 0-1.932-.277c-.39-.276-.56-.761-.9-1.732L2.052 9.077a.97.97 0 0 1 .241-1.007a1.01 1.01 0 0 1 1.26-.123l1.231.81c1.244.818 1.866 1.226 2.495 1.078c.629-.149 1.002-.793 1.749-2.08l2.214-3.82A.88.88 0 0 1 12 3.5c.314 0 .603.166.759.434l2.214 3.82c.747 1.288 1.12 1.932 1.749 2.08c.629.15 1.25-.26 2.494-1.077l1.233-.81a1.01 1.01 0 0 1 1.259.123c.267.264.36.653.24 1.007l-2.245 6.414c-.34.97-.51 1.456-.9 1.732c-.39.277-.903.277-1.931.277" color="currentColor"></svg:path>`,
})
export class HugeiconsCrown03Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCrownMinusIcon],svg[hugeicons-crown-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" d="M21.5 3h-5M5 21h14m-2.128-3H7.128c-1.028 0-1.542 0-1.932-.277c-.39-.276-.56-.761-.9-1.732L2.052 9.577a.97.97 0 0 1 .241-1.007a1.01 1.01 0 0 1 1.26-.123l1.231.81c1.244.818 1.866 1.226 2.495 1.078c.629-.149 1.002-.793 1.749-2.08l2.214-3.82A.88.88 0 0 1 12 4c.314 0 .603.166.759.434l2.214 3.82c.747 1.288 1.12 1.932 1.749 2.08c.629.15 1.25-.26 2.494-1.077l1.233-.81a1.01 1.01 0 0 1 1.259.123c.267.264.36.653.24 1.007l-2.245 6.414c-.34.97-.51 1.456-.9 1.732c-.39.277-.903.277-1.931.277" color="currentColor"></svg:path>`,
})
export class HugeiconsCrownMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCrownPlusIcon],svg[hugeicons-crown-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" d="M18.5 2v5M21 4.5h-5M5 22h14m-2.128-3H7.128c-1.028 0-1.542 0-1.932-.277c-.39-.276-.56-.761-.9-1.732l-2.245-6.414a.97.97 0 0 1 .241-1.007a1.01 1.01 0 0 1 1.26-.123l1.231.81c1.244.818 1.866 1.226 2.495 1.078c.629-.149 1.002-.793 1.749-2.08l2.214-3.82A.88.88 0 0 1 12 5c.314 0 .603.166.759.434l2.214 3.82c.747 1.288 1.12 1.932 1.749 2.08c.629.15 1.25-.26 2.494-1.077l1.233-.81a1.01 1.01 0 0 1 1.259.123c.267.264.36.653.24 1.007l-2.245 6.414c-.34.97-.51 1.456-.9 1.732c-.39.277-.903.277-1.931.277" color="currentColor"></svg:path>`,
})
export class HugeiconsCrownPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCryingIcon],svg[hugeicons-crying-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M15.5 21.37A10 10 0 0 1 12 22a10 10 0 0 1-3.5-.63M3.338 17A9.95 9.95 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10c0 1.821-.487 3.53-1.338 5"></svg:path><svg:path d="M9 16c.836-.628 1.874-1 3-1s2.164.372 3 1M9.5 9.5H8.207c-.453 0-.887.18-1.207.5m7.5-.5h1.293c.453 0 .887.18 1.207.5M6 13v9m12-9v9"></svg:path></svg:g>`,
})
export class HugeiconsCryingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCss3Icon],svg[hugeicons-css-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M19.75 2.5h-15a1 1 0 0 0-1 1l1.858 14.396a2 2 0 0 0 1.155 1.565l3.997 1.816a2.5 2.5 0 0 0 1.92.058l4.957-1.907a2 2 0 0 0 1.266-1.61L20.75 3.5a1 1 0 0 0-1-1"></svg:path><svg:path d="M7.5 6.5h9L8 11h8l-.5 5l-3.5 1l-3.5-1l-.2-2"></svg:path></svg:g>`,
})
export class HugeiconsCss3Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCssFile01Icon],svg[hugeicons-css-file-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" d="M20 13v-2.343c0-.818 0-1.226-.152-1.594c-.152-.367-.441-.657-1.02-1.235l-4.736-4.736c-.499-.499-.748-.748-1.058-.896a2 2 0 0 0-.197-.082C12.514 2 12.161 2 11.456 2c-3.245 0-4.868 0-5.967.886a4 4 0 0 0-.603.603C4 4.59 4 6.211 4 9.456V13m9-10.5V3c0 2.828 0 4.243.879 5.121C14.757 9 16.172 9 19 9h.5M14 16h-3a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h2a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-3m-3-4.78C6.945 16.03 6.122 16 5.005 16C3.285 16 3 16.406 3 18v2c0 1.594.285 2 2.005 2c1.117 0 1.94-.03 1.995-1.22M21 16h-3a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h2a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-3" color="currentColor"></svg:path>`,
})
export class HugeiconsCssFile01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCssFile02Icon],svg[hugeicons-css-file-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M19 11c0-.818 0-1.57-.152-1.937s-.441-.657-1.02-1.235l-4.736-4.736c-.499-.499-.748-.748-1.058-.896a2 2 0 0 0-.197-.082C11.514 2 11.161 2 10.456 2c-3.245 0-4.868 0-5.967.886a4 4 0 0 0-.603.603C3 4.59 3 6.211 3 9.456V14c0 3.771 0 5.657 1.172 6.828S7.229 22 11 22h8M12 2.5V3c0 2.828 0 4.243.879 5.121C13.757 9 15.172 9 18 9h.5"></svg:path><svg:path d="M15.5 14h-2a1 1 0 0 0-1 1v.5a1 1 0 0 0 1 1h1a1 1 0 0 1 1 1v.5a1 1 0 0 1-1 1h-2m8.5-5h-2a1 1 0 0 0-1 1v.5a1 1 0 0 0 1 1h1a1 1 0 0 1 1 1v.5a1 1 0 0 1-1 1h-2m-8-3.985C9.955 14.023 9.07 14 8.151 14c-1.416 0-1.651.338-1.651 1.667v1.666C6.5 18.662 6.735 19 8.151 19c.92 0 1.804-.025 1.85-1.017"></svg:path></svg:g>`,
})
export class HugeiconsCssFile02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCsv01Icon],svg[hugeicons-csv-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M3.5 13v-.804c0-2.967 0-4.45.469-5.636c.754-1.905 2.348-3.407 4.37-4.118C9.595 2 11.168 2 14.318 2c1.798 0 2.698 0 3.416.253c1.155.406 2.066 1.264 2.497 2.353c.268.677.268 1.525.268 3.22V13"></svg:path><svg:path d="M3.5 12a3.333 3.333 0 0 1 3.333-3.333c.666 0 1.451.116 2.098-.057a1.67 1.67 0 0 0 1.179-1.18c.173-.647.057-1.432.057-2.098A3.333 3.333 0 0 1 13.5 2m-6 15.22C7.445 16.03 6.622 16 5.505 16c-1.72 0-2.005.406-2.005 2v2c0 1.594.285 2 2.005 2c1.117 0 1.94-.03 1.995-1.22m13-4.78l-1.777 4.695c-.33.87-.494 1.305-.755 1.305c-.26 0-.426-.435-.755-1.305L15.436 16m-2.56 0h-1.18c-.473 0-.709 0-.895.076c-.634.26-.625.869-.625 1.424s-.009 1.165.625 1.424c.186.076.422.076.894.076s.708 0 .894.076c.634.26.625.869.625 1.424s.009 1.165-.625 1.424c-.186.076-.422.076-.894.076H10.41"></svg:path></svg:g>`,
})
export class HugeiconsCsv01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCsv02Icon],svg[hugeicons-csv-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M10.294 14.016C10.248 13.024 9.571 13 8.651 13C7.235 13 7 13.338 7 14.667v1.666C7 17.662 7.235 18 8.651 18c.92 0 1.598-.024 1.643-1.016M21 13l-1.463 3.912c-.272.725-.407 1.088-.622 1.088s-.35-.363-.622-1.088L16.83 13m-2.109 0h-.972c-.389 0-.583 0-.736.063c-.522.216-.515.724-.515 1.187s-.007.97.515 1.187c.153.063.347.063.736.063c.388 0 .583 0 .736.063c.522.216.515.724.515 1.187s.007.97-.515 1.187c-.153.063-.348.063-.736.063h-1.06"></svg:path><svg:path d="M15 22h-4.273c-3.26 0-4.892 0-6.024-.798a4.1 4.1 0 0 1-.855-.805C3 19.331 3 17.797 3 14.727v-2.545c0-2.963 0-4.445.469-5.628c.754-1.903 2.348-3.403 4.37-4.113C9.095 2 10.668 2 13.818 2c1.798 0 2.698 0 3.416.252c1.155.406 2.066 1.263 2.497 2.35C20 5.278 20 6.125 20 7.818V10"></svg:path><svg:path d="M3 12a3.333 3.333 0 0 1 3.333-3.333c.666 0 1.451.116 2.098-.057A1.67 1.67 0 0 0 9.61 7.43c.173-.647.057-1.432.057-2.098A3.333 3.333 0 0 1 13 2"></svg:path></svg:g>`,
})
export class HugeiconsCsv02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCubeIcon],svg[hugeicons-cube-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.793 21.207c.293.293.764.293 1.707.293h10c.943 0 1.414 0 1.707-.293m-13.414 0C2.5 20.914 2.5 20.443 2.5 19.5v-10c0-.943 0-1.414.293-1.707m0 13.414l6-6m7.414 6c.293-.293.293-.764.293-1.707v-10c0-.943 0-1.414-.293-1.707m0 13.414l5-5c.293-.293.293-.764.293-1.707v-10c0-.943 0-1.414-.293-1.707m-5 5C15.914 7.5 15.443 7.5 14.5 7.5h-10c-.943 0-1.414 0-1.707.293m13.414 0l5-5m-18.414 5l5-5C8.086 2.5 8.557 2.5 9.5 2.5h10c.943 0 1.414 0 1.707.293M8.793 15.207c.293.293.764.293 1.707.293H14m-5.207-.293C8.5 14.914 8.5 14.443 8.5 13.5v-3" color="currentColor"></svg:path>`,
})
export class HugeiconsCubeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCupcake01Icon],svg[hugeicons-cupcake-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="m6 13.579l1.062 4.436c.365 1.52.547 2.28.977 2.829c.284.362.642.653 1.047.853C9.7 22 10.451 22 11.952 22c1.57 0 2.356 0 2.988-.325c.417-.214.78-.525 1.063-.91c.43-.583.583-1.387.891-2.994L18 12"></svg:path><svg:path d="M12 10c-3.959.495-6-.5-5.514-2.456m0 0C5.074 7.788 4 9.518 4 11c0 1.657 1 3 3 3s9-1 9-1c2.5-.5 4-2 4-3.5C20 7.29 18.21 6 16 6a4 4 0 0 0-4-4c1 1-.5 2.25-2 3c-1 .5-3.028.588-3.514 2.544"></svg:path></svg:g>`,
})
export class HugeiconsCupcake01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCupcake02Icon],svg[hugeicons-cupcake-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M7.885 9.176A3.98 3.98 0 0 0 5 13m2.885-3.824c1.97-.563 6.142-.925 6.942-3.169M7.885 9.176C7.885 5 12 6 12 2c2.047 0 3.503 2.11 2.827 4.007m0 0c1.627-.14 2.717 1.731 1.858 3.071m0 0c-.274.427-.724.775-1.185 1.041m1.185-1.04C18.642 9.534 19 11.293 19 13"></svg:path><svg:path d="M16 14.949c0-2.599 4-2.599 4 0c0 1.362-.755 2.529-1.342 3.71c-.806 1.626-1.21 2.438-1.935 2.89S15.096 22 13.292 22h-2.584c-1.804 0-2.706 0-3.431-.451c-.725-.452-1.128-1.264-1.935-2.89C4.755 17.478 4 16.311 4 14.949c0-2.599 4-2.599 4 0c0-2.599 4-2.599 4 0c0-2.599 4-2.599 4 0"></svg:path></svg:g>`,
})
export class HugeiconsCupcake02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCupcake03Icon],svg[hugeicons-cupcake-03-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M12 4a2 2 0 1 1 0 4a2 2 0 0 1 0-4m0 0c0-.5.4-1.6 2-2"></svg:path><svg:path d="M10 6c-2.209 0-4.098 2.493-2.75 4.081C5.622 9.74 4 10.946 4 12.534c0 2.952 4.662 3.374 5.28.503c.564 2.617 4.876 2.617 5.44 0c.618 2.87 5.28 2.449 5.28-.503c0-1.588-1.623-2.794-3.25-2.453C18.099 8.493 16.21 6 14 6"></svg:path><svg:path d="m6 15l1.171 4.099c.4 1.396.599 2.094 1.133 2.498C8.84 22 9.565 22 11.017 22h1.966c1.452 0 2.178 0 2.713-.403c.534-.404.734-1.102 1.133-2.498L18 15"></svg:path></svg:g>`,
})
export class HugeiconsCupcake03Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCurlingIcon],svg[hugeicons-curling-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2 15h10m-4.998 5h9.996c1.868 0 2.802 0 3.498-.402c1.666-.962 1.5-2.91 1.5-4.598s.166-3.636-1.5-4.598c-.265-.153-.564-.248-.937-.306c-.297-.047-.446-.07-.543-.141s-.157-.189-.278-.425l-1.13-2.213C16.189 4.574 15.228 4 12.055 4h-4.44c-.59 0-1.21.002-1.474.617c-.185.433-.185 1.333 0 1.766c.264.615.883.617 1.473.617h4.104c1.68 0 1.996.812 2.056 2v0c.023.46.035.69-.113.845s-.39.155-.874.155H7.002c-1.868 0-2.802 0-3.498.402c-1.666.962-1.5 2.91-1.5 4.598s-.166 3.636 1.5 4.598C4.2 20 5.134 20 7.002 20" color="currentColor"></svg:path>`,
})
export class HugeiconsCurlingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCursor01Icon],svg[hugeicons-cursor-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7.035 19.691c1.706-.172 2.897-2.912 4.3-3.768c.551-.337 1.041.005 1.387.455l3.347 4.357c.583.759.994.985 1.873.535c1.352-.692 2.636-1.979 3.328-3.328c.45-.88.224-1.29-.535-1.873l-4.357-3.347c-.45-.346-.792-.835-.455-1.388c.856-1.402 3.596-2.593 3.768-4.299c.303-3.11-14.254-5.942-16.426-3.77s.66 16.729 3.77 16.426" color="currentColor"></svg:path>`,
})
export class HugeiconsCursor01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCursor02Icon],svg[hugeicons-cursor-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3.428 3.524C5.492 1.302 21.013 6.745 21 8.733c-.015 2.253-6.061 2.947-7.737 3.417c-1.008.282-1.278.572-1.51 1.63C10.7 18.565 10.17 20.945 8.966 21c-1.92.084-7.552-15.308-5.539-17.476" color="currentColor"></svg:path>`,
})
export class HugeiconsCursor02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCursorAddSelection01Icon],svg[hugeicons-cursor-add-selection-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M10 3.32c-3.25-.497-6.326-.464-7.235.445c-2.172 2.172.66 16.729 3.77 16.426c1.706-.172 2.897-2.912 4.3-3.768c.551-.337 1.041.005 1.387.455l3.347 4.357c.583.759.994.985 1.873.535c1.352-.692 2.636-1.979 3.328-3.328c.45-.88.224-1.29-.535-1.873L18 14.852"></svg:path><svg:path d="M15 7h4m-2 2V5m5 2a5 5 0 1 1-10 0a5 5 0 0 1 10 0"></svg:path></svg:g>`,
})
export class HugeiconsCursorAddSelection01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCursorAddSelection02Icon],svg[hugeicons-cursor-add-selection-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.38 2.466C4.216.49 18.012 5.329 18 7.096c-.013 2.003-5.388 2.62-6.878 3.037c-.896.251-1.135.51-1.342 1.449c-.936 4.254-1.405 6.37-2.476 6.418C5.598 18.075.591 4.393 2.381 2.466M15.7 17.5h3.6m-1.8 1.8v-3.6m4.5 1.8a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0" color="currentColor"></svg:path>`,
})
export class HugeiconsCursorAddSelection02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCursorCircleSelection01Icon],svg[hugeicons-cursor-circle-selection-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13.781 20.966c-1.812.125-3.607-8.326-2.374-9.559s9.684.561 9.559 2.373c-.087 1.187-2.095 1.656-2.037 2.711c.018.309.408.59 1.188 1.154c.543.39 1.096.77 1.629 1.175a.66.66 0 0 1 .234.687a3.35 3.35 0 0 1-2.472 2.473a.66.66 0 0 1-.688-.235c-.404-.533-.784-1.086-1.175-1.628c-.563-.78-.844-1.17-1.153-1.188c-1.055-.059-1.524 1.95-2.71 2.037M20 9.088a9 9 0 0 0-.474-1.483M9.088 20q-.763-.174-1.471-.469m10.308-14.47a9.2 9.2 0 0 0-2.4-1.924M12.63 2.126a9.2 9.2 0 0 0-3.32.052M6.05 3.534A9.2 9.2 0 0 0 3.529 6.06M2.175 9.324a9.2 9.2 0 0 0-.045 3.332m1.007 2.868a9.2 9.2 0 0 0 1.889 2.37" color="currentColor"></svg:path>`,
})
export class HugeiconsCursorCircleSelection01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCursorCircleSelection02Icon],svg[hugeicons-cursor-circle-selection-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.31 9.378C10.8 7.773 22.01 11.705 22 13.14c-.01 1.628-4.378 2.128-5.588 2.468c-.728.204-.923.414-1.09 1.177c-.761 3.457-1.143 5.176-2.012 5.215c-1.387.061-5.455-11.055-4-12.622m10.368-1.726q.184.441.322.903m-1.937-3.47a9.2 9.2 0 0 0-2.422-1.94m-2.92-1.02a9.4 9.4 0 0 0-3.35.053M6.084 3.545a9.2 9.2 0 0 0-2.545 2.549M2.175 9.386a9.4 9.4 0 0 0-.046 3.361m1.015 2.894c.5.9 1.146 1.708 1.906 2.391m2.614 1.651q.434.18.89.317" color="currentColor"></svg:path>`,
})
export class HugeiconsCursorCircleSelection02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCursorDisabled01Icon],svg[hugeicons-cursor-disabled-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M10 3.32c-3.25-.497-6.326-.464-7.235.445c-2.172 2.172.66 16.729 3.77 16.426c1.706-.172 2.897-2.912 4.3-3.768c.551-.337 1.041.005 1.387.455l3.347 4.357c.583.759.994.985 1.873.535c1.352-.692 2.636-1.979 3.328-3.328c.45-.88.224-1.29-.535-1.873L17.5 14.468"></svg:path><svg:path d="M14.318 9.682a4.5 4.5 0 0 0 6.364-6.364m-6.364 6.364a4.5 4.5 0 0 1 6.364-6.364m-6.364 6.364l6.364-6.364"></svg:path></svg:g>`,
})
export class HugeiconsCursorDisabled01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCursorDisabled02Icon],svg[hugeicons-cursor-disabled-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.38 2.466C4.216.49 18.012 5.329 18 7.096c-.013 2.003-5.388 2.62-6.878 3.037c-.896.251-1.135.51-1.342 1.449c-.936 4.254-1.405 6.37-2.476 6.418C5.598 18.075.591 4.393 2.381 2.466m11.937 18.216a4.5 4.5 0 0 0 6.364-6.364m-6.364 6.364a4.5 4.5 0 0 1 6.364-6.364m-6.364 6.364l6.364-6.364" color="currentColor"></svg:path>`,
})
export class HugeiconsCursorDisabled02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCursorEdit01Icon],svg[hugeicons-cursor-edit-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 3c0-.471 0-.707-.146-.854C15.707 2 15.47 2 15 2h-1c-.471 0-.707 0-.854.146C13 2.293 13 2.53 13 3v1c0 .471 0 .707.146.854C13.293 5 13.53 5 14 5h1c.471 0 .707 0 .854-.146C16 4.707 16 4.47 16 4zM5 3c0-.471 0-.707-.146-.854C4.707 2 4.47 2 4 2H3c-.471 0-.707 0-.854.146C2 2.293 2 2.53 2 3v1c0 .471 0 .707.146.854C2.293 5 2.53 5 3 5h1c.471 0 .707 0 .854-.146C5 4.707 5 4.47 5 4zm0 11c0-.471 0-.707-.146-.854C4.707 13 4.47 13 4 13H3c-.471 0-.707 0-.854.146C2 13.293 2 13.53 2 14v1c0 .471 0 .707.146.854C2.293 16 2.53 16 3 16h1c.471 0 .707 0 .854-.146C5 15.707 5 15.47 5 15zm6.54 6.684c-2.306.159-4.591-10.597-3.022-12.166s12.325.714 12.166 3.02c-.11 1.51-2.667 2.108-2.592 3.45c.022.394.519.752 1.512 1.469c.69.498 1.394.981 2.072 1.495c.271.205.378.55.298.875a4.26 4.26 0 0 1-3.146 3.147a.84.84 0 0 1-.875-.298c-.514-.678-.998-1.382-1.496-2.072c-.716-.994-1.074-1.49-1.468-1.512c-1.342-.075-1.939 2.482-3.45 2.592M3.5 13V5M13 3.5H5" color="currentColor"></svg:path>`,
})
export class HugeiconsCursorEdit01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCursorEdit02Icon],svg[hugeicons-cursor-edit-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 3c0-.471 0-.707-.146-.854C15.707 2 15.47 2 15 2h-1c-.471 0-.707 0-.854.146C13 2.293 13 2.53 13 3v1c0 .471 0 .707.146.854C13.293 5 13.53 5 14 5h1c.471 0 .707 0 .854-.146C16 4.707 16 4.47 16 4zM8.333 8.407C9.938 6.68 22.01 10.913 22 12.46c-.011 1.752-4.714 2.292-6.018 2.658c-.784.22-.994.445-1.175 1.267c-.818 3.723-1.23 5.574-2.166 5.616c-1.493.066-5.874-11.906-4.308-13.593M5 3c0-.471 0-.707-.146-.854C4.707 2 4.47 2 4 2H3c-.471 0-.707 0-.854.146C2 2.293 2 2.53 2 3v1c0 .471 0 .707.146.854C2.293 5 2.53 5 3 5h1c.471 0 .707 0 .854-.146C5 4.707 5 4.47 5 4zm0 11c0-.471 0-.707-.146-.854C4.707 13 4.47 13 4 13H3c-.471 0-.707 0-.854.146C2 13.293 2 13.53 2 14v1c0 .471 0 .707.146.854C2.293 16 2.53 16 3 16h1c.471 0 .707 0 .854-.146C5 15.707 5 15.47 5 15zm-1.5-1V5M13 3.5H5" color="currentColor"></svg:path>`,
})
export class HugeiconsCursorEdit02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCursorHold01Icon],svg[hugeicons-cursor-hold-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M10 3.32c-3.25-.497-6.326-.464-7.235.445c-2.172 2.172.66 16.729 3.77 16.426c1.706-.172 2.897-2.912 4.3-3.768c.551-.337 1.041.005 1.387.455l3.347 4.357c.583.759.994.985 1.873.535c1.352-.692 2.636-1.979 3.328-3.328c.45-.88.224-1.29-.535-1.873L18 14.852"></svg:path><svg:path d="M17 5v2l1.5 1M22 7a5 5 0 1 1-10 0a5 5 0 0 1 10 0"></svg:path></svg:g>`,
})
export class HugeiconsCursorHold01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCursorHold02Icon],svg[hugeicons-cursor-hold-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.38 2.466C4.216.49 18.012 5.329 18 7.096c-.013 2.003-5.388 2.62-6.878 3.037c-.896.251-1.135.51-1.342 1.449c-.936 4.254-1.405 6.37-2.476 6.418C5.598 18.075.591 4.393 2.381 2.466M17.5 17.95l.9-1.35m3.6.9a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0" color="currentColor"></svg:path>`,
})
export class HugeiconsCursorHold02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCursorInWindowIcon],svg[hugeicons-cursor-in-window-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M20 10c0-3.771 0-5.657-1.172-6.828S15.771 2 12 2h-2C6.229 2 4.343 2 3.172 3.172S2 6.229 2 10v2c0 3.771 0 5.657 1.172 6.828C4.235 19.892 5.886 19.99 9 20h.5"></svg:path><svg:path d="M14.529 21.06c-1.648.114-3.28-7.57-2.16-8.69c1.122-1.12 8.805.51 8.69 2.157c-.078 1.08-1.904 1.506-1.85 2.465c.015.28.37.537 1.08 1.048c.492.356.995.701 1.48 1.069a.6.6 0 0 1 .213.625a3.05 3.05 0 0 1-2.248 2.248a.6.6 0 0 1-.625-.213c-.367-.485-.712-.988-1.068-1.48c-.512-.71-.768-1.065-1.049-1.08c-.958-.054-1.385 1.772-2.464 1.85M2 7h18"></svg:path></svg:g>`,
})
export class HugeiconsCursorInWindowIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCursorInfo01Icon],svg[hugeicons-cursor-info-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M10 3.32c-3.25-.497-6.326-.464-7.235.445c-2.172 2.172.66 16.729 3.77 16.426c1.706-.172 2.897-2.912 4.3-3.768c.551-.337 1.041.005 1.387.455l3.347 4.357c.583.759.994.985 1.873.535c1.352-.692 2.636-1.979 3.328-3.328c.45-.88.224-1.29-.535-1.873L18 14.852"></svg:path><svg:path d="M15.698 5.334c0-.68.56-1.23 1.25-1.23s1.25.55 1.25 1.23c0 .245-.073.474-.198.665c-.318.487-.856.954-1.01 1.501m.01 2h.009M22 7a5 5 0 1 1-10 0a5 5 0 0 1 10 0"></svg:path></svg:g>`,
})
export class HugeiconsCursorInfo01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCursorInfo02Icon],svg[hugeicons-cursor-info-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.5 19.099c0-1 .9-1.387.9-2.099c0-1.436-2.025-1.589-2.025-.239M22 17.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0M2.38 2.466C4.216.49 18.012 5.329 18 7.096c-.013 2.003-5.388 2.62-6.878 3.037c-.896.251-1.135.51-1.342 1.449c-.936 4.254-1.405 6.37-2.476 6.418C5.598 18.075.591 4.393 2.381 2.466" color="currentColor"></svg:path>`,
})
export class HugeiconsCursorInfo02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCursorLoading01Icon],svg[hugeicons-cursor-loading-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M11.085 3.505c-3.625-.678-7.31-.75-8.32.26c-2.172 2.172.66 16.729 3.77 16.426c1.706-.172 2.897-2.912 4.3-3.768c.551-.337 1.041.005 1.387.455l3.347 4.357c.583.759.994.985 1.873.535c1.352-.692 2.636-1.979 3.328-3.328c.45-.88.224-1.29-.535-1.873L18 14.852"></svg:path><svg:path d="M20.6 2h-5.2c-.73 0-1.37.492-1.398 1.202c-.037.892.59 1.485 1.25 2.042h0c.912.77 1.368 1.154 1.416 1.641a1 1 0 0 1 0 .23c-.048.487-.504.872-1.416 1.641c-.677.572-1.289 1.104-1.25 2.042c.029.71.668 1.202 1.397 1.202h5.202c.729 0 1.368-.492 1.397-1.202a1.9 1.9 0 0 0-.63-1.518c-.203-.178-.414-.35-.62-.524c-.912-.77-1.368-1.154-1.416-1.641a1 1 0 0 1 0-.23c.048-.487.504-.872 1.416-1.641c.67-.566 1.288-1.115 1.25-2.042C21.97 2.492 21.33 2 20.601 2"></svg:path></svg:g>`,
})
export class HugeiconsCursorLoading01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCursorLoading02Icon],svg[hugeicons-cursor-loading-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.38 2.466C4.216.49 18.012 5.329 18 7.096c-.013 2.003-5.388 2.62-6.878 3.037c-.896.251-1.135.51-1.342 1.449c-.936 4.254-1.405 6.37-2.476 6.418C5.598 18.075.591 4.393 2.381 2.466M20.776 13h-4.552c-.637 0-1.197.443-1.223 1.082c-.032.803.518 1.336 1.095 1.837h0c.798.693 1.197 1.04 1.239 1.478q.009.104 0 .206c-.042.439-.441.785-1.24 1.478c-.592.514-1.127.993-1.093 1.837c.025.639.585 1.082 1.222 1.082h4.552c.637 0 1.197-.443 1.223-1.082a1.73 1.73 0 0 0-.552-1.366c-.178-.16-.362-.314-.543-.471h0c-.798-.693-1.197-1.04-1.239-1.478a1 1 0 0 1 0-.206c.042-.439.441-.785 1.24-1.478c.586-.509 1.127-1.003 1.093-1.837c-.025-.639-.585-1.082-1.222-1.082" color="currentColor"></svg:path>`,
})
export class HugeiconsCursorLoading02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCursorMagicSelection01Icon],svg[hugeicons-cursor-magic-selection-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10.793 20.59c-2.471.17-4.92-11.354-3.238-13.035c1.68-1.681 13.205.765 13.035 3.236c-.118 1.618-2.857 2.258-2.777 3.697c.023.42.556.805 1.62 1.573c.74.533 1.493 1.051 2.22 1.602a.9.9 0 0 1 .32.938a4.57 4.57 0 0 1-3.372 3.372a.9.9 0 0 1-.937-.32c-.55-.727-1.069-1.481-1.603-2.22c-.767-1.065-1.151-1.597-1.572-1.62c-1.438-.08-2.078 2.659-3.696 2.776M9.03 3.5V2M5 5L4 4m-.5 5.03H2M5 13l-1 1M14 4l-1 1" color="currentColor"></svg:path>`,
})
export class HugeiconsCursorMagicSelection01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCursorMagicSelection02Icon],svg[hugeicons-cursor-magic-selection-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.03 3.5V2M5 5L4 4m-.5 5.03H2M5 13l-1 1M14 4l-1 1M8.333 8.407C9.938 6.68 22.01 10.913 22 12.46c-.011 1.752-4.714 2.292-6.018 2.658c-.784.22-.994.445-1.175 1.267c-.818 3.723-1.23 5.574-2.166 5.616c-1.493.066-5.874-11.906-4.308-13.593" color="currentColor"></svg:path>`,
})
export class HugeiconsCursorMagicSelection02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCursorMagicSelection03Icon],svg[hugeicons-cursor-magic-selection-03-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" d="m10.465 19.007l-2.444-7.023c-.92-2.64-1.379-3.961-.688-4.651c.69-.69 2.012-.231 4.655.687l7.013 2.438c1.466.51 2.2.764 2.357 1.257c.044.136.06.28.045.422c-.053.516-.717.917-2.046 1.719c-.851.514-1.277.77-1.391 1.159q-.048.166-.04.338c.018.404.37.755 1.076 1.456l2.32 2.305c.346.345.52.518.6.71a1.04 1.04 0 0 1 0 .79c-.079.193-.252.366-.598.712c-.345.345-.518.517-.711.596a1.04 1.04 0 0 1-.788 0c-.193-.079-.366-.251-.711-.596L16.786 19c-.694-.694-1.041-1.04-1.44-1.061a1 1 0 0 0-.356.043c-.382.116-.635.536-1.141 1.376c-.792 1.314-1.188 1.971-1.697 2.029a1 1 0 0 1-.445-.047c-.485-.16-.737-.885-1.242-2.334M9 4V2M5 5L3.5 3.5M4 9H2m3 4l-1.5 1.5m11-11L13 5" color="currentColor"></svg:path>`,
})
export class HugeiconsCursorMagicSelection03Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCursorMagicSelection04Icon],svg[hugeicons-cursor-magic-selection-04-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" d="m12.669 8.358l5.028 1.968c2.9 1.134 4.35 1.702 4.302 2.602s-1.561 1.313-4.588 2.138c-.901.246-1.352.369-1.664.68c-.312.313-.435.764-.681 1.665c-.825 3.026-1.238 4.54-2.138 4.588s-1.468-1.402-2.602-4.302l-1.968-5.028C7.17 9.633 6.576 8.115 7.345 7.345s2.288-.175 5.324 1.013M9 4V2M5 5L3.5 3.5M4 9H2m3 4l-1.5 1.5m11-11L13 5" color="currentColor"></svg:path>`,
})
export class HugeiconsCursorMagicSelection04Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCursorMove01Icon],svg[hugeicons-cursor-move-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M10 3.32c-3.25-.497-6.326-.464-7.235.445c-2.172 2.172.66 16.729 3.77 16.426c1.706-.172 2.897-2.912 4.3-3.768c.551-.337 1.041.005 1.387.455l3.347 4.357c.583.759.994.985 1.873.535c1.352-.692 2.636-1.979 3.328-3.328c.45-.88.224-1.29-.535-1.873L18 14.852M17 2v3m0-3c-.2 0-1.262.985-1.7 1.392M17 2c.2 0 1.28 1 1.7 1.392"></svg:path><svg:path d="M17 12V9m0 3c.2 0 1.262-.985 1.7-1.392M17 12c-.2 0-1.28-1-1.7-1.392M12 7h3m-3 0c0 .2.985 1.262 1.392 1.7M12 7c0-.2 1-1.28 1.392-1.7M22 7h-3m3 0c0-.2-.985-1.262-1.392-1.7M22 7c0 .2-1 1.28-1.392 1.7"></svg:path></svg:g>`,
})
export class HugeiconsCursorMove01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCursorMove02Icon],svg[hugeicons-cursor-move-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.38 2.466C4.216.49 18.012 5.329 18 7.096c-.013 2.003-5.388 2.62-6.878 3.037c-.896.251-1.135.51-1.342 1.449c-.936 4.254-1.405 6.37-2.476 6.418C5.598 18.075.591 4.393 2.381 2.466M22 17.499h-3m3 0c0-.256-.828-1.169-1.134-1.499M22 17.499c0 .257-.828 1.2-1.134 1.501M13 17.502h3m-3 0c0 .255.828 1.168 1.134 1.498M13 17.502c0-.258.828-1.2 1.134-1.502m3.365-3v3m0-3c-.256 0-1.169.828-1.499 1.134M17.499 13c.257 0 1.2.828 1.501 1.134M17.502 22v-3m0 3c.255 0 1.168-.828 1.498-1.134M17.502 22c-.258 0-1.2-.828-1.502-1.134" color="currentColor"></svg:path>`,
})
export class HugeiconsCursorMove02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCursorPointer01Icon],svg[hugeicons-cursor-pointer-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M13.034 20.872c-1.977.136-3.935-9.083-2.59-10.428s10.564.612 10.428 2.589c-.094 1.295-2.286 1.807-2.222 2.957c.02.337.445.644 1.296 1.258c.592.427 1.195.842 1.776 1.282a.72.72 0 0 1 .256.75a3.65 3.65 0 0 1-2.697 2.698a.72.72 0 0 1-.75-.256c-.44-.581-.855-1.184-1.282-1.776c-.614-.852-.921-1.277-1.258-1.296c-1.15-.064-1.662 2.128-2.957 2.222"></svg:path><svg:path d="M7.051 16A7.157 7.157 0 1 1 16 7.051"></svg:path><svg:path d="M11 6.955A2.865 2.865 0 1 0 6.955 11"></svg:path></svg:g>`,
})
export class HugeiconsCursorPointer01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCursorPointer02Icon],svg[hugeicons-cursor-pointer-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M7.051 16A7.157 7.157 0 1 1 16 7.051"></svg:path><svg:path d="M6.444 10A2.55 2.55 0 0 1 6 8.557A2.55 2.55 0 0 1 8.546 6c.54 0 1.042.169 1.454.457m-.69 2.921C10.8 7.773 22.01 11.705 22 13.14c-.01 1.628-4.378 2.128-5.588 2.468c-.728.204-.923.414-1.09 1.177c-.761 3.457-1.143 5.176-2.012 5.215c-1.387.061-5.455-11.055-4-12.622"></svg:path></svg:g>`,
})
export class HugeiconsCursorPointer02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCursorProgress01Icon],svg[hugeicons-cursor-progress-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M15.964 2.047a5.4 5.4 0 0 1 1.42 0M19.9 3.088c.375.286.724.636 1.01 1.011m1.042 2.519c.063.47.063.947 0 1.417m-8.357-4.717c-2.151 2.038-2.07 5.22-.103 7.187c1.99 1.99 5.226 2.054 7.257-.172"></svg:path><svg:path d="M10 3.32c-3.25-.497-6.326-.464-7.235.445c-2.172 2.172.66 16.729 3.77 16.426c1.706-.172 2.897-2.912 4.3-3.768c.551-.337 1.041.005 1.387.455l3.347 4.357c.583.759.994.985 1.873.535c1.352-.692 2.636-1.979 3.328-3.328c.45-.88.224-1.29-.535-1.873L18 14.852"></svg:path></svg:g>`,
})
export class HugeiconsCursorProgress01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCursorProgress02Icon],svg[hugeicons-cursor-progress-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M10 3.32c-3.25-.497-6.326-.464-7.235.445c-2.172 2.172.66 16.729 3.77 16.426c1.706-.172 2.897-2.912 4.3-3.768c.551-.337 1.041.005 1.387.455l3.347 4.357c.583.759.994.985 1.873.535c1.352-.692 2.636-1.979 3.328-3.328c.45-.88.224-1.29-.535-1.873L18 14.852"></svg:path><svg:path d="M17 7a5 5 0 0 0-3.535-3.536M17 7a5 5 0 0 0 1.295-4.83M17 7a5 5 0 0 0 4.83-1.294M17 7a5 5 0 0 0 3.535 3.536M17 7a5 5 0 0 0-1.295 4.83M17 7a5 5 0 0 0-4.83 1.295m1.295-4.831a5 5 0 0 0-1.296 4.83m1.296-4.83a5.01 5.01 0 0 1 4.83-1.295m0 0a5.01 5.01 0 0 1 3.536 3.537m0 0a5.01 5.01 0 0 1-1.296 4.83m0 0a5.01 5.01 0 0 1-4.83 1.295m0 0a5.01 5.01 0 0 1-3.536-3.536"></svg:path></svg:g>`,
})
export class HugeiconsCursorProgress02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCursorProgress03Icon],svg[hugeicons-cursor-progress-03-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.38 2.466C4.216.49 18.012 5.329 18 7.096c-.013 2.003-5.388 2.62-6.878 3.037c-.896.251-1.135.51-1.342 1.449c-.936 4.254-1.405 6.37-2.476 6.418C5.598 18.075.591 4.393 2.381 2.466m14.186 10.577a4.8 4.8 0 0 1 1.278 0m2.266.936c.337.258.652.573.91.91m.937 2.267c.056.423.056.852 0 1.276m-7.521-4.246c-1.936 1.834-1.864 4.698-.093 6.469c1.79 1.79 4.703 1.848 6.531-.156" color="currentColor"></svg:path>`,
})
export class HugeiconsCursorProgress03Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCursorProgress04Icon],svg[hugeicons-cursor-progress-04-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 17a5 5 0 0 0-3.537-3.538M17 17a5 5 0 0 0 1.296-4.834M17 17a5 5 0 0 0 4.834-1.295M17 17a5 5 0 0 0 3.537 3.539M17 17a5 5 0 0 0-1.296 4.834M17 17a5 5 0 0 0-4.834 1.296m1.297-4.834a5.05 5.05 0 0 0-1.297 4.834m1.297-4.834a5.05 5.05 0 0 1 4.833-1.296m0 0a5.01 5.01 0 0 1 3.538 3.539m0 0a5.05 5.05 0 0 1-1.297 4.834m0 0a5.05 5.05 0 0 1-4.832 1.295m0 0a5.01 5.01 0 0 1-3.539-3.538M2.38 2.466C4.216.49 18.012 5.329 18 7.096c-.013 2.003-5.388 2.62-6.878 3.037c-.896.251-1.135.51-1.342 1.449c-.936 4.254-1.405 6.37-2.476 6.418C5.598 18.075.591 4.393 2.381 2.466" color="currentColor"></svg:path>`,
})
export class HugeiconsCursorProgress04Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCursorRectangleSelection01Icon],svg[hugeicons-cursor-rectangle-selection-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2 9.2v3.6M12.8 2H9.2M7.5 20H9M20 7.5V9M2.133 4.699c.155-.727.415-1.274.854-1.712c.426-.426.954-.684 1.652-.84m15.228 2.552c-.155-.727-.415-1.274-.854-1.712c-.417-.417-.932-.673-1.608-.83M4.64 19.853c-.698-.156-1.226-.414-1.652-.84c-.43-.43-.69-.965-.845-1.673m11.638 3.626c-1.812.125-3.607-8.326-2.374-9.559s9.684.561 9.559 2.373c-.087 1.187-2.095 1.656-2.037 2.711c.018.309.408.59 1.188 1.154c.543.39 1.096.77 1.629 1.175a.66.66 0 0 1 .234.687a3.35 3.35 0 0 1-2.472 2.473a.66.66 0 0 1-.688-.235c-.404-.533-.784-1.086-1.175-1.628c-.563-.78-.844-1.17-1.153-1.188c-1.055-.059-1.524 1.95-2.71 2.037" color="currentColor"></svg:path>`,
})
export class HugeiconsCursorRectangleSelection01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCursorRectangleSelection02Icon],svg[hugeicons-cursor-rectangle-selection-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.31 9.378C10.8 7.773 22.01 11.705 22 13.14c-.01 1.628-4.378 2.128-5.588 2.468c-.728.204-.923.414-1.09 1.177c-.761 3.457-1.143 5.176-2.012 5.215c-1.387.061-5.455-11.055-4-12.622M2 9.2v3.6M12.8 2H9.2M7.5 20h1M20 7.5v1M2.133 4.699c.155-.727.415-1.274.854-1.712c.426-.426.954-.684 1.652-.84m15.228 2.552c-.155-.727-.415-1.274-.854-1.712c-.417-.417-.932-.673-1.608-.83M4.64 19.853c-.698-.156-1.226-.414-1.652-.84c-.43-.43-.69-.965-.845-1.673" color="currentColor"></svg:path>`,
})
export class HugeiconsCursorRectangleSelection02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCursorRemoveSelection01Icon],svg[hugeicons-cursor-remove-selection-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M15 7h4m3 0a5 5 0 1 1-10 0a5 5 0 0 1 10 0"></svg:path><svg:path d="M10 3.32c-3.25-.497-6.326-.464-7.235.445c-2.172 2.172.66 16.729 3.77 16.426c1.706-.172 2.897-2.912 4.3-3.768c.551-.337 1.041.005 1.387.455l3.347 4.357c.583.759.994.985 1.873.535c1.352-.692 2.636-1.979 3.328-3.328c.45-.88.224-1.29-.535-1.873L18 14.852"></svg:path></svg:g>`,
})
export class HugeiconsCursorRemoveSelection01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCursorRemoveSelection02Icon],svg[hugeicons-cursor-remove-selection-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.38 2.466C4.216.49 18.012 5.329 18 7.096c-.013 2.003-5.388 2.62-6.878 3.037c-.896.251-1.135.51-1.342 1.449c-.936 4.254-1.405 6.37-2.476 6.418C5.598 18.075.591 4.393 2.381 2.466M15.7 17.5h3.6m2.7 0a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0" color="currentColor"></svg:path>`,
})
export class HugeiconsCursorRemoveSelection02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCursorTextIcon],svg[hugeicons-cursor-text-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m13 17l-1.929-4.5M3 17l1.929-4.5m0 0l2.094-4.887C7.213 7.172 7.547 7 8 7s.788.172.977.613l2.094 4.887m-6.142 0h6.142M16 3c.833-.007 2 .5 2.5 1.5m0 0C19 3.5 20.167 3 21 3m-2.5 1.5v15M21 21c-.833.007-2-.5-2.5-1.5m0 0c-.5 1-1.667 1.5-2.5 1.5m4-9h-3" color="currentColor"></svg:path>`,
})
export class HugeiconsCursorTextIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCurtainsIcon],svg[hugeicons-curtains-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M22 3H2m3 11c.598-.707 1.767-2.606 2-5m12 5c-.599-.707-1.767-2.606-2-5M3 3v11.625m0 0v2.125c0 2.003 0 3.005.586 3.628C4.172 21 5.114 21 7 21h1c0-1.469-.4-4.922-2-6.985m-3 .61c1.148-.077 2.141-.29 3-.61m0 0c3.88-1.44 6-6.8 6-11.015m9 0v11.625m0 0v2.125c0 2.003 0 3.005-.586 3.628C19.828 21 18.886 21 17 21h-1c0-1.469.4-4.922 2-6.985m3 .61c-1.148-.077-2.141-.29-3-.61m0 0c-3.88-1.44-6-6.8-6-11.015" color="currentColor"></svg:path>`,
})
export class HugeiconsCurtainsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCurvyLeftDirectionIcon],svg[hugeicons-curvy-left-direction-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3.997 15s-1.999-1.473-1.999-2s2-2 2-2m-1.775 1.867c1.412.29 4.058.403 5.368-2.05c.543-.864.442-2.31.442-3.956c.033-.67.605-1.891 2.037-1.86s1.902 1.206 1.958 1.79v10.111c-.014.852.48 2.097 1.996 2.097c1.48 0 2.06-1.312 1.932-2.295c-.346-2.664.463-5.457 3.963-5.701h2.084" color="currentColor"></svg:path>`,
})
export class HugeiconsCurvyLeftDirectionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCurvyLeftRightDirectionIcon],svg[hugeicons-curvy-left-right-direction-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3.998 13s-2-1.473-2-2s2-2 2-2m16.006 6s1.999-1.473 1.999-2s-2-2-2-2m1.775 1.867c-1.412.29-4.058.403-5.368-2.05c-.543-.864-.442-2.31-.442-3.956c-.033-.67-.605-1.891-2.037-1.86s-1.902 1.206-1.958 1.79v10.111c.014.852-.48 2.097-1.996 2.097c-1.48 0-2.06-1.312-1.932-2.295c.346-2.664-.463-5.457-3.963-5.701H1.998" color="currentColor"></svg:path>`,
})
export class HugeiconsCurvyLeftRightDirectionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCurvyRightDirectionIcon],svg[hugeicons-curvy-right-direction-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20.003 15s1.999-1.473 1.999-2s-2-2-2-2m1.775 1.867c-1.412.29-4.058.403-5.368-2.05c-.543-.864-.441-2.31-.441-3.956c-.034-.67-.606-1.891-2.038-1.86s-1.902 1.206-1.958 1.79v10.111c.014.852-.48 2.097-1.996 2.097c-1.48 0-2.06-1.312-1.932-2.295c.346-2.664-.463-5.457-3.963-5.701H1.997" color="currentColor"></svg:path>`,
})
export class HugeiconsCurvyRightDirectionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCurvyUpDownDirectionIcon],svg[hugeicons-curvy-up-down-direction-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13.014 19.996s-1.47 2.002-1.997 2.003c-.527 0-2.003-1.996-2.003-1.996m5.972-16.007S13.51 2 12.983 2s-1.996 2.001-1.996 2.001m1.864-1.776c.292 1.41.41 4.055-2.042 5.369c-.862.544-2.308.445-3.954.448c-.67.035-1.89.608-1.856 2.04c.033 1.43 1.21 1.899 1.794 1.954l10.109-.018c.851-.016 2.097.476 2.1 1.991c.003 1.48-1.308 2.061-2.292 1.935c-2.664-.34-5.455.472-5.693 3.97L11.021 22" color="currentColor"></svg:path>`,
})
export class HugeiconsCurvyUpDownDirectionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCustomFieldIcon],svg[hugeicons-custom-field-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.96 4.5h6.08c1.37 0 2.45 0 3.32.09c.89.09 1.63.28 2.28.71c.52.35.96.79 1.31 1.31c.43.65.62 1.39.71 2.28c.09.86.09 1.95.09 3.32v.08c0 1.37 0 2.46-.09 3.32c-.09.89-.28 1.63-.71 2.28c-.35.52-.79.96-1.31 1.31c-.65.43-1.39.62-2.28.71c-.87.09-1.95.09-3.32.09H8.96c-1.37 0-2.45 0-3.32-.09c-.89-.09-1.63-.28-2.28-.71c-.52-.35-.96-.79-1.31-1.31c-.43-.65-.62-1.39-.71-2.28c-.09-.86-.09-1.95-.09-3.32v-.08c0-1.37 0-2.46.09-3.32c.09-.89.28-1.63.71-2.28c.35-.52.79-.96 1.31-1.31c.65-.43 1.39-.62 2.28-.71c.87-.09 1.95-.09 3.32-.09M5.79 6.08c-.77.08-1.23.23-1.6.47c-.35.23-.66.54-.9.89c-.24.37-.39.83-.47 1.6c-.08.78-.08 1.79-.08 3.21s0 2.43.08 3.21c.08.77.23 1.23.47 1.6c.24.35.54.66.9.89c.36.24.83.39 1.6.47c.78.08 1.79.08 3.21.08h6c1.42 0 2.43 0 3.21-.08c.77-.08 1.23-.23 1.6-.47c.35-.23.66-.54.9-.89c.24-.37.39-.83.47-1.6c.08-.78.08-1.79.08-3.21s0-2.43-.08-3.21c-.08-.77-.23-1.23-.47-1.6c-.24-.35-.54-.66-.9-.89c-.36-.24-.83-.39-1.6-.47C17.43 6 16.42 6 15 6H9c-1.42 0-2.43 0-3.21.08m10.04 4.02c-.17.12-.38.32-.73.66l-.59.57c-.3.29-.77.28-1.06-.02a.746.746 0 0 1 .02-1.06l.59-.57l.03-.03c.31-.29.59-.57.85-.76c.29-.21.63-.39 1.06-.39s.77.18 1.06.39c.26.19.54.47.85.76l.03.03l.59.57c.3.29.3.77.02 1.06c-.29.3-.76.31-1.06.02l-.59-.57c-.35-.34-.56-.54-.73-.66a.6.6 0 0 0-.15-.09C16.01 10 16 10 16 10l-.02.01c-.02.01-.07.03-.15.09m-2.37 3.09c.29-.3.76-.31 1.06-.02l.59.57c.35.34.56.54.73.66c.08.06.12.08.15.09c.01.01.02.01.02.01l.02-.01c.02-.01.07-.03.15-.09c.17-.12.38-.32.73-.66l.59-.57c.3-.29.77-.28 1.06.02c.29.29.28.77-.02 1.06l-.59.57l-.03.03c-.31.29-.59.57-.85.76c-.29.21-.63.39-1.06.39s-.77-.18-1.06-.39c-.26-.19-.54-.47-.85-.76l-.03-.03l-.59-.57c-.3-.29-.3-.77-.02-1.06M6 11.5c-.41 0-.75.34-.75.75s.34.75.75.75h4c.41 0 .75-.34.75-.75s-.34-.75-.75-.75z" color="currentColor"></svg:path>`,
})
export class HugeiconsCustomFieldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCustomerServiceIcon],svg[hugeicons-customer-service-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M3.778 11.942C2.83 10.29 2.372 8.94 2.096 7.572c-.408-2.024.526-4.001 2.073-5.263c.654-.533 1.404-.35 1.791.343l.873 1.567c.692 1.242 1.038 1.862.97 2.52c-.069.659-.536 1.195-1.469 2.267zm0 0c1.919 3.346 4.93 6.36 8.28 8.28m0 0c1.653.948 3.002 1.406 4.37 1.682c2.024.408 4.001-.526 5.262-2.073c.534-.654.351-1.404-.342-1.791l-1.567-.873c-1.242-.692-1.862-1.038-2.52-.97c-.659.069-1.195.536-2.267 1.469zM12 7h.857c.404 0 .606 0 .732.122c.125.122.125.319.125.711c0 .786 0 1.179-.25 1.423c-.192.186-.471.23-.95.24c-.245.006-.367.009-.44.082S12 9.767 12 10v1.167c0 .393 0 .589.126.711c.125.122.327.122.731.122h.857M18 7v2.5m0 0h-1.457c-.323 0-.485 0-.585-.098c-.1-.097-.1-.254-.1-.569V7M18 9.5V12"></svg:path><svg:path d="M10 4.305q.133-.15.277-.294A6.867 6.867 0 1 1 19.695 14"></svg:path></svg:g>`,
})
export class HugeiconsCustomerServiceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCustomerService01Icon],svg[hugeicons-customer-service-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M17 11.805c0-.346 0-.519.052-.673c.151-.448.55-.621.95-.803c.448-.205.672-.307.895-.325c.252-.02.505.034.721.155c.286.16.486.466.69.714c.943 1.146 1.415 1.719 1.587 2.35c.14.51.14 1.044 0 1.553c-.251.922-1.046 1.694-1.635 2.41c-.301.365-.452.548-.642.655a1.27 1.27 0 0 1-.721.155c-.223-.018-.447-.12-.896-.325c-.4-.182-.798-.355-.949-.803c-.052-.154-.052-.327-.052-.672zm-10 0c0-.436-.012-.827-.364-1.133c-.128-.111-.298-.188-.637-.343c-.449-.204-.673-.307-.896-.325c-.667-.054-1.026.402-1.41.87c-.944 1.145-1.416 1.718-1.589 2.35a2.94 2.94 0 0 0 0 1.553c.252.921 1.048 1.694 1.636 2.409c.371.45.726.861 1.363.81c.223-.018.447-.12.896-.325c.34-.154.509-.232.637-.343c.352-.306.364-.697.364-1.132z"></svg:path><svg:path d="M20 10.5V9c0-3.866-3.582-7-8-7S4 5.134 4 9v1.5m16 7c0 4.5-4 4.5-8 4.5"></svg:path></svg:g>`,
})
export class HugeiconsCustomerService01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCustomerService02Icon],svg[hugeicons-customer-service-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M17 13.805c0-.346 0-.519.052-.673c.151-.448.55-.621.95-.803c.448-.205.672-.307.895-.325c.252-.02.505.034.721.155c.286.16.486.466.69.714c.943 1.146 1.415 1.719 1.587 2.35c.14.51.14 1.044 0 1.553c-.251.922-1.046 1.694-1.635 2.41c-.301.365-.452.548-.642.655a1.27 1.27 0 0 1-.721.155c-.223-.018-.447-.12-.896-.325c-.4-.182-.798-.355-.949-.803c-.052-.154-.052-.327-.052-.672zM9.5 21c1.38 1.333 3.62 1.333 5 0M7 13.805c0-.436-.012-.827-.364-1.133c-.128-.111-.298-.188-.637-.343c-.449-.204-.673-.307-.896-.325c-.667-.054-1.026.402-1.41.87c-.944 1.145-1.416 1.718-1.589 2.35a2.94 2.94 0 0 0 0 1.552c.252.922 1.048 1.694 1.636 2.41c.371.45.726.861 1.363.81c.223-.018.447-.12.896-.325c.34-.155.509-.232.637-.343c.352-.306.364-.697.364-1.133z"></svg:path><svg:path d="M2 16v-4C2 6.477 6.477 2 12 2s10 4.477 10 10v4"></svg:path></svg:g>`,
})
export class HugeiconsCustomerService02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCustomerSupportIcon],svg[hugeicons-customer-support-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M17 10.805c0-.346 0-.519.052-.673c.151-.448.55-.621.95-.803c.448-.205.672-.307.895-.325c.252-.02.505.034.721.155c.286.16.486.466.69.714c.943 1.146 1.415 1.719 1.587 2.35c.14.51.14 1.044 0 1.553c-.251.922-1.046 1.694-1.635 2.41c-.301.365-.452.548-.642.655a1.27 1.27 0 0 1-.721.155c-.223-.018-.447-.12-.896-.325c-.4-.182-.798-.355-.949-.803c-.052-.154-.052-.327-.052-.673zm-10 0c0-.436-.012-.827-.364-1.133c-.128-.111-.298-.188-.637-.343c-.449-.204-.673-.307-.896-.325c-.667-.054-1.026.402-1.41.87c-.944 1.145-1.416 1.718-1.589 2.35a2.94 2.94 0 0 0 0 1.553c.252.921 1.048 1.694 1.636 2.409c.371.45.726.861 1.363.81c.223-.018.447-.12.896-.325c.34-.154.509-.232.637-.343c.352-.306.364-.697.364-1.132z"></svg:path><svg:path d="M5 9c0-3.314 3.134-6 7-6s7 2.686 7 6m0 8v.8c0 1.767-1.79 3.2-4 3.2h-2"></svg:path></svg:g>`,
})
export class HugeiconsCustomerSupportIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCustomizeIcon],svg[hugeicons-customize-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M21 17.5a3.5 3.5 0 1 1-7 0a3.5 3.5 0 0 1 7 0"></svg:path><svg:path d="M17.5 14h-11a3.5 3.5 0 1 0 0 7h11a3.5 3.5 0 1 0 0-7M3 6.5a3.5 3.5 0 1 0 7 0a3.5 3.5 0 0 0-7 0"></svg:path><svg:path d="M6.5 3h11a3.5 3.5 0 1 1 0 7h-11a3.5 3.5 0 1 1 0-7"></svg:path></svg:g>`,
})
export class HugeiconsCustomizeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCylinder01Icon],svg[hugeicons-cylinder-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20 5.5C20 7.433 16.418 9 12 9S4 7.433 4 5.5S7.582 2 12 2s8 1.567 8 3.5m0 13c0 1.933-3.582 3.5-8 3.5s-8-1.567-8-3.5S7.582 15 12 15s8 1.567 8 3.5m0 0v-13m-16 13v-13" color="currentColor"></svg:path>`,
})
export class HugeiconsCylinder01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCylinder02Icon],svg[hugeicons-cylinder-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 4c0 1.105-2.239 2-5 2s-5-.895-5-2s2.239-2 5-2s5 .895 5 2m4 14c0 2.21-4.03 4-9 4s-9-1.79-9-4s4.03-4 9-4s9 1.79 9 4M3.5 16.5L7 4m13.5 12.5L17 4" color="currentColor"></svg:path>`,
})
export class HugeiconsCylinder02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCylinder03Icon],svg[hugeicons-cylinder-03-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M22 19c0 1.657-4.477 3-10 3S2 20.657 2 19s4.477-3 10-3s10 1.343 10 3m0-14c0 1.657-4.477 3-10 3S2 6.657 2 5s4.477-3 10-3s10 1.343 10 3m0 0v14M2 5v14" color="currentColor"></svg:path>`,
})
export class HugeiconsCylinder03Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCylinder04Icon],svg[hugeicons-cylinder-04-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="m12 19l-2.121 2.121m0 0a3 3 0 1 0 4.243-4.242a3 3 0 0 0-4.243 4.242"></svg:path><svg:path d="M10 16h4c2.809 0 4.213 0 5.222-.674a4 4 0 0 0 1.104-1.104C21 13.213 21 11.81 21 9s0-4.213-.674-5.222a4 4 0 0 0-1.104-1.104C18.213 2 16.81 2 14 2h-4c-2.809 0-4.213 0-5.222.674a4 4 0 0 0-1.104 1.104C3 4.787 3 6.19 3 9s0 4.213.674 5.222a4 4 0 0 0 1.104 1.104C5.787 16 7.19 16 10 16"></svg:path></svg:g>`,
})
export class HugeiconsCylinder04Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDangerIcon],svg[hugeicons-danger-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M10.5 11.25a1.75 1.75 0 1 0-3.5 0a1.75 1.75 0 0 0 3.5 0m6.5 0a1.75 1.75 0 1 0-3.5 0a1.75 1.75 0 0 0 3.5 0M11 16l.293-.37c.333-.42.5-.63.707-.63s.374.21.707.63L13 16"></svg:path><svg:path d="M12 2c-4.694 0-8.5 3.766-8.5 8.413c0 1.753.542 3.382 1.47 4.73c-.253.28-.407.648-.407 1.053c0 .871.713 1.578 1.593 1.578v1.219c0 .65.31 1.269.87 1.597c3.21 1.88 6.739 1.88 9.948 0c.56-.328.87-.948.87-1.597v-1.22c.88 0 1.593-.706 1.593-1.577c0-.405-.154-.774-.407-1.053a8.3 8.3 0 0 0 1.47-4.73C20.5 5.766 16.694 2 12 2m2 19.5V20m-4 1.5V20"></svg:path></svg:g>`,
})
export class HugeiconsDangerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDarkModeIcon],svg[hugeicons-dark-mode-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10"></svg:path><svg:path d="M16.5 12a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0M12 2v20"></svg:path></svg:g>`,
})
export class HugeiconsDarkModeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDartIcon],svg[hugeicons-dart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.5 4.5L22 2M2.067 19.407c-.07-.42-.105-.63-.004-.794c.102-.162.306-.224.714-.346L7 17l-1.267 4.223c-.122.408-.184.612-.346.714c-.163.101-.374.066-.794-.004l-1.45-.241c-.345-.058-.518-.087-.633-.202s-.144-.288-.201-.634zM15 6l3 3m-9.18 6.93l9.844-6.483a2.968 2.968 0 1 0-4.11-4.111L8.07 15.18c-.28.425.332 1.024.75.75M7 17l1-1" color="currentColor"></svg:path>`,
})
export class HugeiconsDartIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDashboardBrowsingIcon],svg[hugeicons-dashboard-browsing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12 2.5c4.478 0 6.718 0 8.109 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109S16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391S2.5 16.479 2.5 12m0-3h19M7 6h.009M11 6h.009"></svg:path><svg:path d="M17 17a5 5 0 0 0-10 0m5.707-1.707l-1.414 1.414"></svg:path></svg:g>`,
})
export class HugeiconsDashboardBrowsingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDashboardCircleIcon],svg[hugeicons-dashboard-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:circle cx="17.75" cy="6.25" r="4.25"></svg:circle><svg:circle cx="6.25" cy="6.25" r="4.25"></svg:circle><svg:circle cx="17.75" cy="17.75" r="4.25"></svg:circle><svg:circle cx="6.25" cy="17.75" r="4.25"></svg:circle></svg:g>`,
})
export class HugeiconsDashboardCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDashboardCircleAddIcon],svg[hugeicons-dashboard-circle-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:circle cx="6.25" cy="6.25" r="4.25"></svg:circle><svg:circle cx="17.75" cy="17.75" r="4.25"></svg:circle><svg:circle cx="6.25" cy="17.75" r="4.25"></svg:circle><svg:path d="M18 2v8m4-4h-8"></svg:path></svg:g>`,
})
export class HugeiconsDashboardCircleAddIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDashboardCircleEditIcon],svg[hugeicons-dashboard-circle-edit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6.25 10.5a4.25 4.25 0 1 0 0-8.5a4.25 4.25 0 0 0 0 8.5M17.75 22a4.25 4.25 0 1 0 0-8.5a4.25 4.25 0 0 0 0 8.5m-11.5 0a4.25 4.25 0 1 0 0-8.5a4.25 4.25 0 0 0 0 8.5M20.868 2.439l.692.692a1.5 1.5 0 0 1 0 2.122l-3.627 3.695a2 2 0 0 1-1.047.552l-2.248.488a.5.5 0 0 1-.595-.593l.478-2.236a2 2 0 0 1 .552-1.047l3.674-3.673a1.5 1.5 0 0 1 2.12 0" color="currentColor"></svg:path>`,
})
export class HugeiconsDashboardCircleEditIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDashboardCircleRemoveIcon],svg[hugeicons-dashboard-circle-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:circle cx="6.25" cy="6.25" r="4.25"></svg:circle><svg:circle cx="17.75" cy="17.75" r="4.25"></svg:circle><svg:circle cx="6.25" cy="17.75" r="4.25"></svg:circle><svg:path d="M22 6h-8"></svg:path></svg:g>`,
})
export class HugeiconsDashboardCircleRemoveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDashboardCircleSettingsIcon],svg[hugeicons-dashboard-circle-settings-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:circle cx="6.25" cy="6.25" r="4.25"></svg:circle><svg:path d="M18 9.357V10.5m0-1.143a2.93 2.93 0 0 1-2.427-1.272M18 9.357a2.93 2.93 0 0 0 2.427-1.272M18 3.643a2.93 2.93 0 0 1 2.427 1.272M18 3.643a2.93 2.93 0 0 0-2.427 1.272M18 3.643V2.5m3.5 1.714l-1.073.701M14.5 8.785l1.073-.7M14.5 4.215l1.073.7m5.927 3.87l-1.073-.7m0-3.17a2.8 2.8 0 0 1 0 3.17m-4.854-3.17a2.8 2.8 0 0 0 0 3.17"></svg:path><svg:circle cx="17.75" cy="17.75" r="4.25"></svg:circle><svg:circle cx="6.25" cy="17.75" r="4.25"></svg:circle></svg:g>`,
})
export class HugeiconsDashboardCircleSettingsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDashboardSpeed01Icon],svg[hugeicons-dashboard-speed-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M13.5 13L17 9m-3 6a2 2 0 1 1-4 0a2 2 0 0 1 4 0m-8-3a6 6 0 0 1 9-5.197"></svg:path><svg:path d="M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12 2.5c4.478 0 6.718 0 8.109 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109S16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391S2.5 16.479 2.5 12"></svg:path></svg:g>`,
})
export class HugeiconsDashboardSpeed01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDashboardSpeed02Icon],svg[hugeicons-dashboard-speed-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:circle cx="12" cy="18" r="3"></svg:circle><svg:path d="M12 15v-5m10 3c0-5.523-4.477-10-10-10S2 7.477 2 13"></svg:path></svg:g>`,
})
export class HugeiconsDashboardSpeed02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDashboardSquare01Icon],svg[hugeicons-dashboard-square-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2 18c0-1.54 0-2.31.347-2.876c.194-.317.46-.583.777-.777C3.689 14 4.46 14 6 14s2.31 0 2.876.347c.317.194.583.46.777.777C10 15.689 10 16.46 10 18s0 2.31-.347 2.877c-.194.316-.46.582-.777.776C8.311 22 7.54 22 6 22s-2.31 0-2.876-.347a2.35 2.35 0 0 1-.777-.776C2 20.31 2 19.54 2 18m12 0c0-1.54 0-2.31.347-2.876c.194-.317.46-.583.777-.777C15.689 14 16.46 14 18 14s2.31 0 2.877.347c.316.194.582.46.776.777C22 15.689 22 16.46 22 18s0 2.31-.347 2.877a2.36 2.36 0 0 1-.776.776C20.31 22 19.54 22 18 22s-2.31 0-2.876-.347a2.35 2.35 0 0 1-.777-.776C14 20.31 14 19.54 14 18M2 6c0-1.54 0-2.31.347-2.876c.194-.317.46-.583.777-.777C3.689 2 4.46 2 6 2s2.31 0 2.876.347c.317.194.583.46.777.777C10 3.689 10 4.46 10 6s0 2.31-.347 2.876c-.194.317-.46.583-.777.777C8.311 10 7.54 10 6 10s-2.31 0-2.876-.347a2.35 2.35 0 0 1-.777-.777C2 8.311 2 7.54 2 6m12 0c0-1.54 0-2.31.347-2.876c.194-.317.46-.583.777-.777C15.689 2 16.46 2 18 2s2.31 0 2.877.347c.316.194.582.46.776.777C22 3.689 22 4.46 22 6s0 2.31-.347 2.876c-.194.317-.46.583-.776.777C20.31 10 19.54 10 18 10s-2.31 0-2.876-.347a2.35 2.35 0 0 1-.777-.777C14 8.311 14 7.54 14 6" color="currentColor"></svg:path>`,
})
export class HugeiconsDashboardSquare01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDashboardSquare02Icon],svg[hugeicons-dashboard-square-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2 6c0-1.886 0-2.828.586-3.414S4.114 2 6 2s2.828 0 3.414.586S10 4.114 10 6v2c0 1.886 0 2.828-.586 3.414S7.886 12 6 12s-2.828 0-3.414-.586S2 9.886 2 8zm0 13c0-.932 0-1.398.152-1.765a2 2 0 0 1 1.083-1.083C3.602 16 4.068 16 5 16h2c.932 0 1.398 0 1.765.152a2 2 0 0 1 1.083 1.083C10 17.602 10 18.068 10 19s0 1.398-.152 1.765a2 2 0 0 1-1.083 1.083C8.398 22 7.932 22 7 22H5c-.932 0-1.398 0-1.765-.152a2 2 0 0 1-1.083-1.083C2 20.398 2 19.932 2 19m12-3c0-1.886 0-2.828.586-3.414S16.114 12 18 12s2.828 0 3.414.586S22 14.114 22 16v2c0 1.886 0 2.828-.586 3.414S19.886 22 18 22s-2.828 0-3.414-.586S14 19.886 14 18zm0-11c0-.932 0-1.398.152-1.765a2 2 0 0 1 1.083-1.083C15.602 2 16.068 2 17 2h2c.932 0 1.398 0 1.765.152a2 2 0 0 1 1.083 1.083C22 3.602 22 4.068 22 5s0 1.398-.152 1.765a2 2 0 0 1-1.083 1.083C20.398 8 19.932 8 19 8h-2c-.932 0-1.398 0-1.765-.152a2 2 0 0 1-1.083-1.083C14 6.398 14 5.932 14 5" color="currentColor"></svg:path>`,
})
export class HugeiconsDashboardSquare02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDashboardSquare03Icon],svg[hugeicons-dashboard-square-03-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 5c0-.932 0-1.398.152-1.765a2 2 0 0 1 1.083-1.083C17.602 2 18.068 2 19 2s1.398 0 1.765.152a2 2 0 0 1 1.083 1.083C22 3.602 22 4.068 22 5v4c0 .932 0 1.398-.152 1.765a2 2 0 0 1-1.083 1.083C20.398 12 19.932 12 19 12s-1.398 0-1.765-.152a2 2 0 0 1-1.083-1.083C16 10.398 16 9.932 16 9zm0 14c0-.932 0-1.398.152-1.765a2 2 0 0 1 1.083-1.083C17.602 16 18.068 16 19 16s1.398 0 1.765.152a2 2 0 0 1 1.083 1.083C22 17.602 22 18.068 22 19s0 1.398-.152 1.765a2 2 0 0 1-1.083 1.083C20.398 22 19.932 22 19 22s-1.398 0-1.765-.152a2 2 0 0 1-1.083-1.083C16 20.398 16 19.932 16 19M2 16c0-1.886 0-2.828.586-3.414S4.114 12 6 12h2c1.886 0 2.828 0 3.414.586S12 14.114 12 16v2c0 1.886 0 2.828-.586 3.414S9.886 22 8 22H6c-1.886 0-2.828 0-3.414-.586S2 19.886 2 18zM2 5c0-.932 0-1.398.152-1.765a2 2 0 0 1 1.083-1.083C3.602 2 4.068 2 5 2h4c.932 0 1.398 0 1.765.152a2 2 0 0 1 1.083 1.083C12 3.602 12 4.068 12 5s0 1.398-.152 1.765a2 2 0 0 1-1.083 1.083C10.398 8 9.932 8 9 8H5c-.932 0-1.398 0-1.765-.152a2 2 0 0 1-1.083-1.083C2 6.398 2 5.932 2 5" color="currentColor"></svg:path>`,
})
export class HugeiconsDashboardSquare03Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDashboardSquareAddIcon],svg[hugeicons-dashboard-square-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18 2v8m4-4h-8M2 6c0-1.4 0-2.1.272-2.635a2.5 2.5 0 0 1 1.093-1.093C3.9 2 4.6 2 6 2s2.1 0 2.635.272a2.5 2.5 0 0 1 1.093 1.093C10 3.9 10 4.6 10 6s0 2.1-.272 2.635a2.5 2.5 0 0 1-1.093 1.093C8.1 10 7.4 10 6 10s-2.1 0-2.635-.272a2.5 2.5 0 0 1-1.093-1.093C2 8.1 2 7.4 2 6m0 12c0-1.4 0-2.1.272-2.635a2.5 2.5 0 0 1 1.093-1.092C3.9 14 4.6 14 6 14s2.1 0 2.635.273a2.5 2.5 0 0 1 1.093 1.092C10 15.9 10 16.6 10 18s0 2.1-.272 2.635a2.5 2.5 0 0 1-1.093 1.092C8.1 22 7.4 22 6 22s-2.1 0-2.635-.273a2.5 2.5 0 0 1-1.093-1.092C2 20.1 2 19.4 2 18m12 0c0-1.4 0-2.1.273-2.635a2.5 2.5 0 0 1 1.092-1.092C15.9 14 16.6 14 18 14s2.1 0 2.635.273a2.5 2.5 0 0 1 1.092 1.092C22 15.9 22 16.6 22 18s0 2.1-.273 2.635a2.5 2.5 0 0 1-1.092 1.092C20.1 22 19.4 22 18 22s-2.1 0-2.635-.273a2.5 2.5 0 0 1-1.092-1.092C14 20.1 14 19.4 14 18" color="currentColor"></svg:path>`,
})
export class HugeiconsDashboardSquareAddIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDashboardSquareEditIcon],svg[hugeicons-dashboard-square-edit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path stroke="currentColor" d="M2 6c0-1.4 0-2.1.272-2.635a2.5 2.5 0 0 1 1.093-1.093C3.9 2 4.6 2 6 2s2.1 0 2.635.272a2.5 2.5 0 0 1 1.093 1.093C10 3.9 10 4.6 10 6s0 2.1-.272 2.635a2.5 2.5 0 0 1-1.093 1.093C8.1 10 7.4 10 6 10s-2.1 0-2.635-.272a2.5 2.5 0 0 1-1.093-1.093C2 8.1 2 7.4 2 6m0 12c0-1.4 0-2.1.272-2.635a2.5 2.5 0 0 1 1.093-1.092C3.9 14 4.6 14 6 14s2.1 0 2.635.273a2.5 2.5 0 0 1 1.093 1.092C10 15.9 10 16.6 10 18s0 2.1-.272 2.635a2.5 2.5 0 0 1-1.093 1.092C8.1 22 7.4 22 6 22s-2.1 0-2.635-.273a2.5 2.5 0 0 1-1.093-1.092C2 20.1 2 19.4 2 18m12 0c0-1.4 0-2.1.273-2.635a2.5 2.5 0 0 1 1.092-1.092C15.9 14 16.6 14 18 14s2.1 0 2.635.273a2.5 2.5 0 0 1 1.092 1.092C22 15.9 22 16.6 22 18s0 2.1-.273 2.635a2.5 2.5 0 0 1-1.092 1.092C20.1 22 19.4 22 18 22s-2.1 0-2.635-.273a2.5 2.5 0 0 1-1.092-1.092C14 20.1 14 19.4 14 18"></svg:path><svg:path fill="currentColor" d="m15.348 9.856l-.157-.734zm-1.204-1.204l.734.157zm.877-2.54l-.53-.53zm2.867 2.867l.53.53zm3.908-5.502l.65-.375zm-.6 2.194l-.53-.53zm.6-.673l.65.375zm-1.273-2.794l.375-.65zm-2.195.6l.53.53zm.674-.6l-.375-.65zm1.664 2.937L17.358 8.45l1.06 1.06l3.309-3.307zM15.55 6.642l3.308-3.308l-1.06-1.06L14.49 5.58zm-.36 2.48c-.176.038-.316.068-.436.09a2 2 0 0 1-.255.037c-.056.003-.052-.003-.018.006a.4.4 0 0 1 .166.097l-1.06 1.06c.323.324.728.352 1.007.334c.265-.017.589-.088.91-.157zm-1.78-.627c-.069.321-.14.645-.157.91c-.018.28.01.684.334 1.007l1.06-1.06a.4.4 0 0 1 .097.165c.01.035.003.039.006-.017c.004-.054.014-.133.037-.255c.022-.12.052-.26.09-.436zm7.255-5.16c.367.367.442.451.48.517l1.3-.75c-.162-.28-.42-.53-.72-.828zm1.06 2.867c.3-.3.558-.548.72-.829l-1.3-.75c-.038.066-.113.15-.48.518zm-.58-2.35a.77.77 0 0 1 0 .771l1.3.75a2.27 2.27 0 0 0 0-2.27zm.58-1.578c-.299-.3-.548-.558-.828-.72l-.75 1.3c.066.038.15.113.518.48zm-2.867 1.06c.367-.367.452-.442.518-.48l-.75-1.3c-.28.162-.53.42-.829.72zm2.039-1.78a2.27 2.27 0 0 0-2.271 0l.75 1.3a.77.77 0 0 1 .77 0zm-3.54 6.895c-.196.196-.463.322-.843.419c-.19.048-.393.086-.619.125c-.217.038-.466.078-.705.13l.313 1.466c.202-.043.41-.077.648-.118c.23-.04.483-.085.735-.15c.504-.129 1.066-.346 1.532-.811zm-2.48.36c.05-.24.091-.488.129-.705c.039-.226.077-.43.125-.62c.097-.38.223-.646.419-.842l-1.06-1.06c-.466.465-.683 1.027-.812 1.531c-.065.252-.11.506-.15.735c-.041.239-.075.446-.118.647z"></svg:path></svg:g>`,
})
export class HugeiconsDashboardSquareEditIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDashboardSquareRemoveIcon],svg[hugeicons-dashboard-square-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M22 6h-8M2 6c0-1.4 0-2.1.272-2.635a2.5 2.5 0 0 1 1.093-1.093C3.9 2 4.6 2 6 2s2.1 0 2.635.272a2.5 2.5 0 0 1 1.093 1.093C10 3.9 10 4.6 10 6s0 2.1-.272 2.635a2.5 2.5 0 0 1-1.093 1.093C8.1 10 7.4 10 6 10s-2.1 0-2.635-.272a2.5 2.5 0 0 1-1.093-1.093C2 8.1 2 7.4 2 6m0 12c0-1.4 0-2.1.272-2.635a2.5 2.5 0 0 1 1.093-1.092C3.9 14 4.6 14 6 14s2.1 0 2.635.273a2.5 2.5 0 0 1 1.093 1.092C10 15.9 10 16.6 10 18s0 2.1-.272 2.635a2.5 2.5 0 0 1-1.093 1.092C8.1 22 7.4 22 6 22s-2.1 0-2.635-.273a2.5 2.5 0 0 1-1.093-1.092C2 20.1 2 19.4 2 18m12 0c0-1.4 0-2.1.273-2.635a2.5 2.5 0 0 1 1.092-1.092C15.9 14 16.6 14 18 14s2.1 0 2.635.273a2.5 2.5 0 0 1 1.092 1.092C22 15.9 22 16.6 22 18s0 2.1-.273 2.635a2.5 2.5 0 0 1-1.092 1.092C20.1 22 19.4 22 18 22s-2.1 0-2.635-.273a2.5 2.5 0 0 1-1.092-1.092C14 20.1 14 19.4 14 18" color="currentColor"></svg:path>`,
})
export class HugeiconsDashboardSquareRemoveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDashboardSquareSettingIcon],svg[hugeicons-dashboard-square-setting-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18 9.357V10.5m0-1.143a2.93 2.93 0 0 1-2.427-1.272M18 9.357a2.93 2.93 0 0 0 2.427-1.272M18 3.643a2.93 2.93 0 0 1 2.427 1.272M18 3.643a2.93 2.93 0 0 0-2.427 1.272M18 3.643V2.5m3.5 1.714l-1.073.701M14.5 8.785l1.073-.7M14.5 4.215l1.073.7m5.927 3.87l-1.073-.7m0-3.17a2.8 2.8 0 0 1 0 3.17m-4.854-3.17a2.8 2.8 0 0 0 0 3.17M2 6c0-1.4 0-2.1.272-2.635a2.5 2.5 0 0 1 1.093-1.093C3.9 2 4.6 2 6 2s2.1 0 2.635.272a2.5 2.5 0 0 1 1.093 1.093C10 3.9 10 4.6 10 6s0 2.1-.272 2.635a2.5 2.5 0 0 1-1.093 1.093C8.1 10 7.4 10 6 10s-2.1 0-2.635-.272a2.5 2.5 0 0 1-1.093-1.093C2 8.1 2 7.4 2 6m0 12c0-1.4 0-2.1.272-2.635a2.5 2.5 0 0 1 1.093-1.092C3.9 14 4.6 14 6 14s2.1 0 2.635.273a2.5 2.5 0 0 1 1.093 1.092C10 15.9 10 16.6 10 18s0 2.1-.272 2.635a2.5 2.5 0 0 1-1.093 1.092C8.1 22 7.4 22 6 22s-2.1 0-2.635-.273a2.5 2.5 0 0 1-1.093-1.092C2 20.1 2 19.4 2 18m12 0c0-1.4 0-2.1.273-2.635a2.5 2.5 0 0 1 1.092-1.092C15.9 14 16.6 14 18 14s2.1 0 2.635.273a2.5 2.5 0 0 1 1.092 1.092C22 15.9 22 16.6 22 18s0 2.1-.273 2.635a2.5 2.5 0 0 1-1.092 1.092C20.1 22 19.4 22 18 22s-2.1 0-2.635-.273a2.5 2.5 0 0 1-1.092-1.092C14 20.1 14 19.4 14 18" color="currentColor"></svg:path>`,
})
export class HugeiconsDashboardSquareSettingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDashedLine01Icon],svg[hugeicons-dashed-line-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 12h2.5m-8 0H16m-8 0h2.5m-8 0H5" color="currentColor"></svg:path>`,
})
export class HugeiconsDashedLine01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDashedLine02Icon],svg[hugeicons-dashed-line-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6.3 2.751c-1.04.194-1.804.536-2.409 1.14c-.604.605-.946 1.37-1.14 2.409M17.7 2.751c1.04.194 1.804.536 2.409 1.14c.604.605.946 1.37 1.14 2.409M13.9 2.505q-.875-.006-1.9-.005q-1.025-.001-1.9.005M21.495 10.1q.006.875.005 1.9q.001 1.025-.005 1.9m-18.99-3.8q-.006.875-.005 1.9q-.001 1.025.005 1.9m.246 3.8c.194 1.04.536 1.804 1.14 2.409c.605.604 1.37.946 2.409 1.14M21.249 17.7c-.194 1.04-.536 1.804-1.14 2.409c-.605.604-1.37.946-2.409 1.14m-3.8.246q-.875.006-1.9.005q-1.024.001-1.9-.005" color="currentColor"></svg:path>`,
})
export class HugeiconsDashedLine02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDashedLineCircleIcon],svg[hugeicons-dashed-line-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.252 22.75c-.71 0-1.43-.07-2.15-.21a.75.75 0 0 1 .29-1.47c1.23.25 2.47.25 3.71 0c.41-.08.8.18.88.59s-.18.8-.59.88c-.71.14-1.44.21-2.15.21zm5.5-1.65c-.24 0-.48-.12-.63-.34a.747.747 0 0 1 .22-1.04a9.15 9.15 0 0 0 2.63-2.63c.23-.35.69-.44 1.04-.22c.35.23.44.69.22 1.04c-.79 1.21-1.86 2.27-3.07 3.07c-.13.08-.27.12-.41.12m-11 0c-.14 0-.28-.04-.41-.12a10.7 10.7 0 0 1-3.07-3.07a.747.747 0 0 1 .22-1.04c.35-.23.81-.13 1.04.22a9.15 9.15 0 0 0 2.63 2.63c.35.23.44.69.22 1.04a.74.74 0 0 1-.63.34m15.3-6.35s-.1 0-.15-.01a.75.75 0 0 1-.59-.88c.12-.61.19-1.24.19-1.85s-.06-1.24-.19-1.85c-.08-.41.18-.8.59-.88s.8.18.88.59a11.1 11.1 0 0 1 0 4.3c-.07.36-.38.6-.73.6zm-19.6 0c-.35 0-.66-.25-.73-.6a11.1 11.1 0 0 1 0-4.3c.08-.41.48-.66.88-.59c.41.08.67.48.59.88c-.12.61-.19 1.24-.19 1.85s.06 1.24.19 1.85c.08.41-.18.8-.59.88c-.05 0-.1.01-.15.01zm18.15-7.5c-.24 0-.48-.12-.63-.34a9.15 9.15 0 0 0-2.63-2.63a.756.756 0 0 1-.22-1.04c.23-.35.69-.44 1.04-.22c1.21.79 2.27 1.85 3.07 3.07a.747.747 0 0 1-.63 1.16m-16.7 0c-.14 0-.28-.04-.41-.12a.756.756 0 0 1-.22-1.04c.79-1.21 1.86-2.27 3.07-3.07c.35-.23.81-.13 1.04.22s.13.81-.22 1.04a9.15 9.15 0 0 0-2.63 2.63a.74.74 0 0 1-.63.34m10.35-4.3s-.1 0-.15-.01a9.3 9.3 0 0 0-3.71 0c-.41.08-.8-.18-.88-.59s.18-.8.59-.88c1.43-.29 2.87-.29 4.29 0c.41.08.67.48.59.88c-.07.36-.38.6-.73.6" color="currentColor"></svg:path>`,
})
export class HugeiconsDashedLineCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDataRecoveryIcon],svg[hugeicons-data-recovery-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M3 12c0 1.657 3.582 3 8 3q.508 0 1-.023"></svg:path><svg:path d="M19 5v6.5M3 5v14c0 1.657 3.582 3 8 3q.508 0 1-.023"></svg:path><svg:ellipse cx="11" cy="5" rx="8" ry="3"></svg:ellipse><svg:path d="M7 8v2m0 5v2m12.987-3l.5 2.084l-.83-.518a3.5 3.5 0 0 0-2.122-.715c-1.952 0-3.535 1.6-3.535 3.575C14 20.4 15.583 22 17.535 22c1.71 0 3.137-1.228 3.465-2.86"></svg:path></svg:g>`,
})
export class HugeiconsDataRecoveryIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDatabaseIcon],svg[hugeicons-database-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:ellipse cx="12" cy="5" rx="8" ry="3"></svg:ellipse><svg:path d="M7 10.842c.602.18 1.274.33 2 .44M20 12c0 1.657-3.582 3-8 3s-8-1.343-8-3m3 5.842c.602.18 1.274.33 2 .44"></svg:path><svg:path d="M20 5v14c0 1.657-3.582 3-8 3s-8-1.343-8-3V5"></svg:path></svg:g>`,
})
export class HugeiconsDatabaseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDatabase01Icon],svg[hugeicons-database-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12 2.5c4.478 0 6.718 0 8.109 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109S16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391S2.5 16.479 2.5 12m0 0h19M13 7h4"></svg:path><svg:circle cx="8.25" cy="7" r="1.25"></svg:circle><svg:circle cx="8.25" cy="17" r="1.25"></svg:circle><svg:path d="M13 17h4"></svg:path></svg:g>`,
})
export class HugeiconsDatabase01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDatabase02Icon],svg[hugeicons-database-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:ellipse cx="12" cy="5" rx="8" ry="3"></svg:ellipse><svg:path d="M20 12c0 1.657-3.582 3-8 3s-8-1.343-8-3"></svg:path><svg:path d="M20 5v14c0 1.657-3.582 3-8 3s-8-1.343-8-3V5m4 3v2m0 5v2"></svg:path></svg:g>`,
})
export class HugeiconsDatabase02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDatabaseAddIcon],svg[hugeicons-database-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M11 15c-4.418 0-8-1.343-8-3"></svg:path><svg:path d="M19 5v6.5M3 5v14c0 1.657 3.582 3 8 3q.252 0 .5-.006"></svg:path><svg:ellipse cx="11" cy="5" rx="8" ry="3"></svg:ellipse><svg:path d="M7 8v2m0 5v2m10-.333V18m0 0v1.333M17 18h1.333M17 18h-1.333M21 18a4 4 0 1 1-8 0a4 4 0 0 1 8 0"></svg:path></svg:g>`,
})
export class HugeiconsDatabaseAddIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDatabaseExportIcon],svg[hugeicons-database-export-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:ellipse cx="11" cy="5" rx="8" ry="3"></svg:ellipse><svg:path d="M6 10.842c.602.18 1.274.33 2 .44M11 15c-4.418 0-8-1.343-8-3m3 5.842c.602.18 1.274.33 2 .44"></svg:path><svg:path d="M11 22c-4.418 0-8-1.343-8-3V5m16 0v7m0 4.674l-1.174-1.487C17.2 14.396 16.888 14 16.5 14s-.7.396-1.326 1.187L14 16.674m2.5-2.587V22"></svg:path></svg:g>`,
})
export class HugeiconsDatabaseExportIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDatabaseImportIcon],svg[hugeicons-database-import-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:ellipse cx="12" cy="5" rx="8" ry="3"></svg:ellipse><svg:path d="M7 10.842c.602.18 1.274.33 2 .44M12 15c-4.418 0-8-1.343-8-3m3 5.842c.602.18 1.274.33 2 .44"></svg:path><svg:path d="M12 22c-4.418 0-8-1.343-8-3V5m16 0v7m0 7.327l-1.174 1.486C18.2 21.604 17.888 22 17.5 22s-.7-.396-1.326-1.187L15 19.327m2.5 2.586V14"></svg:path></svg:g>`,
})
export class HugeiconsDatabaseImportIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDatabaseLockedIcon],svg[hugeicons-database-locked-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M10.999 8c4.418 0 8-1.344 8-3c0-1.657-3.582-3-8-3s-8 1.343-8 3c0 1.656 3.581 3 8 3m-5 2.841c.601.181 1.274.33 2 .44m3 3.719c-4.419 0-8-1.344-8-3m3 5.841c.601.181 1.274.33 2 .44"></svg:path><svg:path d="M10.999 22c-4.419 0-8-1.344-8-3V5m16 0v5.5m-3.257 5.878c0-.06.009-.825.01-1.26c.001-.396-.034-.78.156-1.13c.71-1.412 2.75-1.268 3.254.171c.088.237.093.613.09.96c-.003.443.006 1.26.006 1.26m-3.516 0c-1.08 0-1.523.779-1.643 1.258c-.12.48-.12 2.22-.048 2.94c.24.899.84 1.27 1.427 1.39c.54.049 2.82.03 3.48.03c.96.019 1.68-.341 1.98-1.42c.06-.36.12-2.34-.03-2.94c-.319-.96-1.05-1.259-1.65-1.259m-3.516 0h3.516"></svg:path></svg:g>`,
})
export class HugeiconsDatabaseLockedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDatabaseRestoreIcon],svg[hugeicons-database-restore-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:ellipse cx="11" cy="5" rx="8" ry="3"></svg:ellipse><svg:path d="M6 10.842c.602.18 1.274.33 2 .44m-2 6.56c.602.18 1.274.33 2 .44M19.842 13l.57 2.345l-.947-.583a4.04 4.04 0 0 0-2.425-.804c-2.231 0-4.04 1.8-4.04 4.02C13 20.2 14.809 22 17.04 22A4.04 4.04 0 0 0 21 18.783"></svg:path><svg:path d="M19 5v5M3 5v14c0 1.657 3.582 3 8 3q.128 0 .254-.002"></svg:path><svg:path d="M3 12c0 1.616 3.407 2.934 7.675 2.998"></svg:path></svg:g>`,
})
export class HugeiconsDatabaseRestoreIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDatabaseSettingIcon],svg[hugeicons-database-setting-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:ellipse cx="11" cy="5" rx="8" ry="3"></svg:ellipse><svg:path d="M6 10.842c.602.18 1.274.33 2 .44M3 12c0 1.53 3.054 2.792 7 2.977m-4 2.865c.602.18 1.274.33 2 .44"></svg:path><svg:path d="M11 22c-4.418 0-8-1.343-8-3V5m16 0v6m-2 9.714V22m0-1.286a3.36 3.36 0 0 1-2.774-1.43M17 20.713a3.36 3.36 0 0 0 2.774-1.43M17 14.285c1.157 0 2.176.568 2.774 1.43M17 14.287a3.36 3.36 0 0 0-2.774 1.43M17 14.287V13m4 1.929l-1.226.788M13 20.07l1.226-.788M13 14.93l1.226.788M21 20.07l-1.226-.788m0-3.566a3.12 3.12 0 0 1 0 3.566m-5.548-3.566a3.12 3.12 0 0 0 0 3.566"></svg:path></svg:g>`,
})
export class HugeiconsDatabaseSettingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDatabaseSyncIcon],svg[hugeicons-database-sync-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="m13 17l1.023.594c.514-1.866 2.488-2.974 4.409-2.474a3.58 3.58 0 0 1 2.218 1.686M22 20l-1.023-.594c-.514 1.866-2.488 2.974-4.409 2.474a3.58 3.58 0 0 1-2.186-1.63"></svg:path><svg:path d="M21 13v-1.5c0-4.478 0-6.718-1.391-8.109S15.979 2 11.5 2C7.022 2 4.782 2 3.391 3.391S2 7.021 2 11.5c0 4.478 0 6.718 1.391 8.109C4.618 20.835 6.503 20.98 10 20.998h1M2 11.5h19m-8.5-5h4"></svg:path><svg:circle cx="7.75" cy="6.5" r="1.25"></svg:circle><svg:circle cx="7.75" cy="16.5" r="1.25"></svg:circle></svg:g>`,
})
export class HugeiconsDatabaseSyncIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDatabaseSync01Icon],svg[hugeicons-database-sync-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:ellipse cx="10" cy="5" rx="8" ry="3"></svg:ellipse><svg:path d="M5 10.842c.602.18 1.274.33 2 .44m-2 6.56c.602.18 1.274.33 2 .44m5-2.782l1.136 1.465a4 4 0 0 1 7.364-.901m1.5 4.434l-1.136-1.463a4 4 0 0 1-7.328.965"></svg:path><svg:path d="M18 5v6.008M2 5v14.02c0 1.53 3.054 2.794 7 2.98"></svg:path><svg:path d="M2 12c0 1.542 3.054 2.814 7 3"></svg:path></svg:g>`,
})
export class HugeiconsDatabaseSync01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDateTimeIcon],svg[hugeicons-date-time-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M17.297 6.572c-.41 0-.75-.34-.75-.75V4.598c-.774-.026-1.683-.026-2.75-.026h-2c-1.068 0-1.976 0-2.75.026v1.224c0 .41-.34.75-.75.75s-.75-.34-.75-.75V4.706c-.945.123-1.594.36-2.05.816c-.602.602-.822 1.54-.903 3.05H21c-.081-1.51-.302-2.448-.903-3.05c-.456-.456-1.105-.693-2.05-.816v1.116c0 .41-.34.75-.75.75m3.744 3.5q.008.793.006 1.75v1c0 .41.34.75.75.75s.75-.34.75-.75v-1c0-3.98 0-5.97-1.39-7.36c-.772-.772-1.73-1.115-3.11-1.268v-.872c0-.41-.34-.75-.75-.75s-.75.34-.75.75v.775c-.796-.025-1.705-.025-2.75-.025h-2c-1.046 0-1.954 0-2.75.025v-.775c0-.41-.34-.75-.75-.75s-.75.34-.75.75v.872c-1.38.153-2.338.496-3.11 1.268c-1.39 1.39-1.39 3.39-1.39 7.36v2c0 3.98 0 5.97 1.39 7.36s3.38 1.39 7.36 1.39c.41 0 .75-.34.75-.75s-.34-.75-.75-.75c-3.56 0-5.35 0-6.3-.95s-.95-2.74-.95-6.3v-2q-.001-.956.005-1.75zm-3.244 13c-2.62 0-4.75-2.13-4.75-4.75s2.13-4.75 4.75-4.75s4.75 2.13 4.75 4.75s-2.13 4.75-4.75 4.75m0-8c-1.79 0-3.25 1.46-3.25 3.25s1.46 3.25 3.25 3.25s3.25-1.46 3.25-3.25s-1.46-3.25-3.25-3.25m.47 4.78c.15.15.34.22.53.22s.38-.07.53-.22c.29-.29.29-.77 0-1.06l-.78-.78v-1.69c0-.41-.34-.75-.75-.75s-.75.34-.75.75v2c0 .2.08.39.22.53z" color="currentColor"></svg:path>`,
})
export class HugeiconsDateTimeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDatesIcon],svg[hugeicons-dates-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M10.964 5.996c.373 1.843-.837 4.502-4.008 3.915m.877-2.844c.893-1.049 3.061-1.48 5.634-.6c1.113.306 3.514 1.495 4.617 2.373c1.345.895 3.261 2.794 3.761 4.768c.546 1.819-.3 4.56-2.957 6.358c-2.54 1.72-6.1 1.764-9.556-3.596c-.128 0-4.102-6.466-1.499-9.303"></svg:path><svg:path d="M2 14.081c2.059-.414 4.4.844 3.998 3.915m10.94-10.19c0-.189-.411-1.147-.817-1.646c-1.828-2.632-4.54-3.58-6.444-2.99c-1.976.494-3.866 2.335-4.765 3.678c-1.063 1.291-2.12 3.506-2.428 4.618c-.888 2.57-.474 4.793.572 5.689c.685.638 2.865 1.531 6.102 0"></svg:path><svg:path d="M11.002 13.021s0 1.224 1.217 1.223s1.218 1.224 1.218 1.224m.575-5.47s0 1.223 1.217 1.223s1.218 1.223 1.218 1.223m-.88 2.107s0 1.224 1.218 1.223s1.217 1.223 1.217 1.223"></svg:path></svg:g>`,
})
export class HugeiconsDatesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDatevIcon],svg[hugeicons-datev-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.496 14.994c-.28 0-.5-.22-.5-.5v-5c0-.28.22-.5.5-.5h1c1.65 0 3 1.35 3 3s-1.35 3-3 3zm.5-1h.5c1.1 0 2-.9 2-2s-.9-2-2-2h-.5zm4 1c-.06 0-.12-.01-.19-.04a.5.5 0 0 1-.28-.65l2-5c.15-.38.78-.38.93 0l2 5c.06.15.04.33-.05.47a.49.49 0 0 1-.41.22h-1.71c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h.97l-1.26-3.15l-1.54 3.84c-.08.2-.27.31-.46.31m14.541-.31c.07.19.26.31.46.31l.01.01c.2 0 .38-.12.46-.31l2-5a.52.52 0 0 0-.05-.47a.48.48 0 0 0-.41-.22h-1.71c-.28 0-.5.22-.5.5s.22.5.5.5h.97l-1.26 3.15l-1.54-3.84a.501.501 0 0 0-.93.37zm-8.54.31c-.28 0-.5-.22-.5-.5v-4.5h-1c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h3c.28 0 .5.22.5.5s-.22.5-.5.5h-1v4.5c0 .28-.22.5-.5.5m3 0h2.5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5h-2v-1.5h2c.28 0 .5-.22.5-.5s-.22-.5-.5-.5h-2v-1.5h2c.28 0 .5-.22.5-.5s-.22-.5-.5-.5h-2.5c-.28 0-.5.22-.5.5v5c0 .28.22.5.5.5" color="currentColor"></svg:path>`,
})
export class HugeiconsDatevIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDeadIcon],svg[hugeicons-dead-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:circle cx="12" cy="12" r="10"></svg:circle><svg:path d="M9 16h6m-5-5L8.5 9.5m0 0L7 8m1.5 1.5L7 11m1.5-1.5L10 8m7 3l-1.5-1.5m0 0L14 8m1.5 1.5L14 11m1.5-1.5L17 8"></svg:path></svg:g>`,
})
export class HugeiconsDeadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDeepseekIcon],svg[hugeicons-deepseek-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M20.725 6.166a2.42 2.42 0 0 0-1.771.786c-.216-1.023-.859-1.324-1.593-1.665c-.465-.216-.659-.696-.722-1.043c-.024-.133-.133-.24-.268-.24c-.134 0-.262.055-.326.173c-.14.25-.354.8-.373 1.81c-.029 1.503 1.21 2.662 1.834 3.053c-.064.37-.29.942-.395 1.182a4.9 4.9 0 0 1-1.87-1.234c-.958-1.043-1.738-1.781-2.756-2.503s-.337-1.583.09-1.788s.103-.415-.962-.379c-.853.029-2.067.53-2.567.777c-.51-.162-1.572-.194-2.038-.19C2.425 4.905 1 8.98 1 11c0 6.086 4.873 9 8.373 9c3.958 0 5.345-1.614 5.345-1.614c.164.101.76.316 1.838.362c1.349.057 1.851-.324 1.89-.617s-.179-.4-.37-.49c-.19-.089-.49-.26-1.055-.445c-.453-.147-.657-.308-.702-.37c2.73-2.472 3.23-5.935 3.153-7.407c2.112-.082 2.943-1.488 3.217-2.2c.28-.726.454-1.716.164-1.94c-.232-.18-.426.036-.494.167c-.372.396-.644.719-1.635.719"></svg:path><svg:path d="M12 10.568s.876-.27 1.645.255c1.041.71 1.355 1.676 1.355 1.676m-1.5 4s-1.041-.507-2.604-2.539c-1.878-2.44-3.647-5.074-7.367-4.213c0 0-.029 5.25 4.971 6.752"></svg:path></svg:g>`,
})
export class HugeiconsDeepseekIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDelete01Icon],svg[hugeicons-delete-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m19.5 5.5l-.62 10.025c-.158 2.561-.237 3.842-.88 4.763a4 4 0 0 1-1.2 1.128c-.957.584-2.24.584-4.806.584c-2.57 0-3.855 0-4.814-.585a4 4 0 0 1-1.2-1.13c-.642-.922-.72-2.205-.874-4.77L4.5 5.5M3 5.5h18m-4.944 0l-.683-1.408c-.453-.936-.68-1.403-1.071-1.695a2 2 0 0 0-.275-.172C13.594 2 13.074 2 12.035 2c-1.066 0-1.599 0-2.04.234a2 2 0 0 0-.278.18c-.395.303-.616.788-1.058 1.757L8.053 5.5" color="currentColor"></svg:path>`,
})
export class HugeiconsDelete01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDelete02Icon],svg[hugeicons-delete-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m19.5 5.5l-.62 10.025c-.158 2.561-.237 3.842-.88 4.763a4 4 0 0 1-1.2 1.128c-.957.584-2.24.584-4.806.584c-2.57 0-3.855 0-4.814-.585a4 4 0 0 1-1.2-1.13c-.642-.922-.72-2.205-.874-4.77L4.5 5.5M3 5.5h18m-4.944 0l-.683-1.408c-.453-.936-.68-1.403-1.071-1.695a2 2 0 0 0-.275-.172C13.594 2 13.074 2 12.035 2c-1.066 0-1.599 0-2.04.234a2 2 0 0 0-.278.18c-.395.303-.616.788-1.058 1.757L8.053 5.5m1.447 11v-6m5 6v-6" color="currentColor"></svg:path>`,
})
export class HugeiconsDelete02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDelete03Icon],svg[hugeicons-delete-03-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m19.5 5.5l-.62 10.025c-.158 2.561-.237 3.842-.88 4.763a4 4 0 0 1-1.2 1.128c-.957.584-2.24.584-4.806.584c-2.57 0-3.855 0-4.814-.585a4 4 0 0 1-1.2-1.13c-.642-.922-.72-2.205-.874-4.77L4.5 5.5M9 11.735h6m-4.5 3.919h3M3 5.5h18m-4.945 0l-.682-1.408c-.454-.936-.68-1.403-1.071-1.695a2 2 0 0 0-.275-.172C13.594 2 13.074 2 12.034 2c-1.065 0-1.598 0-2.039.234a2 2 0 0 0-.278.18c-.396.303-.617.788-1.059 1.757L8.053 5.5" color="currentColor"></svg:path>`,
})
export class HugeiconsDelete03Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDelete04Icon],svg[hugeicons-delete-04-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m19.5 5.5l-.402 6.506M4.5 5.5l.605 10.025c.154 2.567.232 3.85.874 4.774c.317.456.726.842 1.2 1.131c.671.41 1.502.533 2.821.57m10-7l-7 7m7 0l-7-7M3 5.5h18m-4.944 0l-.683-1.408c-.453-.936-.68-1.403-1.071-1.695a2 2 0 0 0-.275-.172C13.594 2 13.074 2 12.035 2c-1.066 0-1.599 0-2.04.234a2 2 0 0 0-.278.18c-.395.303-.616.788-1.058 1.757L8.053 5.5" color="currentColor"></svg:path>`,
})
export class HugeiconsDelete04Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDeleteColumnIcon],svg[hugeicons-delete-column-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21.187 5.998c-.202-.889-.533-1.564-1.078-2.109C18.717 2.5 16.479 2.5 12 2.5c-4.478-.001-6.718-.001-8.109 1.39S2.5 7.52 2.5 11.998s0 6.718 1.391 8.109s3.63 1.391 8.109 1.391c4.478 0 6.718 0 8.109-1.391c.545-.545.876-1.22 1.078-2.109M21.5 15l-3-3m0 0l-3-3m3 3l-3 3m3-3l3-3M9 21.5v-19m-6.5 13H9m-6.5-7H9" color="currentColor"></svg:path>`,
})
export class HugeiconsDeleteColumnIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDeletePutBackIcon],svg[hugeicons-delete-put-back-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m4.475 6.1l.84 12.077c.094 1.16.967 3.377 3.204 3.625s6.731.193 7.55.193c.82 0 2.944-.581 2.944-2.99c0-2.43-2.03-3.063-3.305-3.041h-3.653m0 0a.8.8 0 0 1 .273-.581l2.159-1.89m-2.432 2.47a.8.8 0 0 0 .275.623l2.157 1.875M19.47 5.824l-.468 7.655M3 5.496h18m-4.945 0l-.682-1.407c-.454-.934-.68-1.401-1.071-1.693a2 2 0 0 0-.275-.172C13.594 2 13.074 2 12.034 2c-1.065 0-1.598 0-2.039.234q-.146.078-.278.179c-.396.303-.617.787-1.059 1.756l-.605 1.327" color="currentColor"></svg:path>`,
})
export class HugeiconsDeletePutBackIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDeleteRowIcon],svg[hugeicons-delete-row-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18 21.187c.889-.202 1.564-.533 2.109-1.078C21.5 18.717 21.5 16.479 21.5 12c0-4.478 0-6.718-1.391-8.109S16.479 2.5 12 2.5c-4.478 0-6.718 0-8.109 1.391S2.5 7.521 2.5 12c0 4.478 0 6.718 1.391 8.109c.545.545 1.22.876 2.109 1.078m3 .313l3-3m0 0l3-3m-3 3l-3-3m3 3l3 3M2.5 9h19m-13-6.5V9m7-6.5V9" color="currentColor"></svg:path>`,
})
export class HugeiconsDeleteRowIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDeleteThrowIcon],svg[hugeicons-delete-throw-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="m19.5 5.5l-.62 10.025c-.158 2.561-.237 3.842-.88 4.763a4 4 0 0 1-1.2 1.128c-.957.584-2.24.584-4.806.584c-2.57 0-3.855 0-4.814-.585a4 4 0 0 1-1.2-1.13c-.642-.922-.72-2.205-.874-4.77L4.5 5.5"></svg:path><svg:path d="M9.5 12.5c.492-.506 1.8-2.5 2.5-2.5m2.5 2.5c-.492-.506-1.8-2.5-2.5-2.5m0 0v8M3 5.5h18m-4.945 0l-.682-1.408c-.454-.936-.68-1.403-1.071-1.695a2 2 0 0 0-.275-.172C13.594 2 13.074 2 12.034 2c-1.065 0-1.598 0-2.039.234a2 2 0 0 0-.278.18c-.396.303-.617.788-1.059 1.757L8.053 5.5"></svg:path></svg:g>`,
})
export class HugeiconsDeleteThrowIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDeliveredSentIcon],svg[hugeicons-delivered-sent-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:circle cx="17" cy="19" r="2"></svg:circle><svg:circle cx="7" cy="19" r="2"></svg:circle><svg:path d="M2 9v4.947c0 2.382 0 3.573.732 4.313c.487.492 1.171.657 2.268.712M12.427 5c.913.3 1.63 1.024 1.926 1.947c.147.456.147 1.02.147 2.15c0 .752 0 1.128.098 1.432a2.01 2.01 0 0 0 1.284 1.298c.301.099.673.099 1.418.099H22v2.021c0 2.382 0 3.573-.732 4.313c-.487.492-1.171.657-2.268.712M9 19h6"></svg:path><svg:path d="M14.5 7h1.821c1.456 0 2.183 0 2.775.354c.593.353.938.994 1.628 2.276L22 12M7.327 8l1.486-1.174C9.604 6.2 10 5.888 10 5.5M7.327 3l1.486 1.174C9.604 4.8 10 5.112 10 5.5m0 0H2"></svg:path></svg:g>`,
})
export class HugeiconsDeliveredSentIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDeliveryBox01Icon],svg[hugeicons-delivery-box-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2 13.429V8h20v5.429c0 4.04 0 6.06-1.302 7.316C19.396 22 17.301 22 13.111 22H10.89c-4.19 0-6.285 0-7.587-1.255C2 19.489 2 17.469 2 13.429M2 8l.962-2.308c.745-1.79 1.118-2.684 1.874-3.188S6.56 2 8.5 2h7c1.939 0 2.908 0 3.664.504s1.129 1.399 1.874 3.188L22 8M12 8V2m-2 10h4" color="currentColor"></svg:path>`,
})
export class HugeiconsDeliveryBox01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDeliveryBox02Icon],svg[hugeicons-delivery-box-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20.198 3H3.802c-.75 0-1.126 0-1.386.177a1 1 0 0 0-.31.34c-.153.272-.116.64-.041 1.378c.125 1.231.187 1.847.513 2.287c.163.219.369.403.606.541C3.66 8 4.286 8 5.54 8h12.922c1.253 0 1.879 0 2.355-.277c.237-.138.443-.322.606-.541c.326-.44.388-1.056.513-2.287c.075-.737.112-1.106-.04-1.379a1 1 0 0 0-.311-.339C21.324 3 20.948 3 20.198 3M3 8v5.04c0 3.753 0 5.629 1.172 6.794S7.229 21 11 21h2c3.771 0 5.657 0 6.828-1.166S21 16.793 21 13.041V8m-11 3h4" color="currentColor"></svg:path>`,
})
export class HugeiconsDeliveryBox02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDeliveryDelay01Icon],svg[hugeicons-delivery-delay-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M19.5 19.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0m-10 0a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0"></svg:path><svg:path d="M14.5 19.5h-5m10 0h.763c.22 0 .33 0 .422-.012a1.5 1.5 0 0 0 1.303-1.302c.012-.093.012-.203.012-.423V15a6.5 6.5 0 0 0-6.5-6.5M11 6h1c1.414 0 2.121 0 2.56.44C15 6.878 15 7.585 15 9v8.5M2 12v5c0 .935 0 1.402.201 1.75a1.5 1.5 0 0 0 .549.549c.348.201.815.201 1.75.201M7.85 7.85l-1.35-.9V4.7M2 6.5a4.5 4.5 0 1 0 9 0a4.5 4.5 0 0 0-9 0"></svg:path></svg:g>`,
})
export class HugeiconsDeliveryDelay01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDeliveryDelay02Icon],svg[hugeicons-delivery-delay-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M19.5 19.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0m-10 0a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0"></svg:path><svg:path d="M2 12v5c0 .935 0 1.402.201 1.75a1.5 1.5 0 0 0 .549.549c.348.201.815.201 1.75.201m10 0h-5m5.5-2V9c0-1.414 0-2.121-.44-2.56C14.122 6 13.415 6 12 6h-1m4.5 2.5h1.801c.83 0 1.245 0 1.589.195c.344.194.557.55.984 1.262l1.699 2.83c.212.354.318.532.373.728c.054.197.054.403.054.816V17c0 .935 0 1.402-.201 1.75a1.5 1.5 0 0 1-.549.549c-.348.201-.815.201-1.75.201M7.85 7.85l-1.35-.9V4.7M2 6.5a4.5 4.5 0 1 0 9 0a4.5 4.5 0 0 0-9 0"></svg:path></svg:g>`,
})
export class HugeiconsDeliveryDelay02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDeliveryReturn01Icon],svg[hugeicons-delivery-return-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15.527 15.977h3.24c1.278-.021 3.233.652 3.233 3.08C22 21.577 19.588 22 18.766 22H7.946C5.438 22 2 21.491 2 17.17V8.002h20v4.517m-6.473 3.457a.8.8 0 0 1 .273-.58l1.702-1.42m-1.975 2a.8.8 0 0 0 .275.623l1.7 1.383M2.006 7.991l.921-2.3c.748-1.789 1.122-2.683 1.88-3.186S6.537 2 8.48 2h7.02c1.944 0 2.916 0 3.674.504c.758.503 1.131 1.397 1.88 3.185L22 7.995m-10.037.006v-6m-2 10h4" color="currentColor"></svg:path>`,
})
export class HugeiconsDeliveryReturn01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDeliveryReturn02Icon],svg[hugeicons-delivery-return-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20.198 3.002H3.802c-.75 0-1.126 0-1.386.177a1 1 0 0 0-.31.338c-.153.273-.116.64-.041 1.376c.125 1.228.187 1.842.513 2.28c.163.22.369.403.606.54c.476.277 1.102.277 2.355.277h12.922c1.253 0 1.879 0 2.355-.277c.237-.137.443-.32.606-.54c.326-.438.388-1.052.513-2.28c.075-.736.112-1.103-.04-1.376a1 1 0 0 0-.311-.338c-.26-.177-.636-.177-1.386-.177m-10.198 8h4m.539 4.976l2.727-.053c1.086-.02 3.237.247 3.237 2.503c0 2.34-2.249 2.57-3.262 2.57H8.05c-2.128 0-5.048-.472-5.048-4.488V7.997m11.536 7.981a.77.77 0 0 1 .232-.538l1.714-1.454m-1.946 1.992a.77.77 0 0 0 .234.579l1.712 1.414m4.495-9.974v5.028" color="currentColor"></svg:path>`,
})
export class HugeiconsDeliveryReturn02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDeliverySecure01Icon],svg[hugeicons-delivery-secure-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M12 22h-1.111c-4.19 0-6.285 0-7.587-1.255C2 19.489 2 17.469 2 13.429V8h20v3.5M2 8l.962-2.308c.745-1.79 1.118-2.684 1.874-3.188S6.56 2 8.5 2h7c1.939 0 2.908 0 3.664.504s1.129 1.399 1.874 3.188L22 8M12 8V2m-2 10h4"></svg:path><svg:path d="M16.737 16.175v-1.391c0-.206.008-.414.082-.606c.196-.51.715-1.18 1.66-1.18c.946 0 1.486.67 1.682 1.18c.074.192.082.4.082.606v1.39M16.806 22h3.388c.997 0 1.806-.807 1.806-1.802v-2.003c0-.995-.809-1.802-1.806-1.802h-3.388c-.997 0-1.806.807-1.806 1.802v2.003c0 .995.809 1.802 1.806 1.802"></svg:path></svg:g>`,
})
export class HugeiconsDeliverySecure01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDeliverySecure02Icon],svg[hugeicons-delivery-secure-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20.198 2.5H3.802c-.75 0-1.126 0-1.386.177a1 1 0 0 0-.31.339c-.153.273-.116.641-.041 1.379c.125 1.23.187 1.846.513 2.286c.163.22.369.404.606.542c.476.277 1.102.277 2.355.277h12.922c1.253 0 1.879 0 2.355-.277c.237-.138.443-.323.606-.542c.326-.44.388-1.055.513-2.286c.075-.738.112-1.106-.04-1.38a1 1 0 0 0-.311-.338c-.26-.177-.636-.177-1.386-.177M3 7.5v5.04c0 3.752 0 5.628 1.172 6.794S7.229 20.5 11 20.5h1M21 10V7.5m-11 3h4m2.737 5.175v-1.391c0-.206.008-.414.082-.606c.196-.51.715-1.18 1.66-1.18c.946 0 1.486.67 1.682 1.18c.074.192.082.4.082.606v1.39M16.806 21.5h3.388c.997 0 1.806-.807 1.806-1.802v-2.002c0-.996-.809-1.803-1.806-1.803h-3.388c-.997 0-1.806.807-1.806 1.803v2.002c0 .995.809 1.802 1.806 1.802" color="currentColor"></svg:path>`,
})
export class HugeiconsDeliverySecure02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDeliverySent01Icon],svg[hugeicons-delivery-sent-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M19.5 17.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0m-10 0a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0"></svg:path><svg:path d="M14.5 17.5h-5m10 0h.763c.22 0 .33 0 .422-.012a1.5 1.5 0 0 0 1.303-1.302c.012-.093.012-.203.012-.423V13a6.5 6.5 0 0 0-6.5-6.5m-.5 9V7c0-1.414 0-2.121-.44-2.56C14.122 4 13.415 4 12 4H5c-1.414 0-2.121 0-2.56.44C2 4.878 2 5.585 2 7v8c0 .935 0 1.402.201 1.75a1.5 1.5 0 0 0 .549.549c.348.201.815.201 1.75.201"></svg:path><svg:path d="m9.327 12l1.486-1.174C11.604 10.2 12 9.888 12 9.5M9.327 7l1.486 1.174C11.604 8.8 12 9.112 12 9.5m0 0H5"></svg:path></svg:g>`,
})
export class HugeiconsDeliverySent01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDeliverySent02Icon],svg[hugeicons-delivery-sent-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M19.5 17.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0m-10 0a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0"></svg:path><svg:path d="M14.5 17.5h-5m5.5-2V7c0-1.414 0-2.121-.44-2.56C14.122 4 13.415 4 12 4H5c-1.414 0-2.121 0-2.56.44C2 4.878 2 5.585 2 7v8c0 .935 0 1.402.201 1.75a1.5 1.5 0 0 0 .549.549c.348.201.815.201 1.75.201m11-11h1.801c.83 0 1.245 0 1.589.195c.344.194.557.55.984 1.262l1.699 2.83c.212.354.318.532.373.728c.054.197.054.403.054.816V15c0 .935 0 1.402-.201 1.75a1.5 1.5 0 0 1-.549.549c-.348.201-.815.201-1.75.201"></svg:path><svg:path d="m9.327 12l1.486-1.174C11.604 10.2 12 9.888 12 9.5M9.327 7l1.486 1.174C11.604 8.8 12 9.112 12 9.5m0 0H5"></svg:path></svg:g>`,
})
export class HugeiconsDeliverySent02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDeliveryTracking01Icon],svg[hugeicons-delivery-tracking-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M12.5 22h-1.611c-4.19 0-6.285 0-7.587-1.255C2 19.489 2 17.469 2 13.429V8h20v2.5"></svg:path><svg:path d="M18 12c-2.21 0-4 1.809-4 4.04c0 1.276.5 2.268 1.5 3.155c.705.624 1.559 1.662 2.071 2.503c.246.403.594.403.858 0c.538-.825 1.366-1.879 2.071-2.503c1-.887 1.5-1.879 1.5-3.155c0-2.23-1.79-4.04-4-4.04m0 4h.009M2 8l.962-2.308c.745-1.79 1.118-2.684 1.874-3.188S6.56 2 8.5 2h7c1.939 0 2.908 0 3.664.504s1.129 1.399 1.874 3.188L22 8M12 8V2m-2 10h2"></svg:path></svg:g>`,
})
export class HugeiconsDeliveryTracking01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDeliveryTracking02Icon],svg[hugeicons-delivery-tracking-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20.198 2.5H3.802c-.75 0-1.126 0-1.386.177a1 1 0 0 0-.31.34c-.153.272-.116.64-.041 1.378c.125 1.231.187 1.847.513 2.287c.163.219.369.403.606.541c.476.277 1.102.277 2.355.277h12.922c1.253 0 1.879 0 2.355-.277c.237-.138.443-.322.606-.541c.326-.44.388-1.056.513-2.287c.075-.737.112-1.106-.04-1.379a1 1 0 0 0-.311-.339c-.26-.177-.636-.177-1.386-.177M3 7.5v5.04c0 3.753 0 5.629 1.172 6.794S7.229 20.5 11 20.5h1.5M21 9V7.5m-3 4c-2.21 0-4 1.809-4 4.04c0 1.276.5 2.268 1.5 3.155c.705.624 1.559 1.662 2.071 2.503c.246.403.594.403.858 0c.538-.825 1.366-1.879 2.071-2.503c1-.887 1.5-1.879 1.5-3.155c0-2.231-1.79-4.04-4-4.04m0 4h.009M10 10.5h2" color="currentColor"></svg:path>`,
})
export class HugeiconsDeliveryTracking02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDeliveryTruck01Icon],svg[hugeicons-delivery-truck-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M19.5 17.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0m-10 0a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0"></svg:path><svg:path d="M14.5 17.5h-5m10 0h.763c.22 0 .33 0 .422-.012a1.5 1.5 0 0 0 1.303-1.302c.012-.093.012-.203.012-.423V13a6.5 6.5 0 0 0-6.5-6.5M2 4h10c1.414 0 2.121 0 2.56.44C15 4.878 15 5.585 15 7v8.5M2 12.75V15c0 .935 0 1.402.201 1.75a1.5 1.5 0 0 0 .549.549c.348.201.815.201 1.75.201M2 7h6m-6 3h4"></svg:path></svg:g>`,
})
export class HugeiconsDeliveryTruck01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDeliveryTruck02Icon],svg[hugeicons-delivery-truck-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M19.5 17.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0m-10 0a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0"></svg:path><svg:path d="M14.5 17.5h-5M2 4h10c1.414 0 2.121 0 2.56.44C15 4.878 15 5.585 15 7v8.5m.5-9h1.801c.83 0 1.245 0 1.589.195c.344.194.557.55.984 1.262l1.699 2.83c.212.354.318.532.373.728c.054.197.054.403.054.816V15c0 .935 0 1.402-.201 1.75a1.5 1.5 0 0 1-.549.549c-.348.201-.815.201-1.75.201M2 13v2c0 .935 0 1.402.201 1.75a1.5 1.5 0 0 0 .549.549c.348.201.815.201 1.75.201M2 7h6m-6 3h4"></svg:path></svg:g>`,
})
export class HugeiconsDeliveryTruck02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDeliveryView01Icon],svg[hugeicons-delivery-view-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M22 13.5V8H2v5.429c0 4.04 0 6.06 1.302 7.316C4.508 21.908 6.396 21.993 10 22m7-3.5h.009"></svg:path><svg:path d="M21.772 18.023c.152.213.228.32.228.477c0 .158-.076.264-.228.477C21.089 19.935 19.345 22 17 22s-4.089-2.065-4.772-3.023c-.152-.213-.228-.32-.228-.477c0-.158.076-.264.228-.477C12.911 17.065 14.655 15 17 15s4.089 2.065 4.772 3.023M2 8l.962-2.308c.745-1.79 1.118-2.684 1.874-3.188S6.56 2 8.5 2h7c1.939 0 2.908 0 3.664.504s1.129 1.399 1.874 3.188L22 8M12 8V2m-2 10h4"></svg:path></svg:g>`,
})
export class HugeiconsDeliveryView01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDeliveryView02Icon],svg[hugeicons-delivery-view-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20.198 2.5H3.802c-.75 0-1.126 0-1.386.177a1 1 0 0 0-.31.34c-.153.272-.116.64-.041 1.378c.125 1.231.187 1.847.513 2.287c.163.219.369.403.606.541c.476.277 1.102.277 2.355.277h12.922c1.253 0 1.879 0 2.355-.277c.237-.138.443-.322.606-.541c.326-.44.388-1.056.513-2.287c.075-.737.112-1.106-.04-1.379a1 1 0 0 0-.311-.339c-.26-.177-.636-.177-1.386-.177M3 7.5v5.04c0 3.753 0 5.629 1.172 6.794C5.235 20.392 6.886 20.49 10 20.5m11-8v-5M17 18h.009m4.763-.477c.152.213.228.32.228.477c0 .158-.076.264-.228.477c-.683.958-2.427 3.023-4.772 3.023s-4.089-2.065-4.772-3.023c-.152-.213-.228-.32-.228-.477c0-.158.076-.264.228-.477c.683-.958 2.427-3.023 4.772-3.023s4.089 2.065 4.772 3.023M10 10.5h4" color="currentColor"></svg:path>`,
})
export class HugeiconsDeliveryView02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDentalBracesIcon],svg[hugeicons-dental-braces-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M9 6c.5.5 1.503.412 3-.824m0 0q-.332-.272-.689-.626c-2.306-2.284-5.446-1.837-6.917 0C3.378 5.82.778 8.98 7.142 20.24c.264.466.789.76 1.354.76c.902 0 1.607-.72 1.636-1.56c.063-1.782.408-3.837 1.868-3.837s1.806 2.055 1.868 3.837c.029.84.734 1.56 1.636 1.56c.565 0 1.09-.294 1.354-.76c6.365-11.261 3.764-14.42 2.748-15.69c-1.471-1.837-4.611-2.284-6.917 0q-.357.353-.689.626"></svg:path><svg:path d="M10.387 9.387c-.516.516-.516 2.71 0 3.226s2.71.516 3.226 0s.516-2.71 0-3.226s-2.71-.516-3.226 0M10 11H4m16 0h-6"></svg:path></svg:g>`,
})
export class HugeiconsDentalBracesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDentalBrokenToothIcon],svg[hugeicons-dental-broken-tooth-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11.977 5.176q.33-.272.687-.626c2.3-2.284 5.432-1.837 6.899 0c3.605 4.514-.432 11.594-2.741 15.69c-.263.466-.787.76-1.35.76c-.9 0-1.603-.72-1.633-1.56c-.06-1.74-.464-3.845-1.839-3.94c-1.375.095-1.826 2.2-1.886 3.94c-.03.84-.733 1.56-1.632 1.56c-.564 0-1.088-.294-1.35-.76c-3.288-5.832-4.178-9.491-4.13-11.84c1.998.1 2.99-.9 2.99-2.7C8 6 9 4.829 9 3c1 0 1.575.84 2.29 1.55q.355.353.687.626m0 0C13.469 6.412 14.5 6.5 15 6" color="currentColor"></svg:path>`,
})
export class HugeiconsDentalBrokenToothIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDentalCareIcon],svg[hugeicons-dental-care-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14 5c-.5.5-1.503.412-3-.824m0 0q.332-.272.689-.626c2.306-2.284 5.446-1.837 6.917 0c.626.782 1.853 2.281 1.215 5.95M11 4.176q-.332-.272-.689-.626c-2.306-2.284-5.446-1.837-6.917 0C2.378 4.82-.222 7.98 6.142 19.24c.264.466.789.76 1.354.76c.902 0 1.607-.72 1.636-1.56c.046-1.303.298-2.755 1.001-3.44M16 17l.684.684c.147.147.221.221.31.216c.09-.005.155-.086.285-.249L19 15.5m-6-.046v.386c0 1.202 0 1.803.148 2.353a4.36 4.36 0 0 0 1.014 1.827c.39.422.906.75 1.937 1.407c.461.294.692.441.938.51c.303.084.624.084.927 0c.245-.069.476-.216.937-.51c1.031-.657 1.547-.985 1.937-1.407a4.36 4.36 0 0 0 1.014-1.827c.148-.55.148-1.15.148-2.353v-.386c0-.748 0-1.122-.142-1.438a1.7 1.7 0 0 0-.369-.52c-.253-.24-.612-.372-1.33-.635l-1.474-.54c-.586-.214-.879-.321-1.185-.321s-.599.107-1.185.322l-1.474.54c-.718.262-1.077.393-1.33.634a1.7 1.7 0 0 0-.37.52c-.141.316-.141.69-.141 1.438" color="currentColor"></svg:path>`,
})
export class HugeiconsDentalCareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDentalToothIcon],svg[hugeicons-dental-tooth-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 6c.5.5 1.503.412 3-.824m0 0q-.332-.272-.689-.626c-2.306-2.284-5.446-1.837-6.917 0C3.378 5.82.778 8.98 7.142 20.24c.264.466.789.76 1.354.76c.902 0 1.607-.72 1.636-1.56c.063-1.782.408-3.837 1.868-3.837s1.806 2.055 1.868 3.837c.029.84.734 1.56 1.636 1.56c.565 0 1.09-.294 1.354-.76c6.365-11.261 3.764-14.42 2.748-15.69c-1.471-1.837-4.611-2.284-6.917 0q-.357.353-.689.626" color="currentColor"></svg:path>`,
})
export class HugeiconsDentalToothIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDepartementIcon],svg[hugeicons-departement-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 13.883V9.128c0-1.135-.001-1.703-.277-2.179s-.769-.754-1.754-1.31l-5.025-2.835C12.994 2.268 12.519 2 12 2s-.994.268-1.944.804L5.031 5.64c-.985.555-1.478.833-1.754 1.31c-.276.475-.276 1.043-.277 2.178v4.755c0 3.826 0 5.74 1.172 6.928C5.343 22 7.229 22 11 22h2c3.771 0 5.657 0 6.828-1.189C21 19.623 21 17.71 21 13.883M10 13H8m8 0h-2m-4-4H8m2 8H8m8-8h-2m2 8h-2" color="currentColor"></svg:path>`,
})
export class HugeiconsDepartementIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDesertIcon],svg[hugeicons-desert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M8 7v14m4-3v3m-9 0h12M4 13v.96c0 .845 0 1.268.201 1.616s.567.56 1.3.982L8 18m4-9v2.96c0 .845 0 1.268-.201 1.616s-.567.56-1.3.982L8 16"></svg:path><svg:circle cx="18" cy="6" r="3"></svg:circle></svg:g>`,
})
export class HugeiconsDesertIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDeskIcon],svg[hugeicons-desk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8h18v4c0 2.357 0 3.536-.732 4.268C19.535 17 18.357 17 16 17H8c-2.357 0-3.536 0-4.268-.732S3 14.357 3 12zm4-2c0-1.886 0-2.828.586-3.414S9.114 2 11 2h2c1.886 0 2.828 0 3.414.586S17 4.114 17 6v2H7zM5 17v5m14-5v5M8 17v3m8-3v3M2 8h1.818m16.364 0H22" color="currentColor"></svg:path>`,
})
export class HugeiconsDeskIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDesk01Icon],svg[hugeicons-desk-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M22 4H2m19 4H3m18 4h-7m0-4v10c0 .943 0 1.414.293 1.707S15.057 20 16 20h3c.943 0 1.414 0 1.707-.293S21 18.943 21 18V8M3 4v16M21 4v4" color="currentColor"></svg:path>`,
})
export class HugeiconsDesk01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDesk02Icon],svg[hugeicons-desk-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M22 4H2m19 4H3m18 4h-7m7 4h-3c-1.886 0-2.828 0-3.414-.586S14 13.886 14 12V8M3 4v16M21 4v16" color="currentColor"></svg:path>`,
})
export class HugeiconsDesk02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDetergentIcon],svg[hugeicons-detergent-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M12.5 4.5h-4V4c0-.943 0-1.414.293-1.707S9.557 2 10.5 2s1.414 0 1.707.293s.293.764.293 1.707zM18 18v-7.477A6.05 6.05 0 0 0 12.5 4.5h-4v.13a5 5 0 0 1-.726 2.531l-.069.111l-.341.546c-.448.717-.672 1.075-.842 1.455a6 6 0 0 0-.465 1.62C6 11.306 6 11.729 6 12.574V18c0 1.886 0 2.828.586 3.414S8.114 22 10 22h4c1.886 0 2.828 0 3.414-.586S18 19.886 18 18"></svg:path><svg:path d="M15.011 8.514c.67 1.174.649 2.455-.048 2.862c-.696.406-1.804-.216-2.474-1.39s-.649-2.455.048-2.861c.696-.407 1.804.215 2.474 1.389"></svg:path></svg:g>`,
})
export class HugeiconsDetergentIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDeveloperIcon],svg[hugeicons-developer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M15.175 22v-1.009A1.007 1.007 0 0 1 16.18 20h.075c1.432-.012 2.662-1.006 2.954-2.388l.01-.052l.52-2.56l.94-.464c.505-.248.756-.373.81-.6c.055-.228-.114-.45-.451-.895l-1.908-2.508c-.19-.25-.285-.374-.335-.506s-.067-.32-.098-.693C18.353 5.227 14.865 2 10.612 2C6.132 2 2.5 5.582 2.5 10c0 2.75 1.407 5.175 3.55 6.615m0 0V22m0-5.385a8 8 0 0 0 2.027.987"></svg:path><svg:path d="m14 9l.92.793c.387.333.58.5.58.707s-.193.374-.58.707L14 12M7 9l-.92.793c-.387.333-.58.5-.58.707s.193.374.58.707L7 12m4.5-4l-2 5"></svg:path></svg:g>`,
})
export class HugeiconsDeveloperIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDeviantartIcon],svg[hugeicons-deviantart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18 2c.827 0 1 .173 1 1v3.139c0 .303-.001.307-.171.559l-3.276 4.854c-.463.686-.695 1.028-.554 1.294c.141.265.555.265 1.383.265H18c.827 0 1 .173 1 1v2.445c0 .827-.173 1-1 1h-5.437c-1.042 0-1.076.018-1.658.88L8.797 21.56c-.29.432-.308.441-.829.441H6c-.827 0-1-.173-1-1v-3.139c0-.303.001-.307.171-.559l3.276-4.854c.463-.686.695-1.028.554-1.294c-.141-.265-.555-.265-1.383-.265H6c-.827 0-1-.173-1-1V7.444c0-.827.173-1 1-1h5.437c1.042 0 1.076-.018 1.658-.88l2.108-3.123c.29-.432.308-.441.829-.441z" color="currentColor"></svg:path>`,
})
export class HugeiconsDeviantartIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDeviceAccessIcon],svg[hugeicons-device-access-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 10V9c0-3.3 0-4.95-1.025-5.975S13.3 2 10 2S5.05 2 4.025 3.025S3 5.7 3 9v6c0 3.3 0 4.95 1.025 5.975S6.7 22 10 22l1-.001m4.5-5.499V15a2 2 0 1 1 4 0v1.5M16.75 22h1.5c1.173 0 1.76 0 2.163-.31a1.5 1.5 0 0 0 .277-.277c.31-.404.31-.99.31-2.163s0-1.76-.31-2.163a1.5 1.5 0 0 0-.277-.277c-.404-.31-.99-.31-2.163-.31h-1.5c-1.173 0-1.76 0-2.163.31a1.5 1.5 0 0 0-.277.277c-.31.404-.31.99-.31 2.163s0 1.76.31 2.163a1.5 1.5 0 0 0 .277.277c.404.31.99.31 2.163.31M10 19v.01" color="currentColor"></svg:path>`,
})
export class HugeiconsDeviceAccessIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDiagonalScrollPoint01Icon],svg[hugeicons-diagonal-scroll-point-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14 12a2 2 0 1 1-4 0a2 2 0 0 1 4 0m-4 7.883s-4.76.427-5.535-.348C3.69 18.759 4.117 14 4.117 14M14 4.117s4.76-.427 5.535.348c.775.776.348 5.535.348 5.535" color="currentColor"></svg:path>`,
})
export class HugeiconsDiagonalScrollPoint01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDiagonalScrollPoint02Icon],svg[hugeicons-diagonal-scroll-point-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14 12a2 2 0 1 1-4 0a2 2 0 0 1 4 0m-4-7.883s-4.76-.427-5.535.348C3.69 5.241 4.117 10 4.117 10M14 19.883s4.76.427 5.535-.348c.775-.776.348-5.535.348-5.535" color="currentColor"></svg:path>`,
})
export class HugeiconsDiagonalScrollPoint02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDialpadCircle01Icon],svg[hugeicons-dialpad-circle-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2 4a2 2 0 1 0 4 0a2 2 0 0 0-4 0m0 8a2 2 0 1 0 4 0a2 2 0 0 0-4 0m0 8a2 2 0 1 0 4 0a2 2 0 0 0-4 0m8-16a2 2 0 1 0 4 0a2 2 0 0 0-4 0m0 8a2 2 0 1 0 4 0a2 2 0 0 0-4 0m0 8a2 2 0 1 0 4 0a2 2 0 0 0-4 0m8-16a2 2 0 1 0 4 0a2 2 0 0 0-4 0m0 8a2 2 0 1 0 4 0a2 2 0 0 0-4 0m0 8a2 2 0 1 0 4 0a2 2 0 0 0-4 0" color="currentColor"></svg:path>`,
})
export class HugeiconsDialpadCircle01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDialpadCircle02Icon],svg[hugeicons-dialpad-circle-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2 4a2 2 0 1 0 4 0a2 2 0 0 0-4 0m0 8a2 2 0 1 0 4 0a2 2 0 0 0-4 0m8-8a2 2 0 1 0 4 0a2 2 0 0 0-4 0m0 8a2 2 0 1 0 4 0a2 2 0 0 0-4 0m0 8a2 2 0 1 0 4 0a2 2 0 0 0-4 0m8-16a2 2 0 1 0 4 0a2 2 0 0 0-4 0m0 8a2 2 0 1 0 4 0a2 2 0 0 0-4 0" color="currentColor"></svg:path>`,
})
export class HugeiconsDialpadCircle02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDialpadSquare01Icon],svg[hugeicons-dialpad-square-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2 4c0 .943 0 1.414.293 1.707S3.057 6 4 6s1.414 0 1.707-.293S6 4.943 6 4s0-1.414-.293-1.707S4.943 2 4 2s-1.414 0-1.707.293S2 3.057 2 4m0 8c0 .943 0 1.414.293 1.707S3.057 14 4 14s1.414 0 1.707-.293S6 12.943 6 12s0-1.414-.293-1.707S4.943 10 4 10s-1.414 0-1.707.293S2 11.057 2 12m0 8c0 .943 0 1.414.293 1.707S3.057 22 4 22s1.414 0 1.707-.293S6 20.943 6 20s0-1.414-.293-1.707S4.943 18 4 18s-1.414 0-1.707.293S2 19.057 2 20m8-16c0 .943 0 1.414.293 1.707S11.057 6 12 6s1.414 0 1.707-.293S14 4.943 14 4s0-1.414-.293-1.707S12.943 2 12 2s-1.414 0-1.707.293S10 3.057 10 4m0 8c0 .943 0 1.414.293 1.707S11.057 14 12 14s1.414 0 1.707-.293S14 12.943 14 12s0-1.414-.293-1.707S12.943 10 12 10s-1.414 0-1.707.293S10 11.057 10 12m0 8c0 .943 0 1.414.293 1.707S11.057 22 12 22s1.414 0 1.707-.293S14 20.943 14 20s0-1.414-.293-1.707S12.943 18 12 18s-1.414 0-1.707.293S10 19.057 10 20m8-16c0 .943 0 1.414.293 1.707S19.057 6 20 6s1.414 0 1.707-.293S22 4.943 22 4s0-1.414-.293-1.707S20.943 2 20 2s-1.414 0-1.707.293S18 3.057 18 4m0 8c0 .943 0 1.414.293 1.707S19.057 14 20 14s1.414 0 1.707-.293S22 12.943 22 12s0-1.414-.293-1.707S20.943 10 20 10s-1.414 0-1.707.293S18 11.057 18 12m0 8c0 .943 0 1.414.293 1.707S19.057 22 20 22s1.414 0 1.707-.293S22 20.943 22 20s0-1.414-.293-1.707S20.943 18 20 18s-1.414 0-1.707.293S18 19.057 18 20" color="currentColor"></svg:path>`,
})
export class HugeiconsDialpadSquare01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDialpadSquare02Icon],svg[hugeicons-dialpad-square-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2 4c0 .943 0 1.414.293 1.707S3.057 6 4 6s1.414 0 1.707-.293S6 4.943 6 4s0-1.414-.293-1.707S4.943 2 4 2s-1.414 0-1.707.293S2 3.057 2 4m0 8c0 .943 0 1.414.293 1.707S3.057 14 4 14s1.414 0 1.707-.293S6 12.943 6 12s0-1.414-.293-1.707S4.943 10 4 10s-1.414 0-1.707.293S2 11.057 2 12m8-8c0 .943 0 1.414.293 1.707S11.057 6 12 6s1.414 0 1.707-.293S14 4.943 14 4s0-1.414-.293-1.707S12.943 2 12 2s-1.414 0-1.707.293S10 3.057 10 4m0 8c0 .943 0 1.414.293 1.707S11.057 14 12 14s1.414 0 1.707-.293S14 12.943 14 12s0-1.414-.293-1.707S12.943 10 12 10s-1.414 0-1.707.293S10 11.057 10 12m0 8c0 .943 0 1.414.293 1.707S11.057 22 12 22s1.414 0 1.707-.293S14 20.943 14 20s0-1.414-.293-1.707S12.943 18 12 18s-1.414 0-1.707.293S10 19.057 10 20m8-16c0 .943 0 1.414.293 1.707S19.057 6 20 6s1.414 0 1.707-.293S22 4.943 22 4s0-1.414-.293-1.707S20.943 2 20 2s-1.414 0-1.707.293S18 3.057 18 4m0 8c0 .943 0 1.414.293 1.707S19.057 14 20 14s1.414 0 1.707-.293S22 12.943 22 12s0-1.414-.293-1.707S20.943 10 20 10s-1.414 0-1.707.293S18 11.057 18 12" color="currentColor"></svg:path>`,
})
export class HugeiconsDialpadSquare02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDiameterIcon],svg[hugeicons-diameter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M13.5 12H19m-8.5 0H5m7 1.5a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3"></svg:path><svg:path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10"></svg:path><svg:path d="M7.01 14C6.49 13.48 5 12.5 5 12s1.51-1.5 2.01-2M17 10c.52.52 2.01 1.5 2.01 2S17.5 13.5 17 14"></svg:path></svg:g>`,
})
export class HugeiconsDiameterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDiamondIcon],svg[hugeicons-diamond-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5.92 5.92c2.238-2.237 3.357-3.355 4.666-3.724a5.2 5.2 0 0 1 2.828 0c1.309.369 2.428 1.487 4.665 3.725s3.356 3.356 3.725 4.665a5.2 5.2 0 0 1 0 2.828c-.369 1.309-1.487 2.428-3.725 4.665s-3.356 3.356-4.665 3.725a5.2 5.2 0 0 1-2.828 0c-1.309-.369-2.428-1.487-4.665-3.725s-3.356-3.356-3.725-4.665a5.2 5.2 0 0 1 0-2.828C2.565 9.277 3.683 8.158 5.92 5.92" color="currentColor"></svg:path>`,
})
export class HugeiconsDiamondIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDiamond01Icon],svg[hugeicons-diamond-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m6.959 7.034l1.085-1.306C10.11 3.243 11.142 2 12.5 2s2.39 1.243 4.456 3.728l1.085 1.306C20.014 9.41 21 10.596 21 12s-.986 2.591-2.959 4.966l-1.085 1.306C14.89 20.757 13.858 22 12.5 22s-2.39-1.243-4.456-3.728L6.96 16.966C4.986 14.59 4 13.404 4 12s.986-2.591 2.959-4.966" color="currentColor"></svg:path>`,
})
export class HugeiconsDiamond01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDiamond02Icon],svg[hugeicons-diamond-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5.782 4.182c.648-.499.972-.748 1.346-.909q.255-.109.527-.176C8.054 3 8.477 3 9.323 3h5.354c.846 0 1.27 0 1.668.097q.273.067.527.176c.374.16.698.41 1.346.909c2.146 1.652 3.22 2.479 3.588 3.549c.163.476.224.976.18 1.474c-.1 1.118-.948 2.141-2.643 4.188l-3.993 4.822C13.813 20.072 13.044 21 12 21s-1.813-.928-3.35-2.785l-3.993-4.822c-1.695-2.047-2.542-3.07-2.643-4.188a3.55 3.55 0 0 1 .18-1.474c.368-1.07 1.442-1.897 3.588-3.55M10 8.5h4" color="currentColor"></svg:path>`,
})
export class HugeiconsDiamond02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDiaperIcon],svg[hugeicons-diaper-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M2 7.692c0-.643 0-.965.05-1.233a3 3 0 0 1 2.41-2.41C4.726 4 5.048 4 5.691 4h12.616c.643 0 .965 0 1.233.05a3 3 0 0 1 2.41 2.41c.049.267.049.589.049 1.232V10c0 5.523-4.477 10-10 10S2 15.523 2 10zM18 8h4M2 8h4"></svg:path><svg:path d="M14.5 19.5v-1a7 7 0 0 1 7-7m-12 8v-1a7 7 0 0 0-7-7"></svg:path></svg:g>`,
})
export class HugeiconsDiaperIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDiceIcon],svg[hugeicons-dice-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10.341 13.159C9.682 12.5 8.621 12.5 6.5 12.5s-3.182 0-3.841.659m7.682 0C11 13.818 11 14.879 11 17s0 3.182-.659 3.841m-7.682-7.682C2 13.818 2 14.879 2 17s0 3.182.659 3.841m0 0c.659.659 1.72.659 3.841.659s3.182 0 3.841-.659m4.881-16.063C16.74 6.297 17.5 7.056 17.5 8s-.76 1.703-2.278 3.222S12.944 13.5 12 13.5s-1.703-.76-3.222-2.278S6.5 8.944 6.5 8s.76-1.703 2.278-3.222S11.056 2.5 12 2.5s1.703.76 3.222 2.278m6.119 8.381c-.659-.659-1.72-.659-3.841-.659s-3.182 0-3.841.659m7.682 0C22 13.818 22 14.879 22 17s0 3.182-.659 3.841m-7.682-7.682C13 13.818 13 14.879 13 17s0 3.182.659 3.841m0 0c.659.659 1.72.659 3.841.659s3.182 0 3.841-.659M12.008 8H12" color="currentColor"></svg:path>`,
})
export class HugeiconsDiceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDiceFaces01Icon],svg[hugeicons-dice-faces-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 21c3.75 0 5.625 0 6.939-.955a5 5 0 0 0 1.106-1.106C21 17.625 21 15.749 21 12s0-5.625-.955-6.939a5 5 0 0 0-1.106-1.106C17.625 3 15.749 3 12 3s-5.625 0-6.939.955A5 5 0 0 0 3.955 5.06C3 6.375 3 8.251 3 12s0 5.625.955 6.939a5 5 0 0 0 1.106 1.106C6.375 21 8.251 21 12 21m0-9v.01" color="currentColor"></svg:path>`,
})
export class HugeiconsDiceFaces01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDiceFaces02Icon],svg[hugeicons-dice-faces-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 21c3.75 0 5.625 0 6.939-.955a5 5 0 0 0 1.106-1.106C21 17.625 21 15.749 21 12s0-5.625-.955-6.939a5 5 0 0 0-1.106-1.106C17.625 3 15.749 3 12 3s-5.625 0-6.939.955A5 5 0 0 0 3.955 5.06C3 6.375 3 8.251 3 12s0 5.625.955 6.939a5 5 0 0 0 1.106 1.106C6.375 21 8.251 21 12 21M8 8v.01M16 16v.01" color="currentColor"></svg:path>`,
})
export class HugeiconsDiceFaces02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDiceFaces03Icon],svg[hugeicons-dice-faces-03-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 21c3.75 0 5.625 0 6.939-.955a5 5 0 0 0 1.106-1.106C21 17.625 21 15.749 21 12s0-5.625-.955-6.939a5 5 0 0 0-1.106-1.106C17.625 3 15.749 3 12 3s-5.625 0-6.939.955A5 5 0 0 0 3.955 5.06C3 6.375 3 8.251 3 12s0 5.625.955 6.939a5 5 0 0 0 1.106 1.106C6.375 21 8.251 21 12 21m0-9v.01M8 8v.01M16 16v.01" color="currentColor"></svg:path>`,
})
export class HugeiconsDiceFaces03Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDiceFaces04Icon],svg[hugeicons-dice-faces-04-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 21c3.75 0 5.625 0 6.939-.955a5 5 0 0 0 1.106-1.106C21 17.625 21 15.749 21 12s0-5.625-.955-6.939a5 5 0 0 0-1.106-1.106C17.625 3 15.749 3 12 3s-5.625 0-6.939.955A5 5 0 0 0 3.955 5.06C3 6.375 3 8.251 3 12s0 5.625.955 6.939a5 5 0 0 0 1.106 1.106C6.375 21 8.251 21 12 21m4-13v.01M8 16v.01M8 8v.01M16 16v.01" color="currentColor"></svg:path>`,
})
export class HugeiconsDiceFaces04Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDiceFaces05Icon],svg[hugeicons-dice-faces-05-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 21c3.75 0 5.625 0 6.939-.955a5 5 0 0 0 1.106-1.106C21 17.625 21 15.749 21 12s0-5.625-.955-6.939a5 5 0 0 0-1.106-1.106C17.625 3 15.749 3 12 3s-5.625 0-6.939.955A5 5 0 0 0 3.955 5.06C3 6.375 3 8.251 3 12s0 5.625.955 6.939a5 5 0 0 0 1.106 1.106C6.375 21 8.251 21 12 21m0-9v.01M16 8v.01M8 16v.01M8 8v.01M16 16v.01" color="currentColor"></svg:path>`,
})
export class HugeiconsDiceFaces05Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDiceFaces06Icon],svg[hugeicons-dice-faces-06-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 21c3.75 0 5.625 0 6.939-.955a5 5 0 0 0 1.106-1.106C21 17.625 21 15.749 21 12s0-5.625-.955-6.939a5 5 0 0 0-1.106-1.106C17.625 3 15.749 3 12 3s-5.625 0-6.939.955A5 5 0 0 0 3.955 5.06C3 6.375 3 8.251 3 12s0 5.625.955 6.939a5 5 0 0 0 1.106 1.106C6.375 21 8.251 21 12 21m-3-9v.01M15 7v.01M9 17v.01M9 7v.01M15 17v.01M15 12v.01" color="currentColor"></svg:path>`,
})
export class HugeiconsDiceFaces06Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDigestionIcon],svg[hugeicons-digestion-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M9.485 2c.243 1.49.956 2.574 2.99 1.872c4.202-1.451 7.524 2.977 7.524 6.928c0 3.976-2.646 7.2-5.91 7.2h-1.064c-2.533 0-4.75 1.632-5.572 4"></svg:path><svg:path d="M6.006 2v.776c0 3.802 5.422 6.611 3.631 10.424C8.926 14.715 4.895 17.293 4 22M14 7a3.03 3.03 0 0 1 2 2"></svg:path></svg:g>`,
})
export class HugeiconsDigestionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDiggIcon],svg[hugeicons-digg-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18 19h2c.943 0 1.414 0 1.707-.293S22 17.943 22 17v-1m0 0v-5c0-.943 0-1.414-.293-1.707S20.943 9 20 9s-1.414 0-1.707.293S18 10.057 18 11v3c0 .943 0 1.414.293 1.707S19.057 16 20 16zm-10.5 3h2c.943 0 1.414 0 1.707-.293s.293-.764.293-1.707v-1m0 0v-5c0-.943 0-1.414-.293-1.707S14.443 9 13.5 9s-1.414 0-1.707.293s-.293.764-.293 1.707v3c0 .943 0 1.414.293 1.707S12.557 16 13.5 16zM6 9v5c0 .943 0 1.414-.293 1.707S4.943 16 4 16s-1.414 0-1.707-.293S2 14.943 2 14v-3c0-.943 0-1.414.293-1.707S3.057 9 4 9zm0 0V5m3 0v1m0 3v7" color="currentColor"></svg:path>`,
})
export class HugeiconsDiggIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDigitalClockIcon],svg[hugeicons-digital-clock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M5 19.25v2m14-2v2m-17-10c0-2.828 0-4.243.879-5.121C3.757 5.25 5.172 5.25 8 5.25h8c2.828 0 4.243 0 5.121.879C22 7.007 22 8.422 22 11.25v2c0 2.828 0 4.243-.879 5.121c-.878.879-2.293.879-5.121.879H8c-2.828 0-4.243 0-5.121-.879C2 17.493 2 16.078 2 13.25zm8-6l-.541-1.387a2 2 0 0 0-.058-.139c-.016-.034-.034-.065-.07-.127c-.182-.315-.294-.484-.49-.596c-.584-.335-2.098-.335-2.682 0c-.196.112-.308.281-.49.596c-.036.062-.054.093-.07.127s-.03.07-.058.14L5 5.25"></svg:path><svg:path d="M6.506 10.24v4.015m10.993-3.992v3.97M9.49 10.99h.019m-.019 2.506h.019m3.5.737h1.477a.5.5 0 0 0 .5-.5v-2.97a.5.5 0 0 0-.5-.5h-1.477a.5.5 0 0 0-.5.5v2.97a.5.5 0 0 0 .5.5"></svg:path></svg:g>`,
})
export class HugeiconsDigitalClockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDimSum01Icon],svg[hugeicons-dim-sum-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13.5 8.5L22 3M8 17l14-8m-6.447 3.698a7.7 7.7 0 0 0-1.032-1.795c-1.94-2.328-2.5-4.1-2.504-4.903C11.958 7.607 10 8.477 9.012 7c-.987 1.477-2.946.607-3.005-1c-.004.802-.563 2.575-2.504 4.903C2.562 12.13 2 13.598 2 15c0 3.314 3.14 6 7.012 6c3.676 0 6.691-2.42 6.988-5.5m-8.5-5l-.5 1m3.5-1l.5 1" color="currentColor"></svg:path>`,
})
export class HugeiconsDimSum01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDimSum02Icon],svg[hugeicons-dim-sum-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m7.5 11.5l-.5 1m3.5-1l.5 1m5.5-6l.5 1M9 22c3.866 0 7-2.686 7-6c0-1.402-.56-2.87-1.5-4.097C12.562 9.575 12.004 7.803 12 7c-.059 1.607-2.015 2.477-3 1c-.985 1.477-2.941.607-3-1c-.003.802-.562 2.575-2.5 4.903C2.56 13.13 2 14.598 2 16c0 3.314 3.134 6 7 6m2-16.984C11.834 3.623 12.11 2.57 12.112 2c.059 1.616 1.993 2.49 2.967 1.005c.973 1.486 2.908.611 2.966-1.005c.003.807.556 2.589 2.472 4.93C21.446 8.163 22 9.64 22 11.048c0 2.05-1.173 3.86-2.966 4.951" color="currentColor"></svg:path>`,
})
export class HugeiconsDimSum02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDiningTableIcon],svg[hugeicons-dining-table-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m21 4l-.504.961C19.812 6.267 18.883 7 17.916 7H7.084c-.968 0-1.897-.733-2.581-2.039L4 4M2 4h20M5 20h.869c.297 0 .446 0 .589-.02a2 2 0 0 0 .91-.378c.116-.086.221-.191.432-.402c.316-.316.474-.474.647-.603c.4-.3.87-.495 1.366-.566c.214-.031.437-.031.884-.031h2.606c.447 0 .67 0 .884.03a3 3 0 0 1 1.366.567c.173.13.331.287.647.603c.21.21.316.316.431.402a2 2 0 0 0 .911.377c.143.021.291.021.59.021H19m-9-2l.206-1.03c.127-.635.19-.953.394-1.164q.082-.084.18-.148c.247-.158.571-.158 1.22-.158s.973 0 1.22.158q.098.063.18.148c.203.21.267.529.394 1.165L14 18M10 7l.206 1.03c.127.635.19.953.394 1.164q.082.084.18.148c.247.158.571.158 1.22.158s.973 0 1.22-.158q.098-.064.18-.148c.203-.21.267-.529.394-1.165L14 7m-2 8.5v-6" color="currentColor"></svg:path>`,
})
export class HugeiconsDiningTableIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDiplomaIcon],svg[hugeicons-diploma-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M18.5 17.838c1.03-.151 1.763-.444 2.328-1.01C22 15.657 22 13.771 22 10s0-5.657-1.172-6.828S17.771 2 14 2h-4C6.229 2 4.343 2 3.172 3.172S2 6.229 2 10s0 5.657 1.172 6.828c.808.809 1.956 1.06 3.828 1.137M17 7H7"></svg:path><svg:path d="M14.5 14.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0"></svg:path><svg:path d="M9.5 14.5c0 4.066 1.722 6.37 2.5 7.5l1.5-3l1.75 1L17 21c-.735-.711-1.494-2.953-1.494-2.953"></svg:path></svg:g>`,
})
export class HugeiconsDiplomaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDirectionLeft01Icon],svg[hugeicons-direction-left-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6.148 5.68c.678-.827 1.017-1.24 1.48-1.46S8.623 4 9.682 4H15v7H9.681c-1.059 0-1.589 0-2.052-.22s-.803-.633-1.48-1.46l-.27-.326C5.294 8.28 5 7.922 5 7.5s.293-.78.88-1.494zM15 21V3m-4 18h8" color="currentColor"></svg:path>`,
})
export class HugeiconsDirectionLeft01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDirectionLeft02Icon],svg[hugeicons-direction-left-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M7.06 5.68c.626-.827.939-1.24 1.367-1.46S9.343 4 10.32 4H16c.943 0 1.414 0 1.707.293S18 5.057 18 6v3c0 .943 0 1.414-.293 1.707S16.943 11 16 11h-5.679c-.978 0-1.466 0-1.894-.22s-.741-.633-1.367-1.46l-.248-.326C6.271 8.28 6 7.922 6 7.5s.27-.78.812-1.494z"></svg:path><svg:path d="M7.06 5.68c.626-.827.939-1.24 1.367-1.46S9.343 4 10.32 4H16c.943 0 1.414 0 1.707.293S18 5.057 18 6v3c0 .943 0 1.414-.293 1.707S16.943 11 16 11h-5.679c-.978 0-1.466 0-1.894-.22s-.741-.633-1.367-1.46l-.248-.326C6.271 8.28 6 7.922 6 7.5s.27-.78.812-1.494zM14 21V11m0-7V3m-4 18h8"></svg:path></svg:g>`,
})
export class HugeiconsDirectionLeft02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDirectionRight01Icon],svg[hugeicons-direction-right-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.852 5.68c-.678-.827-1.018-1.24-1.48-1.46C15.907 4 15.377 4 14.318 4H9v7h5.319c1.059 0 1.589 0 2.052-.22s.803-.633 1.48-1.46l.27-.326C18.706 8.28 19 7.922 19 7.5s-.293-.78-.88-1.494zM9 3v18m-4 0h8" color="currentColor"></svg:path>`,
})
export class HugeiconsDirectionRight01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDirectionRight02Icon],svg[hugeicons-direction-right-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16.852 5.68c-.678-.827-1.018-1.24-1.48-1.46C14.907 4 14.377 4 13.318 4H8c-.943 0-1.414 0-1.707.293S6 5.057 6 6v3c0 .943 0 1.414.293 1.707S7.057 11 8 11h5.319c1.059 0 1.589 0 2.052-.22s.803-.633 1.48-1.46l.27-.326C17.706 8.28 18 7.922 18 7.5s-.293-.78-.88-1.494zM10 11v10m0-18v1M6 21h8" color="currentColor"></svg:path>`,
})
export class HugeiconsDirectionRight02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDirections01Icon],svg[hugeicons-directions-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.919 4.44c.542-.708.813-1.062 1.184-1.251C6.473 3 6.898 3 7.745 3h2.416c.867 0 1.3 0 1.57.293C12 3.586 12 4.057 12 5v4H7.745c-.847 0-1.271 0-1.642-.189c-.37-.189-.642-.543-1.184-1.25l-.215-.28C4.234 6.667 4 6.361 4 6s.235-.668.704-1.28zm14.162 5c-.542-.708-.813-1.062-1.184-1.251C17.527 8 17.102 8 16.255 8H12v6h4.255c.847 0 1.271 0 1.642-.189c.37-.189.642-.543 1.184-1.25l.215-.28c.47-.613.704-.919.704-1.281s-.235-.668-.704-1.28zM12 21V4M9 21h6" color="currentColor"></svg:path>`,
})
export class HugeiconsDirections01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDirections02Icon],svg[hugeicons-directions-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18.196 3.2c-.475-.59-.712-.885-1.036-1.043S16.465 2 15.723 2H13.61c-.76 0-1.139 0-1.374.244S12 2.881 12 3.667V7h3.723c.742 0 1.112 0 1.437-.157c.324-.158.561-.453 1.036-1.042l.188-.234c.41-.51.616-.765.616-1.067s-.205-.557-.616-1.067zm0 9c-.475-.59-.712-.885-1.036-1.043S16.465 11 15.723 11H12v5h3.723c.742 0 1.112 0 1.437-.157c.324-.158.561-.453 1.036-1.042l.188-.234c.41-.51.616-.765.616-1.067s-.205-.557-.616-1.067zm-12.392-4c.475-.59.712-.885 1.036-1.043S7.535 7 8.277 7H12v5H8.277c-.742 0-1.112 0-1.437-.157c-.324-.158-.561-.453-1.036-1.042l-.188-.234C5.206 10.057 5 9.802 5 9.5s.205-.557.616-1.067zM12 22V3M9 22h6" color="currentColor"></svg:path>`,
})
export class HugeiconsDirections02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDirhamIcon],svg[hugeicons-dirham-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M22 12.001c0 5.523-4.477 10-10 10s-10-4.477-10-10s4.477-10 10-10s10 4.477 10 10"></svg:path><svg:path d="m15.69 9.001l1.47 1.703c.788.912.117 2.296-1.112 2.297H15m-6-5v4.998m.5 4.501H11m-1.5 0H8m1.5 0c-.333-.333-.8-1.2 0-2c.633-.632 1.5.002 1.5.002m1-2.501v.01"></svg:path></svg:g>`,
})
export class HugeiconsDirhamIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDisability01Icon],svg[hugeicons-disability-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M19.5 18h-1.323c-.328 0-.492 0-.619-.086s-.188-.238-.31-.543l-.497-1.242c-.121-.305-.182-.457-.31-.543c-.126-.086-.29-.086-.618-.086H13.5c-.471 0-.707 0-.854-.146c-.146-.147-.146-.383-.146-.854v-4m0-2.5v2.5m0 0h3.889M12.5 6a2 2 0 1 1 0-4a2 2 0 0 1 0 4"></svg:path><svg:path d="M9.558 10c-2.87.48-5.058 2.964-5.058 5.958C4.5 19.295 7.217 22 10.57 22a6.07 6.07 0 0 0 4.93-2.517"></svg:path></svg:g>`,
})
export class HugeiconsDisability01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDisability02Icon],svg[hugeicons-disability-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m11.5 10l-2-1L7 12m7-6a2 2 0 1 1 0-4a2 2 0 0 1 0 4m1.5 13.483A6.07 6.07 0 0 1 10.57 22c-3.353 0-6.07-2.705-6.07-6.042c0-.875.164-1.707.5-2.458M12.65 8l-.754 1.846c-.766 1.879-1.149 2.818-.713 3.486s1.432.668 3.424.668c.694 0 1.364-.18 1.75.496L19.5 20" color="currentColor"></svg:path>`,
})
export class HugeiconsDisability02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDiscordIcon],svg[hugeicons-discord-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M7 7c3.889-1.333 6.111-1.333 10 0M7 17c3.5 1.333 6.5 1.333 10 0"></svg:path><svg:path d="M8.857 17.625C8.857 18.75 6.737 21 6.192 21c-1.633 0-3.083-1.875-3.809-3.375c-.726-1.875-.544-6.562 1.632-12.937C5.601 3.546 7.195 3.18 8.857 3L10 6m5.143 11.625c0 1.125 2.12 3.375 2.665 3.375c1.633 0 3.083-1.875 3.809-3.375c.726-1.875.544-6.562-1.632-12.937C18.399 3.546 16.805 3.18 15.143 3L14 6m-6.49 6H7.5m9 0h-.01"></svg:path></svg:g>`,
})
export class HugeiconsDiscordIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDiscountIcon],svg[hugeicons-discount-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7.692 19.616c.59 0 .886 0 1.155.1q.057.021.111.046c.261.12.47.328.888.746c.962.962 1.443 1.443 2.034 1.488q.12.009.24 0c.591-.045 1.072-.526 2.034-1.488c.418-.418.627-.626.888-.746q.054-.025.11-.046c.27-.1.565-.1 1.156-.1h.11c1.507 0 2.261 0 2.73-.468s.468-1.223.468-2.73v-.11c0-.59 0-.886.1-1.155q.021-.057.046-.111c.12-.261.328-.47.746-.888c.962-.962 1.443-1.443 1.488-2.034q.009-.12 0-.24c-.045-.591-.526-1.072-1.488-2.034c-.418-.418-.626-.627-.746-.888l-.046-.11c-.1-.27-.1-.565-.1-1.156v-.11c0-1.507 0-2.261-.468-2.73s-1.223-.468-2.73-.468h-.11c-.59 0-.886 0-1.155-.1l-.111-.046c-.261-.12-.47-.328-.888-.746c-.962-.962-1.443-1.443-2.034-1.488a2 2 0 0 0-.24 0c-.591.045-1.072.526-2.034 1.488c-.418.418-.627.627-.888.746l-.11.046c-.27.1-.565.1-1.156.1h-.11c-1.507 0-2.261 0-2.73.468s-.468 1.223-.468 2.73v.11c0 .59 0 .886-.1 1.155q-.022.057-.046.111c-.12.261-.328.47-.746.888c-.962.962-1.443 1.443-1.488 2.034a2 2 0 0 0 0 .24c.045.591.526 1.072 1.488 2.034c.418.418.627.627.746.888q.025.054.046.11c.1.27.1.565.1 1.156v.11c0 1.507 0 2.261.468 2.73s1.223.468 2.73.468zM15 9l-6 6m6 0h-.01M9.01 9H9" color="currentColor"></svg:path>`,
})
export class HugeiconsDiscountIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDiscount01Icon],svg[hugeicons-discount-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.144 2.5c-2.657.06-4.209.315-5.27 1.375S2.562 6.487 2.5 9.145M14.856 2.5c2.657.06 4.209.315 5.27 1.375s1.313 2.612 1.374 5.27M14.856 21.5c2.657-.06 4.209-.315 5.27-1.375s1.313-2.612 1.374-5.27M9.144 21.5c-2.657-.06-4.209-.315-5.27-1.375s-1.313-2.612-1.374-5.27M8 8h.009M16 16h.009M8 16l8-8" color="currentColor"></svg:path>`,
})
export class HugeiconsDiscount01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDiscountTag01Icon],svg[hugeicons-discount-tag-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M7.729 15.286h5m-2.502-2.5h.01m-.008 5h.01M6.5 3.697C9.533 6.782 14.536.124 17.496 2.54C19.199 3.93 18.66 7 16.449 9"></svg:path><svg:path d="M18.664 6.578c.983.179 1.204.765 1.497 2.392c.265 1.466.339 3.225.339 3.974a1.3 1.3 0 0 1-.338.743c-2.057 2.035-6.137 5.878-8.196 7.787c-.808.681-2.028.696-2.886.07c-1.756-1.491-3.443-3.178-5.097-4.701c-.664-.808-.648-1.956.076-2.717c2.178-2.135 6.12-5.789 8.346-7.807c.223-.18.496-.294.79-.319c.498 0 1.355.063 2.19.109"></svg:path></svg:g>`,
})
export class HugeiconsDiscountTag01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDiscountTag02Icon],svg[hugeicons-discount-tag-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M10.996 10h.015M11 16h.015M7 13h8"></svg:path><svg:circle cx="1.5" cy="1.5" r="1.5" transform="matrix(1 0 0 -1 16 8)"></svg:circle><svg:path d="M2.774 11.144c-1.003 1.12-1.024 2.81-.104 4a34 34 0 0 0 6.186 6.186c1.19.92 2.88.899 4-.104a92 92 0 0 0 8.516-8.698a1.95 1.95 0 0 0 .47-1.094c.164-1.796.503-6.97-.902-8.374s-6.578-1.066-8.374-.901a1.95 1.95 0 0 0-1.094.47a92 92 0 0 0-8.698 8.515"></svg:path></svg:g>`,
})
export class HugeiconsDiscountTag02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDiscoverCircleIcon],svg[hugeicons-discover-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10s10-4.477 10-10"></svg:path><svg:path d="m12.401 8.298l2.92-.973c.886-.296 1.33-.443 1.564-.21c.233.234.086.677-.21 1.564l-.973 2.92c-.503 1.51-.755 2.265-1.297 2.806c-.541.542-1.296.794-2.806 1.297l-2.92.973c-.887.296-1.33.444-1.564.21s-.086-.678.21-1.564l.973-2.92c.503-1.51.755-2.265 1.297-2.806c.541-.542 1.296-.794 2.806-1.297M12 12l-.006.006"></svg:path></svg:g>`,
})
export class HugeiconsDiscoverCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDiscoverSquareIcon],svg[hugeicons-discover-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="m12.401 8.298l2.92-.973c.886-.296 1.33-.443 1.564-.21c.233.234.086.677-.21 1.564l-.973 2.92c-.503 1.51-.755 2.265-1.297 2.806c-.541.542-1.296.794-2.806 1.297l-2.92.973c-.887.296-1.33.444-1.564.21s-.086-.678.21-1.564l.973-2.92c.503-1.51.755-2.265 1.297-2.806c.541-.542 1.296-.794 2.806-1.297M12 12l-.006.006"></svg:path><svg:path d="M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12 2.5c4.478 0 6.718 0 8.109 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109S16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391S2.5 16.479 2.5 12"></svg:path></svg:g>`,
})
export class HugeiconsDiscoverSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDish01Icon],svg[hugeicons-dish-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2 17h20M12 7s1.5-1.034 1.5-2.309c0-2.255-3-2.255-3 0C10.5 5.966 12 7 12 7M3 17l.621 2.485A2 2 0 0 0 5.561 21h12.877a2 2 0 0 0 1.94-1.515L21 17m-.5-2.5C20.002 10.277 16.386 7 12 7s-8.002 3.277-8.5 7.5" color="currentColor"></svg:path>`,
})
export class HugeiconsDish01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDish02Icon],svg[hugeicons-dish-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M21 17a5 5 0 0 1 0-10"></svg:path><svg:path d="M21 21a9 9 0 1 1 0-18M6 3v5m0 13V11M3.5 8h5M9 3v4.352c0 4.864-6 4.864-6 0V3"></svg:path></svg:g>`,
})
export class HugeiconsDish02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDishWasherIcon],svg[hugeicons-dish-washer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M2 6c0-3.31.69-4 4-4h12c3.31 0 4 .69 4 4v12c0 3.31-.69 4-4 4H6c-3.31 0-4-.69-4-4zm0 2h20M5 5h4m10 .009V5"></svg:path><svg:path d="M9 18a3 3 0 1 0 0-6a3 3 0 0 0 0 6m6.003-.002v-2.445m0 0v-3.56c.67.084 1.436.402 1.785.744c.349.343.358.782.48 1.328c.126.564.247 1.096.226 1.183c-.026.59-2.4.31-2.491.306"></svg:path></svg:g>`,
})
export class HugeiconsDishWasherIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDispleasedIcon],svg[hugeicons-displeased-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:circle cx="12" cy="12" r="10"></svg:circle><svg:path d="M9 15.684c2.095-1.377 4.504-.54 6 1.316M7 9.01s1.41-.127 2.196.498m0 0l-.263.835c-.104.329.167.657.543.657c.396 0 .657-.357.453-.665a3.6 3.6 0 0 0-.733-.827M14 9.011s1.41-.128 2.196.497m0 0l-.263.835c-.104.329.167.657.543.657c.396 0 .657-.357.453-.665a3.6 3.6 0 0 0-.733-.827"></svg:path></svg:g>`,
})
export class HugeiconsDispleasedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDistributeHorizontalCenterIcon],svg[hugeicons-distribute-horizontal-center-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 5V2m0 17v3M17 8.002c.844 0 1.818-.083 2.299.75c.201.348.201.816.201 1.75v3c0 .935 0 1.402-.201 1.75c-.481.834-1.455.75-2.299.75s-1.818.084-2.299-.75c-.201-.348-.201-.815-.201-1.75v-3c0-.934 0-1.402.201-1.75c.481-.833 1.455-.75 2.299-.75m-10-3c.844 0 1.818-.083 2.299.75c.201.348.201.816.201 1.75v9c0 .935 0 1.402-.201 1.75c-.481.834-1.455.75-2.299.75s-1.818.084-2.299-.75c-.201-.348-.201-.815-.201-1.75v-9c0-.934 0-1.402.201-1.75c.481-.833 1.455-.75 2.299-.75M17 8V2m0 14v6" color="currentColor"></svg:path>`,
})
export class HugeiconsDistributeHorizontalCenterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDistributeHorizontalLeftIcon],svg[hugeicons-distribute-horizontal-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.001 2v20M14 2v20m5.5-13.998c-.844 0-1.818-.083-2.299.75C17 9.1 17 9.568 17 10.502v3c0 .935 0 1.402.201 1.75c.481.834 1.455.75 2.299.75s1.818.084 2.299-.75c.201-.348.201-.815.201-1.75v-3c0-.934 0-1.402-.201-1.75c-.481-.833-1.455-.75-2.299-.75m-12-3c-.844 0-1.818-.083-2.299.75C5 6.1 5 6.568 5 7.502v9c0 .935 0 1.402.201 1.75c.481.834 1.455.75 2.299.75s1.818.084 2.299-.75c.201-.348.201-.815.201-1.75v-9c0-.934 0-1.402-.201-1.75c-.481-.833-1.455-.75-2.299-.75" color="currentColor"></svg:path>`,
})
export class HugeiconsDistributeHorizontalLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDistributeHorizontalRightIcon],svg[hugeicons-distribute-horizontal-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21.999 2v20M10 2v20m6.5-13.998c.844 0 1.818-.083 2.299.75c.201.348.201.816.201 1.75v3c0 .935 0 1.402-.201 1.75c-.481.834-1.455.75-2.299.75s-1.818.084-2.299-.75C14 14.904 14 14.437 14 13.502v-3c0-.934 0-1.402.201-1.75c.481-.833 1.455-.75 2.299-.75m-12-3c.844 0 1.818-.083 2.299.75C7 6.1 7 6.568 7 7.502v9c0 .935 0 1.402-.201 1.75c-.481.834-1.455.75-2.299.75s-1.818.084-2.299-.75C2 17.904 2 17.437 2 16.502v-9c0-.934 0-1.402.201-1.75c.481-.833 1.455-.75 2.299-.75" color="currentColor"></svg:path>`,
})
export class HugeiconsDistributeHorizontalRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDistributeVerticalBottomIcon],svg[hugeicons-distribute-vertical-bottom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2 22h20M2 10h20M8.002 4.5c0 .844-.083 1.818.75 2.299C9.1 7 9.568 7 10.502 7h3c.935 0 1.402 0 1.75-.201c.834-.481.75-1.455.75-2.299s.084-1.818-.75-2.299C14.904 2 14.437 2 13.502 2h-3c-.934 0-1.402 0-1.75.201c-.833.481-.75 1.455-.75 2.299m-3 12c0 .844-.083 1.818.75 2.299c.348.201.816.201 1.75.201h9c.935 0 1.402 0 1.75-.201c.834-.481.75-1.455.75-2.299s.084-1.818-.75-2.299C17.904 14 17.437 14 16.502 14h-9c-.934 0-1.402 0-1.75.201c-.833.481-.75 1.455-.75 2.299" color="currentColor"></svg:path>`,
})
export class HugeiconsDistributeVerticalBottomIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDistributeVerticalCenterIcon],svg[hugeicons-distribute-vertical-center-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 17H2m17 0h3M8.002 7c0-.844-.083-1.818.75-2.299c.348-.201.816-.201 1.75-.201h3c.935 0 1.402 0 1.75.201c.834.481.75 1.455.75 2.299s.084 1.818-.75 2.299c-.348.201-.815.201-1.75.201h-3c-.934 0-1.402 0-1.75-.201c-.833-.481-.75-1.455-.75-2.299m-3 10c0-.844-.083-1.818.75-2.299c.348-.201.816-.201 1.75-.201h9c.935 0 1.402 0 1.75.201c.834.481.75 1.455.75 2.299s.084 1.818-.75 2.299c-.348.201-.815.201-1.75.201h-9c-.934 0-1.402 0-1.75-.201c-.833-.481-.75-1.455-.75-2.299M8 7H2m14 0h6" color="currentColor"></svg:path>`,
})
export class HugeiconsDistributeVerticalCenterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDistributeVerticalTopIcon],svg[hugeicons-distribute-vertical-top-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2 2h20M2 14h20M8.002 7.5c0-.844-.083-1.818.75-2.299C9.1 5 9.568 5 10.502 5h3c.935 0 1.402 0 1.75.201c.834.481.75 1.455.75 2.299s.084 1.818-.75 2.299c-.348.201-.815.201-1.75.201h-3c-.934 0-1.402 0-1.75-.201c-.833-.481-.75-1.455-.75-2.299m-3 12c0-.844-.083-1.818.75-2.299C6.1 17 6.568 17 7.502 17h9c.935 0 1.402 0 1.75.201c.834.481.75 1.455.75 2.299s.084 1.818-.75 2.299c-.348.201-.815.201-1.75.201h-9c-.934 0-1.402 0-1.75-.201c-.833-.481-.75-1.455-.75-2.299" color="currentColor"></svg:path>`,
})
export class HugeiconsDistributeVerticalTopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDistributionIcon],svg[hugeicons-distribution-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.5 10.265V6h15v4.265c0 3.175 0 4.762-.976 5.749c-.977.986-2.548.986-5.69.986h-1.667c-3.143 0-4.714 0-5.69-.986c-.977-.986-.977-2.574-.977-5.749M4.5 6l.721-1.538c.56-1.194.84-1.79 1.406-2.126C7.194 2 7.92 2 9.375 2h5.25c1.454 0 2.181 0 2.748.336s.847.932 1.406 2.126L19.5 6m-9 3h3M4 22h8m8 0h-8m0 0v-2.5" color="currentColor"></svg:path>`,
})
export class HugeiconsDistributionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDivideSignIcon],svg[hugeicons-divide-sign-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 12h18m-6.5-6.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0m0 13a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0" color="currentColor"></svg:path>`,
})
export class HugeiconsDivideSignIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDivideSignCircleIcon],svg[hugeicons-divide-sign-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M7 12h10m-4-4a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0 8a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path><svg:circle cx="12" cy="12" r="10"></svg:circle></svg:g>`,
})
export class HugeiconsDivideSignCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDivideSignSquareIcon],svg[hugeicons-divide-sign-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M7 12h10m-4-4a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0 8a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path><svg:path d="M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12 2.5c4.478 0 6.718 0 8.109 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109S16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391S2.5 16.479 2.5 12"></svg:path></svg:g>`,
})
export class HugeiconsDivideSignSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDnaIcon],svg[hugeicons-dna-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:circle cx="12" cy="12" r="5"></svg:circle><svg:path d="M22 8.443A4.556 4.556 0 1 1 15.557 2M2 15.557A4.556 4.556 0 1 1 8.443 22"></svg:path></svg:g>`,
})
export class HugeiconsDnaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDna01Icon],svg[hugeicons-dna-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8.667 22c.534-.534 1.068-1.068.574-4m-.574-2.666C7.334 10 8.334 9 8.667 8.667s1.333-1.333 6.667 0m-6.667 6.667c-5.333-1.334-6-.668-6.667-.001m6.667 0c5.333 1.334 6.333.333 6.666 0s1.334-1.333 0-6.666m6.667 0c-.667.667-1.333 1.333-6.666 0M15.333 2c-.534.534-1.068 1.068-.574 4" color="currentColor"></svg:path>`,
})
export class HugeiconsDna01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDoNotTouch01Icon],svg[hugeicons-do-not-touch-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.5 22v-1.164c0-.923.499-1.65 1-2.336M8 22c0-1.117-.374-2.473-1.063-3.353l-3.6-4.598a1.696 1.696 0 0 1 .033-2.072a1.683 1.683 0 0 1 2.51-.14l1.62 1.626V7.5m6.002-2a1.5 1.5 0 1 1 3 0v2m-3-2v-2a1.5 1.5 0 0 0-3 0V5m3 .5v4m-3-4.5a1.5 1.5 0 0 0-1.5-1.5C8.174 3.5 8 4 8 4m2.502 1v1.5m6 5.5V7.5m0 0a1.5 1.5 0 1 1 3 0v6.167c0 .714 0 1.323-.012 1.833M2 2l20 20" color="currentColor"></svg:path>`,
})
export class HugeiconsDoNotTouch01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDoNotTouch02Icon],svg[hugeicons-do-not-touch-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 18.5c-.569.886-1.201 1.784-2.198 2.168C15.94 21 14.856 21 12.69 21c-1.137 0-1.705 0-2.233-.117a5 5 0 0 1-2.183-1.094c-.41-.355-.75-.81-1.433-1.722l-3.004-4.018a1.696 1.696 0 0 1 .033-2.073a1.683 1.683 0 0 1 2.51-.14L8 13.464V7.5m3-2a1.5 1.5 0 0 0-2-1.415M11 5.5v-2a1.5 1.5 0 1 1 3 0v2m-3 0v1.001M14 5.5a1.5 1.5 0 1 1 3 0v2m-3-2v4.001M17 7.5a1.5 1.5 0 1 1 3 0c-.002 2.667.015 5.334-.012 8M17 7.5V10M2.5 2l20 20" color="currentColor"></svg:path>`,
})
export class HugeiconsDoNotTouch02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDoc01Icon],svg[hugeicons-doc-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M3.5 13v-.804c0-2.967 0-4.45.469-5.636c.754-1.905 2.348-3.407 4.37-4.118C9.595 2 11.168 2 14.318 2c1.798 0 2.698 0 3.416.253c1.155.406 2.066 1.264 2.497 2.353c.268.677.268 1.525.268 3.22V13"></svg:path><svg:path d="M3.5 12a3.333 3.333 0 0 1 3.333-3.333c.666 0 1.451.116 2.098-.057a1.67 1.67 0 0 0 1.179-1.18c.173-.647.057-1.432.057-2.098A3.333 3.333 0 0 1 13.5 2m7 15.22c-.051-1.19-.826-1.22-1.877-1.22c-1.619 0-1.887.406-1.887 2v2c0 1.594.268 2 1.887 2c1.051 0 1.826-.03 1.878-1.22M7.266 19c0 1.657-1.264 3-2.824 3c-.352 0-.528 0-.659-.08c-.313-.193-.282-.582-.282-.92v-4c0-.338-.031-.727.282-.92c.131-.08.307-.08.66-.08c1.559 0 2.823 1.343 2.823 3M12 22c-.888 0-1.331 0-1.607-.293s-.276-.764-.276-1.707v-2c0-.943 0-1.414.276-1.707S11.113 16 12 16s1.33 0 1.606.293s.276.764.276 1.707v2c0 .943 0 1.414-.276 1.707C13.331 22 12.887 22 12 22"></svg:path></svg:g>`,
})
export class HugeiconsDoc01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDoc02Icon],svg[hugeicons-doc-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M21 14.016c-.046-.992-.723-1.016-1.643-1.016c-1.416 0-1.651.338-1.651 1.667v1.666c0 1.329.235 1.667 1.651 1.667c.92 0 1.597-.024 1.643-1.016M10.295 15.5c0 1.38-1.106 2.5-2.47 2.5c-.309 0-.463 0-.577-.067c-.275-.16-.247-.485-.247-.766v-3.334c0-.281-.028-.606.247-.766c.114-.067.268-.067.576-.067c1.365 0 2.47 1.12 2.47 2.5M14 18c-.776 0-1.165 0-1.406-.244s-.241-.637-.241-1.423v-1.666c0-.786 0-1.179.241-1.423S13.224 13 14 13s1.165 0 1.406.244s.241.637.241 1.423v1.666c0 .786 0 1.179-.241 1.423S14.776 18 14 18"></svg:path><svg:path d="M15 22h-4.273c-3.26 0-4.892 0-6.024-.798a4.1 4.1 0 0 1-.855-.805C3 19.331 3 17.797 3 14.727v-2.545c0-2.963 0-4.445.469-5.628c.754-1.903 2.348-3.403 4.37-4.113C9.095 2 10.668 2 13.818 2c1.798 0 2.698 0 3.416.252c1.155.406 2.066 1.263 2.497 2.35C20 5.278 20 6.125 20 7.818V10"></svg:path><svg:path d="M3 12a3.333 3.333 0 0 1 3.333-3.333c.666 0 1.451.116 2.098-.057A1.67 1.67 0 0 0 9.61 7.43c.173-.647.057-1.432.057-2.098A3.333 3.333 0 0 1 13 2"></svg:path></svg:g>`,
})
export class HugeiconsDoc02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDoctor01Icon],svg[hugeicons-doctor-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M20 22v-3c0-2.828 0-4.243-.879-5.121C18.243 13 16.828 13 14 13l-2 2l-2-2c-2.828 0-4.243 0-5.121.879C4 14.757 4 16.172 4 19v3m12-9v5.5"></svg:path><svg:path d="M8.5 13v4m0 0a2 2 0 0 1 2 2v1m-2-3a2 2 0 0 0-2 2v1m9-13.5v-1a3.5 3.5 0 1 0-7 0v1a3.5 3.5 0 1 0 7 0m1.25 12.75a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0"></svg:path></svg:g>`,
})
export class HugeiconsDoctor01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDoctor02Icon],svg[hugeicons-doctor-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 22v-1c0-1.87 0-2.804.402-3.5A3 3 0 0 1 5.5 16.402C6.196 16 7.13 16 9 16l3 4l3-4c1.87 0 2.804 0 3.5.402a3 3 0 0 1 1.098 1.098C20 18.196 20 19.13 20 21v1M15.937 8l1.018-4.136C17.188 2.917 16.483 2 15.523 2H8.477c-.96 0-1.665.917-1.432 1.864L8.063 8m7.874 0v2c0 2.209-1.762 4-3.937 4s-3.937-1.791-3.937-4V8m7.874 0H8.063M12 4v2m1-1h-2" color="currentColor"></svg:path>`,
})
export class HugeiconsDoctor02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDoctor03Icon],svg[hugeicons-doctor-03-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20 22v-3c0-2.828 0-4.243-.879-5.121C18.243 13 16.828 13 14 13l-2 2l-2-2c-2.828 0-4.243 0-5.121.879C4 14.757 4 16.172 4 19v3M15.5 6.5v-1a3.5 3.5 0 1 0-7 0v1a3.5 3.5 0 1 0 7 0M16 16v3m1.5-1.5h-3" color="currentColor"></svg:path>`,
})
export class HugeiconsDoctor03Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDocumentAttachmentIcon],svg[hugeicons-document-attachment-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M21 11v-1c0-3.771 0-5.657-1.24-6.828C18.519 2 16.522 2 12.53 2h-1.06C7.479 2 5.482 2 4.24 3.172C3 4.343 3 6.229 3 10v4c0 3.771 0 5.657 1.24 6.828C5.481 22 7.478 22 11.47 22H12M8 7h8m-8 5h5"></svg:path><svg:path d="M21 20.647V17c0-1.43-1.343-3-3-3s-3 1.57-3 3v3.5c0 .78.733 1.5 1.636 1.5c.904 0 1.637-.72 1.637-1.5v-2.735"></svg:path></svg:g>`,
})
export class HugeiconsDocumentAttachmentIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDocumentCodeIcon],svg[hugeicons-document-code-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="m18 16l1.84 1.586c.773.667 1.16 1 1.16 1.414s-.387.747-1.16 1.414L18 22m-4-6l-1.84 1.586c-.773.667-1.16 1-1.16 1.414s.387.747 1.16 1.414L14 22"></svg:path><svg:path d="M20 13.003V7.82c0-1.694 0-2.54-.268-3.217c-.43-1.087-1.342-1.945-2.497-2.35C16.517 2 15.617 2 13.818 2c-3.148 0-4.722 0-5.98.441c-2.02.71-3.615 2.211-4.37 4.114C3 7.74 3 9.221 3 12.185v2.546c0 3.07 0 4.605.848 5.672c.243.305.53.576.855.805c.912.643 2.147.768 4.297.792"></svg:path><svg:path d="M3 12a3.333 3.333 0 0 1 3.333-3.333c.666 0 1.451.116 2.098-.057A1.67 1.67 0 0 0 9.61 7.43c.173-.647.057-1.432.057-2.098A3.333 3.333 0 0 1 13 2"></svg:path></svg:g>`,
})
export class HugeiconsDocumentCodeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDocumentValidationIcon],svg[hugeicons-document-validation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M14.98 7.016s.5.5 1 1.5c0 0 1.589-2.5 3-3M9.995 2.021c-2.499-.105-4.429.182-4.429.182c-1.219.088-3.555.77-3.555 4.762c0 3.956-.025 8.834 0 10.779c0 1.188.736 3.96 3.282 4.108c3.095.18 8.67.219 11.228 0c.684-.039 2.964-.576 3.252-3.056c.299-2.57.24-4.355.24-4.78"></svg:path><svg:path d="M22 7.016c0 2.761-2.24 5-5.005 5a5 5 0 0 1-5.005-5c0-2.762 2.241-5 5.005-5a5 5 0 0 1 5.005 5m-15.02 6h4m-4 4h8"></svg:path></svg:g>`,
})
export class HugeiconsDocumentValidationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDollar01Icon],svg[hugeicons-dollar-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.958 8.389C17.958 6.24 15.291 4.5 12 4.5c-3.29 0-5.958 1.741-5.958 3.889S7.667 11.722 12 11.722s6.5 1.111 6.5 3.89c0 2.777-2.91 3.888-6.5 3.888s-6.5-1.741-6.5-3.889m7-13.111v1.71m0 17.29v-1.71" color="currentColor"></svg:path>`,
})
export class HugeiconsDollar01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDollar02Icon],svg[hugeicons-dollar-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18.417 8.148C18.417 5.858 15.544 4 12 4S5.583 5.857 5.583 8.148s1.75 3.556 6.417 3.556s7 1.185 7 4.148S15.866 20 12 20s-7-1.857-7-4.148M12 2v20" color="currentColor"></svg:path>`,
})
export class HugeiconsDollar02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDollarCircleIcon],svg[hugeicons-dollar-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10"></svg:path><svg:path d="M14.71 10.061c-.099-.763-.975-1.995-2.55-1.995c-1.829 0-2.599 1.013-2.755 1.52c-.244.678-.195 2.071 1.95 2.223c2.68.19 3.754.506 3.618 2.147s-1.631 1.995-2.812 1.957s-3.113-.58-3.188-2.04m3-6.875V8.07m0 7.833v1.095"></svg:path></svg:g>`,
})
export class HugeiconsDollarCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDollarReceive01Icon],svg[hugeicons-dollar-receive-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10.625 8.63C10.625 6.625 8.778 5 6.5 5S2.375 6.625 2.375 8.63S3.5 11.74 6.5 11.74s4.5 1.038 4.5 3.63C11 17.963 8.985 19 6.5 19S2 17.375 2 15.37M6.5 3v2m0 16v-2m8-7H22m-7.5 0c0 .7 1.994 2.008 2.5 2.5M14.5 12c0-.7 1.994-2.008 2.5-2.5" color="currentColor"></svg:path>`,
})
export class HugeiconsDollarReceive01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDollarReceive02Icon],svg[hugeicons-dollar-receive-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10.625 8.63C10.625 6.625 8.778 5 6.5 5S2.375 6.625 2.375 8.63S3.5 11.74 6.5 11.74s4.5 1.038 4.5 3.63C11 17.963 8.985 19 6.5 19S2 17.375 2 15.37M6.5 3v18m8-9H22m-7.5 0c0 .7 1.994 2.008 2.5 2.5M14.5 12c0-.7 1.994-2.008 2.5-2.5" color="currentColor"></svg:path>`,
})
export class HugeiconsDollarReceive02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDollarSend01Icon],svg[hugeicons-dollar-send-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10.625 8.63C10.625 6.625 8.778 5 6.5 5S2.375 6.625 2.375 8.63S3.5 11.74 6.5 11.74s4.5 1.038 4.5 3.63C11 17.963 8.985 19 6.5 19S2 17.375 2 15.37M6.5 3v2m0 16v-2M22 12h-7.5m7.5 0c0 .7-1.994 2.008-2.5 2.5M22 12c0-.7-1.994-2.008-2.5-2.5" color="currentColor"></svg:path>`,
})
export class HugeiconsDollarSend01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDollarSend02Icon],svg[hugeicons-dollar-send-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10.625 8.63C10.625 6.625 8.778 5 6.5 5S2.375 6.625 2.375 8.63S3.5 11.74 6.5 11.74s4.5 1.038 4.5 3.63C11 17.963 8.985 19 6.5 19S2 17.375 2 15.37M6.5 3v18M22 12h-7.5m7.5 0c0 .7-1.994 2.008-2.5 2.5M22 12c0-.7-1.994-2.008-2.5-2.5" color="currentColor"></svg:path>`,
})
export class HugeiconsDollarSend02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDollarSquareIcon],svg[hugeicons-dollar-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M2.5 12c0-4.23 0-6.345 1.198-7.747q.256-.3.555-.555C5.655 2.5 7.77 2.5 12 2.5s6.345 0 7.747 1.198q.3.256.555.555C21.5 5.655 21.5 7.77 21.5 12s0 6.345-1.198 7.747q-.256.3-.555.555C18.345 21.5 16.23 21.5 12 21.5s-6.345 0-7.747-1.198q-.3-.256-.555-.555C2.5 18.345 2.5 16.23 2.5 12"></svg:path><svg:path d="M14.71 10.061c-.099-.763-.975-1.995-2.55-1.995c-1.829 0-2.599 1.013-2.755 1.52c-.244.678-.195 2.071 1.95 2.223c2.68.19 3.754.506 3.618 2.147s-1.631 1.995-2.812 1.957s-3.113-.58-3.188-2.04m3-6.875V8.07m0 7.833v1.095"></svg:path></svg:g>`,
})
export class HugeiconsDollarSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDomeIcon],svg[hugeicons-dome-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M6.856 22C6.313 20.014 6 17.687 6 15.2C6 7.91 8.686 2 12 2s6 5.91 6 13.2c0 2.487-.313 4.814-.856 6.8M3 22h18"></svg:path><svg:path d="M15.552 5c-.95 4.205-6.432 2.734-8.805 6.196a1.405 1.405 0 0 0 .008 1.603C9.235 16.267 15.599 14.792 17.5 19"></svg:path><svg:path d="M8.448 5c.95 4.205 6.432 2.734 8.805 6.196c.33.481.331 1.128-.008 1.603C14.765 16.267 8.401 14.792 6.5 19"></svg:path></svg:g>`,
})
export class HugeiconsDomeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDominoIcon],svg[hugeicons-domino-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 16c0 2.828 0 4.243-1.025 5.121S15.3 22 12 22s-4.95 0-5.975-.879C5 20.243 5 18.828 5 16V8c0-2.828 0-4.243 1.025-5.121S8.7 2 12 2s4.95 0 5.975.879C19 3.757 19 5.172 19 8zm-4.5 2h-.009m-4.99-2h-.009m2.516-9h-.01M19 12H5" color="currentColor"></svg:path>`,
})
export class HugeiconsDominoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDoorIcon],svg[hugeicons-door-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M5 22V8c0-2.828 0-4.243.879-5.121C6.757 2 8.172 2 11 2h2c2.828 0 4.243 0 5.121.879C19 3.757 19 5.172 19 8v14z"></svg:path><svg:path d="M8 11V7c0-1.655.345-2 2-2h4c1.655 0 2 .345 2 2v4c0 1.655-.345 2-2 2h-4c-1.655 0-2-.345-2-2M3 22h18M12 5v8m4-4H8m.008 8h-.009"></svg:path></svg:g>`,
})
export class HugeiconsDoorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDoor01Icon],svg[hugeicons-door-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 9.204c0-2.073 0-3.11.358-3.951a4.2 4.2 0 0 1 1.364-1.747c.711-.526 1.666-.712 3.575-1.083c1.985-.385 2.977-.578 3.75-.27a3.06 3.06 0 0 1 1.532 1.365C15 4.275 15 5.353 15 7.51v8.982c0 2.156 0 3.234-.421 3.99a3.06 3.06 0 0 1-1.532 1.367c-.773.307-1.765.114-3.75-.271c-1.91-.371-2.864-.557-3.575-1.083a4.2 4.2 0 0 1-1.364-1.747C4 17.905 4 16.87 4 14.796zm11 10.594c1.447.15 3.4.614 4.438-.71c.562-.717.562-1.81.562-3.995V8.907c0-2.186 0-3.278-.562-3.995c-1.038-1.324-2.99-.86-4.438-.71M12 13v-2m7 8.727h3M2 20h3" color="currentColor"></svg:path>`,
})
export class HugeiconsDoor01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDoor02Icon],svg[hugeicons-door-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 22V6c0-1.886 0-2.829.586-3.414C6.172 2 7.114 2 9 2h6c1.886 0 2.828 0 3.414.586C19 3.17 19 4.114 19 6v16M3 22h18m-5-9v-2" color="currentColor"></svg:path>`,
})
export class HugeiconsDoor02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDoorLockIcon],svg[hugeicons-door-lock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M3 22h18M4 22V6c0-3.31.79-4 4.571-4h6.858C19.21 2 20 2.69 20 6v16"></svg:path><svg:path d="M13.92 11.759V9.854c0-1.022-.86-1.85-1.92-1.85s-1.92.828-1.92 1.85v1.905M15 14.084c0 1.611-1.354 2.92-3 2.92s-3-1.309-3-2.92c0-1.71 1.354-3.01 3-3.01s3 1.3 3 3.01"></svg:path></svg:g>`,
})
export class HugeiconsDoorLockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDoughnutIcon],svg[hugeicons-doughnut-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M16 12a4 4 0 1 1-8 0a4 4 0 0 1 8 0"></svg:path><svg:path d="m22 11.722l-.44.588c-.727.972-1.703.912-2.396-.147l-.214-.326c-.668-1.02-1.602-1.117-2.323-.24l-.627.761m-8-.636l-.44.588c-.727.972-1.703.912-2.396-.147l-.214-.326c-.668-1.02-1.602-1.117-2.323-.24L2 12.358"></svg:path><svg:path d="M12 22c5.523 0 10-4.477 10-10c0-1.19-.18-2.352-.549-3.421c-.3-.871-.65-.766-1.529-.653c-1.295.166-2.625-.75-2.878-2.022c-.177-.887-.203-.863-1.108-.927c-.873-.063-1.68-.715-1.887-1.573C13.722 2.043 13.41 2 12 2C6.477 2 2 6.477 2 12s4.477 10 10 10"></svg:path></svg:g>`,
})
export class HugeiconsDoughnutIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDownload01Icon],svg[hugeicons-download-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M3.095 10Q3 10.687 3 11.4c0 5.302 4.03 9.6 9 9.6s9-4.298 9-9.6q0-.714-.095-1.4"></svg:path><svg:path d="M12 13V3m0 10c-.7 0-2.008-1.994-2.5-2.5M12 13c.7 0 2.008-1.994 2.5-2.5"></svg:path></svg:g>`,
})
export class HugeiconsDownload01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDownload02Icon],svg[hugeicons-download-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m3 14l.234.663c.91 2.578 1.365 3.868 2.403 4.602s2.406.735 5.14.735h2.445c2.735 0 4.102 0 5.14-.735c1.039-.734 1.494-2.024 2.404-4.602L21 14m-9 0V4m0 10c-.7 0-2.008-1.994-2.5-2.5M12 14c.7 0 2.008-1.994 2.5-2.5" color="currentColor"></svg:path>`,
})
export class HugeiconsDownload02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDownload03Icon],svg[hugeicons-download-03-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M18.25 9c2.058.074 3.805 1.617 3.749 3.684c-.013.481-.2 1.076-.572 2.265c-.897 2.861-2.404 5.345-5.78 5.941c-.622.11-1.32.11-2.717.11h-1.86c-1.397 0-2.095 0-2.716-.11c-3.377-.596-4.884-3.08-5.78-5.941c-.373-1.19-.56-1.784-.573-2.265C1.945 10.617 3.692 9.074 5.75 9"></svg:path><svg:path d="M12 14V3m0 11c-.7 0-2.008-1.994-2.5-2.5M12 14c.7 0 2.008-1.994 2.5-2.5"></svg:path></svg:g>`,
})
export class HugeiconsDownload03Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDownload04Icon],svg[hugeicons-download-04-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 14.5v-10m0 10c-.7 0-2.008-1.994-2.5-2.5m2.5 2.5c.7 0 2.008-1.994 2.5-2.5m5.5 4.5c0 2.482-.518 3-3 3H7c-2.482 0-3-.518-3-3" color="currentColor"></svg:path>`,
})
export class HugeiconsDownload04Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDownload05Icon],svg[hugeicons-download-05-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 15V5m0 10c-.7 0-2.008-1.994-2.5-2.5M12 15c.7 0 2.008-1.994 2.5-2.5M5 19h14" color="currentColor"></svg:path>`,
})
export class HugeiconsDownload05Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDownloadCircle01Icon],svg[hugeicons-download-circle-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:circle cx="12" cy="12" r="10"></svg:circle><svg:path d="M12 16V8m0 8c-.7 0-2.008-1.994-2.5-2.5M12 16c.7 0 2.008-1.994 2.5-2.5"></svg:path></svg:g>`,
})
export class HugeiconsDownloadCircle01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDownloadCircle02Icon],svg[hugeicons-download-circle-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10"></svg:path><svg:path d="M12 7v5.5M10 11l1.293 1.293c.333.333.5.5.707.5s.374-.167.707-.5L14 11m-5.01 5h6"></svg:path></svg:g>`,
})
export class HugeiconsDownloadCircle02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDownloadSquare01Icon],svg[hugeicons-download-square-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12 2.5c4.478 0 6.718 0 8.109 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109S16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391S2.5 16.479 2.5 12"></svg:path><svg:path d="M12 16V8m0 8c-.7 0-2.008-1.994-2.5-2.5M12 16c.7 0 2.008-1.994 2.5-2.5"></svg:path></svg:g>`,
})
export class HugeiconsDownloadSquare01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDownloadSquare02Icon],svg[hugeicons-download-square-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12 2.5c4.478 0 6.718 0 8.109 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109S16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391S2.5 16.479 2.5 12"></svg:path><svg:path d="M12.003 7.039v7.05m0 0c.326.004.647-.22.885-.493l1.59-1.783m-2.476 2.276c-.314-.004-.633-.227-.885-.494L9.52 11.814M7.987 17.04h8"></svg:path></svg:g>`,
})
export class HugeiconsDownloadSquare02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDrag01Icon],svg[hugeicons-drag-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20.964 4h-3.992m3.992 0c0 .56-1.491 1.607-1.996 2m1.996-2c0-.56-1.491-1.607-1.996-2M2.999 4h3.992M3 4c0-.56 1.491-1.607 1.996-2M3 4c0 .56 1.491 1.607 1.996 2m4.819 16v-.94a3 3 0 0 0-.598-1.798l-3.823-5.109c-.318-.424-.554-.939-.409-1.449c.36-1.259 1.783-2.378 3.374-.407l1.6 1.708V3.594c.098-1.83 3.173-2.407 3.491 0v5.933c1.483-.19 8.466.851 7.45 5.265l-.144.636c-.207.918-.816 2.552-1.487 3.508c-.699.995-.372 2.6-.452 3.066" color="currentColor"></svg:path>`,
})
export class HugeiconsDrag01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDrag02Icon],svg[hugeicons-drag-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m8.492 16.77l.248-.242c.561-.55.881-1.302.889-2.09l.05-5.144c.006-.697.231-1.434.864-1.723c.957-.438 2.14-.19 2.352 1.855l.329 1.729l5.579-6.7c1.167-1.102 3.24.29 2.336 2.016l-3.281 3.95c1.28.86 6.004 5.75 2.178 8.24c-.551.48-1.858 1.177-2.998 1.54c-1.087.346-1.769 1.53-2.103 1.799M9.484 3.514c0 .836.651 1.514 1.455 1.514c.803 0 1.455-.678 1.455-1.514S11.742 2 10.939 2c-.804 0-1.455.678-1.455 1.514m0 0H8.84l-.77.072M3.99 8.943c.837-.014 1.474.642 1.487 1.453c.013.812-.61 1.51-1.446 1.524a1.52 1.52 0 0 1-1.533-1.483c-.013-.811.655-1.48 1.492-1.494m0 0l.09-1.333m1.694-2.96l-.328.307l-.29.313" color="currentColor"></svg:path>`,
})
export class HugeiconsDrag02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDrag03Icon],svg[hugeicons-drag-03-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7.367 12.171L9.501 14V4.25a1.75 1.75 0 1 1 3.5 0V9.5l2.988.478c1.929.289 2.893.434 3.572.84c1.122.673 1.935 1.682 1.935 3.156c0 1.026-.254 1.715-.87 3.565c-.392 1.174-.587 1.76-.906 2.225a4 4 0 0 1-2.192 1.58c-.542.156-1.16.156-2.398.156h-1.05c-1.644 0-2.467 0-3.2-.302a4 4 0 0 1-.384-.183C9.8 20.637 9.281 20 8.244 18.722l-3.358-4.134a1.74 1.74 0 0 1 2.481-2.417M20 4.5h-4m4 0c0 .56-1.494 1.607-2 2m2-2c0-.56-1.494-1.607-2-2m-15.5 2h4m-4 0c0-.56 1.494-1.607 2-2m-2 2c0 .56 1.494 1.607 2 2" color="currentColor"></svg:path>`,
})
export class HugeiconsDrag03Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDrag04Icon],svg[hugeicons-drag-04-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m12.102 8.419l.21 2.686l6.759-6.608a1.743 1.743 0 0 1 2.426 0a1.65 1.65 0 0 1 0 2.372l-3.64 3.558l1.74 2.349c1.137 1.503 1.705 2.255 1.894 2.99c.312 1.217.175 2.452-.846 3.45c-.711.696-1.364.991-3.074 1.827c-1.085.53-1.628.796-2.17.894a4 4 0 0 1-2.615-.415c-.484-.261-.913-.68-1.77-1.52l-.727-.71c-1.14-1.115-1.711-1.673-2.01-2.374a4 4 0 0 1-.139-.384c-.22-.728-.138-1.512.028-3.081l.538-5.078c.082-.78.71-1.399 1.507-1.485c.959-.104 1.815.589 1.889 1.529M9.069 3.526c0 .844.659 1.528 1.472 1.528s1.472-.684 1.472-1.528s-.66-1.528-1.472-1.528c-.813 0-1.472.684-1.472 1.528m0 0h-.652l-.78.073M3.51 9.006a1.47 1.47 0 0 1 1.505 1.467c.013.82-.617 1.524-1.464 1.538a1.535 1.535 0 0 1-1.55-1.496c-.014-.82.662-1.495 1.509-1.509m0 0L3.6 7.66m1.716-2.986l-.332.31l-.293.315" color="currentColor"></svg:path>`,
})
export class HugeiconsDrag04Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDragDropIcon],svg[hugeicons-drag-drop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 6h.006M6 12h.006M6 18h.006m5.99-12h.007m-.006 6h.006m-.006 6h.006m5.99-12H18m-.006 6H18m-.006 6H18" color="currentColor"></svg:path>`,
})
export class HugeiconsDragDropIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDragDropHorizontalIcon],svg[hugeicons-drag-drop-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18.001 8v.006m-6-.006v.006m-6-.006v.006m12 7.988V16m-6-.006V16m-6-.006V16" color="currentColor"></svg:path>`,
})
export class HugeiconsDragDropHorizontalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDragDropVerticalIcon],svg[hugeicons-drag-drop-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 6h.006M8 12h.006M8 18h.006m7.988-12H16m-.006 6H16m-.006 6H16" color="currentColor"></svg:path>`,
})
export class HugeiconsDragDropVerticalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDragLeft01Icon],svg[hugeicons-drag-left-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M10.682 8.489a3.495 3.495 0 1 1 3.602 0"></svg:path><svg:path d="m10.553 21.935l.025-.63a2.93 2.93 0 0 0-.48-1.745C8.75 17.533 7.72 16.378 6.309 14.4a1.5 1.5 0 0 1-.261-.51c-.341-1.444 1.419-3.325 3.049-1.159l1.591 1.632v-8.04c.211-1.648 2.804-1.975 3.241 0v3.742c1.617-.148 8.154.978 6.92 5.465c-.058.21-.113.425-.17.635c-.208.767-.716 1.886-1.205 2.84c-.544 1.061-.401 2.56-.493 2.995M8.719 4.989h-5.72m-.001 0c.14.435.518.7.841.996L5.027 6.99m-2.029-2c.113-.443.526-.73.841-1.029l1.188-1.018"></svg:path></svg:g>`,
})
export class HugeiconsDragLeft01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDragLeft02Icon],svg[hugeicons-drag-left-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="m8.508 13.653l1.97 1.72V6.5c0-.83.673-1.501 1.504-1.501c.83 0 1.503.671 1.503 1.5l.004 4.763l2.641.427c1.705.26 2.558.389 3.158.753c.992.601 1.71 1.557 1.71 2.823c0 .918-.223 1.534-.769 3.19c-.346 1.05-.519 1.575-.8 1.99a3.54 3.54 0 0 1-1.939 1.414c-.479.14-1.026.14-2.12.14h-.927c-1.454 0-2.182 0-2.83-.27a4 4 0 0 1-.34-.164c-.614-.338-1.073-.91-1.99-2.052l-2.97-3.698a1.57 1.57 0 0 1-.007-1.954a1.525 1.525 0 0 1 2.202-.21"></svg:path><svg:path d="M13.923 9.5A3.998 3.998 0 0 0 11.98 2a3.998 3.998 0 0 0-1.942 7.5m-2.22-3.477H3.001m0 0c0 .47.515.694.837.988l1.18.999M3 6.023c0-.47.523-.724.837-1.022l1.18-1.011"></svg:path></svg:g>`,
})
export class HugeiconsDragLeft02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDragLeft03Icon],svg[hugeicons-drag-left-03-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M13.066 9.722h.937c1.036 0 1.875.846 1.875 1.89m0 0v.944m0-.945a.94.94 0 0 1 .937-.944c1.036 0 1.875.845 1.875 1.889m0 0v.944m0-.944c0-.495.44-.871.925-.79l.32.054c.905.152 1.567.94 1.567 1.863v.447c0 2.052 0 3.079-.31 3.896c-.18.474-.655 1.078-1.035 1.515c-.329.378-.53.857-.53 1.36V22m-6.561-10.389V6.417c0-.783-.63-1.417-1.406-1.417c-.777 0-1.406.634-1.406 1.417v7.52l-1.52-1.535a1.57 1.57 0 0 0-2.352.131a1.61 1.61 0 0 0-.03 1.958l3.374 4.342c.645.831.996 2.112.996 3.167"></svg:path><svg:path d="M13.457 9.5A4 4 0 0 0 15.515 6c0-2.21-1.787-4-3.992-4a3.996 3.996 0 0 0-3.991 4a4 4 0 0 0 2.057 3.5M7.304 6.023H2.498m0 0c0 .47.513.694.834.988l1.177.999M2.498 6.023c0-.47.52-.724.834-1.022L4.509 3.99"></svg:path></svg:g>`,
})
export class HugeiconsDragLeft03Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDragLeft04Icon],svg[hugeicons-drag-left-04-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M21.498 13.053v.173m0 0a1.8 1.8 0 0 0-1.521-1.765l-1.21-.198v.895m2.73 1.068v2.213c0 1.944 0 2.916-.3 3.69a4.5 4.5 0 0 1-2.61 2.574c-.785.297-1.771.297-3.743.297c-1.034 0-1.551 0-2.033-.104a4.56 4.56 0 0 1-1.986-.98c-.373-.317-.684-.725-1.304-1.54L6.787 15.78a1.5 1.5 0 0 1 .029-1.854a1.55 1.55 0 0 1 2.285-.125l1.383 1.455V6.5a1.5 1.5 0 0 1 3.004 0v2.974m5.28 2.684c0-.988-.816-1.79-1.821-1.79h-.91v.895m2.73.895v.895m-5.279-3.58h.728c1.006 0 1.82.802 1.82 1.79m-2.548-1.79v2.685m2.549-.895v.895"></svg:path><svg:path d="M10.484 9.5C9.254 8.818 8.482 7.506 8.482 6c0-2.21 1.793-4 4.005-4a3.998 3.998 0 0 1 1.94 7.5M7.882 6.023h-5.38m0 0c0 .478.515.694.837.988l1.182.999M2.502 6.023c0-.511.523-.724.837-1.022L4.521 3.99"></svg:path></svg:g>`,
})
export class HugeiconsDragLeft04Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDragRight01Icon],svg[hugeicons-drag-right-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M8.668 8.488a3.49 3.49 0 0 1-1.702-2.994A3.5 3.5 0 0 1 10.477 2a3.5 3.5 0 0 1 3.51 3.493a3.49 3.49 0 0 1-1.7 2.994m5.726-5.497l1.747 1.441c.255.272.298.477.172.778a.8.8 0 0 1-.212.28L18.013 7m-3.598-2.024h4.416"></svg:path><svg:path d="m8.56 21.933l.026-.63a2.92 2.92 0 0 0-.481-1.742c-1.352-2.025-2.385-3.178-3.801-5.153a1.5 1.5 0 0 1-.262-.51c-.341-1.442 1.423-3.32 3.057-1.157l1.596 1.63V6.34c.211-1.646 2.81-1.972 3.249 0v3.738c1.621-.147 8.175.977 6.938 5.46l-.17.634c-.209.766-.718 1.884-1.21 2.837c-.545 1.06-.401 2.557-.493 2.991"></svg:path></svg:g>`,
})
export class HugeiconsDragRight01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDragRight02Icon],svg[hugeicons-drag-right-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M7.033 13.653L9 15.373V6.5a1.5 1.5 0 0 1 3.001-.002l.004 4.764l2.636.427c1.702.26 2.553.389 3.152.753c.99.601 1.707 1.557 1.707 2.823c0 .918-.224 1.534-.768 3.19c-.345 1.05-.518 1.575-.8 1.99a3.53 3.53 0 0 1-1.934 1.414c-.478.14-1.023.14-2.115.14h-.926c-1.452 0-2.177 0-2.824-.27a4 4 0 0 1-.339-.164c-.614-.338-1.072-.91-1.987-2.052l-2.963-3.698a1.57 1.57 0 0 1-.008-1.954a1.52 1.52 0 0 1 2.197-.21"></svg:path><svg:path d="M12.438 9.5a4 4 0 1 0-3.876 0m8.955-5.504l1.743 1.44c.255.272.298.477.172.779a.8.8 0 0 1-.212.28l-1.703 1.51m-2.92-2.024h3.736"></svg:path></svg:g>`,
})
export class HugeiconsDragRight02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDragRight03Icon],svg[hugeicons-drag-right-03-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M11.296 9.722h.939c1.038 0 1.879.846 1.879 1.89m0 0v.944m0-.945c0-.522.42-.944.94-.944c1.037 0 1.878.845 1.878 1.889m0 0v.944m0-.944c0-.495.441-.871.927-.79l.321.054c.906.152 1.57.94 1.57 1.863v.447c0 2.052 0 3.079-.311 3.896c-.18.474-.657 1.078-1.037 1.515a2.08 2.08 0 0 0-.531 1.36V22m-6.575-10.389V6.417c0-.783-.631-1.417-1.41-1.417s-1.409.634-1.409 1.417v7.52l-1.522-1.535a1.576 1.576 0 0 0-2.358.131a1.61 1.61 0 0 0-.03 1.958l3.381 4.342c.647.831.999 2.112.999 3.167"></svg:path><svg:path d="M11.688 9.5a4 4 0 1 0-3.876 0m8.906-5.504l1.744 1.44c.255.272.297.477.172.779a.8.8 0 0 1-.212.28l-1.704 1.51m-2.92-2.024h3.737"></svg:path></svg:g>`,
})
export class HugeiconsDragRight03Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDragRight04Icon],svg[hugeicons-drag-right-04-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M18.998 13.053v.173m0 0a1.8 1.8 0 0 0-1.52-1.765l-1.208-.198v.895m2.728 1.068v2.213c0 1.944 0 2.916-.301 3.69a4.5 4.5 0 0 1-2.607 2.574c-.784.297-1.769.297-3.738.297c-1.033 0-1.55 0-2.03-.104a4.55 4.55 0 0 1-1.984-.98c-.373-.317-.683-.725-1.303-1.54l-2.73-3.596a1.5 1.5 0 0 1 .029-1.854a1.547 1.547 0 0 1 2.281-.125l1.383 1.455V6.5a1.5 1.5 0 1 1 3 0v2.974m5.272 2.684c0-.988-.814-1.79-1.818-1.79h-.909v.895m2.727.895v.895m-5.272-3.58h.727c1.004 0 1.818.802 1.818 1.79m-2.545-1.79v2.685m2.545-.895v.895"></svg:path><svg:path d="M11.436 9.5a4 4 0 1 0-3.876 0m10.458-5.504l1.744 1.44c.255.272.297.477.172.779a.8.8 0 0 1-.212.28l-1.704 1.51M13.851 5.98h4.984"></svg:path></svg:g>`,
})
export class HugeiconsDragRight04Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDrawingCompassIcon],svg[hugeicons-drawing-compass-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M10 10L5 22m9-12l5 12M12 4V2"></svg:path><svg:circle cx="12" cy="7" r="3"></svg:circle><svg:path d="M3 13c1.99 3.024 5.28 5 9 5s7.01-1.976 9-5m-9 4v2"></svg:path></svg:g>`,
})
export class HugeiconsDrawingCompassIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDrawingModeIcon],svg[hugeicons-drawing-mode-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M16 9a7 7 0 1 0-7 7"></svg:path><svg:path d="M16 9h-1c-2.828 0-4.243 0-5.121.879C9 10.757 9 12.172 9 15v1c0 2.828 0 4.243.879 5.121C10.757 22 12.172 22 15 22h1c2.828 0 4.243 0 5.121-.879C22 20.243 22 18.828 22 16v-1c0-2.828 0-4.243-.879-5.121C20.243 9 18.828 9 16 9"></svg:path></svg:g>`,
})
export class HugeiconsDrawingModeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDress01Icon],svg[hugeicons-dress-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m7.61 2.148l.19-.04c.488-.1.732-.15.89-.066c.157.083.29.395.555 1.02c.475 1.119 1.58 1.905 2.755 1.905s2.28-.786 2.755-1.905c.265-.625.398-.937.555-1.02s.402-.033.89.067l.19.039c1.26.23 1.279.241 2.143 1.245c.73.848 1.775 1.714 2.297 2.734c.384.752.057 1.396-.374 1.993c-.539.745-1.238 1.462-2.184.881c-.604-.37-1.086-1.152-1.555-1.693c0 0 .283 3.617-.717 4.623c.908.655 2.342 1.927 3.48 4.533c.406.93.952 1.988.414 2.98c-1.83 3.371-13.919 3.445-15.788 0c-.538-.992.008-2.05.413-2.98C5.658 13.858 7.092 12.586 8 11.931c-1-1.006-.717-4.623-.717-4.623c-.469.541-.95 1.323-1.555 1.693c-.946.58-1.645-.136-2.184-.881c-.43-.597-.758-1.241-.374-1.993c.522-1.02 1.568-1.886 2.297-2.734c.864-1.004.884-1.015 2.143-1.245M8 12h8" color="currentColor"></svg:path>`,
})
export class HugeiconsDress01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDress02Icon],svg[hugeicons-dress-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M9.5 9c-1.455-.5-2.23-1.011-2-3c.13-1.12.5-2-.5-3l2.5-1c.167 1.167 1 2.5 2.5 3c1.5-.5 2.333-1.833 2.5-3L17 3c-1 1-.63 1.88-.5 3c.23 1.989-.545 2.5-2 3m-6 3h7c-.5-1-.5-2-.5-3H9c0 1 0 2-.5 3"></svg:path><svg:path d="M16.312 21.448c1.287.736 2.977.72 4.283-.016c.36-.207.547-.684.277-.971c-1.927-2.053-3.375-4.56-4.38-7.106c-.265-.673-.397-1.008-.652-1.182S15.243 12 14.56 12H9.442c-.685 0-1.027 0-1.282.173c-.255.174-.387.51-.652 1.181c-1.005 2.548-2.453 5.054-4.38 7.107c-.27.287-.082.764.277.97c1.306.736 2.996.753 4.283.017a2.69 2.69 0 0 1 2.611 0c.524.295 1.163.552 1.701.552s1.177-.257 1.7-.552a2.69 2.69 0 0 1 2.612 0"></svg:path></svg:g>`,
})
export class HugeiconsDress02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDress03Icon],svg[hugeicons-dress-03-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="m15 4l-3 2l-3-2c-.586.51-1.93 1.293-1.997 2.146c-.029.37.126.571.435.975C8.112 8.002 9 8.521 9 10h6c0-1.48.888-1.998 1.562-2.879c.31-.404.464-.606.434-.975C16.93 5.293 15.587 4.509 15 4M9 4V2m6 2V2m-5.5 8h5m3.5 9c2 0 3-2.173 3-2.173c-2.825-1.836-4.5-3.993-5.413-5.622c-.347-.62-.521-.93-.755-1.068C14.598 10 14.285 10 13.659 10H10.34c-.626 0-.939 0-1.173.137s-.408.447-.755 1.068C7.5 12.834 5.825 14.99 3 16.827C3 16.827 4 19 6 19"></svg:path><svg:path d="M13.706 14c.34.796 1.815 2.671 3.435 4.31c.597.605.896.907.855 1.42c-.04.512-.29.683-.79 1.025C16.07 21.53 14.336 22 12 22s-4.07-.469-5.207-1.245c-.5-.342-.75-.513-.79-1.025c-.04-.513.259-.815.856-1.42c1.62-1.639 3.096-3.514 3.435-4.31"></svg:path></svg:g>`,
})
export class HugeiconsDress03Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDress04Icon],svg[hugeicons-dress-04-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="m15 4l-3 2l-3-2c-.586.51-1.93 1.293-1.997 2.146c-.029.37.126.571.435.975c.674.881 1.442 1.4 1.442 2.879h6.24c0-1.48.768-1.998 1.442-2.879c.31-.404.464-.606.434-.975C16.93 5.293 15.587 4.509 15 4m4.863 13.808c-.704-2.69-2.497-5.158-3.682-6.571c-.85-1.014-1.477-1.237-2.81-1.237H10.63c-1.334 0-1.961.223-2.811 1.237c-1.185 1.413-2.978 3.88-3.682 6.571c-.43 1.642.154 2.541 1.75 3.122C7.32 21.452 9.436 22 12 22s4.679-.548 6.113-1.07c1.596-.58 2.18-1.48 1.75-3.122M9 4V2m6 2V2"></svg:path><svg:path d="M14 15s2 3 2 6.5M10 15s-2 3-2 6.5"></svg:path></svg:g>`,
})
export class HugeiconsDress04Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDress05Icon],svg[hugeicons-dress-05-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M6.269 7.966C5.55 8.658 5.192 9.004 4.755 9c-1.023-.009-2.829-1.996-2.753-3.014c.031-.412.397-.721 1.13-1.339l2.197-1.853c.65-.549 1.544-.57 2.356-.727c.324-.062.486-.094.63-.038c.464.18.847 1.024 1.124 1.405C10.604 5.038 11.186 5.84 12 5.84s1.397-.802 2.562-2.406c.276-.381.66-1.226 1.123-1.405c.144-.056.306-.024.63.038c.844.163 1.677.154 2.356.727l2.198 1.853c.732.618 1.099.927 1.13 1.339c.075 1.018-1.73 3.005-2.753 3.014c-.438.004-.796-.342-1.514-1.034"></svg:path><svg:path d="M6 7c1.5 2 .956 4.182.598 6.218c-.378 2.15-1.015 3.458-1.378 5.223c-.25 1.212-.375 1.818.114 2.33c1.378 1.447 11.6 1.82 13.332 0c.489-.512.364-1.118.114-2.33c-.363-1.765-1-3.073-1.378-5.223C17.044 11.18 16.5 9 18 7"></svg:path></svg:g>`,
})
export class HugeiconsDress05Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDress06Icon],svg[hugeicons-dress-06-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M5.177 9.032c3.726 3.637-2.052 8.337.48 11.531c1.402 1.768 11.073 2.059 12.705 0c2.53-3.192-3.233-7.887.48-11.53"></svg:path><svg:path d="M6.355 13c-2.265-.209-4.112-1.672-4.345-3.761a1.8 1.8 0 0 1 .128-.875c.715-1.793 2.714-4.833 5.778-6.316a.49.49 0 0 1 .6.146c.76.973 2.069 2.49 3.484 2.49s2.724-1.517 3.484-2.49a.49.49 0 0 1 .6-.146c3.064 1.483 5.063 4.523 5.778 6.316c.11.279.161.577.128.875c-.233 2.09-2.06 3.55-4.326 3.758"></svg:path></svg:g>`,
})
export class HugeiconsDress06Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDress07Icon],svg[hugeicons-dress-07-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M10.134 12.22c.67-.365 1.256-.217 1.607.017c.145.097.217.145.259.145s.114-.048.259-.145c.351-.234.936-.382 1.607-.016c.88.48 1.079 2.062-.95 3.397c-.387.255-.58.382-.916.382c-.335 0-.529-.127-.915-.382c-2.03-1.335-1.83-2.917-.95-3.397M6.269 7.966C5.55 8.658 5.192 9.004 4.755 9c-1.023-.009-2.829-1.996-2.753-3.014c.031-.412.397-.721 1.13-1.339l2.197-1.853c.65-.549 1.544-.57 2.356-.727c.324-.062.486-.094.63-.038c.464.18.847 1.024 1.124 1.405C10.604 5.038 11.186 5.84 12 5.84s1.397-.802 2.562-2.406c.276-.381.66-1.226 1.123-1.405c.144-.056.306-.024.63.038c.844.163 1.677.154 2.356.727l2.198 1.853c.732.618 1.099.927 1.13 1.339c.075 1.018-1.73 3.005-2.753 3.014c-.438.004-.796-.342-1.514-1.034"></svg:path><svg:path d="M6 7c1.5 2 .956 4.182.598 6.218c-.378 2.15-1.015 3.458-1.378 5.223c-.25 1.212-.375 1.818.114 2.33c1.378 1.447 11.6 1.82 13.332 0c.489-.512.364-1.118.114-2.33c-.363-1.765-1-3.073-1.378-5.223C17.044 11.18 16.5 9 18 7"></svg:path></svg:g>`,
})
export class HugeiconsDress07Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDressingTable01Icon],svg[hugeicons-dressing-table-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m10 6l1-1m0 3l2-2m-7 8V8a6 6 0 1 1 12 0v6M5 14v8m14-8v8M4 14h16M5 19h14m-7.5-2.5h1" color="currentColor"></svg:path>`,
})
export class HugeiconsDressingTable01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDressingTable02Icon],svg[hugeicons-dressing-table-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 16c.5.333 1.3 1.4.5 3s0 2.667.5 3m-1-6H5m14 0v-3M5 16c-.5.333-1.3 1.4-.5 3s0 2.667-.5 3m1-6v-3m15 0h-1M4 13h1m14 0H5m2-5.5c0 3.038 2.239 5.5 5 5.5s5-2.462 5-5.5S14.761 2 12 2S7 4.462 7 7.5m4-.5l1.5-1.5m-1 4L13 8" color="currentColor"></svg:path>`,
})
export class HugeiconsDressingTable02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDressingTable03Icon],svg[hugeicons-dressing-table-03-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2 15c0-.943 0-1.414.293-1.707S3.057 13 4 13h16c.943 0 1.414 0 1.707.293S22 14.057 22 15v2c0 .943 0 1.414-.293 1.707S20.943 19 20 19H4c-.943 0-1.414 0-1.707-.293S2 17.943 2 17zm9 1h2m6.5 3c-.8 1.6 0 2.667.5 3M4.5 19c.8 1.6 0 2.667-.5 3m0-9V2m16 11V2M4 3.5h4.086c.196 0 .294 0 .378-.031s.17-.105.34-.251c1.887-1.624 4.505-1.624 6.392 0c.17.146.255.22.34.25c.084.032.182.032.378.032H20M9 7l1-1m0 3.5l2-2" color="currentColor"></svg:path>`,
})
export class HugeiconsDressingTable03Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDribbbleIcon],svg[hugeicons-dribbble-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:circle cx="12" cy="12" r="10"></svg:circle><svg:path d="M22 13.264A15.5 15.5 0 0 0 19.147 13C13.795 13 9.034 15.742 6 20M19 5c-3.13 3.667-7.832 6-13.09 6c-1.346 0-2.655-.153-3.91-.441"></svg:path><svg:path d="M14.618 22A18.6 18.6 0 0 0 15 18.24C15 11.926 11.834 6.347 7 3"></svg:path></svg:g>`,
})
export class HugeiconsDribbbleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDrinkIcon],svg[hugeicons-drink-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="m8.205 15.358l-3.688-4.277C2.625 8.887 1.68 7.79 2.098 6.895S3.98 6 6.901 6h4.198c2.922 0 4.383 0 4.803.895c.42.894-.527 1.992-2.42 4.186l-3.687 4.277C9.425 15.786 9.24 16 9 16s-.426-.214-.795-.642M8.5 6l-.401-2.406a1 1 0 0 0-.67-.784L5 2m4 14v6m-1.5 0h3"></svg:path><svg:path d="M15.86 8.833A3.52 3.52 0 0 0 18.482 10A3.51 3.51 0 0 0 22 6.5C22 4.567 20.425 3 18.482 3A3.51 3.51 0 0 0 15 6"></svg:path></svg:g>`,
})
export class HugeiconsDrinkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDriveIcon],svg[hugeicons-drive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M18 18H6a2 2 0 1 0 0 4h12a2 2 0 1 0 0-4m-6-9.5a1 1 0 1 0 0-2m0 2a1 1 0 1 1 0-2m0 2v-2m-2 6h4m-5 1V13a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v.5zm7.5 6.5v.01m-3-.01v.01"></svg:path><svg:path d="M20 20V8c0-2.828 0-4.243-.879-5.121C18.243 2 16.828 2 14 2h-4c-2.828 0-4.243 0-5.121.879C4 3.757 4 5.172 4 8v12"></svg:path></svg:g>`,
})
export class HugeiconsDriveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDroneIcon],svg[hugeicons-drone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 7C6.477 7 2 7.895 2 9c0 .806 2.382 1.5 5.815 1.817c.618.057 1.042.655 1.108 1.272C9.094 13.694 10.384 15 12 15s2.906-1.306 3.077-2.91c.066-.618.49-1.216 1.108-1.273C19.618 10.5 22 9.806 22 9c0-1.105-4.477-2-10-2m0 5h.009M4 3h2m2 0H6m0 0v4m10-4h2m2 0h-2m0 0v4M5 21v-1.5a5 5 0 0 1 5-5m9 6.5v-1.5a5 5 0 0 0-5-5" color="currentColor"></svg:path>`,
})
export class HugeiconsDroneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDroolingIcon],svg[hugeicons-drooling-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M10 8.5H8.707c-.453 0-.887.18-1.207.5m6.5-.5h1.293c.453 0 .887.18 1.207.5"></svg:path><svg:path d="M16 21.168A10 10 0 0 1 12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10a9.96 9.96 0 0 1-2.307 6.389"></svg:path><svg:path d="M8 15a5 5 0 0 0 4 2a5 5 0 0 0 4-2"></svg:path><svg:path d="M15 16c1.944.478 5.574 1.48 4.923 4.538c-.336 1.512-2.094 1.792-3.048 1.112c-2.298-1.638 0-3.25-1.875-5.65"></svg:path></svg:g>`,
})
export class HugeiconsDroolingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDropboxIcon],svg[hugeicons-dropbox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="m12 5.889l6.111 3.333L12 12.555L5.889 9.222zm-6.667 9.445v1.999c0 1.147.205 1.505 1.229 2.027l4.444 2.267c.976.498 1.012.498 1.988 0l4.444-2.267c1.024-.522 1.229-.88 1.229-2.027v-2"></svg:path><svg:path d="M14.596 3.29L12 5.636L9.404 3.289C8.488 2.462 8.03 2.048 7.47 2.004s-1.073.293-2.1.968L3.514 4.194c-.996.655-1.494.983-1.512 1.47s.454.853 1.399 1.585l2.416 1.873L3.4 10.995c-.945.732-1.418 1.098-1.4 1.585s.517.815 1.513 1.47l2.853 1.876c.548.36.821.54 1.12.516c.298-.023.542-.244 1.03-.685L12 12.607l2.596 2.348c.916.827 1.373 1.241 1.933 1.285s1.073-.293 2.1-.968l1.857-1.222c.997-.655 1.495-.983 1.514-1.47s-.455-.853-1.4-1.585l-2.416-1.873L20.6 7.249c.945-.732 1.418-1.098 1.4-1.585s-.517-.815-1.514-1.47l-1.858-1.222c-1.026-.675-1.54-1.012-2.099-.968s-1.017.458-1.933 1.285"></svg:path></svg:g>`,
})
export class HugeiconsDropboxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDropletIcon],svg[hugeicons-droplet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M3.5 13.678c0-4.184 3.58-8.319 6.094-10.706a3.463 3.463 0 0 1 4.812 0C16.919 5.36 20.5 9.494 20.5 13.678C20.5 17.78 17.281 22 12 22s-8.5-4.22-8.5-8.322"></svg:path><svg:path d="M16 14a4 4 0 0 1-4 4"></svg:path></svg:g>`,
})
export class HugeiconsDropletIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDropperIcon],svg[hugeicons-dropper-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m11.287 8l-6.605 6.605a3.32 3.32 0 0 0-.975 2.271c-.029 1.11-.043 1.665-.127 1.861s-.276.389-.66.773l-.595.594a1.11 1.11 0 0 0 1.571 1.57l.594-.593c.385-.385.577-.577.773-.66c.196-.085.751-.1 1.861-.128a3.32 3.32 0 0 0 2.27-.975l1.929-1.928m3.106-3.106L16 12.713m-1.57 1.57l-1.572-1.57m1.571 1.57l-3.106 3.107m0 0l-1.571-1.57m11.316-8.388L19.5 9a2.12 2.12 0 0 0 0 3L12 4.5a2.12 2.12 0 0 0 3 0l1.568-1.568a3.182 3.182 0 1 1 4.5 4.5" color="currentColor"></svg:path>`,
})
export class HugeiconsDropperIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDs3ToolIcon],svg[hugeicons-ds-3-tool-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M5.006 18.006c.156-2.495.615-4.321 1.004-5.382c.197-.535.62-.934 1.161-1.068c3.004-.741 6.654-.741 9.658 0c.541.134.964.533 1.16 1.068c.39 1.06.85 2.887 1.005 5.382c.093 1.48-.95 2.309-2.134 2.917a.696.696 0 0 1-.946-.324l-.822-1.69a1 1 0 0 0-.9-.56H9.808a1 1 0 0 0-.901.56l-.822 1.69a.696.696 0 0 1-.946.324c-1.184-.608-2.227-1.437-2.134-2.917"></svg:path><svg:path d="M22 15v-4c0-3.771 0-5.657-1.172-6.828S17.771 3 14 3h-4C6.229 3 4.343 3 3.172 4.172S2 7.229 2 11v4m8.5-9h3m-4.492 9h-.009m6.009 0h-.009"></svg:path></svg:g>`,
})
export class HugeiconsDs3ToolIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDuaIcon],svg[hugeicons-dua-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="m19 13l-.658-.658a2 2 0 0 0-2.752-.073l-2.597 2.337a3 3 0 0 0-.993 2.23V21h2.687a3 3 0 0 0 2.204-.965l4.313-4.673A3 3 0 0 0 22 13.327V6h-1a2 2 0 0 0-2 2zm0 0l-3 3"></svg:path><svg:path d="m5 13l.658-.658a2 2 0 0 1 2.752-.073l2.597 2.337a3 3 0 0 1 .993 2.23V21H9.313a3 3 0 0 1-2.204-.965l-4.313-4.673A3 3 0 0 1 2 13.327V6h1a2 2 0 0 1 2 2zm0 0l3 3m7-8.566A3.23 3.23 0 1 1 10.566 3M14 4h.009"></svg:path></svg:g>`,
})
export class HugeiconsDuaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDumbbell01Icon],svg[hugeicons-dumbbell-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7.735 13.732s.905-1.222 1.5-1.5c1.795-.84 2.16-1.206 3-3.001c.278-.595 1.5-1.5 1.5-1.5m-3.5 8.502s1.222-.906 1.5-1.5c.84-1.796 1.205-2.161 3-3.001c.594-.279 1.5-1.501 1.5-1.501m-1.804-7.339a1.3 1.3 0 0 1 1.839-.002l4.811 4.798a1.3 1.3 0 0 1 .003 1.839l-1.528 1.534a1.3 1.3 0 0 1-1.839.003l-4.812-4.799a1.3 1.3 0 0 1-.002-1.839zM4.414 12.903a1.3 1.3 0 0 1 1.838-.003l4.812 4.798a1.3 1.3 0 0 1 .003 1.839L9.538 21.07a1.3 1.3 0 0 1-1.838.003l-4.812-4.798a1.3 1.3 0 0 1-.003-1.84zm13.524-9.45c1.882-2.468 5.202.387 2.605 2.576M3.378 17.977c-2.38 1.992.62 5.182 2.69 2.489" color="currentColor"></svg:path>`,
})
export class HugeiconsDumbbell01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDumbbell02Icon],svg[hugeicons-dumbbell-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M16 8a2.62 2.62 0 0 1-1.455 1.607q-3.421 1.517-4.937 4.937A2.62 2.62 0 0 1 8 16m-4.8 4.8L2 22M20.8 3.2L22 2m-4.212.42l-1.512 1.454l3.84 3.876l1.478-1.434c.444-.523.58-.916.027-1.641l-1.105-1.163l-1.121-1.106c-.717-.642-1.281-.297-1.607.015"></svg:path><svg:path d="M14.012 3.756c1.11-1.173 1.87-.338 2.261.127l3.808 3.823c.474.38 1.34 1.109.195 2.244c-.185.183-.366.375-.567.54c-.742.61-1.454.105-1.831-.36l-3.876-3.876c-.408-.366-1.113-1.03-.518-1.918c.16-.205.349-.39.527-.58M4.587 21.62l-1.14-1.129l-1.085-1.142c-.643-.643-.272-1.286.046-1.605L3.89 16.26l3.856 3.873l-1.518 1.491c-.53.433-.895.566-1.608 0m1.603-7.7c-.39-.465-1.15-1.301-2.262-.127c-.178.189-.366.374-.527.58c-.595.887.11 1.551.518 1.918l3.876 3.875c.377.465 1.089.971 1.83.36c.202-.165.383-.356.568-.54c1.146-1.134.279-1.863-.195-2.243z"></svg:path></svg:g>`,
})
export class HugeiconsDumbbell02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDumbbell03Icon],svg[hugeicons-dumbbell-03-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 6.5h1.528c.31 0 .616-.075.899-.202q3.573-1.596 7.146 0c.284.127.589.202.9.202H18m-12 11h1.528c.31 0 .616-.076.899-.202q3.573-1.596 7.146 0c.284.127.589.202.9.202H18M6 3v7m12-7v7M6 14v7m12-7v7M3.5 6.5H2m18.5 0H22m-18.5 11H2m18.5 0H22M3.5 4.5v4m17-4v4m-17 7v4m17-4v4" color="currentColor"></svg:path>`,
})
export class HugeiconsDumbbell03Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsEarIcon],svg[hugeicons-ear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M6.077 18c0 2.21 1.149 4 3.23 4s3.77-1.5 4.308-4c.259-1.199.788-1.923 1.616-2.5C17.385 14 19 11.692 19 9A7 7 0 1 0 5 9"></svg:path><svg:path d="M9 15c1.385 0 2.508-1.007 2.508-2.25S10.385 10.5 9 10.5C9 8.483 9.464 6 12.01 6C13.8 6 14.85 7.374 15 9.15"></svg:path></svg:g>`,
})
export class HugeiconsEarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsEarRings01Icon],svg[hugeicons-ear-rings-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M11.5 10.5a2.5 2.5 0 0 0-.898-1.003c-1.321-.822-2.474-.49-3.167.037c-.284.216-.426.325-.51.325c-.083 0-.225-.109-.509-.325c-.692-.528-1.845-.86-3.166-.037c-1.734 1.08-2.126 4.64 1.873 7.645c.761.572 1.142.858 1.803.858c.66 0 1.041-.286 1.803-.858q.352-.265.66-.535m3.88-4.11c1.34-.822 2.51-.49 3.214.037c.288.216.432.325.517.325s.229-.108.517-.325c.703-.528 1.874-.86 3.214-.037c1.76 1.08 2.158 4.64-1.9 7.645c-.774.572-1.16.858-1.831.858c-.67 0-1.057-.286-1.83-.858c-4.06-3.005-3.661-6.565-1.901-7.645"></svg:path><svg:path d="M15.5 7.5a1.5 1.5 0 0 1 3 0c0 1.148-1.5 1.159-1.5 2v3m-11.5-8a1.5 1.5 0 1 1 3 0c0 1.148-1.5 1.159-1.5 2v3"></svg:path></svg:g>`,
})
export class HugeiconsEarRings01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsEarRings02Icon],svg[hugeicons-ear-rings-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M4 14.006c3.6 0 2.4 4 6 4m4-4c3.6 0 2.4 4 6 4"></svg:path><svg:path d="M7 21c1.657 0 3-2.461 3-5.498c0-3.036-1.343-5.498-3-5.498s-3 2.462-3 5.498S5.343 21 7 21m10 0c1.657 0 3-2.461 3-5.498c0-3.036-1.343-5.498-3-5.498s-3 2.462-3 5.498S15.343 21 17 21M9.955 7.235c-.35-.202-.894-.522-1.022-2.447C8.82 3.081 7.269 2.91 6.676 3.03c-.557.114-1.6.702-1.668 1.925c-.046.82.462 1.606 1.665 2.084c.202.08.345.271.345.49v2.233m12.919-2.527c-.35-.202-.895-.522-1.022-2.447c-.113-1.707-1.664-1.878-2.257-1.758c-.557.114-1.6.702-1.668 1.925c-.046.82.462 1.606 1.665 2.084c.202.08.345.271.345.49v2.233"></svg:path></svg:g>`,
})
export class HugeiconsEarRings02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsEarRings03Icon],svg[hugeicons-ear-rings-03-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:circle cx="17" cy="7" r="4"></svg:circle><svg:circle cx="7" cy="17" r="4"></svg:circle><svg:path d="M13 7H3m18 10H11M5 4.5c.275-1.572 3 .924 3 2.5s-2.725 4.072-3 2.5m14 5c-.275-1.572-3 .924-3 2.5s2.725 4.072 3 2.5"></svg:path></svg:g>`,
})
export class HugeiconsEarRings03Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsEarthIcon],svg[hugeicons-earth-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 22C6.477 22 2 17.523 2 12a9.97 9.97 0 0 1 2.99-7.132M12 22c-.963-.714-.81-1.544-.326-2.375c.743-1.278.743-1.278.743-2.98c0-1.704 1.012-2.502 4.583-1.788c1.605.321 2.774-1.896 4.857-1.164M12 22c4.946 0 9.053-3.59 9.857-8.307m0 0Q22 12.867 22 12c0-4.881-3.498-8.946-8.123-9.824m0 0c.51.94.305 2.06-.774 2.487c-1.76.697-.5 1.98-2 2.773c-1 .528-2.499.396-3.998-1.189c-.79-.834-1.265-1.29-2.115-1.379m8.887-2.692A10 10 0 0 0 12 2a9.97 9.97 0 0 0-7.01 2.868" color="currentColor"></svg:path>`,
})
export class HugeiconsEarthIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsEaseCurveControlPointsIcon],svg[hugeicons-ease-curve-control-points-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 4c-5 0-7.02 4.042-9 8s-4 8-9 8m7 0h2m3 0h2m0 0a2 2 0 1 0 4 0a2 2 0 0 0-4 0M12 4h2M7 4h2M7 4a2 2 0 1 1-4 0a2 2 0 0 1 4 0" color="currentColor"></svg:path>`,
})
export class HugeiconsEaseCurveControlPointsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsEaseInIcon],svg[hugeicons-ease-in-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 4S14 20 3 20" color="currentColor"></svg:path>`,
})
export class HugeiconsEaseInIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsEaseInControlPointIcon],svg[hugeicons-ease-in-control-point-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20 3S13 19 2 19m9 0h2m3 0h2m0 0a2 2 0 1 0 4 0a2 2 0 0 0-4 0" color="currentColor"></svg:path>`,
})
export class HugeiconsEaseInControlPointIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsEaseInOutIcon],svg[hugeicons-ease-in-out-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 4c-9.946 0-8.053 16-18 16" color="currentColor"></svg:path>`,
})
export class HugeiconsEaseInOutIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsEaseOutIcon],svg[hugeicons-ease-out-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 20S10 4 21 4" color="currentColor"></svg:path>`,
})
export class HugeiconsEaseOutIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsEaseOutControlPointIcon],svg[hugeicons-ease-out-control-point-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 21S11 5 22 5M11 5h2M6 5h2M6 5a2 2 0 1 1-4 0a2 2 0 0 1 4 0" color="currentColor"></svg:path>`,
})
export class HugeiconsEaseOutControlPointIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsEcoEnergyIcon],svg[hugeicons-eco-energy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2 10c.78-3.816 3.67-6.87 7.406-7.91c.314-.087.47-.131.555-.038c.085.094.022.248-.102.558L9 4.5M14 2c3.816.78 6.87 3.67 7.91 7.406c.087.314.131.47.038.555c-.094.085-.248.022-.558-.102L19.5 9m2.5 5c-.78 3.816-3.67 6.87-7.406 7.91c-.314.087-.47.131-.555.038c-.085-.094-.022-.248.102-.558L15 19.5M10 22c-3.816-.78-6.87-3.67-7.91-7.406c-.087-.314-.131-.47-.038-.555c.094-.085.248-.022.558.102L4.5 15m7.5-3.901c-1.313.9-2.901 2.68-3.5 5.401m.875-2.396c-2.072-4.794 2.108-6.411 5.289-6.591c.384-.022.576-.033.713.107c.138.14.13.34.114.738c-.131 3.316-1.453 7.878-6.116 5.746" color="currentColor"></svg:path>`,
})
export class HugeiconsEcoEnergyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsEcoLabIcon],svg[hugeicons-eco-lab-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.012 5.75h1.25v2.5h-2.25c-.41 0-.75.34-.75.75s.34.75.75.75h.238v3.55l-3.74 6.55c-.17.29-.26.62-.26.96c0 1.07.87 1.94 1.94 1.94h9.62c1.07 0 1.94-.87 1.94-1.94c0-.34-.08-.67-.25-.96l-3.75-6.55V9.75h.262c.41 0 .75-.34.75-.75s-.34-.75-.75-.75h-2.25v-1.5h1.25c1.52 0 2.75-1.23 2.75-2.75V3c0-.41-.34-.75-.75-.75h-2c-.579 0-1.116.178-1.558.483a2.75 2.75 0 0 0-2.442-1.483h-2c-.41 0-.75.34-.75.75v1c0 1.52 1.23 2.75 2.75 2.75m2.75-.5V5c0-.69.56-1.25 1.25-1.25h1.25V4c0 .69-.56 1.25-1.25 1.25zM10.76 13.5V9.75h2.51v3.75c0 .13.04.26.1.37l3.84 6.73c.04.07.06.14.06.22c0 .24-.2.44-.44.44H7.2c-.24 0-.44-.2-.44-.44c0-.08.02-.15.06-.22l3.84-6.73c.07-.11.1-.24.1-.37M8.762 2.75h1.25c.69 0 1.25.56 1.25 1.25v.25h-1.25c-.69 0-1.25-.56-1.25-1.25z" color="currentColor"></svg:path>`,
})
export class HugeiconsEcoLabIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsEcoLab01Icon],svg[hugeicons-eco-lab-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 5.75h1.25v2.5H8c-.41 0-.75.34-.75.75s.34.75.75.75h.25V19c0 2.07 1.68 3.75 3.75 3.75s3.75-1.68 3.75-3.75V9.75H16c.41 0 .75-.34.75-.75s-.34-.75-.75-.75h-3.25v-1.5H14c1.52 0 2.75-1.23 2.75-2.75V3c0-.41-.34-.75-.75-.75h-2c-.579 0-1.115.178-1.558.483A2.75 2.75 0 0 0 10 1.25H8c-.41 0-.75.34-.75.75v1c0 1.52 1.23 2.75 2.75 2.75m2.75-.5V5c0-.69.56-1.25 1.25-1.25h1.25V4c0 .69-.56 1.25-1.25 1.25zM9.75 19V9.75h4.5V19c0 1.24-1.01 2.25-2.25 2.25S9.75 20.24 9.75 19m-1-16.25H10c.69 0 1.25.56 1.25 1.25v.25H10c-.69 0-1.25-.56-1.25-1.25z" color="currentColor"></svg:path>`,
})
export class HugeiconsEcoLab01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsEcoLab02Icon],svg[hugeicons-eco-lab-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 5.75h1.25v2.5H9.5c-.41 0-.75.34-.75.75s.34.75.75.75h.25v1.96A5.72 5.72 0 0 0 6.25 17c0 3.17 2.58 5.75 5.75 5.75s5.75-2.58 5.75-5.75c0-2.33-1.39-4.4-3.5-5.29V9.75h.25c.41 0 .75-.34.75-.75s-.34-.75-.75-.75h-1.75v-1.5H14c1.52 0 2.75-1.23 2.75-2.75V3c0-.41-.34-.75-.75-.75h-2c-.579 0-1.115.178-1.558.483A2.75 2.75 0 0 0 10 1.25H8c-.41 0-.75.34-.75.75v1c0 1.52 1.23 2.75 2.75 2.75m2.75-.5V5c0-.69.56-1.25 1.25-1.25h1.25V4c0 .69-.56 1.25-1.25 1.25zm-1.5 6.98V9.75h1.5v2.48c0 .33.22.62.53.72c1.77.56 2.97 2.19 2.97 4.06A4.26 4.26 0 0 1 12 21.26a4.26 4.26 0 0 1-4.25-4.25c0-1.87 1.19-3.5 2.97-4.06c.32-.1.53-.39.53-.72m-2.5-9.48H10c.69 0 1.25.56 1.25 1.25v.25H10c-.69 0-1.25-.56-1.25-1.25z" color="currentColor"></svg:path>`,
})
export class HugeiconsEcoLab02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsEcoPowerIcon],svg[hugeicons-eco-power-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M9 20c-3.771-.868-6-4.323-6-7.49c0-3.766 3.37-7.487 5.736-9.635a3.367 3.367 0 0 1 4.528 0c1.507 1.368 3.31 3.375 4.487 5.625"></svg:path><svg:path d="M17 15.5c-1.5 1-4 3-6 6.5m2-3c-2.664-5.86 2.835-7.764 6.925-7.984c.494-.027.74-.04.918.131c.177.17.166.415.146.902C20.82 16.102 18.995 21.607 13 19"></svg:path></svg:g>`,
})
export class HugeiconsEcoPowerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsEdgeStyleIcon],svg[hugeicons-edge-style-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 6h18M3 10h7.5m3 0H21M3 14h4m3 0h4m3 0h4M3 18h2.118m3.176 0h2.118m3.176 0h2.118m3.176 0H21" color="currentColor"></svg:path>`,
})
export class HugeiconsEdgeStyleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsEdit01Icon],svg[hugeicons-edit-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16.946 3.173c.587-.587.88-.88 1.206-1.021c.469-.203 1-.203 1.469 0c.325.14.619.434 1.206 1.021s.88.881 1.021 1.206c.203.469.203 1 0 1.469c-.14.325-.434.619-1.021 1.206l-5.022 5.022c-1.237 1.237-1.855 1.855-2.63 2.222s-1.646.452-3.387.624L9 15l.078-.788c.172-1.741.257-2.612.624-3.387s.985-1.393 2.222-2.63zM6 15H3.75a1.75 1.75 0 1 0 0 3.5h9.5a1.75 1.75 0 1 1 0 3.5H11" color="currentColor"></svg:path>`,
})
export class HugeiconsEdit01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsEdit02Icon],svg[hugeicons-edit-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14.074 3.885c.745-.807 1.117-1.21 1.513-1.446a3.1 3.1 0 0 1 3.103-.047c.403.224.787.616 1.555 1.4c.768.785 1.152 1.178 1.37 1.589a3.29 3.29 0 0 1-.045 3.17c-.23.404-.625.785-1.416 1.546l-9.403 9.057c-1.498 1.443-2.247 2.164-3.183 2.53s-1.965.338-4.023.285l-.28-.008c-.626-.016-.94-.024-1.121-.231c-.183-.207-.158-.526-.108-1.164l.027-.346c.14-1.796.21-2.694.56-3.502s.956-1.463 2.166-2.774zM13 4l7 7m-6 11h8" color="currentColor"></svg:path>`,
})
export class HugeiconsEdit02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsEdit03Icon],svg[hugeicons-edit-03-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" d="M3.782 16.31L3 21l4.69-.782a3.96 3.96 0 0 0 2.151-1.106L20.42 8.532a1.98 1.98 0 0 0 0-2.8L18.269 3.58a1.98 1.98 0 0 0-2.802 0L4.888 14.16a3.96 3.96 0 0 0-1.106 2.15M14 6l4 4" color="currentColor"></svg:path>`,
})
export class HugeiconsEdit03Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsEdit04Icon],svg[hugeicons-edit-04-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" d="M8.172 19.828L19.828 8.172c.546-.546.818-.818.964-1.112a2 2 0 0 0 0-1.776c-.146-.295-.418-.567-.964-1.112c-.545-.546-.817-.818-1.112-.964a2 2 0 0 0-1.776 0c-.294.146-.566.418-1.112.964L4.172 15.828c-.579.578-.868.867-1.02 1.235C3 17.43 3 17.839 3 18.657V21h2.343c.818 0 1.226 0 1.594-.152c.367-.152.656-.442 1.235-1.02M12 21h6M14.5 5.5l4 4" color="currentColor"></svg:path>`,
})
export class HugeiconsEdit04Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsEditOffIcon],svg[hugeicons-edit-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m15 15l-4.25 4.068c-1.497 1.486-2.246 2.23-3.182 2.606c-.936.377-1.965.35-4.023.294l-.28-.008c-.626-.017-.94-.025-1.121-.238c-.183-.213-.158-.542-.108-1.2l.027-.356c.14-1.85.21-2.776.56-3.608S3.58 15.051 4.79 13.7L9 9m2.5-2.326l2.574-2.789c.745-.807 1.117-1.21 1.513-1.446a3.1 3.1 0 0 1 3.103-.047c.403.224.787.616 1.555 1.4c.768.785 1.152 1.178 1.37 1.589a3.29 3.29 0 0 1-.045 3.17c-.23.404-.625.785-1.416 1.546L17.5 12.5M13 4l7 7M2 2l20 20" color="currentColor"></svg:path>`,
})
export class HugeiconsEditOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsEditOff03Icon],svg[hugeicons-edit-off-03-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" d="m14 6l4 4M3 3l18 18M11.524 7.524l3.943-3.944a1.98 1.98 0 0 1 2.802 0l2.15 2.151a1.98 1.98 0 0 1 0 2.802l-3.943 3.943m-2 2l-4.635 4.636a3.96 3.96 0 0 1-2.15 1.106L3 21l.782-4.69a3.96 3.96 0 0 1 1.106-2.151l4.636-4.635" color="currentColor"></svg:path>`,
})
export class HugeiconsEditOff03Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsEditOff04Icon],svg[hugeicons-edit-off-04-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" d="m16 12l3.828-3.828c.546-.546.818-.818.964-1.112a2 2 0 0 0 0-1.776c-.146-.295-.418-.567-.964-1.112c-.545-.546-.817-.818-1.112-.964a2 2 0 0 0-1.776 0c-.294.146-.566.418-1.112.964L12 8m-2 2l-5.828 5.828c-.579.578-.868.867-1.02 1.235C3 17.43 3 17.839 3 18.657V21h2.343c.818 0 1.226 0 1.594-.152c.367-.152.656-.442 1.235-1.02L14 14m.5-8.5l4 4M3 3l18 18" color="currentColor"></svg:path>`,
})
export class HugeiconsEditOff04Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsEditRoadIcon],svg[hugeicons-edit-road-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3.252 3v18m13-18v7.5M9.752 3v4m0 3v4m0 3v4m9.86-7.56l.695.692a1.497 1.497 0 0 1 0 2.121l-3.638 3.696a2 2 0 0 1-1.05.551l-2.254.488a.5.5 0 0 1-.597-.593l.48-2.235c.074-.397.267-.762.554-1.047l3.683-3.674a1.507 1.507 0 0 1 2.127 0" color="currentColor"></svg:path>`,
})
export class HugeiconsEditRoadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsEditTableIcon],svg[hugeicons-edit-table-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 21.5c-4.478 0-6.718 0-8.109-1.391S2.5 16.479 2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12 2.5c4.478 0 6.718 0 8.109 1.391S21.5 7.521 21.5 12m-19-3h19m-19 4h14m-14 4H12m0 4.5V9m6.601 10.683l2.23-2.23c.311-.31.467-.466.55-.634a1.14 1.14 0 0 0 0-1.015c-.083-.168-.239-.323-.55-.635c-.312-.311-.467-.467-.635-.55a1.14 1.14 0 0 0-1.015 0c-.168.083-.323.239-.635.55l-2.43 2.43c-.713.714-1.07 1.07-1.29 1.507a3 3 0 0 0-.173.418c-.153.464-.153.968-.153 1.976l.655-.094c.996-.142 1.495-.213 1.937-.434s.798-.577 1.51-1.289" color="currentColor"></svg:path>`,
})
export class HugeiconsEditTableIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsEditUser02Icon],svg[hugeicons-edit-user-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5.18 15.296c-1.258.738-4.555 2.243-2.547 4.126c.982.92 2.074 1.578 3.448 1.578h7.838c1.374 0 2.467-.658 3.447-1.578c2.009-1.883-1.288-3.389-2.546-4.126a9.61 9.61 0 0 0-9.64 0M14 7a4 4 0 1 1-8 0a4 4 0 0 1 8 0m5.622-2.434c.224-.243.335-.364.454-.434a.93.93 0 0 1 .931-.014c.12.067.236.184.466.42c.23.235.346.353.412.476a.99.99 0 0 1-.014.951c-.07.122-.188.236-.425.464l-2.82 2.717c-.45.433-.675.65-.956.76s-.589.1-1.206.085l-.084-.003c-.188-.005-.282-.007-.337-.069c-.054-.062-.047-.158-.032-.35l.008-.103c.042-.539.063-.808.168-1.05c.105-.243.287-.44.65-.833z" color="currentColor"></svg:path>`,
})
export class HugeiconsEditUser02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsEggsIcon],svg[hugeicons-eggs-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 4.318c2.246-1.973 5.019-2.983 7.175-1.834c3.357 1.788 3.54 7.917 1.509 12.08c-.853 1.749-1.98 2.861-3.242 3.436M15 15.5c0 4.418-2.91 6.5-6.5 6.5S2 19.918 2 15.5S4.786 6 8.5 6s6.5 5.082 6.5 9.5" color="currentColor"></svg:path>`,
})
export class HugeiconsEggsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsEidMubarakIcon],svg[hugeicons-eid-mubarak-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M2.5 11.805c0 5.354 4.34 9.695 9.695 9.695c4.406 0 8.125-2.939 9.305-6.963A8.618 8.618 0 0 1 9.463 2.5C5.44 3.68 2.5 7.399 2.5 11.805"></svg:path><svg:path d="M13.25 8.5c-2.424-3 1.711-4.5 2.75-6c1.039 1.5 5.174 3 2.75 6m-5.5 0h5.5m-5.5 0v7m5.5-7v7"></svg:path></svg:g>`,
})
export class HugeiconsEidMubarakIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsEiffelTowerIcon],svg[hugeicons-eiffel-tower-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M3 22c4.678-5.614 6.96-12.122 7.838-17.014c.026-.145.04-.217.055-.27a.98.98 0 0 1 .848-.71C11.796 4 11.864 4 12 4s.204 0 .259.006a.98.98 0 0 1 .848.71c.016.053.029.125.055.27C14.04 9.878 16.322 16.386 21 22M12 4V2m-4 9h8M6 15h12"></svg:path><svg:path d="M15.5 22c-.21-1.041-.315-1.561-.565-2.002a3 3 0 0 0-.4-.551c-.338-.373-.794-.624-1.706-1.128c-.349-.192-.524-.288-.71-.312a1 1 0 0 0-.239 0c-.186.024-.36.12-.709.312c-.912.504-1.368.755-1.707 1.128a3 3 0 0 0-.399.55c-.25.442-.355.962-.565 2.003m6.5 0h7M2 22h7"></svg:path></svg:g>`,
})
export class HugeiconsEiffelTowerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsEightCircleIcon],svg[hugeicons-eight-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M12.5 12h-1m1 0a2.5 2.5 0 0 0 0-5h-1a2.5 2.5 0 0 0 0 5m1 0a2.5 2.5 0 0 1 0 5h-1a2.5 2.5 0 0 1 0-5"></svg:path><svg:path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10"></svg:path></svg:g>`,
})
export class HugeiconsEightCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsEightSquareIcon],svg[hugeicons-eight-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M2.997 12c0-4.478 0-6.718 1.391-8.109S8.018 2.5 12.498 2.5c4.477 0 6.717 0 8.108 1.391s1.391 3.63 1.391 8.109c0 4.478 0 6.718-1.391 8.109s-3.63 1.391-8.109 1.391c-4.478 0-6.717 0-8.109-1.391c-1.39-1.392-1.39-3.63-1.39-8.109"></svg:path><svg:path d="M12.997 12h-1m1 0a2.5 2.5 0 0 0 0-5h-1a2.5 2.5 0 0 0 0 5m1 0a2.5 2.5 0 0 1 0 5h-1a2.5 2.5 0 0 1 0-5"></svg:path></svg:g>`,
})
export class HugeiconsEightSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsElearningExchangeIcon],svg[hugeicons-elearning-exchange-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M2.459 9c1.277-4.057 5.077-7 9.566-7c5.198 0 9.472 3.947 9.975 9l-2-.407M21.541 15a10.03 10.03 0 0 1-9.566 7C6.777 22 2.503 18.053 2 13l2 .407"></svg:path><svg:path d="M9.002 13.528v1.992a.95.95 0 0 0 .432.81c.844.528 1.485.683 2.571.716c1.001.027 1.629-.13 2.563-.714a.96.96 0 0 0 .44-.82v-1.984m2.003-2.513v3.015M7.05 10.844c.362-.764 2.605-2.094 4.652-2.751a.93.93 0 0 1 .604.014c1.81.662 3.824 1.665 4.555 2.478c.381.425.008.967-.453 1.302c-.937.681-1.97 1.21-4.058 2.013a.98.98 0 0 1-.688.005c-2.14-.795-4.142-1.82-4.595-2.723a.39.39 0 0 1-.017-.338"></svg:path></svg:g>`,
})
export class HugeiconsElearningExchangeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsElectricHome01Icon],svg[hugeicons-electric-home-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M20 8.585V13.5c0 3.772 0 5.657-1.172 6.829c-.808.808-1.956 1.059-3.828 1.136M4 8.585V13.5c0 3.772 0 5.657 1.172 6.829c1.063 1.063 2.714 1.161 5.828 1.17a1 1 0 0 0 1-.999v-3"></svg:path><svg:path d="m22 10.5l-4.343-4.164C14.99 3.779 13.657 2.5 12 2.5S9.01 3.78 6.343 6.336L2 10.5M14.001 9v2.5m-4 0V9m-1.495 3.38c-.04-.475.37-.88.89-.88h5.214c.52 0 .93.405.89.88l-.107 1.298a5.16 5.16 0 0 1-.98 2.61l-.35.482c-.331.456-.889.73-1.486.73h-1.148c-.597 0-1.155-.274-1.486-.73l-.35-.482a5.16 5.16 0 0 1-.98-2.61z"></svg:path></svg:g>`,
})
export class HugeiconsElectricHome01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsElectricHome02Icon],svg[hugeicons-electric-home-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M14.007 10.003v2.499m-3.984 0v-2.499m-1.49 3.38c-.038-.475.37-.88.887-.88h5.194c.517 0 .925.405.886.88l-.107 1.297a5.2 5.2 0 0 1-.976 2.61l-.349.482c-.33.456-.885.73-1.48.73h-1.142c-.595 0-1.15-.274-1.48-.73l-.35-.482a5.2 5.2 0 0 1-.975-2.61z"></svg:path><svg:path d="M15.003 22.001c1.782-.02 2.545-.113 3.486-.5c.793-.324 1.29-.779 1.723-1.585c.648-1.21.864-2.598 1.058-3.959l.705-4.954c.051-.793.026-1.385-.16-1.966c-.352-1.11-1.305-1.892-2.234-2.59c-4.319-3.248-6.35-4.545-7.566-4.442c-1.153-.091-2.724.841-7.708 4.559c-.832.62-1.666 1.298-2.045 2.267c-.53 1.355-.122 2.89.1 4.329c.264 1.692.575 3.756 1.136 6.122q.05.22.148.422c.497 1.018.934 1.442 1.896 1.797c.999.37 4.132.69 5.703.337c.53-.119.77-.645.77-1.19v-2.146"></svg:path></svg:g>`,
})
export class HugeiconsElectricHome02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsElectricPlugsIcon],svg[hugeicons-electric-plugs-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M9 2v3m6-3v3m-3 13v4m.694-13.5l-2.091 2.175c-.224.233-.064.568.302.63l2.19.372c.39.066.538.438.266.664L10.767 14.5"></svg:path><svg:path d="M14.307 5H9.693c-2.138 0-3.207 0-3.798.698c-.59.697-.428 1.768-.103 3.91l.524 3.45C6.836 16.484 8.286 18 12 18s5.164-1.516 5.684-4.942l.524-3.45c.325-2.142.487-3.213-.103-3.91S16.445 5 14.307 5"></svg:path></svg:g>`,
})
export class HugeiconsElectricPlugsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsElectricTower01Icon],svg[hugeicons-electric-tower-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="m9 6l.4 2.214c.066.434.026.875-.119 1.296L5 22M15 6l-.4 2.214c-.066.434-.026.875.119 1.296L19 22"></svg:path><svg:path d="m3 11l.324-1.08c.087-.29.13-.435.229-.557c.098-.121.244-.21.535-.386L8.474 6.32c.26-.158.391-.237.542-.278C9.166 6 9.328 6 9.65 6h4.7c.322 0 .483 0 .634.04c.15.042.281.12.542.279l4.386 2.658c.291.176.437.265.535.386c.098.122.142.267.23.558L21 11M3 22h18M4 9h15.5"></svg:path><svg:path d="m9.5 10l6.5 4.5L5 22"></svg:path><svg:path d="M14.5 10L8 14.5L19 22M9 6l1.4-2.24C11.133 2.587 11.5 2 12 2s.867.587 1.6 1.76L15 6"></svg:path></svg:g>`,
})
export class HugeiconsElectricTower01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsElectricTower02Icon],svg[hugeicons-electric-tower-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M15 2H9v5h6zm4.5 20h-15L9 7h6zM2 22h20M3 7h18M3 7v2m0-2l6-5m12 5v2m0-2l-6-5"></svg:path><svg:path d="m15.5 9.5l-8.5 5L18.5 20"></svg:path><svg:path d="m8.5 9.5l8.5 5L5.5 20"></svg:path></svg:g>`,
})
export class HugeiconsElectricTower02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsElectricWireIcon],svg[hugeicons-electric-wire-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 21V9h-2c-.943 0-1.414 0-1.707.293S8 10.057 8 11v10m8 0V11c0-.943 0-1.414-.293-1.707S14.943 9 14 9h-2v12m8-16v4m2-2h-4M6 7H2m8 2V6c0-.932 0-1.398-.152-1.765a2 2 0 0 0-1.083-1.083C8.398 3 7.932 3 7 3m7 6V6c0-.932 0-1.398.152-1.765a2 2 0 0 1 1.083-1.083C15.602 3 16.068 3 17 3" color="currentColor"></svg:path>`,
})
export class HugeiconsElectricWireIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsEllipseSelectionIcon],svg[hugeicons-ellipse-selection-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14 4.252A8.01 8.01 0 0 1 19.748 10M10 4.252A8.01 8.01 0 0 0 4.252 10m0 4A8.01 8.01 0 0 0 10 19.748m4 0A8.01 8.01 0 0 0 19.748 14m-9.455-8.293C10.586 6 11.057 6 12 6s1.414 0 1.707-.293m-3.414 0C10 5.414 10 4.943 10 4s0-1.414.293-1.707m0 3.414q0 0 0 0m3.414 0C14 5.414 14 4.943 14 4s0-1.414-.293-1.707m0 3.414q0 0 0 0m0-3.414C13.414 2 12.943 2 12 2s-1.414 0-1.707.293m3.414 0q0 0 0 0m-3.414 0q0 0 0 0m0 19.414C10.586 22 11.057 22 12 22s1.414 0 1.707-.293m-3.414 0C10 21.414 10 20.943 10 20s0-1.414.293-1.707m0 3.414q0 0 0 0m3.414 0C14 21.414 14 20.943 14 20s0-1.414-.293-1.707m0 3.414q0 0 0 0m0-3.414C13.414 18 12.943 18 12 18s-1.414 0-1.707.293m3.414 0q0 0 0 0m-3.414 0q0 0 0 0m8-8C18 10.586 18 11.057 18 12s0 1.414.293 1.707m0-3.414C18.586 10 19.057 10 20 10s1.414 0 1.707.293m-3.414 0q0 0 0 0m0 3.414C18.586 14 19.057 14 20 14s1.414 0 1.707-.293m-3.414 0q0 0 0 0m3.414 0C22 13.414 22 12.943 22 12s0-1.414-.293-1.707m0 3.414q0 0 0 0m0-3.414q0 0 0 0m-19.414 0C2 10.586 2 11.057 2 12s0 1.414.293 1.707m0-3.414C2.586 10 3.057 10 4 10s1.414 0 1.707.293m-3.414 0q0 0 0 0m0 3.414C2.586 14 3.057 14 4 14s1.414 0 1.707-.293m-3.414 0q0 0 0 0m3.414 0C6 13.414 6 12.943 6 12s0-1.414-.293-1.707m0 3.414q0 0 0 0m0-3.414q0 0 0 0" color="currentColor"></svg:path>`,
})
export class HugeiconsEllipseSelectionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsEncryptIcon],svg[hugeicons-encrypt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m22 16l-2-2h-9.468a4.5 4.5 0 1 0 0 4H16.5l1.25-1.293L19 18h1zM6 16h1M3 3.5v5M6 7V5a1.5 1.5 0 1 1 3 0v2a1.5 1.5 0 1 1-3 0m6-3.5v5m3-5v5M18 7V5a1.5 1.5 0 0 1 3 0v2a1.5 1.5 0 0 1-3 0" color="currentColor"></svg:path>`,
})
export class HugeiconsEncryptIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsEnergyIcon],svg[hugeicons-energy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m6.194 11.397l5.998-8.085c.47-.632 1.348-.239 1.348.603v6.258c0 .505.345.913.77.913h2.918c.663 0 1.016.927.578 1.518l-5.998 8.084c-.47.632-1.348.239-1.348-.603v-6.258c0-.505-.345-.913-.77-.913H6.771c-.663 0-1.016-.927-.578-1.517" color="currentColor"></svg:path>`,
})
export class HugeiconsEnergyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsEnergyEllipseIcon],svg[hugeicons-energy-ellipse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:circle cx="12" cy="12" r="10"></svg:circle><svg:path d="m8.129 11.598l3.999-5.39c.313-.422.899-.16.899.402v4.172c0 .336.23.609.514.609h1.944c.442 0 .678.618.386 1.011l-3.999 5.39c-.313.422-.899.16-.899-.402v-4.172c0-.336-.23-.609-.514-.609H8.515c-.441 0-.677-.618-.385-1.011"></svg:path></svg:g>`,
})
export class HugeiconsEnergyEllipseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsEnergyRectangleIcon],svg[hugeicons-energy-rectangle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M2.5 12c0-4.23 0-6.345 1.198-7.747q.256-.3.555-.555C5.655 2.5 7.77 2.5 12 2.5s6.345 0 7.747 1.198q.3.256.555.555C21.5 5.655 21.5 7.77 21.5 12s0 6.345-1.198 7.747q-.256.3-.555.555C18.345 21.5 16.23 21.5 12 21.5s-6.345 0-7.747-1.198q-.3-.256-.555-.555C2.5 18.345 2.5 16.23 2.5 12"></svg:path><svg:path d="m8.129 11.598l3.999-5.39c.313-.422.899-.16.899.402v4.172c0 .336.23.609.514.609h1.944c.442 0 .678.618.386 1.011l-3.999 5.39c-.313.422-.899.16-.899-.402v-4.172c0-.336-.23-.609-.514-.609H8.515c-.441 0-.677-.618-.385-1.011"></svg:path></svg:g>`,
})
export class HugeiconsEnergyRectangleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsEnteringGeoFenceIcon],svg[hugeicons-entering-geo-fence-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M12 17V3m0 14c.373 0 .673-.343 1.273-1.028L15 14m-3 3c-.373 0-.673-.343-1.273-1.028L9 14"></svg:path><svg:path d="M5 15c-1.25.633-2 1.439-2 2.316C3 19.35 7.03 21 12 21s9-1.65 9-3.684c0-.877-.75-1.683-2-2.316"></svg:path></svg:g>`,
})
export class HugeiconsEnteringGeoFenceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsEntranceStairsIcon],svg[hugeicons-entrance-stairs-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.256 10.315c0-4.83 3.92-8.75 8.75-8.75s8.75 3.92 8.75 8.75v8.7c0 .59 0 1.09-.04 1.49c-.04.42-.12.82-.33 1.18c-.24.42-.59.77-1.01 1.01c-.37.21-.76.29-1.18.33c-.4.04-.9.04-1.49.04h-9.72c-.46 0-.85 0-1.18-.04c-.42-.04-.82-.12-1.18-.33a2.7 2.7 0 0 1-1.01-1.01c-.21-.36-.29-.76-.33-1.18c-.04-.4-.04-.9-.04-1.49v-8.7zm4.5 11.25h8.92c.64 0 1.06 0 1.39-.03c.32-.03.47-.08.57-.14c.19-.11.35-.27.46-.46c.06-.1.11-.25.14-.57c.03-.31.03-.72.03-1.31H9.016c-.49 0-.79 0-1 .03c-.1.01-.15.03-.17.04v.01c0 .02-.02.07-.04.17c-.03.21-.03.5-.03 1v1.25zm2.5-4h-1.29c-.43 0-.83 0-1.15.04c-.36.05-.73.16-1.04.47s-.42.68-.47 1.04c-.04.32-.04.72-.04 1.15v1.28c-.11 0-.22-.01-.31-.02c-.32-.03-.47-.08-.57-.14c-.19-.11-.35-.27-.46-.46c-.06-.1-.11-.25-.14-.57c-.03-.33-.03-.76-.03-1.39v-8.67c0-4 3.25-7.25 7.25-7.25c3.75 0 6.84 2.85 7.21 6.5h-2.26c-.43 0-.83 0-1.15.04c-.36.05-.73.16-1.04.47s-.42.68-.47 1.04c-.04.32-.04.72-.04 1.15v1.3h-1.29c-.43 0-.83 0-1.15.04c-.36.05-.73.16-1.04.47s-.42.68-.47 1.04c-.04.32-.04.72-.04 1.15v1.3zm1.5 0h7.5v-2.5h-6.25c-.49 0-.79 0-1 .03c-.1.01-.15.03-.17.04h-.01v.01c0 .02-.02.07-.04.17c-.03.21-.03.5-.03 1zm4-4h3.5v-2.5h-2.25c-.49 0-.79 0-1 .03c-.1.01-.15.03-.17.04h-.01v.01c0 .02-.02.07-.04.17c-.03.21-.03.5-.03 1z" color="currentColor"></svg:path>`,
})
export class HugeiconsEntranceStairsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsEnvatoIcon],svg[hugeicons-envato-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5.62 9.719c-.043 1.33.121 2.803.68 4.046c.28.625.421.938.671.895s.276-.435.328-1.218c.338-5.138 4.763-10.621 9.936-11.375c.521-.077.782-.115 1.09.038c.307.153.44.401.706.898C23.478 11.316 20.138 22 11.58 22C4.848 22 .83 14.192 4.236 9.084c.543-.815.815-1.222 1.127-1.126s.294.65.258 1.76" color="currentColor"></svg:path>`,
})
export class HugeiconsEnvatoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsEqualSignIcon],svg[hugeicons-equal-sign-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 8h16M4 16h16" color="currentColor"></svg:path>`,
})
export class HugeiconsEqualSignIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsEqualSignCircleIcon],svg[hugeicons-equal-sign-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:circle cx="12" cy="12" r="10"></svg:circle><svg:path d="M8 9h8m-8 6h8"></svg:path></svg:g>`,
})
export class HugeiconsEqualSignCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsEqualSignSquareIcon],svg[hugeicons-equal-sign-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 9h8m-8 6h8M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12 2.5c4.478 0 6.718 0 8.109 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109S16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391S2.5 16.479 2.5 12" color="currentColor"></svg:path>`,
})
export class HugeiconsEqualSignSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsEquipmentBenchPressIcon],svg[hugeicons-equipment-bench-press-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18 3v5M6 3v5m14.5-4v1.5m0 0V7m0-1.5H22M3.5 4v1.5m0 0V7m0-1.5H2m16 0H6m4 0V10m4-4.5V10m4.952 6H5.062m9.194-6h-4.05c-1.007 0-1.38.144-1.934.992l-3.013 4.612c-.186.284-.259.51-.259.854C5 18.611 5.873 19 7.847 19h8.25C18.133 19 19 18.616 19 16.408c0-.306-.057-.51-.204-.773l-2.537-4.53c-.534-.953-.918-1.105-2.003-1.105M16 19v2m-8-2v2" color="currentColor"></svg:path>`,
})
export class HugeiconsEquipmentBenchPressIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsEquipmentChestPressIcon],svg[hugeicons-equipment-chest-press-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M13.91 8.368c.302.233.364.621.49 1.398l.457 2.849c.163 1.008.244 1.512-.076 1.84c-.756.774-4.9.678-5.562 0c-.32-.328-.239-.832-.077-1.84L9.6 9.766c.125-.777.188-1.165.49-1.398c.62-.478 3.167-.503 3.82 0M7.5 19c.042-.127.063-.19.086-.246a2 2 0 0 1 1.735-1.25c.06-.004.127-.004.26-.004h4.838c.133 0 .2 0 .26.004a2 2 0 0 1 1.735 1.25c.023.056.044.12.086.246M12 17.5V22m0 0h7m-7 0H5"></svg:path><svg:path d="M21 14v-3.597c0-.695 0-1.042-.113-1.363c-.113-.322-.33-.593-.764-1.136l-1.922-2.403c-.59-.737-.885-1.106-1.296-1.304C16.495 4 16.022 4 15.077 4H8.923c-.944 0-1.416 0-1.827.197c-.41.198-.706.567-1.296 1.304L3.877 7.904c-.434.543-.652.814-.764 1.136C3 9.36 3 9.708 3 10.403V14m0-2h3m15 0h-3m-6-4V2"></svg:path></svg:g>`,
})
export class HugeiconsEquipmentChestPressIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsEquipmentGym01Icon],svg[hugeicons-equipment-gym-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7.75 11.5h8.5c1.393 0 1.75.41 1.75 1.75c0 1.393-.41 1.75-1.75 1.75h-8.5C6.357 15 6 14.59 6 13.25c0-1.393.41-1.75 1.75-1.75m0 3.5h8.5c1.393 0 1.75.41 1.75 1.75c0 1.393-.41 1.75-1.75 1.75h-8.5C6.357 18.5 6 18.09 6 16.75C6 15.357 6.41 15 7.75 15m0 3.5h8.5c1.393 0 1.75.41 1.75 1.75c0 1.393-.41 1.75-1.75 1.75h-8.5C6.357 22 6 21.59 6 20.25c0-1.393.41-1.75 1.75-1.75M22 7.5l-.799-.999c-.59-.737-.885-1.106-1.296-1.303c-.344-.166-.732-.193-1.405-.197M2 7.501l.799-1c.59-.737.885-1.106 1.296-1.303c.344-.166.732-.193 1.405-.197m10.5 0H8M16 2v9.5M8 2v9.5" color="currentColor"></svg:path>`,
})
export class HugeiconsEquipmentGym01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsEquipmentGym02Icon],svg[hugeicons-equipment-gym-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 3v18M21 3v18m1-15H2m13.5 4c1.105 0 2 .97 2 2.165c0 .283-.05.554-.142.802c-.294.798-3.489.617-3.716 0a2.3 2.3 0 0 1-.142-.802c0-1.196.895-2.165 2-2.165m-7 0c1.105 0 2 .97 2 2.165c0 .283-.05.554-.142.802c-.294.798-3.489.617-3.716 0a2.3 2.3 0 0 1-.142-.802c0-1.196.895-2.165 2-2.165m0 0V6m7 4V6" color="currentColor"></svg:path>`,
})
export class HugeiconsEquipmentGym02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsEquipmentGym03Icon],svg[hugeicons-equipment-gym-03-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18 3v5M6 3v5m14.5-4v1.5m0 0V7m0-1.5H22M3.5 4v1.5m0 0V7m0-1.5H2m16 0H6M7.277 19h9.447c1.237 0 1.856 0 2.112-.303c.58-.686-.532-1.594-.938-2.051c-.457-.516-.792-.646-1.468-.646H7.57c-.676 0-1.01.13-1.468.646c-.406.457-1.518 1.365-.938 2.051C5.42 19 6.04 19 7.277 19M9 8v8m6-8v8m1 3v2m-8-2v2" color="currentColor"></svg:path>`,
})
export class HugeiconsEquipmentGym03Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsEquipmentWeightliftingIcon],svg[hugeicons-equipment-weightlifting-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M10.529 8h2.942c.56 0 1.147.002 1.397.617c.176.433.176 1.333 0 1.766c-.25.615-.837.617-1.397.617H10.53c-.56 0-1.147-.002-1.397-.617c-.176-.433-.176-1.333 0-1.766C9.383 8.002 9.97 8 10.53 8m-.001 3h2.942c.56 0 1.147.002 1.397.617c.176.433.176 1.333 0 1.766c-.25.615-.837.617-1.397.617H10.53c-.56 0-1.147-.002-1.397-.617c-.176-.433-.176-1.333 0-1.766c.25-.615.837-.617 1.397-.617M7.5 19c.042-.127.063-.19.086-.246a2 2 0 0 1 1.735-1.25c.06-.004.127-.004.26-.004h4.838c.133 0 .2 0 .26.004a2 2 0 0 1 1.735 1.25c.023.056.044.12.086.246M12 17.5V22m0 0h7m-7 0H5"></svg:path><svg:path d="m21 8.5l-1.204-1.405c-.884-1.03-1.325-1.546-1.922-1.82C17.277 5 16.598 5 15.24 5H8.76c-1.358 0-2.037 0-2.634.274c-.597.275-1.038.79-1.922 1.821L3 8.5m9-.5V2"></svg:path></svg:g>`,
})
export class HugeiconsEquipmentWeightliftingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsEraserIcon],svg[hugeicons-eraser-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m8.738 7.78l-3.891 3.977c-1.17 1.196-1.755 1.794-1.834 2.523q-.025.232 0 .464c.08.73.664 1.327 1.834 2.523l.149.152c.624.639.937.958 1.31 1.172q.328.188.689.291c.413.118.856.118 1.743.118c.886 0 1.33 0 1.743-.118q.361-.104.688-.29c.374-.215.686-.534 1.31-1.173l2.845-2.907M8.738 7.78l3.582-3.657C13.706 2.708 14.4 2 15.263 2s1.556.708 2.941 2.125l.743.76C20.316 6.283 21 6.983 21 7.85s-.685 1.566-2.054 2.964l-3.622 3.698M8.738 7.78l6.586 6.732M10 22h11" color="currentColor"></svg:path>`,
})
export class HugeiconsEraserIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsEraser01Icon],svg[hugeicons-eraser-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2 12c0-3.771 0-5.657 1.172-6.828S6.229 4 10 4h3c1.963 0 2.944 0 3.789.422c.844.423 1.433 1.208 2.611 2.778C21.133 9.511 22 10.667 22 12s-.867 2.489-2.6 4.8c-1.178 1.57-1.767 2.355-2.611 2.778C15.944 20 14.963 20 13 20h-3c-3.771 0-5.657 0-6.828-1.172S2 15.771 2 12m12-3l-6 6m6 0L8 9" color="currentColor"></svg:path>`,
})
export class HugeiconsEraser01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsEraserAddIcon],svg[hugeicons-eraser-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2 12c0-3.771 0-5.657 1.172-6.828S6.229 4 10 4h3c1.963 0 2.944 0 3.789.422c.844.423 1.433 1.208 2.611 2.778C21.133 9.511 22 10.667 22 12s-.867 2.489-2.6 4.8c-1.178 1.57-1.767 2.355-2.611 2.778C15.944 20 14.963 20 13 20h-3c-3.771 0-5.657 0-6.828-1.172S2 15.771 2 12m9-4v8m4-4H7" color="currentColor"></svg:path>`,
})
export class HugeiconsEraserAddIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsEraserAutoIcon],svg[hugeicons-eraser-auto-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m12.035 12.089l-2.915 2.93C7.707 16.44 7 17.15 7 18.035s.707 1.596 2.12 3.017l.33.332c.303.304.454.456.646.536c.191.08.404.08.83.08h2.218c.426 0 .639 0 .83-.08c.192-.08.343-.232.646-.536l3.33-3.349m-5.915-5.946l1.997-2.008c1.375-1.382 2.062-2.073 2.913-2.08h.04c.85.007 1.538.698 2.913 2.08c1.396 1.404 2.094 2.106 2.102 2.979v.04c-.008.873-.706 1.575-2.102 2.978l-1.947 1.957m-5.916-5.946l5.916 5.946M9 9L7.5 5.5m0 0L6.184 2.43a1 1 0 0 0-.078-.165a.6.6 0 0 0-.412-.258C5.649 2 5.599 2 5.5 2c-.1 0-.149 0-.194.007a.6.6 0 0 0-.412.258a1 1 0 0 0-.078.164L3.5 5.5m4 0h-4m0 0L2 9" color="currentColor"></svg:path>`,
})
export class HugeiconsEraserAutoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsEstimate01Icon],svg[hugeicons-estimate-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18 8.756V6.8c0-2.263 0-3.394-.775-4.097C16.449 2 15.202 2 12.705 2h-4.41c-2.497 0-3.744 0-4.52.703S3 4.537 3 6.8v6.4c0 2.263 0 3.394.775 4.097c.776.703 2.023.703 4.52.703h4.41M6 6h9m-9 4h1m3 0h1m3 0h1m-9 4h1m3 0h1m9.706 1.004c-.274-.695-.98-1.51-2.586-1.51c-1.866 0-2.652.855-2.811 1.312c-.249.611-.272 1.93 1.989 2.005c2.7.09 3.83.457 3.69 1.937c-.139 1.48-1.695 1.686-2.868 1.766c-1.205-.035-2.695-.287-3.12-1.565M17.994 12v1.436m.009 7.073V22" color="currentColor"></svg:path>`,
})
export class HugeiconsEstimate01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsEstimate02Icon],svg[hugeicons-estimate-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M17.5 11V7.3c0-2.263 0-3.394-.775-4.097c-.776-.703-2.023-.703-4.52-.703h-4.41c-2.497 0-3.744 0-4.52.703S2.5 5.037 2.5 7.3v6.4c0 2.263 0 3.394.775 4.097c.776.703 2.023.703 4.52.703H11m-5.5-12h9m-9 4h1m3 0h1m3 0h1m-9 4h1m3 0h1"></svg:path><svg:circle cx="17.5" cy="17.5" r="4"></svg:circle><svg:path d="m18.5 18l-1-.5V16"></svg:path></svg:g>`,
})
export class HugeiconsEstimate02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsEthereumIcon],svg[hugeicons-ethereum-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m19 12l-5.76 2.579c-.611.28-.917.421-1.24.421s-.629-.14-1.24-.421L5 12m14 0c0-.532-.305-1-.917-1.936L14.58 4.696C13.406 2.9 12.82 2 12 2s-1.406.899-2.58 2.696l-3.503 5.368C5.306 11 5 11.468 5 12m14 0c0 .532-.305 1-.917 1.936l-3.503 5.368C13.406 21.1 12.82 22 12 22s-1.406-.899-2.58-2.696l-3.503-5.368C5.306 13 5 12.532 5 12" color="currentColor"></svg:path>`,
})
export class HugeiconsEthereumIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsEthereumEllipseIcon],svg[hugeicons-ethereum-ellipse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="m8 12l4-6l4 6m-8 0l4 6l4-6m-8 0l4 1.5l4-1.5"></svg:path><svg:circle cx="12" cy="12" r="10"></svg:circle></svg:g>`,
})
export class HugeiconsEthereumEllipseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsEthereumRectangleIcon],svg[hugeicons-ethereum-rectangle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12 2.5c4.478 0 6.718 0 8.109 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109S16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391S2.5 16.479 2.5 12"></svg:path><svg:path d="m8 12l4-6l4 6m-8 0l4 6l4-6m-8 0l4 1.5l4-1.5"></svg:path></svg:g>`,
})
export class HugeiconsEthereumRectangleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsEuroIcon],svg[hugeicons-euro-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 10h8m-8 4h8m6 3.608C17.87 19.64 15.812 21 13.461 21C9.894 21 7 17.866 7 14v-4c0-3.866 2.893-7 6.461-7C15.813 3 17.87 4.36 19 6.392" color="currentColor"></svg:path>`,
})
export class HugeiconsEuroIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsEuroCircleIcon],svg[hugeicons-euro-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10"></svg:path><svg:path d="M15 14.492c-.478.904-1.349 1.508-2.343 1.508c-1.51 0-2.734-1.393-2.734-3.111V11.11c0-1.717 1.224-3.11 2.734-3.11c.994 0 1.865.604 2.343 1.508M9 12h3.923"></svg:path></svg:g>`,
})
export class HugeiconsEuroCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsEuroReceiveIcon],svg[hugeicons-euro-receive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2 10h6m-6 4h6m5-8c-.948-1.23-2.305-2-3.811-2C6.323 4 4 6.786 4 10.222v3.556C4 17.214 6.323 20 9.189 20c1.506 0 2.863-.77 3.811-2m1.5-5H22m-7.5 0c0 .7 1.994 2.008 2.5 2.5M14.5 13c0-.7 1.994-2.008 2.5-2.5" color="currentColor"></svg:path>`,
})
export class HugeiconsEuroReceiveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsEuroSendIcon],svg[hugeicons-euro-send-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2 10h6m-6 4h6m5-8c-.948-1.23-2.305-2-3.811-2C6.323 4 4 6.786 4 10.222v3.556C4 17.214 6.323 20 9.189 20c1.506 0 2.863-.77 3.811-2m9-5h-7.5m7.5 0c0 .7-1.994 2.008-2.5 2.5M22 13c0-.7-1.994-2.008-2.5-2.5" color="currentColor"></svg:path>`,
})
export class HugeiconsEuroSendIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsEuroSquareIcon],svg[hugeicons-euro-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M2.5 12c0-4.23 0-6.345 1.198-7.747q.256-.3.555-.555C5.655 2.5 7.77 2.5 12 2.5s6.345 0 7.747 1.198q.3.256.555.555C21.5 5.655 21.5 7.77 21.5 12s0 6.345-1.198 7.747q-.256.3-.555.555C18.345 21.5 16.23 21.5 12 21.5s-6.345 0-7.747-1.198q-.3-.256-.555-.555C2.5 18.345 2.5 16.23 2.5 12"></svg:path><svg:path d="M15 14.492c-.478.904-1.349 1.508-2.343 1.508c-1.51 0-2.734-1.393-2.734-3.111V11.11c0-1.717 1.224-3.11 2.734-3.11c.994 0 1.865.604 2.343 1.508M9 12h3.923"></svg:path></svg:g>`,
})
export class HugeiconsEuroSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsEvChargingIcon],svg[hugeicons-ev-charging-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M3 22V7c0-2.357 0-3.536.732-4.268S5.643 2 8 2h3c2.357 0 3.536 0 4.268.732S16 4.643 16 7v15M2 22h15M3 11h13m5-2.473l.447-.222c.27-.133.404-.2.478-.319c.075-.12.075-.268.075-.566v-.694c0-.643 0-.965-.174-1.113a.5.5 0 0 0-.19-.101c-.222-.062-.493.117-1.034.474c-.695.458-1.042.687-1.264 1.014a2 2 0 0 0-.186.345C19 7.708 19 8.12 19 8.947v1.633c0 .232.19.42.425.42a.85.85 0 0 0 .789-.528z"></svg:path><svg:path d="M19.478 11c.2 1.386.667 2.97.477 4.38c-.171 1.277-1.182 2.308-2.512 2.561C17.133 18 16.755 18 16 18m-5.75-4l-1.946 1.917c-.237.257-.356.385-.282.484c.073.099.287.099.715.099h1.525c.429 0 .643 0 .716.099c.074.1-.045.227-.282.484L8.737 19"></svg:path></svg:g>`,
})
export class HugeiconsEvChargingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsEvilIcon],svg[hugeicons-evil-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M7 9.01s1.41-.127 2.196.498m0 0l-.263.835c-.104.329.167.657.543.657c.396 0 .657-.357.453-.665a3.6 3.6 0 0 0-.733-.827M17 9.011s-1.41-.128-2.196.497m0 0l.263.835c.104.329-.167.657-.543.657c-.396 0-.657-.357-.453-.665a3.6 3.6 0 0 1 .733-.827"></svg:path><svg:path d="M8 3.936L2 2l1.686 5.225c.117.363.175.545.17.717s-.086.383-.25.803a9 9 0 1 0 16.786 0c-.162-.42-.243-.63-.248-.803c-.005-.172.053-.354.17-.717L22 2l-6 1.936m-8 0A9 9 0 0 0 6.343 5M8 3.936A8.96 8.96 0 0 1 12 3a8.96 8.96 0 0 1 4 .936m0 0A9 9 0 0 1 17.657 5"></svg:path><svg:path d="M9 16c.836.628 1.874 1 3 1a4.98 4.98 0 0 0 3-1"></svg:path></svg:g>`,
})
export class HugeiconsEvilIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsExchange01Icon],svg[hugeicons-exchange-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16.977 19.5A9 9 0 0 0 10 3.223M16.977 19.5V16m0 3.5H20.5M7 4.516a9 9 0 0 0 7 16.261M7 4.516V8m0-3.484H3.5" color="currentColor"></svg:path>`,
})
export class HugeiconsExchange01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsExchange02Icon],svg[hugeicons-exchange-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.125 9.5v-6M6 3.5V2m0 9V9.5m-1.875-3h3.75m0 0C8.496 6.5 9 7.004 9 7.625v.75C9 8.996 8.496 9.5 7.875 9.5H3m4.875-3C8.496 6.5 9 5.996 9 5.375v-.75C9 4.004 8.496 3.5 7.875 3.5H3m12 14l3-4.5l3 4.5m-6 0l3 4.5l3-4.5m-6 0l3 1.125l3-1.125M12 5c2.828 0 5.243 0 6.121.799S19 7.429 19 10l-2-1m-5 10c-2.828 0-5.243 0-6.121-.799S5 16.571 5 14l2 1" color="currentColor"></svg:path>`,
})
export class HugeiconsExchange02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsExchange03Icon],svg[hugeicons-exchange-03-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16.125 20.5v-6m1.875 0V13m0 9v-1.5m-1.875-3h3.75m0 0c.621 0 1.125.504 1.125 1.125v.75c0 .621-.504 1.125-1.125 1.125H15m4.875-3c.621 0 1.125-.504 1.125-1.125v-.75c0-.621-.504-1.125-1.125-1.125H15M11 5c2.828 0 5.243 0 6.121.799S18 7.429 18 10l-2-1m-4 11c-2.828 0-5.243 0-6.121-.799S5 17.571 5 15l2 1M5.5 3.25c-1.38 0-2.5.84-2.5 1.875S4.12 7 5.5 7S8 7.84 8 8.875S6.88 10.75 5.5 10.75m0-7.5c1.089 0 2.015.522 2.358 1.25M5.5 3.25V2m0 8.75c-1.089 0-2.015-.522-2.358-1.25M5.5 10.75V12" color="currentColor"></svg:path>`,
})
export class HugeiconsExchange03Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsExpanderIcon],svg[hugeicons-expander-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11.339 16.496c.257-.216.55-.385.864-.49c2.024-.634.9-2.152 2.736-2.751c1.416-.462.982-1.242 1.534-1.9m-6.418 2.57c.198-.156.434-.268.695-.32c1.074-.204.91-1.846 2.05-2.065c.785-.159.698-.954 1.106-1.47m-6.418 2.57c.105-.426.551-.385.864-.49c1.944-.715.82-2.402 2.736-2.751c1.454-.213.892-1.338 1.534-1.9M2 15.334L8.658 22m-5.82-6.207l.678-.636c.414-.388.853-.833 1.419-.873c.522-.038 1.23.24 3.171.925c.645.227 1.443 2.256 1.562 3.598c.058.648-.33 1.2-.78 1.668l-.545.567m6.999-19.038l6.625 6.7m-6.17-5.86l-.638.677c-.39.413-.836.85-.88 1.416c-.04.523.235 1.232.909 3.18c.223.647 2.244 1.455 3.583 1.582c.648.062 1.202-.324 1.673-.774l.568-.542" color="currentColor"></svg:path>`,
})
export class HugeiconsExpanderIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsExternalDriveIcon],svg[hugeicons-external-drive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20 14v-4c0-3.771 0-5.657-1.103-6.828S16.02 2 12.471 2h-.942C7.98 2 6.205 2 5.103 3.172S4 6.229 4 10v4c0 3.771 0 5.657 1.103 6.828S7.98 22 11.529 22h.942c3.549 0 5.324 0 6.426-1.172S20 17.771 20 14m-4 4h.009M4 15h16M8 6h2M8 9h2" color="currentColor"></svg:path>`,
})
export class HugeiconsExternalDriveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsEyeIcon],svg[hugeicons-eye-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M2 8s4.477-5 10-5s10 5 10 5"></svg:path><svg:path d="M21.544 13.045c.304.426.456.64.456.955c0 .316-.152.529-.456.955C20.178 16.871 16.689 21 12 21c-4.69 0-8.178-4.13-9.544-6.045C2.152 14.529 2 14.315 2 14c0-.316.152-.529.456-.955C3.822 11.129 7.311 7 12 7c4.69 0 8.178 4.13 9.544 6.045"></svg:path><svg:path d="M15 14a3 3 0 1 0-6 0a3 3 0 0 0 6 0"></svg:path></svg:g>`,
})
export class HugeiconsEyeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsFaceIdIcon],svg[hugeicons-face-id-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.5 8.187c.104-2.1.415-3.41 1.347-4.34c.93-.932 2.24-1.243 4.34-1.347M21.5 8.187c-.104-2.1-.415-3.41-1.347-4.34c-.93-.932-2.24-1.243-4.34-1.347m0 19c2.1-.104 3.41-.415 4.34-1.347c.932-.93 1.243-2.24 1.347-4.34M8.187 21.5c-2.1-.104-3.41-.415-4.34-1.347c-.932-.93-1.243-2.24-1.347-4.34M17.5 17l-.202-.849a2 2 0 0 0-1.392-1.458l-2.406-.694v-1.467c.896-.605 1.5-1.736 1.5-3.032C15 7.567 13.656 6 12 6c-1.657 0-3 1.567-3 3.5c0 1.296.603 2.427 1.5 3.032v1.467l-2.391.7a2 2 0 0 0-1.371 1.406L6.5 17" color="currentColor"></svg:path>`,
})
export class HugeiconsFaceIdIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsFacebook01Icon],svg[hugeicons-facebook-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12 2.5c4.478 0 6.718 0 8.109 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109S16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391S2.5 16.479 2.5 12"></svg:path><svg:path d="M16.927 8.026h-2.945a1.9 1.9 0 0 0-1.9 1.886l-.086 11.515m-1.914-7.425h4.803"></svg:path></svg:g>`,
})
export class HugeiconsFacebook01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsFacebook02Icon],svg[hugeicons-facebook-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6.182 10.333c-.978 0-1.182.192-1.182 1.111v1.667c0 .92.204 1.111 1.182 1.111h2.363v6.667c0 .92.205 1.111 1.182 1.111h2.364c.978 0 1.182-.192 1.182-1.111v-6.667h2.654c.741 0 .932-.135 1.136-.806l.507-1.666c.349-1.149.133-1.417-1.137-1.417h-3.16V7.556c0-.614.529-1.112 1.181-1.112h3.364c.978 0 1.182-.191 1.182-1.11V3.11C19 2.191 18.796 2 17.818 2h-3.364c-3.263 0-5.909 2.487-5.909 5.556v2.777z" color="currentColor"></svg:path>`,
})
export class HugeiconsFacebook02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsFactoryIcon],svg[hugeicons-factory-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 13.5V9c0-.943 0-1.414-.293-1.707S7.943 7 7 7H5c-.943 0-1.414 0-1.707.293S3 8.057 3 9v9c0 1.886 0 2.828.586 3.414S5.114 22 7 22h2m0-8.5l3.317-1.658c1.1-.55 1.65-.826 2.077-.643a1 1 0 0 1 .252.155c.354.3.354.915.354 2.146l3.106-1.553c1.297-.648 1.945-.973 2.42-.68s.474 1.019.474 2.47V18c0 1.886 0 2.828-.586 3.414S18.886 22 17 22H9m0-8.5V22M3 10h6m4-8H8c-.943 0-1.414 0-1.707.293S6 3.057 6 4m10-2h1m-6 3h6" color="currentColor"></svg:path>`,
})
export class HugeiconsFactoryIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsFactory01Icon],svg[hugeicons-factory-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M3 21c1.5-3 2.5-7 2.5-13h7c0 6 1 10 2.5 13M12 4.265c1.17-1.637 2.668-1.637 3.838 0c.706 1.004 1.618.967 2.341-.037c1.153-1.637 2.65-1.637 3.821 0"></svg:path><svg:path d="M12.85 12.071h3.554c.14 1.838-.014 5.045 3.291 8.749M2 21h19"></svg:path></svg:g>`,
})
export class HugeiconsFactory01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsFactory02Icon],svg[hugeicons-factory-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.057 19.874L4.005 4.701C4.183 3.314 4.535 3 5.956 3s1.774.314 1.952 1.7L10 21H3.06c-.535 0-.802 0-.953-.17c-.151-.169-.117-.431-.05-.956M10.154 21H21c.471 0 .707 0 .854-.146C22 20.707 22 20.47 22 20V7l-4.36 3.633c-.71.592-1.064.887-1.352.752S16 10.79 16 9.865V7l-4.448 3.235c-.522.38-.782.569-1.084.667C10.167 11 9.844 11 9.2 11H9M4 6h4m4 9h2m3 0h2" color="currentColor"></svg:path>`,
})
export class HugeiconsFactory02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsFahrenheitIcon],svg[hugeicons-fahrenheit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:circle cx="5" cy="6" r="2"></svg:circle><svg:path d="M21 4h-3c-2.828 0-4.243 0-5.121.879C12 5.757 12 7.172 12 10v10m0-8h7"></svg:path></svg:g>`,
})
export class HugeiconsFahrenheitIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsFallingStarIcon],svg[hugeicons-falling-star-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m9.037 10.867l1.055 2.129c.144.296.528.58.852.635l1.914.32c1.224.206 1.512 1.101.63 1.984L12 17.435c-.252.255-.39.745-.312 1.096l.426 1.857c.336 1.47-.438 2.038-1.728 1.27l-1.793-1.07c-.324-.195-.858-.195-1.188 0l-1.794 1.07c-1.284.768-2.064.193-1.728-1.27l.426-1.858c.078-.35-.06-.84-.312-1.094l-1.488-1.5c-.876-.884-.594-1.779.63-1.985l1.914-.32c.318-.055.702-.339.846-.635l1.056-2.13c.576-1.155 1.512-1.155 2.082 0M22 2l-8 8m2-8l-5 5m9 3l-3 3" color="currentColor"></svg:path>`,
})
export class HugeiconsFallingStarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsFan01Icon],svg[hugeicons-fan-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M9.263 12.246c-2.07-.191-4.623-.123-6.027.688l-.148.086c-.46.265-.8.703-.83 1.233c-.043.795.05 2.073.813 3.395c1.354 2.345 3.704 3.423 4.699 3.791c.296.11.62.066.893-.091c.503-.29.717-.902.584-1.468c-.37-1.58-.454-3.85.732-5.615a2.5 2.5 0 0 1-.716-2.02m4.898.919a2.5 2.5 0 0 1-1.29 1.572c.868 1.904 2.219 4.123 3.64 4.943l.148.086c.46.265 1.01.34 1.483.1a6.13 6.13 0 0 0 2.534-2.4c1.354-2.345 1.113-4.92.934-5.965a1.05 1.05 0 0 0-.526-.727c-.503-.291-1.139-.17-1.563.227c-1.208 1.134-3.187 2.368-5.36 2.164m-2.989-3.096a2.5 2.5 0 0 1 2.16.497C14.532 8.867 15.75 6.622 15.75 5v-.17c0-.53-.21-1.044-.654-1.334A6.13 6.13 0 0 0 11.75 2.5c-2.708 0-4.817 1.497-5.633 2.174a1.05 1.05 0 0 0-.367.82c0 .58.422 1.07.979 1.239c1.525.46 3.486 1.492 4.443 3.335"></svg:path><svg:path d="M14.25 12.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0"></svg:path></svg:g>`,
})
export class HugeiconsFan01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsFan02Icon],svg[hugeicons-fan-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M9.58 12.629A5.05 5.05 0 0 0 7 17.042a5.04 5.04 0 0 0 3.053 4.645c.701.3 1.052.45 1.5.15s.447-.79.447-1.77V14.5a2.5 2.5 0 0 1-2.42-1.871M9.5 12H3.933c-.98 0-1.47 0-1.77-.448c-.3-.447-.15-.798.15-1.5A5.04 5.04 0 0 1 6.958 7c1.9 0 3.553 1.041 4.413 2.58A2.5 2.5 0 0 0 9.5 12M12 9.5V3.933c0-.98 0-1.47.448-1.77c.447-.3.798-.15 1.5.15A5.04 5.04 0 0 1 17 6.958c0 1.9-1.041 3.553-2.58 4.413A2.5 2.5 0 0 0 12 9.5m.629 4.92A2.5 2.5 0 0 0 14.5 12h5.567c.98 0 1.47 0 1.77.448c.3.447.15.798-.15 1.5A5.04 5.04 0 0 1 17.042 17a5.05 5.05 0 0 1-4.413-2.58"></svg:path><svg:path d="M14.5 12a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0"></svg:path></svg:g>`,
})
export class HugeiconsFan02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsFastWindIcon],svg[hugeicons-fast-wind-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2 5.941c3.5 3.432 8.576 1.961 9.732 0c.17-.288.268-.623.268-.98C12 3.878 11.105 3 10 3s-2 .878-2 1.961m9 3.967C17 7.311 18.12 6 19.5 6S22 7.311 22 8.928a3.23 3.23 0 0 1-.585 1.883C19.346 14.191 9.276 12.916 4 11.856m9.085 8.031c.206.649.762 1.113 1.415 1.113c.828 0 1.5-.747 1.5-1.669c0-.313-.078-.607-.213-.857C14.5 15.992 8 14.324 2 18.774M19 15.5h2" color="currentColor"></svg:path>`,
})
export class HugeiconsFastWindIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsFavouriteIcon],svg[hugeicons-favourite-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.463 3.994c-2.682-1.645-5.023-.982-6.429.074c-.576.433-.864.65-1.034.65s-.458-.217-1.034-.65C9.56 3.012 7.219 2.349 4.537 3.994C1.018 6.153.222 13.274 8.34 19.284C9.886 20.427 10.659 21 12 21s2.114-.572 3.66-1.717c8.118-6.008 7.322-13.13 3.803-15.289" color="currentColor"></svg:path>`,
})
export class HugeiconsFavouriteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsFavouriteCircleIcon],svg[hugeicons-favourite-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M8.269 8.497c1.34-.822 2.51-.49 3.214.037c.288.216.432.325.517.325s.229-.109.517-.325c.703-.528 1.874-.86 3.214-.037c1.76 1.08 2.158 4.64-1.9 7.645c-.774.572-1.16.858-1.831.858c-.67 0-1.057-.286-1.83-.858c-4.06-3.005-3.661-6.566-1.901-7.645"></svg:path><svg:path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10s10-4.477 10-10"></svg:path></svg:g>`,
})
export class HugeiconsFavouriteCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsFavouriteSquareIcon],svg[hugeicons-favourite-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M7.769 7.997c1.34-.822 2.51-.49 3.214.037c.288.216.432.325.517.325s.229-.109.517-.325c.703-.528 1.874-.86 3.214-.037c1.76 1.08 2.158 4.64-1.9 7.645c-.774.572-1.16.858-1.831.858c-.67 0-1.057-.286-1.83-.858c-4.06-3.005-3.661-6.566-1.901-7.645"></svg:path><svg:path d="M2 12c0-4.478 0-6.718 1.391-8.109S7.021 2.5 11.5 2.5c4.478 0 6.718 0 8.109 1.391S21 7.521 21 12c0 4.478 0 6.718-1.391 8.109S15.979 21.5 11.5 21.5c-4.478 0-6.718 0-8.109-1.391S2 16.479 2 12"></svg:path></svg:g>`,
})
export class HugeiconsFavouriteSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsFeatherIcon],svg[hugeicons-feather-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.686 17c1.635 0 2.453 0 3.188-.305c.735-.304 1.313-.882 2.47-2.038l4.414-4.414a4.243 4.243 0 1 0-6-6L9.343 8.657c-1.156 1.156-1.734 1.734-2.038 2.47C7 11.86 7 12.678 7 14.313V17zM3 21L15 9m-3 3h2.5" color="currentColor"></svg:path>`,
})
export class HugeiconsFeatherIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsFemale02Icon],svg[hugeicons-female-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.103 22.504H3.913c-.53 0-1.03-.24-1.34-.64a1.49 1.49 0 0 1-.27-1.29a4.85 4.85 0 0 1 3.27-3.43l3.18-.96v-.95c-1.08-.17-2.09-.43-3.01-.77a.747.747 0 0 1-.41-1.04c.45-.9.92-2.27.92-5.57c0-4.03 2.36-5.26 3.37-5.6c1.67-.56 3.59-.18 4.68.88c.95-.09 1.7.1 2.26.59c1.19 1.01 1.19 2.92 1.19 5.13s.6 3.95.92 4.58a.746.746 0 0 1-.41 1.04c-.92.34-1.93.6-3.01.77v.95l3.18.96c1.61.49 2.86 1.8 3.27 3.42c.11.45.01.92-.27 1.29c-.31.4-.81.64-1.34.64zm-13.07-9.18c.79.24 1.66.41 2.57.53c.38.05.66.37.66.74v2.16c0 .33-.22.62-.53.72l-3.72 1.12c-1.1.33-1.97 1.24-2.25 2.36c0 .01.07.06.16.06h16.19c.09 0 .15-.04.16-.06a3.37 3.37 0 0 0-2.25-2.35l-3.71-1.12a.75.75 0 0 1-.53-.72v-2.16c0-.38.28-.7.66-.74c.92-.12 1.79-.29 2.59-.53c-.36-1.01-.75-2.61-.75-4.46s0-3.42-.66-3.98c-.29-.24-.78-.31-1.47-.2a.72.72 0 0 1-.72-.29c-.53-.7-1.99-1.15-3.31-.7c-1.51.51-2.35 2-2.35 4.18c0 2.82-.33 4.4-.73 5.46z" color="currentColor"></svg:path>`,
})
export class HugeiconsFemale02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsFemaleSymbolIcon],svg[hugeicons-female-symbol-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 23c-.41 0-.75-.34-.75-.75V20H9c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2.25v-3.54c-3.37-.37-6-3.24-6-6.71C5.25 4.53 8.28 1.5 12 1.5s6.75 3.03 6.75 6.75c0 3.47-2.63 6.33-6 6.71v3.54H15c.41 0 .75.34.75.75s-.34.75-.75.75h-2.25v2.25c0 .41-.34.75-.75.75m0-20a5.25 5.25 0 1 0 0 10.5A5.25 5.25 0 1 0 12 3" color="currentColor"></svg:path>`,
})
export class HugeiconsFemaleSymbolIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsFencingIcon],svg[hugeicons-fencing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m6.887 15.6l-4.164 2.99q-.232.165-.417.383c-.972 1.145.58 2.693 1.724 1.72q.213-.182.376-.41l2.978-4.184m1.628-2.093c-1.956-1.96-4.069-.352-4.069-.352l4.372 4.38s1.654-2.068-.303-4.028m0 0L20 3m-2.887 12.6l4.164 2.99q.232.165.417.383c.972 1.145-.58 2.693-1.724 1.72a2.3 2.3 0 0 1-.376-.41l-2.979-4.184m-1.627-2.093c1.956-1.96 4.069-.352 4.069-.352l-2.21 2.214l-2.162 2.165s-1.654-2.067.303-4.027m0 0L4 3" color="currentColor"></svg:path>`,
})
export class HugeiconsFencingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsFencingMaskIcon],svg[hugeicons-fencing-mask-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M12 20c3.5 0 8-5.706 8-10.159C20 4.644 16.57 1.983 12 2c-4.572.017-8 2.644-8 7.841C4 14.294 8.5 20 12 20m0-18v18"></svg:path><svg:path d="M4.5 8c3.5 2 11.5 2 15 0m-15 5c3.5 2 11.5 2 15 0M6 16c0 2.4-1 4.8-3 6m15-6c0 2.4 1 4.8 3 6"></svg:path></svg:g>`,
})
export class HugeiconsFencingMaskIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsFerrisWheelIcon],svg[hugeicons-ferris-wheel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:circle cx="12" cy="12" r="6"></svg:circle><svg:path d="m8 22l2.684-7.648C11.234 12.784 11.51 12 12 12s.765.784 1.316 2.352L16 22M14 4a2 2 0 1 1-4 0a2 2 0 0 1 4 0m5 6a2 2 0 1 1 0-4a2 2 0 0 1 0 4M7 16a2 2 0 1 1-4 0a2 2 0 0 1 4 0m0-8.25a2 2 0 1 1-4 0a2 2 0 0 1 4 0M21 16a2 2 0 1 1-4 0a2 2 0 0 1 4 0"></svg:path></svg:g>`,
})
export class HugeiconsFerrisWheelIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsFerryBoatIcon],svg[hugeicons-ferry-boat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M19.02 14.303L17.81 17m1.21-2.697H16m3.02 0c.765-1.703 1.147-2.555.91-3.33a2 2 0 0 0-.079-.216c-.318-.741-1.142-1.098-2.791-1.813L14.2 7.706C13.115 7.236 12.571 7 12 7s-1.115.235-2.201.706L6.94 8.944c-1.649.715-2.473 1.072-2.791 1.813a2 2 0 0 0-.08.217c-.236.774.146 1.626.91 3.33M6.19 17l-1.21-2.697m0 0H8"></svg:path><svg:path d="M18 9V8c0-1.886 0-2.828-.586-3.414S15.886 4 14 4h-4c-1.886 0-2.828 0-3.414.586S6 6.114 6 8v1m6-5V2M2 21.193c.685 1.051 1.571 1.051 2.273 0c2.257-3.452 4.407 2.483 6 .04c2.43-3.664 4.178 2.689 6-.04c2.376-3.635 3.857 2.385 5.727.391"></svg:path></svg:g>`,
})
export class HugeiconsFerryBoatIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsFigmaIcon],svg[hugeicons-figma-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:circle cx="15" cy="12" r="3"></svg:circle><svg:path d="M9 21a3 3 0 0 0 3-3v-3H9a3 3 0 1 0 0 6m3-12v6H9a3 3 0 1 1 0-6zm0-6v6H9a3 3 0 0 1 0-6zm0 0v6h3a3 3 0 1 0 0-6z"></svg:path></svg:g>`,
})
export class HugeiconsFigmaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsFile01Icon],svg[hugeicons-file-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M3.5 10c0-3.771 0-5.657 1.245-6.828S7.993 2 12 2h.773c3.26 0 4.892 0 6.024.798c.324.228.612.5.855.805c.848 1.066.848 2.6.848 5.67v2.545c0 2.963 0 4.445-.469 5.628c-.754 1.903-2.348 3.403-4.37 4.113c-1.257.441-2.83.441-5.98.441c-1.798 0-2.698 0-3.416-.252c-1.155-.406-2.066-1.263-2.497-2.35c-.268-.676-.268-1.523-.268-3.216z"></svg:path><svg:path d="M20.5 12a3.333 3.333 0 0 1-3.333 3.333c-.666 0-1.451-.116-2.098.057a1.67 1.67 0 0 0-1.179 1.179c-.173.647-.057 1.432-.057 2.098A3.333 3.333 0 0 1 10.5 22M8 7h7m-7 4h3"></svg:path></svg:g>`,
})
export class HugeiconsFile01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsFile02Icon],svg[hugeicons-file-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M16 17H9m7-4h-3m7.5 1c0 3.771 0 5.657-1.245 6.828S16.007 22 12 22h-.773c-3.26 0-4.892 0-6.024-.798a4.1 4.1 0 0 1-.855-.805c-.848-1.066-.848-2.6-.848-5.67v-2.545c0-2.963 0-4.445.469-5.628c.754-1.903 2.348-3.403 4.37-4.113C9.595 2 11.168 2 14.318 2c1.798 0 2.698 0 3.416.252c1.155.406 2.066 1.263 2.497 2.35c.268.676.268 1.523.268 3.216z"></svg:path><svg:path d="M3.5 12a3.333 3.333 0 0 1 3.333-3.333c.666 0 1.451.116 2.098-.057a1.67 1.67 0 0 0 1.179-1.18c.173-.647.057-1.432.057-2.098A3.333 3.333 0 0 1 13.5 2"></svg:path></svg:g>`,
})
export class HugeiconsFile02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsFileAddIcon],svg[hugeicons-file-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M13 2h.273c3.26 0 4.892 0 6.024.798c.324.228.612.5.855.805c.848 1.066.848 2.6.848 5.67v2.545c0 2.963 0 4.445-.469 5.628c-.754 1.903-2.348 3.403-4.37 4.113c-1.257.441-2.83.441-5.98.441c-1.798 0-2.698 0-3.416-.252c-1.155-.406-2.066-1.263-2.497-2.35C4 18.722 4 17.875 4 16.182V12"></svg:path><svg:path d="M21 12a3.333 3.333 0 0 1-3.333 3.333c-.666 0-1.451-.116-2.098.057a1.67 1.67 0 0 0-1.179 1.179c-.173.647-.057 1.432-.057 2.098A3.333 3.333 0 0 1 11 22m0-16H3m4-4v8"></svg:path></svg:g>`,
})
export class HugeiconsFileAddIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsFileAttachmentIcon],svg[hugeicons-file-attachment-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M3.5 8.23V5.463C3.5 3.55 5.067 2 7 2s3.5 1.55 3.5 3.462v3.807A1.74 1.74 0 0 1 8.75 11A1.74 1.74 0 0 1 7 9.27V5.461"></svg:path><svg:path d="M12.5 2h.273c3.26 0 4.892 0 6.024.798c.324.228.612.5.855.805c.848 1.066.848 2.6.848 5.67v2.545c0 2.963 0 4.445-.469 5.628c-.754 1.903-2.348 3.403-4.37 4.113c-1.257.441-2.83.441-5.98.441c-1.798 0-2.698 0-3.416-.252c-1.155-.406-2.066-1.263-2.497-2.35c-.268-.676-.268-1.523-.268-3.216V12"></svg:path><svg:path d="M20.5 12a3.333 3.333 0 0 1-3.333 3.333c-.666 0-1.451-.116-2.098.057a1.67 1.67 0 0 0-1.179 1.179c-.173.647-.057 1.432-.057 2.098A3.333 3.333 0 0 1 10.5 22"></svg:path></svg:g>`,
})
export class HugeiconsFileAttachmentIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsFileAudioIcon],svg[hugeicons-file-audio-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M21 19.083v-3.166c0-1.769 0-2.653-.54-2.873s-1.176.405-2.447 1.656c-.662.651-1.047.791-1.971.791c-.82 0-1.229 0-1.523.194c-.604.396-.519 1.178-.519 1.815s-.085 1.419.519 1.815c.294.194.704.194 1.523.194c.924 0 1.309.14 1.97.791c1.272 1.251 1.908 1.877 2.448 1.656c.54-.22.54-1.104.54-2.873"></svg:path><svg:path d="M12 22h-1.273c-3.26 0-4.892 0-6.024-.798a4.1 4.1 0 0 1-.855-.805C3 19.331 3 17.797 3 14.727v-2.545c0-2.963 0-4.445.469-5.628c.754-1.903 2.348-3.403 4.37-4.113C9.095 2 10.668 2 13.818 2c1.798 0 2.698 0 3.416.252c1.155.406 2.066 1.263 2.497 2.35C20 5.278 20 6.125 20 7.818V10"></svg:path><svg:path d="M3 12a3.333 3.333 0 0 1 3.333-3.333c.666 0 1.451.116 2.098-.057A1.67 1.67 0 0 0 9.61 7.43c.173-.647.057-1.432.057-2.098A3.333 3.333 0 0 1 13 2"></svg:path></svg:g>`,
})
export class HugeiconsFileAudioIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[hugeiconsFileBitcoinIcon],svg[hugeicons-file-bitcoin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M16.002 17.5h3.5m-3.5 0V15c0-.471 0-.707.146-.854c.147-.146.383-.146.854-.146h1m-2 3.5V20c0 .471 0 .707.146.854c.147.146.383.146.854.146h1m1.5-3.5c.828 0 1.5-.784 1.5-1.75S20.33 14 19.502 14h-1.5m1.5 3.5c.828 0 1.5.784 1.5 1.75S20.33 21 19.502 21h-1.5m0 0v1m0-8v-1"></svg:path><svg:path d="M13 22h-2.273c-3.26 0-4.892 0-6.024-.798a4.1 4.1 0 0 1-.855-.805C3 19.331 3 17.797 3 14.727v-2.545c0-2.963 0-4.445.469-5.628c.754-1.903 2.348-3.403 4.37-4.113C9.095 2 10.668 2 13.818 2c1.798 0 2.698 0 3.416.252c1.155.406 2.066 1.263 2.497 2.35C20 5.278 20 6.125 20 7.818V10"></svg:path><svg:path d="M3 12a3.333 3.333 0 0 1 3.333-3.333c.666 0 1.451.116 2.098-.057A1.67 1.67 0 0 0 9.61 7.43c.173-.647.057-1.432.057-2.098A3.333 3.333 0 0 1 13 2"></svg:path></svg:g>`,
})
export class HugeiconsFileBitcoinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
