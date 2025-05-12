import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarHikingBoldDuotoneIcon],svg[solar-hiking-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 4.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M19 7.25a.75.75 0 0 1 .75.75v14a.75.75 0 0 1-1.5 0v-9.899c-.485.405-.87.72-1.307.879a2.75 2.75 0 0 1-1.886 0c-.453-.165-.85-.497-1.36-.923l-.093-.077l-.081-.068a6 6 0 0 0-.47-.37a5.3 5.3 0 0 0-1.2-.587a8 8 0 0 0-.386-.09a1 1 0 0 0-.092-.014l-.019.008a.5.5 0 0 0-.191.143a.3.3 0 0 0-.012.048c-.01.053-.017.124-.031.27l-.162 1.623c-.094.934-.105 1.184-.04 1.393q.059.184.169.342c.125.18.33.324 1.126.822l.105.066c.796.496 1.347.84 1.745 1.335q.3.375.498.812c.261.579.318 1.226.401 2.16l.011.125l.172 1.935a.75.75 0 0 1-1.494.134l-.172-1.936c-.098-1.107-.142-1.483-.285-1.802a2.3 2.3 0 0 0-.3-.487c-.219-.273-.534-.481-1.476-1.07l-.112-.07c-.63-.393-1.126-.702-1.45-1.165a2.8 2.8 0 0 1-.369-.754c-.169-.539-.11-1.12-.035-1.859l.013-.13l.162-1.622l.005-.048c.022-.23.047-.485.17-.752c.135-.297.373-.53.594-.686s.52-.302.846-.33c.184-.016.356.008.505.036c.144.028.316.07.507.118l.026.006l.018.005l.029.008c.008.003.042.014.082.032l.02.009l.054.019a6.8 6.8 0 0 1 1.425.72c.205.144.342.258.561.44l.012.01l.082.069c.648.54.832.68 1.006.743c.277.1.58.1.858 0c.174-.064.358-.203 1.007-.743l.814-.68V8a.75.75 0 0 1 .75-.75m-6.63 3.697l.005-.003zm-.541-1.4h.002l.007-.003z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M8.712 9.763a.75.75 0 0 1-.475.949l-1.672.557A1.19 1.19 0 0 0 5.75 12.4c0 .084.047.16.122.198l2.463 1.231a.75.75 0 1 1-.67 1.342L5.2 13.939a1.72 1.72 0 0 1-.95-1.539c0-1.159.742-2.187 1.84-2.554l1.673-.557a.75.75 0 0 1 .949.474m.704 7.113a.75.75 0 0 1 .208 1.04l-3 4.5a.75.75 0 1 1-1.248-.832l3-4.5a.75.75 0 0 1 1.04-.208" opacity=".5"></svg:path>`,
})
export class SolarHikingBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHikingLineDuotoneIcon],svg[solar-hiking-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="11.5" cy="4.5" r="2.5" stroke="currentColor" stroke-width="1.5"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M9 17.5L6 22" opacity=".5"></svg:path><svg:path fill="currentColor" d="m10.375 11.246l.747.074zm-.162 1.622l.747.074zm3.79-1.533l-.48.577zm.081.068l.48-.576zm3.832 0l-.48-.576zm1.564-.327a.75.75 0 0 0-.96-1.152zm-5.252 8.988l.747-.067zm-.575 2.002a.75.75 0 1 0 1.495-.133zm1.661-9.791l-.257.704zm1.372 0l.257.704zm-4.592-2.033l-.18.728zm.148.056l-.242.71zm1.24.627l.428-.615zm-1.665 5.21l.398-.636zm1.664 1.236l-.584.47zm.398.65l-.683.307zm-3.674-3.462l-.716.224zm.269.548l-.615.43zm.011-4.423l.683.311zm.824-.581l-.065-.747zm-1.68 1.068l-.162 1.622l1.492.15l.163-1.623zm3.894.74l.081.069l.96-1.153l-.08-.068zm4.873.069l1.084-.904l-.96-1.152l-1.084.903zm-4.915 8.15l.172 1.936l1.495-.133l-.173-1.936zm.123-8.15c.555.462.973.824 1.453 1l.514-1.41c-.174-.063-.358-.202-1.006-.743zm3.832-1.153c-.649.54-.833.68-1.007.743l.514 1.41c.48-.176.898-.538 1.453-1zm-2.379 2.153a2.75 2.75 0 0 0 1.886 0l-.514-1.41a1.25 1.25 0 0 1-.858 0zm-3.143-2.01h.002q.002 0 0 0zl-.01-.003l-.026-.007a.6.6 0 0 1-.126-.053a.76.76 0 0 1-.305-.3a.75.75 0 0 1 .391-1.063a.7.7 0 0 0-.217.127a.753.753 0 0 0-.124 1.016a.76.76 0 0 0 .375.275l.128.046l.485-1.42l-.081-.028l.008.003a1 1 0 0 1 .082.043a.7.7 0 0 1 .148.118a.75.75 0 0 1-.229 1.204l-.043.018l.033-.013c.014-.007.058-.026.11-.06a.75.75 0 0 0 .34-.649a.75.75 0 0 0-.442-.664c-.04-.018-.074-.028-.082-.031l-.029-.008l-.018-.005l-.008-.002zm2.57-.21a8 8 0 0 0-.574-.45l-.857 1.23c.148.104.238.179.47.372zM12 11.007a5.3 5.3 0 0 1 1.053.533l.857-1.231a6.8 6.8 0 0 0-1.425-.722zm-.58 5.763c.942.59 1.257.798 1.477 1.07l1.168-.94c-.415-.516-.997-.869-1.85-1.402zm3.555 3.226c-.089-1.002-.14-1.68-.412-2.285l-1.367.616c.143.32.187.695.285 1.802zm-2.078-2.155q.18.224.299.486l1.367-.616a3.8 3.8 0 0 0-.498-.81zm-3.43-5.05c-.08.802-.156 1.42.022 1.991l1.432-.448c-.066-.208-.055-.458.039-1.393zm2.748 2.707c-.797-.497-1.001-.642-1.126-.821l-1.23.858c.342.49.878.809 1.56 1.235zm-2.726-.716q.127.405.37.754l1.23-.86a1.3 1.3 0 0 1-.168-.342zm1.633-3.463c.014-.146.022-.217.031-.27c.007-.039.012-.048.015-.055l-1.365-.623c-.13.286-.15.557-.174.8zm1.152-1.806q-.3-.077-.524-.122a1.8 1.8 0 0 0-.506-.036l.13 1.494c-.02.002-.005-.003.093.015c.1.02.232.052.447.105zm-1.106 1.481c-.007.016-.007.01.013-.013a.5.5 0 0 1 .175-.124c.028-.011.034-.01.018-.008l-.13-1.494a1.8 1.8 0 0 0-.846.33c-.22.155-.459.388-.595.686z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M19 22V8"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m8 10l-1.672.557A1.94 1.94 0 0 0 5 12.4a.97.97 0 0 0 .537.868L8 14.5" opacity=".5"></svg:path></svg:g>`,
})
export class SolarHikingLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHikingMinimalisticBoldDuotoneIcon],svg[solar-hiking-minimalistic-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 5.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M19 6.25a.75.75 0 0 1 .75.75v14a.75.75 0 0 1-1.5 0V10.994a5.88 5.88 0 0 1-5.636.15a1.098 1.098 0 0 0-1.658.832l-.069.686a1.54 1.54 0 0 0 .715 1.455l.333.208a6.59 6.59 0 0 1 3.07 5.001l.142 1.607a.75.75 0 0 1-1.494.134l-.143-1.608a5.09 5.09 0 0 0-2.37-3.862l-.333-.208a3.04 3.04 0 0 1-1.412-2.876l.069-.687c.188-1.885 2.264-2.938 3.894-1.986a4.38 4.38 0 0 0 4.738-.563l.154-.128V7a.75.75 0 0 1 .75-.75" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M9.19 15.775a.75.75 0 0 1 .535.916v.002l-.001.005l-.005.016l-.016.058q-.02.076-.06.207c-.05.174-.125.415-.219.686c-.181.525-.456 1.223-.796 1.745c-.357.548-.918 1.101-1.35 1.493a16 16 0 0 1-.751.637l-.05.04l-.014.01l-.005.004a.75.75 0 0 1-.916-1.188l.003-.002l.01-.007l.04-.033q.056-.043.157-.126c.133-.11.317-.265.518-.447c.417-.377.856-.823 1.102-1.2c.234-.36.46-.911.635-1.416a14 14 0 0 0 .25-.804l.014-.048l.003-.011v-.002a.75.75 0 0 1 .917-.535" opacity=".5"></svg:path>`,
})
export class SolarHikingMinimalisticBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHikingMinimalisticLineDuotoneIcon],svg[solar-hiking-minimalistic-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="11.5" cy="5.5" r="2.5" stroke="currentColor" stroke-width="1.5"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M9 16.5s-.426 1.62-1 2.5c-.603.925-2 2-2 2" opacity=".5"></svg:path><svg:path fill="currentColor" d="m10.21 11.901l.746.075zm-.069.686l-.746-.075zm8.436-2.734l-.48-.576zm.903.223a.75.75 0 0 0-.96-1.152zm-8.276 4.677l-.397.636zm.333.208l.398-.636zm2.72 4.432l.747-.067zm-.604 1.674a.75.75 0 1 0 1.494-.134zM13 10.5l-.386.643l.05.028zm-3.536 1.326l-.069.686l1.492.15l.07-.686zm9.593-1.397l.423-.353l-.96-1.152l-.424.353zm-8.25 4.96l.333.208l.795-1.272l-.333-.208zm2.703 4.07l.143 1.608l1.494-.134l-.143-1.607zm-.845-8.288a5.88 5.88 0 0 0 6.392-.742l-.96-1.152a4.38 4.38 0 0 1-4.762.552zm-1.525 4.426a5.09 5.09 0 0 1 2.37 3.862l1.494-.133a6.59 6.59 0 0 0-3.07-5.001zm-1.745-3.085a3.04 3.04 0 0 0 1.412 2.877l.795-1.272a1.54 1.54 0 0 1-.715-1.455zm1.561-.536a1.098 1.098 0 0 1 1.658-.833l.772-1.286c-1.634-.98-3.733.073-3.922 1.97z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M19 21V7"></svg:path></svg:g>`,
})
export class SolarHikingMinimalisticLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHikingRoundBoldDuotoneIcon],svg[solar-hiking-round-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 4.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M19 7.25a.75.75 0 0 1 .75.75v14a.75.75 0 0 1-1.5 0V11.994a5.88 5.88 0 0 1-5.636.15a1.098 1.098 0 0 0-1.658.832l-.068.686a1.54 1.54 0 0 0 .714 1.455l.333.208a6.59 6.59 0 0 1 3.07 5.001l.142 1.607a.75.75 0 1 1-1.494.134l-.143-1.608a5.09 5.09 0 0 0-2.37-3.862l-.333-.208a3.04 3.04 0 0 1-1.412-2.876l.069-.687c.188-1.885 2.264-2.938 3.894-1.986a4.38 4.38 0 0 0 4.739-.563l.153-.128V8a.75.75 0 0 1 .75-.75" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M9.749 9.955a.75.75 0 0 1-.704.794l-2.389.143a.971.971 0 0 0-.581 1.692l2.087 1.856a.75.75 0 1 1-.997 1.12L5.08 13.705a2.471 2.471 0 0 1 1.487-4.31l2.389-.144a.75.75 0 0 1 .794.704m-.56 6.82a.75.75 0 0 1 .535.916v.002l-.001.005l-.005.016l-.016.058q-.02.076-.06.207c-.05.174-.125.415-.219.686c-.181.525-.456 1.223-.796 1.745c-.357.548-.918 1.101-1.35 1.493a16 16 0 0 1-.751.637l-.05.039l-.014.01l-.005.005a.75.75 0 0 1-.916-1.188l.003-.002l.01-.008l.04-.032l.157-.126c.133-.11.317-.265.518-.447c.417-.377.856-.823 1.102-1.2c.234-.36.46-.912.635-1.417a14 14 0 0 0 .25-.803l.014-.048l.003-.011v-.003a.75.75 0 0 1 .917-.534" opacity=".5"></svg:path>`,
})
export class SolarHikingRoundBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHikingRoundLineDuotoneIcon],svg[solar-hiking-round-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="11.5" cy="4.5" r="2.5" stroke="currentColor" stroke-width="1.5"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M9 17.5s-.426 1.62-1 2.5c-.603.925-2 2-2 2" opacity=".5"></svg:path><svg:path fill="currentColor" d="m10.21 12.901l.746.075zm-.069.686l-.746-.075zm8.436-2.734l-.48-.576zm.903.223a.75.75 0 0 0-.96-1.152zm-8.276 4.677l-.397.636zm.333.208l.398-.636zm2.72 4.432l.747-.067zm-.604 1.674a.75.75 0 1 0 1.494-.134zM13 11.5l-.386.643l.05.028zm-3.536 1.326l-.069.686l1.492.15l.07-.686zm9.593-1.397l.423-.353l-.96-1.152l-.424.353zm-8.25 4.96l.333.208l.795-1.272l-.333-.208zm2.703 4.07l.143 1.608l1.494-.134l-.143-1.607zm-.845-8.288a5.88 5.88 0 0 0 6.392-.742l-.96-1.152a4.38 4.38 0 0 1-4.762.552zm-1.525 4.426a5.09 5.09 0 0 1 2.37 3.862l1.494-.133a6.59 6.59 0 0 0-3.07-5.001zm-1.745-3.085a3.04 3.04 0 0 0 1.412 2.877l.795-1.272a1.54 1.54 0 0 1-.715-1.455zm1.561-.536a1.098 1.098 0 0 1 1.658-.833l.772-1.286c-1.634-.98-3.733.073-3.922 1.97z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M19 22V8"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m9 10l-2.389.144a1.721 1.721 0 0 0-1.035 3.001L7.665 15" opacity=".5"></svg:path></svg:g>`,
})
export class SolarHikingRoundLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHistory2BoldDuotoneIcon],svg[solar-history-2-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.25 2a.75.75 0 0 1 .75-.75c5.937 0 10.75 4.813 10.75 10.75S17.937 22.75 12 22.75S1.25 17.937 1.25 12a.75.75 0 0 1 1.5 0A9.25 9.25 0 1 0 12 2.75a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M9.1 2.398a.75.75 0 0 1-.43.97a9 9 0 0 0-.419.174a.75.75 0 1 1-.608-1.371q.24-.107.487-.203a.75.75 0 0 1 .97.43M5.648 4.241a.75.75 0 0 1-.026 1.06q-.165.158-.32.321a.75.75 0 1 1-1.087-1.034q.182-.191.373-.373a.75.75 0 0 1 1.06.026M3.161 7.26a.75.75 0 0 1 .38.99q-.091.207-.173.42a.75.75 0 0 1-1.4-.54q.096-.248.203-.488a.75.75 0 0 1 .99-.381" clip-rule="evenodd" opacity=".5"></svg:path><svg:path fill="currentColor" d="M12 8.25a.75.75 0 0 1 .75.75v3.25H16a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75V9a.75.75 0 0 1 .75-.75" opacity=".5"></svg:path>`,
})
export class SolarHistory2BoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHistory2LineDuotoneIcon],svg[solar-history-2-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M2 12c0 5.523 4.477 10 10 10s10-4.477 10-10S17.523 2 12 2"></svg:path><svg:path stroke-linejoin="round" d="M12 9v4h4" opacity=".5"></svg:path><svg:circle cx="12" cy="12" r="10" stroke-dasharray=".5 3.5" opacity=".5"></svg:circle></svg:g>`,
})
export class SolarHistory2LineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHistory3BoldDuotoneIcon],svg[solar-history-3-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M12 2.75A9.25 9.25 0 0 1 21.25 12a.75.75 0 0 0 1.5 0c0-5.937-4.813-10.75-10.75-10.75a.75.75 0 0 0 0 1.5m0 5.5a.75.75 0 0 1 .75.75v3.25H16a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75V9a.75.75 0 0 1 .75-.75"></svg:path><svg:path d="M9.1 2.398a.75.75 0 0 1-.43.97a9 9 0 0 0-.42.174a.75.75 0 1 1-.608-1.371q.24-.107.488-.203a.75.75 0 0 1 .97.43M5.648 4.241a.75.75 0 0 1-.026 1.06q-.165.158-.321.321a.75.75 0 1 1-1.087-1.034q.183-.191.373-.373a.75.75 0 0 1 1.06.026M3.16 7.26a.75.75 0 0 1 .381.99q-.092.207-.174.42a.75.75 0 0 1-1.399-.54q.094-.248.202-.488a.75.75 0 0 1 .99-.381m-1.139 3.744a.75.75 0 0 1 .732.768a10 10 0 0 0 0 .456a.75.75 0 1 1-1.5.036a11 11 0 0 1 0-.529a.75.75 0 0 1 .768-.731M21.603 14.9a.75.75 0 0 1 .429.97q-.095.247-.202.487a.75.75 0 1 1-1.371-.608q.092-.207.174-.42a.75.75 0 0 1 .97-.429m-19.205 0a.75.75 0 0 1 .97.43q.081.211.173.419a.75.75 0 1 1-1.37.608q-.108-.24-.203-.487a.75.75 0 0 1 .43-.97m17.362 3.452c.3.285.311.76.026 1.06a11 11 0 0 1-.373.373a.75.75 0 1 1-1.035-1.086q.165-.157.321-.321a.75.75 0 0 1 1.06-.026m-15.52 0a.75.75 0 0 1 1.06.026q.157.165.322.32a.75.75 0 0 1-1.035 1.087a11 11 0 0 1-.373-.373a.75.75 0 0 1 .026-1.06M7.26 20.84a.75.75 0 0 1 .99-.382q.207.093.419.174a.75.75 0 0 1-.54 1.4a11 11 0 0 1-.488-.203a.75.75 0 0 1-.381-.99m9.478 0a.75.75 0 0 1-.381.99q-.24.106-.488.202a.75.75 0 0 1-.54-1.4q.211-.081.42-.174a.75.75 0 0 1 .989.382m-5.735 1.139a.75.75 0 0 1 .768-.732a10 10 0 0 0 .456 0a.75.75 0 0 1 .036 1.5a11 11 0 0 1-.528 0a.75.75 0 0 1-.732-.768" opacity=".5"></svg:path></svg:g>`,
})
export class SolarHistory3BoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHistory3LineDuotoneIcon],svg[solar-history-3-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-dasharray=".5 3.5" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10Z" opacity=".5"></svg:path><svg:path d="M22 12c0-5.523-4.477-10-10-10"></svg:path><svg:path stroke-linejoin="round" d="M12 9v4h4"></svg:path></svg:g>`,
})
export class SolarHistory3LineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHistoryBoldDuotoneIcon],svg[solar-history-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.079 5.069c3.795-3.79 9.965-3.75 13.783.069c3.82 3.82 3.86 9.993.064 13.788s-9.968 3.756-13.788-.064a9.81 9.81 0 0 1-2.798-8.28a.75.75 0 1 1 1.487.203a8.31 8.31 0 0 0 2.371 7.017c3.245 3.244 8.468 3.263 11.668.064c3.199-3.2 3.18-8.423-.064-11.668c-3.243-3.242-8.463-3.263-11.663-.068l.748.003a.75.75 0 1 1-.007 1.5l-2.546-.012a.75.75 0 0 1-.746-.747L3.575 4.33a.75.75 0 1 1 1.5-.008z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M12 7.25a.75.75 0 0 1 .75.75v3.69l2.28 2.28a.75.75 0 1 1-1.06 1.06l-2.427-2.426a1 1 0 0 1-.293-.708V8a.75.75 0 0 1 .75-.75" opacity=".5"></svg:path>`,
})
export class SolarHistoryBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHistoryLineDuotoneIcon],svg[solar-history-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8v4l2.5 2.5" opacity=".5"></svg:path><svg:path fill="currentColor" d="m5.604 5.604l-.53-.53zM4.338 6.871l-.75.003a.75.75 0 0 0 .746.747zm2.542.762a.75.75 0 1 0 .007-1.5zM5.075 4.321a.75.75 0 1 0-1.5.008zm-1.248 6.464a.75.75 0 1 0-1.486-.204zm15.035-5.647c-3.82-3.82-9.993-3.86-13.788-.064l1.06 1.06c3.2-3.199 8.423-3.18 11.668.064zM5.138 18.862c3.82 3.82 9.993 3.86 13.788.064l-1.06-1.06c-3.2 3.199-8.423 3.18-11.668-.064zm13.788.064c3.795-3.795 3.756-9.968-.064-13.788l-1.06 1.06c3.244 3.245 3.263 8.468.064 11.668zM5.074 5.074L3.807 6.34L4.868 7.4l1.266-1.266zm-.74 2.547l2.546.012l.007-1.5l-2.545-.012zm.754-.754L5.075 4.32l-1.5.008l.013 2.545zM2.34 10.58a9.81 9.81 0 0 0 2.797 8.281l1.06-1.06a8.31 8.31 0 0 1-2.371-7.017z"></svg:path></svg:g>`,
})
export class SolarHistoryLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHome2BoldDuotoneIcon],svg[solar-home-2-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 12.204c0-2.289 0-3.433.52-4.381c.518-.949 1.467-1.537 3.364-2.715l2-1.241C9.889 2.622 10.892 2 12 2s2.11.622 4.116 1.867l2 1.241c1.897 1.178 2.846 1.766 3.365 2.715S22 9.915 22 12.203v1.522c0 3.9 0 5.851-1.172 7.063S17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.212S2 17.626 2 13.725z" opacity=".5"></svg:path><svg:path fill="currentColor" d="M11.25 18a.75.75 0 0 0 1.5 0v-3a.75.75 0 0 0-1.5 0z"></svg:path>`,
})
export class SolarHome2BoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHome2LineDuotoneIcon],svg[solar-home-2-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 12.204c0-2.289 0-3.433.52-4.381c.518-.949 1.467-1.537 3.364-2.715l2-1.241C9.889 2.622 10.892 2 12 2s2.11.622 4.116 1.867l2 1.241c1.897 1.178 2.846 1.766 3.365 2.715S22 9.915 22 12.203v1.522c0 3.9 0 5.851-1.172 7.063S17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.212S2 17.626 2 13.725z" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="M12 15v3"></svg:path></svg:g>`,
})
export class SolarHome2LineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHomeAddAngleBoldDuotoneIcon],svg[solar-home-add-angle-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.106 22h-2.212c-3.447 0-5.17 0-6.345-1.012s-1.419-2.705-1.906-6.093l-.279-1.937c-.38-2.637-.57-3.956-.029-5.083s1.691-1.813 3.992-3.183l1.385-.825C9.8 2.622 10.846 2 12 2s2.199.622 4.288 1.867l1.385.825c2.3 1.37 3.451 2.056 3.992 3.183s.35 2.446-.03 5.083l-.278 1.937c-.487 3.388-.731 5.081-1.906 6.093S16.553 22 13.106 22" opacity=".5"></svg:path><svg:path fill="currentColor" d="M12 9.25a.75.75 0 0 1 .75.75v2.25H15a.75.75 0 0 1 0 1.5h-2.25V16a.75.75 0 0 1-1.5 0v-2.25H9a.75.75 0 0 1 0-1.5h2.25V10a.75.75 0 0 1 .75-.75"></svg:path>`,
})
export class SolarHomeAddAngleBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHomeAddAngleLineDuotoneIcon],svg[solar-home-add-angle-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2.364 12.958c-.38-2.637-.57-3.956-.029-5.083s1.691-1.813 3.992-3.183l1.385-.825C9.8 2.622 10.846 2 12 2s2.199.622 4.288 1.867l1.385.825c2.3 1.37 3.451 2.056 3.992 3.183s.35 2.446-.03 5.083l-.278 1.937c-.487 3.388-.731 5.081-1.906 6.093S16.553 22 13.106 22h-2.212c-3.447 0-5.17 0-6.345-1.012s-1.419-2.705-1.906-6.093z" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="M15 13h-3m0 0H9m3 0v-3m0 3v3"></svg:path></svg:g>`,
})
export class SolarHomeAddAngleLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHomeAddBoldDuotoneIcon],svg[solar-home-add-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 12.204c0-2.289 0-3.433.52-4.381c.518-.949 1.467-1.537 3.364-2.715l2-1.241C9.889 2.622 10.892 2 12 2s2.11.622 4.116 1.867l2 1.241c1.897 1.178 2.846 1.766 3.365 2.715S22 9.915 22 12.203v1.522c0 3.9 0 5.851-1.172 7.063S17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.212S2 17.626 2 13.725z" opacity=".5"></svg:path><svg:path fill="currentColor" d="M12.75 11a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V17a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25z"></svg:path>`,
})
export class SolarHomeAddBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHomeAddLineDuotoneIcon],svg[solar-home-add-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 12.204c0-2.289 0-3.433.52-4.381c.518-.949 1.467-1.537 3.364-2.715l2-1.241C9.889 2.622 10.892 2 12 2s2.11.622 4.116 1.867l2 1.241c1.897 1.178 2.846 1.766 3.365 2.715S22 9.915 22 12.203v1.522c0 3.9 0 5.851-1.172 7.063S17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.212S2 17.626 2 13.725z" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="M15 14h-3m0 0H9m3 0v-3m0 3v3"></svg:path></svg:g>`,
})
export class SolarHomeAddLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHomeAngle2BoldDuotoneIcon],svg[solar-home-angle-2-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.106 22h-2.212c-3.447 0-5.17 0-6.345-1.012s-1.419-2.705-1.906-6.093l-.279-1.937c-.38-2.637-.57-3.956-.029-5.083s1.691-1.813 3.992-3.183l1.385-.825C9.8 2.622 10.846 2 12 2s2.199.622 4.288 1.867l1.385.825c2.3 1.37 3.451 2.056 3.992 3.183s.35 2.446-.03 5.083l-.278 1.937c-.487 3.388-.731 5.081-1.906 6.093S16.553 22 13.106 22" opacity=".5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12 18.75a.75.75 0 0 1-.75-.75v-3a.75.75 0 0 1 1.5 0v3a.75.75 0 0 1-.75.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarHomeAngle2BoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHomeAngle2LineDuotoneIcon],svg[solar-home-angle-2-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2.364 12.958c-.38-2.637-.57-3.956-.029-5.083s1.691-1.813 3.992-3.183l1.385-.825C9.8 2.622 10.846 2 12 2s2.199.622 4.288 1.867l1.385.825c2.3 1.37 3.451 2.056 3.992 3.183s.35 2.446-.03 5.083l-.278 1.937c-.487 3.388-.731 5.081-1.906 6.093S16.553 22 13.106 22h-2.212c-3.447 0-5.17 0-6.345-1.012s-1.419-2.705-1.906-6.093z" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="M12 15v3"></svg:path></svg:g>`,
})
export class SolarHomeAngle2LineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHomeAngleBoldDuotoneIcon],svg[solar-home-angle-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.106 22h-2.212c-3.447 0-5.17 0-6.345-1.012s-1.419-2.705-1.906-6.093l-.279-1.937c-.38-2.637-.57-3.956-.029-5.083s1.691-1.813 3.992-3.183l1.385-.825C9.8 2.622 10.846 2 12 2s2.199.622 4.288 1.867l1.385.825c2.3 1.37 3.451 2.056 3.992 3.183s.35 2.446-.03 5.083l-.278 1.937c-.487 3.388-.731 5.081-1.906 6.093S16.553 22 13.106 22" opacity=".5"></svg:path><svg:path fill="currentColor" d="M8.25 18a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75"></svg:path>`,
})
export class SolarHomeAngleBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHomeAngleLineDuotoneIcon],svg[solar-home-angle-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2.364 12.958c-.38-2.637-.57-3.956-.029-5.083s1.691-1.813 3.992-3.183l1.385-.825C9.8 2.622 10.846 2 12 2s2.199.622 4.288 1.867l1.385.825c2.3 1.37 3.451 2.056 3.992 3.183s.35 2.446-.03 5.083l-.278 1.937c-.487 3.388-.731 5.081-1.906 6.093S16.553 22 13.106 22h-2.212c-3.447 0-5.17 0-6.345-1.012s-1.419-2.705-1.906-6.093z" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="M15 18H9"></svg:path></svg:g>`,
})
export class SolarHomeAngleLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHomeBoldDuotoneIcon],svg[solar-home-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:path id="solarHomeBoldDuotone0" d="M10.75 9.5a1.25 1.25 0 1 1 2.5 0a1.25 1.25 0 0 1-2.5 0"></svg:path></svg:defs><svg:path fill="currentColor" fill-rule="evenodd" d="m21.532 11.586l-.782-.626v10.29H22a.75.75 0 0 1 0 1.5H2a.75.75 0 1 1 0-1.5h1.25V10.96l-.781.626a.75.75 0 1 1-.937-1.172l8.125-6.5a3.75 3.75 0 0 1 4.686 0l8.125 6.5a.75.75 0 1 1-.936 1.172M12 6.75a2.75 2.75 0 1 0 0 5.5a2.75 2.75 0 0 0 0-5.5m1.746 6.562c-.459-.062-1.032-.062-1.697-.062h-.098c-.665 0-1.238 0-1.697.062c-.491.066-.963.215-1.345.597s-.531.854-.597 1.345c-.062.459-.062 1.032-.062 1.697v4.299h7.5v-4.423c0-.612-.004-1.143-.062-1.573c-.066-.491-.215-.963-.597-1.345s-.853-.531-1.345-.597" clip-rule="evenodd"></svg:path><svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" opacity=".5"><svg:use href="#solarHomeBoldDuotone0"></svg:use><svg:use href="#solarHomeBoldDuotone0"></svg:use></svg:g><svg:path fill="currentColor" d="M12.05 13.25c.664 0 1.237 0 1.696.062c.492.066.963.215 1.345.597s.531.853.597 1.345c.058.43.062.96.062 1.573v4.423h-7.5v-4.3c0-.664 0-1.237.062-1.696c.066-.492.215-.963.597-1.345s.854-.531 1.345-.597c.459-.062 1.032-.062 1.697-.062zM16 3h2.5a.5.5 0 0 1 .5.5v4.14l-3.5-2.8V3.5A.5.5 0 0 1 16 3" opacity=".5"></svg:path>`,
})
export class SolarHomeBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHomeLineDuotoneIcon],svg[solar-home-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M22 22H2m0-11l8.126-6.5a3 3 0 0 1 3.748 0L22 11"></svg:path><svg:path stroke-linecap="round" d="M15.5 5.5v-2A.5.5 0 0 1 16 3h2.5a.5.5 0 0 1 .5.5v5" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="M4 22V9.5M20 22V9.5"></svg:path><svg:path d="M15 22v-5c0-1.414 0-2.121-.44-2.56C14.122 14 13.415 14 12 14s-2.121 0-2.56.44C9 14.878 9 15.585 9 17v5m5-12.5a2 2 0 1 1-4 0a2 2 0 0 1 4 0Z" opacity=".5"></svg:path></svg:g>`,
})
export class SolarHomeLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHomeSmileAngleBoldDuotoneIcon],svg[solar-home-smile-angle-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.894 22h2.212c3.447 0 5.17 0 6.345-1.012s1.419-2.705 1.906-6.093l.279-1.937c.38-2.637.57-3.956.029-5.083s-1.691-1.813-3.992-3.183l-1.385-.825C14.2 2.622 13.154 2 12 2s-2.199.622-4.288 1.867l-1.385.825c-2.3 1.37-3.451 2.056-3.992 3.183s-.35 2.446.03 5.083l.278 1.937c.487 3.388.731 5.081 1.906 6.093S7.447 22 10.894 22" opacity=".5"></svg:path><svg:path fill="currentColor" d="M9.447 15.397a.75.75 0 0 0-.894 1.205A5.77 5.77 0 0 0 12 17.75a5.77 5.77 0 0 0 3.447-1.148a.75.75 0 0 0-.894-1.205A4.27 4.27 0 0 1 12 16.25a4.27 4.27 0 0 1-2.553-.853"></svg:path>`,
})
export class SolarHomeSmileAngleBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHomeSmileAngleLineDuotoneIcon],svg[solar-home-smile-angle-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2.364 12.958c-.38-2.637-.57-3.956-.029-5.083s1.691-1.813 3.992-3.183l1.385-.825C9.8 2.622 10.846 2 12 2s2.199.622 4.288 1.867l1.385.825c2.3 1.37 3.451 2.056 3.992 3.183s.35 2.446-.03 5.083l-.278 1.937c-.487 3.388-.731 5.081-1.906 6.093S16.553 22 13.106 22h-2.212c-3.447 0-5.17 0-6.345-1.012s-1.419-2.705-1.906-6.093z" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="M9 16c.85.63 1.885 1 3 1s2.15-.37 3-1"></svg:path></svg:g>`,
})
export class SolarHomeSmileAngleLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHomeSmileBoldDuotoneIcon],svg[solar-home-smile-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 12.204c0-2.289 0-3.433.52-4.381c.518-.949 1.467-1.537 3.364-2.715l2-1.241C9.889 2.622 10.892 2 12 2s2.11.622 4.116 1.867l2 1.241c1.897 1.178 2.846 1.766 3.365 2.715S22 9.915 22 12.203v1.522c0 3.9 0 5.851-1.172 7.063S17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.212S2 17.626 2 13.725z" opacity=".5"></svg:path><svg:path fill="currentColor" d="M9.447 15.398a.75.75 0 0 0-.894 1.205A5.77 5.77 0 0 0 12 17.75a5.77 5.77 0 0 0 3.447-1.147a.75.75 0 0 0-.894-1.206A4.27 4.27 0 0 1 12 16.25a4.27 4.27 0 0 1-2.553-.852"></svg:path>`,
})
export class SolarHomeSmileBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHomeSmileLineDuotoneIcon],svg[solar-home-smile-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 12.204c0-2.289 0-3.433.52-4.381c.518-.949 1.467-1.537 3.364-2.715l2-1.241C9.889 2.622 10.892 2 12 2s2.11.622 4.116 1.867l2 1.241c1.897 1.178 2.846 1.766 3.365 2.715S22 9.915 22 12.203v1.522c0 3.9 0 5.851-1.172 7.063S17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.212S2 17.626 2 13.725z" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="M9 16c.85.63 1.885 1 3 1s2.15-.37 3-1"></svg:path></svg:g>`,
})
export class SolarHomeSmileLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHomeWifiAngleBoldDuotoneIcon],svg[solar-home-wifi-angle-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.106 22h-2.212c-3.447 0-5.17 0-6.345-1.012s-1.419-2.705-1.906-6.093l-.279-1.937c-.38-2.637-.57-3.956-.029-5.083s1.691-1.813 3.992-3.183l1.385-.825C9.8 2.622 10.846 2 12 2s2.199.622 4.288 1.867l1.385.825c2.3 1.37 3.451 2.056 3.992 3.183s.35 2.446-.03 5.083l-.278 1.937c-.487 3.388-.731 5.081-1.906 6.093S16.553 22 13.106 22" opacity=".5"></svg:path><svg:path fill="currentColor" d="M17.45 12.192c-3.017-3.256-7.883-3.256-10.9 0a.75.75 0 1 1-1.1-1.02c3.61-3.896 9.49-3.896 13.1 0a.75.75 0 1 1-1.1 1.02"></svg:path><svg:path fill="currentColor" d="M15.45 14.35c-1.912-2.063-4.987-2.063-6.9 0a.75.75 0 1 1-1.1-1.019c2.506-2.704 6.594-2.704 9.1 0a.75.75 0 0 1-1.1 1.02"></svg:path><svg:path fill="currentColor" d="M13.45 16.51c-.808-.872-2.092-.872-2.9 0a.75.75 0 1 1-1.1-1.02c1.401-1.512 3.699-1.512 5.1 0a.75.75 0 0 1-1.1 1.02"></svg:path>`,
})
export class SolarHomeWifiAngleBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHomeWifiAngleLineDuotoneIcon],svg[solar-home-wifi-angle-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2.364 12.958c-.38-2.637-.57-3.956-.029-5.083s1.691-1.813 3.992-3.183l1.385-.825C9.8 2.622 10.846 2 12 2s2.199.622 4.288 1.867l1.385.825c2.3 1.37 3.451 2.056 3.992 3.183s.35 2.446-.03 5.083l-.278 1.937c-.487 3.388-.731 5.081-1.906 6.093S16.553 22 13.106 22h-2.212c-3.447 0-5.17 0-6.345-1.012s-1.419-2.705-1.906-6.093z" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="M6 11.683c3.314-3.577 8.686-3.577 12 0M8 13.84c2.21-2.384 5.79-2.384 8 0M10 16c1.105-1.192 2.896-1.192 4 0"></svg:path></svg:g>`,
})
export class SolarHomeWifiAngleLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHomeWifiBoldDuotoneIcon],svg[solar-home-wifi-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 22h-4c-3.771 0-5.657 0-6.828-1.212S2 17.626 2 13.725v-1.521c0-2.289 0-3.433.52-4.381c.518-.949 1.467-1.537 3.364-2.715l2-1.241C9.889 2.622 10.892 2 12 2s2.11.622 4.116 1.867l2 1.241c1.897 1.178 2.846 1.766 3.365 2.715S22 9.915 22 12.203v1.522c0 3.9 0 5.851-1.172 7.063S17.771 22 14 22" opacity=".5"></svg:path><svg:path fill="currentColor" d="M17.45 12.192c-3.017-3.256-7.883-3.256-10.9 0a.75.75 0 1 1-1.1-1.02c3.61-3.896 9.49-3.896 13.1 0a.75.75 0 1 1-1.1 1.02"></svg:path><svg:path fill="currentColor" d="M15.45 14.35c-1.912-2.063-4.987-2.063-6.9 0a.75.75 0 1 1-1.1-1.019c2.506-2.704 6.594-2.704 9.1 0a.75.75 0 0 1-1.1 1.02"></svg:path><svg:path fill="currentColor" d="M13.45 16.51c-.808-.872-2.092-.872-2.9 0a.75.75 0 1 1-1.1-1.02c1.401-1.512 3.699-1.512 5.1 0a.75.75 0 0 1-1.1 1.02"></svg:path>`,
})
export class SolarHomeWifiBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHomeWifiLineDuotoneIcon],svg[solar-home-wifi-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 12.204c0-2.289 0-3.433.52-4.381c.518-.949 1.467-1.537 3.364-2.715l2-1.241C9.889 2.622 10.892 2 12 2s2.11.622 4.116 1.867l2 1.241c1.897 1.178 2.846 1.766 3.365 2.715S22 9.915 22 12.203v1.522c0 3.9 0 5.851-1.172 7.063S17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.212S2 17.626 2 13.725z" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="M6 11.683c3.314-3.577 8.686-3.577 12 0M8 13.84c2.21-2.384 5.79-2.384 8 0M10 16c1.105-1.192 2.896-1.192 4 0"></svg:path></svg:g>`,
})
export class SolarHomeWifiLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHospitalBoldDuotoneIcon],svg[solar-hospital-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10.75 2h2c1.886 0 2.828 0 3.414.586S16.75 4.114 16.75 6v15.25h5a.75.75 0 0 1 0 1.5h-20a.75.75 0 0 1 0-1.5h5V6c0-1.886 0-2.828.586-3.414S8.864 2 10.75 2m1 2.25a.75.75 0 0 1 .75.75v1.25h1.25a.75.75 0 0 1 0 1.5H12.5V9A.75.75 0 0 1 11 9V7.75H9.75a.75.75 0 0 1 0-1.5H11V5a.75.75 0 0 1 .75-.75M9 12a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4A.75.75 0 0 1 9 12m0 3a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4A.75.75 0 0 1 9 15m2.75 3.25a.75.75 0 0 1 .75.75v2.25H11V19a.75.75 0 0 1 .75-.75" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M20.913 5.889c.337.504.337 1.206.337 2.611v12.75h.5a.75.75 0 0 1 0 1.5h-20a.75.75 0 1 1 0-1.5h.5V8.5c0-1.405 0-2.107.337-2.611a2 2 0 0 1 .552-.552c.441-.295 2.537-.332 3.618-.336q-.005.437-.004.91V7.25H4.25a.75.75 0 1 0 0 1.5h2.503v1.5H4.25a.75.75 0 0 0 0 1.5h2.503v1.5H4.25a.75.75 0 0 0 0 1.5h2.503v6.5h10v-6.5h2.497a.75.75 0 1 0 0-1.5h-2.497v-1.5h2.497a.75.75 0 1 0 0-1.5h-2.497v-1.5h2.497a.75.75 0 0 0 0-1.5h-2.497V5.91q.001-.471-.004-.91c1.081.005 3.17.042 3.612.337a2 2 0 0 1 .552.552" opacity=".5"></svg:path>`,
})
export class SolarHospitalBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHospitalLineDuotoneIcon],svg[solar-hospital-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M22 22H2"></svg:path><svg:path d="M17 22V6c0-1.886 0-2.828-.586-3.414S14.886 2 13 2h-2c-1.886 0-2.828 0-3.414.586S7 4.114 7 6v16"></svg:path><svg:path d="M21 22V8.5c0-1.404 0-2.107-.337-2.611a2 2 0 0 0-.552-.552C19.607 5 18.904 5 17.5 5M3 22V8.5c0-1.404 0-2.107.337-2.611a2 2 0 0 1 .552-.552C4.393 5 5.096 5 6.5 5" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="M12 22v-3"></svg:path><svg:path stroke-linecap="round" d="M10 12h4m-8.5-1H7m-1.5 3H7m10-3h1.5M17 14h1.5m-13-6H7m10 0h1.5M10 15h4" opacity=".5"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M12 9V5m2 2h-4"></svg:path></svg:g>`,
})
export class SolarHospitalLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHourglassBoldDuotoneIcon],svg[solar-hourglass-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 2C7.867 2 5.8 2 5.198 3.3a2.5 2.5 0 0 0-.13.346c-.41 1.387 1.052 2.995 3.974 6.21L11 12h2l1.958-2.143c2.922-3.216 4.383-4.824 3.974-6.21a2.5 2.5 0 0 0-.13-.348C18.2 2 16.133 2 12 2" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M5.198 20.7C5.8 22 7.867 22 12 22s6.2 0 6.802-1.3a2.5 2.5 0 0 0 .13-.346c.41-1.387-1.052-2.995-3.974-6.21L13 12h-2l-1.958 2.143c-2.922 3.216-4.383 4.824-3.974 6.21q.052.18.13.348" opacity=".5"></svg:path>`,
})
export class SolarHourglassBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHourglassLineBoldDuotoneIcon],svg[solar-hourglass-line-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 2C7.867 2 5.8 2 5.198 3.3a2.5 2.5 0 0 0-.13.346c-.41 1.387 1.052 2.995 3.974 6.21L11 12h2l1.958-2.143c2.922-3.216 4.383-4.824 3.974-6.21a2.5 2.5 0 0 0-.13-.348C18.2 2 16.133 2 12 2m-2 2.75a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M5.198 20.7C5.8 22 7.867 22 12 22s6.2 0 6.802-1.3a2.5 2.5 0 0 0 .13-.346c.41-1.387-1.052-2.995-3.974-6.21L13 12h-2l-1.958 2.143c-2.922 3.216-4.383 4.824-3.974 6.21q.052.18.13.348" opacity=".5"></svg:path><svg:path fill="currentColor" d="M10 17.75a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5z"></svg:path>`,
})
export class SolarHourglassLineBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHourglassLineDuotoneIcon],svg[solar-hourglass-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M14.958 9.071L12 12L9.042 9.071C6.12 6.177 4.66 4.73 5.068 3.481q.052-.16.13-.312C5.8 2 7.867 2 12 2s6.2 0 6.802 1.17q.078.15.13.311c.41 1.249-1.052 2.696-3.974 5.59Z"></svg:path><svg:path d="M9.042 14.929L12 12l2.958 2.929c2.922 2.894 4.383 4.341 3.974 5.59a2 2 0 0 1-.13.312C18.2 22 16.133 22 12 22s-6.2 0-6.802-1.17a2 2 0 0 1-.13-.311c-.41-1.249 1.052-2.696 3.974-5.59Z" opacity=".5"></svg:path></svg:g>`,
})
export class SolarHourglassLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHourglassLineLineDuotoneIcon],svg[solar-hourglass-line-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="m12 12l-2.958 2.929c-2.922 2.894-4.383 4.341-3.974 5.59q.052.16.13.312C5.8 22 7.867 22 12 22s6.2 0 6.802-1.17q.078-.15.13-.311c.41-1.249-1.052-2.696-3.974-5.59zm0 0l2.958-2.929c2.922-2.894 4.383-4.341 3.974-5.59a2 2 0 0 0-.13-.312C18.2 2 16.133 2 12 2S5.8 2 5.198 3.17q-.078.15-.13.311c-.41 1.249 1.052 2.696 3.974 5.59z" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="M10 5.5h4m-4 13h4"></svg:path></svg:g>`,
})
export class SolarHourglassLineLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarImportBoldDuotoneIcon],svg[solar-import-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 12a8 8 0 1 0 16 0z" opacity=".5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M15.53 10.47a.75.75 0 0 0-1.06 0l-1.72 1.72V4a.75.75 0 0 0-1.5 0v8.19l-1.72-1.72a.75.75 0 0 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l3-3a.75.75 0 0 0 0-1.06" clip-rule="evenodd"></svg:path>`,
})
export class SolarImportBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarImportLineDuotoneIcon],svg[solar-import-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M4 12a8 8 0 1 0 16 0" opacity=".5"></svg:path><svg:path stroke-linejoin="round" d="M12 4v10m0 0l3-3m-3 3l-3-3"></svg:path></svg:g>`,
})
export class SolarImportLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarInboxArchiveBoldDuotoneIcon],svg[solar-inbox-archive-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.464 20.536C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535" opacity=".5"></svg:path><svg:path fill="currentColor" d="M5 8.5v-1A1.5 1.5 0 0 1 6.5 6h11A1.5 1.5 0 0 1 19 7.5v1a2.5 2.5 0 0 0-1.5-.5h-11c-.563 0-1.082.186-1.5.5m0 3v-1A1.5 1.5 0 0 1 6.5 9h11a1.5 1.5 0 0 1 1.5 1.5v1a2.5 2.5 0 0 0-1.5-.5h-11a2.5 2.5 0 0 0-1.5.5M20.75 15a.75.75 0 0 0-.75-.75h-1.02v-1A1.5 1.5 0 0 0 17.5 12h-11a1.5 1.5 0 0 0-1.48 1.25v1H4a.75.75 0 0 0 0 1.5h2.301c.87 0 1.098.013 1.293.092l.061.027c.19.09.355.25.943.889l.036.038l.075.083c.438.476.783.852 1.236 1.08q.126.063.258.113c.474.18.985.179 1.631.178h.218c.611 0 1.094.001 1.547-.161q.126-.045.248-.103c.434-.205.775-.547 1.207-.98l.075-.074l.23-.23c.621-.621.793-.775.991-.857s.428-.095 1.307-.095H20a.75.75 0 0 0 .75-.75"></svg:path>`,
})
export class SolarInboxArchiveBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarInboxArchiveLineDuotoneIcon],svg[solar-inbox-archive-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="1.5" d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z"></svg:path><svg:path fill="currentColor" d="M4 14.25a.75.75 0 0 0 0 1.5zm16 1.5a.75.75 0 0 0 0-1.5zm-5.401.651l-.53-.53zm.23-.23l-.53-.53zm-5.679.079l-.552.508zm.035.038l.552-.507zm1.096 1l-.336.67zm.188.082l.266-.701zm3.057-.062l-.32-.678zm-.18.075l.253.706zm2.717-2.23l-.287-.694zm-8.186-.005l.283-.695zm.098.043l-.32.678zM4.25 15a.75.75 0 0 0 1.5 0zm14 0a.75.75 0 0 0 1.5 0zM4 15.75h2.301v-1.5H4zm13.657 0H20v-1.5h-2.343zm-2.528 1.182l.23-.23l-1.06-1.06l-.23.229zm-6.53-.174l.035.038l1.103-1.015l-.035-.039zm.035.038c.473.515.832.922 1.31 1.162l.673-1.34c-.176-.089-.33-.24-.88-.837zm3.312-.046c-.813 0-1.027-.011-1.211-.081l-.531 1.403c.5.19 1.042.178 1.742.178zm-2.001 1.208q.126.063.258.114l.532-1.403a1 1 0 0 1-.118-.052zm4.123-2.087c-.543.543-.693.68-.862.76l.64 1.355c.46-.217.815-.586 1.283-1.054zm-2.122 2.379c.662 0 1.175.01 1.653-.161l-.506-1.412c-.176.063-.379.073-1.147.073zm1.26-1.62a1 1 0 0 1-.113.047l.506 1.412q.126-.045.248-.103zm4.45-2.38c-.755 0-1.342-.013-1.88.21l.574 1.385c.198-.082.428-.095 1.307-.095zm-2.297 2.452c.621-.621.793-.775.991-.857l-.574-1.386c-.537.223-.943.648-1.478 1.182zM6.3 15.75c.87 0 1.098.013 1.293.092l.566-1.389c-.53-.216-1.11-.203-1.859-.203zm3.401-.008c-.506-.55-.89-.986-1.408-1.23l-.639 1.357c.19.09.355.25.943.889zm-2.108.1l.061.027l.64-1.357l-.135-.059zM6.5 12.75h11v-1.5h-11zm11 0a.75.75 0 0 1 .75.75h1.5a2.25 2.25 0 0 0-2.25-2.25zm-11.75.75a.75.75 0 0 1 .75-.75v-1.5a2.25 2.25 0 0 0-2.25 2.25zm.75-3.75h11v-1.5h-11zm11 0a.75.75 0 0 1 .75.75h1.5a2.25 2.25 0 0 0-2.25-2.25zm-11.75.75a.75.75 0 0 1 .75-.75v-1.5a2.25 2.25 0 0 0-2.25 2.25zm0 0v-3h-1.5v3zm.75-3.75h11v-1.5h-11zm11.75.75v3h1.5v-3zm-.75-.75a.75.75 0 0 1 .75.75h1.5a2.25 2.25 0 0 0-2.25-2.25zM5.75 7.5a.75.75 0 0 1 .75-.75v-1.5A2.25 2.25 0 0 0 4.25 7.5zm0 7.5v-1.5h-1.5V15zm12.5-1.5V15h1.5v-1.5zm-12.5 0v-3h-1.5v3zm12.5-3v3h1.5v-3z" opacity=".5"></svg:path></svg:g>`,
})
export class SolarInboxArchiveLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarInboxBoldDuotoneIcon],svg[solar-inbox-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 12c0-5.185 0-7.778 1.61-9.39C4.223 1 6.816 1 12 1s7.778 0 9.39 1.61C23 4.223 23 6.816 23 12s0 7.778-1.61 9.39C19.777 23 17.184 23 12 23s-7.778 0-9.39-1.61C1 19.777 1 17.184 1 12" opacity=".5"></svg:path><svg:path fill="currentColor" d="M2.61 21.389c1.612 1.61 4.205 1.61 9.39 1.61s7.778 0 9.39-1.61c1.492-1.493 1.601-3.829 1.61-8.29h-3.476c-.996 0-1.494 0-1.931.202c-.438.201-.762.58-1.41 1.335l-.666.777c-.648.756-.972 1.134-1.41 1.335s-.935.202-1.93.202h-.353c-.996 0-1.494 0-1.931-.202c-.438-.2-.762-.579-1.41-1.335l-.666-.777c-.648-.756-.972-1.134-1.41-1.335s-.935-.201-1.93-.201H1c.008 4.46.118 6.796 1.61 8.289"></svg:path>`,
})
export class SolarInboxBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarInboxInBoldDuotoneIcon],svg[solar-inbox-in-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12" opacity=".5"></svg:path><svg:path fill="currentColor" d="M3.465 20.536C4.929 22 7.286 22 12 22s7.072 0 8.536-1.465C21.893 19.179 21.993 17.056 22 13h-3.16c-.905 0-1.358 0-1.755.183c-.398.183-.693.527-1.282 1.214l-.605.706c-.59.687-.884 1.031-1.282 1.214s-.85.183-1.755.183h-.321c-.905 0-1.358 0-1.756-.183s-.692-.527-1.281-1.214l-.606-.706c-.589-.687-.883-1.031-1.281-1.214S6.066 13 5.16 13H2c.007 4.055.107 6.179 1.465 7.535m9.065-9.205a.75.75 0 0 1-1.06 0l-3.3-3.3a.75.75 0 1 1 1.06-1.06l2.02 2.02V2h1.5v6.99l2.02-2.02a.75.75 0 1 1 1.06 1.06z"></svg:path>`,
})
export class SolarInboxInBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarInboxInLineDuotoneIcon],svg[solar-inbox-in-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M12 2v8m0 0l3-3m-3 3L9 7" opacity=".5"></svg:path><svg:path d="M2 13h3.16c.905 0 1.358 0 1.756.183s.692.527 1.281 1.214l.606.706c.589.687.883 1.031 1.281 1.214s.85.183 1.756.183h.32c.905 0 1.358 0 1.756-.183s.692-.527 1.281-1.214l.606-.706c.589-.687.883-1.031 1.281-1.214S17.934 13 18.84 13H22" opacity=".5"></svg:path><svg:path d="M17 2.127c1.625.16 2.72.521 3.535 1.338C22 4.929 22 7.286 22 12s0 7.071-1.465 8.536C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.464C2 19.07 2 16.714 2 12s0-7.07 1.464-8.535C4.281 2.648 5.374 2.287 7 2.127"></svg:path></svg:g>`,
})
export class SolarInboxInLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarInboxLineBoldDuotoneIcon],svg[solar-inbox-line-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12" opacity=".5"></svg:path><svg:path fill="currentColor" d="M3.465 20.536C4.929 22 7.286 22 12 22s7.072 0 8.536-1.465C21.893 19.179 21.993 17.056 22 13h-3.16c-.905 0-1.358 0-1.755.183c-.398.183-.693.527-1.282 1.214l-.605.706c-.59.687-.884 1.031-1.282 1.214s-.85.183-1.755.183h-.321c-.905 0-1.358 0-1.756-.183s-.692-.527-1.281-1.214l-.606-.706c-.589-.687-.883-1.031-1.281-1.214S6.066 13 5.16 13H2c.007 4.055.107 6.179 1.465 7.535M8 6.25a.75.75 0 0 0 0 1.5h8a.75.75 0 0 0 0-1.5zm2 3.5a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5z"></svg:path>`,
})
export class SolarInboxLineBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarInboxLineDuotoneIcon],svg[solar-inbox-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z"></svg:path><svg:path stroke-linecap="round" d="M2 13h3.16c.905 0 1.358 0 1.756.183s.692.527 1.281 1.214l.606.706c.589.687.883 1.031 1.281 1.214s.85.183 1.756.183h.32c.905 0 1.358 0 1.756-.183s.692-.527 1.281-1.214l.606-.706c.589-.687.883-1.031 1.281-1.214S17.934 13 18.84 13H22" opacity=".5"></svg:path></svg:g>`,
})
export class SolarInboxLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarInboxLineLineDuotoneIcon],svg[solar-inbox-line-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z"></svg:path><svg:path stroke-linecap="round" d="M2 13h3.16c.905 0 1.358 0 1.756.183s.692.527 1.281 1.214l.606.706c.589.687.883 1.031 1.281 1.214s.85.183 1.756.183h.32c.905 0 1.358 0 1.756-.183s.692-.527 1.281-1.214l.606-.706c.589-.687.883-1.031 1.281-1.214S17.934 13 18.84 13H22M8 7h8m-6 3.5h4" opacity=".5"></svg:path></svg:g>`,
})
export class SolarInboxLineLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarInboxOutBoldDuotoneIcon],svg[solar-inbox-out-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12" opacity=".5"></svg:path><svg:path fill="currentColor" d="M3.465 20.536C4.929 22 7.286 22 12 22s7.072 0 8.536-1.465C21.893 19.179 21.993 17.056 22 13h-3.16c-.905 0-1.358 0-1.755.183c-.398.183-.693.527-1.282 1.214l-.605.706c-.59.687-.884 1.031-1.282 1.214s-.85.183-1.755.183h-.321c-.905 0-1.358 0-1.756-.183s-.692-.527-1.281-1.214l-.606-.706c-.589-.687-.883-1.031-1.281-1.214S6.066 13 5.16 13H2c.007 4.055.107 6.179 1.465 7.535"></svg:path><svg:path fill="currentColor" d="M12.53 5.97a.75.75 0 0 0-1.06 0l-3.3 3.3a.75.75 0 1 0 1.06 1.06l2.02-2.02v8.187c-.534-.008-.865-.042-1.166-.18c-.397-.183-.692-.527-1.281-1.214l-.606-.706c-.589-.687-.883-1.031-1.281-1.214S6.066 13 5.16 13H2c.007 4.055.107 6.179 1.465 7.535C4.929 22 7.286 22 12 22s7.072 0 8.536-1.465C21.893 19.179 21.993 17.056 22 13h-3.16c-.905 0-1.358 0-1.755.183c-.398.183-.693.527-1.282 1.214l-.605.706c-.59.687-.884 1.031-1.282 1.214c-.3.138-.632.172-1.166.18V8.311l2.02 2.02a.75.75 0 1 0 1.06-1.061z"></svg:path>`,
})
export class SolarInboxOutBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarInboxOutLineDuotoneIcon],svg[solar-inbox-out-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M17 2.127c1.625.16 2.72.521 3.535 1.338C22 4.929 22 7.286 22 12s0 7.071-1.465 8.536C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.464C2 19.07 2 16.714 2 12s0-7.07 1.464-8.535C4.281 2.648 5.374 2.287 7 2.127"></svg:path><svg:path stroke-linejoin="round" d="M12 10V2m0 0l3 3m-3-3L9 5" opacity=".5"></svg:path><svg:path d="M2 13h3.16c.905 0 1.358 0 1.756.183s.692.527 1.281 1.214l.606.706c.589.687.883 1.031 1.281 1.214s.85.183 1.756.183h.32c.905 0 1.358 0 1.756-.183s.692-.527 1.281-1.214l.606-.706c.589-.687.883-1.031 1.281-1.214S17.934 13 18.84 13H22" opacity=".5"></svg:path></svg:g>`,
})
export class SolarInboxOutLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarInboxUnreadBoldDuotoneIcon],svg[solar-inbox-unread-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 5a3 3 0 1 1-6 0a3 3 0 0 1 6 0"></svg:path><svg:path fill="currentColor" d="M15.612 2.038C14.59 2 13.399 2 12 2C7.286 2 4.929 2 3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12c0-1.399 0-2.59-.038-3.612a4.5 4.5 0 0 1-6.35-6.35" opacity=".5"></svg:path><svg:path fill="currentColor" d="M3.465 20.536C4.929 22 7.286 22 12 22s7.072 0 8.536-1.465C21.893 19.179 21.993 17.056 22 13h-3.16c-.905 0-1.358 0-1.755.183c-.398.183-.693.527-1.282 1.214l-.605.706c-.59.687-.884 1.031-1.282 1.214s-.85.183-1.755.183h-.321c-.905 0-1.358 0-1.756-.183s-.692-.527-1.281-1.214l-.606-.706c-.589-.687-.883-1.031-1.281-1.214S6.066 13 5.16 13H2c.007 4.055.107 6.179 1.465 7.535"></svg:path>`,
})
export class SolarInboxUnreadBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarInboxUnreadLineDuotoneIcon],svg[solar-inbox-unread-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M14 2.005Q13.079 2 12 2C7.286 2 4.929 2 3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12q.001-1.079-.005-2"></svg:path><svg:circle cx="19" cy="5" r="3"></svg:circle><svg:path stroke-linecap="round" d="M2 13h3.16c.905 0 1.358 0 1.756.183s.692.527 1.281 1.214l.606.706c.589.687.883 1.031 1.281 1.214s.85.183 1.756.183h.32c.905 0 1.358 0 1.756-.183s.692-.527 1.281-1.214l.606-.706c.589-.687.883-1.031 1.281-1.214S17.934 13 18.84 13H22" opacity=".5"></svg:path></svg:g>`,
})
export class SolarInboxUnreadLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarIncognitoBoldDuotoneIcon],svg[solar-incognito-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 16.5a3.5 3.5 0 1 1-7 0a3.5 3.5 0 0 1 7 0"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M1.25 10A.75.75 0 0 1 2 9.25h20a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="m4.188 9.25l.426-1.705c.545-2.183.818-3.274 1.632-3.91C7.06 3 8.185 3 10.435 3h3.13c2.25 0 3.375 0 4.189.635c.814.636 1.086 1.727 1.632 3.91l.427 1.705z" opacity=".5"></svg:path><svg:path fill="currentColor" d="M10 16.5a3.5 3.5 0 1 1-7 0a3.5 3.5 0 0 1 7 0"></svg:path><svg:path fill="currentColor" d="M9.884 17.397a3.5 3.5 0 0 0 .025-1.69l.414-.207a3.75 3.75 0 0 1 3.354 0l.413.206a3.5 3.5 0 0 0 .026 1.69l-1.11-.555a2.25 2.25 0 0 0-2.012 0z" opacity=".5"></svg:path>`,
})
export class SolarIncognitoBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarIncognitoLineDuotoneIcon],svg[solar-incognito-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M21 17.5a3.5 3.5 0 1 1-7 0a3.5 3.5 0 0 1 7 0Z"></svg:path><svg:path stroke-linecap="round" d="M2 11h20"></svg:path><svg:path stroke-linecap="round" d="m4 11l.614-2.455c.545-2.183.818-3.274 1.632-3.91C7.06 4 8.185 4 10.435 4h3.13c2.25 0 3.375 0 4.189.635c.814.636 1.086 1.727 1.632 3.91L20 11" opacity=".5"></svg:path><svg:path d="M10 17.5a3.5 3.5 0 1 1-7 0a3.5 3.5 0 0 1 7 0Z"></svg:path><svg:path stroke-linecap="round" d="m10 17.5l.658-.33a3 3 0 0 1 2.684 0l.658.33" opacity=".5"></svg:path></svg:g>`,
})
export class SolarIncognitoLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarIncomingCallBoldDuotoneIcon],svg[solar-incoming-call-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m19 5l-4 4m0 0V6m0 3h3"></svg:path><svg:path fill="currentColor" d="m15.556 14.548l-.455.48s-1.083 1.139-4.038-1.972s-1.872-4.25-1.872-4.25l.287-.303c.706-.744.773-1.938.156-2.81L8.374 3.91C7.61 2.83 6.135 2.688 5.26 3.609L3.691 5.26c-.433.457-.723 1.048-.688 1.705c.09 1.68.808 5.293 4.812 9.51c4.247 4.47 8.232 4.648 9.861 4.487c.516-.05.964-.329 1.325-.709l1.42-1.496c.96-1.01.69-2.74-.538-3.446l-1.91-1.1c-.806-.463-1.787-.327-2.417.336" opacity=".5"></svg:path></svg:g>`,
})
export class SolarIncomingCallBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarIncomingCallLineDuotoneIcon],svg[solar-incoming-call-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m19 5l-4 4m0 0V6m0 3h3"></svg:path><svg:path fill="currentColor" d="m15.1 15.027l-.543-.516zm.456-.48l.544.517zm2.417-.335l-.374.65zm1.91 1.1l-.374.65zm.539 3.446l.543.517zm-1.42 1.496l-.545-.517zm-1.326.71l.074.745zm-9.86-4.489l.543-.516zm-4.813-9.51l-.749.041zm6.475 1.538l.543.517zm.156-2.81l.613-.433zM8.374 3.91l-.613.433zM5.26 3.609l.544.516zM3.691 5.26l-.543-.516zm7.372 7.795l.544-.517zm4.582 2.488l.455-.48l-1.088-1.033l-.455.48zm1.954-.682l1.91 1.1l.749-1.3l-1.911-1.1zm2.279 3.38l-1.42 1.495l1.087 1.034l1.42-1.496zm-2.275 1.975c-1.435.141-5.18.02-9.244-4.258l-1.087 1.033c4.429 4.663 8.654 4.898 10.478 4.717zm-9.244-4.258c-3.876-4.081-4.526-7.523-4.607-9.033l-1.498.08c.1 1.85.884 5.634 5.018 9.986zm1.376-6.637l.286-.302l-1.087-1.033l-.287.302zm.512-4.062L8.986 3.477l-1.225.866l1.26 1.783zm-5.53-2.168L3.149 4.745l1.088 1.033l1.57-1.653zm4.474 5.713a38 38 0 0 0-.545-.515l-.002.002l-.003.003l-.05.058a1.6 1.6 0 0 0-.23.427c-.098.275-.15.639-.084 1.093c.13.892.715 2.091 2.242 3.7l1.088-1.034c-1.428-1.503-1.78-2.428-1.846-2.884c-.032-.22 0-.335.013-.372l.008-.019l-.028.037l-.018.02s-.002 0-.545-.516m1.328 4.767c1.523 1.604 2.673 2.234 3.55 2.377c.451.073.816.014 1.092-.095a1.5 1.5 0 0 0 .421-.25l.036-.034l.014-.014l.007-.006l.003-.003l.001-.002s.002-.001-.542-.518c-.544-.516-.543-.517-.543-.518l.002-.001l.002-.003l.005-.005l.01-.01l.037-.032q.015-.008-.004.001c-.02.008-.11.04-.3.009c-.402-.066-1.27-.42-2.703-1.929zM8.986 3.477C7.972 2.043 5.944 1.8 4.718 3.092l1.087 1.033c.523-.55 1.444-.507 1.956.218zM3.752 6.926c-.022-.4.152-.8.484-1.148L3.148 4.745c-.536.564-.943 1.347-.894 2.261zm14.705 12.811c-.279.294-.57.452-.854.48l.147 1.492c.747-.073 1.352-.472 1.795-.939zM10.021 9.02c.968-1.019 1.036-2.613.226-3.76l-1.225.866c.422.597.357 1.392-.088 1.86zm9.488 6.942c.821.473.982 1.635.369 2.28l1.087 1.033c1.305-1.374.925-3.673-.707-4.613zm-3.409-.898c.385-.406.986-.497 1.499-.202l.748-1.3c-1.099-.632-2.46-.45-3.335.47z" opacity=".5"></svg:path></svg:g>`,
})
export class SolarIncomingCallLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarIncomingCallRoundedBoldDuotoneIcon],svg[solar-incoming-call-rounded-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m19 5l-4 4m0 0V6m0 3h3"></svg:path><svg:path fill="currentColor" d="m10.038 5.316l.649 1.163c.585 1.05.35 2.426-.572 3.349c0 0-1.12 1.119.91 3.148c2.027 2.027 3.146.91 3.147.91c.923-.923 2.3-1.158 3.349-.573l1.163.65c1.585.884 1.772 3.106.379 4.5c-.837.836-1.863 1.488-2.996 1.53c-1.908.073-5.149-.41-8.4-3.66c-3.25-3.251-3.733-6.492-3.66-8.4c.043-1.133.694-2.159 1.53-2.996c1.394-1.393 3.616-1.206 4.5.38" opacity=".5"></svg:path></svg:g>`,
})
export class SolarIncomingCallRoundedBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarIncomingCallRoundedLineDuotoneIcon],svg[solar-incoming-call-rounded-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="m19 5l-4 4m0 0V6m0 3h3"></svg:path><svg:path d="m10.038 5.316l.649 1.163c.585 1.05.35 2.426-.572 3.349q0 0 0 0s-1.12 1.119.91 3.148c2.027 2.027 3.146.91 3.147.91q0 0 0 0c.923-.923 2.3-1.158 3.349-.573l1.163.65c1.585.884 1.772 3.106.379 4.5c-.837.836-1.863 1.488-2.996 1.53c-1.908.073-5.149-.41-8.4-3.66c-3.25-3.251-3.733-6.492-3.66-8.4c.043-1.133.694-2.159 1.53-2.996c1.394-1.393 3.616-1.206 4.5.38Z" opacity=".5"></svg:path></svg:g>`,
})
export class SolarIncomingCallRoundedLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarInfinityBoldDuotoneIcon],svg[solar-infinity-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.75 12a4.25 4.25 0 0 1 6.8-3.4a.75.75 0 1 0 .901-1.2A5.75 5.75 0 1 0 7 17.75c.784 0 1.464-.143 2.064-.435s1.079-.714 1.489-1.215c.66-.804 1.196-1.894 1.776-3.074l.339-.689a.755.755 0 0 0-.339-1.008a.745.745 0 0 0-1.003.337l-.366.743c-.584 1.183-1.027 2.082-1.567 2.74c-.307.375-.624.64-.986.817s-.81.284-1.407.284A4.25 4.25 0 0 1 2.75 12" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M12.67 12.335a.755.755 0 0 0-.34-1.006a.746.746 0 0 0-.975.284q.162-.323.316-.639c.58-1.18 1.117-2.27 1.776-3.074c.41-.501.89-.923 1.49-1.215S16.217 6.25 17 6.25a5.75 5.75 0 1 1-3.45 10.35a.75.75 0 0 1 .9-1.2A4.25 4.25 0 1 0 17 7.75c-.596 0-1.045.107-1.406.284c-.363.176-.68.442-.987.816c-.54.66-.983 1.558-1.567 2.741q-.174.355-.369.744z" opacity=".5"></svg:path>`,
})
export class SolarInfinityBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarInfinityLineDuotoneIcon],svg[solar-infinity-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M10 8a5 5 0 1 0-3 9c2.761 0 3.5-2 5-5s2.239-5 5-5a5 5 0 1 1-3 9"></svg:path>`,
})
export class SolarInfinityLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarInfoCircleBoldDuotoneIcon],svg[solar-info-circle-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10" opacity=".5"></svg:path><svg:path fill="currentColor" d="M12 17.75a.75.75 0 0 0 .75-.75v-6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75M12 7a1 1 0 1 1 0 2a1 1 0 0 1 0-2"></svg:path>`,
})
export class SolarInfoCircleBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarInfoCircleLineDuotoneIcon],svg[solar-info-circle-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5" opacity=".5"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M12 17v-6"></svg:path><svg:circle cx="1" cy="1" r="1" fill="currentColor" transform="matrix(1 0 0 -1 11 9)"></svg:circle></svg:g>`,
})
export class SolarInfoCircleLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarInfoSquareBoldDuotoneIcon],svg[solar-info-square-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22c-4.714 0-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22" opacity=".5"></svg:path><svg:path fill="currentColor" d="M12 17.75a.75.75 0 0 0 .75-.75v-6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75M12 7a1 1 0 1 1 0 2a1 1 0 0 1 0-2"></svg:path>`,
})
export class SolarInfoSquareBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarInfoSquareLineDuotoneIcon],svg[solar-info-square-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M12 17v-6"></svg:path><svg:circle cx="1" cy="1" r="1" fill="currentColor" transform="matrix(1 0 0 -1 11 9)"></svg:circle><svg:path stroke="currentColor" stroke-width="1.5" d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z" opacity=".5"></svg:path></svg:g>`,
})
export class SolarInfoSquareLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarIphoneBoldDuotoneIcon],svg[solar-iphone-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 9.801v4.067c0 3.833 0 5.75-1.172 6.941S15.771 22 12 22s-5.657 0-6.828-1.191C4 19.619 4 17.701 4 13.868V9.8c0-3.833 0-5.75 1.172-6.94c.375-.383.825-.642 1.386-.819c.353-.11.728.047.942.35l.154.236c.634.97.855 1.307 1.368 1.631q.165.105.342.186c.591.274 1.273.274 2.636.274s2.044 0 2.636-.274q.177-.081.342-.186c.513-.324.734-.662 1.368-1.631l.154-.235c.2-.305.564-.467.91-.36c.577.176 1.036.438 1.418.827C20 4.051 20 5.968 20 9.801" opacity=".5"></svg:path><svg:path fill="currentColor" d="M8.25 18.984c0-.417.336-.755.75-.755h6c.414 0 .75.338.75.755a.75.75 0 0 1-.75.754H9a.75.75 0 0 1-.75-.754"></svg:path>`,
})
export class SolarIphoneBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarIphoneLineDuotoneIcon],svg[solar-iphone-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M4 10c0-3.771 0-5.657 1.172-6.828S8.229 2 12 2s5.657 0 6.828 1.172S20 6.229 20 10v4c0 3.771 0 5.657-1.172 6.828S15.771 22 12 22s-5.657 0-6.828-1.172S4 17.771 4 14z"></svg:path><svg:path stroke-linecap="round" d="M15 19H9m7.748-16.622l-.084.126c-.756 1.134-1.134 1.701-1.686 2.044a3 3 0 0 1-.342.183c-.592.27-1.273.27-2.636.27s-2.045 0-2.636-.27a3 3 0 0 1-.342-.183c-.552-.343-.93-.91-1.686-2.044l-.084-.126" opacity=".5"></svg:path></svg:g>`,
})
export class SolarIphoneLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarJarOfPills2BoldDuotoneIcon],svg[solar-jar-of-pills-2-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 3.5c0-.466 0-.699.076-.883a1 1 0 0 1 .541-.54C6.801 2 7.034 2 7.5 2h9c.466 0 .699 0 .883.076a1 1 0 0 1 .54.541c.077.184.077.417.077.883s0 .699-.076.883a1 1 0 0 1-.541.54C17.199 5 16.966 5 16.5 5h-9c-.466 0-.699 0-.883-.076a1 1 0 0 1-.54-.541C6 4.199 6 3.966 6 3.5" opacity=".5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12 11.25a.75.75 0 0 1 .75.75v1.25H14a.75.75 0 0 1 0 1.5h-1.25V16a.75.75 0 0 1-1.5 0v-1.25H10a.75.75 0 0 1 0-1.5h1.25V12a.75.75 0 0 1 .75-.75" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="m15.878 15.667l-2.21 2.211c-.917.916-.886 2.432.068 3.386s2.47.985 3.386.069l2.21-2.211c.917-.916.886-2.432-.068-3.386s-2.47-.985-3.386-.069" opacity=".5"></svg:path><svg:path fill="currentColor" d="M9 5L5.501 7.799A4 4 0 0 0 4.108 10h15.788a4 4 0 0 0-1.379-2.2L16.16 5.89L15.018 5zM4.927 20.113A4 4 0 0 1 4.025 18h7.78c-.56 1.31-.336 2.86.58 4H8.957c-.571 0-.857 0-1.127-.037a4 4 0 0 1-2.152-1.008c-.202-.184-.385-.404-.75-.842"></svg:path><svg:path fill="currentColor" d="M4 17.552v-6.63q0-.471.108-.922h15.787q.105.444.105.908v3.476c-1.511-1.215-3.747-1.213-5.182.222l-2.211 2.211c-.354.354-.62.756-.803 1.183H4.025A4 4 0 0 1 4 17.552" opacity=".5"></svg:path><svg:path fill="currentColor" d="M18.82 19.634a5 5 0 0 0-.168-.377a6.5 6.5 0 0 0-1.231-1.678a6.5 6.5 0 0 0-1.678-1.232a5 5 0 0 0-.377-.168l-1.226 1.226l.47.1l.01.003q.024.006.085.026c.08.027.208.076.37.156c.323.161.785.45 1.285.95s.789.962.95 1.285a3 3 0 0 1 .182.454l.003.011l.1.47z"></svg:path>`,
})
export class SolarJarOfPills2BoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarJarOfPills2LineDuotoneIcon],svg[solar-jar-of-pills-2-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M4 3.5c0-.466 0-.699.076-.883a1 1 0 0 1 .541-.54C4.801 2 5.034 2 5.5 2h9c.466 0 .699 0 .883.076a1 1 0 0 1 .54.541c.077.184.077.417.077.883s0 .699-.076.883a1 1 0 0 1-.541.54C15.199 5 14.966 5 14.5 5h-9c-.466 0-.699 0-.883-.076a1 1 0 0 1-.54-.541C4 4.199 4 3.966 4 3.5Z"></svg:path><svg:path stroke-linecap="round" d="M2.5 18h8m-8-8h15" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="M10.5 22H6.957c-.571 0-.857 0-1.127-.037a4 4 0 0 1-2.153-1.008c-.201-.184-.384-.404-.75-.842A4 4 0 0 1 2 17.552v-6.63A4 4 0 0 1 3.501 7.8l2.403-1.922c.543-.434.814-.652 1.136-.764C7.36 5 7.708 5 8.403 5h3.24c.7 0 1.051 0 1.375.115c.324.114.597.335 1.141.776l2.358 1.908A4 4 0 0 1 18 10.91v1.59m-8-.5v4m-2-2h4"></svg:path><svg:path d="M14.773 16.773s.992.21 2.118 1.336s1.336 2.118 1.336 2.118m1.037-4.49c.954.953.985 2.469.069 3.385l-2.211 2.21c-.916.917-2.432.886-3.386-.068s-.985-2.47-.069-3.386l2.211-2.21c.916-.917 2.432-.886 3.386.068Z"></svg:path></svg:g>`,
})
export class SolarJarOfPills2LineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarJarOfPillsBoldDuotoneIcon],svg[solar-jar-of-pills-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 3.5c0-.466 0-.699.076-.883a1 1 0 0 1 .541-.54C6.801 2 7.034 2 7.5 2h9c.466 0 .699 0 .883.076a1 1 0 0 1 .54.541c.077.184.077.417.077.883s0 .699-.076.883a1 1 0 0 1-.541.54C17.199 5 16.966 5 16.5 5h-9c-.466 0-.699 0-.883-.076a1 1 0 0 1-.54-.541C6 4.199 6 3.966 6 3.5m-2 7.423v6.629a4 4 0 0 0 .025.448h15.951q.024-.217.024-.435v-6.657q0-.464-.105-.908H4.108Q4 10.451 4 10.922" opacity=".5"></svg:path><svg:path fill="currentColor" d="M5.501 7.799L9.001 5h6.017l1.142.891l2.357 1.908A4 4 0 0 1 19.896 10H4.108a4 4 0 0 1 1.393-2.201M4.025 18a4 4 0 0 0 .902 2.113c.366.438.549.658.75.842a4 4 0 0 0 2.153 1.008C8.1 22 8.386 22 8.957 22h6.685a4 4 0 0 0 3.088-1.457l.358-.435A4 4 0 0 0 19.977 18z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12 11.25a.75.75 0 0 1 .75.75v1.25H14a.75.75 0 0 1 0 1.5h-1.25V16a.75.75 0 0 1-1.5 0v-1.25H10a.75.75 0 0 1 0-1.5h1.25V12a.75.75 0 0 1 .75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarJarOfPillsBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarJarOfPillsLineDuotoneIcon],svg[solar-jar-of-pills-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M6 3.5c0-.466 0-.699.076-.883a1 1 0 0 1 .541-.54C6.801 2 7.034 2 7.5 2h9c.466 0 .699 0 .883.076a1 1 0 0 1 .54.541c.077.184.077.417.077.883s0 .699-.076.883a1 1 0 0 1-.541.54C17.199 5 16.966 5 16.5 5h-9c-.466 0-.699 0-.883-.076a1 1 0 0 1-.54-.541C6 4.199 6 3.966 6 3.5Z"></svg:path><svg:path stroke-linecap="round" d="M4.5 18h15m-15-8h15" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="m5.501 7.799l2.403-1.922c.543-.434.814-.652 1.136-.764C9.36 5 9.708 5 10.403 5h3.24c.7 0 1.051 0 1.375.115c.324.114.597.335 1.142.776l2.357 1.908A4 4 0 0 1 20 10.91v6.656a4 4 0 0 1-.912 2.543l-.359.435A4 4 0 0 1 15.642 22H8.957c-.571 0-.857 0-1.127-.037a4 4 0 0 1-2.153-1.008c-.201-.184-.384-.404-.75-.842A4 4 0 0 1 4 17.552v-6.63A4 4 0 0 1 5.501 7.8ZM12 12v4m-2-2h4"></svg:path></svg:g>`,
})
export class SolarJarOfPillsLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarKeyBoldDuotoneIcon],svg[solar-key-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M22 8.293c0 3.476-2.83 6.294-6.32 6.294c-.636 0-2.086-.146-2.791-.732l-.882.878c-.519.517-.379.669-.148.919c.096.105.208.226.295.399c0 0 .735 1.024 0 2.049c-.441.585-1.676 1.404-3.086 0l-.294.292s.881 1.025.147 2.05c-.441.585-1.617 1.17-2.646.146l-1.028 1.024c-.706.703-1.568.293-1.91 0l-.883-.878c-.823-.82-.343-1.708 0-2.05l7.642-7.61s-.735-1.17-.735-2.78c0-3.476 2.83-6.294 6.32-6.294S22 4.818 22 8.293" clip-rule="evenodd" opacity=".5"></svg:path><svg:path fill="currentColor" d="M17.885 8.294a2.2 2.2 0 0 1-2.204 2.195a2.2 2.2 0 0 1-2.204-2.195a2.2 2.2 0 0 1 2.204-2.196a2.2 2.2 0 0 1 2.204 2.196"></svg:path>`,
})
export class SolarKeyBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarKeyLineDuotoneIcon],svg[solar-key-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M15.68 14.587c3.49 0 6.32-2.818 6.32-6.294S19.17 2 15.68 2S9.363 4.818 9.363 8.293c0 1.61.734 2.781.734 2.781l-7.642 7.61c-.343.342-.823 1.23 0 2.05l.882.878c.343.293 1.205.703 1.91 0l1.03-1.024c1.028 1.024 2.204.439 2.645-.147c.734-1.024-.147-2.049-.147-2.049l.294-.293c1.41 1.406 2.645.586 3.086 0c.735-1.024 0-2.049 0-2.049c-.294-.585-.882-.585-.147-1.317l.882-.878c.705.585 2.155.732 2.792.732Z"></svg:path><svg:path d="M17.885 8.294a2.2 2.2 0 0 1-2.204 2.195a2.2 2.2 0 0 1-2.205-2.195a2.2 2.2 0 0 1 2.205-2.196a2.2 2.2 0 0 1 2.204 2.196Z" opacity=".5"></svg:path></svg:g>`,
})
export class SolarKeyLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarKeyMinimalistic2BoldDuotoneIcon],svg[solar-key-minimalistic-2-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M15 16a7 7 0 1 0 0-14a7 7 0 0 0 0 14m0-5a2 2 0 1 0 0-4a2 2 0 0 0 0 4" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M10.609 14.452a7 7 0 0 1-1.06-1.06l-6.58 6.578a.75.75 0 1 0 1.061 1.06l.47-.47l.97.97a.75.75 0 0 0 1.06-1.06l-.97-.97l.94-.94l.97.97a.75.75 0 0 0 1.06-1.06l-.97-.97z" opacity=".5"></svg:path>`,
})
export class SolarKeyMinimalistic2BoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarKeyMinimalistic2LineDuotoneIcon],svg[solar-key-minimalistic-2-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="15" cy="9" r="7"></svg:circle><svg:circle cx="15" cy="9" r="2" opacity=".5"></svg:circle><svg:path stroke-linecap="round" d="m3.5 20.5l6-6M6 21l-1.5-1.5m2-2L8 19"></svg:path></svg:g>`,
})
export class SolarKeyMinimalistic2LineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarKeyMinimalisticBoldDuotoneIcon],svg[solar-key-minimalistic-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.977 14.79a6.907 6.907 0 1 0-11.573-3.159c.095.369.01.768-.258 1.037L3.433 16.38a1.48 1.48 0 0 0-.424 1.21l.232 2.089c.025.223.125.43.283.589l.208.208a1 1 0 0 0 .589.283l2.089.232a1.48 1.48 0 0 0 1.21-.424l.71-.71l1.06-1.061l1.942-1.942c.27-.27.668-.353 1.037-.258a6.9 6.9 0 0 0 6.608-1.806" opacity=".5"></svg:path><svg:path fill="currentColor" d="M15.414 8.586a2 2 0 1 0-2.828 2.828a2 2 0 0 0 2.828-2.828M6.583 18.13l1.746 1.727l1.06-1.061l-1.751-1.733a.75.75 0 1 0-1.055 1.066"></svg:path>`,
})
export class SolarKeyMinimalisticBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarKeyMinimalisticLineDuotoneIcon],svg[solar-key-minimalistic-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m18.977 5.023l.53-.53zm0 9.767l.53.53zM7.146 12.668l-.53-.53zM3.433 16.38l.53.53zm4.187 4.187l-.53-.53zm1.24-1.24l-.53-.531zm2.472-2.473l-.53-.53zm-8.323.736l-.745.083zm.232 2.089l-.745.083zm1.08 1.08l-.083.745zm2.089.232l.082-.745zm-2.886-.723l.53-.53zm.208.208l-.53.53zm3.672-8.845l-.726.187zm4.965 4.965l-.187.726zm6.078-11.043a6.157 6.157 0 0 1 0 8.707l1.06 1.06a7.657 7.657 0 0 0 0-10.827zm1.06-1.06a7.657 7.657 0 0 0-10.828 0l1.06 1.06a6.157 6.157 0 0 1 8.708 0zM6.615 12.138L2.903 15.85l1.06 1.06l3.714-3.71zm1.535 8.959l1.24-1.24l-1.06-1.061l-1.24 1.24zm1.24-1.24l2.472-2.472l-1.06-1.061l-2.472 2.472zm-7.126-2.184l.232 2.089l1.49-.166l-.232-2.088zm1.974 3.831l2.089.232l.165-1.49l-2.088-.232zm-1.244-.706l.208.208l1.06-1.06l-.208-.209zm1.41-.784a.24.24 0 0 1-.141-.068l-1.061 1.06c.279.28.644.455 1.036.498zm-1.908-.252c.043.392.219.757.498 1.036l1.06-1.06a.24.24 0 0 1-.067-.142zm4.593.274a.73.73 0 0 1-.597.21l-.165 1.49a2.23 2.23 0 0 0 1.823-.64zM2.903 15.85a2.23 2.23 0 0 0-.64 1.823l1.491-.165a.73.73 0 0 1 .21-.597zm5.228-4.405A6.15 6.15 0 0 1 9.74 5.553l-1.06-1.06a7.65 7.65 0 0 0-2.002 7.325zm10.316 2.815a6.15 6.15 0 0 1-5.892 1.61l-.373 1.452a7.65 7.65 0 0 0 7.325-2.001zm-6.585 3.124c.056-.055.17-.1.32-.062l.373-1.453c-.588-.15-1.27-.028-1.753.455zM7.676 13.2c.483-.483.606-1.166.455-1.754l-1.453.373c.038.15-.007.264-.063.32z"></svg:path><svg:path fill="currentColor" d="M8.332 19.86a.75.75 0 1 0 1.055-1.067zm-.694-2.797a.75.75 0 1 0-1.055 1.066zm1.75 1.73l-1.75-1.73l-1.055 1.066l1.75 1.73zm3.728-7.909a1.25 1.25 0 0 1 0-1.768l-1.06-1.06a2.75 2.75 0 0 0 0 3.889zm1.768 0a1.25 1.25 0 0 1-1.768 0l-1.06 1.06a2.75 2.75 0 0 0 3.889 0zm0-1.768a1.25 1.25 0 0 1 0 1.768l1.06 1.06a2.75 2.75 0 0 0 0-3.889zm1.06-1.06a2.75 2.75 0 0 0-3.889 0l1.061 1.06a1.25 1.25 0 0 1 1.768 0z" opacity=".5"></svg:path>`,
})
export class SolarKeyMinimalisticLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarKeyMinimalisticSquare2BoldDuotoneIcon],svg[solar-key-minimalistic-square-2-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12" opacity=".5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M21.963 8.413a5.73 5.73 0 0 1-1.649 3.413a5.75 5.75 0 0 1-5.507 1.504a.9.9 0 0 0-.864.215l-1.53 1.53l-.002-.003l-1.458-1.441a.75.75 0 1 0-1.055 1.066l1.455 1.439l-.503.503a1.23 1.23 0 0 1-1.009.354l-1.74-.194a.82.82 0 0 1-.49-.235l-.174-.174a.82.82 0 0 1-.236-.49l-.193-1.741a1.23 1.23 0 0 1 .353-1.008l3.094-3.094a.9.9 0 0 0 .215-.864a5.75 5.75 0 0 1 1.505-5.507a5.73 5.73 0 0 1 3.413-1.648c.906.033 1.68.096 2.348.215a5.7 5.7 0 0 1 2.378 1.433a5.7 5.7 0 0 1 1.433 2.378c.12.668.182 1.442.216 2.349m-6.975-1.758a1.667 1.667 0 1 1 2.357 2.357a1.667 1.667 0 0 1-2.357-2.357" clip-rule="evenodd"></svg:path>`,
})
export class SolarKeyMinimalisticSquare2BoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarKeyMinimalisticSquare2LineDuotoneIcon],svg[solar-key-minimalistic-square-2-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="m20.314 3.686l.53-.53zm0 8.14l.53.53zm-8.14-8.14l.531.53zm-1.72 6.371l-.53-.53zM7.362 13.15l.53.53zm3.489 3.489l-.53-.53zm1.033-1.034l.53.53zm2.06-2.06l-.53-.53zm-6.935.614l-.746.082zm.193 1.74l-.745.083zm.9.9l-.083.745zm1.74.193l.083-.745zm-2.404-.602l.53-.53zm.173.173l-.53.53zm3.06-7.37l-.726.186zm4.137 4.137l-.186.726zm-3.854.3a.75.75 0 0 0-1.055 1.067zm8.83-9.414a5.006 5.006 0 0 1 0 7.079l1.062 1.06a6.506 6.506 0 0 0 0-9.2zm1.062-1.06a6.506 6.506 0 0 0-9.2 0l1.06 1.06a5.006 5.006 0 0 1 7.079 0zm-10.92 6.37L6.83 12.62l1.06 1.06l3.094-3.093zm1.455 7.643l1.034-1.034l-1.061-1.06l-1.034 1.033zm1.034-1.034l2.06-2.06l-1.061-1.06l-2.06 2.06zm-6.152-1.894l.194 1.741l1.49-.166l-.193-1.74zm1.756 3.303l1.74.194l.166-1.491l-1.74-.193zm-1.112-.624l.174.174l1.06-1.061l-.173-.174zm1.278-.866a.07.07 0 0 1-.043-.021l-1.061 1.06c.252.253.583.412.938.451zm-1.728-.072c.039.355.198.686.45.938l1.061-1.06a.07.07 0 0 1-.02-.044zm3.863.126a.48.48 0 0 1-.395.139l-.165 1.49a1.98 1.98 0 0 0 1.621-.568zM6.831 12.62a1.98 1.98 0 0 0-.569 1.622l1.491-.166a.48.48 0 0 1 .139-.395zm4.566-3.614a5 5 0 0 1 1.308-4.79l-1.06-1.06a6.5 6.5 0 0 0-1.701 6.223zm8.387 2.289a5 5 0 0 1-4.79 1.308l-.373 1.453a6.5 6.5 0 0 0 6.224-1.7zm-5.31 2.78a.1.1 0 0 1 .044-.022a.2.2 0 0 1 .103.003l.373-1.453c-.527-.135-1.143-.026-1.581.412zm-3.489-3.488c.438-.437.547-1.054.412-1.58l-1.453.372q.014.061.003.103a.1.1 0 0 1-.023.045zm1.426 4.485l-1.458-1.442l-1.055 1.067l1.458 1.441z"></svg:path><svg:path fill="currentColor" d="M15.519 8.482a.917.917 0 0 1 0-1.297l-1.061-1.06a2.417 2.417 0 0 0 0 3.418zm1.296 0a.917.917 0 0 1-1.297 0l-1.06 1.06a2.417 2.417 0 0 0 3.417 0zm0-1.297a.917.917 0 0 1 0 1.297l1.06 1.06a2.417 2.417 0 0 0 0-3.417zm1.06-1.06a2.417 2.417 0 0 0-3.417 0l1.06 1.06a.917.917 0 0 1 1.297 0z" opacity=".5"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M22 14.993c-.064 2.794-.33 4.426-1.446 5.541C19.088 22 16.73 22 12.01 22s-7.078 0-8.544-1.466S2 16.71 2 11.99s0-7.078 1.466-8.544C4.58 2.33 6.213 2.064 9.007 2" opacity=".5"></svg:path></svg:g>`,
})
export class SolarKeyMinimalisticSquare2LineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarKeyMinimalisticSquare3BoldDuotoneIcon],svg[solar-key-minimalistic-square-3-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12" opacity=".5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M11.663 11.25a3.251 3.251 0 1 0 0 1.5h3.087v.75a.75.75 0 0 0 1.5 0v-.75H17a.25.25 0 0 1 .25.25v1a.75.75 0 0 0 1.5 0v-1A1.75 1.75 0 0 0 17 11.25zm-3.163-1a1.75 1.75 0 1 0 0 3.5a1.75 1.75 0 0 0 0-3.5" clip-rule="evenodd"></svg:path>`,
})
export class SolarKeyMinimalisticSquare3BoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarKeyMinimalisticSquare3LineDuotoneIcon],svg[solar-key-minimalistic-square-3-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z" opacity=".5"></svg:path><svg:path d="M11 12a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0Z"></svg:path><svg:path stroke-linecap="round" d="M11 12h4.5m0 0H17a1 1 0 0 1 1 1v1m-2.5-2v1.5"></svg:path></svg:g>`,
})
export class SolarKeyMinimalisticSquare3LineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarKeyMinimalisticSquareBoldDuotoneIcon],svg[solar-key-minimalistic-square-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464" opacity=".5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M16.651 13.86a4.605 4.605 0 1 0-7.715-2.106a.72.72 0 0 1-.172.692L6.289 14.92a.99.99 0 0 0-.283.807l.155 1.392a.66.66 0 0 0 .188.393l.14.139a.66.66 0 0 0 .392.188l1.392.155a.99.99 0 0 0 .807-.283l.296-.297l-1.163-1.15a.75.75 0 0 1 1.055-1.066l1.166 1.153l.003.003l1.118-1.118a.72.72 0 0 1 .69-.172a4.6 4.6 0 0 0 4.406-1.204m-4.26-4.136a1.333 1.333 0 1 1 1.885 1.885a1.333 1.333 0 0 1-1.886-1.885" clip-rule="evenodd"></svg:path>`,
})
export class SolarKeyMinimalisticSquareBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarKeyMinimalisticSquareLineDuotoneIcon],svg[solar-key-minimalistic-square-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="m16.651 7.349l.53-.53zm0 6.511l.53.53zm-7.887-1.414l-.53-.53zM6.289 14.92l.53.53zm2.79 2.791l-.53-.53zm2.476-2.475l-.53-.53zm-5.549.49l-.745.084zm.155 1.393l-.746.083zm.72.72l-.083.746zm1.392.155l.083-.745zm-1.924-.482l.53-.53zm.14.139l-.531.53zm2.447-5.897l-.726.187zm3.31 3.31l-.187.726zm-2.978.134a.75.75 0 1 0-1.055 1.066zm3.653-4.119a.583.583 0 0 1 0-.825l-1.06-1.06a2.083 2.083 0 0 0 0 2.946zm.825 0a.583.583 0 0 1-.825 0l-1.06 1.06a2.083 2.083 0 0 0 2.945 0zm0-.825a.583.583 0 0 1 0 .825l1.06 1.06a2.083 2.083 0 0 0 0-2.945zm1.06-1.06a2.083 2.083 0 0 0-2.946 0l1.06 1.06a.583.583 0 0 1 .826 0zm1.315-1.315a3.854 3.854 0 0 1 0 5.45l1.06 1.062a5.354 5.354 0 0 0 0-7.573zm1.06-1.06a5.354 5.354 0 0 0-7.572 0l1.061 1.06a3.854 3.854 0 0 1 5.451 0zm-8.948 5.096L5.76 14.39l1.06 1.06l2.475-2.474zm1.377 6.326l.827-.827l-1.06-1.06l-.828.827zm.827-.827l1.648-1.648l-1.06-1.06l-1.649 1.648zM5.261 15.81l.154 1.392l1.491-.166l-.155-1.392zm1.537 2.775l1.392.154l.166-1.49l-1.392-.155zm-.979-.543l.139.139l1.06-1.06l-.138-.14zm1.144-.948q.032.003.056.026l-1.061 1.06c.226.227.522.37.84.405zm-1.548.108c.036.318.178.614.404.84l1.06-1.06a.1.1 0 0 1 .027.055zm3.134-.021a.24.24 0 0 1-.193.067L8.19 18.74a1.74 1.74 0 0 0 1.42-.498zM5.76 14.39a1.74 1.74 0 0 0-.498 1.42l1.49-.166a.24.24 0 0 1 .068-.193zm3.904-2.822a3.85 3.85 0 0 1 1.007-3.69l-1.06-1.06a5.35 5.35 0 0 0-1.4 5.123zm6.458 1.762a3.85 3.85 0 0 1-3.688 1.007l-.374 1.453a5.35 5.35 0 0 0 5.123-1.4zm-4.036 2.436a.1.1 0 0 1-.036.023l.01.001l.373-1.453a1.47 1.47 0 0 0-1.408.369zm-2.791-2.79a1.47 1.47 0 0 0 .369-1.408l-1.453.373l.001.01l.006-.014l.016-.022zm1.14 3.375l-1.166-1.153l-1.055 1.066l1.166 1.153z"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z" opacity=".5"></svg:path></svg:g>`,
})
export class SolarKeyMinimalisticSquareLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarKeySquare2BoldDuotoneIcon],svg[solar-key-square-2-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12" opacity=".5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M22 6.72c0 2.607-2.122 4.72-4.74 4.72c-.477 0-1.565-.11-2.094-.549l-.661.659c-.389.387-.284.501-.11.689c.071.078.155.17.22.299c0 0 .551.768 0 1.537c-.33.439-1.256 1.053-2.314 0l-.22.22s.66.768.11 1.536c-.331.439-1.213.878-1.985.11l-.771.768c-.53.527-1.176.22-1.433 0l-.661-.659c-.617-.614-.257-1.28 0-1.536l5.731-5.708s-.55-.878-.55-2.086c0-2.607 2.121-4.72 4.739-4.72S22 4.113 22 6.72m-3.086 0c0 .91-.74 1.647-1.653 1.647a1.65 1.65 0 0 1-1.654-1.647c0-.91.74-1.647 1.654-1.647a1.65 1.65 0 0 1 1.653 1.647" clip-rule="evenodd"></svg:path>`,
})
export class SolarKeySquare2BoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarKeySquare2LineDuotoneIcon],svg[solar-key-square-2-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M17.26 11.44c2.618 0 4.74-2.113 4.74-4.72S19.878 2 17.26 2c-2.617 0-4.739 2.113-4.739 4.72c0 1.208.551 2.086.551 2.086l-5.731 5.708c-.257.256-.617.922 0 1.537l.661.658c.257.22.904.527 1.433 0l.771-.768c.772.768 1.654.329 1.984-.11c.552-.768-.11-1.537-.11-1.537l.22-.22c1.059 1.054 1.985.44 2.315 0c.551-.768 0-1.536 0-1.536c-.22-.44-.661-.44-.11-.988l.661-.659c.53.44 1.617.55 2.095.55Z"></svg:path><svg:path d="M17.26 8.366a1.65 1.65 0 0 0 1.654-1.646c0-.91-.74-1.647-1.654-1.647a1.65 1.65 0 0 0-1.653 1.647c0 .91.74 1.646 1.654 1.646Z" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="M22 14.993c-.064 2.794-.33 4.426-1.446 5.541C19.088 22 16.73 22 12.01 22s-7.078 0-8.544-1.466S2 16.71 2 11.99s0-7.078 1.466-8.544C4.58 2.33 6.213 2.064 9.007 2" opacity=".5"></svg:path></svg:g>`,
})
export class SolarKeySquare2LineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarKeySquareBoldDuotoneIcon],svg[solar-key-square-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12" opacity=".5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M18 9.776a3.784 3.784 0 0 1-3.792 3.776c-.382 0-1.252-.088-1.675-.439l-.529.527c-.311.31-.227.401-.089.551c.058.063.125.136.177.24c0 0 .441.614 0 1.229c-.264.351-1.005.843-1.851 0l-.177.175s.53.615.088 1.23c-.264.351-.97.702-1.587.088l-.617.614c-.423.422-.94.176-1.146 0l-.53-.527c-.493-.491-.205-1.024 0-1.229l4.586-4.566s-.441-.703-.441-1.669A3.784 3.784 0 0 1 14.208 6A3.784 3.784 0 0 1 18 9.776m-3.792 1.317c.73 0 1.323-.59 1.323-1.317a1.32 1.32 0 0 0-1.323-1.317c-.73 0-1.322.59-1.322 1.317a1.32 1.32 0 0 0 1.322 1.317" clip-rule="evenodd"></svg:path>`,
})
export class SolarKeySquareBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarKeySquareLineDuotoneIcon],svg[solar-key-square-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M14.208 13.552A3.784 3.784 0 0 0 18 9.776A3.784 3.784 0 0 0 14.208 6a3.784 3.784 0 0 0-3.791 3.776c0 .966.44 1.669.44 1.669L6.274 16.01c-.206.205-.494.738 0 1.23l.529.526c.205.176.723.422 1.146 0l.617-.614c.617.614 1.323.263 1.587-.088c.441-.615-.088-1.23-.088-1.23l.177-.175c.846.843 1.587.351 1.851 0c.441-.615 0-1.23 0-1.23c-.176-.351-.529-.351-.088-.79l.53-.527c.422.351 1.292.44 1.674.44Z"></svg:path><svg:path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z" opacity=".5"></svg:path></svg:g>`,
})
export class SolarKeySquareLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarKeyboardBoldDuotoneIcon],svg[solar-keyboard-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 5H8c-2.828 0-4.243 0-5.121.879C2 6.757 2 8.172 2 11v2c0 2.828 0 4.243.879 5.121C3.757 19 5.172 19 8 19h8c2.828 0 4.243 0 5.121-.879C22 17.243 22 15.828 22 13v-2c0-2.828 0-4.243-.879-5.121C20.243 5 18.828 5 16 5" opacity=".5"></svg:path><svg:path fill="currentColor" d="M6 10a1 1 0 1 0 0-2a1 1 0 0 0 0 2m0 3a1 1 0 1 0 0-2a1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2a1 1 0 0 0 0 2m0-3a1 1 0 1 0 0-2a1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2a1 1 0 0 0 0 2m0 3a1 1 0 1 0 0-2a1 1 0 0 0 0 2m3-3a1 1 0 1 0 0-2a1 1 0 0 0 0 2m0 3a1 1 0 1 0 0-2a1 1 0 0 0 0 2m3-3a1 1 0 1 0 0-2a1 1 0 0 0 0 2m0 3a1 1 0 1 0 0-2a1 1 0 0 0 0 2m-.25 3a.75.75 0 0 1-.75.75H7a.75.75 0 0 1 0-1.5h10a.75.75 0 0 1 .75.75"></svg:path>`,
})
export class SolarKeyboardBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarKeyboardLineDuotoneIcon],svg[solar-keyboard-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M7 9a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0 3a1 1 0 1 1-2 0a1 1 0 0 1 2 0m3 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0-3a1 1 0 1 1-2 0a1 1 0 0 1 2 0m3 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0 3a1 1 0 1 1-2 0a1 1 0 0 1 2 0m3-3a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0 3a1 1 0 1 1-2 0a1 1 0 0 1 2 0m3-3a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0 3a1 1 0 1 1-2 0a1 1 0 0 1 2 0" opacity=".5"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M2 11c0-2.828 0-4.243.879-5.121C3.757 5 5.172 5 8 5h8c2.828 0 4.243 0 5.121.879C22 6.757 22 8.172 22 11v2c0 2.828 0 4.243-.879 5.121C20.243 19 18.828 19 16 19H8c-2.828 0-4.243 0-5.121-.879C2 17.243 2 15.828 2 13z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M7 16h10" opacity=".5"></svg:path></svg:g>`,
})
export class SolarKeyboardLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarKickScooterBoldDuotoneIcon],svg[solar-kick-scooter-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.631 4.769a15 15 0 0 0-1.022-.019H14.38a.75.75 0 1 1 0-1.5h1.255c.435 0 .803 0 1.107.023c.32.024.622.075.918.206c.456.202.846.529 1.124.942c.181.269.283.558.36.867c.073.294.133.653.205 1.077l1.009 5.98a.75.75 0 0 1-.74.876c-2.487 0-4.488 1.99-4.488 4.426a.75.75 0 0 1-.75.75H7.42a3.13 3.13 0 0 1-3.039 2.353c-1.72 0-3.131-1.38-3.131-3.103c0-1.722 1.41-3.103 3.131-3.103c1.462 0 2.7.997 3.039 2.353h6.258c.337-2.64 2.425-4.73 5.065-5.113l-.868-5.143c-.077-.458-.128-.76-.186-.991c-.055-.222-.103-.324-.148-.391a1.15 1.15 0 0 0-.488-.408c-.077-.034-.19-.065-.422-.082"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M16.488 17.647c0-1.722 1.41-3.103 3.131-3.103s3.131 1.38 3.131 3.103c0 1.722-1.41 3.103-3.13 3.103c-1.722 0-3.132-1.381-3.132-3.103" clip-rule="evenodd" opacity=".5"></svg:path>`,
})
export class SolarKickScooterBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarKickScooterLineDuotoneIcon],svg[solar-kick-scooter-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.381 17.647v.75a.75.75 0 0 0 .75-.75zm5.238-5.176v.75a.75.75 0 0 0 .74-.875zm-1.004-5.954l-.74.124zM14.381 3.25a.75.75 0 0 0 0 1.5zm3.782 1.59l-.622.419zm-.806-.675l.304-.686zM15.13 17.647c0-2.436 2.001-4.426 4.488-4.426v-1.5c-3.299 0-5.988 2.645-5.988 5.926zm-.75-.75H6.762v1.5h7.619zm5.978-4.551l-1.005-5.954l-1.479.25l1.005 5.953zm-4.75-9.096H14.38v1.5h1.228zm3.746 3.142c-.074-.436-.136-.804-.21-1.104a2.7 2.7 0 0 0-.36-.867l-1.244.838c.045.067.093.169.148.39c.058.232.11.534.186.992zM15.609 4.75c.47 0 .78 0 1.022.019c.232.017.345.048.422.082l.608-1.372a2.7 2.7 0 0 0-.918-.206c-.31-.023-.687-.023-1.134-.023zm3.176-.329a2.65 2.65 0 0 0-1.124-.942l-.608 1.372c.2.088.368.23.488.408z" opacity=".5"></svg:path><svg:path fill="currentColor" d="M6.012 17.647c0 .877-.722 1.603-1.631 1.603v1.5c1.72 0 3.13-1.381 3.13-3.103zM4.38 19.25c-.91 0-1.631-.726-1.631-1.603h-1.5c0 1.722 1.41 3.103 3.131 3.103zm-1.63-1.603c0-.877.722-1.603 1.631-1.603v-1.5c-1.72 0-3.131 1.38-3.131 3.103zm1.631-1.603c.91 0 1.63.726 1.63 1.603h1.5c0-1.722-1.41-3.103-3.13-3.103zm16.869 1.603c0 .877-.722 1.603-1.631 1.603v1.5c1.72 0 3.13-1.381 3.13-3.103zm-1.631 1.603c-.91 0-1.631-.726-1.631-1.603h-1.5c0 1.722 1.41 3.103 3.131 3.103zm-1.631-1.603c0-.877.722-1.603 1.631-1.603v-1.5c-1.72 0-3.131 1.38-3.131 3.103zm1.631-1.603c.91 0 1.63.726 1.63 1.603h1.5c0-1.722-1.41-3.103-3.13-3.103z"></svg:path>`,
})
export class SolarKickScooterLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLadleBoldDuotoneIcon],svg[solar-ladle-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 17c3.054 0 6-1.12 6-2.5S19.054 12 16 12s-6.632 1.12-6.632 2.5S12.946 17 16 17" opacity=".5"></svg:path><svg:path fill="currentColor" d="M6.434 2.5A2.934 2.934 0 0 0 3.5 5.434a.75.75 0 0 1-1.5 0a4.434 4.434 0 1 1 8.868 0v7.568c-.897.413-1.486.924-1.5 1.478V5.434A2.934 2.934 0 0 0 6.434 2.5m2.934 12.02c.009.323.212.632.558.914C11.05 16.352 13.676 17 16 17c3.054 0 6-1.12 6-2.5v1.184a6.316 6.316 0 1 1-12.632 0V14.5z"></svg:path>`,
})
export class SolarLadleBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLadleLineDuotoneIcon],svg[solar-ladle-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M2 5.684a3.684 3.684 0 0 1 7.368 0V15" opacity=".5"></svg:path><svg:path d="M22 14.5v1.184a6.316 6.316 0 0 1-12.632 0v-1.052M22 14.5c0 1.38-2.946 2.5-6 2.5s-6.632-.988-6.632-2.368M22 14.5c0-1.38-2.946-2.5-6-2.5s-6.632 1.25-6.632 2.632"></svg:path></svg:g>`,
})
export class SolarLadleLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLampBoldDuotoneIcon],svg[solar-lamp-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.968 7.445c.609-2.346.913-3.519 1.7-4.294a4 4 0 0 1 .756-.585C8.372 2 9.584 2 12.007 2s3.634 0 4.582.566a4 4 0 0 1 .757.585c.786.775 1.09 1.948 1.699 4.294l.084.324c.828 3.189 1.242 4.783.49 5.903a3 3 0 0 1-.247.319c-.285.322-.648.541-1.116.69c-.596.146-1.246.23-1.497.254c-.849.065-1.904.065-3.223.065h-3.059c-3.294 0-4.941 0-5.836-1.01q-.135-.15-.247-.318c-.752-1.12-.338-2.714.49-5.903z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="m16.759 14.935l-.003.065v2a.75.75 0 1 0 1.5 0v-2.318c-.596.145-1.246.23-1.497.253" opacity=".5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M11.256 21.25V15h1.5v6.25z" clip-rule="evenodd" opacity=".5"></svg:path><svg:path fill="currentColor" d="M11.256 21.25h-2.25a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5z"></svg:path>`,
})
export class SolarLampBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLampLineDuotoneIcon],svg[solar-lamp-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M9 22h6"></svg:path><svg:path stroke-linecap="round" d="M12 22v-7" opacity=".5"></svg:path><svg:path d="M4.961 7.445c.61-2.346.914-3.519 1.7-4.294a4 4 0 0 1 .757-.585C8.365 2 9.577 2 12 2s3.635 0 4.582.566a4 4 0 0 1 .757.585c.786.775 1.09 1.948 1.7 4.294l.084.324c.827 3.189 1.241 4.783.49 5.903a3 3 0 0 1-.247.319C18.47 15 16.823 15 13.529 15h-3.058c-3.295 0-4.942 0-5.837-1.01q-.135-.15-.247-.318c-.752-1.12-.338-2.714.49-5.903z"></svg:path><svg:path stroke-linecap="round" d="M17.5 15v2" opacity=".5"></svg:path></svg:g>`,
})
export class SolarLampLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLaptop2BoldDuotoneIcon],svg[solar-laptop-2-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.5 2h5c2.828 0 4.243 0 5.121.879c.879.878.879 2.293.879 5.121v7h-3.833a3.5 3.5 0 0 0-2.1.7l-.934.7a.5.5 0 0 1-.3.1h-2.666a.5.5 0 0 1-.3-.1l-.934-.7a3.5 3.5 0 0 0-2.1-.7H3.5V8c0-2.828 0-4.243.879-5.121C5.257 2 6.672 2 9.5 2" opacity=".5"></svg:path><svg:path fill="currentColor" d="M5 22h14a3 3 0 0 0 3-3v-1.5a1 1 0 0 0-1-1h-4.333a2 2 0 0 0-1.2.4l-.934.7a2 2 0 0 1-1.2.4h-2.666a2 2 0 0 1-1.2-.4l-.934-.7a2 2 0 0 0-1.2-.4H3a1 1 0 0 0-1 1V19a3 3 0 0 0 3 3"></svg:path>`,
})
export class SolarLaptop2BoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLaptop2LineDuotoneIcon],svg[solar-laptop-2-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M20.5 15v-5c0-2.828 0-4.243-.879-5.121C18.743 4 17.328 4 14.5 4h-5c-2.828 0-4.243 0-5.121.879C3.5 5.757 3.5 7.172 3.5 10v5" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="M5 20h14a3 3 0 0 0 3-3v-1a1 1 0 0 0-1-1h-4.333a2 2 0 0 0-1.2.4l-.934.7a2 2 0 0 1-1.2.4h-2.666a2 2 0 0 1-1.2-.4l-.934-.7a2 2 0 0 0-1.2-.4H3a1 1 0 0 0-1 1v1a3 3 0 0 0 3 3Z"></svg:path></svg:g>`,
})
export class SolarLaptop2LineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLaptop3BoldDuotoneIcon],svg[solar-laptop-3-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.5 2h-5c-2.828 0-4.243 0-5.121.879C3.5 3.757 3.5 5.172 3.5 8v3.5c0 1.886 0 2.828.586 3.414s1.528.586 3.414.586h9c1.886 0 2.828 0 3.414-.586s.586-1.528.586-3.414V8c0-2.828 0-4.243-.879-5.121C18.743 2 17.328 2 14.5 2" opacity=".5"></svg:path><svg:path fill="currentColor" d="M5 22h14a3 3 0 0 0 3-3v-1a1 1 0 0 0-1-1h-4.333a2 2 0 0 0-1.2.4l-.934.7a2 2 0 0 1-1.2.4h-2.666a2 2 0 0 1-1.2-.4l-.934-.7a2 2 0 0 0-1.2-.4H3a1 1 0 0 0-1 1v1a3 3 0 0 0 3 3"></svg:path>`,
})
export class SolarLaptop3BoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLaptop3LineDuotoneIcon],svg[solar-laptop-3-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M14.5 2h-5c-2.828 0-4.243 0-5.121.879C3.5 3.757 3.5 5.172 3.5 8v3c0 1.886 0 2.828.586 3.414S5.614 15 7.5 15h9c1.886 0 2.828 0 3.414-.586S20.5 12.886 20.5 11V8c0-2.828 0-4.243-.879-5.121C18.743 2 17.328 2 14.5 2Z" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="M5 22h14a3 3 0 0 0 3-3v-1a1 1 0 0 0-1-1h-4.333a2 2 0 0 0-1.2.4l-.934.7a2 2 0 0 1-1.2.4h-2.666a2 2 0 0 1-1.2-.4l-.934-.7a2 2 0 0 0-1.2-.4H3a1 1 0 0 0-1 1v1a3 3 0 0 0 3 3Z"></svg:path></svg:g>`,
})
export class SolarLaptop3LineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLaptopBoldDuotoneIcon],svg[solar-laptop-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.938 3.586c-.585.586-.585 1.528-.585 3.414v7h15.294V7c0-1.886 0-2.828-.586-3.414S17.532 3 15.647 3H8.353c-1.886 0-2.829 0-3.415.586" opacity=".5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="m21.391 16.336l.088.092a2 2 0 0 1 .52 1.284l.001.127c0 .15 0 .224-.004.287a2 2 0 0 1-1.87 1.87a5 5 0 0 1-.287.004H4.161c-.15 0-.224 0-.287-.004a2 2 0 0 1-1.87-1.87C2 18.063 2 17.988 2 17.84l.001-.127a2 2 0 0 1 .52-1.284l.088-.092L3.903 15h16.194zM8.75 18a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M12.75 5.75a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0"></svg:path>`,
})
export class SolarLaptopBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLaptopLineDuotoneIcon],svg[solar-laptop-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M19.647 15.536H4.353m15.294 0V8c0-1.886 0-2.828-.586-3.414C18.476 4 17.533 4 15.647 4H8.353c-1.886 0-2.828 0-3.414.586S4.353 6.114 4.353 8v7.536m15.294 0l1.744 1.8l.088.092a2 2 0 0 1 .52 1.284l.001.127c0 .15 0 .224-.004.287a2 2 0 0 1-1.87 1.87a5 5 0 0 1-.287.004H4.161c-.15 0-.224 0-.287-.004a2 2 0 0 1-1.87-1.87C2 19.063 2 18.988 2 18.84l.001-.127a2 2 0 0 1 .52-1.284l.088-.092l1.744-1.8"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M9.5 18.5h5" opacity=".5"></svg:path><svg:path fill="currentColor" d="M12.75 6.75a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0" opacity=".5"></svg:path></svg:g>`,
})
export class SolarLaptopLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLaptopMinimalisticBoldDuotoneIcon],svg[solar-laptop-minimalistic-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1 20.24c0-.42.344-.76.767-.76h20.466c.423 0 .767.34.767.76s-.344.76-.767.76H1.767A.764.764 0 0 1 1 20.24" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M3.69 3.89c-.899.89-.899 2.324-.899 5.19v5.067c0 1.91 0 2.866.6 3.46c.599.593 1.564.593 3.493.593h10.233c1.93 0 2.894 0 3.493-.594c.6-.593.6-1.549.6-3.46V9.08c0-2.866 0-4.3-.9-5.19C19.412 3 17.965 3 15.07 3H8.93c-2.894 0-4.34 0-5.24.89" opacity=".5"></svg:path><svg:path fill="currentColor" d="M8.93 14.4a.764.764 0 0 0-.767.76c0 .42.344.76.768.76h6.14c.423 0 .767-.34.767-.76s-.344-.76-.768-.76z"></svg:path>`,
})
export class SolarLaptopMinimalisticBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLaptopMinimalisticLineDuotoneIcon],svg[solar-laptop-minimalistic-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M3 9c0-2.828 0-4.243.879-5.121C4.757 3 6.172 3 9 3h6c2.828 0 4.243 0 5.121.879C21 4.757 21 6.172 21 9v5c0 1.886 0 2.828-.586 3.414S18.886 18 17 18H7c-1.886 0-2.828 0-3.414-.586S3 15.886 3 14z"></svg:path><svg:path stroke-linecap="round" d="M22 21H2m13-6H9" opacity=".5"></svg:path></svg:g>`,
})
export class SolarLaptopMinimalisticLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLayersBoldDuotoneIcon],svg[solar-layers-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.979 9.685C2.993 8.891 2 8.494 2 8s.993-.89 2.979-1.685l2.808-1.123C9.773 4.397 10.767 4 12 4s2.227.397 4.213 1.192l2.808 1.123C21.007 7.109 22 7.506 22 8s-.993.89-2.979 1.685l-2.808 1.124C14.227 11.603 13.233 12 12 12s-2.227-.397-4.213-1.191z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M2 8c0 .494.993.89 2.979 1.685l2.808 1.124C9.773 11.603 10.767 12 12 12s2.227-.397 4.213-1.191l2.808-1.124C21.007 8.891 22 8.494 22 8s-.993-.89-2.979-1.685l-2.808-1.123C14.227 4.397 13.233 4 12 4s-2.227.397-4.213 1.192L4.98 6.315C2.993 7.109 2 7.506 2 8" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="m5.766 10l-.787.315C2.993 11.109 2 11.507 2 12s.993.89 2.979 1.685l2.808 1.124C9.773 15.603 10.767 16 12 16s2.227-.397 4.213-1.191l2.808-1.124C21.007 12.891 22 12.493 22 12s-.993-.89-2.979-1.685L18.234 10l-2.021.809C14.227 11.603 13.233 12 12 12s-2.227-.397-4.213-1.191z" opacity=".7"></svg:path><svg:path fill="currentColor" d="m5.766 14l-.787.315C2.993 15.109 2 15.507 2 16s.993.89 2.979 1.685l2.808 1.124C9.773 19.603 10.767 20 12 20s2.227-.397 4.213-1.192l2.808-1.123C21.007 16.891 22 16.494 22 16c0-.493-.993-.89-2.979-1.685L18.234 14l-2.021.809C14.227 15.603 13.233 16 12 16s-2.227-.397-4.213-1.191z" opacity=".4"></svg:path>`,
})
export class SolarLayersBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLayersLineDuotoneIcon],svg[solar-layers-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M4.979 9.685C2.993 8.891 2 8.494 2 8s.993-.89 2.979-1.685l2.808-1.123C9.773 4.397 10.767 4 12 4s2.227.397 4.213 1.192l2.808 1.123C21.007 7.109 22 7.506 22 8s-.993.89-2.979 1.685l-2.808 1.124C14.227 11.603 13.233 12 12 12s-2.227-.397-4.213-1.191z"></svg:path><svg:path d="m5.766 10l-.787.315C2.993 11.109 2 11.507 2 12s.993.89 2.979 1.685l2.808 1.124C9.773 15.603 10.767 16 12 16s2.227-.397 4.213-1.191l2.808-1.124C21.007 12.891 22 12.493 22 12s-.993-.89-2.979-1.685L18.234 10M5.766 14l-.787.315C2.993 15.109 2 15.507 2 16s.993.89 2.979 1.685l2.808 1.124C9.773 19.603 10.767 20 12 20s2.227-.397 4.213-1.192l2.808-1.123C21.007 16.891 22 16.494 22 16c0-.493-.993-.89-2.979-1.685L18.234 14" opacity=".5"></svg:path></svg:g>`,
})
export class SolarLayersLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLayersMinimalisticBoldDuotoneIcon],svg[solar-layers-minimalistic-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.624 4.449C9.501 3.698 10.621 3.25 12 3.25s2.499.448 4.376 1.199l2.97 1.188c.954.382 1.727.69 2.258.969c.268.14.528.3.729.493c.206.198.417.498.417.901s-.21.703-.417.901c-.2.193-.46.352-.73.493c-.53.278-1.303.587-2.258.97l-2.97 1.187C14.5 12.302 13.38 12.75 12 12.75s-2.499-.448-4.376-1.199l-2.969-1.188c-.955-.382-1.728-.69-2.259-.969a3.2 3.2 0 0 1-.729-.493C1.461 8.703 1.25 8.403 1.25 8s.21-.703.417-.901c.2-.193.46-.352.73-.493c.53-.278 1.303-.587 2.258-.97z"></svg:path><svg:path fill="currentColor" d="M2.502 11.443L2.5 11.44a.75.75 0 0 0-1 1.119L2 12l-.5.559l.002.002l.005.004l.014.012l.045.039q.057.047.161.129c.14.108.343.256.61.429c.533.346 1.32.79 2.363 1.207l2.809 1.124l.115.046c1.877.751 2.997 1.199 4.376 1.199s2.499-.448 4.375-1.199l.116-.046L19.3 14.38a13.7 13.7 0 0 0 2.363-1.207a9 9 0 0 0 .771-.558l.045-.039l.014-.012l.005-.004l.001-.002h.002a.75.75 0 0 0-1-1.119l-.002.002l-.002.001l-.024.021l-.118.094a8 8 0 0 1-.508.357c-.46.299-1.161.697-2.105 1.074l-2.808 1.123c-2.025.81-2.874 1.138-3.934 1.138s-1.91-.328-3.934-1.138L5.257 12.99a12 12 0 0 1-2.104-1.074a8 8 0 0 1-.65-.472" opacity=".7"></svg:path><svg:path fill="currentColor" d="M2.499 15.5a.75.75 0 0 0-1 1.118H1.5l.002.002l.005.004l.014.012l.045.039l.161.13c.14.107.343.255.61.428c.533.346 1.32.79 2.363 1.207l2.809 1.124l.115.046c1.877.751 2.997 1.2 4.376 1.2s2.499-.449 4.375-1.2l.116-.046L19.3 18.44a13.7 13.7 0 0 0 2.363-1.208a9 9 0 0 0 .771-.558l.045-.039l.014-.012l.005-.004l.001-.001l.002-.002a.75.75 0 0 0-1-1.118l-.002.002l-.002.001l-.024.021l-.118.094a8 8 0 0 1-.508.357c-.46.299-1.161.697-2.105 1.074l-2.808 1.123c-2.025.81-2.874 1.138-3.934 1.138s-1.91-.328-3.934-1.138l-2.809-1.123a12 12 0 0 1-2.104-1.073a8 8 0 0 1-.626-.452l-.025-.02z" opacity=".4"></svg:path>`,
})
export class SolarLayersMinimalisticBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLayersMinimalisticLineDuotoneIcon],svg[solar-layers-minimalistic-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M4.979 9.685C2.993 8.891 2 8.494 2 8s.993-.89 2.979-1.685l2.808-1.123C9.773 4.397 10.767 4 12 4s2.227.397 4.213 1.192l2.808 1.123C21.007 7.109 22 7.506 22 8s-.993.89-2.979 1.685l-2.808 1.124C14.227 11.603 13.233 12 12 12s-2.227-.397-4.213-1.191z"></svg:path><svg:path stroke-linecap="round" d="M22 12s-.993.89-2.979 1.685l-2.808 1.124C14.227 15.603 13.233 16 12 16s-2.227-.397-4.213-1.191L4.98 13.685C2.993 12.891 2 12 2 12m20 4s-.993.89-2.979 1.685l-2.808 1.124C14.227 19.603 13.233 20 12 20s-2.227-.397-4.213-1.192L4.98 17.685C2.993 16.891 2 16 2 16" opacity=".5"></svg:path></svg:g>`,
})
export class SolarLayersMinimalisticLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLeafBoldDuotoneIcon],svg[solar-leaf-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 22c-4.418 0-8-3.646-8-8.143c0-4.462 2.553-9.67 6.537-11.531A3.45 3.45 0 0 1 12 2z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M13.463 2.326A3.45 3.45 0 0 0 12 2v7l4.432-4.432c-.863-.947-1.86-1.724-2.97-2.242" opacity=".3"></svg:path><svg:path fill="currentColor" d="M12 9v5.5l6.614-6.614c-.572-1.22-1.308-2.357-2.182-3.318z" opacity=".4"></svg:path><svg:path fill="currentColor" d="m12 19.5l7.811-7.811a15 15 0 0 0-1.197-3.803L12 14.5z" opacity=".6"></svg:path><svg:path fill="currentColor" d="M19.811 11.689L12 19.5V22c4.418 0 8-3.646 8-8.143c0-.71-.064-1.438-.189-2.168" opacity=".7"></svg:path>`,
})
export class SolarLeafBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLeafLineDuotoneIcon],svg[solar-leaf-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="m12 9l4.5-4.5m-4.5 10L18.5 8M12 19.5l7.5-7.5" opacity=".5"></svg:path><svg:path d="M12 22c4.418 0 8-3.646 8-8.143c0-4.462-2.553-9.67-6.537-11.531A3.45 3.45 0 0 0 12 2m0 20c-4.418 0-8-3.646-8-8.143c0-4.462 2.553-9.67 6.537-11.531A3.45 3.45 0 0 1 12 2m0 20V2"></svg:path></svg:g>`,
})
export class SolarLeafLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLetterBoldDuotoneIcon],svg[solar-letter-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.2 3H9.8C5.652 3 3.577 3 2.289 4.318S1 7.758 1 12s0 6.364 1.289 7.682S5.652 21 9.8 21h4.4c4.148 0 6.223 0 7.511-1.318S23 16.242 23 12s0-6.364-1.289-7.682S18.348 3 14.2 3" opacity=".5"></svg:path><svg:path fill="currentColor" d="M19.128 8.033a.825.825 0 0 0-1.056-1.268l-2.375 1.98c-1.026.855-1.738 1.447-2.34 1.833c-.582.375-.977.5-1.357.5s-.774-.125-1.357-.5c-.601-.386-1.314-.978-2.34-1.834L5.928 6.765a.825.825 0 0 0-1.056 1.268l2.416 2.014c.975.812 1.765 1.47 2.463 1.92c.726.466 1.434.762 2.25.762c.814 0 1.522-.296 2.249-.763c.697-.448 1.487-1.107 2.462-1.92z"></svg:path>`,
})
export class SolarLetterBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLetterLineDuotoneIcon],svg[solar-letter-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 12c0-3.771 0-5.657 1.172-6.828S6.229 4 10 4h4c3.771 0 5.657 0 6.828 1.172S22 8.229 22 12s0 5.657-1.172 6.828S17.771 20 14 20h-4c-3.771 0-5.657 0-6.828-1.172S2 15.771 2 12Z" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="m6 8l2.159 1.8c1.837 1.53 2.755 2.295 3.841 2.295s2.005-.765 3.841-2.296L18 8"></svg:path></svg:g>`,
})
export class SolarLetterLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLetterOpenedBoldDuotoneIcon],svg[solar-letter-opened-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m6.72 10.6l1.439 1.2c1.836 1.53 2.755 2.295 3.84 2.295c1.087 0 2.005-.765 3.842-2.296l1.44-1.2c.353-.294.53-.442.624-.643c.095-.202.095-.432.095-.893V7q0-.48-.002-.898c-.012-1.771-.098-2.737-.73-3.37C16.535 2 15.357 2 13 2h-2c-2.357 0-3.536 0-4.268.732c-.633.633-.72 1.599-.732 3.37v2.961c0 .46 0 .691.094.893c.095.201.272.349.625.644M9.25 6a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4A.75.75 0 0 1 9.25 6m1 3a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="m8.159 11.8l-1.44-1.2c-.353-.295-.53-.442-.625-.644S6 9.524 6 9.064V6.102c-1.3.128-2.175.417-2.828 1.07C2 8.343 2 10.23 2 14.002c0 3.77 0 5.656 1.172 6.827S6.229 22.002 10 22.002h4c3.771 0 5.657 0 6.828-1.172S22 17.773 22 14.002s0-5.658-1.172-6.83c-.653-.653-1.529-.942-2.83-1.07q.002.42.002.9v2.063c0 .46 0 .69-.095.892c-.094.202-.27.35-.625.644l-1.44 1.2c-1.836 1.53-2.754 2.295-3.84 2.295S9.995 13.33 8.159 11.8" opacity=".5"></svg:path>`,
})
export class SolarLetterOpenedBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLetterOpenedLineDuotoneIcon],svg[solar-letter-opened-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M18 6.102c1.3.127 2.175.416 2.828 1.07C22 8.343 22 10.229 22 14s0 5.657-1.172 6.828S17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.772 2 14s0-5.657 1.172-6.828C3.825 6.518 4.7 6.229 6 6.102" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="M10 6h4m-3 3h2m-4.841 2.8l-.72-.6c-.707-.59-1.061-.885-1.25-1.288C6 9.508 6 9.048 6 8.126V7c0-2.357 0-3.536.732-4.268S8.643 2 11 2h2c2.357 0 3.535 0 4.268.732S18 4.643 18 7v1.127c0 .92 0 1.381-.189 1.785s-.543.698-1.25 1.287l-.72.6c-1.836 1.53-2.755 2.296-3.841 2.296s-2.004-.765-3.841-2.296Z"></svg:path><svg:path stroke-linecap="round" d="m6 10l2.159 1.8c1.837 1.53 2.755 2.295 3.841 2.295s2.005-.765 3.841-2.296L18 10"></svg:path></svg:g>`,
})
export class SolarLetterOpenedLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLetterUnreadBoldDuotoneIcon],svg[solar-letter-unread-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24 5a3 3 0 1 1-6 0a3 3 0 0 1 6 0m-6.766 2.464l-1.537 1.28c-1.026.856-1.738 1.447-2.34 1.834c-.582.375-.977.5-1.357.5s-.774-.125-1.357-.5c-.601-.386-1.314-.978-2.34-1.834L5.928 6.765a.825.825 0 0 0-1.056 1.268l2.416 2.014c.975.812 1.765 1.47 2.463 1.92c.726.466 1.434.762 2.25.762c.814 0 1.522-.296 2.249-.763c.697-.448 1.487-1.107 2.462-1.92l1.666-1.388a4.5 4.5 0 0 1-1.144-1.194"></svg:path><svg:path fill="currentColor" d="M18.454 6.587a.825.825 0 0 1 .958.959a3 3 0 0 1-.958-.959"></svg:path><svg:path fill="currentColor" d="M16.958 3.021C16.156 3 15.244 3 14.2 3H9.8C5.652 3 3.577 3 2.289 4.318S1 7.758 1 12s0 6.364 1.289 7.682S5.652 21 9.8 21h4.4c4.148 0 6.223 0 7.511-1.318S23 16.242 23 12c0-1.067 0-2-.02-2.82a4.4 4.4 0 0 1-1.98.468c-2.485 0-4.5-2.06-4.5-4.603c0-.726.165-1.413.458-2.024" opacity=".5"></svg:path>`,
})
export class SolarLetterUnreadBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLetterUnreadLineDuotoneIcon],svg[solar-letter-unread-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M22 10c.018.727 0 1.054 0 2c0 3.771 0 5.657-1.172 6.828S17.771 20 14 20h-4c-3.771 0-5.657 0-6.828-1.172S2 15.771 2 12s0-5.657 1.172-6.828S6.229 4 10 4h3" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="m6 8l2.159 1.8c1.837 1.53 2.755 2.295 3.841 2.295s2.005-.765 3.841-2.296"></svg:path><svg:circle cx="19" cy="5" r="3"></svg:circle></svg:g>`,
})
export class SolarLetterUnreadLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLibraryBoldDuotoneIcon],svg[solar-library-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.672 7.542h6.656c3.374 0 5.062 0 6.01.987s.724 2.511.278 5.56l-.422 2.892c-.35 2.391-.525 3.587-1.422 4.303s-2.22.716-4.867.716h-5.81c-2.646 0-3.97 0-4.867-.716s-1.072-1.912-1.422-4.303l-.422-2.892c-.447-3.049-.67-4.573.278-5.56s2.636-.987 6.01-.987M8 18c0-.414.373-.75.833-.75h6.334c.46 0 .833.336.833.75s-.373.75-.833.75H8.833c-.46 0-.833-.336-.833-.75" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M8.51 2h6.98c.233 0 .41 0 .567.015c1.108.109 2.014.775 2.399 1.672H5.544c.385-.897 1.292-1.563 2.4-1.672C8.099 2 8.278 2 8.51 2" opacity=".4"></svg:path><svg:path fill="currentColor" d="M6.31 4.723c-1.39 0-2.53.84-2.91 1.953l-.024.07a8 8 0 0 1 1.232-.253c1.08-.138 2.446-.138 4.032-.138h6.892c1.586 0 2.952 0 4.032.138c.42.054.834.133 1.232.253l-.023-.07c-.38-1.114-1.52-1.953-2.911-1.953z" opacity=".7"></svg:path>`,
})
export class SolarLibraryBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLibraryLineDuotoneIcon],svg[solar-library-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M19.562 7a2.132 2.132 0 0 0-2.1-2.5H6.538a2.132 2.132 0 0 0-2.1 2.5M17.5 4.5c.028-.26.043-.389.043-.496a2 2 0 0 0-1.787-1.993C15.65 2 15.52 2 15.26 2H8.74c-.26 0-.391 0-.497.011a2 2 0 0 0-1.787 1.993c0 .107.014.237.043.496" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="M15 18H9"></svg:path><svg:path d="M2.384 13.793c-.447-3.164-.67-4.745.278-5.77C3.61 7 5.298 7 8.672 7h6.656c3.374 0 5.062 0 6.01 1.024s.724 2.605.278 5.769l-.422 3c-.35 2.48-.525 3.721-1.422 4.464s-2.22.743-4.867.743h-5.81c-2.646 0-3.97 0-4.867-.743s-1.072-1.983-1.422-4.464z"></svg:path></svg:g>`,
})
export class SolarLibraryLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLightbulbBoldDuotoneIcon],svg[solar-lightbulb-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 9.674C4 5.436 7.358 2 11.5 2S19 5.436 19 9.674a7.74 7.74 0 0 1-2.499 5.72c-.51.467-.889.814-1.157 1.066a15 15 0 0 0-.4.39l-.025.027l-.005.006l-.003.003c-.237.3-.288.376-.318.446s-.053.16-.113.54c-.023.15-.026.406-.026 1.105v.03c0 .409 0 .762-.025 1.051c-.027.306-.087.61-.248.895a2.07 2.07 0 0 1-.75.767c-.278.165-.575.226-.874.254c-.283.026-.628.026-1.028.026h-.058c-.4 0-.745 0-1.028-.026c-.3-.028-.596-.09-.875-.254a2.07 2.07 0 0 1-.749-.767c-.16-.285-.22-.588-.248-.895c-.026-.29-.026-.642-.026-1.051v-.03c0-.699-.002-.955-.026-1.105c-.06-.38-.081-.47-.112-.54c-.03-.07-.081-.147-.318-.446l-.003-.003l-.005-.006l-.025-.027l-.088-.09a15 15 0 0 0-.312-.3c-.268-.252-.647-.599-1.157-1.067A7.74 7.74 0 0 1 4 9.674" opacity=".5"></svg:path><svg:path fill="currentColor" d="M10.298 13.625a.75.75 0 1 0-1.299.75a2.76 2.76 0 0 0 1.632 1.271V17a.75.75 0 0 0 1.5 0v-1.353a2.76 2.76 0 0 0 1.632-1.271a.75.75 0 0 0-1.299-.751a1.249 1.249 0 0 1-2.166 0m-.384 6.05h3.17a4 4 0 0 1-.014.258c-.018.209-.05.285-.071.323a.7.7 0 0 1-.25.255c-.037.022-.111.054-.316.073c-.214.02-.496.02-.934.02c-.437 0-.72 0-.934-.02c-.204-.019-.279-.05-.316-.073a.7.7 0 0 1-.25-.255c-.02-.038-.052-.114-.07-.323a5 5 0 0 1-.015-.259"></svg:path>`,
})
export class SolarLightbulbBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLightbulbBoltBoldDuotoneIcon],svg[solar-lightbulb-bolt-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 9.674C4 5.436 7.358 2 11.5 2S19 5.436 19 9.674a7.74 7.74 0 0 1-2.499 5.72c-.51.467-.889.814-1.157 1.066a15 15 0 0 0-.4.39l-.025.027l-.008.01c-.237.298-.288.375-.318.445s-.053.16-.113.54c-.023.15-.026.406-.026 1.105v.03c0 .409 0 .762-.025 1.051c-.027.306-.087.61-.248.895a2.07 2.07 0 0 1-.75.767c-.278.165-.575.226-.874.254c-.283.026-.628.026-1.028.026h-.058c-.4 0-.745 0-1.028-.026c-.3-.028-.596-.09-.875-.254a2.07 2.07 0 0 1-.749-.767c-.16-.285-.22-.588-.248-.895c-.026-.29-.026-.642-.026-1.051v-.03c0-.699-.002-.955-.026-1.105c-.06-.38-.081-.47-.112-.54c-.03-.07-.081-.147-.318-.446l-.008-.01l-.025-.026l-.088-.09a15 15 0 0 0-.312-.3c-.268-.252-.647-.599-1.157-1.067A7.74 7.74 0 0 1 4 9.674" opacity=".5"></svg:path><svg:path fill="currentColor" d="M13.085 19.675h-3.17q.004.144.014.258c.018.21.05.285.071.323a.7.7 0 0 0 .25.256c.037.021.111.054.316.072c.214.02.496.021.934.021c.437 0 .72 0 .934-.02c.204-.02.279-.052.316-.073a.7.7 0 0 0 .25-.256c.02-.038.052-.114.07-.323q.01-.113.015-.258M12.61 8.177c.307.224.378.66.159.973l-1.178 1.688h1.402a.68.68 0 0 1 .606.378a.71.71 0 0 1-.051.725L11.6 14.73a.67.67 0 0 1-.951.163a.71.71 0 0 1-.159-.973l1.178-1.688h-1.402a.68.68 0 0 1-.606-.379a.71.71 0 0 1 .051-.724l1.948-2.79a.67.67 0 0 1 .951-.163"></svg:path>`,
})
export class SolarLightbulbBoltBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLightbulbBoltLineDuotoneIcon],svg[solar-lightbulb-bolt-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M4.5 9.5a7.5 7.5 0 1 1 12.501 5.59c-1.12 1.003-1.68 1.505-1.832 1.69c-.487.601-.508.65-.63 1.413c-.039.237-.039.593-.039 1.307c0 .935 0 1.402-.201 1.75a1.5 1.5 0 0 1-.549.549C13.402 22 12.935 22 12 22s-1.402 0-1.75-.201a1.5 1.5 0 0 1-.549-.549c-.201-.348-.201-.815-.201-1.75c0-.713 0-1.07-.038-1.307c-.123-.763-.144-.812-.631-1.412c-.151-.186-.712-.688-1.832-1.692A7.48 7.48 0 0 1 4.5 9.5Z"></svg:path><svg:path d="M14.5 19.5h-5" opacity=".5"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m12.786 8.5l-2.143 3h3l-2.143 3" opacity=".5"></svg:path></svg:g>`,
})
export class SolarLightbulbBoltLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLightbulbLineDuotoneIcon],svg[solar-lightbulb-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M4.5 9.5a7.5 7.5 0 1 1 12.501 5.59c-1.12 1.003-1.68 1.505-1.832 1.69c-.487.601-.508.65-.63 1.413c-.039.237-.039.593-.039 1.307c0 .935 0 1.402-.201 1.75a1.5 1.5 0 0 1-.549.549C13.402 22 12.935 22 12 22s-1.402 0-1.75-.201a1.5 1.5 0 0 1-.549-.549c-.201-.348-.201-.815-.201-1.75c0-.713 0-1.07-.038-1.307c-.123-.763-.144-.812-.631-1.412c-.151-.186-.712-.688-1.832-1.692A7.48 7.48 0 0 1 4.5 9.5Z"></svg:path><svg:path d="M14.5 19.5h-5" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="M12 17v-2m0 0a2 2 0 0 0 1.732-1M12 15a2 2 0 0 1-1.732-1" opacity=".5"></svg:path></svg:g>`,
})
export class SolarLightbulbLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLightbulbMinimalisticBoldDuotoneIcon],svg[solar-lightbulb-minimalistic-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m7.41 13.828l1.105 1.053c.31.295.485.707.485 1.137c0 .647.518 1.172 1.157 1.172h3.686c.639 0 1.157-.525 1.157-1.172c0-.43.176-.842.485-1.137l1.104-1.053c1.542-1.48 2.402-3.425 2.41-5.446L19 8.297C19 4.842 15.866 2 12 2S5 4.842 5 8.297v.085c.009 2.021.87 3.966 2.41 5.446" opacity=".5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M9.25 18.709c0-.42.336-.76.75-.76h4c.414 0 .75.34.75.76s-.336.76-.75.76h-4a.755.755 0 0 1-.75-.76m.667 2.531c0-.42.335-.76.75-.76h2.666c.415 0 .75.34.75.76s-.335.76-.75.76h-2.666a.755.755 0 0 1-.75-.76" clip-rule="evenodd"></svg:path>`,
})
export class SolarLightbulbMinimalisticBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLightbulbMinimalisticLineDuotoneIcon],svg[solar-lightbulb-minimalistic-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M10 19.5h4M10.667 22h2.666" opacity=".5"></svg:path><svg:path d="m7.41 13.68l1.105 1.04c.31.291.485.698.485 1.123C9 16.482 9.518 17 10.157 17h3.686c.639 0 1.157-.518 1.157-1.157c0-.425.176-.832.485-1.123l1.104-1.04c1.542-1.461 2.402-3.382 2.41-5.378L19 8.218C19 4.807 15.866 2 12 2S5 4.807 5 8.218v.084c.009 1.996.87 3.917 2.41 5.379Z"></svg:path></svg:g>`,
})
export class SolarLightbulbMinimalisticLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLightningBoldDuotoneIcon],svg[solar-lightning-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:path id="solarLightningBoldDuotone0" fill="currentColor" d="M10.8 8h2.4c2.263 0 3.394 0 4.097.692C18 9.385 18 10.5 18 12.727v2.546c0 2.228 0 3.342-.703 4.035C16.594 20 15.463 20 13.2 20h-2.4c-2.263 0-3.394 0-4.097-.692C6 18.615 6 17.5 6 15.273v-2.546c0-2.228 0-3.342.703-4.035C7.406 8 8.537 8 10.8 8m1.8 4.45a.75.75 0 1 0-1.2-.9l-1.5 2a.75.75 0 0 0 .6 1.2H12l-.6.8a.75.75 0 1 0 1.2.9l1.5-2a.75.75 0 0 0-.6-1.2H12z"></svg:path></svg:defs><svg:path fill="currentColor" fill-rule="evenodd" d="M12.5 19.25a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75" clip-rule="evenodd" opacity=".5"></svg:path><svg:use href="#solarLightningBoldDuotone0" fill-rule="evenodd" clip-rule="evenodd"></svg:use><svg:path fill="currentColor" d="M10.25 4.75A.75.75 0 0 1 11 4h2a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1-.75-.75"></svg:path><svg:use href="#solarLightningBoldDuotone0" fill-rule="evenodd" clip-rule="evenodd"></svg:use><svg:path fill="currentColor" d="M8.5 5.5c0-1.404 0-2.107.337-2.611a2 2 0 0 1 .552-.552C9.893 2 10.596 2 12 2s2.107 0 2.611.337a2 2 0 0 1 .552.552c.337.504.337 1.207.337 2.611v2.55C14.898 8 14.148 8 13.2 8h-2.4c-.948 0-1.697 0-2.3.05z" opacity=".5"></svg:path>`,
})
export class SolarLightningBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLightningLineDuotoneIcon],svg[solar-lightning-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M13.2 8h-2.4c-2.263 0-3.394 0-4.097.692C6 9.385 6 10.5 6 12.727v2.546c0 2.228 0 3.342.703 4.035C7.406 20 8.537 20 10.8 20h2.4M10.8 8h2.4c2.263 0 3.394 0 4.097.692C18 9.385 18 10.5 18 12.727v2.546c0 2.228 0 3.342-.703 4.035C16.594 20 15.463 20 13.2 20h-2.4"></svg:path><svg:path stroke-linecap="round" d="M12 20v2" opacity=".5"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m12 12l-1.5 2h3L12 16" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="M11 5h2" opacity=".5"></svg:path><svg:path d="M15.5 8V5.5c0-1.404 0-2.107-.337-2.611a2 2 0 0 0-.552-.552C14.107 2 13.404 2 12 2s-2.107 0-2.611.337a2 2 0 0 0-.552.552C8.5 3.393 8.5 4.096 8.5 5.5V8"></svg:path></svg:g>`,
})
export class SolarLightningLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLikeBoldDuotoneIcon],svg[solar-like-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20.27 16.265l.705-4.08a1.666 1.666 0 0 0-1.64-1.95h-5.182a.833.833 0 0 1-.821-.969l.663-4.045a4.8 4.8 0 0 0-.09-1.973a1.64 1.64 0 0 0-1.093-1.137l-.145-.047a1.35 1.35 0 0 0-.993.068c-.34.164-.588.463-.68.818l-.476 1.834a7.6 7.6 0 0 1-.656 1.679c-.416.777-1.058 1.4-1.725 1.975l-1.44 1.24a1.67 1.67 0 0 0-.572 1.406l.813 9.393A1.666 1.666 0 0 0 8.596 22h4.649c3.481 0 6.452-2.426 7.024-5.735"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M2.968 9.485a.75.75 0 0 1 .78.685l.97 11.236a1.237 1.237 0 1 1-2.468.107V10.234a.75.75 0 0 1 .718-.749" clip-rule="evenodd" opacity=".5"></svg:path>`,
})
export class SolarLikeBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLikeLineDuotoneIcon],svg[solar-like-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20.975 12.185l-.739-.128zm-.705 4.08l-.74-.128zM6.938 20.477l-.747.065zm-.812-9.393l.747-.064zm7.869-5.863l.74.122zm-.663 4.045l.74.121zm-6.634.411l-.49-.568zm1.439-1.24l.49.569zm2.381-3.653l-.726-.189zm.476-1.834l.726.188zm1.674-.886l-.23.714zm.145.047l.229-.714zM9.862 6.463l.662.353zm4.043-3.215l-.726.188zm-2.23-1.116l-.326-.675zm8.561 9.925l-.705 4.08l1.478.256l.705-4.08zm-6.991 9.193H8.596v1.5h4.649zm-5.56-.837l-.812-9.393l-1.495.129l.813 9.393zm11.846-4.276c-.507 2.93-3.15 5.113-6.286 5.113v1.5c3.826 0 7.126-2.669 7.764-6.357zM13.255 5.1l-.663 4.045l1.48.242l.663-4.044zm-6.067 5.146l1.438-1.24l-.979-1.136L6.21 9.11zm4.056-5.274l.476-1.834l-1.452-.376l-.476 1.833zm1.194-2.194l.145.047l.459-1.428l-.145-.047zm-1.915 4.038a8.4 8.4 0 0 0 .721-1.844l-1.452-.377A7 7 0 0 1 9.2 6.11zm2.06-3.991a.89.89 0 0 1 .596.61l1.452-.376a2.38 2.38 0 0 0-1.59-1.662zm-.863.313a.51.51 0 0 1 .28-.33l-.651-1.351c-.532.256-.932.73-1.081 1.305zm.28-.33a.6.6 0 0 1 .438-.03l.459-1.428a2.1 2.1 0 0 0-1.548.107zm2.154 8.176h5.18v-1.5h-5.18zm.581-5.641a5.5 5.5 0 0 0-.104-2.284l-1.452.377a4 4 0 0 1 .076 1.664zM8.596 21.25a.916.916 0 0 1-.911-.837l-1.494.129a2.416 2.416 0 0 0 2.405 2.208zm.03-12.244c.68-.586 1.413-1.283 1.898-2.19L9.2 6.109c-.346.649-.898 1.196-1.553 1.76zm13.088 3.307a2.416 2.416 0 0 0-2.38-2.829v1.5c.567 0 1 .512.902 1.073zm-9.122-3.168a1.583 1.583 0 0 0 1.562 1.84v-1.5a.083.083 0 0 1-.082-.098zm-5.72 1.875a.92.92 0 0 1 .316-.774l-.98-1.137a2.42 2.42 0 0 0-.83 2.04z"></svg:path><svg:path fill="currentColor" d="m3.972 21.47l-.748.066zM3 10.235l.747-.064a.75.75 0 0 0-1.497.064zm1.719 11.172L3.747 10.17l-1.494.129l.971 11.237zm-.969.107v-11.28h-1.5v11.279zm-.526.022a.263.263 0 0 1 .263-.285v1.5c.726 0 1.294-.622 1.232-1.344zm.263-.285c.146 0 .263.119.263.263h-1.5c0 .682.553 1.237 1.237 1.237z" opacity=".5"></svg:path>`,
})
export class SolarLikeLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLinkBoldDuotoneIcon],svg[solar-link-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.728 3.884c1.434-1.44 3.532-1.47 4.694-.304c1.164 1.168 1.132 3.28-.303 4.72l-2.424 2.433a.75.75 0 0 0 1.063 1.059l2.424-2.433c1.91-1.919 2.15-4.982.303-6.838c-1.85-1.857-4.907-1.615-6.82.304L9.818 7.692c-1.912 1.919-2.152 4.982-.303 6.837a.75.75 0 1 0 1.062-1.058c-1.163-1.168-1.132-3.28.303-4.72z"></svg:path><svg:path fill="currentColor" d="M14.485 9.47a.75.75 0 0 0-1.063 1.06c1.164 1.168 1.132 3.279-.303 4.72L8.27 20.116c-1.434 1.44-3.532 1.47-4.694.304c-1.163-1.168-1.132-3.28.303-4.72l2.424-2.433a.75.75 0 1 0-1.062-1.059l-2.424 2.433C.906 16.56.666 19.623 2.515 21.48c1.85 1.858 4.907 1.615 6.819-.304l4.848-4.867c1.91-1.918 2.15-4.982.303-6.837" opacity=".5"></svg:path>`,
})
export class SolarLinkBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLinkBrokenBoldDuotoneIcon],svg[solar-link-broken-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.99 3.991c-1.553-1.521-3.681-1.58-4.765-.518l-3.7 3.625a.75.75 0 1 1-1.05-1.071l3.7-3.625c1.837-1.799 4.914-1.393 6.865.518c1.953 1.913 2.378 4.955.528 6.768l-2.907 2.848a.75.75 0 1 1-1.05-1.072l2.907-2.848c1.07-1.048 1.022-3.106-.528-4.625M6.728 12.506a.75.75 0 0 0-1.107-1.012l-1.261 1.38c-1.727 1.889-1.35 5.053.504 7.081c1.865 2.04 4.87 2.505 6.655.552l4.035-4.414a.75.75 0 0 0-1.107-1.012l-4.035 4.414c-1 1.095-2.963 1.065-4.44-.552c-1.49-1.628-1.564-3.9-.505-5.058z" opacity=".5"></svg:path><svg:path fill="currentColor" d="M6.624 3.584a.75.75 0 0 0-1.248.832l2 3a.75.75 0 1 0 1.248-.832zM2.237 7.288a.75.75 0 1 0-.474 1.423l6 2a.75.75 0 0 0 .474-1.423z"></svg:path>`,
})
export class SolarLinkBrokenBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLinkBrokenLineDuotoneIcon],svg[solar-link-broken-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="m2 8l6 2M6 4l2 3"></svg:path><svg:path d="m11 6.563l3.7-3.625c1.46-1.43 4.063-1.199 5.815.517c1.751 1.716 1.988 4.267.528 5.697L18.136 12M15 15.587L10.965 20c-1.392 1.524-3.876 1.277-5.548-.552c-1.67-1.828-1.897-4.546-.504-6.07L6.173 12" opacity=".5"></svg:path></svg:g>`,
})
export class SolarLinkBrokenLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLinkBrokenMinimalisticBoldDuotoneIcon],svg[solar-link-broken-minimalistic-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.688 4.158c-2.72-2.544-7.112-2.544-9.833 0l-.367.343a.75.75 0 0 0 1.024 1.096l.367-.344c2.144-2.004 5.64-2.004 7.784 0c2.116 1.978 2.116 5.163 0 7.14l-2.202 2.06a.75.75 0 0 0 1.025 1.095l2.202-2.059c2.75-2.57 2.75-6.76 0-9.331M6.172 10.535a.75.75 0 1 0-1.052-1.07l-.905.89c-2.672 2.628-2.6 6.854.099 9.435c2.707 2.59 7.122 2.627 9.839.03l.365-.35a.75.75 0 0 0-1.036-1.084l-.366.35c-2.127 2.034-5.629 2.013-7.766-.03c-2.097-2.006-2.14-5.258-.083-7.281z" opacity=".5"></svg:path><svg:path fill="currentColor" d="M7.28 2.713a.75.75 0 1 0-1.386.574l.913 2.205a.75.75 0 0 0 1.386-.574zm-3.449 2.7a.75.75 0 1 0-.658 1.348l5.548 2.707a.75.75 0 0 0 .658-1.348z"></svg:path>`,
})
export class SolarLinkBrokenMinimalisticBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLinkBrokenMinimalisticLineDuotoneIcon],svg[solar-link-broken-minimalistic-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="m10 5.049l.367-.343c2.432-2.275 6.376-2.275 8.809 0s2.432 5.961 0 8.235L16.974 15M14 18.928l-.366.35c-2.422 2.316-6.38 2.286-8.802-.03c-2.398-2.293-2.456-6.033-.091-8.358l.905-.89" opacity=".5"></svg:path><svg:path d="M6.587 3L7.5 5.205m-3.998.882L9.05 8.795"></svg:path></svg:g>`,
})
export class SolarLinkBrokenMinimalisticLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLinkCircleBoldDuotoneIcon],svg[solar-link-circle-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.464 20.536C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535" opacity=".5"></svg:path><svg:path fill="currentColor" d="M9.5 8.75A3.25 3.25 0 1 0 12.75 12a.75.75 0 0 1 1.5 0A4.75 4.75 0 1 1 9.5 7.25a.75.75 0 0 1 0 1.5"></svg:path><svg:path fill="currentColor" d="M17.75 12a3.25 3.25 0 0 1-3.25 3.25a.75.75 0 0 0 0 1.5A4.75 4.75 0 1 0 9.75 12a.75.75 0 0 0 1.5 0a3.25 3.25 0 0 1 6.5 0"></svg:path>`,
})
export class SolarLinkCircleBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLinkCircleLineDuotoneIcon],svg[solar-link-circle-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M14 12a6 6 0 1 1-6-6"></svg:path><svg:path d="M10 12a6 6 0 1 1 6 6" opacity=".5"></svg:path></svg:g>`,
})
export class SolarLinkCircleLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLinkLineDuotoneIcon],svg[solar-link-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M10.046 14c-1.506-1.512-1.37-4.1.303-5.779l4.848-4.866c1.673-1.68 4.25-1.816 5.757-.305s1.37 4.1-.303 5.78l-2.424 2.433"></svg:path><svg:path d="M13.954 10c1.506 1.512 1.37 4.1-.303 5.779l-2.424 2.433l-2.424 2.433c-1.673 1.68-4.25 1.816-5.757.305s-1.37-4.1.303-5.78l2.424-2.433" opacity=".5"></svg:path></svg:g>`,
})
export class SolarLinkLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLinkMinimalistic2BoldDuotoneIcon],svg[solar-link-minimalistic-2-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.739 4.261a6.867 6.867 0 0 0-9.711 0l-.72.721a.75.75 0 0 0 1.06 1.06l.72-.72a5.367 5.367 0 1 1 7.59 7.59l-.72.72a.75.75 0 0 0 1.06 1.06l.72-.72a6.867 6.867 0 0 0 0-9.71M6.043 9.307a.75.75 0 0 1 0 1.06l-.721.722a5.367 5.367 0 1 0 7.59 7.59l.72-.722a.75.75 0 0 1 1.06 1.06l-.72.722a6.867 6.867 0 0 1-9.71-9.711l.72-.72a.75.75 0 0 1 1.06 0" opacity=".5"></svg:path><svg:path fill="currentColor" d="M14.693 9.307a.75.75 0 0 1 0 1.06l-4.325 4.326a.75.75 0 1 1-1.06-1.06l4.325-4.326a.75.75 0 0 1 1.06 0"></svg:path>`,
})
export class SolarLinkMinimalistic2BoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLinkMinimalistic2LineDuotoneIcon],svg[solar-link-minimalistic-2-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="m14.163 18.488l-.721.72a6.117 6.117 0 0 1-8.65-8.65l.72-.72" opacity=".5"></svg:path><svg:path d="m9.837 14.163l4.326-4.326"></svg:path><svg:path d="m9.837 5.512l.721-.72a6.117 6.117 0 1 1 8.65 8.65l-.72.72" opacity=".5"></svg:path></svg:g>`,
})
export class SolarLinkMinimalistic2LineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLinkMinimalisticBoldDuotoneIcon],svg[solar-link-minimalistic-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 6.75a5.25 5.25 0 0 0 0 10.5h1a.75.75 0 0 1 0 1.5H8a6.75 6.75 0 0 1 0-13.5h1a.75.75 0 0 1 0 1.5zm7-1.5a.75.75 0 0 0 0 1.5h1a5.25 5.25 0 1 1 0 10.5h-1a.75.75 0 0 0 0 1.5h1a6.75 6.75 0 0 0 0-13.5z" opacity=".5"></svg:path><svg:path fill="currentColor" d="M8.25 12a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75"></svg:path>`,
})
export class SolarLinkMinimalisticBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLinkMinimalisticLineDuotoneIcon],svg[solar-link-minimalistic-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M9 12h6"></svg:path><svg:path d="M9 18H8A6 6 0 0 1 8 6h1m6 0h1a6 6 0 0 1 0 12h-1" opacity=".5"></svg:path></svg:g>`,
})
export class SolarLinkMinimalisticLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLinkRoundAngleBoldDuotoneIcon],svg[solar-link-round-angle-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.277 7.934a6.75 6.75 0 0 0 4.397 11.513a.75.75 0 0 0 .083-1.498a5.25 5.25 0 0 1-3.42-8.954l2.829-2.829a5.25 5.25 0 1 1 7.425 7.425l-1.415 1.414a.75.75 0 1 0 1.061 1.06l1.414-1.413a6.75 6.75 0 0 0-9.546-9.546z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M10.409 17.834a5.25 5.25 0 0 1 0-7.425l1.414-1.414a.75.75 0 1 0-1.06-1.06L9.347 9.347a6.75 6.75 0 1 0 9.546 9.546l2.829-2.828a6.75 6.75 0 0 0-4.398-11.513a.75.75 0 0 0-.083 1.498a5.25 5.25 0 0 1 3.42 8.954l-2.829 2.829a5.25 5.25 0 0 1-7.424 0" opacity=".5"></svg:path>`,
})
export class SolarLinkRoundAngleBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLinkRoundAngleLineDuotoneIcon],svg[solar-link-round-angle-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="m12.792 15.8l1.43-1.432a6.076 6.076 0 0 0 0-8.59a6.067 6.067 0 0 0-8.583 0L2.778 8.643A6.076 6.076 0 0 0 6.732 19"></svg:path><svg:path d="m11.208 8.2l-1.43 1.432a6.076 6.076 0 0 0 0 8.59a6.067 6.067 0 0 0 8.583 0l2.861-2.864A6.076 6.076 0 0 0 17.268 5" opacity=".5"></svg:path></svg:g>`,
})
export class SolarLinkRoundAngleLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLinkRoundBoldDuotoneIcon],svg[solar-link-round-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 2.25A6.75 6.75 0 0 0 2.969 13.5a.75.75 0 0 0 1.118-1A5.25 5.25 0 0 1 8 3.75h4a5.25 5.25 0 1 1 0 10.5h-2a.75.75 0 0 0 0 1.5h2a6.75 6.75 0 0 0 0-13.5z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M6.75 15c0-2.9 2.35-5.25 5.25-5.25h2a.75.75 0 0 0 0-1.5h-2a6.75 6.75 0 0 0 0 13.5h4a6.75 6.75 0 0 0 5.031-11.25a.75.75 0 0 0-1.118 1A5.25 5.25 0 0 1 16 20.25h-4A5.25 5.25 0 0 1 6.75 15" opacity=".5"></svg:path>`,
})
export class SolarLinkRoundBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLinkRoundLineDuotoneIcon],svg[solar-link-round-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M14 9h-2a6 6 0 0 0 0 12h4a6 6 0 0 0 4.472-10" opacity=".5"></svg:path><svg:path d="M10 15h2a6 6 0 0 0 0-12H8a6 6 0 0 0-4.472 10"></svg:path></svg:g>`,
})
export class SolarLinkRoundLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLinkSquareBoldDuotoneIcon],svg[solar-link-square-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22c-4.714 0-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22" opacity=".5"></svg:path><svg:path fill="currentColor" d="M9.198 7.25h.104c.899 0 1.648 0 2.242.08c.628.084 1.195.27 1.65.725c.456.456.642 1.023.726 1.65c.08.595.08 1.345.08 2.243V12a.75.75 0 0 1-1.5 0c0-.964-.002-1.612-.066-2.095c-.063-.461-.17-.659-.3-.789s-.328-.237-.79-.3c-.482-.064-1.13-.066-2.094-.066s-1.612.002-2.095.067c-.461.062-.659.169-.789.3s-.237.327-.3.788C6.003 10.388 6 11.036 6 12s.002 1.612.067 2.095c.062.461.169.659.3.789s.327.237.788.3c.483.064 1.131.066 2.095.066a.75.75 0 0 1 0 1.5h-.052c-.898 0-1.648 0-2.242-.08c-.628-.084-1.195-.27-1.65-.726c-.456-.455-.642-1.022-.726-1.65c-.08-.594-.08-1.344-.08-2.242v-.104c0-.899 0-1.648.08-2.242c.084-.628.27-1.195.725-1.65c.456-.456 1.023-.642 1.65-.726c.595-.08 1.345-.08 2.243-.08"></svg:path><svg:path fill="currentColor" d="M16.845 8.817c-.483-.065-1.131-.067-2.095-.067a.75.75 0 0 1 0-1.5h.052c.899 0 1.648 0 2.242.08c.628.084 1.195.27 1.65.725c.456.456.642 1.023.726 1.65c.08.595.08 1.345.08 2.243v.104c0 .899 0 1.648-.08 2.242c-.084.628-.27 1.195-.726 1.65c-.455.456-1.022.642-1.65.726c-.594.08-1.344.08-2.242.08h-.104c-.899 0-1.648 0-2.242-.08c-.628-.084-1.195-.27-1.65-.726c-.456-.455-.642-1.022-.726-1.65C10 13.7 10 12.95 10 12.052V12a.75.75 0 0 1 1.5 0c0 .964.002 1.612.066 2.095c.063.461.17.659.3.789s.328.237.79.3c.482.064 1.13.066 2.094.066s1.612-.002 2.095-.066c.461-.063.659-.17.789-.3s.237-.328.3-.79c.064-.482.066-1.13.066-2.094s-.002-1.612-.067-2.095c-.062-.461-.169-.659-.3-.789s-.327-.237-.788-.3"></svg:path>`,
})
export class SolarLinkSquareBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLinkSquareLineDuotoneIcon],svg[solar-link-square-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M8 18c-2.828 0-4.243 0-5.121-.879C2 16.243 2 14.828 2 12s0-4.243.879-5.121C3.757 6 5.172 6 8 6s4.243 0 5.121.879C14 7.757 14 9.172 14 12"></svg:path><svg:path d="M10 12c0 2.828 0 4.243.879 5.121C11.757 18 13.172 18 16 18s4.243 0 5.121-.879C22 16.243 22 14.828 22 12s0-4.243-.879-5.121C20.243 6 18.828 6 16 6" opacity=".5"></svg:path></svg:g>`,
})
export class SolarLinkSquareLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarListArrowDownBoldDuotoneIcon],svg[solar-list-arrow-down-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.25 6A.75.75 0 0 1 3 5.25h18a.75.75 0 0 1 0 1.5H3A.75.75 0 0 1 2.25 6m0 4A.75.75 0 0 1 3 9.25h18a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75m0 4a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75m0 4a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75" clip-rule="evenodd" opacity=".5"></svg:path><svg:path fill="currentColor" d="M17.5 13.25a.75.75 0 0 1 .75.75v4.19l1.22-1.22a.75.75 0 1 1 1.06 1.06l-2.5 2.5a.75.75 0 0 1-1.06 0l-2.5-2.5a.75.75 0 1 1 1.06-1.06l1.22 1.22V14a.75.75 0 0 1 .75-.75"></svg:path>`,
})
export class SolarListArrowDownBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarListArrowDownLineDuotoneIcon],svg[solar-list-arrow-down-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="m15 17.5l2.5 2.5m0 0l2.5-2.5M17.5 20v-6"></svg:path><svg:path d="M21 6H3m18 4H3m8 4H3m8 4H3" opacity=".5"></svg:path></svg:g>`,
})
export class SolarListArrowDownLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarListArrowDownMinimalisticBoldDuotoneIcon],svg[solar-list-arrow-down-minimalistic-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M2.25 6A.75.75 0 0 1 3 5.25h17a.75.75 0 0 1 0 1.5H3A.75.75 0 0 1 2.25 6m0 5a.75.75 0 0 1 .75-.75h9a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75m0 5a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75" opacity=".5"></svg:path><svg:path d="M16.97 17.53a.75.75 0 0 0 1.06 0l2.5-2.5a.75.75 0 1 0-1.06-1.06l-1.22 1.22V9a.75.75 0 0 0-1.5 0v6.19l-1.22-1.22a.75.75 0 1 0-1.06 1.06z"></svg:path></svg:g>`,
})
export class SolarListArrowDownMinimalisticBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarListArrowDownMinimalisticLineDuotoneIcon],svg[solar-list-arrow-down-minimalistic-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M20 6H3m8 10H3m9-5H3" opacity=".5"></svg:path><svg:path stroke-linejoin="round" d="m15 14.5l2.5 2.5m0 0l2.5-2.5M17.5 17V9"></svg:path></svg:g>`,
})
export class SolarListArrowDownMinimalisticLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarListArrowUpBoldDuotoneIcon],svg[solar-list-arrow-up-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.25 6A.75.75 0 0 1 3 5.25h18a.75.75 0 0 1 0 1.5H3A.75.75 0 0 1 2.25 6m0 4A.75.75 0 0 1 3 9.25h18a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75m0 4a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75m0 4a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75" clip-rule="evenodd" opacity=".5"></svg:path><svg:path fill="currentColor" d="M16.97 13.47a.75.75 0 0 1 1.06 0l2.5 2.5a.75.75 0 1 1-1.06 1.06l-1.22-1.22V20a.75.75 0 0 1-1.5 0v-4.19l-1.22 1.22a.75.75 0 1 1-1.06-1.06z"></svg:path>`,
})
export class SolarListArrowUpBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarListArrowUpLineDuotoneIcon],svg[solar-list-arrow-up-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M21 6H3m18 4H3m8 4H3m8 4H3" opacity=".5"></svg:path><svg:path stroke-linejoin="round" d="M20 16.5L17.5 14m0 0L15 16.5m2.5-2.5v6"></svg:path></svg:g>`,
})
export class SolarListArrowUpLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarListArrowUpMinimalisticBoldDuotoneIcon],svg[solar-list-arrow-up-minimalistic-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.25 6A.75.75 0 0 1 3 5.25h17a.75.75 0 0 1 0 1.5H3A.75.75 0 0 1 2.25 6m0 5a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75m0 5a.75.75 0 0 1 .75-.75h9a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75" clip-rule="evenodd" opacity=".5"></svg:path><svg:path fill="currentColor" d="M16.97 8.47a.75.75 0 0 1 1.06 0l2.5 2.5a.75.75 0 1 1-1.06 1.06l-1.22-1.22V17a.75.75 0 0 1-1.5 0v-6.19l-1.22 1.22a.75.75 0 1 1-1.06-1.06z"></svg:path>`,
})
export class SolarListArrowUpMinimalisticBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarListArrowUpMinimalisticLineDuotoneIcon],svg[solar-list-arrow-up-minimalistic-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M20 6H3m8 5H3m9 5H3" opacity=".5"></svg:path><svg:path stroke-linejoin="round" d="M15 11.5L17.5 9m0 0l2.5 2.5M17.5 9v8"></svg:path></svg:g>`,
})
export class SolarListArrowUpMinimalisticLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarListBoldDuotoneIcon],svg[solar-list-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.25 7A.75.75 0 0 1 4 6.25h16a.75.75 0 0 1 0 1.5H4A.75.75 0 0 1 3.25 7" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M3.25 12a.75.75 0 0 1 .75-.75h11a.75.75 0 0 1 0 1.5H4a.75.75 0 0 1-.75-.75" opacity=".7"></svg:path><svg:path fill="currentColor" d="M3.25 17a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5H4a.75.75 0 0 1-.75-.75" opacity=".4"></svg:path>`,
})
export class SolarListBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarListCheckBoldDuotoneIcon],svg[solar-list-check-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 5.75A.75.75 0 0 1 2.75 5h18a.75.75 0 0 1 0 1.5h-18A.75.75 0 0 1 2 5.75m0 4A.75.75 0 0 1 2.75 9h18a.75.75 0 0 1 0 1.5h-18A.75.75 0 0 1 2 9.75m0 4a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5h-7a.75.75 0 0 1-.75-.75m0 4a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5h-7a.75.75 0 0 1-.75-.75" clip-rule="evenodd" opacity=".5"></svg:path><svg:path fill="currentColor" d="M20.211 12.659a.75.75 0 0 1 .13 1.052l-3.9 5a.75.75 0 0 1-1.165.021l-2.1-2.5a.75.75 0 0 1 1.148-.964l1.504 1.79l3.33-4.27a.75.75 0 0 1 1.053-.13"></svg:path>`,
})
export class SolarListCheckBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarListCheckLineDuotoneIcon],svg[solar-list-check-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="m14 16l2.1 2.5l3.9-5"></svg:path><svg:path d="M21 6H3m18 4H3m7 4H3m7 4H3" opacity=".5"></svg:path></svg:g>`,
})
export class SolarListCheckLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarListCheckMinimalisticBoldDuotoneIcon],svg[solar-list-check-minimalistic-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h17a.75.75 0 0 1 0 1.5h-17A.75.75 0 0 1 3 6.75m0 5a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5h-7a.75.75 0 0 1-.75-.75m0 5a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5h-7a.75.75 0 0 1-.75-.75" clip-rule="evenodd" opacity=".5"></svg:path><svg:path fill="currentColor" d="M21.211 11.159a.75.75 0 0 1 .13 1.052l-3.9 5a.75.75 0 0 1-1.165.021l-2.1-2.5a.75.75 0 0 1 1.148-.964l1.504 1.79l3.33-4.27a.75.75 0 0 1 1.053-.13"></svg:path>`,
})
export class SolarListCheckMinimalisticBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarListCheckMinimalisticLineDuotoneIcon],svg[solar-list-check-minimalistic-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M20 6H3m7 5H3m7 5H3" opacity=".5"></svg:path><svg:path stroke-linejoin="round" d="m14 13.5l2.1 2.5l3.9-5"></svg:path></svg:g>`,
})
export class SolarListCheckMinimalisticLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarListCrossBoldDuotoneIcon],svg[solar-list-cross-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.25 6A.75.75 0 0 1 3 5.25h18a.75.75 0 0 1 0 1.5H3A.75.75 0 0 1 2.25 6m0 4A.75.75 0 0 1 3 9.25h18a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75m0 4a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75m0 4a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75" clip-rule="evenodd" opacity=".5"></svg:path><svg:path fill="currentColor" d="M14.47 12.97a.75.75 0 0 1 1.06 0l1.97 1.97l1.97-1.97a.75.75 0 1 1 1.06 1.06L18.56 16l1.97 1.97a.75.75 0 1 1-1.06 1.06l-1.97-1.97l-1.97 1.97a.75.75 0 1 1-1.06-1.06L16.44 16l-1.97-1.97a.75.75 0 0 1 0-1.06"></svg:path>`,
})
export class SolarListCrossBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarListCrossLineDuotoneIcon],svg[solar-list-cross-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="m15 18.5l5-5m0 5l-5-5"></svg:path><svg:path d="M21 6H3m18 4H3m8 4H3m8 4H3" opacity=".5"></svg:path></svg:g>`,
})
export class SolarListCrossLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarListCrossMinimalisticBoldDuotoneIcon],svg[solar-list-cross-minimalistic-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.25 6A.75.75 0 0 1 3 5.25h17a.75.75 0 0 1 0 1.5H3A.75.75 0 0 1 2.25 6m0 5a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75m0 5a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75" clip-rule="evenodd" opacity=".5"></svg:path><svg:path fill="currentColor" d="M14.47 10.47a.75.75 0 0 1 1.06 0l1.97 1.97l1.97-1.97a.75.75 0 1 1 1.06 1.06l-1.97 1.97l1.97 1.97a.75.75 0 1 1-1.06 1.06l-1.97-1.97l-1.97 1.97a.75.75 0 1 1-1.06-1.06l1.97-1.97l-1.97-1.97a.75.75 0 0 1 0-1.06"></svg:path>`,
})
export class SolarListCrossMinimalisticBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarListCrossMinimalisticLineDuotoneIcon],svg[solar-list-cross-minimalistic-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M20 6H3m8 5H3m8 5H3" opacity=".5"></svg:path><svg:path stroke-linejoin="round" d="m15 16l5-5m0 5l-5-5"></svg:path></svg:g>`,
})
export class SolarListCrossMinimalisticLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarListDownBoldDuotoneIcon],svg[solar-list-down-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.25 6A.75.75 0 0 1 3 5.25h18a.75.75 0 0 1 0 1.5H3A.75.75 0 0 1 2.25 6m0 4A.75.75 0 0 1 3 9.25h18a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75m0 4a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75m0 4a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75" clip-rule="evenodd" opacity=".5"></svg:path><svg:path fill="currentColor" d="M13.43 14.512a.75.75 0 0 1 1.058-.081l3.012 2.581l3.012-2.581a.75.75 0 1 1 .976 1.139l-3.5 3a.75.75 0 0 1-.976 0l-3.5-3a.75.75 0 0 1-.081-1.058"></svg:path>`,
})
export class SolarListDownBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarListDownLineDuotoneIcon],svg[solar-list-down-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M21 6H3m18 4H3m7 4H3m7 4H3" opacity=".5"></svg:path><svg:path stroke-linejoin="round" d="m14 15l3.5 3l3.5-3"></svg:path></svg:g>`,
})
export class SolarListDownLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarListDownMinimalisticBoldDuotoneIcon],svg[solar-list-down-minimalistic-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M2.25 6A.75.75 0 0 1 3 5.25h17a.75.75 0 0 1 0 1.5H3A.75.75 0 0 1 2.25 6m0 5a.75.75 0 0 1 .75-.75h17a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75m0 5a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75" opacity=".5"></svg:path><svg:path d="M17.012 18.57c.28.24.695.24.976 0l3.5-3a.75.75 0 0 0-.976-1.14L17.5 17.013l-3.012-2.581a.75.75 0 1 0-.976 1.139z"></svg:path></svg:g>`,
})
export class SolarListDownMinimalisticBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarListDownMinimalisticLineDuotoneIcon],svg[solar-list-down-minimalistic-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M20 6H3m17 5H3m7 5H3" opacity=".5"></svg:path><svg:path stroke-linejoin="round" d="m14 15l3.5 3l3.5-3"></svg:path></svg:g>`,
})
export class SolarListDownMinimalisticLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarListHeartBoldDuotoneIcon],svg[solar-list-heart-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.25 6A.75.75 0 0 1 3 5.25h18a.75.75 0 0 1 0 1.5H3A.75.75 0 0 1 2.25 6m0 4A.75.75 0 0 1 3 9.25h18a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75m0 4a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75m0 4a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75" clip-rule="evenodd" opacity=".5"></svg:path><svg:path fill="currentColor" d="M14 15.036c0 1.235 1.485 2.543 2.52 3.305c.435.32.652.48.98.48s.545-.16.98-.48c1.035-.762 2.52-2.07 2.52-3.305c0-2.008-1.925-2.757-3.5-1.206c-1.575-1.551-3.5-.802-3.5 1.206"></svg:path>`,
})
export class SolarListHeartBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarListHeartLineDuotoneIcon],svg[solar-list-heart-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="m16.52 18.34l-.444.605zm.98-4.51l-.526.534a.75.75 0 0 0 1.052 0zm.98 4.51l-.445-.603zm-.98.48v.75zm-.535-1.083c-.497-.366-1.078-.846-1.527-1.363c-.47-.541-.688-1-.688-1.338h-1.5c0 .898.524 1.71 1.056 2.322c.552.636 1.232 1.19 1.77 1.587zm-2.215-2.7c0-.757.343-1.118.664-1.233c.337-.122.92-.07 1.56.56l1.052-1.069c-.934-.92-2.102-1.27-3.121-.902c-1.035.373-1.655 1.392-1.655 2.643zm4.174 3.908c.538-.396 1.218-.951 1.77-1.587c.532-.613 1.056-1.424 1.056-2.322h-1.5c0 .337-.218.797-.688 1.338c-.45.517-1.03.997-1.527 1.363zm2.826-3.909c0-1.251-.62-2.27-1.655-2.643c-1.02-.368-2.187-.018-3.121.902l1.052 1.069c.64-.63 1.223-.682 1.56-.56c.321.115.664.476.664 1.232zm-5.674 3.909c.378.278.802.625 1.424.625v-1.5c-.02 0-.036.001-.097-.031a4 4 0 0 1-.438-.302zm1.96-1.208a4 4 0 0 1-.44.302c-.06.032-.076.031-.096.031v1.5c.622 0 1.046-.347 1.424-.625z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M21 6H3m18 4H3m7 4H3m7 4H3" opacity=".5"></svg:path></svg:g>`,
})
export class SolarListHeartLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarListHeartMinimalisticBoldDuotoneIcon],svg[solar-list-heart-minimalistic-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.25 6A.75.75 0 0 1 3 5.25h17a.75.75 0 0 1 0 1.5H3A.75.75 0 0 1 2.25 6m0 5a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75m0 5a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75" clip-rule="evenodd" opacity=".5"></svg:path><svg:path fill="currentColor" d="M13 11.715c0 1.752 2.163 3.615 3.49 4.593c.454.335.681.502 1.01.502s.556-.167 1.01-.502c1.327-.978 3.49-2.84 3.49-4.593c0-2.677-2.475-3.677-4.5-1.609c-2.025-2.068-4.5-1.068-4.5 1.609"></svg:path>`,
})
export class SolarListHeartMinimalisticBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarListHeartMinimalisticLineDuotoneIcon],svg[solar-list-heart-minimalistic-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M20 6H3m7 10H3m6-5H3" opacity=".5"></svg:path><svg:path fill="currentColor" d="m16.49 16.308l.445-.604zm1.01-6.202l-.536.525a.75.75 0 0 0 1.072 0zm1.01 6.202l.445.604zm-1.01.502v-.75zm-.565-1.105c-.644-.475-1.467-1.148-2.123-1.897c-.68-.775-1.062-1.502-1.062-2.093h-1.5c0 1.16.699 2.242 1.433 3.081c.758.865 1.679 1.613 2.362 2.116zm-3.185-3.99c0-1.108.495-1.691 1.003-1.882c.518-.193 1.342-.09 2.211.798l1.072-1.05c-1.156-1.18-2.581-1.611-3.808-1.153c-1.235.462-1.978 1.717-1.978 3.287zm5.205 5.197c.683-.503 1.604-1.25 2.362-2.116c.734-.839 1.433-1.92 1.433-3.081h-1.5c0 .591-.383 1.318-1.062 2.093c-.655.749-1.48 1.422-2.123 1.896zm3.795-5.197c0-1.57-.743-2.825-1.978-3.287c-1.227-.458-2.652-.027-3.808 1.153l1.072 1.05c.869-.888 1.694-.99 2.21-.798c.51.19 1.004.774 1.004 1.882zm-6.705 5.197c.392.289.83.648 1.455.648v-1.5c-.015 0-.032.003-.101-.035a5 5 0 0 1-.464-.32zm2.02-1.207a5 5 0 0 1-.464.32c-.07.038-.086.035-.101.035v1.5c.625 0 1.063-.36 1.455-.648z"></svg:path></svg:g>`,
})
export class SolarListHeartMinimalisticLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarListLineDuotoneIcon],svg[solar-list-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M20 7H4"></svg:path><svg:path d="M15 12H4" opacity=".7"></svg:path><svg:path d="M9 17H4" opacity=".4"></svg:path></svg:g>`,
})
export class SolarListLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarListUpBoldDuotoneIcon],svg[solar-list-up-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.25 6A.75.75 0 0 1 3 5.25h18a.75.75 0 0 1 0 1.5H3A.75.75 0 0 1 2.25 6m0 4A.75.75 0 0 1 3 9.25h18a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75m0 4a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75m0 4a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75" clip-rule="evenodd" opacity=".5"></svg:path><svg:path fill="currentColor" d="M17.012 14.43a.75.75 0 0 1 .976 0l3.5 3a.75.75 0 1 1-.976 1.14L17.5 15.987l-3.012 2.581a.75.75 0 1 1-.976-1.138z"></svg:path>`,
})
export class SolarListUpBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarListUpLineDuotoneIcon],svg[solar-list-up-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="m14 18l3.5-3l3.5 3"></svg:path><svg:path d="M21 6H3m18 4H3m8 4H3m8 4H3" opacity=".5"></svg:path></svg:g>`,
})
export class SolarListUpLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarListUpMinimalisticBoldDuotoneIcon],svg[solar-list-up-minimalistic-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.25 6A.75.75 0 0 1 3 5.25h17a.75.75 0 0 1 0 1.5H3A.75.75 0 0 1 2.25 6m0 5a.75.75 0 0 1 .75-.75h17a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75m0 5a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75" clip-rule="evenodd" opacity=".5"></svg:path><svg:path fill="currentColor" d="M17.012 14.43a.75.75 0 0 1 .976 0l3.5 3a.75.75 0 1 1-.976 1.14L17.5 15.987l-3.012 2.581a.75.75 0 1 1-.976-1.138z"></svg:path>`,
})
export class SolarListUpMinimalisticBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarListUpMinimalisticLineDuotoneIcon],svg[solar-list-up-minimalistic-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M20 6H3m17 5H3m8 5H3" opacity=".5"></svg:path><svg:path stroke-linejoin="round" d="m14 18l3.5-3l3.5 3"></svg:path></svg:g>`,
})
export class SolarListUpMinimalisticLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLockBoldDuotoneIcon],svg[solar-lock-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 16c0-2.828 0-4.243.879-5.121C3.757 10 5.172 10 8 10h8c2.828 0 4.243 0 5.121.879C22 11.757 22 13.172 22 16s0 4.243-.879 5.121C20.243 22 18.828 22 16 22H8c-2.828 0-4.243 0-5.121-.879C2 20.243 2 18.828 2 16" opacity=".5"></svg:path><svg:path fill="currentColor" d="M6.75 8a5.25 5.25 0 0 1 10.5 0v2.004c.567.005 1.064.018 1.5.05V8a6.75 6.75 0 0 0-13.5 0v2.055a24 24 0 0 1 1.5-.051z"></svg:path>`,
})
export class SolarLockBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLockKeyholeBoldDuotoneIcon],svg[solar-lock-keyhole-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 16c0-2.828 0-4.243.879-5.121C3.757 10 5.172 10 8 10h8c2.828 0 4.243 0 5.121.879C22 11.757 22 13.172 22 16s0 4.243-.879 5.121C20.243 22 18.828 22 16 22H8c-2.828 0-4.243 0-5.121-.879C2 20.243 2 18.828 2 16" opacity=".5"></svg:path><svg:path fill="currentColor" d="M12 18a2 2 0 1 0 0-4a2 2 0 0 0 0 4M6.75 8a5.25 5.25 0 0 1 10.5 0v2.004c.567.005 1.064.018 1.5.05V8a6.75 6.75 0 0 0-13.5 0v2.055a24 24 0 0 1 1.5-.051z"></svg:path>`,
})
export class SolarLockKeyholeBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLockKeyholeLineDuotoneIcon],svg[solar-lock-keyhole-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 16c0-2.828 0-4.243.879-5.121C3.757 10 5.172 10 8 10h8c2.828 0 4.243 0 5.121.879C22 11.757 22 13.172 22 16s0 4.243-.879 5.121C20.243 22 18.828 22 16 22H8c-2.828 0-4.243 0-5.121-.879C2 20.243 2 18.828 2 16Z"></svg:path><svg:circle cx="12" cy="16" r="2" opacity=".5"></svg:circle><svg:path stroke-linecap="round" d="M6 10V8a6 6 0 1 1 12 0v2" opacity=".5"></svg:path></svg:g>`,
})
export class SolarLockKeyholeLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLockKeyholeMinimalisticBoldDuotoneIcon],svg[solar-lock-keyhole-minimalistic-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 16c0-2.828 0-4.243.879-5.121C3.757 10 5.172 10 8 10h8c2.828 0 4.243 0 5.121.879C22 11.757 22 13.172 22 16s0 4.243-.879 5.121C20.243 22 18.828 22 16 22H8c-2.828 0-4.243 0-5.121-.879C2 20.243 2 18.828 2 16" opacity=".5"></svg:path><svg:path fill="currentColor" d="M12.75 14a.75.75 0 0 0-1.5 0v4a.75.75 0 0 0 1.5 0zm-6-6a5.25 5.25 0 0 1 10.5 0v2.004c.567.005 1.064.018 1.5.05V8a6.75 6.75 0 0 0-13.5 0v2.055a24 24 0 0 1 1.5-.051z"></svg:path>`,
})
export class SolarLockKeyholeMinimalisticBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLockKeyholeMinimalisticLineDuotoneIcon],svg[solar-lock-keyhole-minimalistic-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 16c0-2.828 0-4.243.879-5.121C3.757 10 5.172 10 8 10h8c2.828 0 4.243 0 5.121.879C22 11.757 22 13.172 22 16s0 4.243-.879 5.121C20.243 22 18.828 22 16 22H8c-2.828 0-4.243 0-5.121-.879C2 20.243 2 18.828 2 16Z"></svg:path><svg:path stroke-linecap="round" d="M12 14v4m-6-8V8a6 6 0 1 1 12 0v2" opacity=".5"></svg:path></svg:g>`,
})
export class SolarLockKeyholeMinimalisticLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLockKeyholeMinimalisticUnlockedBoldDuotoneIcon],svg[solar-lock-keyhole-minimalistic-unlocked-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 16c0-2.828 0-4.243.879-5.121C3.757 10 5.172 10 8 10h8c2.828 0 4.243 0 5.121.879C22 11.757 22 13.172 22 16s0 4.243-.879 5.121C20.243 22 18.828 22 16 22H8c-2.828 0-4.243 0-5.121-.879C2 20.243 2 18.828 2 16" opacity=".5"></svg:path><svg:path fill="currentColor" d="M12.75 14a.75.75 0 0 0-1.5 0v4a.75.75 0 0 0 1.5 0zm-6-6a5.25 5.25 0 0 1 10.335-1.313a.75.75 0 0 0 1.452-.374A6.75 6.75 0 0 0 5.25 8v2.055a24 24 0 0 1 1.5-.051z"></svg:path>`,
})
export class SolarLockKeyholeMinimalisticUnlockedBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLockKeyholeMinimalisticUnlockedLineDuotoneIcon],svg[solar-lock-keyhole-minimalistic-unlocked-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 16c0-2.828 0-4.243.879-5.121C3.757 10 5.172 10 8 10h8c2.828 0 4.243 0 5.121.879C22 11.757 22 13.172 22 16s0 4.243-.879 5.121C20.243 22 18.828 22 16 22H8c-2.828 0-4.243 0-5.121-.879C2 20.243 2 18.828 2 16Z"></svg:path><svg:path stroke-linecap="round" d="M6 10V8a6 6 0 0 1 11.811-1.5M12 14v4" opacity=".5"></svg:path></svg:g>`,
})
export class SolarLockKeyholeMinimalisticUnlockedLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLockKeyholeUnlockedBoldDuotoneIcon],svg[solar-lock-keyhole-unlocked-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 16c0-2.828 0-4.243.879-5.121C3.757 10 5.172 10 8 10h8c2.828 0 4.243 0 5.121.879C22 11.757 22 13.172 22 16s0 4.243-.879 5.121C20.243 22 18.828 22 16 22H8c-2.828 0-4.243 0-5.121-.879C2 20.243 2 18.828 2 16" opacity=".5"></svg:path><svg:path fill="currentColor" d="M12 18a2 2 0 1 0 0-4a2 2 0 0 0 0 4M6.75 8a5.25 5.25 0 0 1 10.335-1.313a.75.75 0 0 0 1.452-.374A6.75 6.75 0 0 0 5.25 8v2.055a24 24 0 0 1 1.5-.051z"></svg:path>`,
})
export class SolarLockKeyholeUnlockedBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLockKeyholeUnlockedLineDuotoneIcon],svg[solar-lock-keyhole-unlocked-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 16c0-2.828 0-4.243.879-5.121C3.757 10 5.172 10 8 10h8c2.828 0 4.243 0 5.121.879C22 11.757 22 13.172 22 16s0 4.243-.879 5.121C20.243 22 18.828 22 16 22H8c-2.828 0-4.243 0-5.121-.879C2 20.243 2 18.828 2 16Z"></svg:path><svg:circle cx="12" cy="16" r="2" opacity=".5"></svg:circle><svg:path stroke-linecap="round" d="M6 10V8a6 6 0 0 1 11.811-1.5" opacity=".5"></svg:path></svg:g>`,
})
export class SolarLockKeyholeUnlockedLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLockLineDuotoneIcon],svg[solar-lock-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 16c0-2.828 0-4.243.879-5.121C3.757 10 5.172 10 8 10h8c2.828 0 4.243 0 5.121.879C22 11.757 22 13.172 22 16s0 4.243-.879 5.121C20.243 22 18.828 22 16 22H8c-2.828 0-4.243 0-5.121-.879C2 20.243 2 18.828 2 16Z"></svg:path><svg:path stroke-linecap="round" d="M6 10V8a6 6 0 1 1 12 0v2" opacity=".5"></svg:path></svg:g>`,
})
export class SolarLockLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLockPasswordBoldDuotoneIcon],svg[solar-lock-password-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 16c0-2.828 0-4.243.879-5.121C3.757 10 5.172 10 8 10h8c2.828 0 4.243 0 5.121.879C22 11.757 22 13.172 22 16s0 4.243-.879 5.121C20.243 22 18.828 22 16 22H8c-2.828 0-4.243 0-5.121-.879C2 20.243 2 18.828 2 16" opacity=".5"></svg:path><svg:path fill="currentColor" d="M8 17a1 1 0 1 0 0-2a1 1 0 0 0 0 2m4 0a1 1 0 1 0 0-2a1 1 0 0 0 0 2m5-1a1 1 0 1 1-2 0a1 1 0 0 1 2 0M6.75 8a5.25 5.25 0 0 1 10.5 0v2.004c.567.005 1.064.018 1.5.05V8a6.75 6.75 0 0 0-13.5 0v2.055a24 24 0 0 1 1.5-.051z"></svg:path>`,
})
export class SolarLockPasswordBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLockPasswordLineDuotoneIcon],svg[solar-lock-password-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="1.5" d="M2 16c0-2.828 0-4.243.879-5.121C3.757 10 5.172 10 8 10h8c2.828 0 4.243 0 5.121.879C22 11.757 22 13.172 22 16s0 4.243-.879 5.121C20.243 22 18.828 22 16 22H8c-2.828 0-4.243 0-5.121-.879C2 20.243 2 18.828 2 16Z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M6 10V8a6 6 0 1 1 12 0v2" opacity=".5"></svg:path><svg:path fill="currentColor" d="M9 16a1 1 0 1 1-2 0a1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0" opacity=".5"></svg:path></svg:g>`,
})
export class SolarLockPasswordLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLockPasswordUnlockedBoldDuotoneIcon],svg[solar-lock-password-unlocked-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 16c0-2.828 0-4.243.879-5.121C3.757 10 5.172 10 8 10h8c2.828 0 4.243 0 5.121.879C22 11.757 22 13.172 22 16s0 4.243-.879 5.121C20.243 22 18.828 22 16 22H8c-2.828 0-4.243 0-5.121-.879C2 20.243 2 18.828 2 16" opacity=".5"></svg:path><svg:path fill="currentColor" d="M8 17a1 1 0 1 0 0-2a1 1 0 0 0 0 2m4 0a1 1 0 1 0 0-2a1 1 0 0 0 0 2m5-1a1 1 0 1 1-2 0a1 1 0 0 1 2 0M6.75 8a5.25 5.25 0 0 1 10.335-1.313a.75.75 0 0 0 1.452-.374A6.75 6.75 0 0 0 5.25 8v2.055a24 24 0 0 1 1.5-.051z"></svg:path>`,
})
export class SolarLockPasswordUnlockedBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLockPasswordUnlockedLineDuotoneIcon],svg[solar-lock-password-unlocked-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="1.5" d="M2 16c0-2.828 0-4.243.879-5.121C3.757 10 5.172 10 8 10h8c2.828 0 4.243 0 5.121.879C22 11.757 22 13.172 22 16s0 4.243-.879 5.121C20.243 22 18.828 22 16 22H8c-2.828 0-4.243 0-5.121-.879C2 20.243 2 18.828 2 16Z"></svg:path><svg:path fill="currentColor" d="M9 16a1 1 0 1 1-2 0a1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0" opacity=".5"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M6 10V8a6 6 0 0 1 11.811-1.5" opacity=".5"></svg:path></svg:g>`,
})
export class SolarLockPasswordUnlockedLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLockUnlockedBoldDuotoneIcon],svg[solar-lock-unlocked-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 16c0-2.828 0-4.243.879-5.121C3.757 10 5.172 10 8 10h8c2.828 0 4.243 0 5.121.879C22 11.757 22 13.172 22 16s0 4.243-.879 5.121C20.243 22 18.828 22 16 22H8c-2.828 0-4.243 0-5.121-.879C2 20.243 2 18.828 2 16" opacity=".5"></svg:path><svg:path fill="currentColor" d="M6.75 8a5.25 5.25 0 0 1 10.335-1.313a.75.75 0 0 0 1.452-.374A6.75 6.75 0 0 0 5.25 8v2.055a24 24 0 0 1 1.5-.051z"></svg:path>`,
})
export class SolarLockUnlockedBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLockUnlockedLineDuotoneIcon],svg[solar-lock-unlocked-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 16c0-2.828 0-4.243.879-5.121C3.757 10 5.172 10 8 10h8c2.828 0 4.243 0 5.121.879C22 11.757 22 13.172 22 16s0 4.243-.879 5.121C20.243 22 18.828 22 16 22H8c-2.828 0-4.243 0-5.121-.879C2 20.243 2 18.828 2 16Z"></svg:path><svg:path stroke-linecap="round" d="M6 10V8a6 6 0 0 1 11.811-1.5" opacity=".5"></svg:path></svg:g>`,
})
export class SolarLockUnlockedLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLogin2BoldDuotoneIcon],svg[solar-login-2-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 2h-1c-2.829 0-4.242 0-5.121.879S9 5.172 9 8v8c0 2.829 0 4.243.879 5.122c.878.878 2.292.878 5.119.878H16c2.828 0 4.242 0 5.121-.879C22 20.243 22 18.828 22 16V8c0-2.828 0-4.243-.879-5.121S18.828 2 16 2" opacity=".5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M1.251 11.999a.75.75 0 0 1 .75-.75h11.973l-1.961-1.68a.75.75 0 0 1 .976-1.14l3.5 3a.75.75 0 0 1 0 1.14l-3.5 3a.75.75 0 0 1-.976-1.14l1.96-1.68H2.002a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarLogin2BoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLogin2LineDuotoneIcon],svg[solar-login-2-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M2.001 11.999h14m0 0l-3.5-3m3.5 3l-3.5 3"></svg:path><svg:path d="M9.002 7c.012-2.175.109-3.353.877-4.121C10.758 2 12.172 2 15 2h1c2.829 0 4.243 0 5.122.879C22 3.757 22 5.172 22 8v8c0 2.828 0 4.243-.878 5.121C20.242 22 18.829 22 16 22h-1c-2.828 0-4.242 0-5.121-.879c-.768-.768-.865-1.946-.877-4.121" opacity=".5"></svg:path></svg:g>`,
})
export class SolarLogin2LineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLogin3BoldDuotoneIcon],svg[solar-login-3-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 2h-1c-2.828 0-4.243 0-5.121.879C8 3.757 8 5.172 8 8v8c0 2.828 0 4.243.879 5.121C9.757 22 11.172 22 14 22h1c2.828 0 4.243 0 5.121-.879C21 20.243 21 18.828 21 16V8c0-2.828 0-4.243-.879-5.121C19.243 2 17.828 2 15 2" opacity=".6"></svg:path><svg:path fill="currentColor" d="M8 8c0-1.538 0-2.657.141-3.5H8c-2.357 0-3.536 0-4.268.732S3 7.143 3 9.5v5c0 2.357 0 3.535.732 4.268S5.643 19.5 8 19.5h.141C8 18.657 8 17.538 8 16z" opacity=".4"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M14.53 11.47a.75.75 0 0 1 0 1.06l-2 2a.75.75 0 1 1-1.06-1.06l.72-.72H5a.75.75 0 0 1 0-1.5h7.19l-.72-.72a.75.75 0 1 1 1.06-1.06z" clip-rule="evenodd"></svg:path>`,
})
export class SolarLogin3BoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLogin3LineDuotoneIcon],svg[solar-login-3-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M8 16c0 2.828 0 4.243.879 5.121C9.757 22 11.172 22 14 22h1c2.828 0 4.243 0 5.121-.879C21 20.243 21 18.828 21 16V8c0-2.828 0-4.243-.879-5.121C19.243 2 17.828 2 15 2h-1c-2.828 0-4.243 0-5.121.879C8 3.757 8 5.172 8 8"></svg:path><svg:path d="M8 19.5c-2.357 0-3.536 0-4.268-.732C3 18.035 3 16.857 3 14.5v-5c0-2.357 0-3.536.732-4.268S5.643 4.5 8 4.5" opacity=".5"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M6 12h9m0 0l-2.5 2.5M15 12l-2.5-2.5"></svg:path></svg:g>`,
})
export class SolarLogin3LineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLoginBoldDuotoneIcon],svg[solar-login-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10.47 8.47a.75.75 0 0 0 0 1.06l1.72 1.72H4a.75.75 0 0 0 0 1.5h8.19l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 0 0-1.06 0" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M12 20a8 8 0 1 0 0-16z" opacity=".5"></svg:path>`,
})
export class SolarLoginBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLoginLineDuotoneIcon],svg[solar-login-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M12 20a8 8 0 1 0 0-16" opacity=".5"></svg:path><svg:path stroke-linejoin="round" d="M4 12h10m0 0l-3-3m3 3l-3 3"></svg:path></svg:g>`,
})
export class SolarLoginLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLogout2BoldDuotoneIcon],svg[solar-logout-2-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 2h-1c-2.829 0-4.242 0-5.121.879S9 5.172 9 8v8c0 2.829 0 4.243.879 5.122c.878.878 2.292.878 5.119.878H16c2.828 0 4.242 0 5.121-.879C22 20.243 22 18.828 22 16V8c0-2.828 0-4.243-.879-5.121S18.828 2 16 2" opacity=".5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M15.75 12a.75.75 0 0 0-.75-.75H4.027l1.961-1.68a.75.75 0 1 0-.976-1.14l-3.5 3a.75.75 0 0 0 0 1.14l3.5 3a.75.75 0 1 0 .976-1.14l-1.96-1.68H15a.75.75 0 0 0 .75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarLogout2BoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLogout2LineDuotoneIcon],svg[solar-logout-2-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M9.002 7c.012-2.175.109-3.353.877-4.121C10.758 2 12.172 2 15 2h1c2.829 0 4.243 0 5.122.879C22 3.757 22 5.172 22 8v8c0 2.828 0 4.243-.878 5.121C20.242 22 18.829 22 16 22h-1c-2.828 0-4.242 0-5.121-.879c-.768-.768-.865-1.946-.877-4.121" opacity=".5"></svg:path><svg:path stroke-linejoin="round" d="M15 12H2m0 0l3.5-3M2 12l3.5 3"></svg:path></svg:g>`,
})
export class SolarLogout2LineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLogout3BoldDuotoneIcon],svg[solar-logout-3-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 2h-1c-2.828 0-4.243 0-5.121.879C8 3.757 8 5.172 8 8v8c0 2.828 0 4.243.879 5.121C9.757 22 11.172 22 14 22h1c2.828 0 4.243 0 5.121-.879C21 20.243 21 18.828 21 16V8c0-2.828 0-4.243-.879-5.121C19.243 2 17.828 2 15 2" opacity=".6"></svg:path><svg:path fill="currentColor" d="M8 8c0-1.538 0-2.657.141-3.5H8c-2.357 0-3.536 0-4.268.732S3 7.143 3 9.5v5c0 2.357 0 3.535.732 4.268S5.643 19.5 8 19.5h.141C8 18.657 8 17.538 8 16z" opacity=".4"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M4.47 11.47a.75.75 0 0 0 0 1.06l2 2a.75.75 0 0 0 1.06-1.06l-.72-.72H14a.75.75 0 0 0 0-1.5H6.81l.72-.72a.75.75 0 1 0-1.06-1.06z" clip-rule="evenodd"></svg:path>`,
})
export class SolarLogout3BoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLogout3LineDuotoneIcon],svg[solar-logout-3-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M8.002 7c.012-2.175.108-3.353.877-4.121C9.757 2 11.172 2 14 2h1c2.828 0 4.243 0 5.121.879C21 3.757 21 5.172 21 8v8c0 2.828 0 4.243-.879 5.121C19.243 22 17.828 22 15 22h-1c-2.828 0-4.243 0-5.121-.879c-.769-.768-.865-1.946-.877-4.121"></svg:path><svg:path d="M8 19.5c-2.357 0-3.536 0-4.268-.732C3 18.035 3 16.857 3 14.5v-5c0-2.357 0-3.536.732-4.268S5.643 4.5 8 4.5" opacity=".5"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M15 12H6m0 0l2 2m-2-2l2-2"></svg:path></svg:g>`,
})
export class SolarLogout3LineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLogoutBoldDuotoneIcon],svg[solar-logout-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 20a8 8 0 1 1 0-16z" opacity=".5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M16.47 8.47a.75.75 0 0 0 0 1.06l1.72 1.72H10a.75.75 0 0 0 0 1.5h8.19l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 0 0-1.06 0" clip-rule="evenodd"></svg:path>`,
})
export class SolarLogoutBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLogoutLineDuotoneIcon],svg[solar-logout-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M12 20a8 8 0 1 1 0-16" opacity=".5"></svg:path><svg:path stroke-linejoin="round" d="M10 12h10m0 0l-3-3m3 3l-3 3"></svg:path></svg:g>`,
})
export class SolarLogoutLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMagicStick2BoldDuotoneIcon],svg[solar-magic-stick-2-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.714 2.127c-.836-.43-1.922.263-4.095 1.65l-.562.36c-.618.394-.927.591-1.273.648c-.347.056-.692-.034-1.382-.215l-.628-.164C6.345 3.769 5.13 3.45 4.436 4.13s-.412 1.908.157 4.363l.147.635c.161.697.242 1.046.177 1.393c-.066.346-.27.65-.68 1.26l-.372.555c-1.439 2.145-2.158 3.217-1.753 4.067c.406.85 1.668.915 4.192 1.045l.654.033c.717.037 1.076.056 1.382.213c.306.158.524.436.962.994l.398.507c1.539 1.962 2.309 2.943 3.255 2.788c.945-.154 1.441-1.342 2.433-3.717l.257-.614c.282-.675.422-1.012.677-1.261c.255-.25.595-.382 1.274-.647l.618-.24c2.39-.933 3.586-1.4 3.765-2.345s-.777-1.744-2.688-3.342l-.495-.413c-.543-.454-.815-.68-.963-.992s-.158-.672-.175-1.393l-.016-.657c-.062-2.538-.093-3.806-.928-4.236"></svg:path><svg:path fill="currentColor" d="M15.93 16.991c.127-.268.239-.45.392-.6c.172-.167.382-.282.71-.42l4.498 4.499a.75.75 0 0 1-1.06 1.06z" opacity=".5"></svg:path>`,
})
export class SolarMagicStick2BoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMagicStick2LineDuotoneIcon],svg[solar-magic-stick-2-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="1.5" d="M13.036 3.652c2.215-1.312 3.322-1.968 4.136-1.503c.813.466.793 1.744.755 4.3l-.01.662c-.012.727-.017 1.09.118 1.41c.136.319.397.558.919 1.036l.475.435c1.837 1.683 2.756 2.524 2.54 3.47c-.215.944-1.422 1.366-3.835 2.212l-.624.218c-.686.24-1.028.36-1.291.601c-.264.24-.417.575-.724 1.243l-.28.609c-1.079 2.351-1.619 3.527-2.565 3.646c-.947.118-1.673-.899-3.125-2.934l-.376-.526c-.413-.578-.62-.867-.917-1.038c-.298-.17-.654-.203-1.365-.268l-.648-.06c-2.505-.228-3.757-.343-4.126-1.214c-.37-.872.388-1.923 1.903-4.026l.392-.544c.43-.597.646-.896.725-1.242s.012-.7-.12-1.409l-.122-.645c-.468-2.493-.702-3.74.016-4.397s1.913-.29 4.302.445l.618.19c.678.21 1.018.314 1.365.27c.346-.043.661-.23 1.29-.602z"></svg:path><svg:path fill="currentColor" d="M17.53 16.47a.75.75 0 1 0-1.06 1.06zm2.94 5.06a.75.75 0 1 0 1.06-1.06zm-4-4l4 4l1.06-1.06l-4-4z" opacity=".5"></svg:path></svg:g>`,
})
export class SolarMagicStick2LineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMagicStick3BoldDuotoneIcon],svg[solar-magic-stick-3-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.845 3.845a2.883 2.883 0 0 0 0 4.077L5.432 9.51c.012-.014.555.503.568.49l4-4c.013-.013-.504-.556-.49-.568L7.922 3.845a2.883 2.883 0 0 0-4.077 0m1.288 11.462a.483.483 0 0 1 .9 0l.157.4a.48.48 0 0 0 .272.273l.398.157a.486.486 0 0 1 0 .903l-.398.158a.48.48 0 0 0-.272.273l-.157.4a.483.483 0 0 1-.9 0l-.157-.4a.48.48 0 0 0-.272-.273l-.398-.158a.486.486 0 0 1 0-.903l.398-.157a.48.48 0 0 0 .272-.274z" opacity=".5"></svg:path><svg:path fill="currentColor" d="M19.967 9.13a.483.483 0 0 1 .9 0l.156.399c.05.125.148.224.273.273l.398.158a.486.486 0 0 1 0 .902l-.398.158a.5.5 0 0 0-.273.273l-.156.4a.483.483 0 0 1-.9 0l-.157-.4a.5.5 0 0 0-.272-.273l-.398-.158a.486.486 0 0 1 0-.902l.398-.158a.5.5 0 0 0 .272-.273z" opacity=".2"></svg:path><svg:path fill="currentColor" d="M16.1 2.307a.483.483 0 0 1 .9 0l.43 1.095a.48.48 0 0 0 .272.274l1.091.432a.486.486 0 0 1 0 .903l-1.09.432a.5.5 0 0 0-.273.273L17 6.81a.483.483 0 0 1-.9 0l-.43-1.095a.5.5 0 0 0-.273-.273l-1.09-.432a.486.486 0 0 1 0-.903l1.09-.432a.5.5 0 0 0 .273-.274z" opacity=".7"></svg:path><svg:path fill="currentColor" d="M10.568 6.49c-.012.014-.555-.503-.568-.49l-4 4c-.013.013.504.556.49.568l9.588 9.587a2.883 2.883 0 1 0 4.078-4.077z"></svg:path>`,
})
export class SolarMagicStick3BoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMagicStick3LineDuotoneIcon],svg[solar-magic-stick-3-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:path stroke-width="1.5" d="M3.845 7.922a2.883 2.883 0 1 1 4.077-4.077l12.234 12.233a2.884 2.884 0 0 1-4.078 4.078z"></svg:path><svg:path stroke-linecap="round" stroke-width="1.5" d="m6 10l4-4" opacity=".5"></svg:path><svg:path d="M16.1 2.307a.483.483 0 0 1 .9 0l.43 1.095a.48.48 0 0 0 .272.274l1.091.432a.486.486 0 0 1 0 .903l-1.09.432a.5.5 0 0 0-.273.273L17 6.81a.483.483 0 0 1-.9 0l-.43-1.095a.5.5 0 0 0-.273-.273l-1.09-.432a.486.486 0 0 1 0-.903l1.09-.432a.5.5 0 0 0 .273-.274z"></svg:path><svg:path d="M19.967 9.13a.483.483 0 0 1 .9 0l.156.399c.05.125.148.224.273.273l.398.158a.486.486 0 0 1 0 .902l-.398.158a.5.5 0 0 0-.273.273l-.156.4a.483.483 0 0 1-.9 0l-.157-.4a.5.5 0 0 0-.272-.273l-.398-.158a.486.486 0 0 1 0-.902l.398-.158a.5.5 0 0 0 .272-.273zM5.133 15.307a.483.483 0 0 1 .9 0l.157.4a.48.48 0 0 0 .272.273l.398.157a.486.486 0 0 1 0 .903l-.398.158a.48.48 0 0 0-.272.273l-.157.4a.483.483 0 0 1-.9 0l-.157-.4a.48.48 0 0 0-.272-.273l-.398-.158a.486.486 0 0 1 0-.903l.398-.157a.48.48 0 0 0 .272-.274z" opacity=".5"></svg:path></svg:g>`,
})
export class SolarMagicStick3LineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMagicStickBoldDuotoneIcon],svg[solar-magic-stick-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.714 2.127c-.836-.43-1.922.263-4.095 1.65l-.562.36c-.618.394-.927.591-1.273.648c-.347.056-.692-.034-1.382-.215l-.628-.164C6.345 3.769 5.13 3.45 4.436 4.13s-.412 1.908.157 4.363l.147.635c.161.697.242 1.046.177 1.393c-.066.346-.27.65-.68 1.26l-.372.555c-1.439 2.145-2.158 3.217-1.753 4.067c.406.85 1.668.915 4.192 1.045l.654.033c.717.037 1.076.056 1.382.213c.306.158.524.436.962.994l.398.507c1.539 1.962 2.309 2.943 3.255 2.788c.945-.154 1.441-1.342 2.433-3.717l.257-.614c.282-.675.422-1.012.677-1.261c.255-.25.595-.382 1.274-.647l.618-.24c2.39-.933 3.586-1.4 3.765-2.345s-.777-1.744-2.688-3.342l-.495-.413c-.543-.454-.815-.68-.963-.992s-.158-.672-.175-1.393l-.016-.657c-.062-2.538-.093-3.806-.928-4.236"></svg:path><svg:path fill="currentColor" d="M19.53 18.47a.75.75 0 1 0-1.06 1.06l2 2a.75.75 0 1 0 1.06-1.06z" opacity=".5"></svg:path>`,
})
export class SolarMagicStickBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMagicStickLineDuotoneIcon],svg[solar-magic-stick-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="1.5" d="M12.619 3.778c2.173-1.388 3.26-2.081 4.095-1.651s.866 1.698.928 4.236l.016.657c.017.72.026 1.081.175 1.393c.148.311.42.538.963.992l.495.413c1.911 1.598 2.867 2.397 2.688 3.342c-.18.946-1.374 1.412-3.765 2.344l-.618.241c-.68.265-1.02.398-1.274.647c-.255.249-.395.586-.677 1.261l-.257.614c-.992 2.375-1.488 3.563-2.434 3.717c-.946.155-1.715-.826-3.254-2.788l-.398-.507c-.438-.558-.656-.836-.962-.994c-.306-.157-.665-.176-1.382-.213l-.654-.033c-2.524-.13-3.786-.195-4.192-1.045c-.405-.85.314-1.922 1.753-4.067l.373-.555c.408-.61.613-.914.679-1.26c.065-.347-.016-.696-.177-1.393l-.147-.635C4.024 6.039 3.74 4.81 4.436 4.13c.695-.68 1.91-.362 4.338.275l.628.164c.69.181 1.035.271 1.382.215c.346-.057.655-.254 1.272-.648z"></svg:path><svg:path fill="currentColor" d="M19.53 18.47a.75.75 0 1 0-1.06 1.06zm.94 3.06a.75.75 0 1 0 1.06-1.06zm-2-2l2 2l1.06-1.06l-2-2z" opacity=".5"></svg:path></svg:g>`,
})
export class SolarMagicStickLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMagnetBoldDuotoneIcon],svg[solar-magnet-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 2h-4C7.477 2 3 6.477 3 12s4.477 10 10 10h4v-5h-4a5 5 0 0 1 0-10h4z"></svg:path><svg:path fill="currentColor" d="M17 7h2.5A1.5 1.5 0 0 0 21 5.5v-2A1.5 1.5 0 0 0 19.5 2H17zm0 10v5h2.5a1.5 1.5 0 0 0 1.5-1.5v-2a1.5 1.5 0 0 0-1.5-1.5z" opacity=".5"></svg:path>`,
})
export class SolarMagnetBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMagnetLineDuotoneIcon],svg[solar-magnet-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M21 18.5v2a1.5 1.5 0 0 1-1.5 1.5H13C7.477 22 3 17.523 3 12S7.477 2 13 2h6.5A1.5 1.5 0 0 1 21 3.5v2A1.5 1.5 0 0 1 19.5 7H13a5 5 0 0 0 0 10h6.5a1.5 1.5 0 0 1 1.5 1.5"></svg:path><svg:path d="M17 2v5m0 10v5" opacity=".5"></svg:path></svg:g>`,
})
export class SolarMagnetLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMagnetWaveBoldDuotoneIcon],svg[solar-magnet-wave-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.5 3H11a9 9 0 1 0 0 18h3.5v-4.5h-3.556a4.5 4.5 0 0 1 0-9H14.5z"></svg:path><svg:path fill="currentColor" d="M23.503 14.846a11.3 11.3 0 0 1-.553 1.998a7.7 7.7 0 0 1-.572 1.195a5 5 0 0 1-.289.425l-.007.01l-.003.003l-.002.002v.001a.75.75 0 0 1-1.157-.956l.003-.004l.031-.041q.047-.062.137-.212c.12-.199.288-.516.459-.961c.162-.42.327-.956.456-1.617c.127-.65.22-1.42.24-2.32a17 17 0 0 0-.057-1.764c-.117-1.285-.383-2.244-.639-2.91a6 6 0 0 0-.459-.962a3 3 0 0 0-.168-.253l-.003-.004a.75.75 0 0 1 1.156-.956l.001.001l.002.002l.003.003l.007.01a2 2 0 0 1 .086.114q.08.109.203.311c.161.27.368.665.572 1.195c.301.783.594 1.855.726 3.243q.072.74.074 1.601m0 0a15.6 15.6 0 0 1-.247 2.846z" opacity=".4"></svg:path><svg:path fill="currentColor" d="M20.156 8.636a.75.75 0 0 0-1.316.72l.005.01q.01.02.037.086c.035.087.087.235.142.447c.108.424.226 1.111.226 2.101s-.118 1.677-.226 2.101a4 4 0 0 1-.18.534l-.005.01a.75.75 0 0 0 1.317.72L19.5 15l.656.364l.001-.002l.002-.003l.004-.008l.01-.018l.026-.053q.03-.064.076-.175a5 5 0 0 0 .202-.631c.14-.551.273-1.364.273-2.474s-.132-1.923-.273-2.474a5 5 0 0 0-.202-.631a3 3 0 0 0-.103-.228l-.01-.018l-.003-.007l-.002-.003v-.002s-.001-.001-.657.363z" opacity=".7"></svg:path><svg:path fill="currentColor" d="M14.5 7.5h2A1.5 1.5 0 0 0 18 6V4.5A1.5 1.5 0 0 0 16.5 3h-2zm0 9V21h2a1.5 1.5 0 0 0 1.5-1.5V18a1.5 1.5 0 0 0-1.5-1.5z" opacity=".5"></svg:path>`,
})
export class SolarMagnetWaveBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMagnetWaveLineDuotoneIcon],svg[solar-magnet-wave-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M18 18v1.5a1.5 1.5 0 0 1-1.5 1.5H11a9 9 0 1 1 0-18h5.5A1.5 1.5 0 0 1 18 4.5V6a1.5 1.5 0 0 1-1.5 1.5h-5.556a4.5 4.5 0 0 0 0 9H16.5A1.5 1.5 0 0 1 18 18"></svg:path><svg:path stroke-linejoin="round" d="M14.444 3v4.5m0 9V21" opacity=".5"></svg:path><svg:path d="M21.5 6S23 7.8 23 12s-1.5 6-1.5 6" opacity=".7"></svg:path><svg:path d="M19.5 9s.5.9.5 3s-.5 3-.5 3" opacity=".4"></svg:path></svg:g>`,
})
export class SolarMagnetWaveLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMagniferBoldDuotoneIcon],svg[solar-magnifer-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.313 11.157a9.157 9.157 0 1 1-18.313 0a9.157 9.157 0 0 1 18.313 0" opacity=".5"></svg:path><svg:path fill="currentColor" d="m17.1 18.122l3.666 3.666a.723.723 0 0 0 1.023-1.022L18.122 17.1a9 9 0 0 1-1.022 1.022"></svg:path>`,
})
export class SolarMagniferBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMagniferBugBoldDuotoneIcon],svg[solar-magnifer-bug-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.157 20.313a9.157 9.157 0 1 0 0-18.313a9.157 9.157 0 0 0 0 18.313" opacity=".5"></svg:path><svg:path fill="currentColor" d="M17.1 18.122a9 9 0 0 0 1.022-1.022l3.666 3.666a.723.723 0 0 1-1.022 1.022z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M11 6.5c-1.14 0-2.157.532-2.81 1.36l-.68-.338a.716.716 0 0 0-.958.318a.71.71 0 0 0 .319.953l.679.338a3.5 3.5 0 0 0-.121.922v.236h-.715A.71.71 0 0 0 6 11c0 .392.32.71.714.71h.715v.237q.001.48.12.922l-.678.338a.71.71 0 0 0-.32.953c.177.35.606.493.959.318l.68-.338A3.57 3.57 0 0 0 11 15.5c1.14 0 2.157-.532 2.81-1.36l.68.338a.716.716 0 0 0 .958-.318a.71.71 0 0 0-.319-.953l-.679-.338q.12-.442.121-.922v-.236h.715A.71.71 0 0 0 16 11c0-.392-.32-.71-.714-.71h-.715v-.237q-.002-.48-.12-.922l.678-.338a.71.71 0 0 0 .32-.953a.716.716 0 0 0-.959-.318l-.68.338A3.57 3.57 0 0 0 11 6.5m0 1.42c-.933 0-1.726.594-2.02 1.422h4.041a2.14 2.14 0 0 0-2.02-1.421m-2.143 4.027v-1.184h1.429v3.194a2.13 2.13 0 0 1-1.429-2.01m2.858 2.01v-3.194h1.428v1.184c0 .928-.596 1.718-1.428 2.01" clip-rule="evenodd"></svg:path>`,
})
export class SolarMagniferBugBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMagniferBugLineDuotoneIcon],svg[solar-magnifer-bug-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="solarMagniferBugLineDuotone0"><svg:g fill="none" stroke-width="1.5"><svg:circle cx="11.5" cy="11.5" r="9.5" stroke="gray"></svg:circle><svg:path stroke="#fff" stroke-linecap="round" d="M11.5 15.5a3 3 0 0 1-3-3v-2m3 5a3 3 0 0 0 3-3v-2m-3 5v-5m3 0a3 3 0 1 0-6 0m6 0h-6m6.072 1H16m-9 0h1.5m6 2.5l1 .5m-7-.5l-1 .5m7-5.5l1-.5m-7 .5l-1-.5m11 10L22 22"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h24v24H0z" mask="url(#solarMagniferBugLineDuotone0)"></svg:path>`,
})
export class SolarMagniferBugLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMagniferLineDuotoneIcon],svg[solar-magnifer-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="solarMagniferLineDuotone0"><svg:g fill="none" stroke-width="1.5"><svg:circle cx="11.5" cy="11.5" r="9.5" stroke="gray"></svg:circle><svg:path stroke="#fff" stroke-linecap="round" d="M18.5 18.5L22 22"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h24v24H0z" mask="url(#solarMagniferLineDuotone0)"></svg:path>`,
})
export class SolarMagniferLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMagniferZoomInBoldDuotoneIcon],svg[solar-magnifer-zoom-in-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.157 20.313a9.157 9.157 0 1 0 0-18.313a9.157 9.157 0 0 0 0 18.313" opacity=".5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M11.157 8.024c.399 0 .722.324.722.723v1.687h1.687a.723.723 0 1 1 0 1.446H11.88v1.687a.723.723 0 1 1-1.445 0V11.88H8.747a.723.723 0 1 1 0-1.446h1.687V8.747c0-.399.323-.723.723-.723" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="m17.1 18.122l3.666 3.666a.723.723 0 0 0 1.023-1.022L18.122 17.1a9 9 0 0 1-1.022 1.022"></svg:path>`,
})
export class SolarMagniferZoomInBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMagniferZoomInLineDuotoneIcon],svg[solar-magnifer-zoom-in-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="solarMagniferZoomInLineDuotone0"><svg:g fill="none" stroke-width="1.5"><svg:circle cx="11.5" cy="11.5" r="9.5" stroke="gray"></svg:circle><svg:path stroke="#fff" stroke-linecap="round" d="M18.5 18.5L22 22M9 11.5h2.5m0 0H14m-2.5 0V14m0-2.5V9"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h24v24H0z" mask="url(#solarMagniferZoomInLineDuotone0)"></svg:path>`,
})
export class SolarMagniferZoomInLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMagniferZoomOutBoldDuotoneIcon],svg[solar-magnifer-zoom-out-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.157 20.313a9.157 9.157 0 1 0 0-18.313a9.157 9.157 0 0 0 0 18.313" opacity=".5"></svg:path><svg:path fill="currentColor" d="M17.1 18.122a9 9 0 0 0 1.022-1.022l3.666 3.666a.723.723 0 0 1-1.022 1.022z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M8.023 11.157c0-.4.324-.723.723-.723h4.82a.723.723 0 1 1 0 1.445h-4.82a.723.723 0 0 1-.723-.723" clip-rule="evenodd"></svg:path>`,
})
export class SolarMagniferZoomOutBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMagniferZoomOutLineDuotoneIcon],svg[solar-magnifer-zoom-out-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="solarMagniferZoomOutLineDuotone0"><svg:g fill="none" stroke-width="1.5"><svg:circle cx="11.5" cy="11.5" r="9.5" stroke="gray"></svg:circle><svg:path stroke="#fff" stroke-linecap="round" d="M18.5 18.5L22 22M9 11.5h5"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h24v24H0z" mask="url(#solarMagniferZoomOutLineDuotone0)"></svg:path>`,
})
export class SolarMagniferZoomOutLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMailboxBoldDuotoneIcon],svg[solar-mailbox-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 11.25C2 8.35 4.015 6 6.5 6S11 8.35 11 11.25V20H4.233C3 20 2 18.834 2 17.395z" opacity=".5"></svg:path><svg:path fill="currentColor" d="M11 11.25V20h8.793C21.012 20 22 18.847 22 17.425V11.25C22 8.35 19.985 6 17.5 6h-11C8.985 6 11 8.35 11 11.25" opacity=".8"></svg:path><svg:path fill="currentColor" d="M9.5 20v2a.75.75 0 0 0 1.5 0v-2zm5.5 0h-1.5v2a.75.75 0 0 0 1.5 0z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M4.25 16a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1-.75-.75m13.135-9.415l.256-.052a2.2 2.2 0 0 1 1.24.115c.69.277 1.446.328 2.165.148l.061-.015c.524-.131.893-.618.893-1.178v-2.13c0-.738-.664-1.282-1.355-1.109c-.396.1-.812.071-1.193-.081l-.073-.03a3.5 3.5 0 0 0-2-.185l-.449.09c-.54.108-.93.6-.93 1.17v6.953c0 .397.31.719.692.719a.706.706 0 0 0 .693-.72z" clip-rule="evenodd"></svg:path>`,
})
export class SolarMailboxBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMailboxLineDuotoneIcon],svg[solar-mailbox-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M10.5 22v-2m4 2v-2" opacity=".5"></svg:path><svg:path fill="currentColor" d="M11 20v.75h.75V20zm3-.75a.75.75 0 0 0 0 1.5zm3.5-14a.75.75 0 0 0 0 1.5zM7 5.25a.75.75 0 0 0 0 1.5zm2 14a.75.75 0 0 0 0 1.5zm6 1.5a.75.75 0 0 0 0-1.5zm-4.75-9.5V20h1.5v-8.75zm.75 8H4.233v1.5H11zm-8.25-1.855V11.25h-1.5v6.145zm1.483 1.855c-.715 0-1.483-.718-1.483-1.855h-1.5c0 1.74 1.231 3.355 2.983 3.355zM6.5 6.75c1.967 0 3.75 1.902 3.75 4.5h1.5c0-3.201-2.246-6-5.25-6zm0-1.5c-3.004 0-5.25 2.799-5.25 6h1.5c0-2.598 1.783-4.5 3.75-4.5zm14.75 6v6.175h1.5V11.25zm-1.457 8H14v1.5h5.793zm1.457-1.825c0 1.12-.757 1.825-1.457 1.825v1.5c1.738 0 2.957-1.601 2.957-3.325zm1.5-6.175c0-3.201-2.246-6-5.25-6v1.5c1.967 0 3.75 1.902 3.75 4.5zM7 6.75h11v-1.5H7zm2 14h6v-1.5H9z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M5 16h3"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M16 9.884V5.411m0 0V2.635c0-.236.168-.439.4-.484l.486-.093a3.2 3.2 0 0 1 1.755.156l.08.03c.554.214 1.16.254 1.737.115a.44.44 0 0 1 .542.427v2.221a.51.51 0 0 1-.393.499l-.066.016a3.2 3.2 0 0 1-1.9-.125a3.2 3.2 0 0 0-1.755-.156z" opacity=".5"></svg:path></svg:g>`,
})
export class SolarMailboxLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMapArrowDownBoldDuotoneIcon],svg[solar-map-arrow-down-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.037 14.144a.5.5 0 0 1-.68-.244L3.164 4.498c-.667-1.495.815-3.047 2.202-2.306l5.904 3.152c.46.245 1 .245 1.459 0l5.904-3.152c1.387-.741 2.869.81 2.202 2.306l-1.572 3.525a2 2 0 0 1-.932.974z"></svg:path><svg:path fill="currentColor" d="M8.61 15.534a.5.5 0 0 0-.234.651l2.151 4.823c.59 1.323 2.355 1.323 2.945 0l3.968-8.898a.5.5 0 0 0-.68-.651z" opacity=".5"></svg:path>`,
})
export class SolarMapArrowDownBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMapArrowDownLineDuotoneIcon],svg[solar-map-arrow-down-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M12 5.527c-.25 0-.5-.061-.73-.184L5.368 2.191c-1.388-.74-2.87.81-2.202 2.306l7.362 16.51c.296.662.884.993 1.473.993"></svg:path><svg:path d="M12 5.527c.25 0 .5-.061.73-.184l5.903-3.152c1.388-.74 2.87.81 2.202 2.306l-7.363 16.51C13.178 21.67 12.59 22 12 22" opacity=".5"></svg:path></svg:g>`,
})
export class SolarMapArrowDownLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMapArrowLeftBoldDuotoneIcon],svg[solar-map-arrow-left-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.857 15.962a.5.5 0 0 0 .243.68l9.402 4.193c1.496.667 3.047-.814 2.306-2.202l-3.152-5.904c-.245-.459-.245-1 0-1.458l3.152-5.904c.741-1.388-.81-2.87-2.306-2.202l-3.524 1.572a2 2 0 0 0-.975.932z"></svg:path><svg:path fill="currentColor" d="M8.466 15.39a.5.5 0 0 1-.65.233l-4.823-2.15c-1.324-.59-1.324-2.355 0-2.945L11.89 6.56a.5.5 0 0 1 .651.68z" opacity=".5"></svg:path>`,
})
export class SolarMapArrowLeftBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMapArrowLeftLineDuotoneIcon],svg[solar-map-arrow-left-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M18.473 12c0 .25.061.5.184.73l3.152 5.903c.74 1.388-.81 2.87-2.306 2.202l-16.51-7.363C2.33 13.178 2 12.59 2 12"></svg:path><svg:path d="M18.473 12c0-.25.061-.5.184-.73l3.152-5.903c.74-1.388-.81-2.87-2.306-2.202l-16.51 7.362C2.33 10.824 2 11.412 2 12" opacity=".5"></svg:path></svg:g>`,
})
export class SolarMapArrowLeftLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMapArrowRightBoldDuotoneIcon],svg[solar-map-arrow-right-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.143 15.962a.5.5 0 0 1-.244.68l-9.402 4.193c-1.495.667-3.047-.814-2.306-2.202l3.152-5.904c.245-.459.245-1 0-1.458L2.191 5.367c-.74-1.388.81-2.87 2.306-2.202l3.525 1.572a2 2 0 0 1 .974.932z"></svg:path><svg:path fill="currentColor" d="M15.533 15.39a.5.5 0 0 0 .651.233l4.823-2.15c1.323-.59 1.323-2.355 0-2.945L12.109 6.56a.5.5 0 0 0-.651.68z" opacity=".5"></svg:path>`,
})
export class SolarMapArrowRightBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMapArrowRightLineDuotoneIcon],svg[solar-map-arrow-right-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M5.527 12c0-.25-.061-.5-.184-.73L2.191 5.368c-.74-1.388.81-2.87 2.306-2.202l16.51 7.362c.662.296.993.884.993 1.473"></svg:path><svg:path d="M5.527 12c0 .25-.061.5-.184.73l-3.152 5.903c-.74 1.388.81 2.87 2.306 2.202l16.51-7.363C21.67 13.178 22 12.59 22 12" opacity=".5"></svg:path></svg:g>`,
})
export class SolarMapArrowRightLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMapArrowSquareBoldDuotoneIcon],svg[solar-map-arrow-square-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.464 20.536C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535" clip-rule="evenodd" opacity=".5"></svg:path><svg:path fill="currentColor" d="m13.423 17.362l3.512-9.166a.863.863 0 0 0-1.131-1.13l-9.166 3.511c-.83.319-.857 1.483-.04 1.731l3.477 1.057c.27.082.478.29.56.56l1.057 3.477c.248.817 1.412.79 1.73-.04"></svg:path>`,
})
export class SolarMapArrowSquareBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMapArrowSquareLineDuotoneIcon],svg[solar-map-arrow-square-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M12 22c-4.714 0-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22Z" opacity=".5"></svg:path><svg:path d="m13.423 17.362l3.512-9.166a.863.863 0 0 0-1.131-1.13l-9.166 3.511c-.83.319-.857 1.483-.04 1.731l3.477 1.057c.27.082.478.29.56.56l1.057 3.477c.248.817 1.412.79 1.73-.04Z"></svg:path></svg:g>`,
})
export class SolarMapArrowSquareLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMapArrowUpBoldDuotoneIcon],svg[solar-map-arrow-up-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.037 9.858a.5.5 0 0 0-.68.243l-4.193 9.402c-.667 1.496.815 3.047 2.202 2.306l5.904-3.152c.46-.245 1-.245 1.459 0l5.904 3.152c1.387.741 2.869-.81 2.202-2.306l-1.572-3.524a2 2 0 0 0-.932-.975z"></svg:path><svg:path fill="currentColor" d="M8.61 8.467a.5.5 0 0 1-.234-.65l2.151-4.823c.59-1.324 2.355-1.324 2.945 0l3.968 8.898a.5.5 0 0 1-.68.65z" opacity=".5"></svg:path>`,
})
export class SolarMapArrowUpBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMapArrowUpLineDuotoneIcon],svg[solar-map-arrow-up-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M12 18.473c-.25 0-.5.061-.73.184l-5.903 3.152c-1.388.74-2.87-.81-2.202-2.306l7.362-16.51C10.824 2.33 11.412 2 12 2"></svg:path><svg:path d="M12 18.473c.25 0 .5.061.73.184l5.903 3.152c1.388.74 2.87-.81 2.202-2.306l-7.363-16.51C13.178 2.33 12.59 2 12 2" opacity=".5"></svg:path></svg:g>`,
})
export class SolarMapArrowUpLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMapBoldDuotoneIcon],svg[solar-map-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 8.71v8.128c0 1.043 0 1.565.283 1.958s.778.558 1.768.888l1.165.388c1.367.456 2.05.684 2.739.591L9 20.657v-14a3 3 0 0 1-.34.031c-.54.019-1.074-.16-2.141-.515c-1.398-.466-2.097-.699-2.629-.462a1.5 1.5 0 0 0-.497.358C3 6.5 3 7.236 3 8.71m18 6.58V7.163c0-1.043 0-1.565-.283-1.958s-.778-.558-1.768-.888l-1.165-.388c-1.367-.456-2.05-.684-2.739-.591L15 3.343v14q.17-.025.34-.031c.54-.019 1.074.16 2.141.515c1.398.466 2.097.699 2.629.462a1.5 1.5 0 0 0 .497-.358C21 17.5 21 16.764 21 15.29" opacity=".5"></svg:path><svg:path fill="currentColor" d="M9.247 6.61q-.123.027-.247.047v14c.67-.104 1.269-.503 2.442-1.285l1.382-.922c.936-.624 1.404-.936 1.93-1.06q.12-.03.246-.047v-14c-.67.103-1.269.503-2.442 1.284l-1.382.922c-.936.624-1.404.936-1.93 1.06m8.235 11.218l.254.084z"></svg:path>`,
})
export class SolarMapBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMapLineDuotoneIcon],svg[solar-map-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M3 8.71c0-1.474 0-2.21.393-2.64a1.5 1.5 0 0 1 .497-.36c.532-.236 1.231-.003 2.629.463c1.067.356 1.6.534 2.14.515a3 3 0 0 0 .588-.078c.525-.125.993-.437 1.929-1.06l1.382-.922c1.2-.8 1.799-1.2 2.487-1.291c.688-.093 1.372.135 2.739.591l1.165.388c.99.33 1.485.495 1.768.888S21 6.12 21 7.162v8.129c0 1.473 0 2.21-.393 2.64a1.5 1.5 0 0 1-.497.358c-.532.237-1.231.004-2.629-.462c-1.067-.356-1.6-.534-2.14-.515a3 3 0 0 0-.588.078c-.525.125-.993.437-1.929 1.06l-1.382.922c-1.2.8-1.799 1.2-2.487 1.291c-.688.093-1.372-.135-2.739-.591l-1.165-.388c-.99-.33-1.485-.495-1.768-.888S3 17.88 3 16.838z"></svg:path><svg:path d="M9 6.639V20.5M15 3v14" opacity=".5"></svg:path></svg:g>`,
})
export class SolarMapLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMapPointAddBoldDuotoneIcon],svg[solar-map-point-add-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.537 21.674a3.45 3.45 0 0 0 2.926 0C17.447 19.812 20 14.606 20 10.144C20 5.645 16.418 2 12 2s-8 3.646-8 8.143c0 4.462 2.553 9.67 6.537 11.531" opacity=".5"></svg:path><svg:path fill="currentColor" d="M12.75 7.5a.75.75 0 0 0-1.5 0v1.75H9.5a.75.75 0 0 0 0 1.5h1.75v1.75a.75.75 0 0 0 1.5 0v-1.75h1.75a.75.75 0 0 0 0-1.5h-1.75z"></svg:path>`,
})
export class SolarMapPointAddBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMapPointAddLineDuotoneIcon],svg[solar-map-point-add-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M4 10.143C4 5.646 7.582 2 12 2s8 3.646 8 8.143c0 4.462-2.553 9.67-6.537 11.531a3.45 3.45 0 0 1-2.926 0C6.553 19.812 4 14.606 4 10.144Z" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="M9.5 10h5M12 12.5v-5"></svg:path></svg:g>`,
})
export class SolarMapPointAddLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMapPointBoldDuotoneIcon],svg[solar-map-point-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2c-4.418 0-8 4.003-8 8.5c0 4.462 2.553 9.312 6.537 11.174a3.45 3.45 0 0 0 2.926 0C17.447 19.812 20 14.962 20 10.5C20 6.003 16.418 2 12 2" opacity=".5"></svg:path><svg:path fill="currentColor" d="M12 12.5a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5"></svg:path>`,
})
export class SolarMapPointBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMapPointFavouriteBoldDuotoneIcon],svg[solar-map-point-favourite-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.537 21.674a3.45 3.45 0 0 0 2.926 0C17.447 19.812 20 14.606 20 10.144C20 5.645 16.418 2 12 2s-8 3.646-8 8.143c0 4.462 2.553 9.67 6.537 11.531" opacity=".5"></svg:path><svg:path fill="currentColor" d="M10.724 13.33C9.554 12.396 8 10.888 8 9.46c0-2.426 2.2-3.332 4-1.458c1.8-1.874 4-.968 4 1.458c0 1.428-1.553 2.936-2.724 3.87c-.56.447-.84.67-1.276.67s-.716-.223-1.276-.67"></svg:path>`,
})
export class SolarMapPointFavouriteBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMapPointFavouriteLineDuotoneIcon],svg[solar-map-point-favourite-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="1.5" d="M4 10.143C4 5.646 7.582 2 12 2s8 3.646 8 8.143c0 4.462-2.553 9.67-6.537 11.531a3.45 3.45 0 0 1-2.926 0C6.553 19.812 4 14.606 4 10.144Z" opacity=".5"></svg:path><svg:path fill="currentColor" d="m11.043 11.522l-.454.597zM12 7.716l-.528.533a.75.75 0 0 0 1.056 0zm.957 3.805l.454.598zM12 12v-.75zm-.503-1.076c-.418-.317-.88-.714-1.23-1.133c-.366-.44-.517-.792-.517-1.034h-1.5c0 .779.432 1.475.866 1.995c.453.542 1.013 1.017 1.473 1.367zM9.75 8.757c0-.622.277-.886.5-.967c.237-.087.693-.066 1.222.459l1.056-1.065c-.821-.815-1.865-1.14-2.79-.804c-.94.341-1.488 1.267-1.488 2.377zm3.66 3.362c.461-.35 1.021-.825 1.473-1.367c.435-.52.867-1.216.867-1.995h-1.5c0 .242-.15.594-.518 1.034c-.35.419-.81.816-1.229 1.133zm2.34-3.362c0-1.11-.548-2.036-1.488-2.377c-.925-.336-1.969-.011-2.79.804l1.056 1.065c.529-.525.985-.546 1.222-.46c.223.082.5.346.5.968zm-5.16 3.362c.364.277.783.631 1.41.631v-1.5c-.02 0-.03.002-.084-.028a4 4 0 0 1-.42-.298zm1.913-1.195a4 4 0 0 1-.419.298c-.053.03-.065.028-.084.028v1.5c.627 0 1.046-.354 1.41-.631z"></svg:path></svg:g>`,
})
export class SolarMapPointFavouriteLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMapPointHospitalBoldDuotoneIcon],svg[solar-map-point-hospital-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M12 2c-4.418 0-8 3.646-8 8.143c0 4.462 2.553 9.67 6.537 11.531a3.45 3.45 0 0 0 2.926 0C17.447 19.812 20 14.606 20 10.144C20 5.645 16.418 2 12 2m0 12a4 4 0 1 0 0-8a4 4 0 0 0 0 8" opacity=".5"></svg:path><svg:path d="M12 14a4 4 0 1 0 0-8a4 4 0 0 0 0 8m.75-5.5a.75.75 0 0 0-1.5 0v.75h-.75a.75.75 0 0 0 0 1.5h.75v.75a.75.75 0 0 0 1.5 0v-.75h.75a.75.75 0 0 0 0-1.5h-.75z"></svg:path></svg:g>`,
})
export class SolarMapPointHospitalBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMapPointHospitalLineDuotoneIcon],svg[solar-map-point-hospital-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M4 10.143C4 5.646 7.582 2 12 2s8 3.646 8 8.143c0 4.462-2.553 9.67-6.537 11.531a3.45 3.45 0 0 1-2.926 0C6.553 19.812 4 14.606 4 10.144Z" opacity=".5"></svg:path><svg:circle cx="12" cy="10" r="4"></svg:circle><svg:path stroke-linecap="round" d="M10.5 10h3M12 11.5v-3"></svg:path></svg:g>`,
})
export class SolarMapPointHospitalLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMapPointLineDuotoneIcon],svg[solar-map-point-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M4 10.143C4 5.646 7.582 2 12 2s8 3.646 8 8.143c0 4.462-2.553 9.67-6.537 11.531a3.45 3.45 0 0 1-2.926 0C6.553 19.812 4 14.606 4 10.144Z" opacity=".5"></svg:path><svg:circle cx="12" cy="10" r="3"></svg:circle></svg:g>`,
})
export class SolarMapPointLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMapPointRemoveBoldDuotoneIcon],svg[solar-map-point-remove-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.537 21.674a3.45 3.45 0 0 0 2.926 0C17.447 19.812 20 14.606 20 10.144C20 5.645 16.418 2 12 2s-8 3.646-8 8.143c0 4.462 2.553 9.67 6.537 11.531" opacity=".5"></svg:path><svg:path fill="currentColor" d="M9 9.25a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5z"></svg:path>`,
})
export class SolarMapPointRemoveBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMapPointRemoveLineDuotoneIcon],svg[solar-map-point-remove-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M4 10.143C4 5.646 7.582 2 12 2s8 3.646 8 8.143c0 4.462-2.553 9.67-6.537 11.531a3.45 3.45 0 0 1-2.926 0C6.553 19.812 4 14.606 4 10.144Z" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="M9 10h6"></svg:path></svg:g>`,
})
export class SolarMapPointRemoveLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMapPointRotateBoldDuotoneIcon],svg[solar-map-point-rotate-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M6 8.107C6 4.734 8.686 2 12 2s6 2.734 6 6.107c0 3.347-1.915 7.252-4.903 8.649a2.59 2.59 0 0 1-2.194 0C7.915 15.359 6 11.454 6 8.107M12 10a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></svg:path><svg:path d="M3.627 14.534a.75.75 0 0 1-.122 1.054c-.573.454-.755.855-.755 1.162c0 .243.11.538.44.88c.334.345.856.695 1.566 1.017c1.254.569 2.988 1 4.994 1.187v-.459a.75.75 0 0 1 1.244-.564l1.5 1.312a.75.75 0 0 1 0 1.129l-1.5 1.313A.75.75 0 0 1 9.75 22v-.66c-2.185-.191-4.14-.659-5.614-1.327c-.814-.369-1.515-.815-2.024-1.34c-.511-.53-.862-1.179-.862-1.923c0-.95.567-1.738 1.324-2.338a.75.75 0 0 1 1.053.122m16.746 0a.75.75 0 0 1 1.053-.122c.757.6 1.324 1.388 1.324 2.338c0 1.378-1.168 2.41-2.547 3.101c-1.441.723-3.412 1.234-5.627 1.459a.75.75 0 0 1-.152-1.493c2.098-.212 3.877-.69 5.107-1.307c1.294-.648 1.719-1.303 1.719-1.76c0-.307-.182-.708-.755-1.162a.75.75 0 0 1-.122-1.054" opacity=".5"></svg:path></svg:g>`,
})
export class SolarMapPointRotateBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMapPointRotateLineDuotoneIcon],svg[solar-map-point-rotate-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="1.5" d="M6 8.107C6 4.734 8.686 2 12 2s6 2.734 6 6.107c0 3.347-1.915 7.252-4.903 8.649a2.59 2.59 0 0 1-2.194 0C7.915 15.359 6 11.454 6 8.107Z" opacity=".5"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M14 8a2 2 0 1 1-4 0a2 2 0 0 1 4 0Z"></svg:path><svg:path fill="currentColor" d="m12 20.688l.494.564a.75.75 0 0 0 0-1.129zm9.426-6.276a.75.75 0 1 0-.931 1.176zm-17.92 1.176a.75.75 0 1 0-.932-1.176zm6.994 3.787l.494-.564a.75.75 0 0 0-1.244.564zm0 2.625h-.75a.75.75 0 0 0 1.244.564zm3.924-2.183a.75.75 0 0 0 .152 1.493zm-3.88.078c-2.343-.139-4.371-.605-5.788-1.248c-.71-.322-1.232-.672-1.565-1.017c-.33-.342-.441-.637-.441-.88h-1.5c0 .744.35 1.393.862 1.922c.509.526 1.21.972 2.024 1.341c1.63.74 3.851 1.233 6.32 1.38zm9.95-4.307c.574.454.756.855.756 1.162h1.5c0-.95-.567-1.738-1.324-2.338zM2.75 16.75c0-.307.182-.708.755-1.162l-.931-1.176c-.757.6-1.324 1.388-1.324 2.338zm9.744 3.373l-1.5-1.312l-.988 1.128l1.5 1.313zm-2.744-.748v1.268h1.5v-1.268zm0 1.268V22h1.5v-1.357zm1.244 1.921l1.5-1.312l-.988-1.129l-1.5 1.313zM21.25 16.75c0 .457-.425 1.112-1.719 1.76c-1.23.617-3.009 1.095-5.107 1.307l.152 1.493c2.215-.225 4.186-.736 5.627-1.459c1.379-.69 2.547-1.723 2.547-3.101z"></svg:path></svg:g>`,
})
export class SolarMapPointRotateLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMapPointSchoolBoldDuotoneIcon],svg[solar-map-point-school-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.537 21.674a3.45 3.45 0 0 0 2.926 0C17.447 19.812 20 14.606 20 10.144C20 5.645 16.418 2 12 2s-8 3.646-8 8.143c0 4.462 2.553 9.67 6.537 11.531" opacity=".5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M13.033 5.932a3.03 3.03 0 0 0-2.066 0l-2.342.855c-.541.198-.875.68-.875 1.213s.334 1.015.875 1.213l.125.045V11.7c0 .673.394 1.329 1.08 1.582c.526.194 1.391.468 2.17.468s1.644-.274 2.17-.468c.686-.253 1.08-.909 1.08-1.582V9.258l.125-.045c.541-.198.875-.68.875-1.213s-.334-1.015-.875-1.213zM10.25 9.806V11.7c0 .105.057.159.1.175c.501.185 1.154.375 1.65.375s1.149-.19 1.65-.375c.043-.016.1-.07.1-.175V9.806l-.717.262a3.03 3.03 0 0 1-2.066 0zm2.269-2.465a1.53 1.53 0 0 0-1.038 0L9.677 8l1.804.66c.332.12.707.12 1.038 0L14.323 8z" clip-rule="evenodd"></svg:path>`,
})
export class SolarMapPointSchoolBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMapPointSchoolLineDuotoneIcon],svg[solar-map-point-school-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M4 10.143C4 5.646 7.582 2 12 2s8 3.646 8 8.143c0 4.462-2.553 9.67-6.537 11.531a3.45 3.45 0 0 1-2.926 0C6.553 19.812 4 14.606 4 10.144Z" opacity=".5"></svg:path><svg:path d="M11.224 6.636a2.28 2.28 0 0 1 1.552 0l2.342.856c.51.186.51.83 0 1.016l-2.342.856a2.28 2.28 0 0 1-1.552 0l-2.342-.856c-.51-.186-.51-.83 0-1.016z"></svg:path><svg:path stroke-linecap="round" d="M14.5 9v2.7a.92.92 0 0 1-.59.879c-.514.189-1.273.421-1.91.421s-1.396-.232-1.91-.421a.92.92 0 0 1-.59-.879V9"></svg:path></svg:g>`,
})
export class SolarMapPointSchoolLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMapPointSearchBoldDuotoneIcon],svg[solar-map-point-search-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.537 21.674a3.45 3.45 0 0 0 2.926 0C17.447 19.812 20 14.606 20 10.144C20 5.645 16.418 2 12 2s-8 3.646-8 8.143c0 4.462 2.553 9.67 6.537 11.531" opacity=".5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12 6.25a3.75 3.75 0 1 0 2.07 6.877l.898.902a.75.75 0 0 0 1.064-1.057l-.902-.907A3.75 3.75 0 0 0 12 6.25m0 1.5a2.25 2.25 0 1 0 0 4.5a2.25 2.25 0 0 0 0-4.5" clip-rule="evenodd"></svg:path>`,
})
export class SolarMapPointSearchBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMapPointSearchLineDuotoneIcon],svg[solar-map-point-search-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M4 10.143C4 5.646 7.582 2 12 2s8 3.646 8 8.143c0 4.462-2.553 9.67-6.537 11.531a3.45 3.45 0 0 1-2.926 0C6.553 19.812 4 14.606 4 10.144Z" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="M14.125 12.118L15.5 13.5m-1.375-1.382a3 3 0 1 0-4.25-4.236a3 3 0 0 0 4.25 4.236Z"></svg:path></svg:g>`,
})
export class SolarMapPointSearchLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMapPointWaveBoldDuotoneIcon],svg[solar-map-point-wave-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.717 20.362C21.143 19.585 22 18.587 22 17.5c0-1.152-.963-2.204-2.546-3C17.623 13.58 14.962 13 12 13s-5.623.58-7.454 1.5C2.963 15.296 2 16.348 2 17.5s.963 2.204 2.546 3C6.377 21.42 9.038 22 12 22c3.107 0 5.882-.637 7.717-1.638" opacity=".5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M5 8.515C5 4.917 8.134 2 12 2s7 2.917 7 6.515c0 3.57-2.234 7.735-5.72 9.225a3.28 3.28 0 0 1-2.56 0C7.234 16.25 5 12.084 5 8.515M12 11a2 2 0 1 0 0-4a2 2 0 0 0 0 4" clip-rule="evenodd"></svg:path>`,
})
export class SolarMapPointWaveBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMapPointWaveLineDuotoneIcon],svg[solar-map-point-wave-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M5 8.515C5 4.917 8.134 2 12 2s7 2.917 7 6.515c0 3.57-2.234 7.735-5.72 9.225a3.28 3.28 0 0 1-2.56 0C7.234 16.25 5 12.084 5 8.515Z" opacity=".5"></svg:path><svg:path d="M14 9a2 2 0 1 1-4 0a2 2 0 0 1 4 0Z"></svg:path><svg:path stroke-linecap="round" d="M20.96 15.5c.666.602 1.04 1.282 1.04 2c0 2.485-4.477 4.5-10 4.5S2 19.985 2 17.5c0-.718.374-1.398 1.04-2"></svg:path></svg:g>`,
})
export class SolarMapPointWaveLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMaskHapplyBoldDuotoneIcon],svg[solar-mask-happly-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 6.43v5.47c0 5.69-4.239 8.45-6.899 9.622C13.38 21.841 13.02 22 12 22s-1.38-.159-2.101-.477C7.239 20.351 3 17.59 3 11.901V6.43c0-2.269 0-3.404.707-4.024c.708-.621 1.789-.434 3.95-.061l1.055.182c1.64.283 2.46.425 3.288.425s1.648-.142 3.288-.425l1.054-.182c2.163-.373 3.244-.56 3.95.06C21 3.026 21 4.16 21 6.43" opacity=".5"></svg:path><svg:path fill="currentColor" d="M7.171 9.14c.124-.256.586-.606 1.33-.606c.742 0 1.205.35 1.328.606a.74.74 0 0 0 1.006.348a.79.79 0 0 0 .336-1.043c-.459-.95-1.567-1.466-2.67-1.466c-1.104 0-2.213.515-2.672 1.466a.79.79 0 0 0 .336 1.043a.74.74 0 0 0 1.006-.348m8.329-.606c-.743 0-1.206.35-1.329.606a.74.74 0 0 1-1.006.348a.79.79 0 0 1-.336-1.043c.459-.95 1.568-1.466 2.671-1.466c1.104 0 2.212.515 2.671 1.466a.79.79 0 0 1-.336 1.043a.74.74 0 0 1-1.006-.348c-.123-.256-.586-.606-1.329-.606m-7.511 6.008a.804.804 0 0 1-.032-1.104a.75.75 0 0 1 1.067-.022c.02.016.067.053.103.079c.1.071.267.177.506.285c.475.217 1.248.453 2.367.453c1.12 0 1.892-.236 2.367-.453c.239-.108.406-.214.507-.285q.075-.055.102-.079l.014-.012l.001-.001a.73.73 0 0 1 1.052.035a.797.797 0 0 1-.026 1.098v.002h-.002l-.003.004l-.008.007l-.02.019l-.06.052a3 3 0 0 1-.202.156a4.6 4.6 0 0 1-.751.427c-.663.302-1.64.584-2.97.584s-2.309-.282-2.971-.584a4.6 4.6 0 0 1-.752-.427a3 3 0 0 1-.288-.232z"></svg:path>`,
})
export class SolarMaskHapplyBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMaskHapplyLineDuotoneIcon],svg[solar-mask-happly-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M21 12V6.719c0-2.19 0-3.285-.707-3.884c-.707-.6-1.788-.42-3.95-.059l-1.055.176c-1.64.273-2.46.41-3.288.41s-1.648-.137-3.288-.41l-1.054-.176c-2.162-.36-3.243-.54-3.95.059S3 4.529 3 6.719V12c0 5.49 4.239 8.155 6.899 9.286c.721.307 1.082.46 2.101.46c1.02 0 1.38-.153 2.101-.46C16.761 20.155 21 17.49 21 12Z" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="M6.5 9c.291-.583 1.077-1 2-1s1.709.417 2 1m3 0c.291-.583 1.077-1 2-1s1.709.417 2 1m-9 5s1.05 1 3.5 1s3.5-1 3.5-1"></svg:path></svg:g>`,
})
export class SolarMaskHapplyLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMaskSadBoldDuotoneIcon],svg[solar-mask-sad-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 6.208v5.198c0 5.405-4.239 8.027-6.899 9.14C13.38 20.85 13.02 21 12 21s-1.38-.151-2.101-.453C7.239 19.433 3 16.81 3 11.407v-5.2c0-2.155 0-3.233.707-3.823c.708-.59 1.789-.412 3.95-.057l1.055.173c1.64.269 2.46.403 3.288.403s1.648-.134 3.288-.403l1.054-.173c2.163-.355 3.244-.532 3.95.057c.708.59.708 1.668.708 3.824" opacity=".5"></svg:path><svg:path fill="currentColor" d="M7.171 8.783c.124-.243.586-.576 1.33-.576c.742 0 1.205.333 1.328.576a.756.756 0 0 0 1.006.33a.733.733 0 0 0 .336-.99c-.459-.904-1.567-1.393-2.67-1.393c-1.104 0-2.213.49-2.672 1.393a.733.733 0 0 0 .336.99a.756.756 0 0 0 1.006-.33m8.329-.576c-.743 0-1.206.333-1.329.576a.756.756 0 0 1-1.006.33a.733.733 0 0 1-.336-.99c.459-.904 1.568-1.393 2.671-1.393c1.104 0 2.212.49 2.671 1.393a.733.733 0 0 1-.336.99a.756.756 0 0 1-1.006-.33c-.123-.243-.586-.576-1.329-.576m-7.504 5.606a.745.745 0 0 0-.04 1.055a.76.76 0 0 0 1.054.033l.005-.005l.01-.007a1 1 0 0 1 .101-.075c.101-.068.268-.168.507-.271c.475-.206 1.247-.43 2.367-.43s1.892.224 2.367.43c.239.103.406.203.506.271q.075.052.103.075l.01.008l.005.004c.3.274.769.26 1.052-.033a.73.73 0 0 0-.026-1.043l-.001-.002h-.001l-.003-.004l-.008-.007l-.02-.017l-.06-.05a3 3 0 0 0-.202-.148a4.6 4.6 0 0 0-.751-.406c-.663-.287-1.64-.554-2.971-.554c-1.33 0-2.308.268-2.97.554c-.33.143-.58.289-.752.406a3 3 0 0 0-.262.198z"></svg:path>`,
})
export class SolarMaskSadBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMaskSadLineDuotoneIcon],svg[solar-mask-sad-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M21 12V6.719c0-2.19 0-3.285-.707-3.884c-.707-.6-1.788-.42-3.95-.059l-1.055.176c-1.64.273-2.46.41-3.288.41s-1.648-.137-3.288-.41l-1.054-.176c-2.162-.36-3.243-.54-3.95.059S3 4.529 3 6.719V12c0 5.49 4.239 8.155 6.899 9.286c.721.307 1.082.46 2.101.46c1.02 0 1.38-.153 2.101-.46C16.761 20.155 21 17.49 21 12Z" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="M6.5 9c.291-.583 1.077-1 2-1s1.709.417 2 1m3 0c.291-.583 1.077-1 2-1s1.709.417 2 1m-9 6s1.05-1 3.5-1s3.5 1 3.5 1"></svg:path></svg:g>`,
})
export class SolarMaskSadLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMasksBoldDuotoneIcon],svg[solar-masks-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m15.913 9.38l.845 3.297c.994 3.876-1.284 6.658-3.026 8.145c-.531.454-.797.68-1.825.968s-1.367.23-2.044.116c-2.22-.377-5.523-1.597-6.516-5.473l-.845-3.297c-.441-1.719-.661-2.578-.37-3.253c.098-.226.234-.432.401-.609c.5-.525 1.346-.616 3.04-.798c1.255-.135 1.882-.202 2.493-.35a10 10 0 0 0 .632-.178c.6-.19 1.175-.46 2.326-.999c1.554-.727 2.331-1.091 3.015-.897c.229.065.445.172.638.317c.575.432.796 1.291 1.236 3.01m-9.908 3.988c.029-.296.26-.6.638-.702c.379-.102.73.047.903.29a.75.75 0 0 0 1.22-.873c-.55-.77-1.552-1.123-2.511-.866s-1.651 1.064-1.743 2.006a.75.75 0 0 0 1.493.145m6.434-2.255c-.379.101-.61.406-.638.702a.75.75 0 0 1-1.493-.145c.092-.943.784-1.75 1.743-2.006c.959-.257 1.961.095 2.512.866a.75.75 0 1 1-1.22.872c-.174-.242-.525-.39-.904-.29m.762 5.118l.447-.602a.75.75 0 0 1-.885 1.211l-.01-.006a2 2 0 0 0-.485-.2c-.36-.098-.929-.163-1.685.04c-.756.202-1.216.543-1.48.808a2 2 0 0 0-.32.416l-.005.01a.75.75 0 0 1-1.372-.607l.688.298l-.688-.298v.001l.001-.002l.002-.004l.004-.009l.01-.022l.033-.064a3 3 0 0 1 .115-.196c.1-.156.252-.36.468-.578c.437-.44 1.125-.924 2.156-1.2c1.031-.277 1.87-.2 2.467-.038c.296.08.53.18.694.266a3 3 0 0 1 .258.151l.02.015l.008.005l.003.003h.002l.001.002z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="m20.652 12.433l.845-3.297c.44-1.719.661-2.578.37-3.253a2.1 2.1 0 0 0-.401-.609c-.5-.525-1.347-.616-3.04-.798c-1.255-.135-1.882-.202-2.493-.35a10 10 0 0 1-.632-.178c-.6-.19-1.175-.46-2.326-.999c-1.554-.727-2.331-1.091-3.015-.897a2 2 0 0 0-.638.317c-.575.432-.796 1.291-1.236 3.01l-.7 2.73l-.044.157a8.4 8.4 0 0 0 1.355-.318c.6-.19 1.176-.46 2.327-.999c1.554-.727 2.33-1.091 3.014-.897c.23.065.446.172.639.317c.575.432.795 1.291 1.236 3.01l.845 3.298c.445 1.735.234 3.252-.292 4.531l.033.013c1.741-.75 3.479-2.157 4.153-4.788" opacity=".6"></svg:path><svg:path fill="currentColor" d="M15.728 8.666a.752.752 0 0 0 1.164-.07c.173-.243.524-.392.903-.29c.379.101.61.406.638.702a.75.75 0 1 0 1.493-.145c-.092-.942-.784-1.749-1.743-2.006s-1.961.096-2.512.866a.75.75 0 0 0-.124.285q.087.299.181.658M10.24 7.315c.23-.106.488-.227.784-.366c1.196-.56 1.932-.904 2.52-.945a2.4 2.4 0 0 0-1.157-.7c-.959-.257-1.961.096-2.512.866a.75.75 0 0 0 .365 1.145" opacity=".6"></svg:path>`,
})
export class SolarMasksBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMasksLineDuotoneIcon],svg[solar-masks-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="1.5" d="m16.758 12.677l-.845-3.298c-.44-1.719-.66-2.578-1.236-3.01a2 2 0 0 0-.638-.317c-.684-.194-1.46.17-3.015.897c-1.15.54-1.726.809-2.326 1a10 10 0 0 1-.632.176c-.611.149-1.238.216-2.493.351c-1.694.182-2.54.273-3.04.798a2.1 2.1 0 0 0-.4.609c-.292.675-.072 1.534.369 3.253l.845 3.297c.993 3.876 4.296 5.096 6.516 5.473c.677.115 1.016.172 2.044-.116s1.294-.514 1.825-.968c1.742-1.487 4.02-4.27 3.026-8.145Z"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M16.5 17.221c1.741-.75 3.48-2.157 4.153-4.788l.845-3.297c.441-1.719.661-2.578.37-3.253a2.1 2.1 0 0 0-.401-.609c-.5-.525-1.346-.616-3.04-.798c-1.255-.135-1.882-.202-2.493-.35a10 10 0 0 1-.632-.178c-.6-.19-1.175-.46-2.326-.999c-1.554-.727-2.331-1.091-3.015-.897a2 2 0 0 0-.638.317c-.575.432-.795 1.291-1.236 3.01l-.7 2.73" opacity=".5"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M5.259 13.296c.06-.62.521-1.175 1.19-1.355s1.346.072 1.708.578"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M19.18 8.936c-.06-.62-.521-1.175-1.19-1.354c-.67-.18-1.346.071-1.708.577" opacity=".5"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M11.055 11.742c.06-.619.52-1.175 1.19-1.354s1.346.072 1.708.578"></svg:path><svg:path fill="currentColor" d="M11.096 7.042a.75.75 0 0 1-1.22-.872zm.904-.29c-.38-.1-.73.048-.904.29l-1.22-.872c.55-.77 1.553-1.123 2.512-.866zm.478.313A.9.9 0 0 0 12 6.753l.388-1.45c.524.141.966.445 1.276.843z" opacity=".5"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M13.2 16.231s-1.024-.76-2.812-.282c-1.787.48-2.294 1.65-2.294 1.65"></svg:path></svg:g>`,
})
export class SolarMasksLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMaximizeBoldDuotoneIcon],svg[solar-maximize-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M8.607 22a.75.75 0 0 1-.75.75H2a.75.75 0 0 1-.75-.75v-5.857a.75.75 0 1 1 1.5 0v4.046l5.72-5.72a.75.75 0 0 1 1.06 1.061l-5.72 5.72h4.047a.75.75 0 0 1 .75.75" opacity=".6"></svg:path><svg:path d="M15.393 2a.75.75 0 0 1 .75-.75H22a.75.75 0 0 1 .75.75v5.857a.75.75 0 0 1-1.5 0V3.811l-5.72 5.72a.75.75 0 1 1-1.06-1.061l5.72-5.72h-4.047a.75.75 0 0 1-.75-.75"></svg:path></svg:g>`,
})
export class SolarMaximizeBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMaximizeLineDuotoneIcon],svg[solar-maximize-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="m9 15l-7 7m0 0h5.857M2 22v-5.857" opacity=".6"></svg:path><svg:path d="m15 9l7-7m0 0h-5.857M22 2v5.857"></svg:path></svg:g>`,
})
export class SolarMaximizeLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMaximizeSquare2BoldDuotoneIcon],svg[solar-maximize-square-2-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12" opacity=".5"></svg:path><svg:path fill="currentColor" d="M13.25 7c0 .414.336.75.75.75h1.19l-2.22 2.22a.75.75 0 1 0 1.06 1.06l2.22-2.22V10a.75.75 0 0 0 1.5 0V7a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75m-2.22 7.03a.75.75 0 1 0-1.06-1.06l-2.22 2.22V14a.75.75 0 0 0-1.5 0v3c0 .414.336.75.75.75h3a.75.75 0 0 0 0-1.5H8.81zM10.75 7a.75.75 0 0 1-.75.75H8.81l2.22 2.22a.75.75 0 1 1-1.06 1.06L7.75 8.81V10a.75.75 0 0 1-1.5 0V7A.75.75 0 0 1 7 6.25h3a.75.75 0 0 1 .75.75m2.22 7.03a.75.75 0 1 1 1.06-1.06l2.22 2.22V14a.75.75 0 0 1 1.5 0v3a.75.75 0 0 1-.75.75h-3a.75.75 0 0 1 0-1.5h1.19z"></svg:path>`,
})
export class SolarMaximizeSquare2BoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMaximizeSquare2LineDuotoneIcon],svg[solar-maximize-square-2-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M17 7h-3m3 0v3m0-3l-3.5 3.5M7 17h3m-3 0v-3m0 3l3.5-3.5M7 7h3M7 7v3m0-3l3.5 3.5M17 17h-3m3 0v-3m0 3l-3.5-3.5"></svg:path><svg:path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z" opacity=".5"></svg:path></svg:g>`,
})
export class SolarMaximizeSquare2LineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMaximizeSquare3BoldDuotoneIcon],svg[solar-maximize-square-3-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12" opacity=".5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12.5 7a.75.75 0 0 1 .75-.75H17a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V8.81l-3.72 3.72a.75.75 0 1 1-1.06-1.06l3.72-3.72h-1.94A.75.75 0 0 1 12.5 7" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M2 17.5c0-2.121 0-3.182.659-3.841S4.379 13 6.5 13s3.182 0 3.841.659S11 15.379 11 17.5s0 3.182-.659 3.841S8.621 22 6.5 22s-3.182 0-3.841-.659S2 19.621 2 17.5"></svg:path>`,
})
export class SolarMaximizeSquare3BoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMaximizeSquare3LineDuotoneIcon],svg[solar-maximize-square-3-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M13 22c4.055-.008 6.178-.107 7.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.071 2 16.714 2 12 2S4.929 2 3.464 3.464C2.107 4.822 2.008 6.944 2 11" opacity=".5"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m12 12l5-5m0 0h-3.75M17 7v3.75"></svg:path><svg:path d="M2 18c0-1.886 0-2.828.586-3.414S4.114 14 6 14s2.828 0 3.414.586S10 16.114 10 18s0 2.828-.586 3.414S7.886 22 6 22s-2.828 0-3.414-.586S2 19.886 2 18Z"></svg:path></svg:g>`,
})
export class SolarMaximizeSquare3LineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMaximizeSquareBoldDuotoneIcon],svg[solar-maximize-square-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12" opacity=".5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M13.25 6.25a.75.75 0 0 0 0 1.5h1.94l-3.72 3.72l-3.72 3.72v-1.94a.75.75 0 0 0-1.5 0V17c0 .414.336.75.75.75h3.75a.75.75 0 0 0 0-1.5H8.81l3.72-3.72l3.72-3.72v1.94a.75.75 0 0 0 1.5 0V7a.75.75 0 0 0-.75-.75z" clip-rule="evenodd"></svg:path>`,
})
export class SolarMaximizeSquareBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMaximizeSquareLineDuotoneIcon],svg[solar-maximize-square-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="m12 12l5-5m0 0h-3.75M17 7v3.75M12 12l-5 5m0 0h3.75M7 17v-3.75"></svg:path><svg:path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z" opacity=".5"></svg:path></svg:g>`,
})
export class SolarMaximizeSquareLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMaximizeSquareMinimalisticBoldDuotoneIcon],svg[solar-maximize-square-minimalistic-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12" opacity=".5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M14 7.75a.75.75 0 0 1 0-1.5h3a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0V8.81l-2.22 2.22a.75.75 0 1 1-1.06-1.06l2.22-2.22zm-2.97 5.22a.75.75 0 0 1 0 1.06l-2.22 2.22H10a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75v-3a.75.75 0 0 1 1.5 0v1.19l2.22-2.22a.75.75 0 0 1 1.06 0" clip-rule="evenodd"></svg:path>`,
})
export class SolarMaximizeSquareMinimalisticBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMaximizeSquareMinimalisticLineDuotoneIcon],svg[solar-maximize-square-minimalistic-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z" opacity=".5"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M17 7h-3m3 0v3m0-3l-3.5 3.5M7 17h3m-3 0v-3m0 3l3.5-3.5"></svg:path></svg:g>`,
})
export class SolarMaximizeSquareMinimalisticLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMedalRibbonBoldDuotoneIcon],svg[solar-medal-ribbon-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="12" cy="9" r="7" fill="currentColor" opacity=".5"></svg:circle><svg:path fill="currentColor" d="m7.546 14.4l-.195.6l-.637 2.323c-.628 2.292-.942 3.438-.523 4.065c.147.22.344.396.573.513c.652.332 1.66-.193 3.675-1.243c.67-.35 1.006-.524 1.362-.562q.199-.021.398 0c.356.038.691.212 1.362.562c2.015 1.05 3.023 1.575 3.675 1.243c.229-.117.426-.293.573-.513c.42-.627.105-1.773-.523-4.065L16.649 15l-.195-.6c-1.21 1-2.762 1.6-4.454 1.6s-3.244-.6-4.454-1.6"></svg:path>`,
})
export class SolarMedalRibbonBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMedalRibbonLineDuotoneIcon],svg[solar-medal-ribbon-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="12" cy="9" r="7"></svg:circle><svg:path stroke-linecap="round" d="m7.351 15l-.637 2.323c-.628 2.292-.942 3.438-.523 4.065c.147.22.344.396.573.513c.652.332 1.66-.193 3.675-1.243c.67-.35 1.006-.524 1.362-.562a2 2 0 0 1 .398 0c.356.038.691.213 1.362.562c2.015 1.05 3.023 1.575 3.675 1.243c.229-.117.426-.293.573-.513c.42-.627.105-1.773-.523-4.065L16.649 15" opacity=".5"></svg:path></svg:g>`,
})
export class SolarMedalRibbonLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMedalRibbonStarBoldDuotoneIcon],svg[solar-medal-ribbon-star-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 16a7 7 0 1 0 0-14a7 7 0 0 0 0 14m0-10c-.284 0-.474.34-.854 1.023l-.098.176c-.108.194-.162.29-.246.354c-.085.064-.19.088-.4.135l-.19.044c-.738.167-1.107.25-1.195.532s.164.577.667 1.165l.13.152c.143.167.215.25.247.354s.021.215 0 .438l-.02.203c-.076.785-.114 1.178.115 1.352c.23.174.576.015 1.267-.303l.178-.082c.197-.09.295-.135.399-.135s.202.045.399.135l.178.082c.691.319 1.037.477 1.267.303s.191-.567.115-1.352l-.02-.203c-.021-.223-.032-.334 0-.438s.104-.187.247-.354l.13-.152c.503-.588.755-.882.667-1.165c-.088-.282-.457-.365-1.195-.532l-.19-.044c-.21-.047-.315-.07-.4-.135c-.084-.064-.138-.16-.246-.354l-.098-.176C12.474 6.34 12.284 6 12 6" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M6.714 17.323L7.351 15L8 13h8l.649 2l.637 2.323c.628 2.292.942 3.438.523 4.065c-.147.22-.344.396-.573.513c-.652.332-1.66-.193-3.675-1.243c-.67-.35-1.006-.524-1.362-.562a2 2 0 0 0-.398 0c-.356.038-.691.213-1.362.562c-2.015 1.05-3.023 1.575-3.675 1.243a1.5 1.5 0 0 1-.573-.513c-.42-.627-.105-1.773.523-4.065" opacity=".5"></svg:path>`,
})
export class SolarMedalRibbonStarBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMedalRibbonStarLineDuotoneIcon],svg[solar-medal-ribbon-star-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M11.146 7.023C11.526 6.34 11.716 6 12 6s.474.34.854 1.023l.098.176c.108.194.162.29.246.354c.085.064.19.088.4.135l.19.044c.738.167 1.107.25 1.195.532s-.164.577-.667 1.165l-.13.152c-.143.167-.215.25-.247.354s-.021.215 0 .438l.02.203c.076.785.114 1.178-.115 1.352c-.23.174-.576.015-1.267-.303l-.178-.082c-.197-.09-.295-.135-.399-.135s-.202.045-.399.135l-.178.082c-.691.319-1.037.477-1.267.303s-.191-.567-.115-1.352l.02-.203c.021-.223.032-.334 0-.438s-.104-.187-.247-.354l-.13-.152c-.503-.588-.755-.882-.667-1.165c.088-.282.457-.365 1.195-.532l.19-.044c.21-.047.315-.07.4-.135c.084-.064.138-.16.246-.354z" opacity=".5"></svg:path><svg:path d="M19 9A7 7 0 1 1 5 9a7 7 0 0 1 14 0Z"></svg:path><svg:path stroke-linecap="round" d="m7.351 15l-.637 2.323c-.628 2.292-.942 3.438-.523 4.065c.147.22.344.396.573.513c.652.332 1.66-.193 3.675-1.243c.67-.35 1.006-.524 1.362-.562a2 2 0 0 1 .398 0c.356.038.691.213 1.362.562c2.015 1.05 3.023 1.575 3.675 1.243c.229-.117.426-.293.573-.513c.42-.627.105-1.773-.523-4.065L16.649 15" opacity=".5"></svg:path></svg:g>`,
})
export class SolarMedalRibbonStarLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMedalRibbonsStarBoldDuotoneIcon],svg[solar-medal-ribbons-star-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 16.068l-3.771 3.905c-.54.559-.81.839-1.04.935c-.52.22-1.099.032-1.373-.448c-.12-.21-.158-.59-.232-1.35c-.043-.43-.064-.644-.128-.824a1.43 1.43 0 0 0-.835-.864c-.173-.067-.38-.089-.795-.133c-.734-.077-1.101-.116-1.305-.24c-.463-.284-.646-.883-.433-1.422c.094-.237.364-.517.904-1.076L5.456 12l1.238-1.238zl5.306-5.306L18.544 12l2.464 2.55c.54.56.81.84.904 1.076c.213.54.03 1.139-.433 1.423c-.204.124-.57.163-1.305.24c-.414.044-.622.066-.795.133c-.389.149-.69.462-.835.864c-.064.18-.085.394-.128.823c-.075.76-.112 1.14-.232 1.351c-.274.48-.853.669-1.374.448c-.228-.096-.498-.376-1.038-.935z" opacity=".5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12 16a7 7 0 1 0 0-14a7 7 0 0 0 0 14m0-10c-.284 0-.474.34-.854 1.023l-.098.176c-.108.194-.162.29-.246.354c-.085.064-.19.088-.4.135l-.19.044c-.738.167-1.107.25-1.195.532s.164.577.667 1.165l.13.152c.143.167.215.25.247.354s.021.215 0 .438l-.02.203c-.076.785-.114 1.178.115 1.352c.23.174.576.015 1.267-.303l.178-.082c.197-.09.295-.135.399-.135s.202.045.399.135l.178.082c.691.319 1.037.477 1.267.303s.191-.567.115-1.352l-.02-.203c-.021-.223-.032-.334 0-.438s.104-.187.247-.354l.13-.152c.503-.588.755-.882.667-1.165c-.088-.282-.457-.365-1.195-.532l-.19-.044c-.21-.047-.315-.07-.4-.135c-.084-.064-.138-.16-.246-.354l-.098-.176C12.474 6.34 12.284 6 12 6" clip-rule="evenodd"></svg:path>`,
})
export class SolarMedalRibbonsStarBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMedalRibbonsStarLineDuotoneIcon],svg[solar-medal-ribbons-star-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M11.146 7.023C11.526 6.34 11.716 6 12 6s.474.34.854 1.023l.098.176c.108.194.162.29.246.354c.085.064.19.088.4.135l.19.044c.738.167 1.107.25 1.195.532s-.164.577-.667 1.165l-.13.152c-.143.167-.215.25-.247.354s-.021.215 0 .438l.02.203c.076.785.114 1.178-.115 1.352c-.23.174-.576.015-1.267-.303l-.178-.082c-.197-.09-.295-.135-.399-.135s-.202.045-.399.135l-.178.082c-.691.319-1.037.477-1.267.303s-.191-.567-.115-1.352l.02-.203c.021-.223.032-.334 0-.438s-.104-.187-.247-.354l-.13-.152c-.503-.588-.755-.882-.667-1.165c.088-.282.457-.365 1.195-.532l.19-.044c.21-.047.315-.07.4-.135c.084-.064.138-.16.246-.354z" opacity=".5"></svg:path><svg:path d="M19 9A7 7 0 1 1 5 9a7 7 0 0 1 14 0Z"></svg:path><svg:path d="m12 16.068l-3.771 3.905c-.54.56-.81.839-1.04.935c-.52.22-1.099.032-1.373-.448c-.12-.21-.158-.59-.232-1.35c-.043-.43-.064-.644-.128-.824a1.43 1.43 0 0 0-.835-.864c-.173-.067-.38-.088-.795-.132c-.734-.078-1.101-.117-1.305-.241c-.463-.284-.646-.883-.433-1.422c.094-.237.364-.517.904-1.076L5.456 12M12 16.068l3.771 3.905c.54.56.81.839 1.04.935c.52.22 1.099.032 1.373-.448c.12-.21.157-.59.232-1.35c.043-.43.064-.644.128-.824c.144-.402.446-.715.835-.864c.173-.067.38-.088.795-.132c.734-.078 1.101-.117 1.305-.241c.463-.284.646-.883.433-1.422c-.094-.237-.364-.517-.904-1.076L18.544 12" opacity=".5"></svg:path></svg:g>`,
})
export class SolarMedalRibbonsStarLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMedalStarBoldDuotoneIcon],svg[solar-medal-star-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.795 2h-2c-1.886 0-2.829 0-3.414.586c-.586.586-.586 1.528-.586 3.414v3.5h10V6c0-1.886 0-2.828-.586-3.414S14.681 2 12.795 2" opacity=".5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M13.23 5.783a3 3 0 0 0-2.872 0L5.564 8.397A3 3 0 0 0 4 11.031v4.938a3 3 0 0 0 1.564 2.634l4.794 2.614a3 3 0 0 0 2.872 0l4.795-2.614a3 3 0 0 0 1.564-2.634V11.03a3 3 0 0 0-1.564-2.634zM11.794 10.5c-.284 0-.474.34-.854 1.023l-.098.176c-.108.194-.162.29-.246.354s-.19.088-.399.135l-.19.044c-.739.167-1.108.25-1.195.532c-.088.283.163.577.666 1.165l.13.152c.144.167.215.25.247.354s.022.215 0 .438l-.02.203c-.076.785-.114 1.178.116 1.352s.575.015 1.266-.303l.179-.082c.196-.09.294-.135.398-.135s.203.045.399.135l.179.082c.69.319 1.036.477 1.266.303s.192-.567.116-1.352l-.02-.203c-.022-.223-.033-.334 0-.438c.032-.103.103-.187.246-.354l.13-.152c.504-.588.755-.882.667-1.165c-.088-.282-.457-.365-1.194-.532l-.191-.044c-.21-.047-.315-.07-.399-.135c-.084-.064-.138-.16-.246-.354l-.098-.176c-.38-.682-.57-1.023-.855-1.023" clip-rule="evenodd"></svg:path>`,
})
export class SolarMedalStarBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMedalStarCircleBoldDuotoneIcon],svg[solar-medal-star-circle-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 2h-2c-1.886 0-2.828 0-3.414.586S7 4.114 7 6v4h10V6c0-1.886 0-2.828-.586-3.414S14.886 2 13 2" opacity=".5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12 22a8 8 0 1 0 0-16a8 8 0 0 0 0 16m0-11c-.284 0-.474.34-.854 1.023l-.098.176c-.108.194-.162.29-.246.354c-.085.064-.19.088-.4.135l-.19.044c-.738.167-1.107.25-1.195.532s.164.577.667 1.165l.13.152c.143.167.215.25.247.354s.021.215 0 .438l-.02.203c-.076.785-.114 1.178.115 1.352c.23.174.576.015 1.267-.303l.178-.082c.197-.09.295-.136.399-.136s.202.046.399.136l.178.082c.691.319 1.037.477 1.267.303s.191-.567.115-1.352l-.02-.203c-.021-.223-.032-.334 0-.438s.104-.187.247-.354l.13-.152c.503-.588.755-.882.667-1.165c-.088-.282-.457-.365-1.195-.532l-.19-.044c-.21-.047-.315-.07-.4-.135c-.084-.064-.138-.16-.246-.354l-.098-.176C12.474 11.34 12.284 11 12 11" clip-rule="evenodd"></svg:path>`,
})
export class SolarMedalStarCircleBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMedalStarCircleLineDuotoneIcon],svg[solar-medal-star-circle-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M17 8V6c0-1.886 0-2.828-.586-3.414S14.886 2 13 2h-2c-1.886 0-2.828 0-3.414.586S7 4.114 7 6v2m4.146 4.023c.38-.682.57-1.023.854-1.023s.474.34.854 1.023l.098.176c.108.194.162.29.246.354c.085.064.19.088.4.135l.19.044c.738.167 1.107.25 1.195.532s-.164.577-.667 1.165l-.13.152c-.143.167-.215.25-.247.354s-.021.215 0 .438l.02.203c.076.785.114 1.178-.115 1.352c-.23.174-.576.015-1.267-.303l-.178-.082c-.197-.09-.295-.136-.399-.136s-.202.046-.399.136l-.178.082c-.691.319-1.037.477-1.267.303s-.191-.567-.115-1.352l.02-.203c.021-.223.032-.334 0-.438s-.104-.187-.247-.354l-.13-.152c-.503-.588-.755-.882-.667-1.165c.088-.282.457-.365 1.195-.532l.19-.044c.21-.047.315-.07.4-.135c.084-.064.138-.16.246-.354z" opacity=".5"></svg:path><svg:circle cx="12" cy="14" r="8"></svg:circle></svg:g>`,
})
export class SolarMedalStarCircleLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMedalStarLineDuotoneIcon],svg[solar-medal-star-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M17 8V6c0-1.886 0-2.828-.586-3.414S14.886 2 13 2h-2c-1.886 0-2.828 0-3.414.586S7 4.114 7 6v2" opacity=".5"></svg:path><svg:path d="M10.564 5.783a3 3 0 0 1 2.872 0l4.794 2.614a3 3 0 0 1 1.564 2.634v4.938a3 3 0 0 1-1.564 2.634l-4.794 2.614a3 3 0 0 1-2.872 0L5.77 18.603a3 3 0 0 1-1.564-2.634V11.03A3 3 0 0 1 5.77 8.397z"></svg:path><svg:path d="M11.146 11.523c.38-.682.57-1.023.854-1.023s.474.341.854 1.023l.098.176c.108.194.162.29.246.355c.085.063.19.087.4.135l.19.043c.738.167 1.107.25 1.195.533c.088.282-.164.576-.667 1.164l-.13.152c-.143.168-.215.251-.247.355s-.021.214 0 .438l.02.203c.076.784.114 1.177-.115 1.351c-.23.175-.576.016-1.267-.302l-.178-.083c-.197-.09-.295-.135-.399-.135s-.202.045-.399.135l-.178.083c-.691.318-1.037.477-1.267.302c-.23-.174-.191-.567-.115-1.351l.02-.203c.021-.224.032-.335 0-.438c-.032-.104-.104-.187-.247-.355l-.13-.152c-.503-.588-.755-.882-.667-1.164c.088-.283.457-.366 1.195-.533l.19-.043c.21-.048.315-.072.4-.135c.084-.064.138-.161.246-.355z" opacity=".5"></svg:path></svg:g>`,
})
export class SolarMedalStarLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMedalStarSquareBoldDuotoneIcon],svg[solar-medal-star-square-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 2h-2c-1.886 0-2.828 0-3.414.586S7 4.114 7 6v2h10V6c0-1.886 0-2.828-.586-3.414S14.886 2 13 2" opacity=".5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M10 6h4c2.828 0 4.243 0 5.121.879C20 7.757 20 9.172 20 12v1.056c0 2.405 0 3.608-.597 4.575c-.598.966-1.674 1.504-3.825 2.58c-1.756.878-2.634 1.317-3.578 1.317s-1.822-.439-3.578-1.317c-2.151-1.076-3.227-1.614-3.825-2.58C4 16.664 4 15.46 4 13.056V12c0-2.828 0-4.243.879-5.121C5.757 6 7.172 6 10 6m2 4c-.284 0-.474.34-.854 1.023l-.098.176c-.108.194-.162.29-.246.354c-.085.064-.19.088-.4.135l-.19.044c-.738.167-1.107.25-1.195.532s.164.577.667 1.165l.13.152c.143.167.215.25.247.354s.021.215 0 .438l-.02.203c-.076.785-.114 1.178.115 1.352c.23.174.576.015 1.267-.303l.178-.082c.197-.09.295-.135.399-.135s.202.045.399.135l.178.082c.691.319 1.037.477 1.267.303s.191-.567.115-1.352l-.02-.203c-.021-.223-.032-.334 0-.438s.104-.187.247-.354l.13-.152c.503-.588.755-.882.667-1.165c-.088-.282-.457-.365-1.195-.532l-.19-.044c-.21-.047-.315-.07-.4-.135c-.084-.064-.138-.16-.246-.354l-.098-.176C12.474 10.34 12.284 10 12 10" clip-rule="evenodd"></svg:path>`,
})
export class SolarMedalStarSquareBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMedalStarSquareLineDuotoneIcon],svg[solar-medal-star-square-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M17 6c0-1.886 0-2.828-.586-3.414S14.886 2 13 2h-2c-1.886 0-2.828 0-3.414.586S7 4.114 7 6m4.146 5.023c.38-.682.57-1.023.854-1.023s.474.34.854 1.023l.098.176c.108.194.162.29.246.354c.085.064.19.088.4.135l.19.044c.738.167 1.107.25 1.195.532s-.164.577-.667 1.165l-.13.152c-.143.167-.215.25-.247.354s-.021.215 0 .438l.02.203c.076.785.114 1.178-.115 1.352c-.23.174-.576.015-1.267-.303l-.178-.082c-.197-.09-.295-.135-.399-.135s-.202.045-.399.135l-.178.082c-.691.319-1.037.477-1.267.303s-.191-.567-.115-1.352l.02-.203c.021-.223.032-.334 0-.438s-.104-.187-.247-.354l-.13-.152c-.503-.588-.755-.882-.667-1.165c.088-.282.457-.365 1.195-.532l.19-.044c.21-.047.315-.07.4-.135c.084-.064.138-.16.246-.354z" opacity=".5"></svg:path><svg:path d="M14 6h-4c-2.828 0-4.243 0-5.121.879C4 7.757 4 9.172 4 12v1.056c0 2.405 0 3.608.597 4.575c.598.966 1.674 1.504 3.825 2.58c1.756.878 2.634 1.317 3.578 1.317s1.822-.439 3.578-1.317c2.151-1.076 3.227-1.614 3.825-2.58c.597-.967.597-2.17.597-4.575V12c0-2.828 0-4.243-.879-5.121C18.243 6 16.828 6 14 6Z"></svg:path></svg:g>`,
})
export class SolarMedalStarSquareLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMedicalKitBoldDuotoneIcon],svg[solar-medical-kit-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.052 1.25h-.104c-.899 0-1.648 0-2.242.08c-.628.084-1.195.27-1.65.725c-.456.456-.642 1.023-.726 1.65c-.08.595-.08 1.345-.08 2.243v.078q.684-.021 1.5-.024V6c0-.964.002-1.612.067-2.095c.062-.461.169-.659.3-.789s.327-.237.788-.3c.483-.064 1.131-.066 2.095-.066s1.612.002 2.095.067c.461.062.659.169.789.3s.237.327.3.788c.064.483.066 1.131.066 2.095v.002a55 55 0 0 1 1.5.024v-.078c0-.898 0-1.648-.08-2.242c-.084-.628-.27-1.195-.726-1.65c-.455-.456-1.022-.642-1.65-.726c-.594-.08-1.344-.08-2.242-.08"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M2 14c0-3.771 0-5.657 1.172-6.828S6.229 6 10 6h4c3.771 0 5.657 0 6.828 1.172S22 10.229 22 14s0 5.657-1.172 6.828S17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14m10.75-1.5a.75.75 0 0 0-1.5 0v.75h-.75a.75.75 0 0 0 0 1.5h.75v.75a.75.75 0 0 0 1.5 0v-.75h.75a.75.75 0 0 0 0-1.5h-.75z" clip-rule="evenodd" opacity=".5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12 18a4 4 0 1 0 0-8a4 4 0 0 0 0 8m.75-5.5a.75.75 0 0 0-1.5 0v.75h-.75a.75.75 0 0 0 0 1.5h.75v.75a.75.75 0 0 0 1.5 0v-.75h.75a.75.75 0 0 0 0-1.5h-.75z" clip-rule="evenodd"></svg:path>`,
})
export class SolarMedicalKitBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMedicalKitLineDuotoneIcon],svg[solar-medical-kit-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 14c0-3.771 0-5.657 1.172-6.828S6.229 6 10 6h4c3.771 0 5.657 0 6.828 1.172S22 10.229 22 14s0 5.657-1.172 6.828S17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14Z"></svg:path><svg:path d="M16 6c0-1.886 0-2.828-.586-3.414S13.886 2 12 2s-2.828 0-3.414.586S8 4.114 8 6" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="M13.5 14h-3m1.5-1.5v3"></svg:path><svg:circle cx="12" cy="14" r="4" opacity=".5"></svg:circle></svg:g>`,
})
export class SolarMedicalKitLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMeditationBoldDuotoneIcon],svg[solar-meditation-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.5 4.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M9.95 15.4a.75.75 0 0 1 .15 1.05l-1.047 1.395l-.07.093a2.75 2.75 0 0 1-1.421.944l-.113.029l-.008.002l-1.485.371a1.59 1.59 0 0 0-1.206 1.545c0 .232.189.421.421.421h1.556c.617 0 .865-.001 1.102-.03a4.25 4.25 0 0 0 1.64-.546c.206-.12.406-.268.9-.638L12.55 18.4a.75.75 0 1 1 .9 1.2l-.905.678l1.258.472c.627.235.88.328 1.136.389q.21.048.42.076c.262.034.531.035 1.2.035h2.27a.42.42 0 0 0 .421-.421c0-.73-.497-1.368-1.206-1.545l-1.493-.373l-.113-.03a2.75 2.75 0 0 1-1.42-.943c-.023-.028-.044-.057-.072-.093L13.9 16.45a.75.75 0 1 1 1.2-.9l1.042 1.389l.052.069a1.25 1.25 0 0 0 .729.45l1.485.37a3.09 3.09 0 0 1 2.342 3c0 1.062-.86 1.922-1.921 1.922h-2.321c-.602 0-.973 0-1.342-.048q-.286-.038-.568-.103c-.363-.085-.71-.215-1.273-.426l-2.204-.826c-.38.285-.631.47-.898.624a5.75 5.75 0 0 1-2.218.74c-.335.04-.676.039-1.23.039H5.171a1.92 1.92 0 0 1-1.921-1.921c0-1.42.966-2.656 2.342-3l1.485-.371l.083-.022a1.25 1.25 0 0 0 .698-.497L8.9 15.55a.75.75 0 0 1 1.05-.15" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M12.869 9.822a5.3 5.3 0 0 0-1.738 0c-2.507.423-4.38 2.624-4.38 5.198c0 .564-.317 1.085-.824 1.341L3.338 17.67a.75.75 0 0 1-.676-1.338l2.587-1.308l.001-.003c0-3.306 2.402-6.133 5.632-6.677a6.8 6.8 0 0 1 2.236 0c3.23.544 5.632 3.371 5.632 6.677v.002l2.588 1.309a.75.75 0 1 1-.676 1.338l-2.589-1.308a1.5 1.5 0 0 1-.823-1.341c0-2.574-1.873-4.775-4.381-5.198" opacity=".5"></svg:path>`,
})
export class SolarMeditationBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMeditationLineDuotoneIcon],svg[solar-meditation-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M14.5 4.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m3 17l2.589-1.308A.75.75 0 0 0 6 15.02c0-2.94 2.138-5.454 5.007-5.937a6 6 0 0 1 1.986 0C15.863 9.566 18 12.08 18 15.02c0 .284.16.545.411.672L21 17" opacity=".5"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m9.5 16l-1.042 1.389l-.063.084a2 2 0 0 1-1.034.686l-.102.026l-1.485.371A2.34 2.34 0 0 0 4 20.83c0 .646.524 1.17 1.171 1.17h1.556c.6 0 .9 0 1.19-.034a5 5 0 0 0 1.929-.643c.253-.147.493-.327.972-.687L11 20.5m0 0l2-1.5m-2 1.5l2.54.952c.61.229.914.343 1.229.417q.245.057.493.09c.321.041.647.041 1.298.041h2.269A1.17 1.17 0 0 0 20 20.829a2.34 2.34 0 0 0-1.774-2.273l-1.485-.37l-.102-.027a2 2 0 0 1-1.034-.686l-.063-.084L14.5 16"></svg:path></svg:g>`,
})
export class SolarMeditationLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMeditationRoundBoldDuotoneIcon],svg[solar-meditation-round-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.5 4.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M8.9 15.55a.75.75 0 1 1 1.2.9l-.925 1.233l-.021.029a5 5 0 0 1-.34.42a2.75 2.75 0 0 1-1.007.67c-.155.058-.316.098-.52.15l-.036.008l-1.793.449a.935.935 0 0 0 .227 1.841h.683c1.546 0 3.05-.501 4.287-1.429L12.55 18.4a.75.75 0 1 1 .9 1.2l-.905.678l.492.185c.534.2.775.29 1.017.366a9.3 9.3 0 0 0 2.243.407c.253.014.51.014 1.08.014h.938a.935.935 0 0 0 .227-1.841l-1.474-.369l-.081-.02c-.476-.119-.851-.212-1.187-.406a3 3 0 0 1-.289-.192c-.308-.234-.54-.543-.834-.936l-.05-.067l-.727-.969a.75.75 0 1 1 1.2-.9l.727.969c.368.491.471.618.591.709q.063.046.132.087c.13.075.286.121.882.27l1.474.368a2.435 2.435 0 0 1-.59 4.797h-.964c-.538 0-.839 0-1.138-.017a10.8 10.8 0 0 1-2.608-.473c-.286-.09-.568-.195-1.072-.384l-1.432-.537a8.65 8.65 0 0 1-4.734 1.411h-.683a2.435 2.435 0 0 1-.59-4.797l1.793-.448c.255-.064.324-.082.384-.105c.173-.066.33-.17.457-.304c.045-.047.088-.102.246-.313z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M12 9.77a6 6 0 0 0-.86.052l-.892.15c-2.013.339-3.498 2.101-3.498 4.178a3.25 3.25 0 0 1-1.43 2.696l-.1.069a3.4 3.4 0 0 1-.823.406l-1.157.39a.75.75 0 1 1-.48-1.422l1.159-.39q.246-.083.462-.229l.102-.068a1.75 1.75 0 0 0 .767-1.452c0-2.798 2.003-5.195 4.748-5.657l.89-.15A7 7 0 0 1 12 8.27c.387 0 .807.02 1.112.072l.89.15c2.746.462 4.748 2.86 4.748 5.657c0 .586.29 1.13.768 1.452l.101.068q.217.146.463.23l1.158.39a.75.75 0 0 1-.48 1.42l-1.157-.39a3.4 3.4 0 0 1-.822-.405l-.101-.069a3.25 3.25 0 0 1-1.43-2.696c0-2.077-1.485-3.84-3.497-4.178l-.892-.15a6 6 0 0 0-.86-.051" opacity=".5"></svg:path>`,
})
export class SolarMeditationRoundBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMeditationRoundLineDuotoneIcon],svg[solar-meditation-round-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M14.5 4.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m21 17l-1.158-.39a2.7 2.7 0 0 1-.642-.317l-.101-.069A2.5 2.5 0 0 1 18 14.15c0-2.437-1.744-4.517-4.123-4.918l-.89-.15C12.5 9 11.5 9 11.013 9.082l-.891.15C7.743 9.633 6 11.713 6 14.15a2.5 2.5 0 0 1-1.099 2.074l-.1.069q-.301.201-.643.317L3 17" opacity=".5"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m9.5 16l-.925 1.233c-.147.196-.22.295-.304.381a2 2 0 0 1-.732.486c-.112.043-.23.073-.47.133l-1.793.448A1.685 1.685 0 0 0 5.685 22h.683c1.709 0 3.37-.554 4.737-1.579L13 19m1.5-3l.727.969c.343.458.515.687.738.856q.1.076.21.14c.242.14.52.209 1.075.348l1.474.368A1.685 1.685 0 0 1 18.315 22h-.937c-.563 0-.844 0-1.123-.016a10 10 0 0 1-2.425-.44c-.267-.083-.53-.181-1.056-.379L11 20.5"></svg:path></svg:g>`,
})
export class SolarMeditationRoundLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMenBoldDuotoneIcon],svg[solar-men-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="10" cy="14" r="8" fill="currentColor" opacity=".5"></svg:circle><svg:path fill="currentColor" d="M17 1.25a.75.75 0 0 0 0 1.5h3.19l-5.088 5.088q.579.48 1.06 1.06l5.088-5.087V7a.75.75 0 0 0 1.5 0V2.25a1 1 0 0 0-1-1z"></svg:path>`,
})
export class SolarMenBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMenLineDuotoneIcon],svg[solar-men-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="10" cy="14" r="8" stroke="currentColor" stroke-width="1.5"></svg:circle><svg:path fill="currentColor" d="M22 2h.75a.75.75 0 0 0-.75-.75zm-.75 5a.75.75 0 0 0 1.5 0zM17 1.25a.75.75 0 0 0 0 1.5zm-.97 7.78l6.5-6.5l-1.06-1.06l-6.5 6.5zM21.25 2v5h1.5V2zM17 2.75h5v-1.5h-5z" opacity=".5"></svg:path></svg:g>`,
})
export class SolarMenLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMentionCircleBoldDuotoneIcon],svg[solar-mention-circle-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12" opacity=".5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12 6.75a5.25 5.25 0 1 0 0 10.5a.75.75 0 0 1 0 1.5a6.75 6.75 0 1 1 6.344-4.44a2.3 2.3 0 0 1-.609.894l-.08.074a2.387 2.387 0 0 1-3.782-.745A3.15 3.15 0 1 1 15.15 12v1.524a.886.886 0 0 0 1.488.652l.08-.075a.8.8 0 0 0 .216-.304A5.25 5.25 0 0 0 12 6.75m0 3.6a1.65 1.65 0 1 1 0 3.3a1.65 1.65 0 0 1 0-3.3" clip-rule="evenodd"></svg:path>`,
})
export class SolarMentionCircleBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMentionCircleLineDuotoneIcon],svg[solar-mention-circle-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M12 18a6 6 0 1 1 5.64-3.946a1.54 1.54 0 0 1-.413.599l-.08.074a1.637 1.637 0 0 1-2.747-1.203V12m0 0a2.4 2.4 0 1 1-4.8 0a2.4 2.4 0 0 1 4.8 0Z"></svg:path><svg:path d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12Z" opacity=".5"></svg:path></svg:g>`,
})
export class SolarMentionCircleLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMentionSquareBoldDuotoneIcon],svg[solar-mention-square-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464" opacity=".5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12 6.75a5.25 5.25 0 1 0 0 10.5a.75.75 0 0 1 0 1.5a6.75 6.75 0 1 1 6.344-4.44a2.3 2.3 0 0 1-.609.894l-.08.074a2.387 2.387 0 0 1-3.782-.745A3.15 3.15 0 1 1 15.15 12v1.524a.886.886 0 0 0 1.488.652l.08-.075a.8.8 0 0 0 .216-.304A5.25 5.25 0 0 0 12 6.75m0 3.6a1.65 1.65 0 1 1 0 3.3a1.65 1.65 0 0 1 0-3.3" clip-rule="evenodd"></svg:path>`,
})
export class SolarMentionSquareBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMentionSquareLineDuotoneIcon],svg[solar-mention-square-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M12 18a6 6 0 1 1 5.64-3.946a1.54 1.54 0 0 1-.413.599l-.08.074a1.637 1.637 0 0 1-2.747-1.203V12m0 0a2.4 2.4 0 1 1-4.8 0a2.4 2.4 0 0 1 4.8 0Z"></svg:path><svg:path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z" opacity=".5"></svg:path></svg:g>`,
})
export class SolarMentionSquareLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMenuDotsBoldDuotoneIcon],svg[solar-menu-dots-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 12a2 2 0 1 1-4 0a2 2 0 0 1 4 0m14 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0"></svg:path><svg:path fill="currentColor" d="M14 12a2 2 0 1 1-4 0a2 2 0 0 1 4 0" opacity=".5"></svg:path>`,
})
export class SolarMenuDotsBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMenuDotsCircleBoldDuotoneIcon],svg[solar-menu-dots-circle-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10" opacity=".5"></svg:path><svg:path fill="currentColor" d="M8 13a1 1 0 1 0 0-2a1 1 0 0 0 0 2m4 0a1 1 0 1 0 0-2a1 1 0 0 0 0 2m4 0a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path>`,
})
export class SolarMenuDotsCircleBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMenuDotsCircleLineDuotoneIcon],svg[solar-menu-dots-circle-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M9 12a1 1 0 1 1-2 0a1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path><svg:circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5" opacity=".5"></svg:circle></svg:g>`,
})
export class SolarMenuDotsCircleLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMenuDotsLineDuotoneIcon],svg[solar-menu-dots-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="5" cy="12" r="2"></svg:circle><svg:circle cx="12" cy="12" r="2" opacity=".5"></svg:circle><svg:circle cx="19" cy="12" r="2"></svg:circle></svg:g>`,
})
export class SolarMenuDotsLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMenuDotsSquareBoldDuotoneIcon],svg[solar-menu-dots-square-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.464 20.536C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535" opacity=".5"></svg:path><svg:path fill="currentColor" d="M8 13a1 1 0 1 0 0-2a1 1 0 0 0 0 2m4 0a1 1 0 1 0 0-2a1 1 0 0 0 0 2m4 0a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path>`,
})
export class SolarMenuDotsSquareBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMenuDotsSquareLineDuotoneIcon],svg[solar-menu-dots-square-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M9 12a1 1 0 1 1-2 0a1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z" opacity=".5"></svg:path></svg:g>`,
})
export class SolarMenuDotsSquareLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMicrophone2BoldDuotoneIcon],svg[solar-microphone-2-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4 9a.75.75 0 0 1 .75.75v1a7.25 7.25 0 1 0 14.5 0v-1a.75.75 0 0 1 1.5 0v1a8.75 8.75 0 0 1-8 8.718v2.282a.75.75 0 0 1-1.5 0v-2.282a8.75 8.75 0 0 1-8-8.718v-1A.75.75 0 0 1 4 9" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M9.75 7.75A.75.75 0 0 0 9 7H6.298a5.751 5.751 0 0 1 11.404 0H13.5a.75.75 0 0 0 0 1.5h4.25V10H13.5a.75.75 0 0 0 0 1.5h4.201a5.751 5.751 0 0 1-11.403 0H9A.75.75 0 0 0 9 10H6.25V8.5H9a.75.75 0 0 0 .75-.75" opacity=".5"></svg:path><svg:path fill="currentColor" d="M12.75 10.75c0 .414.336.75.75.75h4.201l.049-1.5H13.5a.75.75 0 0 0-.75.75m0-3c0 .414.336.75.75.75h4.25L17.701 7H13.5a.75.75 0 0 0-.75.75m-3 0A.75.75 0 0 0 9 7H6.298L6.25 8.5H9a.75.75 0 0 0 .75-.75m0 3A.75.75 0 0 0 9 10H6.25l.048 1.5H9a.75.75 0 0 0 .75-.75"></svg:path>`,
})
export class SolarMicrophone2BoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMicrophone2LineDuotoneIcon],svg[solar-microphone-2-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M7 8a5 5 0 0 1 10 0v3a5 5 0 0 1-10 0z"></svg:path><svg:path stroke-linecap="round" d="M13.5 8H17m-3.5 3H17M7 8h2m-2 3h2m11-1v1a8 8 0 0 1-8 8m-8-9v1a8 8 0 0 0 8 8m0 0v3" opacity=".5"></svg:path></svg:g>`,
})
export class SolarMicrophone2LineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMicrophone3BoldDuotoneIcon],svg[solar-microphone-3-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4 9a.75.75 0 0 1 .75.75v1a7.25 7.25 0 1 0 14.5 0v-1a.75.75 0 0 1 1.5 0v1a8.75 8.75 0 0 1-8 8.718v2.282a.75.75 0 0 1-1.5 0v-2.282a8.75 8.75 0 0 1-8-8.718v-1A.75.75 0 0 1 4 9" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12 2a5.75 5.75 0 0 0-5.75 5.75v3a5.75 5.75 0 0 0 11.5 0v-3A5.75 5.75 0 0 0 12 2m2 9.5a.75.75 0 0 0 0-1.5h-4a.75.75 0 0 0 0 1.5zm-.25-3.75a.75.75 0 0 1-.75.75h-2A.75.75 0 0 1 11 7h2a.75.75 0 0 1 .75.75" clip-rule="evenodd" opacity=".5"></svg:path><svg:path fill="currentColor" d="M14 11.5a.75.75 0 0 0 0-1.5h-4a.75.75 0 0 0 0 1.5zm-1-3A.75.75 0 0 0 13 7h-2a.75.75 0 0 0 0 1.5z"></svg:path>`,
})
export class SolarMicrophone3BoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMicrophone3LineDuotoneIcon],svg[solar-microphone-3-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M7 8a5 5 0 0 1 10 0v3a5 5 0 0 1-10 0z"></svg:path><svg:path stroke-linecap="round" d="M11 8h2m-3 3h4m6-1v1a8 8 0 0 1-8 8m-8-9v1a8 8 0 0 0 8 8m0 0v3" opacity=".5"></svg:path></svg:g>`,
})
export class SolarMicrophone3LineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMicrophoneBoldDuotoneIcon],svg[solar-microphone-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4 9a.75.75 0 0 1 .75.75v1a7.25 7.25 0 1 0 14.5 0v-1a.75.75 0 0 1 1.5 0v1a8.75 8.75 0 0 1-8 8.718v2.282a.75.75 0 0 1-1.5 0v-2.282a8.75 8.75 0 0 1-8-8.718v-1A.75.75 0 0 1 4 9" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M12 2a5.75 5.75 0 0 0-5.75 5.75v3a5.75 5.75 0 0 0 11.452.75H13a.75.75 0 0 1 0-1.5h4.75V8.5H13A.75.75 0 0 1 13 7h4.701A5.75 5.75 0 0 0 12 2" opacity=".5"></svg:path><svg:path fill="currentColor" d="M12.25 10.75c0 .414.336.75.75.75h4.701l.049-1.5H13a.75.75 0 0 0-.75.75m0-3c0 .414.336.75.75.75h4.75L17.701 7H13a.75.75 0 0 0-.75.75"></svg:path>`,
})
export class SolarMicrophoneBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMicrophoneLargeBoldDuotoneIcon],svg[solar-microphone-large-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 2C8.56 2 5.77 4.811 5.77 8.28v4.65c0 3.468 2.79 6.28 6.23 6.28s6.231-2.812 6.231-6.28V8.28c0-3.469-2.79-6.28-6.23-6.28M9.68 7.39a.7.7 0 0 1-.028-.986l.503.48l-.502-.48v-.001l.002-.002l.003-.003l.008-.008l.06-.055a2 2 0 0 1 .127-.099a2.3 2.3 0 0 1 .437-.232c.379-.154.93-.283 1.711-.283s1.333.129 1.712.283c.189.077.332.16.437.232a1.5 1.5 0 0 1 .187.154l.007.008l.003.003l.002.002s.002.001-.492.471l.494-.47c.262.28.25.722-.028.987a.69.69 0 0 1-.95 0l-.008-.005a1 1 0 0 0-.171-.088C13 7.22 12.629 7.116 12 7.116c-.628 0-1 .104-1.192.182a1 1 0 0 0-.171.088l-.008.005a.69.69 0 0 1-.95 0m0 2.791a.7.7 0 0 1-.028-.986l.503.48l-.502-.48v-.002l.002-.001l.003-.004l.008-.007l.06-.056a2 2 0 0 1 .127-.098a2.3 2.3 0 0 1 .437-.232c.379-.154.93-.283 1.711-.283s1.333.129 1.712.283c.189.077.332.16.437.232a1.5 1.5 0 0 1 .187.154l.007.007l.003.004l.002.001v.001s.002.001-.492.47l.494-.469c.262.28.25.722-.028.986a.69.69 0 0 1-.95 0l-.008-.004a1 1 0 0 0-.171-.088c-.193-.08-.564-.183-1.193-.183c-.628 0-1 .104-1.192.182a1 1 0 0 0-.171.088l-.008.005a.69.69 0 0 1-.95 0" clip-rule="evenodd" opacity=".5"></svg:path><svg:path fill="currentColor" d="M9.651 9.195a.7.7 0 0 0 .028.986a.69.69 0 0 0 .95 0l.008-.005a1 1 0 0 1 .171-.088c.192-.078.564-.181 1.192-.181c.63 0 1 .103 1.193.181a1 1 0 0 1 .171.088l.007.006a.69.69 0 0 0 .951 0a.7.7 0 0 0 .028-.987l-.493.47l.492-.47v-.002l-.002-.001l-.004-.004l-.007-.007l-.017-.017a1 1 0 0 0-.17-.137a2.3 2.3 0 0 0-.437-.232c-.38-.155-.93-.284-1.712-.284c-.78 0-1.332.13-1.71.284a2.3 2.3 0 0 0-.438.232a1.5 1.5 0 0 0-.187.154l-.007.007l-.004.004l-.001.001zl.502.48zm0-2.791a.7.7 0 0 0 .028.986a.69.69 0 0 0 .95 0l.008-.004a1 1 0 0 1 .171-.088c.192-.078.564-.182 1.192-.182c.63 0 1 .104 1.193.182c.096.039.15.073.171.088l.007.005a.69.69 0 0 0 .951 0a.7.7 0 0 0 .028-.987l-.493.47l.492-.47v-.001l-.002-.002l-.004-.004l-.007-.007a1.2 1.2 0 0 0-.187-.154a2.3 2.3 0 0 0-.437-.232c-.38-.154-.93-.283-1.712-.283c-.78 0-1.332.129-1.71.283a2.3 2.3 0 0 0-.438.232a1.5 1.5 0 0 0-.187.154l-.007.007l-.004.004l-.001.002zl.502.48z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M3.692 10.372c.383 0 .693.312.693.698v1.86c0 4.239 3.41 7.675 7.615 7.675c4.206 0 7.615-3.436 7.615-7.675v-1.86c0-.386.31-.698.693-.698s.692.312.692.698v1.86c0 5.01-4.03 9.07-9 9.07s-9-4.06-9-9.07v-1.86c0-.386.31-.698.692-.698" clip-rule="evenodd"></svg:path>`,
})
export class SolarMicrophoneLargeBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMicrophoneLargeLineDuotoneIcon],svg[solar-microphone-large-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M6 8a6 6 0 1 1 12 0v5a6 6 0 0 1-12 0z"></svg:path><svg:path stroke-linecap="round" d="M10 6.5s.473-.5 2-.5s2 .5 2 .5m-4 3s.473-.5 2-.5s2 .5 2 .5m7 1.5v2a9 9 0 1 1-18 0v-2" opacity=".5"></svg:path></svg:g>`,
})
export class SolarMicrophoneLargeLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMicrophoneLineDuotoneIcon],svg[solar-microphone-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M7 8a5 5 0 0 1 10 0v3a5 5 0 0 1-10 0z"></svg:path><svg:path stroke-linecap="round" d="M13 8h4m-4 3h4m3-1v1a8 8 0 0 1-8 8m-8-9v1a8 8 0 0 0 8 8m0 0v3" opacity=".5"></svg:path></svg:g>`,
})
export class SolarMicrophoneLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMinimalisticMagniferBoldDuotoneIcon],svg[solar-minimalistic-magnifer-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.313 11.157a9.157 9.157 0 1 1-18.313 0a9.157 9.157 0 0 1 18.313 0" opacity=".5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M18.839 18.839a.723.723 0 0 1 1.022 0l1.928 1.927a.723.723 0 0 1-1.023 1.023L18.84 19.86a.723.723 0 0 1 0-1.022" clip-rule="evenodd"></svg:path>`,
})
export class SolarMinimalisticMagniferBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMinimalisticMagniferBugBoldDuotoneIcon],svg[solar-minimalistic-magnifer-bug-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M18.839 18.839a.723.723 0 0 1 1.022 0l1.928 1.927a.723.723 0 0 1-1.023 1.023L18.84 19.86a.723.723 0 0 1 0-1.022" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M11.157 20.313a9.157 9.157 0 1 0 0-18.313a9.157 9.157 0 0 0 0 18.313" opacity=".5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M11 6.5c-1.14 0-2.157.532-2.81 1.36l-.68-.338a.716.716 0 0 0-.958.318a.71.71 0 0 0 .319.953l.679.338a3.5 3.5 0 0 0-.121.922v.236h-.715A.71.71 0 0 0 6 11c0 .392.32.71.714.71h.715v.237q.001.48.12.922l-.678.338a.71.71 0 0 0-.32.953c.177.35.606.493.959.318l.68-.338A3.57 3.57 0 0 0 11 15.5c1.14 0 2.157-.532 2.81-1.36l.68.338a.716.716 0 0 0 .958-.318a.71.71 0 0 0-.319-.953l-.679-.338q.12-.442.121-.922v-.236h.715A.71.71 0 0 0 16 11c0-.392-.32-.71-.714-.71h-.715v-.237q-.002-.48-.12-.922l.678-.338a.71.71 0 0 0 .32-.953a.716.716 0 0 0-.959-.318l-.68.338A3.57 3.57 0 0 0 11 6.5m0 1.42c-.933 0-1.726.594-2.02 1.422h4.041a2.14 2.14 0 0 0-2.02-1.421m-2.143 4.027v-1.184h1.429v3.194a2.13 2.13 0 0 1-1.429-2.01m2.858 2.01v-3.194h1.428v1.184c0 .928-.596 1.718-1.428 2.01" clip-rule="evenodd"></svg:path>`,
})
export class SolarMinimalisticMagniferBugBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMinimalisticMagniferBugLineDuotoneIcon],svg[solar-minimalistic-magnifer-bug-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="solarMinimalisticMagniferBugLineDuotone0"><svg:g fill="none" stroke-width="1.5"><svg:circle cx="11.5" cy="11.5" r="9.5" stroke="gray"></svg:circle><svg:path stroke="#fff" stroke-linecap="round" d="M11.5 15.5a3 3 0 0 1-3-3v-2m3 5a3 3 0 0 0 3-3v-2m-3 5v-5m3 0a3 3 0 1 0-6 0m6 0h-6m6.072 1H16m-9 0h1.5m6 2.5l1 .5m-7-.5l-1 .5m7-5.5l1-.5m-7 .5l-1-.5M20 20l2 2"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h24v24H0z" mask="url(#solarMinimalisticMagniferBugLineDuotone0)"></svg:path>`,
})
export class SolarMinimalisticMagniferBugLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMinimalisticMagniferLineDuotoneIcon],svg[solar-minimalistic-magnifer-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="solarMinimalisticMagniferLineDuotone0"><svg:g fill="none" stroke-width="1.5"><svg:circle cx="11.5" cy="11.5" r="9.5" stroke="gray"></svg:circle><svg:path stroke="#fff" stroke-linecap="round" d="m20 20l2 2"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h24v24H0z" mask="url(#solarMinimalisticMagniferLineDuotone0)"></svg:path>`,
})
export class SolarMinimalisticMagniferLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMinimalisticMagniferZoomInBoldDuotoneIcon],svg[solar-minimalistic-magnifer-zoom-in-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.157 20.313a9.157 9.157 0 1 0 0-18.313a9.157 9.157 0 0 0 0 18.313" opacity=".5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M11.156 8.024c.4 0 .723.324.723.723v1.687h1.687a.723.723 0 1 1 0 1.446h-1.687v1.687a.723.723 0 0 1-1.446 0V11.88H8.746a.723.723 0 1 1 0-1.446h1.687V8.747c0-.399.324-.723.723-.723m7.683 10.815a.723.723 0 0 1 1.022 0l1.928 1.927a.723.723 0 0 1-1.023 1.023L18.84 19.86a.723.723 0 0 1 0-1.022" clip-rule="evenodd"></svg:path>`,
})
export class SolarMinimalisticMagniferZoomInBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMinimalisticMagniferZoomInLineDuotoneIcon],svg[solar-minimalistic-magnifer-zoom-in-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="solarMinimalisticMagniferZoomInLineDuotone0"><svg:g fill="none" stroke-width="1.5"><svg:circle cx="11.5" cy="11.5" r="9.5" stroke="gray"></svg:circle><svg:path stroke="#fff" stroke-linecap="round" d="M9 11.5h2.5m0 0H14m-2.5 0V14m0-2.5V9M20 20l2 2"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h24v24H0z" mask="url(#solarMinimalisticMagniferZoomInLineDuotone0)"></svg:path>`,
})
export class SolarMinimalisticMagniferZoomInLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMinimalisticMagniferZoomOutBoldDuotoneIcon],svg[solar-minimalistic-magnifer-zoom-out-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.157 20.313a9.157 9.157 0 1 0 0-18.313a9.157 9.157 0 0 0 0 18.313" opacity=".5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M8.023 11.157c0-.4.324-.723.723-.723h4.82a.723.723 0 1 1 0 1.445h-4.82a.723.723 0 0 1-.723-.723m10.816 7.683a.723.723 0 0 1 1.022 0l1.928 1.927a.723.723 0 0 1-1.023 1.023L18.84 19.86a.723.723 0 0 1 0-1.022" clip-rule="evenodd"></svg:path>`,
})
export class SolarMinimalisticMagniferZoomOutBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMinimalisticMagniferZoomOutLineDuotoneIcon],svg[solar-minimalistic-magnifer-zoom-out-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="solarMinimalisticMagniferZoomOutLineDuotone0"><svg:g fill="none" stroke-width="1.5"><svg:circle cx="11.5" cy="11.5" r="9.5" stroke="gray"></svg:circle><svg:path stroke="#fff" stroke-linecap="round" d="M9 11.5h5m6 8.5l2 2"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h24v24H0z" mask="url(#solarMinimalisticMagniferZoomOutLineDuotone0)"></svg:path>`,
})
export class SolarMinimalisticMagniferZoomOutLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMinimizeBoldDuotoneIcon],svg[solar-minimize-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M2.393 15a.75.75 0 0 1 .75-.75H9a.75.75 0 0 1 .75.75v5.857a.75.75 0 1 1-1.5 0v-4.046l-5.72 5.72a.75.75 0 0 1-1.06-1.061l5.72-5.72H3.142a.75.75 0 0 1-.75-.75" opacity=".6"></svg:path><svg:path d="M21.607 9a.75.75 0 0 1-.75.75H15a.75.75 0 0 1-.75-.75V3.143a.75.75 0 0 1 1.5 0v4.046l5.72-5.72a.75.75 0 1 1 1.06 1.061l-5.72 5.72h4.047a.75.75 0 0 1 .75.75"></svg:path></svg:g>`,
})
export class SolarMinimizeBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMinimizeLineDuotoneIcon],svg[solar-minimize-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="m2 22l7-7m0 0H3.143M9 15v5.857" opacity=".6"></svg:path><svg:path d="m22 2l-7 7m0 0h5.857M15 9V3.143"></svg:path></svg:g>`,
})
export class SolarMinimizeLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMinimizeSquare2BoldDuotoneIcon],svg[solar-minimize-square-2-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12" opacity=".5"></svg:path><svg:path fill="currentColor" d="M6.75 10.5c0 .414.336.75.75.75h3a.75.75 0 0 0 .75-.75v-3a.75.75 0 0 0-1.5 0v1.19L7.53 6.47a.75.75 0 0 0-1.06 1.06l2.22 2.22H7.5a.75.75 0 0 0-.75.75m9.75.75a.75.75 0 0 0 0-1.5h-1.19l2.22-2.22a.75.75 0 0 0-1.06-1.06l-2.22 2.22V7.5a.75.75 0 0 0-1.5 0v3c0 .414.336.75.75.75zM6.47 16.47a.75.75 0 1 0 1.06 1.06l2.22-2.22v1.19a.75.75 0 0 0 1.5 0v-3a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0 0 1.5h1.19zm11.06 0a.75.75 0 1 1-1.06 1.06l-2.22-2.22v1.19a.75.75 0 0 1-1.5 0v-3a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5h-1.19z"></svg:path>`,
})
export class SolarMinimizeSquare2BoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMinimizeSquare2LineDuotoneIcon],svg[solar-minimize-square-2-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M10.5 13.5h-3m3 0v3m0-3L7 17m6.5-6.5h3m-3 0v-3m0 3L17 7m-6.5 3.5h-3m3 0v-3m0 3L7 7m6.5 6.5h3m-3 0v3m0-3L17 17"></svg:path><svg:path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z" opacity=".5"></svg:path></svg:g>`,
})
export class SolarMinimizeSquare2LineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMinimizeSquare3BoldDuotoneIcon],svg[solar-minimize-square-3-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12" opacity=".5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M16.5 12a.75.75 0 0 1-.75.75H12a.75.75 0 0 1-.75-.75V8.25a.75.75 0 0 1 1.5 0v1.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-3.72 3.72h1.94a.75.75 0 0 1 .75.75" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M2 17.5c0-2.121 0-3.182.659-3.841S4.379 13 6.5 13s3.182 0 3.841.659S11 15.379 11 17.5s0 3.182-.659 3.841S8.621 22 6.5 22s-3.182 0-3.841-.659S2 19.621 2 17.5"></svg:path>`,
})
export class SolarMinimizeSquare3BoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMinimizeSquare3LineDuotoneIcon],svg[solar-minimize-square-3-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M13 22c4.055-.008 6.178-.107 7.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.071 2 16.714 2 12 2S4.929 2 3.464 3.464C2.107 4.822 2.008 6.944 2 11" opacity=".5"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m17 7l-5 5m0 0h3.75M12 12V8.25"></svg:path><svg:path d="M2 18c0-1.886 0-2.828.586-3.414S4.114 14 6 14s2.828 0 3.414.586S10 16.114 10 18s0 2.828-.586 3.414S7.886 22 6 22s-2.828 0-3.414-.586S2 19.886 2 18Z"></svg:path></svg:g>`,
})
export class SolarMinimizeSquare3LineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMinimizeSquareBoldDuotoneIcon],svg[solar-minimize-square-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12" opacity=".5"></svg:path><svg:path fill="currentColor" d="M19.952 2.988a3.7 3.7 0 0 1 1.06 1.06L15.811 9.25h1.939a.75.75 0 0 1 0 1.5H14a.75.75 0 0 1-.75-.75V6.25a.75.75 0 0 1 1.5 0v1.94zM4.048 21.012a3.7 3.7 0 0 1-1.06-1.06l5.201-5.202H6.25a.75.75 0 0 1 0-1.5H10a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0v-1.94z"></svg:path>`,
})
export class SolarMinimizeSquareBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMinimizeSquareLineDuotoneIcon],svg[solar-minimize-square-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="m20 4l-6 6m0 0h3.75M14 10V6.25M4 20l6-6m0 0H6.25M10 14v3.75"></svg:path><svg:path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z" opacity=".5"></svg:path></svg:g>`,
})
export class SolarMinimizeSquareLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMinimizeSquareMinimalisticBoldDuotoneIcon],svg[solar-minimize-square-minimalistic-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12" opacity=".5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M6.47 17.53a.75.75 0 0 1 0-1.06l2.22-2.22H7.5a.75.75 0 0 1 0-1.5h3a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0v-1.19l-2.22 2.22a.75.75 0 0 1-1.06 0m10.78-7.03a.75.75 0 0 1-.75.75h-3a.75.75 0 0 1-.75-.75v-3a.75.75 0 0 1 1.5 0v1.19l2.22-2.22a.75.75 0 1 1 1.06 1.06l-2.22 2.22h1.19a.75.75 0 0 1 .75.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarMinimizeSquareMinimalisticBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMinimizeSquareMinimalisticLineDuotoneIcon],svg[solar-minimize-square-minimalistic-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z" opacity=".5"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M10.5 13.5h-3m3 0v3m0-3L7 17m6.5-6.5h3m-3 0v-3m0 3L17 7"></svg:path></svg:g>`,
})
export class SolarMinimizeSquareMinimalisticLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMinusCircleBoldDuotoneIcon],svg[solar-minus-circle-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10" opacity=".5"></svg:path><svg:path fill="currentColor" d="M15.75 12a.75.75 0 0 1-.75.75H9a.75.75 0 0 1 0-1.5h6a.75.75 0 0 1 .75.75"></svg:path>`,
})
export class SolarMinusCircleBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMinusCircleLineDuotoneIcon],svg[solar-minus-circle-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="12" cy="12" r="10" opacity=".5"></svg:circle><svg:path stroke-linecap="round" d="M15 12H9"></svg:path></svg:g>`,
})
export class SolarMinusCircleLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMinusSquareBoldDuotoneIcon],svg[solar-minus-square-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22c-4.714 0-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22" opacity=".5"></svg:path><svg:path fill="currentColor" d="M15 12.75a.75.75 0 0 0 0-1.5H9a.75.75 0 0 0 0 1.5z"></svg:path>`,
})
export class SolarMinusSquareBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMinusSquareLineDuotoneIcon],svg[solar-minus-square-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="M15 12H9"></svg:path></svg:g>`,
})
export class SolarMinusSquareLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMirrorBoldDuotoneIcon],svg[solar-mirror-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.636 22h12.728A3.636 3.636 0 0 0 22 18.364C22 17.61 21.39 17 20.636 17h-3.808a2 2 0 0 0-1.414.586l-.828.828a2 2 0 0 1-1.414.586h-2.344a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 7.172 17H3.364C2.61 17 2 17.61 2 18.364A3.636 3.636 0 0 0 5.636 22"></svg:path><svg:path fill="currentColor" d="M19.485 17a9 9 0 1 0-14.969 0h2.656a2 2 0 0 1 1.414.586l.828.828a2 2 0 0 0 1.414.586h2.344a2 2 0 0 0 1.414-.586l.828-.828A2 2 0 0 1 16.828 17z" opacity=".5"></svg:path>`,
})
export class SolarMirrorBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMirrorLeftBoldDuotoneIcon],svg[solar-mirror-left-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.25 12.75v-2c0-3.771 0-5.657 1.172-6.828C5.514 2.829 8.098 2.755 11.5 2.75a.75.75 0 0 1 1.5 0v18a.75.75 0 0 1-1.5 0c-3.402-.005-5.986-.079-7.078-1.172C3.25 18.407 3.25 16.521 3.25 12.75"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M13.59 2.75c0 .414.337.75.75.75h.91q.653 0 1.202.003a.75.75 0 0 0 .013-1.5Q15.902 2 15.252 2h-.911a.75.75 0 0 0-.75.75m0 18c0 .414.337.75.75.75h.912q.65 0 1.213-.003a.75.75 0 0 0-.013-1.5q-.55.004-1.202.003h-.91a.75.75 0 0 0-.75.75m5.031-17.945a.75.75 0 0 0 .494.938c.32.1.544.235.726.416s.316.405.415.726a.75.75 0 0 0 1.433-.445a3.2 3.2 0 0 0-.787-1.342a3.2 3.2 0 0 0-1.342-.787a.75.75 0 0 0-.939.494m0 17.89a.75.75 0 0 0 .939.494c.515-.16.962-.408 1.342-.787s.627-.827.787-1.342a.75.75 0 1 0-1.433-.445c-.1.321-.234.545-.415.726a1.7 1.7 0 0 1-.726.416a.75.75 0 0 0-.494.938m2.62-13.904a.75.75 0 0 0-.744.757q.004.55.003 1.202v1.364a.75.75 0 0 0 1.5 0V8.748q0-.652-.003-1.213a.75.75 0 0 0-.757-.744m0 9.918a.75.75 0 0 0 .756-.744q.004-.562.003-1.213v-1.366a.75.75 0 0 0-1.5 0v1.364q0 .653-.003 1.202a.75.75 0 0 0 .743.757" clip-rule="evenodd" opacity=".5"></svg:path>`,
})
export class SolarMirrorLeftBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMirrorLeftLineDuotoneIcon],svg[solar-mirror-left-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M12 3h-1C7.229 3 5.343 3 4.172 4.172S3 7.229 3 11v2c0 3.771 0 5.657 1.172 6.828S7.229 21 11 21h1"></svg:path><svg:path stroke-dasharray="2.5 3" stroke-linecap="round" d="M11 3h4c2.828 0 4.243 0 5.121.879C21 4.757 21 6.172 21 9v6c0 2.828 0 4.243-.879 5.121C19.243 21 17.828 21 15 21h-4" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="M12 2v20"></svg:path></svg:g>`,
})
export class SolarMirrorLeftLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMirrorLineDuotoneIcon],svg[solar-mirror-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M5 9.5V19a3 3 0 0 1-.6 1.8L3.5 22M19 9.5V19a3 3 0 0 0 .6 1.8l.9 1.2"></svg:path><svg:path d="M18 9.5c0 4.142-2.686 7.5-6 7.5s-6-3.358-6-7.5S8.686 2 12 2s6 3.358 6 7.5Z"></svg:path><svg:path d="M5 20h14" opacity=".4"></svg:path><svg:path stroke-linecap="round" d="M13 5.256c.96.51 1.697 1.732 1.926 3.244" opacity=".4"></svg:path></svg:g>`,
})
export class SolarMirrorLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMirrorRightBoldDuotoneIcon],svg[solar-mirror-right-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 12.75v-2c0-3.771 0-5.657-1.172-6.828c-1.092-1.093-3.676-1.167-7.078-1.172a.75.75 0 0 0-1.5 0v18a.75.75 0 0 0 1.5 0c3.402-.005 5.986-.079 7.078-1.172C22 18.407 22 16.521 22 12.75"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M11.66 2.75a.75.75 0 0 1-.75.75H10q-.653 0-1.202.003a.75.75 0 0 1-.013-1.5Q9.346 2 9.998 2h.911a.75.75 0 0 1 .75.75m0 18a.75.75 0 0 1-.75.75h-.912q-.652 0-1.213-.003a.75.75 0 0 1 .013-1.5Q9.348 20 10 20h.91a.75.75 0 0 1 .75.75M6.628 2.805a.75.75 0 0 1-.494.938c-.321.1-.545.235-.726.416s-.316.405-.416.726A.75.75 0 0 1 3.56 4.44c.16-.515.408-.962.787-1.342s.827-.627 1.342-.787a.75.75 0 0 1 .939.494m0 17.89a.75.75 0 0 1-.939.494a3.2 3.2 0 0 1-1.342-.787a3.2 3.2 0 0 1-.787-1.342a.75.75 0 1 1 1.432-.445c.1.321.235.545.416.726s.405.316.726.416a.75.75 0 0 1 .494.938M4.009 6.791a.75.75 0 0 1 .744.757q-.004.55-.003 1.202v1.364a.75.75 0 0 1-1.5 0V8.748q0-.652.003-1.213a.75.75 0 0 1 .757-.744m0 9.918a.75.75 0 0 1-.756-.744q-.004-.562-.003-1.213v-1.366a.75.75 0 0 1 1.5 0v1.364q0 .653.003 1.202a.75.75 0 0 1-.743.757" clip-rule="evenodd" opacity=".5"></svg:path>`,
})
export class SolarMirrorRightBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMirrorRightLineDuotoneIcon],svg[solar-mirror-right-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M12 21h1c3.771 0 5.657 0 6.828-1.172S21 16.771 21 13v-2c0-3.771 0-5.657-1.172-6.828S16.771 3 13 3h-1"></svg:path><svg:path stroke-dasharray="2.5 3" stroke-linecap="round" d="M13 21H9c-2.828 0-4.243 0-5.121-.879C3 19.243 3 17.828 3 15V9c0-2.828 0-4.243.879-5.121C4.757 3 6.172 3 9 3h4" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="M12 22V2"></svg:path></svg:g>`,
})
export class SolarMirrorRightLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMoneyBagBoldDuotoneIcon],svg[solar-money-bag-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.172 7.172c.843-.844 2.058-1.08 4.08-1.146l1.5-.024Q9.34 5.999 10 6h4q.662 0 1.248.002l1.5.024c2.022.066 3.237.302 4.08 1.146C22 8.343 22 10.229 22 14s0 5.657-1.172 6.828S17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14s0-5.657 1.172-6.828" opacity=".5"></svg:path><svg:path fill="currentColor" d="M12.75 10a.75.75 0 0 0-1.5 0v.01c-1.089.274-2 1.133-2 2.323c0 1.457 1.365 2.417 2.75 2.417c.824 0 1.25.533 1.25.917s-.426.916-1.25.916s-1.25-.532-1.25-.916a.75.75 0 0 0-1.5 0c0 1.19.911 2.048 2 2.323V18a.75.75 0 0 0 1.5 0v-.01c1.089-.274 2-1.133 2-2.323c0-1.457-1.365-2.417-2.75-2.417c-.824 0-1.25-.533-1.25-.917s.426-.916 1.25-.916s1.25.532 1.25.916a.75.75 0 0 0 1.5 0c0-1.19-.911-2.049-2-2.323zm-.698-8.75h-.104c-.898 0-1.648 0-2.242.08c-.628.084-1.195.27-1.65.725c-.456.456-.642 1.023-.726 1.65c-.057.427-.073 1.446-.078 2.32l1.5-.023c.005-.847.02-1.758.065-2.097c.062-.461.169-.659.3-.789s.327-.237.789-.3c.483-.064 1.13-.066 2.094-.066s1.612.002 2.095.067c.461.062.659.169.789.3s.238.327.3.788c.045.34.06 1.25.064 2.097l1.5.024c-.004-.875-.02-1.894-.078-2.32c-.084-.628-.27-1.195-.725-1.65c-.456-.456-1.023-.642-1.65-.726c-.595-.08-1.344-.08-2.243-.08"></svg:path>`,
})
export class SolarMoneyBagBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMoneyBagLineDuotoneIcon],svg[solar-money-bag-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 14c0-3.771 0-5.657 1.172-6.828S6.229 6 10 6h4c3.771 0 5.657 0 6.828 1.172S22 10.229 22 14s0 5.657-1.172 6.828S17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14Z"></svg:path><svg:path d="M16 6c0-1.886 0-2.828-.586-3.414S13.886 2 12 2s-2.828 0-3.414.586S8 4.114 8 6" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="M12 17.333c1.105 0 2-.746 2-1.666S13.105 14 12 14s-2-.746-2-1.667c0-.92.895-1.666 2-1.666m0 6.666c-1.105 0-2-.746-2-1.666m2 1.666V18m0-8v.667m0 0c1.105 0 2 .746 2 1.666" opacity=".5"></svg:path></svg:g>`,
})
export class SolarMoneyBagLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMonitorBoldDuotoneIcon],svg[solar-monitor-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 2h4c3.771 0 5.657 0 6.828 1.172S22 6.229 22 10v1c0 .552 0 1.55-.006 2H2.007C2 12.55 2 11.552 2 11v-1c0-3.771 0-5.657 1.172-6.828S6.229 2 10 2" opacity=".5"></svg:path><svg:path fill="currentColor" d="M7.985 17.5c-2.84 0-4.26 0-5.141-.879C2.272 16.052 2.07 15.258 2 14v-1h20v1c-.07 1.258-.272 2.052-.844 2.621c-.882.879-2.301.879-5.14.879h-3.263v4h3.262c.416 0 .753.336.753.75s-.337.75-.753.75h-8.03a.75.75 0 0 1-.753-.75c0-.414.337-.75.753-.75h3.262v-4z"></svg:path>`,
})
export class SolarMonitorBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMonitorCameraBoldDuotoneIcon],svg[solar-monitor-camera-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 2h-1c-1.414 0-2.121 0-2.56.44C12 2.878 12 3.585 12 5s0 2.121.44 2.56C12.878 8 13.585 8 15 8h1c1.414 0 2.121 0 2.56-.44c.285-.284.386-.681.42-1.31H19l1.615.673c.627.261.94.391 1.162.243C22 7.018 22 6.678 22 6V4c0-.678 0-1.018-.223-1.166c-.222-.148-.535-.018-1.162.243L19 3.75h-.02c-.035-.629-.135-1.026-.42-1.31C18.122 2 17.415 2 16 2M7.985 17.5c-2.84 0-4.26 0-5.141-.879C2.272 16.052 2.07 15.258 2 14v-1h20v1c-.07 1.258-.272 2.052-.844 2.621c-.882.879-2.301.879-5.14.879h-3.263v4h3.262c.416 0 .753.336.753.75s-.337.75-.753.75h-8.03a.75.75 0 0 1-.753-.75c0-.414.337-.75.753-.75h3.262v-4z"></svg:path><svg:path fill="currentColor" d="M22 10v1c0 .552-.006 1.55-.013 2H2c-.007-.45 0-1.448 0-2v-1c0-3.771 0-5.657 1.172-6.828S6.229 2 10 2h.918c-.205.384-.3.786-.35 1.154c-.068.51-.068 1.128-.068 1.764v.164c0 .636 0 1.254.068 1.764c.078.575.266 1.23.81 1.775c.545.545 1.201.733 1.776.81c.51.07 1.128.07 1.764.069h1.164c.636 0 1.254 0 1.764-.068c.575-.078 1.23-.266 1.775-.81q.174-.176.302-.362l.115.048l.057.023c.26.109.59.246.885.321c.233.06.606.122 1.018.027Q22 9.298 22 10" opacity=".5"></svg:path>`,
})
export class SolarMonitorCameraBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMonitorCameraLineDuotoneIcon],svg[solar-monitor-camera-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M12 5c0-1.414 0-2.121.44-2.56C12.878 2 13.585 2 15 2h1c1.414 0 2.121 0 2.56.44C19 2.878 19 3.585 19 5s0 2.121-.44 2.56C18.122 8 17.415 8 16 8h-1c-1.414 0-2.121 0-2.56-.44C12 7.122 12 6.415 12 5Zm7-1.25l1.615-.673c.627-.261.94-.391 1.162-.243C22 2.982 22 3.322 22 4v2c0 .678 0 1.018-.223 1.166c-.222.148-.535.018-1.162-.243L19 6.25z"></svg:path><svg:path stroke-linecap="round" d="M16 22H8m4-5v5m10-9H2" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="M22 10v1c0 2.828 0 4.243-.879 5.121C20.243 17 18.828 17 16 17H8c-2.828 0-4.243 0-5.121-.879C2 15.243 2 13.828 2 11V9.5c0-3.287 0-4.931.908-6.038a4 4 0 0 1 .554-.554C4.57 2 6.212 2 9.5 2"></svg:path></svg:g>`,
})
export class SolarMonitorCameraLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMonitorLineDuotoneIcon],svg[solar-monitor-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 10c0-3.771 0-5.657 1.172-6.828S6.229 2 10 2h4c3.771 0 5.657 0 6.828 1.172S22 6.229 22 10v1c0 2.828 0 4.243-.879 5.121C20.243 17 18.828 17 16 17H8c-2.828 0-4.243 0-5.121-.879C2 15.243 2 13.828 2 11z"></svg:path><svg:path stroke-linecap="round" d="M16 22H8m4-5v5m10-9H2" opacity=".5"></svg:path></svg:g>`,
})
export class SolarMonitorLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMonitorSmartphoneBoldDuotoneIcon],svg[solar-monitor-smartphone-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M22 15v3c0 1.886 0 2.828-.586 3.414S19.886 22 18 22s-2.828 0-3.414-.586S14 19.886 14 18v-3c0-1.886 0-2.828.586-3.414S16.114 11 18 11s2.828 0 3.414.586S22 13.114 22 15m-5.75 5a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M8 17c-2.829 0-4.243 0-5.122-.879c-.569-.569-.807-1.363-.878-2.621V13h10.516v.5c-.016.437-.016.912-.016 1.41v3.18c0 .865 0 1.659.086 2.304c.096.711.32 1.463.939 2.08l.025.026H8A.75.75 0 0 1 8 21h3.25v-4z"></svg:path><svg:path fill="currentColor" d="M10 2h4c3.771 0 5.657 0 6.828 1.172S22 6.229 22 10v.138c-.508-.333-1.069-.48-1.606-.551C19.75 9.5 18.955 9.5 18.09 9.5h-.18c-.865 0-1.659 0-2.304.087c-.711.095-1.463.32-2.08.938c-.588.588-.82 1.296-.924 1.975v.5H2v-.5c-.007-.45 0-.948 0-1.5v-1c0-3.771 0-5.657 1.172-6.828S6.229 2 10 2" opacity=".5"></svg:path>`,
})
export class SolarMonitorSmartphoneBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMonitorSmartphoneLineDuotoneIcon],svg[solar-monitor-smartphone-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M11 17H8c-2.828 0-4.243 0-5.121-.879C2 15.243 2 13.828 2 11v-1c0-3.771 0-5.657 1.172-6.828S6.229 2 10 2h5.5c2.335 0 3.502 0 4.386.472a4 4 0 0 1 1.642 1.642C22 4.998 22 6.165 22 8.5"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M14 15c0-1.886 0-2.828.586-3.414S16.114 11 18 11s2.828 0 3.414.586S22 13.114 22 15v3c0 1.886 0 2.828-.586 3.414S19.886 22 18 22s-2.828 0-3.414-.586S14 19.886 14 18z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M19 20h-2" opacity=".5"></svg:path><svg:path fill="currentColor" d="M11 22v.75a.75.75 0 0 0 .75-.75zm-3-.75a.75.75 0 0 0 0 1.5zM11.75 17a.75.75 0 0 0-1.5 0zM11 21.25H8v1.5h3zm.75.75v-5h-1.5v5z" opacity=".5"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M11 13H2" opacity=".5"></svg:path></svg:g>`,
})
export class SolarMonitorSmartphoneLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMoonBoldDuotoneIcon],svg[solar-moon-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M22 12c0 5.523-4.477 10-10 10a10 10 0 0 1-3.321-.564A9 9 0 0 1 8 18a8.97 8.97 0 0 1 2.138-5.824A6.5 6.5 0 0 0 15.5 15a6.5 6.5 0 0 0 5.567-3.143c.24-.396.933-.32.933.143" clip-rule="evenodd" opacity=".5"></svg:path><svg:path fill="currentColor" d="M2 12c0 4.359 2.789 8.066 6.679 9.435A9 9 0 0 1 8 18c0-2.221.805-4.254 2.138-5.824A6.47 6.47 0 0 1 9 8.5a6.5 6.5 0 0 1 3.143-5.567C12.54 2.693 12.463 2 12 2C6.477 2 2 6.477 2 12"></svg:path>`,
})
export class SolarMoonBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMoonFogBoldDuotoneIcon],svg[solar-moon-fog-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.25 16a.75.75 0 0 1 .75-.75h20a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75m6 6a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M4.25 19a.75.75 0 0 1 .75-.75h14a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1-.75-.75M12 2C6.477 2 2 6.477 2 12a10 10 0 0 0 .832 4h18.336A10 10 0 0 0 22 12c0-.463-.694-.54-.933-.143a6.5 6.5 0 1 1-8.924-8.924C12.54 2.693 12.463 2 12 2" opacity=".5"></svg:path><svg:path fill="currentColor" d="M19.9 2.307a.483.483 0 0 0-.9 0l-.43 1.095a.48.48 0 0 1-.272.274l-1.091.432a.486.486 0 0 0 0 .903l1.091.432a.48.48 0 0 1 .272.273L19 6.81c.162.41.74.41.9 0l.43-1.095a.48.48 0 0 1 .273-.273l1.091-.432a.486.486 0 0 0 0-.903l-1.091-.432a.48.48 0 0 1-.273-.274zM16.033 8.13a.483.483 0 0 0-.9 0l-.157.399a.48.48 0 0 1-.272.273l-.398.158a.486.486 0 0 0 0 .903l.398.157c.125.05.223.148.272.274l.157.399c.161.41.739.41.9 0l.157-.4a.48.48 0 0 1 .272-.273l.398-.157a.486.486 0 0 0 0-.903l-.398-.158a.48.48 0 0 1-.272-.273z"></svg:path>`,
})
export class SolarMoonFogBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMoonFogLineDuotoneIcon],svg[solar-moon-fog-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 22h8"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 19h14" opacity=".5"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2 16h20"></svg:path><svg:path fill="currentColor" d="m21.067 11.857l-.642-.388zm-8.924-8.924l-.388-.642zM2.75 12A9.25 9.25 0 0 1 12 2.75v-1.5C6.063 1.25 1.25 6.063 1.25 12zm12.75 2.25A5.75 5.75 0 0 1 9.75 8.5h-1.5a7.25 7.25 0 0 0 7.25 7.25zm4.925-2.781A5.75 5.75 0 0 1 15.5 14.25v1.5a7.25 7.25 0 0 0 6.21-3.505zM9.75 8.5a5.75 5.75 0 0 1 2.781-4.925l-.776-1.284A7.25 7.25 0 0 0 8.25 8.5zm11.5 3.5a9.2 9.2 0 0 1-.77 3.7l1.375.6c.576-1.318.895-2.773.895-4.3zM3.52 15.7a9.2 9.2 0 0 1-.77-3.7h-1.5c0 1.527.319 2.982.895 4.3zM12 2.75a.38.38 0 0 1-.268-.118a.3.3 0 0 1-.082-.155c-.004-.031-.002-.121.105-.186l.776 1.284c.503-.304.665-.861.606-1.299c-.062-.455-.42-1.026-1.137-1.026zm9.71 9.495c-.066.107-.156.109-.187.105a.3.3 0 0 1-.155-.082a.38.38 0 0 1-.118-.268h1.5c0-.717-.571-1.075-1.026-1.137c-.438-.059-.995.103-1.299.606z" opacity=".5"></svg:path><svg:path stroke="currentColor" d="M19.9 2.307a.483.483 0 0 0-.9 0l-.43 1.095a.48.48 0 0 1-.272.274l-1.091.432a.486.486 0 0 0 0 .903l1.091.432a.48.48 0 0 1 .272.273L19 6.81c.162.41.74.41.9 0l.43-1.095a.48.48 0 0 1 .273-.273l1.091-.432a.486.486 0 0 0 0-.903l-1.091-.432a.48.48 0 0 1-.273-.274zM16.033 8.13a.483.483 0 0 0-.9 0l-.157.399a.48.48 0 0 1-.272.273l-.398.158a.486.486 0 0 0 0 .903l.398.157c.125.05.223.148.272.274l.157.399c.161.41.739.41.9 0l.157-.4a.48.48 0 0 1 .272-.273l.398-.157a.486.486 0 0 0 0-.903l-.398-.158a.48.48 0 0 1-.272-.273z"></svg:path></svg:g>`,
})
export class SolarMoonFogLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMoonLineDuotoneIcon],svg[solar-moon-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21.067 11.857l-.642-.388zm-8.924-8.924l-.388-.642zM21.25 12A9.25 9.25 0 0 1 12 21.25v1.5c5.937 0 10.75-4.813 10.75-10.75zM12 21.25A9.25 9.25 0 0 1 2.75 12h-1.5c0 5.937 4.813 10.75 10.75 10.75zM2.75 12A9.25 9.25 0 0 1 12 2.75v-1.5C6.063 1.25 1.25 6.063 1.25 12zm12.75 2.25A5.75 5.75 0 0 1 9.75 8.5h-1.5a7.25 7.25 0 0 0 7.25 7.25zm4.925-2.781A5.75 5.75 0 0 1 15.5 14.25v1.5a7.25 7.25 0 0 0 6.21-3.505zM9.75 8.5a5.75 5.75 0 0 1 2.781-4.925l-.776-1.284A7.25 7.25 0 0 0 8.25 8.5zM12 2.75a.38.38 0 0 1-.268-.118a.3.3 0 0 1-.082-.155c-.004-.031-.002-.121.105-.186l.776 1.284c.503-.304.665-.861.606-1.299c-.062-.455-.42-1.026-1.137-1.026zm9.71 9.495c-.066.107-.156.109-.187.105a.3.3 0 0 1-.155-.082a.38.38 0 0 1-.118-.268h1.5c0-.717-.571-1.075-1.026-1.137c-.438-.059-.995.103-1.299.606z"></svg:path>`,
})
export class SolarMoonLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMoonSleepBoldDuotoneIcon],svg[solar-moon-sleep-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M18 2.75a.75.75 0 0 1 0-1.5h4a.75.75 0 0 1 .53 1.28l-2.72 2.72H22a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.53-1.28l2.72-2.72zm-4.5 6a.75.75 0 0 1 0-1.5h3a.75.75 0 0 1 .53 1.28l-1.72 1.72h1.19a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.53-1.28l1.72-1.72z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M12 22c5.523 0 10-4.477 10-10c0-.463-.694-.54-.933-.143a6.5 6.5 0 1 1-8.924-8.924C12.54 2.693 12.463 2 12 2C6.477 2 2 6.477 2 12s4.477 10 10 10" opacity=".5"></svg:path>`,
})
export class SolarMoonSleepBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMoonSleepLineDuotoneIcon],svg[solar-moon-sleep-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13.5 8h3l-3 3h3M18 2h4l-4 4h4"></svg:path><svg:path fill="currentColor" d="m21.067 11.857l-.642-.388zm-8.924-8.924l-.388-.642zM21.25 12A9.25 9.25 0 0 1 12 21.25v1.5c5.937 0 10.75-4.813 10.75-10.75zM12 21.25A9.25 9.25 0 0 1 2.75 12h-1.5c0 5.937 4.813 10.75 10.75 10.75zM2.75 12A9.25 9.25 0 0 1 12 2.75v-1.5C6.063 1.25 1.25 6.063 1.25 12zm12.75 2.25A5.75 5.75 0 0 1 9.75 8.5h-1.5a7.25 7.25 0 0 0 7.25 7.25zm4.925-2.781A5.75 5.75 0 0 1 15.5 14.25v1.5a7.25 7.25 0 0 0 6.21-3.505zM9.75 8.5a5.75 5.75 0 0 1 2.781-4.925l-.776-1.284A7.25 7.25 0 0 0 8.25 8.5zM12 2.75a.38.38 0 0 1-.268-.118a.3.3 0 0 1-.082-.155c-.004-.031-.002-.121.105-.186l.776 1.284c.503-.304.665-.861.606-1.299c-.062-.455-.42-1.026-1.137-1.026zm9.71 9.495c-.066.107-.156.109-.187.105a.3.3 0 0 1-.155-.082a.38.38 0 0 1-.118-.268h1.5c0-.717-.571-1.075-1.026-1.137c-.438-.059-.995.103-1.299.606z" opacity=".4"></svg:path></svg:g>`,
})
export class SolarMoonSleepLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMoonStarsBoldDuotoneIcon],svg[solar-moon-stars-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.9 2.307a.483.483 0 0 0-.9 0l-.43 1.095a.48.48 0 0 1-.272.274l-1.091.432a.486.486 0 0 0 0 .903l1.091.432a.48.48 0 0 1 .272.273L19 6.81c.162.41.74.41.9 0l.43-1.095a.48.48 0 0 1 .273-.273l1.091-.432a.486.486 0 0 0 0-.903l-1.091-.432a.48.48 0 0 1-.273-.274zM16.033 8.13a.483.483 0 0 0-.9 0l-.157.399a.48.48 0 0 1-.272.273l-.398.158a.486.486 0 0 0 0 .903l.398.157c.125.05.223.148.272.274l.157.399c.161.41.739.41.9 0l.157-.4a.48.48 0 0 1 .272-.273l.398-.157a.486.486 0 0 0 0-.903l-.398-.158a.48.48 0 0 1-.272-.273z"></svg:path><svg:path fill="currentColor" d="M12 22c5.523 0 10-4.477 10-10c0-.463-.694-.54-.933-.143a6.5 6.5 0 1 1-8.924-8.924C12.54 2.693 12.463 2 12 2C6.477 2 2 6.477 2 12s4.477 10 10 10" opacity=".5"></svg:path>`,
})
export class SolarMoonStarsBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMoonStarsLineDuotoneIcon],svg[solar-moon-stars-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" d="M19.9 2.307a.483.483 0 0 0-.9 0l-.43 1.095a.48.48 0 0 1-.272.274l-1.091.432a.486.486 0 0 0 0 .903l1.091.432a.48.48 0 0 1 .272.273L19 6.81c.162.41.74.41.9 0l.43-1.095a.48.48 0 0 1 .273-.273l1.091-.432a.486.486 0 0 0 0-.903l-1.091-.432a.48.48 0 0 1-.273-.274zM16.033 8.13a.483.483 0 0 0-.9 0l-.157.399a.48.48 0 0 1-.272.273l-.398.158a.486.486 0 0 0 0 .903l.398.157c.125.05.223.148.272.274l.157.399c.161.41.739.41.9 0l.157-.4a.48.48 0 0 1 .272-.273l.398-.157a.486.486 0 0 0 0-.903l-.398-.158a.48.48 0 0 1-.272-.273z"></svg:path><svg:path fill="currentColor" d="m21.067 11.857l-.642-.388zm-8.924-8.924l-.388-.642zM21.25 12A9.25 9.25 0 0 1 12 21.25v1.5c5.937 0 10.75-4.813 10.75-10.75zM12 21.25A9.25 9.25 0 0 1 2.75 12h-1.5c0 5.937 4.813 10.75 10.75 10.75zM2.75 12A9.25 9.25 0 0 1 12 2.75v-1.5C6.063 1.25 1.25 6.063 1.25 12zm12.75 2.25A5.75 5.75 0 0 1 9.75 8.5h-1.5a7.25 7.25 0 0 0 7.25 7.25zm4.925-2.781A5.75 5.75 0 0 1 15.5 14.25v1.5a7.25 7.25 0 0 0 6.21-3.505zM9.75 8.5a5.75 5.75 0 0 1 2.781-4.925l-.776-1.284A7.25 7.25 0 0 0 8.25 8.5zM12 2.75a.38.38 0 0 1-.268-.118a.3.3 0 0 1-.082-.155c-.004-.031-.002-.121.105-.186l.776 1.284c.503-.304.665-.861.606-1.299c-.062-.455-.42-1.026-1.137-1.026zm9.71 9.495c-.066.107-.156.109-.187.105a.3.3 0 0 1-.155-.082a.38.38 0 0 1-.118-.268h1.5c0-.717-.571-1.075-1.026-1.137c-.438-.059-.995.103-1.299.606z" opacity=".5"></svg:path></svg:g>`,
})
export class SolarMoonStarsLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMouseBoldDuotoneIcon],svg[solar-mouse-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 8.974v6.012C19 18.86 15.866 22 12 22s-7-3.14-7-7.014V8.974A7.01 7.01 0 0 1 11.25 2v3.385c-.591.282-1 .886-1 1.585v2.004c0 .969.784 1.754 1.75 1.754s1.75-.785 1.75-1.754V6.97c0-.7-.409-1.303-1-1.585V2A7.01 7.01 0 0 1 19 8.974" opacity=".5"></svg:path><svg:path fill="currentColor" d="M13.75 8.974V6.97c0-.7-.409-1.303-1-1.585V2a7 7 0 0 0-1.5 0v3.385c-.591.282-1 .885-1 1.585v2.004c0 .968.784 1.753 1.75 1.753s1.75-.785 1.75-1.753"></svg:path>`,
})
export class SolarMouseBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMouseCircleBoldDuotoneIcon],svg[solar-mouse-circle-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.535 11.916c0 5.267 4.238 9.537 9.465 9.537s9.465-4.27 9.465-9.537a9.54 9.54 0 0 0-5.335-8.584a.776.776 0 0 1-.355-1.033a.765.765 0 0 1 1.026-.358A11.09 11.09 0 0 1 23 11.916C23 18.038 18.075 23 12 23S1 18.038 1 11.916C1 6.548 4.787 2.073 9.815 1.051c1.689-.343 2.952 1.104 2.952 2.617v2.134c1.894.364 3.326 2.05 3.326 4.076V14c0 2.291-1.832 4.148-4.093 4.148c-2.26 0-4.093-1.857-4.093-4.148V9.878c0-2.025 1.432-3.711 3.326-4.075V3.668c0-.766-.588-1.208-1.115-1.101c-4.326.879-7.583 4.732-7.583 9.35" opacity=".5"></svg:path><svg:path fill="currentColor" d="M7.907 13.954c0 2.29 1.833 4.148 4.093 4.148s4.093-1.857 4.093-4.148v-3.37H7.907zm4.861-4.616h3.253c-.312-1.667-1.608-3.292-3.253-3.609zm-1.535 0V5.73c-1.645.317-2.942 1.942-3.254 3.61z"></svg:path>`,
})
export class SolarMouseCircleBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMouseCircleLineDuotoneIcon],svg[solar-mouse-circle-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="1.5" d="M8 10a4 4 0 1 1 8 0v4a4 4 0 0 1-8 0z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M8.5 10h7M12 10V6"></svg:path><svg:path fill="currentColor" d="m10.013 2.033l-.15-.735zm6.681.135a.75.75 0 0 0-.66 1.347zm-6.83-.87c-4.918 1-8.614 5.377-8.614 10.619h1.5c0-4.524 3.188-8.29 7.412-9.15zM1.25 11.917C1.25 17.894 6.057 22.75 12 22.75v-1.5c-5.103 0-9.25-4.173-9.25-9.333zM12 22.75c5.943 0 10.75-4.856 10.75-10.833h-1.5c0 5.16-4.147 9.333-9.25 9.333zm-.75-18.9v5.042h1.5V3.85zm11.5 8.067c0-4.286-2.47-7.992-6.056-9.749l-.66 1.347a9.34 9.34 0 0 1 5.216 8.402zm-12.588-9.15c.508-.103 1.088.324 1.088 1.083h1.5c0-1.468-1.229-2.89-2.887-2.552z" opacity=".5"></svg:path></svg:g>`,
})
export class SolarMouseCircleLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMouseLineDuotoneIcon],svg[solar-mouse-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M5 9a7 7 0 0 1 14 0v6a7 7 0 1 1-14 0z"></svg:path><svg:path d="M10.5 8.5a1.5 1.5 0 0 1 3 0v2a1.5 1.5 0 0 1-3 0z"></svg:path><svg:path stroke-linecap="round" d="M12 2v5" opacity=".5"></svg:path></svg:g>`,
})
export class SolarMouseLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMouseMinimalisticBoldDuotoneIcon],svg[solar-mouse-minimalistic-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 15V9A7 7 0 1 0 5 9v6a7 7 0 1 0 14 0" opacity=".5"></svg:path><svg:path fill="currentColor" d="M12 4.25a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0V5a.75.75 0 0 1 .75-.75"></svg:path>`,
})
export class SolarMouseMinimalisticBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMouseMinimalisticLineDuotoneIcon],svg[solar-mouse-minimalistic-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M5 9a7 7 0 0 1 14 0v6a7 7 0 1 1-14 0z"></svg:path><svg:path stroke-linecap="round" d="M12 5v3" opacity=".5"></svg:path></svg:g>`,
})
export class SolarMouseMinimalisticLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMoveToFolderBoldDuotoneIcon],svg[solar-move-to-folder-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 14v-2.202c0-2.632 0-3.949-.77-4.804a3 3 0 0 0-.224-.225C20.151 6 18.834 6 16.202 6h-.374c-1.153 0-1.73 0-2.268-.153a4 4 0 0 1-.848-.352C12.224 5.224 11.816 4.815 11 4l-.55-.55c-.274-.274-.41-.41-.554-.53a4 4 0 0 0-2.18-.903C7.53 2 7.336 2 6.95 2c-.883 0-1.324 0-1.692.07A4 4 0 0 0 2.07 5.257C2 5.626 2 6.068 2 6.95v7.3l.006 1.5c.027 2.636.191 4.104 1.166 5.078C4.343 22 6.229 22 10 22h4c3.771 0 5.657 0 6.828-1.172S22 17.771 22 14" opacity=".5"></svg:path><svg:path fill="currentColor" d="M9.316 11.394a.75.75 0 0 0-.882 1.213l2.26 1.643H2l.006 1.5h8.688l-2.26 1.643a.75.75 0 0 0 .882 1.214l4.125-3a.75.75 0 0 0 0-1.213z"></svg:path>`,
})
export class SolarMoveToFolderBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMoveToFolderLineDuotoneIcon],svg[solar-move-to-folder-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M2 12V6.95c0-.883 0-1.324.07-1.692A4 4 0 0 1 5.257 2.07C5.626 2 6.068 2 6.95 2c.386 0 .58 0 .766.017a4 4 0 0 1 2.18.904c.144.119.28.255.554.529L11 4c.816.816 1.224 1.224 1.712 1.495a4 4 0 0 0 .848.352C14.098 6 14.675 6 15.828 6h.374c2.632 0 3.949 0 4.804.77q.119.105.224.224c.77.855.77 2.172.77 4.804V14c0 3.771 0 5.657-1.172 6.828S17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172c-.654-.653-.943-1.528-1.07-2.828" opacity=".5"></svg:path><svg:path stroke-linejoin="round" d="M2 15h11m0 0l-4.125-3M13 15l-4.125 3"></svg:path></svg:g>`,
})
export class SolarMoveToFolderLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMultipleForwardLeftBoldDuotoneIcon],svg[solar-multiple-forward-left-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.476 5.183L7.498 9.608c-.93.827-1.396 1.24-1.568 1.73a2 2 0 0 0 0 1.324c.172.489.637.902 1.568 1.73l4.978 4.424c.422.376.633.563.812.57a.5.5 0 0 0 .405-.182c.114-.138.114-.42.114-.986v-2.79c2.428 0 4.993.78 6.865 2.165c.975.72 1.463 1.08 1.648 1.067a.45.45 0 0 0 .39-.24c.096-.16.011-.658-.159-1.653c-1.105-6.467-5.555-8.196-8.744-8.196v-2.79c0-.565 0-.847-.114-.986a.5.5 0 0 0-.405-.181c-.18.006-.39.194-.812.57"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M9.818 3.99a.75.75 0 0 0-1.06-.04L3.542 8.794a4.647 4.647 0 0 0 .15 6.944l5.09 4.333a.75.75 0 1 0 .972-1.142l-5.09-4.333a3.147 3.147 0 0 1-.102-4.703L9.78 5.05a.75.75 0 0 0 .039-1.06" clip-rule="evenodd" opacity=".5"></svg:path>`,
})
export class SolarMultipleForwardLeftBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMultipleForwardLeftLineDuotoneIcon],svg[solar-multiple-forward-left-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="m11.336 5.479l-3.973 3.53C5.795 10.405 5.011 11.102 5.011 12s.784 1.596 2.352 2.99l3.973 3.53c.716.637 1.074.956 1.369.823s.295-.611.295-1.57v-2.344c3.6 0 7.5 1.714 9 4.571c0-9.142-5.333-11.428-9-11.428V6.226c0-.958 0-1.437-.295-1.57c-.295-.132-.653.186-1.37.823"></svg:path><svg:path d="M8.461 4.5L3.245 9.344a3.897 3.897 0 0 0 .126 5.823L8.46 19.5" opacity=".5"></svg:path></svg:g>`,
})
export class SolarMultipleForwardLeftLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMultipleForwardRightBoldDuotoneIcon],svg[solar-multiple-forward-right-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12.332 5.183l4.977 4.425c.93.827 1.396 1.24 1.568 1.73a2 2 0 0 1 0 1.324c-.172.489-.637.902-1.568 1.73l-4.978 4.424c-.422.376-.633.563-.812.57a.5.5 0 0 1-.405-.182c-.114-.138-.114-.42-.114-.986v-2.79c-2.428 0-4.993.78-6.865 2.165c-.975.72-1.463 1.08-1.648 1.067a.45.45 0 0 1-.39-.24c-.096-.16-.011-.658.159-1.653C3.361 10.3 7.811 8.57 11 8.57V5.78c0-.565 0-.847.114-.986a.5.5 0 0 1 .405-.181c.18.006.39.194.813.57"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M14.99 3.99a.75.75 0 0 1 1.06-.04l5.216 4.844a4.647 4.647 0 0 1-.15 6.944l-5.09 4.333a.75.75 0 1 1-.973-1.142l5.09-4.333a3.147 3.147 0 0 0 .102-4.703L15.029 5.05a.75.75 0 0 1-.04-1.06" clip-rule="evenodd" opacity=".5"></svg:path>`,
})
export class SolarMultipleForwardRightBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMultipleForwardRightLineDuotoneIcon],svg[solar-multiple-forward-right-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="m12.664 5.479l3.973 3.53c1.568 1.395 2.353 2.092 2.353 2.99s-.785 1.596-2.353 2.99l-3.973 3.53c-.716.637-1.074.956-1.369.823S11 18.731 11 17.772v-2.344c-3.6 0-7.5 1.714-9 4.571c0-9.142 5.333-11.428 9-11.428V6.226c0-.958 0-1.437.295-1.57c.295-.132.653.186 1.37.823"></svg:path><svg:path d="m15.539 4.5l5.216 4.844a3.897 3.897 0 0 1-.126 5.823l-5.09 4.333" opacity=".5"></svg:path></svg:g>`,
})
export class SolarMultipleForwardRightLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMusicLibrary2BoldDuotoneIcon],svg[solar-music-library-2-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.25 17a.75.75 0 1 0-1.5 0a.75.75 0 0 0 1.5 0"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M8.672 7.542h6.656c3.374 0 5.062 0 6.01.987s.724 2.511.278 5.56l-.422 2.892c-.35 2.391-.525 3.587-1.422 4.303s-2.22.716-4.867.716h-5.81c-2.646 0-3.97 0-4.867-.716s-1.072-1.912-1.422-4.303l-.422-2.892c-.447-3.049-.67-4.573.278-5.56s2.636-.987 6.01-.987M12.75 10.5a.75.75 0 0 0-1.5 0v4.378A2.25 2.25 0 1 0 12.75 17v-3.68c.67.543 1.512.93 2.25.93a.75.75 0 1 0 0-1.5c-.305 0-.886-.219-1.416-.69c-.519-.46-.834-1.021-.834-1.56" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M8.51 2h6.98c.232 0 .41 0 .566.015c1.108.109 2.015.775 2.4 1.672H5.543c.384-.897 1.291-1.563 2.399-1.672C8.099 2 8.277 2 8.51 2" opacity=".4"></svg:path><svg:path fill="currentColor" d="M6.31 4.723c-1.39 0-2.53.84-2.911 1.953l-.023.07c.398-.12.812-.199 1.232-.253c1.08-.138 2.446-.138 4.032-.138h6.892c1.586 0 2.951 0 4.032.138a8 8 0 0 1 1.232.253l-.023-.07c-.38-1.114-1.521-1.953-2.912-1.953z" opacity=".7"></svg:path>`,
})
export class SolarMusicLibrary2BoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMusicLibrary2LineDuotoneIcon],svg[solar-music-library-2-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2.384 13.793c-.447-3.164-.67-4.745.278-5.77C3.61 7 5.298 7 8.672 7h6.656c3.374 0 5.062 0 6.01 1.024s.724 2.605.278 5.769l-.422 3c-.35 2.48-.525 3.721-1.422 4.464s-2.22.743-4.867.743h-5.81c-2.646 0-3.97 0-4.867-.743s-1.072-1.983-1.422-4.464z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M12 17a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m0 0v-6.5c0 1.657 1.895 3 3 3"></svg:path><svg:path d="M19.562 7a2.132 2.132 0 0 0-2.1-2.5H6.538a2.132 2.132 0 0 0-2.1 2.5M17.5 4.5c.028-.26.043-.389.043-.496a2 2 0 0 0-1.787-1.993C15.65 2 15.52 2 15.26 2H8.74c-.26 0-.391 0-.497.011a2 2 0 0 0-1.787 1.993c0 .107.014.237.043.496" opacity=".5"></svg:path></svg:g>`,
})
export class SolarMusicLibrary2LineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMusicLibraryBoldDuotoneIcon],svg[solar-music-library-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M15.328 7.542H8.672c-3.374 0-5.062 0-6.01.987s-.725 2.511-.278 5.56l.422 2.892c.35 2.391.525 3.587 1.422 4.303c.898.716 2.22.716 4.867.716h5.81c2.646 0 3.97 0 4.867-.716s1.072-1.912 1.422-4.303l.422-2.892c.447-3.049.67-4.573-.278-5.56s-2.636-.987-6.01-.987m-.74 2.623c-1.231-.526-2.645.265-2.727 1.527q-.005.083-.004.207v3.623a2.7 2.7 0 0 0-1.286-.321C9.151 15.2 8 16.275 8 17.6S9.151 20 10.571 20s2.572-1.074 2.572-2.4v-3.919l.928.462q.118.06.198.095c1.231.526 2.645-.266 2.728-1.528q.004-.082.003-.207v-.026l-.001-.093c-.021-.623-.387-1.192-.966-1.503l-.087-.044l-1.16-.578a4 4 0 0 0-.197-.094" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M14.053 11.256c-.41-.175-.882.089-.909.51a4 4 0 0 0 0 .214a.6.6 0 0 0 .321.501l.058.03l1.135.564c.107.054.133.066.146.072c.41.175.882-.089.91-.51a4 4 0 0 0 0-.215a.6.6 0 0 0-.322-.5zM10.571 16.4c.71 0 1.286.538 1.286 1.2c0 .663-.575 1.2-1.286 1.2c-.71 0-1.285-.537-1.285-1.2s.575-1.2 1.285-1.2"></svg:path><svg:path fill="currentColor" d="M8.51 2h6.98c.233 0 .41 0 .567.015c1.108.109 2.014.775 2.399 1.672H5.544c.385-.897 1.292-1.563 2.4-1.672C8.099 2 8.278 2 8.51 2" opacity=".4"></svg:path><svg:path fill="currentColor" d="M6.31 4.723c-1.39 0-2.53.84-2.91 1.953l-.024.07a8 8 0 0 1 1.232-.253c1.08-.138 2.446-.138 4.032-.138h6.892c1.586 0 2.952 0 4.032.138c.42.054.834.133 1.232.253l-.023-.07c-.38-1.114-1.52-1.953-2.911-1.953z" opacity=".7"></svg:path>`,
})
export class SolarMusicLibraryBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMusicLibraryLineDuotoneIcon],svg[solar-music-library-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="1.5" d="M19.562 7a2.132 2.132 0 0 0-2.1-2.5H6.538a2.132 2.132 0 0 0-2.1 2.5M17.5 4.5c.028-.26.043-.389.043-.496a2 2 0 0 0-1.787-1.993C15.65 2 15.52 2 15.26 2H8.74c-.26 0-.391 0-.497.011a2 2 0 0 0-1.787 1.993c0 .107.014.237.043.496" opacity=".5"></svg:path><svg:path fill="currentColor" d="m12.56 12.7l-.352.661zm.883.47l.353-.662zm.996-1.868l.353-.662zm-.882-.471l.353-.662zm-1.555.776l.749.045zm1.414-.85l-.312.683zM15 12.17l.75-.024zm-.5-.835l.373-.65zm-.915 1.91l.312-.683zm1.414-.85l-.748-.045zm-2.496.273l-.374.65zM12 11.832l-.75.024zm-.75 4.668a.75.75 0 0 1-.75.75v1.5a2.25 2.25 0 0 0 2.25-2.25zm-.75.75a.75.75 0 0 1-.75-.75h-1.5a2.25 2.25 0 0 0 2.25 2.25zm-.75-.75a.75.75 0 0 1 .75-.75v-1.5a2.25 2.25 0 0 0-2.25 2.25zm.75-.75a.75.75 0 0 1 .75.75h1.5a2.25 2.25 0 0 0-2.25-2.25zm2.25.75V12h-1.5v4.5zm-.542-3.139l.882.47l.706-1.323l-.882-.47zm2.584-2.721l-.882-.47l-.706 1.323l.882.47zm-2.042 1.125v-.113l-1.497-.09c-.003.058-.003.131-.003.203zm1.16-1.596a5 5 0 0 0-.181-.093l-.625 1.364l.018.009l.082.044zm-1.16 1.483a.25.25 0 0 1 .354-.212l.625-1.364a1.75 1.75 0 0 0-2.476 1.485zm3 .584v-.091l-1.5.048v.043zm-1.664-.273l.032.017l.007.004l.747-1.3l-.08-.044zm1.663.182a1.75 1.75 0 0 0-.877-1.462l-.747 1.3a.25.25 0 0 1 .125.21zm-2.659 1.687c.064.034.128.068.181.093l.625-1.364l-.018-.009l-.082-.044zm1.16-1.596v.113l1.497.09c.003-.058.003-.131.003-.203zm-.979 1.689a1.75 1.75 0 0 0 2.476-1.485l-1.498-.091a.25.25 0 0 1-.353.212zm-.357-1.887l-.032-.017l-.007-.004l-.747 1.3l.08.044zm-1.664-.273v.091l1.5-.048v-.043zm1.625.252a.25.25 0 0 1-.125-.209l-1.5.048c.02.606.352 1.16.878 1.462z"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M2.384 13.793c-.447-3.164-.67-4.745.278-5.77C3.61 7 5.298 7 8.672 7h6.656c3.374 0 5.062 0 6.01 1.024s.724 2.605.278 5.769l-.422 3c-.35 2.48-.525 3.721-1.422 4.464s-2.22.743-4.867.743h-5.81c-2.646 0-3.97 0-4.867-.743s-1.072-1.983-1.422-4.464z"></svg:path></svg:g>`,
})
export class SolarMusicLibraryLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMusicNote2BoldDuotoneIcon],svg[solar-music-note-2-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 13.25a4.75 4.75 0 1 0 0 9.5a4.75 4.75 0 0 0 0-9.5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M13 1.25a.75.75 0 0 1 .75.75c0 2.9 2.35 5.25 5.25 5.25a.75.75 0 0 1 0 1.5A6.75 6.75 0 0 1 12.25 2a.75.75 0 0 1 .75-.75" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M12.25 14.536V2c0 1.607.562 3.084 1.5 4.243V18a4.74 4.74 0 0 0-1.5-3.464" opacity=".5"></svg:path>`,
})
export class SolarMusicNote2BoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMusicNote2LineDuotoneIcon],svg[solar-music-note-2-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M13 18V2" opacity=".5"></svg:path><svg:circle cx="9" cy="18" r="4"></svg:circle><svg:path stroke-linecap="round" d="M19 8a6 6 0 0 1-6-6"></svg:path></svg:g>`,
})
export class SolarMusicNote2LineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMusicNote3BoldDuotoneIcon],svg[solar-music-note-3-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.319 2.505A2.75 2.75 0 0 0 11.414 4.3c-.098.27-.132.563-.148.869A17 17 0 0 0 11.25 6v8.536A4.75 4.75 0 1 0 12.75 18V9.21q.156.083.343.175L15.8 10.74c.418.21.759.38 1.038.5c.281.123.558.223.843.257A2.75 2.75 0 0 0 20.586 9.7c.098-.27.132-.563.148-.87c.016-.303.016-.683.016-1.151v-.083c0-.348 0-.62-.049-.878a2.75 2.75 0 0 0-1.03-1.667c-.21-.16-.453-.281-.764-.436L16.2 3.262a22 22 0 0 0-1.038-.501c-.28-.123-.558-.223-.843-.256"></svg:path>`,
})
export class SolarMusicNote3BoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMusicNote3LineDuotoneIcon],svg[solar-music-note-3-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M12 18a4 4 0 1 1-8 0a4 4 0 0 1 8 0Z"></svg:path><svg:path d="M12 18V6" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="m16.117 10.059l-2.634-1.317c-.365-.182-.547-.274-.698-.389a2 2 0 0 1-.75-1.213C12 6.954 12 6.75 12 6.342c0-.971 0-1.457.12-1.787a2 2 0 0 1 2.112-1.305c.348.04.783.258 1.651.692l2.634 1.317c.365.182.547.273.698.389a2 2 0 0 1 .75 1.212c.035.187.035.39.035.799c0 .97 0 1.456-.12 1.786a2 2 0 0 1-2.112 1.306c-.348-.04-.783-.258-1.651-.692Z"></svg:path></svg:g>`,
})
export class SolarMusicNote3LineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMusicNote4BoldDuotoneIcon],svg[solar-music-note-4-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.85 4.7c-.398-1.124-1.497-1.821-2.656-1.682a2.7 2.7 0 0 0-.77.24c-.256.114-.567.273-.95.47L13 4.995c-.284.146-.507.26-.698.41a2.6 2.6 0 0 0-.942 1.563c-.045.242-.045.497-.045.823v6.506a4.27 4.27 0 0 0-2.971-1.206C5.944 13.093 4 15.087 4 17.547C4 20.006 5.944 22 8.343 22s4.343-1.994 4.343-4.454v-6.363c.43.226.926.325 1.434.265c.261-.032.514-.125.771-.24c.255-.114.566-.274.949-.47l2.475-1.27c.285-.145.507-.259.698-.408c.49-.385.826-.942.942-1.564C20 7.254 20 7 20 6.673v-.077c0-.439 0-.796-.015-1.08a3 3 0 0 0-.135-.815"></svg:path>`,
})
export class SolarMusicNote4BoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMusicNote4LineDuotoneIcon],svg[solar-music-note-4-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M12 18a4 4 0 1 1-8 0a4 4 0 0 1 8 0Z"></svg:path><svg:path d="M12 18V8" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="m16.117 3.942l-2.634 1.317c-.365.182-.547.273-.698.389a2 2 0 0 0-.75 1.212c-.035.187-.035.39-.035.8c0 .97 0 1.456.12 1.786a2 2 0 0 0 2.112 1.306c.348-.04.783-.258 1.651-.692l2.634-1.317c.365-.182.547-.274.698-.389a2 2 0 0 0 .75-1.213C20 6.954 20 6.75 20 6.342c0-.971 0-1.457-.12-1.787a2 2 0 0 0-2.112-1.305c-.348.04-.783.258-1.651.692Z"></svg:path></svg:g>`,
})
export class SolarMusicNote4LineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMusicNoteBoldDuotoneIcon],svg[solar-music-note-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m10.09 11.963l9.273-3.332L21 7.952v-.46c0-1.12 0-2.059-.088-2.807a7 7 0 0 0-.043-.31c-.085-.51-.234-.988-.523-1.386a2.2 2.2 0 0 0-.675-.617l-.01-.005c-.77-.461-1.638-.428-2.532-.224c-.864.198-1.935.6-3.249 1.095l-2.284.859c-.616.231-1.138.427-1.547.63c-.436.216-.811.471-1.092.851s-.399.79-.452 1.234c-.05.418-.05.926-.05 1.525v4.265z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M8.455 16.13a3.8 3.8 0 0 0-1.91-.5C4.587 15.63 3 17.056 3 18.815S4.587 22 6.545 22c1.959 0 3.546-1.426 3.546-3.185v-6.852l-1.636.638zm10.909-7.5v5.54a3.8 3.8 0 0 0-1.91-.5c-1.958 0-3.545 1.426-3.545 3.185s1.587 3.185 3.545 3.185c1.959 0 3.546-1.426 3.546-3.185V7.952z" opacity=".5"></svg:path>`,
})
export class SolarMusicNoteBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMusicNoteLineDuotoneIcon],svg[solar-music-note-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M9 19a3 3 0 1 1-6 0a3 3 0 0 1 6 0Zm12-2a3 3 0 1 1-6 0a3 3 0 0 1 6 0Z"></svg:path><svg:path d="M9 19V8m12 9V6" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="m15.735 3.755l-4 1.333c-1.32.44-1.98.66-2.357 1.184S9 7.492 9 8.882V12l12-4v-.45c0-2.533 0-3.8-.83-4.398c-.831-.599-2.032-.198-4.435.603Z"></svg:path></svg:g>`,
})
export class SolarMusicNoteLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMusicNoteSlider2BoldDuotoneIcon],svg[solar-music-note-slider-2-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.869 8.412c.07-.03.102-.04.11-.043a.25.25 0 0 1 .254.157a1 1 0 0 1 .01.118c.007.117.007.276.007.527a7 7 0 0 1-.004.259a.25.25 0 0 1-.093.15l-.039.023c-.04.022-.095.05-.19.097l-1.317.659c-.225.112-.367.183-.475.23a1 1 0 0 1-.11.042a.25.25 0 0 1-.254-.157a1 1 0 0 1-.011-.117a11 11 0 0 1-.007-.528a7 7 0 0 1 .005-.258a.25.25 0 0 1 .093-.151l.038-.022l.191-.098l1.317-.658c.225-.112.367-.183.475-.23M10 13.75a1.25 1.25 0 1 1 0 2.5a1.25 1.25 0 0 1 0-2.5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M7.236 2.879C6.42 3.757 6.42 5.172 6.42 8v8c0 2.828 0 4.243.817 5.121S9.37 22 12 22s3.947 0 4.764-.879c.818-.878.818-2.293.818-5.121V8c0-2.828 0-4.243-.818-5.121C15.947 2 14.631 2 12 2c-2.63 0-3.946 0-4.764.879m9.41 5.143a1.75 1.75 0 0 0-1.848-1.142c-.199.023-.378.09-.529.157c-.148.064-.326.153-.529.255l-1.37.685a2.7 2.7 0 0 0-.433.251a1.75 1.75 0 0 0-.655 1.061c-.032.166-.032.338-.032.5v2.761a2.75 2.75 0 1 0 1.5 2.45v-2.886q.223.033.453.006c.199-.023.377-.09.528-.156c.149-.065.327-.154.53-.255l1.37-.685c.144-.073.298-.15.432-.252a1.75 1.75 0 0 0 .656-1.06a2.6 2.6 0 0 0 .031-.5v-.06c0-.226 0-.425-.008-.587a1.9 1.9 0 0 0-.096-.543" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M6.724 3.762H5.268a8 8 0 0 0-.434.025c-.43.038-.82.119-1.183.318a3.15 3.15 0 0 0-1.321 1.42c-.186.39-.26.809-.296 1.272C2 7.245 2 7.796 2 8.47v7.063c0 .673 0 1.224.034 1.671c.035.464.11.882.296 1.273c.29.611.752 1.108 1.32 1.42c.364.2.753.28 1.184.318q.202.018.434.025h1.456c-.304-.899-.304-2.203-.304-4.24V8c0-2.037 0-3.34.305-4.238m10.551 16.477c.306-.898.306-2.202.306-4.239V8c0-2.037 0-3.34-.305-4.238h1.455q.233.007.434.025c.43.038.82.119 1.183.318a3.15 3.15 0 0 1 1.322 1.42c.185.39.26.809.295 1.272c.034.448.034.999.034 1.672v7.063c0 .673 0 1.224-.034 1.671c-.035.464-.11.882-.296 1.273a3.15 3.15 0 0 1-1.32 1.42c-.364.2-.753.28-1.184.318a8 8 0 0 1-.434.025z" opacity=".5"></svg:path>`,
})
export class SolarMusicNoteSlider2BoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMusicNoteSlider2LineDuotoneIcon],svg[solar-music-note-slider-2-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="1.5" d="M5 8c0-2.828 0-4.243.879-5.121C6.757 2 8.172 2 11 2h2c2.828 0 4.243 0 5.121.879C19 3.757 19 5.172 19 8v8c0 2.828 0 4.243-.879 5.121C17.243 22 15.828 22 13 22h-2c-2.828 0-4.243 0-5.121-.879C5 20.243 5 18.828 5 16z"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M19 19.5c.465 0 .697 0 .891-.03a2.5 2.5 0 0 0 2.078-2.079c.031-.194.031-.426.031-.891v-9c0-.465 0-.697-.03-.891a2.5 2.5 0 0 0-2.08-2.079c-.193-.03-.425-.03-.89-.03m-14 15c-.465 0-.697 0-.891-.03a2.5 2.5 0 0 1-2.079-2.08C2 17.197 2 16.965 2 16.5v-9c0-.465 0-.697.03-.891A2.5 2.5 0 0 1 4.11 4.53c.193-.03.425-.03.89-.03" opacity=".5"></svg:path><svg:path fill="currentColor" d="m12.742 8.63l-.336-.671zm1.316-.659l-.335-.67zm-.116 3.058l-.336-.67zm-1.882-.306l.705-.256zm1.056.652l-.087-.745zm2.866-1.805l.737.141zm-.375.607l.456.595zm-.723-2.552l.087.745zm1.056.653l-.705.255zm-3.547.546l.455.596zm-.375.606l-.737-.14zM11.25 15c0 .69-.56 1.25-1.25 1.25v1.5A2.75 2.75 0 0 0 12.75 15zM10 16.25c-.69 0-1.25-.56-1.25-1.25h-1.5A2.75 2.75 0 0 0 10 17.75zM8.75 15c0-.69.56-1.25 1.25-1.25v-1.5A2.75 2.75 0 0 0 7.25 15zM10 13.75c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 10 12.25zM12.75 15v-5h-1.5v5zm.327-5.7l1.317-.658l-.671-1.342l-1.317.659zm1.846.4l-1.317.659l.671 1.341l1.317-.658zm-3.673.13c0 .234 0 .44.008.606c.01.164.029.354.097.542l1.41-.51c.008.022-.002.008-.009-.111a11 11 0 0 1-.006-.528zm2.356.528a9 9 0 0 1-.474.23c-.11.049-.127.045-.103.043l.174 1.49c.198-.024.377-.091.528-.157c.153-.067.336-.159.546-.264zm-2.251.62a1.75 1.75 0 0 0 1.848 1.142l-.174-1.49a.25.25 0 0 1-.264-.163zm3.895-1.807c0 .107 0 .168-.002.214l-.002.044l1.473.282c.034-.18.031-.366.031-.54zm.344 1.87c.155-.077.324-.158.469-.269l-.911-1.191l-.038.022l-.191.097zm-.348-1.612a.25.25 0 0 1-.094.152l.91 1.191a1.75 1.75 0 0 0 .657-1.06zm-.852-.787c.224-.112.366-.183.474-.23c.11-.048.127-.045.103-.042l-.174-1.49c-.198.023-.377.09-.528.157c-.153.066-.336.158-.546.263zm2.356.529c0-.235 0-.44-.009-.606a1.9 1.9 0 0 0-.096-.543l-1.41.511c-.008-.023.002-.01.009.11c.006.118.006.277.006.528zm-1.779-.801a.25.25 0 0 1 .264.163l1.41-.51a1.75 1.75 0 0 0-1.848-1.143zm-2.565-.411c-.155.077-.324.158-.469.269l.911 1.192l.038-.022c.04-.022.095-.05.191-.098zm.344 1.87c0-.107 0-.168.002-.214l.002-.044l-1.473-.282c-.034.18-.031.367-.031.54zm-.813-1.601a1.75 1.75 0 0 0-.656 1.061l1.473.282a.25.25 0 0 1 .094-.151z" opacity=".5"></svg:path></svg:g>`,
})
export class SolarMusicNoteSlider2LineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMusicNoteSliderBoldDuotoneIcon],svg[solar-music-note-slider-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.724 3.762H5.268a8 8 0 0 0-.434.025c-.43.038-.82.119-1.183.318a3.15 3.15 0 0 0-1.321 1.42c-.186.39-.26.809-.296 1.272C2 7.245 2 7.796 2 8.47v7.063c0 .673 0 1.224.034 1.671c.035.464.11.882.296 1.273c.29.611.752 1.108 1.32 1.42c.364.2.753.28 1.184.318q.202.018.434.025h1.456c-.304-.899-.304-2.203-.304-4.24V8c0-2.037 0-3.34.305-4.238m10.551 16.477c.306-.898.306-2.202.306-4.239V8c0-2.037 0-3.34-.305-4.238h1.455q.233.007.434.025c.43.038.82.119 1.183.318a3.15 3.15 0 0 1 1.322 1.42c.185.39.26.809.295 1.272c.034.448.034.999.034 1.672v7.063c0 .673 0 1.224-.034 1.671c-.035.464-.11.882-.296 1.273a3.15 3.15 0 0 1-1.32 1.42c-.364.2-.753.28-1.184.318a8 8 0 0 1-.434.025z" opacity=".5"></svg:path><svg:path fill="currentColor" d="M11 12.75a1.25 1.25 0 1 1 0 2.5a1.25 1.25 0 0 1 0-2.5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M6.419 8c0-2.828 0-4.243.817-5.121C8.054 2 9.37 2 12 2s3.947 0 4.764.879c.818.878.818 2.293.818 5.121v8c0 2.828 0 4.243-.818 5.121C15.947 22 14.631 22 12 22c-2.63 0-3.946 0-4.764-.879c-.817-.878-.817-2.293-.817-5.121zm7.331 0a.75.75 0 1 0-1.5 0v3.55a2.75 2.75 0 1 0 1.5 2.45v-3.55c.375.192.8.3 1.25.3a.75.75 0 1 0 0-1.5c-.69 0-1.25-.56-1.25-1.25" clip-rule="evenodd"></svg:path>`,
})
export class SolarMusicNoteSliderBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMusicNoteSliderLineDuotoneIcon],svg[solar-music-note-slider-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M5 8c0-2.828 0-4.243.879-5.121C6.757 2 8.172 2 11 2h2c2.828 0 4.243 0 5.121.879C19 3.757 19 5.172 19 8v8c0 2.828 0 4.243-.879 5.121C17.243 22 15.828 22 13 22h-2c-2.828 0-4.243 0-5.121-.879C5 20.243 5 18.828 5 16z"></svg:path><svg:path d="M19 19.5c.465 0 .697 0 .891-.03a2.5 2.5 0 0 0 2.078-2.079c.031-.194.031-.426.031-.891v-9c0-.465 0-.697-.03-.891a2.5 2.5 0 0 0-2.08-2.079c-.193-.03-.425-.03-.89-.03" opacity=".5"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M13 14a2 2 0 1 1-4 0a2 2 0 0 1 4 0m0 0V8a2 2 0 0 0 2 2" opacity=".5"></svg:path><svg:path d="M5 19.5c-.465 0-.697 0-.891-.03a2.5 2.5 0 0 1-2.079-2.08C2 17.197 2 16.965 2 16.5v-9c0-.465 0-.697.03-.891A2.5 2.5 0 0 1 4.11 4.53c.193-.03.425-.03.89-.03" opacity=".5"></svg:path></svg:g>`,
})
export class SolarMusicNoteSliderLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMusicNotesBoldDuotoneIcon],svg[solar-music-notes-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12.75 12.508l8.5-3.4v5.653a3.25 3.25 0 1 0 1.5 2.74V7.945c0-1.143 0-2.101-.08-2.865a8 8 0 0 0-.04-.315c-.078-.522-.214-1.008-.479-1.415a2.2 2.2 0 0 0-.62-.63l-.007-.005c-.708-.47-1.503-.437-2.322-.228c-.792.202-1.774.613-2.978 1.117l-2.094.876c-.565.236-1.043.437-1.418.644c-.4.22-.743.48-1.001.868s-.366.805-.415 1.259c-.046.426-.046.945-.046 1.557v7.952a3.25 3.25 0 1 0 1.5 2.74z"></svg:path><svg:path fill="currentColor" d="M7.75 2a.75.75 0 0 0-1.5 0v5.76a3.25 3.25 0 1 0 1.5 2.74V5.005c.699.504 1.53.745 2.25.745a.75.75 0 0 0 0-1.5a2.44 2.44 0 0 1-1.488-.552c-.434-.357-.762-.9-.762-1.698" opacity=".5"></svg:path>`,
})
export class SolarMusicNotesBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMusicNotesLineDuotoneIcon],svg[solar-music-notes-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="1.5" d="M12 19.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0Zm10-2a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0Z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m22 8l-10 4"></svg:path><svg:path fill="currentColor" d="m14.456 5.158l.29.692zm2-.837l-.29-.692zm4.652-.98l-.416.624zM12.75 19V8.847h-1.5V19zm10-1.847V8.011h-1.5v9.143zM14.745 5.85l2-.837l-.579-1.384l-2 .837zm8.005 2.16c0-1.333.002-2.42-.12-3.24c-.123-.837-.4-1.583-1.106-2.054l-.832 1.249c.185.123.355.353.455 1.024c.101.686.103 1.638.103 3.022zm-6.005-2.997c1.276-.534 2.156-.9 2.828-1.072c.657-.167.935-.099 1.12.024l.83-1.249c-.707-.47-1.502-.437-2.32-.228c-.805.205-1.806.626-3.037 1.141zM12.75 8.848c0-.662.001-1.098.037-1.434c.035-.317.095-.474.172-.59l-1.248-.83c-.258.387-.366.805-.415 1.258c-.047.436-.046.967-.046 1.596zm1.416-4.382c-.58.243-1.07.447-1.454.659c-.4.22-.743.48-1.001.868l1.248.831c.077-.115.199-.232.478-.386c.296-.163.698-.333 1.308-.588z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 11V2c0 2.071 1.757 3 3 3m-3 5.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0" opacity=".5"></svg:path></svg:g>`,
})
export class SolarMusicNotesLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMutedBoldDuotoneIcon],svg[solar-muted-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M17 16c-1.886 0-2.828 0-3.414-.586S13 13.886 13 12s0-2.828.586-3.414S15.114 8 17 8s2.828 0 3.414.586S21 10.114 21 12s0 2.828-.586 3.414S18.886 16 17 16m-1.306-6.25a.667.667 0 0 0-.943.944L16.057 12l-1.306 1.306a.667.667 0 0 0 .943.943L17 12.943l1.306 1.306a.667.667 0 0 0 .943-.943L17.943 12l1.306-1.306a.667.667 0 0 0-.943-.943L17 11.057z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M3.003 11.716c.038-1.843.057-2.764.678-3.552c.113-.144.28-.315.42-.431c.763-.636 1.771-.636 3.788-.636c.72 0 1.081 0 1.425-.092a3 3 0 0 0 .211-.067c.336-.121.637-.33 1.238-.746c2.374-1.645 3.56-2.467 4.557-2.11c.191.069.376.168.541.29c.708.522.878 1.614.989 3.628c-1.786 0-2.694.016-3.264.586C13 9.172 13 10.114 13 12s0 2.828.586 3.414c.57.57 1.478.586 3.264.586c-.111 2.014-.281 3.106-.989 3.628a2.2 2.2 0 0 1-.54.29c-.997.357-2.184-.465-4.558-2.11c-.601-.416-.902-.625-1.238-.746a3 3 0 0 0-.211-.067c-.344-.092-.704-.092-1.425-.092c-2.017 0-3.025 0-3.789-.636a3 3 0 0 1-.419-.43c-.621-.79-.64-1.71-.678-3.552a14 14 0 0 1 0-.57" opacity=".5"></svg:path>`,
})
export class SolarMutedBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMutedLineDuotoneIcon],svg[solar-muted-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M1.535 10.971c.073-1.208.11-1.813.424-2.394a3.2 3.2 0 0 1 1.38-1.3C3.94 7 4.627 7 6 7c.512 0 .768 0 1.016-.042a3 3 0 0 0 .712-.214c.23-.101.444-.242.871-.524l.22-.144C11.36 4.399 12.632 3.56 13.7 3.925c.205.07.403.17.58.295c.922.648.993 2.157 1.133 5.174A68 68 0 0 1 15.5 12c0 .532-.035 1.488-.087 2.605c-.14 3.018-.21 4.526-1.133 5.175a2.3 2.3 0 0 1-.58.295c-1.067.364-2.339-.474-4.882-2.151L8.6 17.78c-.427-.282-.64-.423-.871-.525a3 3 0 0 0-.712-.213C6.768 17 6.512 17 6 17c-1.374 0-2.06 0-2.66-.277a3.2 3.2 0 0 1-1.381-1.3c-.314-.582-.35-1.186-.424-2.395A17 17 0 0 1 1.5 12c0-.323.013-.671.035-1.029Z"></svg:path><svg:path stroke-linecap="round" d="m22 10l-4 4m0-4l4 4" opacity=".5"></svg:path></svg:g>`,
})
export class SolarMutedLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarNotebookBoldDuotoneIcon],svg[solar-notebook-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 8c0-2.828 0-4.243.879-5.121C4.757 2 6.172 2 9 2h6c2.828 0 4.243 0 5.121.879C21 3.757 21 5.172 21 8v8c0 2.828 0 4.243-.879 5.121C19.243 22 17.828 22 15 22H9c-2.828 0-4.243 0-5.121-.879C3 20.243 3 18.828 3 16z" opacity=".5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M8.75 2.012v20h-1.5v-20zM1.25 8A.75.75 0 0 1 2 7.25h2a.75.75 0 0 1 0 1.5H2A.75.75 0 0 1 1.25 8m0 4a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75m0 4a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M10.75 6.5a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1-.75-.75m0 3.5a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1-.75-.75"></svg:path>`,
})
export class SolarNotebookBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarNotebookBookmarkBoldDuotoneIcon],svg[solar-notebook-bookmark-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14.25 4.48v3.057c0 .111 0 .27.02.406a.94.94 0 0 0 .445.683a.96.96 0 0 0 .783.072c.13-.04.272-.108.378-.159L17 8.005l1.124.534c.106.05.248.119.378.16a.96.96 0 0 0 .783-.073a.94.94 0 0 0 .444-.683c.021-.136.021-.295.021-.406V3.031q.17-.008.332-.013C21.154 2.98 22 3.86 22 4.933v11.21c0 1.112-.906 2.01-2.015 2.08c-.97.06-2.108.179-2.985.41c-1.082.286-1.99 1.068-3.373 1.436c-.626.167-1.324.257-1.627.323V5.174c.32-.079 1.382-.203 1.674-.371q.277-.162.576-.323m5.478 8.338a.75.75 0 0 1-.546.91l-4 1a.75.75 0 0 1-.364-1.456l4-1a.75.75 0 0 1 .91.546" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M18.25 3.151c-.62.073-1.23.18-1.75.336a8 8 0 0 0-.75.27v3.182l.75-.356l.008-.005a1.1 1.1 0 0 1 .492-.13q.071 0 .138.01c.175.029.315.1.354.12l.009.005l.749.356z"></svg:path><svg:path fill="currentColor" d="M12 5.214c-.334-.064-1.057-.161-1.718-.339C8.938 4.515 8.05 3.765 7 3.487c-.887-.234-2.041-.352-3.018-.412C2.886 3.007 2 3.9 2 4.998v11.146c0 1.11.906 2.01 2.015 2.079c.97.06 2.108.179 2.985.41c.486.129 1.216.431 1.873.726c1.005.451 2.052.797 3.127 1.034z" opacity=".5"></svg:path><svg:path fill="currentColor" d="M4.273 12.818a.75.75 0 0 1 .91-.545l4 1a.75.75 0 1 1-.365 1.455l-4-1a.75.75 0 0 1-.545-.91m.909-4.545a.75.75 0 1 0-.364 1.455l4 1a.75.75 0 0 0 .364-1.455z"></svg:path>`,
})
export class SolarNotebookBookmarkBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarNotebookBookmarkLineDuotoneIcon],svg[solar-notebook-bookmark-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="m20.082 3.018l.026.75zm-3.582.47l-.215-.719zm-2.826 1.315l-.376-.65zM3.982 3.075l-.046.749zM7 3.488l.191-.726zm3.282 1.388l-.35.663zm3.346 15.193l.352.662zM17 18.634l-.191-.726zm2.985-.411l.047.749zm-9.613 1.846l-.352.662zM7 18.634l.191-.726zm-2.985-.411l-.047.749zm-1.265-2.08V4.999h-1.5v11.146zm20 0V4.934h-1.5v11.21zM20.056 2.269c-1.139.04-2.626.158-3.771.501l.43 1.437c.95-.284 2.274-.4 3.393-.439zm-3.771.501c-.995.298-2.114.88-2.987 1.385l.752 1.298c.85-.492 1.845-1 2.665-1.246zM3.936 3.824c.966.059 2.06.174 2.873.389l.382-1.45c-.96-.254-2.176-.376-3.163-.437zm2.873.389c.962.254 2.146.81 3.123 1.326l.7-1.326c-.995-.527-2.304-1.15-3.44-1.45zM13.98 20.73c.991-.528 2.219-1.11 3.211-1.372l-.382-1.45c-1.17.308-2.526.961-3.534 1.499zm3.211-1.372c.803-.212 1.882-.328 2.841-.388l-.094-1.497c-.98.062-2.179.183-3.13.434zm-6.466.048c-1.008-.537-2.363-1.19-3.534-1.499l-.382 1.45c.992.263 2.22.845 3.21 1.373zm-3.534-1.499c-.95-.25-2.15-.372-3.13-.434l-.093 1.497c.959.06 2.038.176 2.84.388zm14.059-1.764c0 .686-.568 1.284-1.312 1.33l.094 1.497c1.474-.092 2.718-1.291 2.718-2.827zm1.5-11.21c0-1.464-1.165-2.719-2.694-2.666l.052 1.5c.615-.022 1.142.484 1.142 1.165zm-21.5 11.21c0 1.536 1.244 2.735 2.718 2.828l.094-1.498c-.744-.046-1.312-.645-1.312-1.33zm12.025 3.264a2.72 2.72 0 0 1-2.55 0l-.705 1.323a4.22 4.22 0 0 0 3.96 0zm.023-15.254a2.77 2.77 0 0 1-2.665.059l-.701 1.326a4.27 4.27 0 0 0 4.118-.087zM2.75 4.998c0-.697.552-1.213 1.186-1.174l.092-1.498C2.47 2.231 1.25 3.5 1.25 4.998z"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M12 5.854V21" opacity=".5"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m5 9l4 1m-4 3l4 1m10-1l-4 1" opacity=".5"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M19 5.5v4.01c0 .276 0 .414-.095.47s-.224-.007-.484-.13l-1.242-.59c-.088-.042-.132-.062-.179-.062s-.091.02-.179.062l-1.242.59c-.26.123-.39.185-.484.13C15 9.923 15 9.785 15 9.51V6.95"></svg:path></svg:g>`,
})
export class SolarNotebookBookmarkLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarNotebookLineDuotoneIcon],svg[solar-notebook-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M3 8c0-2.828 0-4.243.879-5.121C4.757 2 6.172 2 9 2h6c2.828 0 4.243 0 5.121.879C21 3.757 21 5.172 21 8v8c0 2.828 0 4.243-.879 5.121C19.243 22 17.828 22 15 22H9c-2.828 0-4.243 0-5.121-.879C3 20.243 3 18.828 3 16z"></svg:path><svg:path stroke-linecap="round" d="M8 2.5V22M2 12h2m-2 4h2M2 8h2" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="M11.5 6.5h5m-5 3.5h5"></svg:path></svg:g>`,
})
export class SolarNotebookLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarNotebookMinimalisticBoldDuotoneIcon],svg[solar-notebook-minimalistic-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 16.144V4.998c0-1.098.886-1.99 1.982-1.923c.977.06 2.131.179 3.018.413c1.05.276 2.296.866 3.282 1.388A3.5 3.5 0 0 0 12 5.275v15.2a3.46 3.46 0 0 1-1.628-.406c-1-.532-2.29-1.15-3.372-1.435c-.877-.232-2.016-.35-2.985-.411C2.906 18.153 2 17.255 2 16.143" clip-rule="evenodd" opacity=".5"></svg:path><svg:path fill="currentColor" d="M22 16.144V4.934c0-1.073-.846-1.953-1.918-1.916c-1.129.04-2.535.156-3.582.47c-.908.271-1.965.816-2.826 1.315A3.5 3.5 0 0 1 12 5.275v15.2c.56 0 1.121-.136 1.628-.406c1-.532 2.29-1.15 3.372-1.435c.877-.232 2.016-.35 2.985-.411c1.109-.07 2.015-.968 2.015-2.08"></svg:path>`,
})
export class SolarNotebookMinimalisticBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarNotebookMinimalisticLineDuotoneIcon],svg[solar-notebook-minimalistic-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="m20.082 3.018l.026.75zm-3.582.47l-.215-.719zm-2.826 1.315l-.376-.65zM3.982 3.075l-.046.749zM7 3.488l.191-.726zm3.282 1.388l-.35.663zm3.346 15.193l.352.662zM17 18.634l-.191-.726zm2.985-.411l.047.749zm-9.613 1.846l-.352.662zM7 18.634l.191-.726zm-2.985-.411l-.047.749zm-1.265-2.08V4.999h-1.5v11.146zm20 0V4.934h-1.5v11.21zM20.056 2.269c-1.139.04-2.626.158-3.771.501l.43 1.437c.95-.284 2.274-.4 3.393-.439zm-3.771.501c-.995.298-2.114.88-2.987 1.385l.752 1.298c.85-.492 1.845-1 2.665-1.246zM3.936 3.824c.966.059 2.06.174 2.873.389l.382-1.45c-.96-.254-2.176-.376-3.163-.437zm2.873.389c.962.254 2.146.81 3.123 1.326l.7-1.326c-.995-.527-2.304-1.15-3.44-1.45zM13.98 20.73c.991-.528 2.219-1.11 3.211-1.372l-.382-1.45c-1.17.308-2.526.961-3.534 1.499zm3.211-1.372c.803-.212 1.882-.328 2.841-.388l-.094-1.497c-.98.062-2.179.183-3.13.434zm-6.466.048c-1.008-.537-2.363-1.19-3.534-1.499l-.382 1.45c.992.263 2.22.845 3.21 1.373zm-3.534-1.499c-.95-.25-2.15-.372-3.13-.434l-.093 1.497c.959.06 2.038.176 2.84.388zm14.059-1.764c0 .686-.568 1.284-1.312 1.33l.094 1.497c1.474-.092 2.718-1.291 2.718-2.827zm1.5-11.21c0-1.464-1.165-2.719-2.694-2.666l.052 1.5c.615-.022 1.142.484 1.142 1.165zm-21.5 11.21c0 1.536 1.244 2.735 2.718 2.828l.094-1.498c-.744-.046-1.312-.645-1.312-1.33zm12.025 3.264a2.72 2.72 0 0 1-2.55 0l-.705 1.323a4.22 4.22 0 0 0 3.96 0zm.023-15.254a2.77 2.77 0 0 1-2.665.059l-.701 1.326a4.27 4.27 0 0 0 4.118-.087zM2.75 4.998c0-.697.552-1.213 1.186-1.174l.092-1.498C2.47 2.231 1.25 3.5 1.25 4.998z"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M12 5.5v15" opacity=".5"></svg:path></svg:g>`,
})
export class SolarNotebookMinimalisticLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarNotebookSquareBoldDuotoneIcon],svg[solar-notebook-square-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 9c0-3.771 0-5.657 1.172-6.828S6.229 1 10 1h4c3.771 0 5.657 0 6.828 1.172S22 5.229 22 9v4c0 3.771 0 5.657-1.172 6.828S17.771 21 14 21h-4c-3.771 0-5.657 0-6.828-1.172S2 16.771 2 13z" opacity=".5"></svg:path><svg:path fill="currentColor" d="M6 12.91V7.497c0-.823.665-1.495 1.487-1.435c.513.037 1.069.101 1.513.21c.824.201 1.851.7 2.465 1.022l.035.018v8.415l-.007-.004c-.61-.321-1.656-.832-2.493-1.037c-.438-.107-.984-.17-1.49-.208c-.83-.062-1.51-.733-1.51-1.566m6.5 2.814l.007-.004c.61-.321 1.656-.832 2.493-1.037c.438-.107.984-.17 1.49-.208c.83-.062 1.51-.733 1.51-1.566V7.45c0-.806-.638-1.469-1.443-1.43c-.616.031-1.317.1-1.857.25c-.731.203-1.625.68-2.178 1l-.022.012z"></svg:path>`,
})
export class SolarNotebookSquareBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarNotebookSquareLineDuotoneIcon],svg[solar-notebook-square-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="m16.557 6.022l-.037-.75zM14.7 6.27l-.2-.723zm-2.178 1l-.376-.65zM7.487 6.06l-.055.748zM9 6.271l-.178.728zm2.465 1.022l-.349.664zm1.042 8.43l.35.663zM15 14.684l-.178-.728zm1.49-.208l.056.748zm-4.997 1.245l-.35.664zM9 14.685l.178-.728zm-1.49-.208l-.056.748zm-.76-1.566V7.497h-1.5v5.414zm12 0V7.45h-1.5v5.46zm-2.23-7.638c-.63.03-1.397.102-2.02.275l.4 1.446c.458-.127 1.09-.193 1.693-.223zm-2.02.275c-.832.23-1.798.752-2.354 1.073l.752 1.299c.55-.32 1.372-.751 2.002-.926zM7.432 6.81c.5.037 1.007.097 1.39.19l.356-1.457c-.505-.123-1.11-.19-1.636-.229zm1.39.19c.726.178 1.682.637 2.294.958l.697-1.328c-.615-.322-1.713-.861-2.635-1.087zm4.035 9.387c.61-.321 1.583-.792 2.321-.972l-.356-1.457c-.935.228-2.054.78-2.664 1.102zm2.321-.972c.377-.092.875-.152 1.368-.189l-.112-1.496c-.52.039-1.114.106-1.612.228zm-3.336-.355c-.61-.322-1.729-.874-2.664-1.102l-.356 1.457c.738.18 1.711.65 2.321.972zm-2.664-1.102c-.498-.122-1.093-.19-1.612-.228l-.112 1.496c.493.037.99.097 1.368.189zm8.072-1.046c0 .405-.34.783-.816.818l.112 1.496c1.186-.088 2.204-1.053 2.204-2.314zm1.5-5.46c0-1.194-.958-2.24-2.23-2.178l.073 1.498c.338-.017.657.263.657.68zm-13.5 5.46c0 1.26 1.018 2.226 2.204 2.314l.112-1.496c-.476-.035-.816-.413-.816-.818zm6.908 2.148a.34.34 0 0 1-.316 0l-.699 1.327a1.84 1.84 0 0 0 1.714 0zm-.012-8.438a.35.35 0 0 1-.333.008l-.697 1.328a1.85 1.85 0 0 0 1.782-.037zm-5.396.876c0-.427.333-.714.682-.688l.11-1.496c-1.294-.095-2.292.962-2.292 2.184z"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M12 7.585V16"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M2 9c0-3.771 0-5.657 1.172-6.828S6.229 1 10 1h4c3.771 0 5.657 0 6.828 1.172S22 5.229 22 9v4c0 3.771 0 5.657-1.172 6.828S17.771 21 14 21h-4c-3.771 0-5.657 0-6.828-1.172S2 16.771 2 13z" opacity=".5"></svg:path></svg:g>`,
})
export class SolarNotebookSquareLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarNotesBoldDuotoneIcon],svg[solar-notes-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m20.83 10.715l-.518 1.932c-.605 2.255-.907 3.383-1.592 4.114a4 4 0 0 1-2.01 1.161q-.145.034-.295.052c-.915.113-2.032-.186-4.064-.73c-2.255-.605-3.383-.907-4.114-1.592a4 4 0 0 1-1.161-2.011c-.228-.976.074-2.103.679-4.358l.517-1.932l.244-.905c.455-1.666.761-2.583 1.348-3.21a4 4 0 0 1 2.01-1.16c.976-.228 2.104.074 4.36.679c2.254.604 3.382.906 4.113 1.59a4 4 0 0 1 1.161 2.012c.228.976-.075 2.103-.679 4.358m-9.778-.91a.75.75 0 0 1 .919-.53l4.83 1.295a.75.75 0 1 1-.389 1.448l-4.83-1.294a.75.75 0 0 1-.53-.918m-.776 2.898a.75.75 0 0 1 .918-.53l2.898.777a.75.75 0 1 1-.388 1.448l-2.898-.776a.75.75 0 0 1-.53-.919" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M16.415 17.975a4 4 0 0 1-1.068 1.677c-.731.685-1.859.987-4.114 1.591s-3.383.907-4.358.679a4 4 0 0 1-2.011-1.161c-.685-.731-.988-1.859-1.592-4.114l-.517-1.932c-.605-2.255-.907-3.383-.68-4.358a4 4 0 0 1 1.162-2.011c.731-.685 1.859-.987 4.114-1.592q.638-.172 1.165-.309l-.244.906l-.517 1.932c-.605 2.255-.907 3.382-.68 4.358a4 4 0 0 0 1.162 2.011c.731.685 1.859.987 4.114 1.592c2.032.544 3.149.843 4.064.73" opacity=".5"></svg:path>`,
})
export class SolarNotesBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarNotesLineDuotoneIcon],svg[solar-notes-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="m20.312 12.647l.517-1.932c.604-2.255.907-3.382.68-4.358a4 4 0 0 0-1.162-2.011c-.731-.685-1.859-.987-4.114-1.591c-2.255-.605-3.383-.907-4.358-.68a4 4 0 0 0-2.011 1.162c-.587.626-.893 1.543-1.348 3.209l-.244.905l-.517 1.932c-.605 2.255-.907 3.382-.68 4.358a4 4 0 0 0 1.162 2.011c.731.685 1.859.987 4.114 1.592c2.032.544 3.149.843 4.064.73q.15-.019.294-.052a4 4 0 0 0 2.011-1.16c.685-.732.987-1.86 1.592-4.115Z"></svg:path><svg:path d="M16.415 17.974a4 4 0 0 1-1.068 1.678c-.731.685-1.859.987-4.114 1.591s-3.383.907-4.358.679a4 4 0 0 1-2.011-1.161c-.685-.731-.988-1.859-1.592-4.114l-.517-1.932c-.605-2.255-.907-3.383-.68-4.358a4 4 0 0 1 1.162-2.011c.731-.685 1.859-.987 4.114-1.592q.638-.172 1.165-.309" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="m11.777 10l4.83 1.294"></svg:path><svg:path stroke-linecap="round" d="m11 12.898l2.898.776" opacity=".5"></svg:path></svg:g>`,
})
export class SolarNotesLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarNotesMinimalisticBoldDuotoneIcon],svg[solar-notes-minimalistic-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20.312 12.647l.517-1.932c.604-2.255.907-3.382.68-4.358a4 4 0 0 0-1.162-2.011c-.731-.685-1.859-.987-4.114-1.591c-2.255-.605-3.383-.907-4.358-.68a4 4 0 0 0-2.011 1.162c-.587.626-.893 1.543-1.348 3.209l-.244.905l-.517 1.932c-.605 2.255-.907 3.382-.68 4.358a4 4 0 0 0 1.162 2.011c.731.685 1.859.987 4.114 1.592c2.032.544 3.149.843 4.064.73q.15-.019.294-.052a4 4 0 0 0 2.011-1.16c.685-.732.987-1.86 1.592-4.115"></svg:path><svg:path fill="currentColor" d="M16.415 17.975a4 4 0 0 1-1.068 1.677c-.731.685-1.859.987-4.114 1.591s-3.383.907-4.358.679a4 4 0 0 1-2.011-1.161c-.685-.731-.988-1.859-1.592-4.114l-.517-1.932c-.605-2.255-.907-3.383-.68-4.358a4 4 0 0 1 1.162-2.011c.731-.685 1.859-.987 4.114-1.592q.638-.172 1.165-.309l-.244.906l-.517 1.932c-.605 2.255-.907 3.382-.68 4.358a4 4 0 0 0 1.162 2.011c.731.685 1.859.987 4.114 1.592c2.032.544 3.149.843 4.064.73" opacity=".5"></svg:path>`,
})
export class SolarNotesMinimalisticBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarNotesMinimalisticLineDuotoneIcon],svg[solar-notes-minimalistic-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="m20.312 12.647l.517-1.932c.604-2.255.907-3.382.68-4.358a4 4 0 0 0-1.162-2.011c-.731-.685-1.859-.987-4.114-1.591c-2.255-.605-3.383-.907-4.358-.68a4 4 0 0 0-2.011 1.162c-.587.626-.893 1.543-1.348 3.209l-.244.905l-.517 1.932c-.605 2.255-.907 3.382-.68 4.358a4 4 0 0 0 1.162 2.011c.731.685 1.859.987 4.114 1.592c2.032.544 3.149.843 4.064.73q.15-.019.294-.052a4 4 0 0 0 2.011-1.16c.685-.732.987-1.86 1.592-4.115Z"></svg:path><svg:path d="M16.415 17.974a4 4 0 0 1-1.068 1.678c-.731.685-1.859.987-4.114 1.591s-3.383.907-4.358.679a4 4 0 0 1-2.011-1.161c-.685-.731-.988-1.859-1.592-4.114l-.517-1.932c-.605-2.255-.907-3.383-.68-4.358a4 4 0 0 1 1.162-2.011c.731-.685 1.859-.987 4.114-1.592q.638-.172 1.165-.309" opacity=".5"></svg:path></svg:g>`,
})
export class SolarNotesMinimalisticLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarNotificationLinesRemoveBoldDuotoneIcon],svg[solar-notification-lines-remove-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 13.25a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5zm0 3.5a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M17.5 11c-2.121 0-3.182 0-3.841-.659S13 8.621 13 6.5s0-3.182.659-3.841S15.379 2 17.5 2s3.182 0 3.841.659S22 4.379 22 6.5s0 3.182-.659 3.841S19.621 11 17.5 11m-2.53-7.03a.75.75 0 0 1 1.06 0l1.47 1.47l1.47-1.47a.75.75 0 1 1 1.06 1.06L18.56 6.5l1.47 1.47a.75.75 0 0 1-1.06 1.06L17.5 7.56l-1.47 1.47a.75.75 0 1 1-1.06-1.06l1.47-1.47l-1.47-1.47a.75.75 0 0 1 0-1.06" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M20.536 20.536C22 19.07 22 16.714 22 12c0-1.358 0-2.52-.035-3.522c-.058.884-.213 1.452-.624 1.863c-.659.659-1.72.659-3.841.659s-3.182 0-3.841-.659S13 8.621 13 6.5s0-3.182.659-3.841c.411-.411.979-.566 1.863-.624C14.52 2 13.358 2 12 2C7.286 2 4.929 2 3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465" opacity=".5"></svg:path>`,
})
export class SolarNotificationLinesRemoveBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarNotificationLinesRemoveLineDuotoneIcon],svg[solar-notification-lines-remove-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M22 10.5V12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2h1.5" opacity=".5"></svg:path><svg:path d="M7 14h9m-9 3.5h6M22 2l-5 5m0-5l5 5"></svg:path></svg:g>`,
})
export class SolarNotificationLinesRemoveLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarNotificationRemoveBoldDuotoneIcon],svg[solar-notification-remove-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M17.5 11c-2.121 0-3.182 0-3.841-.659S13 8.621 13 6.5s0-3.182.659-3.841S15.379 2 17.5 2s3.182 0 3.841.659S22 4.379 22 6.5s0 3.182-.659 3.841S19.621 11 17.5 11m-2.53-7.03a.75.75 0 0 1 1.06 0l1.47 1.47l1.47-1.47a.75.75 0 1 1 1.06 1.06L18.56 6.5l1.47 1.47a.75.75 0 0 1-1.06 1.06L17.5 7.56l-1.47 1.47a.75.75 0 1 1-1.06-1.06l1.47-1.47l-1.47-1.47a.75.75 0 0 1 0-1.06" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M20.536 20.536C22 19.07 22 16.714 22 12c0-1.358 0-2.52-.035-3.522c-.058.884-.213 1.452-.624 1.863c-.659.659-1.72.659-3.841.659s-3.182 0-3.841-.659S13 8.621 13 6.5s0-3.182.659-3.841c.411-.411.979-.566 1.863-.624C14.52 2 13.358 2 12 2C7.286 2 4.929 2 3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465" opacity=".5"></svg:path>`,
})
export class SolarNotificationRemoveBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarNotificationRemoveLineDuotoneIcon],svg[solar-notification-remove-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M22 10.5V12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2h1.5" opacity=".5"></svg:path><svg:path d="m22 2l-5 5m0-5l5 5"></svg:path></svg:g>`,
})
export class SolarNotificationRemoveLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarNotificationUnreadBoldDuotoneIcon],svg[solar-notification-unread-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12" opacity=".5"></svg:path><svg:path fill="currentColor" d="M22 5a3 3 0 1 1-6 0a3 3 0 0 1 6 0"></svg:path>`,
})
export class SolarNotificationUnreadBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarNotificationUnreadLineDuotoneIcon],svg[solar-notification-unread-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M22 10.5V12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2h1.5" opacity=".5"></svg:path><svg:circle cx="19" cy="5" r="3"></svg:circle></svg:g>`,
})
export class SolarNotificationUnreadLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarNotificationUnreadLinesBoldDuotoneIcon],svg[solar-notification-unread-lines-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12" opacity=".5"></svg:path><svg:path fill="currentColor" d="M7 16.75a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5zm0-3.5a.75.75 0 0 0 0 1.5h9a.75.75 0 0 0 0-1.5zM22 5a3 3 0 1 1-6 0a3 3 0 0 1 6 0"></svg:path>`,
})
export class SolarNotificationUnreadLinesBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarNotificationUnreadLinesLineDuotoneIcon],svg[solar-notification-unread-lines-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M22 10.5V12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2h1.5" opacity=".5"></svg:path><svg:circle cx="19" cy="5" r="3"></svg:circle><svg:path stroke-linecap="round" d="M7 14h9m-9 3.5h6"></svg:path></svg:g>`,
})
export class SolarNotificationUnreadLinesLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarObjectScanBoldDuotoneIcon],svg[solar-object-scan-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.944 1.25H10a.75.75 0 0 1 0 1.5c-1.907 0-3.261.002-4.29.14c-1.005.135-1.585.389-2.008.812S3.025 4.705 2.89 5.71c-.138 1.029-.14 2.383-.14 4.29a.75.75 0 0 1-1.5 0v-.056c0-1.838 0-3.294.153-4.433c.158-1.172.49-2.121 1.238-2.87c.749-.748 1.698-1.08 2.87-1.238c1.14-.153 2.595-.153 4.433-.153m8.345 1.64c-1.027-.138-2.382-.14-4.289-.14a.75.75 0 0 1 0-1.5h.056c1.838 0 3.294 0 4.433.153c1.172.158 2.121.49 2.87 1.238c.748.749 1.08 1.698 1.238 2.87c.153 1.14.153 2.595.153 4.433V10a.75.75 0 0 1-1.5 0c0-1.907-.002-3.261-.14-4.29c-.135-1.005-.389-1.585-.812-2.008s-1.003-.677-2.009-.812M2 13.25a.75.75 0 0 1 .75.75c0 1.907.002 3.262.14 4.29c.135 1.005.389 1.585.812 2.008s1.003.677 2.009.812c1.028.138 2.382.14 4.289.14a.75.75 0 0 1 0 1.5h-.056c-1.838 0-3.294 0-4.433-.153c-1.172-.158-2.121-.49-2.87-1.238c-.748-.749-1.08-1.698-1.238-2.87c-.153-1.14-.153-2.595-.153-4.433V14a.75.75 0 0 1 .75-.75m20 0a.75.75 0 0 1 .75.75v.056c0 1.838 0 3.294-.153 4.433c-.158 1.172-.49 2.121-1.238 2.87c-.749.748-1.698 1.08-2.87 1.238c-1.14.153-2.595.153-4.433.153H14a.75.75 0 0 1 0-1.5c1.907 0 3.262-.002 4.29-.14c1.005-.135 1.585-.389 2.008-.812s.677-1.003.812-2.009c.138-1.027.14-2.382.14-4.289a.75.75 0 0 1 .75-.75" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M10 5.5h4c1.886 0 2.828 0 3.414.586c.55.55.584 1.414.586 3.078V14.5c0 1.886 0 2.828-.586 3.414S15.886 18.5 14 18.5h-4c-1.886 0-2.828 0-3.414-.586S6 16.386 6 14.5V9.164c.002-1.664.036-2.528.586-3.078C7.172 5.5 8.114 5.5 10 5.5" opacity=".5"></svg:path><svg:path fill="currentColor" d="M18.37 9.3q-.178-.067-.37-.136c-1.833-.778-6.8-1.868-12 0q-.192.067-.37.136a10 10 0 0 0-1.553.744a6 6 0 0 0-.54.365l-.01.009l-.004.003l-.002.002H3.52a.75.75 0 0 0 .957 1.156l.01-.008l.063-.047q.09-.066.298-.193A8.5 8.5 0 0 1 6.17 10.7c1.214-.467 3.123-.95 5.831-.95s4.617.483 5.83.95a8.5 8.5 0 0 1 1.322.63a5 5 0 0 1 .36.24l.011.009a.75.75 0 0 0 .957-1.155L20 11c.48-.576.479-.577.479-.577l-.002-.002l-.004-.003l-.01-.009a3 3 0 0 0-.141-.105a6 6 0 0 0-.399-.26A10 10 0 0 0 18.37 9.3"></svg:path>`,
})
export class SolarObjectScanBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarObjectScanLineDuotoneIcon],svg[solar-object-scan-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M22 14c0 3.771 0 5.657-1.172 6.828S17.771 22 14 22m-4 0c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14m8-12C6.229 2 4.343 2 3.172 3.172S2 6.229 2 10m12-8c3.771 0 5.657 0 6.828 1.172S22 6.229 22 10" opacity=".5"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M4 11.5s2.4-2 8-2s8 2 8 2"></svg:path><svg:path fill="currentColor" d="M5.25 10a.75.75 0 0 0 1.5 0zm12.164-3.914l-.53.53zM10 6.25h4v-1.5h-4zM6.75 10v-.5h-1.5v.5zm10.5-.5v.5h1.5v-.5zM14 6.25c.964 0 1.612.002 2.095.067c.461.062.659.169.789.3l1.06-1.062c-.455-.455-1.022-.64-1.65-.725c-.606-.082-1.372-.08-2.294-.08zm4.75 3.25c0-.922.002-1.688-.08-2.294c-.084-.628-.27-1.195-.726-1.65l-1.06 1.06c.13.13.237.328.3.79c.064.482.066 1.13.066 2.094zM10 4.75c-.922 0-1.688-.002-2.294.08c-.628.084-1.195.27-1.65.725l1.06 1.061c.13-.13.328-.237.79-.3c.482-.064 1.13-.066 2.094-.066zM6.75 9.5c0-.964.002-1.612.067-2.095c.062-.461.169-.659.3-.789l-1.062-1.06c-.455.455-.64 1.022-.725 1.65c-.082.606-.08 1.372-.08 2.294z" opacity=".7"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M18 10.5v4c0 1.886 0 2.828-.586 3.414S15.886 18.5 14 18.5h-4c-1.886 0-2.828 0-3.414-.586S6 16.386 6 14.5V10" opacity=".7"></svg:path></svg:g>`,
})
export class SolarObjectScanLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarOutgoingCallBoldDuotoneIcon],svg[solar-outgoing-call-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m15 9l4-4m0 0v3m0-3h-3"></svg:path><svg:path fill="currentColor" d="m15.556 14.548l-.455.48s-1.083 1.139-4.038-1.972s-1.872-4.25-1.872-4.25l.287-.303c.706-.744.773-1.938.156-2.81L8.374 3.91C7.61 2.83 6.135 2.688 5.26 3.609L3.691 5.26c-.433.457-.723 1.048-.688 1.705c.09 1.68.808 5.293 4.812 9.51c4.247 4.47 8.232 4.648 9.861 4.487c.516-.05.964-.329 1.325-.709l1.42-1.496c.96-1.01.69-2.74-.538-3.446l-1.91-1.1c-.806-.463-1.787-.327-2.417.336" opacity=".5"></svg:path></svg:g>`,
})
export class SolarOutgoingCallBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarOutgoingCallLineDuotoneIcon],svg[solar-outgoing-call-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m15 9l4-4m0 0v3m0-3h-3"></svg:path><svg:path fill="currentColor" d="m15.1 15.027l-.543-.516zm.456-.48l.544.517zm2.417-.335l-.374.65zm1.91 1.1l-.374.65zm.539 3.446l.543.517zm-1.42 1.496l-.545-.517zm-1.326.71l.074.745zm-9.86-4.489l.543-.516zm-4.813-9.51l-.749.041zm6.475 1.538l.543.517zm.156-2.81l.613-.433zM8.374 3.91l-.613.433zM5.26 3.609l.544.516zM3.691 5.26l-.543-.516zm7.372 7.795l.544-.517zm4.582 2.488l.455-.48l-1.088-1.033l-.455.48zm1.954-.682l1.91 1.1l.749-1.3l-1.911-1.1zm2.279 3.38l-1.42 1.495l1.087 1.034l1.42-1.496zm-2.275 1.975c-1.435.141-5.18.02-9.244-4.258l-1.087 1.033c4.429 4.663 8.654 4.898 10.478 4.717zm-9.244-4.258c-3.876-4.081-4.526-7.523-4.607-9.033l-1.498.08c.1 1.85.884 5.634 5.018 9.986zm1.376-6.637l.286-.302l-1.087-1.033l-.287.302zm.512-4.062L8.986 3.477l-1.225.866l1.26 1.783zm-5.53-2.168L3.149 4.745l1.088 1.033l1.57-1.653zm4.474 5.713a38 38 0 0 0-.545-.515l-.002.002l-.003.003l-.05.058a1.6 1.6 0 0 0-.23.427c-.098.275-.15.639-.084 1.093c.13.892.715 2.091 2.242 3.7l1.088-1.034c-1.428-1.503-1.78-2.428-1.846-2.884c-.032-.22 0-.335.013-.372l.008-.019l-.028.037l-.018.02s-.002 0-.545-.516m1.328 4.767c1.523 1.604 2.673 2.234 3.55 2.377c.451.073.816.014 1.092-.095a1.5 1.5 0 0 0 .421-.25l.036-.034l.014-.014l.007-.006l.003-.003l.001-.002s.002-.001-.542-.518c-.544-.516-.543-.517-.543-.518l.002-.001l.002-.003l.005-.005l.01-.01l.037-.032q.015-.008-.004.001c-.02.008-.11.04-.3.009c-.402-.066-1.27-.42-2.703-1.929zM8.986 3.477C7.972 2.043 5.944 1.8 4.718 3.092l1.087 1.033c.523-.55 1.444-.507 1.956.218zM3.752 6.926c-.022-.4.152-.8.484-1.148L3.148 4.745c-.536.564-.943 1.347-.894 2.261zm14.705 12.811c-.279.294-.57.452-.854.48l.147 1.492c.747-.073 1.352-.472 1.795-.939zM10.021 9.02c.968-1.019 1.036-2.613.226-3.76l-1.225.866c.422.597.357 1.392-.088 1.86zm9.488 6.942c.821.473.982 1.635.369 2.28l1.087 1.033c1.305-1.374.925-3.673-.707-4.613zm-3.409-.898c.385-.406.986-.497 1.499-.202l.748-1.3c-1.099-.632-2.46-.45-3.335.47z" opacity=".5"></svg:path></svg:g>`,
})
export class SolarOutgoingCallLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarOutgoingCallRoundedBoldDuotoneIcon],svg[solar-outgoing-call-rounded-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m15 9l4-4m0 0v3m0-3h-3"></svg:path><svg:path fill="currentColor" d="m10.038 5.316l.649 1.163c.585 1.05.35 2.426-.572 3.349c0 0-1.12 1.119.91 3.148c2.027 2.027 3.146.91 3.147.91c.923-.923 2.3-1.158 3.349-.573l1.163.65c1.585.884 1.772 3.106.379 4.5c-.837.836-1.863 1.488-2.996 1.53c-1.908.073-5.149-.41-8.4-3.66c-3.25-3.251-3.733-6.492-3.66-8.4c.043-1.133.694-2.159 1.53-2.996c1.394-1.393 3.616-1.206 4.5.38" opacity=".5"></svg:path></svg:g>`,
})
export class SolarOutgoingCallRoundedBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarOutgoingCallRoundedLineDuotoneIcon],svg[solar-outgoing-call-rounded-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="m15 9l4-4m0 0v3m0-3h-3"></svg:path><svg:path d="m10.038 5.316l.649 1.163c.585 1.05.35 2.426-.572 3.349q0 0 0 0s-1.12 1.119.91 3.148c2.027 2.027 3.146.91 3.147.91q0 0 0 0c.923-.923 2.3-1.158 3.349-.573l1.163.65c1.585.884 1.772 3.106.379 4.5c-.837.836-1.863 1.488-2.996 1.53c-1.908.073-5.149-.41-8.4-3.66c-3.25-3.251-3.733-6.492-3.66-8.4c.043-1.133.694-2.159 1.53-2.996c1.394-1.393 3.616-1.206 4.5.38Z" opacity=".5"></svg:path></svg:g>`,
})
export class SolarOutgoingCallRoundedLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarOvenMittsBoldDuotoneIcon],svg[solar-oven-mitts-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13.298 20.026l6.78-6.63a6.315 6.315 0 0 0 0-9.072c-2.562-2.505-6.716-2.505-9.278 0l-.466.455C9.915 3.152 8.668 1.98 7.214 2c-1.773.027-3.182 1.817-3.147 4l-.033 3.34c-.007.757-.01 1.135-.144 1.47l-.004.011l9.307 9.308z"></svg:path><svg:path fill="currentColor" d="m4.019 16.537l3.569 3.49C8.933 21.341 9.606 22 10.443 22c.814 0 1.473-.624 2.75-1.872l-9.307-9.307c-.136.333-.432.654-1.017 1.29c-.58.63-.869 1.098-.869 1.634c0 .818.673 1.476 2.019 2.792" opacity=".5"></svg:path>`,
})
export class SolarOvenMittsBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarOvenMittsLineDuotoneIcon],svg[solar-oven-mitts-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M10.334 4.78C9.914 3.151 8.668 1.977 7.214 2c-1.773.027-3.182 1.817-3.148 4l-.032 3.34c-.007.757-.01 1.135-.144 1.47c-.134.337-.43.659-1.02 1.301c-.58.63-.87 1.098-.87 1.634c0 .818.673 1.476 2.019 2.792l3.569 3.49C8.933 21.341 9.606 22 10.443 22c.836 0 1.509-.658 2.855-1.974l6.78-6.63a6.314 6.314 0 0 0 0-9.072c-2.562-2.505-6.716-2.505-9.278 0zm0 0l-.962.94"></svg:path><svg:path d="M13.297 20.026L4.02 10.954" opacity=".5"></svg:path></svg:g>`,
})
export class SolarOvenMittsLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarOvenMittsMinimalisticBoldDuotoneIcon],svg[solar-oven-mitts-minimalistic-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m7.588 20.026l-3.57-3.49C2.674 15.222 2 14.564 2 13.747c0-.537.29-1.005.87-1.635c.59-.643.886-.964 1.02-1.3c.133-.336.137-.714.144-1.47L4.066 6c-.034-2.183 1.375-3.973 3.147-4c1.455-.022 2.702 1.152 3.121 2.78l.466-.456c2.562-2.505 6.716-2.505 9.278 0a6.314 6.314 0 0 1 0 9.072l-6.78 6.63C11.952 21.342 11.278 22 10.443 22c-.837 0-1.51-.658-2.855-1.974" clip-rule="evenodd" opacity=".5"></svg:path><svg:path fill="currentColor" d="M7.04 12.86a.75.75 0 1 0-1.048 1.073l4.283 4.187a.75.75 0 0 0 1.048-1.073z"></svg:path>`,
})
export class SolarOvenMittsMinimalisticBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarOvenMittsMinimalisticLineDuotoneIcon],svg[solar-oven-mitts-minimalistic-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M10.334 4.78C9.914 3.151 8.668 1.977 7.214 2c-1.773.027-3.182 1.817-3.148 4l-.032 3.34c-.007.757-.01 1.135-.144 1.47c-.134.337-.43.659-1.02 1.301c-.58.63-.87 1.098-.87 1.634c0 .818.673 1.476 2.019 2.792l3.569 3.49C8.933 21.341 9.606 22 10.443 22c.836 0 1.509-.658 2.855-1.974l6.78-6.63a6.314 6.314 0 0 0 0-9.072c-2.562-2.505-6.716-2.505-9.278 0zm0 0l-.962.94"></svg:path><svg:path d="m10.8 17.584l-4.283-4.187" opacity=".5"></svg:path></svg:g>`,
})
export class SolarOvenMittsMinimalisticLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPaintRollerBoldDuotoneIcon],svg[solar-paint-roller-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 4.5c0-.935 0-1.402.201-1.75a1.5 1.5 0 0 1 .549-.549C7.098 2 7.565 2 8.5 2h7c.935 0 1.402 0 1.75.201a1.5 1.5 0 0 1 .549.549C18 3.098 18 3.565 18 4.5s0 1.402-.201 1.75a1.5 1.5 0 0 1-.549.549C16.902 7 16.435 7 15.5 7h-7c-.935 0-1.402 0-1.75-.201a1.5 1.5 0 0 1-.549-.549C6 5.902 6 5.435 6 4.5M10 16v4c0 .943 0 1.414.293 1.707S11.057 22 12 22s1.414 0 1.707-.293S14 20.943 14 20v-4c0-.943 0-1.414-.293-1.707S12.943 14 12 14s-1.414 0-1.707.293S10 15.057 10 16"></svg:path><svg:path fill="currentColor" d="M19.045 5.25c.455 0 .76 0 .996.016c.23.015.343.042.417.07c.323.128.578.383.705.706c.03.074.056.187.071.417c.016.236.016.541.016.996c0 .837-.01 1.067-.071 1.239a1.25 1.25 0 0 1-.592.687c-.161.086-.387.13-1.215.255l-4.123.618c-.773.116-1.421.213-1.934.358c-.543.152-1.024.38-1.399.816c-.58.674-.644 1.55-.661 2.56v.02C11.465 14 11.71 14 12 14c.295 0 .543 0 .755.009c.018-1.063.117-1.392.298-1.602c.11-.127.277-.242.668-.351c.411-.116.965-.2 1.797-.325l4.196-.63c.65-.097 1.158-.172 1.577-.395a2.75 2.75 0 0 0 1.302-1.513c.158-.447.158-.96.157-1.617V7.43c0-.424 0-.779-.019-1.07a2.8 2.8 0 0 0-.172-.868a2.75 2.75 0 0 0-1.551-1.552a2.8 2.8 0 0 0-.869-.172a18 18 0 0 0-1.07-.019H18v1.5z" opacity=".5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M4.75 4.5a.75.75 0 0 1 .75-.75H6v1.5h-.5a.75.75 0 0 1-.75-.75" clip-rule="evenodd" opacity=".5"></svg:path>`,
})
export class SolarPaintRollerBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPaintRollerLineDuotoneIcon],svg[solar-paint-roller-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m6.75 6.799l-.375.65zm-.549-.549l-.65.375zm11.598 0l.65.375zm-.549.549l.375.65zm0-4.598l.375-.65zm.549.549l.65-.375zM6.75 2.201l-.375-.65zm-.549.549l-.65-.375zm7.506 18.957l-.53-.53zm0-7.414l-.53.53zm-3.414 0l-.53-.53zm0 7.414l.53-.53zm1.712-6.957a.75.75 0 0 0 0-1.5zM8.5 2.75h7v-1.5h-7zm7 3.5h-7v1.5h7zm-7 0c-.481 0-.792 0-1.027-.022c-.225-.02-.307-.055-.348-.078l-.75 1.299c.307.177.633.243.962.273c.32.029.71.028 1.163.028zM5.25 4.5c0 .454 0 .844.028 1.163c.03.329.096.655.273.962l1.3-.75c-.024-.04-.059-.123-.079-.348A13 13 0 0 1 6.75 4.5zm1.875 1.65a.75.75 0 0 1-.275-.275l-1.299.75c.198.342.482.626.824.824zM17.25 4.5c0 .481 0 .792-.022 1.027c-.02.225-.055.307-.079.348l1.3.75c.177-.307.243-.633.273-.962c.029-.32.028-.71.028-1.163zM15.5 7.75c.454 0 .844 0 1.163-.028c.329-.03.655-.096.962-.273l-.75-1.3c-.04.024-.123.059-.348.079a13 13 0 0 1-1.027.022zm1.65-1.875a.75.75 0 0 1-.275.275l.75 1.299a2.25 2.25 0 0 0 .824-.824zM15.5 2.75c.481 0 .792 0 1.027.022c.225.02.307.055.348.078l.75-1.299c-.307-.177-.633-.243-.962-.273c-.32-.029-.71-.028-1.163-.028zm3.25 1.75c0-.454 0-.844-.028-1.163c-.03-.329-.096-.655-.273-.962l-1.3.75c.024.04.058.123.079.348c.021.235.022.546.022 1.027zm-1.875-1.65a.75.75 0 0 1 .274.275l1.3-.75a2.25 2.25 0 0 0-.824-.824zM8.5 1.25c-.454 0-.844 0-1.163.028c-.329.03-.655.096-.962.273l.75 1.3c.04-.024.123-.059.348-.079c.235-.021.546-.022 1.027-.022zM6.75 4.5c0-.481 0-.792.022-1.027c.02-.225.055-.307.078-.348l-1.299-.75c-.177.307-.243.633-.273.962c-.029.32-.028.71-.028 1.163zm-.375-2.949a2.25 2.25 0 0 0-.824.824l1.3.75a.75.75 0 0 1 .274-.275zM10.75 20v-4h-1.5v4zm2.5-4v4h1.5v-4zm0 4c0 .493-.002.787-.03.997a.7.7 0 0 1-.043.18l1.06 1.06c.31-.309.422-.684.47-1.04c.045-.334.043-.747.043-1.197zM12 22.75c.45 0 .863.002 1.197-.043c.356-.048.731-.16 1.04-.47l-1.06-1.06l-.003.001l-.01.005a.7.7 0 0 1-.167.037c-.21.028-.504.03-.997.03zm0-8c.493 0 .787.002.997.03a.7.7 0 0 1 .18.043l1.06-1.06c-.309-.31-.684-.422-1.04-.47c-.334-.045-.747-.043-1.197-.043zM14.75 16c0-.45.002-.863-.043-1.197c-.048-.356-.16-.731-.47-1.04l-1.06 1.06l.001.003l.005.01c.009.022.024.07.037.167c.028.21.03.504.03.997zm-4 0c0-.493.002-.787.03-.997a.7.7 0 0 1 .043-.18l-1.06-1.06c-.31.309-.422.684-.47 1.04c-.045.334-.043.747-.043 1.197zM12 13.25c-.45 0-.863-.002-1.197.043c-.356.048-.731.16-1.04.47l1.06 1.06l.003-.001l.01-.005a.7.7 0 0 1 .167-.037c.21-.028.504-.03.997-.03zM9.25 20c0 .45-.002.863.043 1.197c.048.356.16.731.47 1.04l1.06-1.06l-.001-.003l-.005-.01a.7.7 0 0 1-.037-.167c-.028-.21-.03-.504-.03-.997zM12 21.25c-.493 0-.787-.002-.997-.03a.7.7 0 0 1-.18-.043l-1.06 1.06c.309.31.684.422 1.04.47c.334.045.747.043 1.197.043zm0-6.5h.005v-1.5H12z"></svg:path><svg:path fill="currentColor" d="M5.5 3.75a.75.75 0 0 0 0 1.5zm.5 0h-.5v1.5H6zm9.407 7.239l-.111-.742zm4.076-.612l-.11-.741zm2.378-4.61l.698-.274zM20.733 4.64l-.275.698zm.206 5.405l-.352-.663zm.947-1.1l.707.25zm-9.401 2.973l-.569-.49zm-1.23 2.07a.75.75 0 1 0 1.5.025zm4.263-2.256l4.077-.612l-.223-1.483l-4.076.611zm3.527-7.981H18v1.5h1.045zm3.705 3.705c0-.435 0-.797-.019-1.094a2.8 2.8 0 0 0-.172-.868l-1.396.55c.03.073.056.186.071.416c.016.236.016.541.016.996zM19.045 5.25c.455 0 .76 0 .996.016c.23.015.343.042.417.07l.55-1.395a2.8 2.8 0 0 0-.869-.172c-.297-.02-.659-.019-1.094-.019zm3.514.243a2.75 2.75 0 0 0-1.551-1.552l-.55 1.396c.323.127.578.382.705.705zm-2.964 5.626c.708-.106 1.251-.177 1.696-.413l-.704-1.325c-.161.086-.387.13-1.215.255zm1.655-3.664c0 .837-.01 1.067-.071 1.239l1.414.5c.168-.475.157-1.022.157-1.739zm.04 3.251a2.75 2.75 0 0 0 1.303-1.513l-1.414-.5a1.25 1.25 0 0 1-.592.688zm-5.994-.459c-.794.12-1.458.218-1.981.365c-.543.152-1.024.38-1.399.816l1.137.979c.11-.127.277-.242.668-.351c.411-.116.965-.2 1.797-.325zm-2.541 3.765c.018-1.065.116-1.395.298-1.605l-1.137-.98c-.58.675-.644 1.552-.661 2.56z" opacity=".5"></svg:path>`,
})
export class SolarPaintRollerLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPaletteBoldDuotoneIcon],svg[solar-palette-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.75 19a.75.75 0 0 1-.75.75H5a.75.75 0 0 1 0-1.5h2a.75.75 0 0 1 .75.75"></svg:path><svg:path fill="currentColor" d="M10 18V6c0-1.4 0-2.1-.272-2.635a2.5 2.5 0 0 0-1.093-1.093C8.1 2 7.4 2 6 2s-2.1 0-2.635.272a2.5 2.5 0 0 0-1.093 1.093C2 3.9 2 4.6 2 6v12c0 1.4 0 2.1.272 2.635a2.5 2.5 0 0 0 1.093 1.092C3.9 22 4.6 22 6 22s2.1 0 2.635-.273a2.5 2.5 0 0 0 1.093-1.092C10 20.1 10 19.4 10 18" opacity=".4"></svg:path><svg:path fill="currentColor" d="M10 8.243V18c0 .919 0 1.536-.077 2.003l3.299-3.299l5.838-6.09c.973-1.003 1.46-1.505 1.636-2.08a2.5 2.5 0 0 0-.011-1.503C20.5 6.458 20 5.958 19 4.959c-.9-.886-1.352-1.33-1.88-1.514a2.5 2.5 0 0 0-1.353-.085c-.547.118-1.049.502-2.053 1.27L13 5.243zm-1.997 13.68H8v.003z" opacity=".7"></svg:path><svg:path fill="currentColor" d="M15.814 14H17.9c1.4 0 2.1 0 2.635.273a2.5 2.5 0 0 1 1.093 1.092C21.9 15.9 21.9 16.6 21.9 18s0 2.1-.272 2.635a2.5 2.5 0 0 1-1.093 1.092C20 22 19.3 22 17.9 22H6c.917 0 1.534 0 2-.077v.003l.003-.003c.245-.04.448-.102.632-.195a2.5 2.5 0 0 0 1.093-1.093c.093-.184.155-.387.195-.632l3.299-3.299z"></svg:path>`,
})
export class SolarPaletteBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPaletteLineDuotoneIcon],svg[solar-palette-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 6c0-1.4 0-2.1.272-2.635a2.5 2.5 0 0 1 1.093-1.093C3.9 2 4.6 2 6 2s2.1 0 2.635.272a2.5 2.5 0 0 1 1.093 1.093C10 3.9 10 4.6 10 6v12c0 1.4 0 2.1-.272 2.635a2.5 2.5 0 0 1-1.093 1.092C8.1 22 7.4 22 6 22s-2.1 0-2.635-.273a2.5 2.5 0 0 1-1.093-1.092C2 20.1 2 19.4 2 18z"></svg:path><svg:path stroke-linecap="round" d="M7 19H5" opacity=".5"></svg:path><svg:path d="m13.314 4.929l-2.142 2.142c-.578.578-.867.867-1.02 1.235C10 8.673 10 9.082 10 9.9v9.656l8.97-8.97c.99-.99 1.486-1.485 1.671-2.056a2.5 2.5 0 0 0 0-1.545c-.185-.57-.68-1.066-1.67-2.056s-1.486-1.485-2.056-1.67a2.5 2.5 0 0 0-1.545 0c-.571.185-1.066.68-2.056 1.67Z"></svg:path><svg:path d="M6 22h12c1.4 0 2.1 0 2.635-.273a2.5 2.5 0 0 0 1.092-1.092C22 20.1 22 19.4 22 18s0-2.1-.273-2.635a2.5 2.5 0 0 0-1.092-1.092C20.1 14 19.4 14 18 14h-2.5" opacity=".5"></svg:path></svg:g>`,
})
export class SolarPaletteLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPaletteRoundBoldDuotoneIcon],svg[solar-palette-round-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 18a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path><svg:path fill="currentColor" d="M10 6v12a4 4 0 0 1-8 0V6a4 4 0 1 1 8 0" opacity=".4"></svg:path><svg:path fill="currentColor" d="m9.248 20.336l3.974-3.975l5.838-6.09a4.042 4.042 0 0 0-5.776-5.655L10 7.9V18c0 .872-.279 1.679-.752 2.336" opacity=".7"></svg:path><svg:path fill="currentColor" d="m13.222 16.362l-3.974 3.974A4 4 0 0 1 6 22h11.9a4 4 0 1 0 0-8h-2.414z"></svg:path>`,
})
export class SolarPaletteRoundBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPaletteRoundLineDuotoneIcon],svg[solar-palette-round-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 6a4 4 0 1 1 8 0v12a4 4 0 0 1-8 0z"></svg:path><svg:path d="m10 8.243l3.314-3.314a4 4 0 1 1 5.657 5.657L9.306 20.25"></svg:path><svg:path d="M6 22h12a4 4 0 0 0 0-8h-2.5M7 18a1 1 0 1 1-2 0a1 1 0 0 1 2 0Z" opacity=".5"></svg:path></svg:g>`,
})
export class SolarPaletteRoundLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPallete2BoldDuotoneIcon],svg[solar-pallete-2-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.847 21.934C5.867 21.362 2 17.133 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10c0 5.157-3.283 4.733-6.086 4.37c-1.618-.209-3.075-.397-3.652.518c-.395.626.032 1.406.555 1.929a1.673 1.673 0 0 1 0 2.366c-.523.523-1.235.836-1.97.751" opacity=".5"></svg:path><svg:path fill="currentColor" d="M11.085 7a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0M6.5 13a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m11 0a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m-3-4.5a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3"></svg:path>`,
})
export class SolarPallete2BoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPallete2LineDuotoneIcon],svg[solar-pallete-2-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 12.026c0 5.146 3.867 9.387 8.847 9.96c.735.085 1.447-.228 1.97-.753a1.68 1.68 0 0 0 0-2.372c-.523-.525-.95-1.307-.555-1.934c1.576-2.508 9.738 3.251 9.738-4.9C22 6.488 17.523 2 12 2S2 6.489 2 12.026Z"></svg:path><svg:circle cx="17.5" cy="11.5" r="1.5" opacity=".5"></svg:circle><svg:circle cx="6.5" cy="11.5" r="1.5" opacity=".5"></svg:circle><svg:path d="M11 7a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0Zm5 0a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0Z" opacity=".5"></svg:path></svg:g>`,
})
export class SolarPallete2LineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPanoramaBoldDuotoneIcon],svg[solar-panorama-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M18.448 3.073c-1.06-.332-2.03.514-2.03 1.547v3.626c-1.296.252-2.804.397-4.418.397s-3.122-.145-4.419-.397V4.62c0-1.033-.97-1.879-2.028-1.547c-.982.307-1.831.697-2.45 1.17C2.495 4.705 2 5.338 2 6.13v11.95q.002.323.104.614q.091.262.244.493c.324.491.841.894 1.44 1.223c.609.334 1.351.62 2.185.852C7.64 21.727 9.737 22 12 22c1.9 0 3.682-.192 5.189-.529c1.493-.333 2.773-.82 3.63-1.445c.208-.152.405-.322.576-.511c.36-.398.605-.877.605-1.436V6.13c0-.792-.494-1.425-1.103-1.889c-.619-.472-1.468-.862-2.45-1.169m2.157 5.154l-.081.052c-.823.516-1.952.93-3.254 1.227c-1.524.347-3.335.547-5.27.547s-3.745-.2-5.27-.547c-1.302-.297-2.431-.71-3.254-1.227l-.08-.052v9.162l2.83-2.675l1.276-1.08a2.39 2.39 0 0 1 3.192.105l3.09 2.985a.786.786 0 0 0 .975.078l.215-.145a2.91 2.91 0 0 1 3.532.207l1.9 1.653c.157-.188.199-.337.199-.438z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M19.21 12.84c0 .778-.625 1.41-1.396 1.41s-1.395-.632-1.395-1.41s.625-1.41 1.395-1.41s1.396.632 1.396 1.41" opacity=".5"></svg:path>`,
})
export class SolarPanoramaBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPanoramaLineDuotoneIcon],svg[solar-panorama-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M22 5.86c0-.795-.79-1.526-2.117-2.107c-1.175-.515-2.383.467-2.383 1.749v3.217M22 5.86v12.717C22 20.467 17.523 22 12 22S2 20.467 2 18.576V5.86m20 0c0 1.195-1.789 2.247-4.5 2.86M2 5.86c0-.795.79-1.526 2.117-2.107C5.292 3.238 6.5 4.22 6.5 5.502v3.217M2 5.86c0 1.196 1.789 2.248 4.5 2.86m0 0c1.578.357 3.468.564 5.5.564s3.922-.207 5.5-.564"></svg:path><svg:path d="M19.5 13a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0Z" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="m21 20l-2.496-2.149a2.405 2.405 0 0 0-2.889-.166l-.23.155a1.6 1.6 0 0 1-1.986-.164l-3.32-3.177a1.84 1.84 0 0 0-2.433-.078L6.29 15.557L2.5 19.104" opacity=".5"></svg:path></svg:g>`,
})
export class SolarPanoramaLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPaperBinBoldDuotoneIcon],svg[solar-paper-bin-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.034 8.89c-.48-3.204-.72-4.805.177-5.848C4.109 2 5.728 2 8.968 2h6.066c3.239 0 4.859 0 5.756 1.042s.658 2.644.177 5.848l-1.2 8c-.366 2.438-.548 3.656-1.392 4.383S16.298 22 13.834 22h-3.666c-2.465 0-3.698 0-4.541-.727S4.6 19.328 4.234 16.89z" opacity=".5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="m3.517 12.115l-.29-1.933l1.845-2.05L3.689 6.75h-.96a15 15 0 0 1-.123-1.5h18.788c-.01.437-.054.933-.124 1.5h-.96l-1.382 1.382l1.845 2.05l-.29 1.933l-1.6 1.707l1.168 1.169l-.276 1.845l-1.92-1.92l-1.876 2.003l1.332 1.331h2.245c-.098.59-.195 1.083-.314 1.5H4.758a14 14 0 0 1-.314-1.5h2.245l1.332-1.331l-1.877-2.002l-1.919 1.918l-.276-1.844l1.168-1.17zm2.56-5.099L5.81 6.75h.506zm1.062 1.062L8.334 6.75h1.355L10.94 8L9 9.94zm4.86-1.139l-.189-.189h.38zM13.06 8l1.25-1.25h1.356l1.195 1.328L15 9.94zm4.863-.984l-.24-.266h.506zM16.061 11l1.805-1.805l1.616 1.795l-1.66 1.77zM15 12.06l1.795 1.795l-1.877 2.002L13.06 14zm-3 3l1.892 1.892l-1.217 1.298h-1.35l-1.217-1.298zm3.19 3.19h-.459l.222-.236zm-6.143-.236l.222.236H8.81zM10.939 14l-1.857 1.857l-1.877-2.001L9 12.06zm-3-3l-1.76 1.76l-1.66-1.77l1.615-1.795zM12 12.94L10.06 11L12 9.06L13.94 11z" clip-rule="evenodd"></svg:path>`,
})
export class SolarPaperBinBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPaperBinLineDuotoneIcon],svg[solar-paper-bin-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M3.033 8.89c-.48-3.204-.72-4.805.177-5.848C4.108 2 5.728 2 8.967 2h6.066c3.24 0 4.859 0 5.757 1.042s.657 2.644.176 5.848l-1.2 8c-.365 2.438-.548 3.656-1.392 4.383S16.298 22 13.833 22h-3.666c-2.465 0-3.697 0-4.541-.727s-1.027-1.945-1.393-4.383z"></svg:path><svg:path stroke-linecap="round" d="M21 6H3"></svg:path><svg:path stroke-linejoin="round" d="m8 6l-4.5 5l7.5 8m3-13L4 16M20 6L7 19m6 0l7.5-8L16 6m-6 0l10 10M4 6l13 13" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="M19 19H5"></svg:path></svg:g>`,
})
export class SolarPaperBinLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPaperclip2BoldDuotoneIcon],svg[solar-paperclip-2-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.244 1.955c1.7-.94 3.79-.94 5.49 0c.63.348 1.218.91 2.172 1.825l.094.09a.75.75 0 1 1-1.037 1.083c-1.079-1.032-1.518-1.444-1.954-1.685a4.2 4.2 0 0 0-4.04 0c-.436.24-.875.653-1.953 1.685l-5.99 5.735A.75.75 0 0 1 2.99 9.605L8.98 3.87l.093-.09c.955-.914 1.543-1.477 2.172-1.825m3.701 4.805a.75.75 0 0 1 1.06-.023l.081.078c.367.35.683.651.86 1.003a2.21 2.21 0 0 1 0 1.994c-.177.352-.493.653-.86 1.004l-.08.077l-7.38 7.066a.75.75 0 0 1-1.038-1.083l7.38-7.067c.495-.473.594-.583.638-.671a.71.71 0 0 0 0-.646c-.044-.088-.143-.198-.638-.671a.75.75 0 0 1-.023-1.06" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M17.963 4.954c1.08 1.034 1.507 1.452 1.756 1.865a3.65 3.65 0 0 1 0 3.788c-.249.413-.676.831-1.756 1.866L10.53 19.59c-.56.535-.945.903-1.269 1.164c-.316.255-.523.365-.707.418a2 2 0 0 1-1.108 0c-.184-.053-.391-.163-.707-.418c-.324-.261-.71-.63-1.269-1.164c-.558-.535-.943-.904-1.215-1.214c-.267-.303-.376-.495-.428-.659a1.7 1.7 0 0 1 0-1.009c.052-.163.16-.355.428-.658c.272-.31.657-.679 1.215-1.214l7.327-7.015c.492-.471.61-.57.71-.616a.9.9 0 0 1 .75 0c.101.046.22.145.711.616a.75.75 0 0 1 1.02-1.1l-.06-.058c-.37-.355-.682-.654-1.042-.82a2.4 2.4 0 0 0-2.007 0c-.36.166-.672.465-1.041.82l-7.429 7.113c-.529.506-.96.92-1.28 1.283c-.33.376-.592.752-.733 1.2a3.2 3.2 0 0 0 0 1.907c.14.449.402.825.733 1.2c.32.365.751.778 1.28 1.284l.048.046c.529.507.96.92 1.34 1.226c.393.317.78.561 1.234.692a3.5 3.5 0 0 0 1.937 0c.455-.13.842-.375 1.235-.692c.38-.306.81-.72 1.34-1.226l7.555-7.234c.95-.91 1.54-1.474 1.906-2.08a5.14 5.14 0 0 0 0-5.337c-.366-.607-.955-1.171-1.906-2.081l-.08-.077a.75.75 0 0 1-1.055 1.067" opacity=".5"></svg:path>`,
})
export class SolarPaperclip2BoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPaperclip2LineDuotoneIcon],svg[solar-paperclip-2-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m8.107 17.417l7.38-7.066c.448-.429.672-.643.789-.876c.21-.417.21-.903 0-1.32c-.117-.233-.341-.447-.79-.876M3.509 10.146l5.99-5.735c1.044-1 1.566-1.5 2.109-1.8a4.95 4.95 0 0 1 4.765 0c.543.3 1.065.8 2.11 1.8"></svg:path><svg:path fill="currentColor" d="m18.482 13.014l-.52-.541zm-7.434 7.118l-.518-.542zm-6.096-5.838l-.519-.541zm7.326-7.014l-.519-.542zm2.294-.756l-.314.681zm-1.379 0l-.314-.681zM4.952 20.132l-.519.541zm-1.84-2.19l.715-.224zm0-1.458l-.716-.224zm5.65 5.41l.206.72zm-1.523 0l.207-.721zM19 3.87a.75.75 0 1 0-1.037 1.084zm1.362 2.562l.642-.387zm0 4.562l.642.388zm-2.4 1.479L10.53 19.59l1.037 1.084L19 13.556zM5.47 14.836l7.327-7.015l-1.038-1.083l-7.326 7.015zm10.536-8.098c-.405-.387-.735-.717-1.12-.895l-.628 1.362c.1.046.218.145.71.616zm-3.21 1.083c.493-.47.61-.57.711-.616l-.628-1.362c-.385.178-.715.508-1.12.895zm2.09-1.978a2.4 2.4 0 0 0-2.007 0l.628 1.362a.9.9 0 0 1 .75 0zM5.47 19.59c-.558-.535-.943-.904-1.215-1.214c-.267-.303-.376-.495-.428-.658l-1.43.448c.14.449.401.826.732 1.201c.324.37.764.79 1.304 1.306zm-1.037-5.837c-.54.517-.98.937-1.304 1.306c-.33.376-.592.752-.733 1.2l1.431.45c.052-.163.16-.356.428-.66c.272-.309.657-.678 1.215-1.213zm-.606 3.965a1.7 1.7 0 0 1 0-1.01l-1.43-.448a3.2 3.2 0 0 0 0 1.906zm6.703 1.872c-.56.535-.945.903-1.269 1.165c-.316.254-.523.365-.707.418l.414 1.441c.455-.13.842-.375 1.235-.692c.385-.31.824-.731 1.364-1.248zm-6.097 1.084c.54.517.979.937 1.364 1.248c.393.317.78.562 1.234.692l.415-1.441c-.184-.053-.391-.164-.707-.418c-.324-.262-.71-.63-1.269-1.165zm4.121.499a2 2 0 0 1-1.108 0l-.415 1.441a3.5 3.5 0 0 0 1.937 0zm9.409-16.22c1.08 1.035 1.507 1.453 1.756 1.867l1.285-.775c-.378-.627-.995-1.209-2.004-2.175zM19 13.557c1.009-.966 1.626-1.547 2.004-2.174l-1.285-.775c-.249.413-.676.832-1.756 1.866zm.72-6.736a3.65 3.65 0 0 1 0 3.787l1.284.775a5.14 5.14 0 0 0 0-5.337z" opacity=".5"></svg:path></svg:g>`,
})
export class SolarPaperclip2LineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPaperclipBoldDuotoneIcon],svg[solar-paperclip-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.886 3.363c2.942-2.817 7.7-2.817 10.643 0a.75.75 0 0 1-1.037 1.083c-2.363-2.261-6.206-2.261-8.57 0l-6.403 6.13A.75.75 0 0 1 2.48 9.493zm6.38 3.088a.75.75 0 0 1 1.061-.023a3 3 0 0 1 0 4.367l-7.89 7.554a.75.75 0 1 1-1.038-1.084l7.89-7.553a1.503 1.503 0 0 0 0-2.2a.75.75 0 0 1-.022-1.061" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M18.491 4.446c2.345 2.244 2.345 5.868 0 8.112l-7.948 7.608c-1.51 1.445-3.971 1.445-5.481 0a3.53 3.53 0 0 1 0-5.156l7.834-7.499a1.753 1.753 0 0 1 2.393 0a.75.75 0 0 1 1.022-1.099a3.253 3.253 0 0 0-4.453.015l-7.833 7.499a5.03 5.03 0 0 0 0 7.323c2.09 2 5.466 2 7.556 0l7.948-7.608c2.956-2.83 2.96-7.428.015-10.264a.75.75 0 0 1-1.053 1.069" opacity=".5"></svg:path>`,
})
export class SolarPaperclipBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPaperclipLineDuotoneIcon],svg[solar-paperclip-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m7.918 17.807l7.89-7.553a2.253 2.253 0 0 0 0-3.284M3 10.035l6.404-6.13c2.653-2.54 6.954-2.54 9.607 0"></svg:path><svg:path fill="currentColor" d="m19.01 13.1l.52.541zm-7.948 7.608l-.518-.542zm-6.518-6.24l.519.542zm7.834-7.499l-.519-.541zm7.151-3.607a.75.75 0 1 0-1.037 1.084zm-1.037 9.196l-7.948 7.608l1.037 1.083l7.948-7.608zM5.062 15.01l7.834-7.499l-1.037-1.083l-7.834 7.498zm11.265-8.582a3.253 3.253 0 0 0-4.468 0l1.037 1.083a1.753 1.753 0 0 1 2.394 0zM5.062 20.166a3.53 3.53 0 0 1 0-5.156l-1.037-1.084a5.03 5.03 0 0 0 0 7.323zm5.482 0c-1.51 1.445-3.971 1.445-5.482 0l-1.037 1.083c2.09 2.001 5.466 2.001 7.556 0zm7.948-15.72c2.344 2.244 2.344 5.868 0 8.112l1.037 1.083c2.961-2.834 2.961-7.444 0-10.278z" opacity=".5"></svg:path></svg:g>`,
})
export class SolarPaperclipLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPaperclipRounded2BoldDuotoneIcon],svg[solar-paperclip-rounded-2-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.464 3.464C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536" opacity=".5"></svg:path><svg:path fill="currentColor" d="M8.964 6.863c2.238-2.15 5.856-2.15 8.094 0a5.41 5.41 0 0 1 0 7.858l-2.204 2.118a3.317 3.317 0 0 1-4.567 0a3.08 3.08 0 0 1 0-4.47l1.764-1.694a.75.75 0 1 1 1.039 1.081l-1.764 1.695a1.58 1.58 0 0 0 0 2.306a1.82 1.82 0 0 0 2.488 0l2.205-2.117a3.91 3.91 0 0 0 0-5.696c-1.658-1.592-4.358-1.592-6.016 0l-2.205 2.118a3.327 3.327 0 0 0 0 4.848a.75.75 0 0 1-1.039 1.082a4.827 4.827 0 0 1 0-7.012z"></svg:path>`,
})
export class SolarPaperclipRounded2BoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPaperclipRounded2LineDuotoneIcon],svg[solar-paperclip-rounded-2-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m12.95 11.009l-2.94 2.926a4.125 4.125 0 0 0 0 5.853a4.17 4.17 0 0 0 5.88 0l3.675-3.658a8.25 8.25 0 0 0 0-11.706c-3.248-3.232-8.512-3.232-11.76 0L4.132 8.082a7.22 7.22 0 0 0 0 10.243"></svg:path>`,
})
export class SolarPaperclipRounded2LineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPaperclipRoundedBoldDuotoneIcon],svg[solar-paperclip-rounded-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.464 3.464C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536" opacity=".5"></svg:path><svg:path fill="currentColor" d="M11.111 5.673a4.07 4.07 0 0 1 3.614 0c.565.28 1.072.774 1.829 1.511l.1.098l.104.1c.754.735 1.263 1.23 1.553 1.783a3.84 3.84 0 0 1 0 3.565c-.29.554-.799 1.049-1.553 1.783l-.104.1l-2.203 2.146l-.034.033c-.18.175-.32.311-.461.417a2.74 2.74 0 0 1-3.27 0a5 5 0 0 1-.46-.417l-.035-.033l-.034-.034c-.18-.175-.32-.311-.429-.45a2.606 2.606 0 0 1 0-3.236c.11-.139.25-.275.429-.45l.034-.034l1.699-1.653a.75.75 0 0 1 1.046 1.075l-1.698 1.653c-.23.225-.292.287-.332.337a1.106 1.106 0 0 0 0 1.38c.04.05.101.113.332.337c.23.224.295.284.347.323a1.24 1.24 0 0 0 1.473 0c.052-.039.117-.1.347-.323l2.203-2.145c.897-.874 1.21-1.191 1.374-1.504a2.34 2.34 0 0 0 0-2.174c-.164-.313-.477-.63-1.374-1.504c-.895-.872-1.224-1.179-1.55-1.34a2.57 2.57 0 0 0-2.28 0c-.326.161-.655.468-1.55 1.34L7.99 10.535c-.503.49-.681.668-.797.83a2.34 2.34 0 0 0 0 2.74c.116.162.294.34.797.83a.75.75 0 1 1-1.046 1.075l-.058-.056c-.424-.413-.709-.69-.913-.975a3.84 3.84 0 0 1 0-4.487c.204-.285.489-.562.913-.975l.058-.056l2.238-2.179l.1-.098c.757-.737 1.264-1.231 1.83-1.511"></svg:path>`,
})
export class SolarPaperclipRoundedBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPaperclipRoundedLineDuotoneIcon],svg[solar-paperclip-rounded-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m12.689 11.395l-2.831 2.856c-.355.359-.533.538-.663.708a3.3 3.3 0 0 0 0 3.988c.13.17.308.35.663.708s.533.538.702.668a3.22 3.22 0 0 0 3.951 0c.17-.13.347-.31.702-.668l3.672-3.705c1.424-1.437 2.136-2.156 2.525-2.926a5.5 5.5 0 0 0 0-4.956c-.389-.77-1.1-1.489-2.525-2.925c-1.424-1.437-2.136-2.156-2.899-2.548a5.37 5.37 0 0 0-4.912 0c-.763.392-1.475 1.11-2.9 2.548L4.446 8.906c-.8.807-1.2 1.21-1.473 1.607a5.5 5.5 0 0 0 0 6.242c.274.396.673.8 1.473 1.607"></svg:path>`,
})
export class SolarPaperclipRoundedLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarParagraphSpacingBoldDuotoneIcon],svg[solar-paragraph-spacing-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.25 3A.75.75 0 0 1 4 2.25h16a.75.75 0 0 1 0 1.5H4A.75.75 0 0 1 3.25 3m0 18a.75.75 0 0 1 .75-.75h16a.75.75 0 0 1 0 1.5H4a.75.75 0 0 1-.75-.75" opacity=".5"></svg:path><svg:path fill="currentColor" d="M12.53 4.97a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 0 0 1.06 1.06l1.72-1.72v9.38l-1.72-1.72a.75.75 0 0 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06l-1.72 1.72V7.31l1.72 1.72a.75.75 0 1 0 1.06-1.06z"></svg:path>`,
})
export class SolarParagraphSpacingBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarParagraphSpacingLineDuotoneIcon],svg[solar-paragraph-spacing-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M4 21h16M4 3h16" opacity=".5"></svg:path><svg:path d="m12 5.5l3 3m-3-3l-3 3m3-3v13m0 0l3-3m-3 3l-3-3"></svg:path></svg:g>`,
})
export class SolarParagraphSpacingLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPassportBoldDuotoneIcon],svg[solar-passport-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.75 13a2.25 2.25 0 1 1 4.5 0a2.25 2.25 0 0 1-4.5 0"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M4 18.694v-14a1 1 0 0 0 1 1h12a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3M8.25 13a3.75 3.75 0 1 1 7.5 0a3.75 3.75 0 0 1-7.5 0m1 6a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M18 4v1.865c-.313-.11-.65-.17-1-.17H5a1 1 0 0 1-1-1v-.072c0-.533.392-.985.92-1.06L15.717 2.02A2 2 0 0 1 18 4" opacity=".5"></svg:path>`,
})
export class SolarPassportBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPassportLineDuotoneIcon],svg[solar-passport-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="1.5" d="M4 6v13a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3zm0 0V5"></svg:path><svg:circle cx="12" cy="13" r="3" stroke="currentColor" stroke-width="1.5" opacity=".5"></svg:circle><svg:path fill="currentColor" d="M18 6v.75h.75V6zm-2.283-3.674l-.106-.742zM4.92 3.87l-.106-.743zm.15 2.88H18v-1.5H5.071zM18.75 6V4.306h-1.5V6zm-3.139-4.416L4.814 3.126l.212 1.485L15.823 3.07zM4.814 3.126A1.82 1.82 0 0 0 3.25 4.93h1.5a.32.32 0 0 1 .276-.318zm13.936 1.18a2.75 2.75 0 0 0-3.139-2.722l.212 1.485a1.25 1.25 0 0 1 1.427 1.237zM5.071 5.25a.32.32 0 0 1-.321-.321h-1.5A1.82 1.82 0 0 0 5.071 6.75z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M10 19h4" opacity=".5"></svg:path></svg:g>`,
})
export class SolarPassportLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPassportMinimalisticBoldDuotoneIcon],svg[solar-passport-minimalistic-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 10.75a2.25 2.25 0 1 0 0 4.5a2.25 2.25 0 0 0 0-4.5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M4 4.694v14a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-10a3 3 0 0 0-3-3H5a1 1 0 0 1-1-1m8 4.556a3.75 3.75 0 1 0 0 7.5a3.75 3.75 0 0 0 0-7.5" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M18 4v1.865c-.313-.11-.65-.17-1-.17H5a1 1 0 0 1-1-1v-.072c0-.533.392-.985.92-1.06L15.717 2.02A2 2 0 0 1 18 4" opacity=".5"></svg:path>`,
})
export class SolarPassportMinimalisticBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPassportMinimalisticLineDuotoneIcon],svg[solar-passport-minimalistic-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M4 6v13a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3zm0 0V5"></svg:path><svg:circle cx="12" cy="14" r="3" stroke="currentColor" stroke-width="1.5" opacity=".5"></svg:circle><svg:path fill="currentColor" d="M18 6v.75h.75V6zm-2.283-3.674l-.106-.742zM4.92 3.87l-.106-.743zm.15 2.88H18v-1.5H5.071zM18.75 6V4.306h-1.5V6zm-3.139-4.416L4.814 3.126l.212 1.485L15.823 3.07zM4.814 3.126A1.82 1.82 0 0 0 3.25 4.93h1.5a.32.32 0 0 1 .276-.318zm13.936 1.18a2.75 2.75 0 0 0-3.139-2.722l.212 1.485a1.25 1.25 0 0 1 1.427 1.237zM5.071 5.25a.32.32 0 0 1-.321-.321h-1.5A1.82 1.82 0 0 0 5.071 6.75z"></svg:path></svg:g>`,
})
export class SolarPassportMinimalisticLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPasswordBoldDuotoneIcon],svg[solar-password-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 12c0-3.771 0-5.657 1.172-6.828S6.229 4 10 4h4c3.771 0 5.657 0 6.828 1.172S22 8.229 22 12s0 5.657-1.172 6.828S17.771 20 14 20h-4c-3.771 0-5.657 0-6.828-1.172S2 15.771 2 12" opacity=".5"></svg:path><svg:path fill="currentColor" d="M12.75 10a.75.75 0 0 0-1.5 0v.701l-.607-.35a.75.75 0 1 0-.75 1.298l.607.35l-.607.351a.75.75 0 1 0 .75 1.3l.607-.351V14a.75.75 0 1 0 1.5 0v-.7l.607.35a.75.75 0 0 0 .75-1.3L13.5 12l.607-.35a.75.75 0 0 0-.75-1.3l-.607.35zm-6.017-.75a.75.75 0 0 1 .75.75v.7l.606-.35a.75.75 0 0 1 .75 1.3l-.607.35l.607.35a.75.75 0 1 1-.75 1.3l-.606-.35v.7a.75.75 0 0 1-1.5 0v-.701l-.608.35a.75.75 0 0 1-.75-1.298L5.232 12l-.607-.35a.75.75 0 1 1 .75-1.3l.608.351V10a.75.75 0 0 1 .75-.75m11.285.75a.75.75 0 0 0-1.5 0v.701l-.607-.35a.75.75 0 1 0-.75 1.298l.607.35l-.607.351a.75.75 0 0 0 .75 1.3l.607-.351V14a.75.75 0 0 0 1.5 0v-.7l.607.35a.75.75 0 0 0 .75-1.3l-.607-.35l.607-.35a.75.75 0 1 0-.75-1.3l-.607.35z"></svg:path>`,
})
export class SolarPasswordBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPasswordLineDuotoneIcon],svg[solar-password-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 12c0-3.771 0-5.657 1.172-6.828S6.229 4 10 4h4c3.771 0 5.657 0 6.828 1.172S22 8.229 22 12s0 5.657-1.172 6.828S17.771 20 14 20h-4c-3.771 0-5.657 0-6.828-1.172S2 15.771 2 12Z" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="M12 10v4m-1.732-3l3.464 2m0-2l-3.465 2m-3.535-3v4M5 11l3.464 2m0-2L5 13m12.268-3v4m-1.732-3L19 13m0-2l-3.465 2"></svg:path></svg:g>`,
})
export class SolarPasswordLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPasswordMinimalisticBoldDuotoneIcon],svg[solar-password-minimalistic-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.172 5.172C2 6.343 2 8.229 2 12s0 5.657 1.172 6.828S6.229 20 10 20h4c3.771 0 5.657 0 6.828-1.172S22 15.771 22 12s0-5.657-1.172-6.828S17.771 4 14 4h-4C6.229 4 4.343 4 3.172 5.172" opacity=".5"></svg:path><svg:path fill="currentColor" d="M8 13a1 1 0 1 0 0-2a1 1 0 0 0 0 2m5-1a1 1 0 1 1-2 0a1 1 0 0 1 2 0m3 1a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path>`,
})
export class SolarPasswordMinimalisticBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPasswordMinimalisticInputBoldDuotoneIcon],svg[solar-password-minimalistic-input-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.172 18.828C4.343 20 6.229 20 10 20l5.75-.006c2.636-.027 4.104-.191 5.078-1.166C22 17.658 22 15.771 22 12s0-5.657-1.172-6.828c-.974-.975-2.454-1.144-5.09-1.172H10C6.229 4 4.343 4 3.172 5.172S2 8.229 2 12s0 5.657 1.172 6.828" opacity=".5"></svg:path><svg:path fill="currentColor" d="M13 12a1 1 0 1 0-2 0a1 1 0 0 0 2 0m-5 1a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M15 1.25a.75.75 0 0 1 .75.75v20a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarPasswordMinimalisticInputBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPasswordMinimalisticInputLineDuotoneIcon],svg[solar-password-minimalistic-input-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M3.172 18.828C4.343 20 6.229 20 10 20h5c3.114-.01 4.765-.108 5.828-1.172C22 17.657 22 15.771 22 12s0-5.657-1.172-6.828C19.765 4.108 18.114 4.01 15 4h-5C6.229 4 4.343 4 3.172 5.172S2 8.229 2 12s0 5.657 1.172 6.828Z" opacity=".5"></svg:path><svg:path fill="currentColor" d="M9 12a1 1 0 1 1-2 0a1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M15 2v20"></svg:path></svg:g>`,
})
export class SolarPasswordMinimalisticInputLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPasswordMinimalisticLineDuotoneIcon],svg[solar-password-minimalistic-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="1.5" d="M2 12c0-3.771 0-5.657 1.172-6.828S6.229 4 10 4h4c3.771 0 5.657 0 6.828 1.172S22 8.229 22 12s0 5.657-1.172 6.828S17.771 20 14 20h-4c-3.771 0-5.657 0-6.828-1.172S2 15.771 2 12Z" opacity=".5"></svg:path><svg:path fill="currentColor" d="M9 12a1 1 0 1 1-2 0a1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path></svg:g>`,
})
export class SolarPasswordMinimalisticLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPauseBoldDuotoneIcon],svg[solar-pause-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 6c0-1.886 0-2.828.586-3.414S4.114 2 6 2s2.828 0 3.414.586S10 4.114 10 6v12c0 1.886 0 2.828-.586 3.414S7.886 22 6 22s-2.828 0-3.414-.586S2 19.886 2 18z"></svg:path><svg:path fill="currentColor" d="M14 6c0-1.886 0-2.828.586-3.414S16.114 2 18 2s2.828 0 3.414.586S22 4.114 22 6v12c0 1.886 0 2.828-.586 3.414S19.886 22 18 22s-2.828 0-3.414-.586S14 19.886 14 18z" opacity=".5"></svg:path>`,
})
export class SolarPauseBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPauseCircleBoldDuotoneIcon],svg[solar-pause-circle-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10" opacity=".5"></svg:path><svg:path fill="currentColor" d="M8.076 8.617C8 8.801 8 9.034 8 9.5v5c0 .466 0 .699.076.883a1 1 0 0 0 .541.54c.184.077.417.077.883.077s.699 0 .883-.076a1 1 0 0 0 .54-.541c.077-.184.077-.417.077-.883v-5c0-.466 0-.699-.076-.883a1 1 0 0 0-.541-.54C10.199 8 9.966 8 9.5 8s-.699 0-.883.076a1 1 0 0 0-.54.541m4.999 0C13 8.801 13 9.034 13 9.5v5c0 .466 0 .699.076.883a1 1 0 0 0 .541.54c.184.077.417.077.883.077s.699 0 .883-.076a1 1 0 0 0 .54-.541c.077-.184.077-.417.077-.883v-5c0-.466 0-.699-.076-.883a1 1 0 0 0-.541-.54C15.199 8 14.966 8 14.5 8s-.699 0-.883.076a1 1 0 0 0-.54.541"></svg:path>`,
})
export class SolarPauseCircleBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPauseCircleLineDuotoneIcon],svg[solar-pause-circle-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="12" cy="12" r="10" opacity=".5"></svg:circle><svg:path d="M8 9.5c0-.466 0-.699.076-.883a1 1 0 0 1 .541-.54C8.801 8 9.034 8 9.5 8s.699 0 .883.076a1 1 0 0 1 .54.541c.077.184.077.417.077.883v5c0 .466 0 .699-.076.883a1 1 0 0 1-.541.54C10.199 16 9.966 16 9.5 16s-.699 0-.883-.076a1 1 0 0 1-.54-.541C8 15.199 8 14.966 8 14.5zm5 0c0-.466 0-.699.076-.883a1 1 0 0 1 .541-.54C13.801 8 14.034 8 14.5 8s.699 0 .883.076a1 1 0 0 1 .54.541c.077.184.077.417.077.883v5c0 .466 0 .699-.076.883a1 1 0 0 1-.541.54c-.184.077-.417.077-.883.077s-.699 0-.883-.076a1 1 0 0 1-.54-.541C13 15.199 13 14.966 13 14.5z"></svg:path></svg:g>`,
})
export class SolarPauseCircleLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPauseLineDuotoneIcon],svg[solar-pause-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 6c0-1.886 0-2.828.586-3.414S4.114 2 6 2s2.828 0 3.414.586S10 4.114 10 6v12c0 1.886 0 2.828-.586 3.414S7.886 22 6 22s-2.828 0-3.414-.586S2 19.886 2 18z"></svg:path><svg:path d="M14 6c0-1.886 0-2.828.586-3.414S16.114 2 18 2s2.828 0 3.414.586S22 4.114 22 6v12c0 1.886 0 2.828-.586 3.414S19.886 22 18 22s-2.828 0-3.414-.586S14 19.886 14 18z" opacity=".5"></svg:path></svg:g>`,
})
export class SolarPauseLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPawBoldDuotoneIcon],svg[solar-paw-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.145 5.527c.412 1.631 1.576 2.717 2.6 2.426c1.025-.292 1.522-1.85 1.11-3.48c-.412-1.631-1.576-2.717-2.6-2.426c-1.025.292-1.522 1.85-1.11 3.48m11.71 0c-.412 1.631-1.576 2.717-2.6 2.426c-1.025-.292-1.522-1.85-1.11-3.48c.412-1.631 1.576-2.717 2.6-2.426c1.025.292 1.522 1.85 1.11 3.48m-15.653 6.77c.45 1.205 1.508 1.937 2.363 1.635s1.183-1.524.733-2.73c-.45-1.204-1.508-1.936-2.363-1.634s-1.183 1.524-.733 2.73m19.596-.001c-.45 1.205-1.508 1.937-2.363 1.635s-1.183-1.524-.733-2.73c.45-1.204 1.508-1.936 2.363-1.634s1.183 1.524.733 2.73"></svg:path><svg:path fill="currentColor" d="M7.57 15.376c1.586-3.228 2.38-4.842 3.52-5.227a2.85 2.85 0 0 1 1.82 0c1.14.385 1.934 1.999 3.52 5.227l.878 1.79c.41.833.614 1.25.663 1.534c.201 1.179-.67 2.265-1.846 2.3c-.283.008-.725-.113-1.61-.356a17 17 0 0 0-1.01-.259a7.6 7.6 0 0 0-3.01 0c-.252.051-.505.12-1.01.26c-.885.242-1.327.363-1.61.355c-1.175-.035-2.047-1.121-1.846-2.3c.048-.284.253-.7.663-1.535z" opacity=".5"></svg:path>`,
})
export class SolarPawBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPawLineDuotoneIcon],svg[solar-paw-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M7.57 15.376c1.586-3.228 2.38-4.842 3.52-5.227a2.85 2.85 0 0 1 1.82 0c1.14.385 1.934 1.999 3.52 5.227l.878 1.79c.41.833.614 1.25.663 1.534c.201 1.179-.67 2.265-1.846 2.3c-.283.008-.725-.113-1.61-.356a17 17 0 0 0-1.01-.259a7.6 7.6 0 0 0-3.01 0c-.252.051-.505.12-1.01.26c-.885.242-1.327.363-1.61.355c-1.175-.035-2.047-1.121-1.846-2.3c.048-.284.253-.7.663-1.535z"></svg:path><svg:path d="M6.145 5.527c.412 1.631 1.576 2.717 2.6 2.426c1.025-.292 1.522-1.85 1.11-3.48c-.412-1.631-1.576-2.717-2.6-2.426c-1.025.292-1.522 1.85-1.11 3.48Zm11.71 0c-.412 1.631-1.576 2.717-2.6 2.426c-1.025-.292-1.522-1.85-1.11-3.48c.412-1.631 1.576-2.717 2.6-2.426c1.025.292 1.522 1.85 1.11 3.48Zm-15.653 6.77c.45 1.205 1.508 1.937 2.363 1.635s1.183-1.524.733-2.73c-.45-1.204-1.508-1.936-2.363-1.634s-1.183 1.524-.733 2.73Zm19.596 0c-.45 1.205-1.508 1.937-2.363 1.635s-1.183-1.524-.733-2.73c.45-1.204 1.508-1.936 2.363-1.634s1.183 1.524.733 2.73Z" opacity=".5"></svg:path></svg:g>`,
})
export class SolarPawLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPen2BoldDuotoneIcon],svg[solar-pen-2-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.25 22a.75.75 0 0 1 .75-.75h16a.75.75 0 0 1 0 1.5H4a.75.75 0 0 1-.75-.75" clip-rule="evenodd" opacity=".5"></svg:path><svg:path fill="currentColor" d="M19.08 7.372a3.147 3.147 0 0 0-4.45-4.45l-.71.71l.031.089c.26.75.751 1.733 1.675 2.656a7 7 0 0 0 2.745 1.705z" opacity=".5"></svg:path><svg:path fill="currentColor" d="m13.951 3.6l-.03.03l.03.09c.26.75.75 1.732 1.674 2.656A7 7 0 0 0 18.37 8.08l-6.85 6.85c-.462.462-.693.693-.948.891q-.452.352-.969.6c-.291.138-.601.241-1.22.448l-3.268 1.09a.849.849 0 0 1-1.073-1.074l1.089-3.268c.206-.62.31-.93.448-1.22q.247-.518.6-.97c.198-.254.429-.485.89-.947z"></svg:path>`,
})
export class SolarPen2BoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPen2LineDuotoneIcon],svg[solar-pen-2-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M4 22h16" opacity=".5"></svg:path><svg:path d="m14.63 2.921l-.742.742l-6.817 6.817c-.462.462-.693.692-.891.947a5.2 5.2 0 0 0-.599.969c-.139.291-.242.601-.449 1.22l-.875 2.626l-.213.641a.848.848 0 0 0 1.073 1.073l.641-.213l2.625-.875c.62-.207.93-.31 1.221-.45q.518-.246.969-.598c.255-.199.485-.43.947-.891l6.817-6.817l.742-.742a3.146 3.146 0 0 0-4.45-4.449Z"></svg:path><svg:path d="M13.888 3.664S13.98 5.24 15.37 6.63s2.966 1.483 2.966 1.483m-12.579 9.63l-1.5-1.5" opacity=".5"></svg:path></svg:g>`,
})
export class SolarPen2LineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPenBoldDuotoneIcon],svg[solar-pen-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.849 8.713a3.932 3.932 0 0 0-5.562-5.561l-.887.887l.038.111a8.75 8.75 0 0 0 2.093 3.32a8.75 8.75 0 0 0 3.43 2.13z" opacity=".5"></svg:path><svg:path fill="currentColor" d="m14.439 4l-.039.038l.038.112a8.75 8.75 0 0 0 2.093 3.32a8.75 8.75 0 0 0 3.43 2.13l-8.56 8.56c-.578.577-.867.866-1.185 1.114a6.6 6.6 0 0 1-1.211.748c-.364.174-.751.303-1.526.561l-4.083 1.361a1.06 1.06 0 0 1-1.342-1.341l1.362-4.084c.258-.774.387-1.161.56-1.525q.309-.646.749-1.212c.248-.318.537-.606 1.114-1.183z"></svg:path>`,
})
export class SolarPenBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPenLineDuotoneIcon],svg[solar-pen-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="m15.287 3.152l-.927.927l-8.521 8.52c-.577.578-.866.867-1.114 1.185a6.6 6.6 0 0 0-.749 1.211c-.173.364-.302.752-.56 1.526l-1.094 3.281l-.268.802a1.06 1.06 0 0 0 1.342 1.342l.802-.268l3.281-1.094c.775-.258 1.162-.387 1.526-.56q.647-.308 1.211-.749c.318-.248.607-.537 1.184-1.114l8.521-8.521l.927-.927a3.932 3.932 0 0 0-5.561-5.561Z"></svg:path><svg:path d="M14.36 4.078s.116 1.97 1.854 3.708s3.707 1.853 3.707 1.853M4.198 21.678l-1.876-1.876" opacity=".5"></svg:path></svg:g>`,
})
export class SolarPenLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPenNewRoundBoldDuotoneIcon],svg[solar-pen-new-round-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="12" cy="12" r="10" fill="currentColor" opacity=".5"></svg:circle><svg:path fill="currentColor" d="M13.926 14.302c.245-.191.467-.413.912-.858l5.54-5.54c.134-.134.073-.365-.106-.427a6.1 6.1 0 0 1-2.3-1.449a6.1 6.1 0 0 1-1.45-2.3c-.061-.18-.292-.24-.426-.106l-5.54 5.54c-.445.444-.667.667-.858.912a5 5 0 0 0-.577.932c-.133.28-.233.579-.431 1.175l-.257.77l-.409 1.226l-.382 1.148a.817.817 0 0 0 1.032 1.033l1.15-.383l1.224-.408l.77-.257c.597-.199.895-.298 1.175-.432q.498-.237.933-.576m8.187-8.132a3.028 3.028 0 0 0-4.282-4.283l-.179.178a.73.73 0 0 0-.206.651c.027.15.077.37.168.633a4.9 4.9 0 0 0 1.174 1.863a4.9 4.9 0 0 0 1.862 1.174c.263.09.483.141.633.168c.24.043.48-.035.652-.207z"></svg:path>`,
})
export class SolarPenNewRoundBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPenNewRoundLineDuotoneIcon],svg[solar-pen-new-round-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M16.652 3.455s.081 1.379 1.298 2.595c1.216 1.217 2.595 1.298 2.595 1.298M10.1 15.588L8.413 13.9" opacity=".5"></svg:path><svg:path d="m16.652 3.455l.649-.649A2.753 2.753 0 0 1 21.194 6.7l-.65.649l-5.964 5.965c-.404.404-.606.606-.829.78a4.6 4.6 0 0 1-.848.524c-.255.121-.526.211-1.068.392l-1.735.579l-1.123.374a.742.742 0 0 1-.939-.94l.374-1.122l.579-1.735c.18-.542.27-.813.392-1.068q.217-.453.524-.848c.174-.223.376-.425.78-.83z"></svg:path><svg:path stroke-linecap="round" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2" opacity=".5"></svg:path></svg:g>`,
})
export class SolarPenNewRoundLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPenNewSquareBoldDuotoneIcon],svg[solar-pen-new-square-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 12c0-5.185 0-7.778 1.61-9.39C4.223 1 6.816 1 12 1s7.778 0 9.39 1.61C23 4.223 23 6.816 23 12s0 7.778-1.61 9.39C19.777 23 17.184 23 12 23s-7.778 0-9.39-1.61C1 19.777 1 17.184 1 12" opacity=".5"></svg:path><svg:path fill="currentColor" d="M13.926 14.302c.245-.191.467-.413.912-.858l5.54-5.54c.134-.134.073-.365-.106-.427a6.1 6.1 0 0 1-2.3-1.449a6.1 6.1 0 0 1-1.45-2.3c-.061-.18-.292-.24-.426-.106l-5.54 5.54c-.445.444-.667.667-.858.912a5 5 0 0 0-.577.932c-.133.28-.233.579-.431 1.175l-.257.77l-.409 1.226l-.382 1.148a.817.817 0 0 0 1.032 1.033l1.15-.383l1.224-.408l.77-.257c.597-.199.895-.298 1.175-.432q.498-.237.933-.576m8.187-8.132a3.028 3.028 0 0 0-4.282-4.283l-.179.178a.73.73 0 0 0-.206.651c.027.15.077.37.168.633a4.9 4.9 0 0 0 1.174 1.863a4.9 4.9 0 0 0 1.862 1.174c.263.09.483.141.633.168c.24.043.48-.035.652-.207z"></svg:path>`,
})
export class SolarPenNewSquareBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPenNewSquareLineDuotoneIcon],svg[solar-pen-new-square-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M22 10.5V12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2h1.5" opacity=".5"></svg:path><svg:path d="m17.3 2.806l-.648.65l-5.965 5.964c-.404.404-.606.606-.78.829q-.308.395-.524.848c-.121.255-.211.526-.392 1.068L8.412 13.9l-.374 1.123a.742.742 0 0 0 .94.939l1.122-.374l1.735-.579c.542-.18.813-.27 1.068-.392q.453-.217.848-.524c.223-.174.425-.376.83-.78l5.964-5.965l.649-.649A2.753 2.753 0 0 0 17.3 2.806Z"></svg:path><svg:path d="M16.652 3.455s.081 1.379 1.298 2.595c1.216 1.217 2.595 1.298 2.595 1.298M10.1 15.588L8.413 13.9" opacity=".5"></svg:path></svg:g>`,
})
export class SolarPenNewSquareLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPeopleNearbyBoldDuotoneIcon],svg[solar-people-nearby-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.717 20.362C21.143 19.585 22 18.587 22 17.5c0-1.152-.963-2.204-2.546-3C17.623 13.58 14.962 13 12 13s-5.623.58-7.454 1.5C2.963 15.296 2 16.348 2 17.5s.963 2.204 2.546 3C6.377 21.42 9.038 22 12 22c3.107 0 5.882-.637 7.717-1.638" opacity=".6"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M9.25 4a2.75 2.75 0 1 1 5.5 0a2.75 2.75 0 0 1-5.5 0" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="m8.223 11.574l-2.175-.725a1.532 1.532 0 0 1 .805-2.952l1.898.407l.21.044a15 15 0 0 0 6.288-.044l1.897-.407a1.532 1.532 0 0 1 .806 2.952l-2.175.725c-.263.088-.394.132-.493.193a1 1 0 0 0-.466.986c.016.115.066.244.165.503l1.247 3.242a1.473 1.473 0 0 1-2.654 1.26L12 15l-1.576 2.757a1.473 1.473 0 0 1-2.654-1.26l1.247-3.241c.1-.259.149-.388.165-.503a1 1 0 0 0-.466-.986c-.099-.061-.23-.105-.493-.193"></svg:path>`,
})
export class SolarPeopleNearbyBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPeopleNearbyLineDuotoneIcon],svg[solar-people-nearby-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="1.5" d="M14 4a2 2 0 1 1-4 0a2 2 0 0 1 4 0Z"></svg:path><svg:path fill="currentColor" d="m6.048 10.849l.237-.712zm2.175.725l-.237.712zm.794 1.682l-.7-.27zM7.77 16.498l.7.269zm10.182-5.649l-.237-.712zm-2.175.725l.237.712zm-.794 1.682l.7-.27zm1.247 3.242l-.7.269zm-5.806 1.26l.651.372zM12 15l.651-.372a.75.75 0 0 0-1.302 0zm5.147-7.103l-.158-.733zm-1.898.407l.157.733zm-6.498 0l.157-.734zm-1.898-.407l-.157.733zm6.723 9.86l-.651.372zm1.462-9.409l-.152-.734zm-6.076 0l-.152.735zm6.322 3.419l.394.638zm-.466.986l.743-.102zm-6.102-.986l-.394.638zm.466.986l.743.102zM5.81 11.56l2.175.726l.474-1.423l-2.175-.726zm2.506 1.427L7.07 16.228l1.4.539l1.247-3.242zm9.398-2.85l-2.175.726l.474 1.423l2.175-.726zm-3.432 3.388l1.247 3.242l1.4-.539l-1.247-3.241zm-3.208 4.605l1.576-2.758l-1.302-.744l-1.576 2.757zM16.99 7.164l-1.897.406l.314 1.467l1.898-.407zm-8.08.406l-1.9-.406l-.314 1.466l1.898.407zm2.44 7.802l1.576 2.758l1.302-.745l-1.576-2.757zm3.743-7.802l-.206.044l.304 1.469l.216-.046zM8.594 9.037l.216.046l.304-1.47l-.206-.043zm6.293-1.423a14.25 14.25 0 0 1-5.773 0L8.81 9.083a15.75 15.75 0 0 0 6.38 0zM9.145 19.25c.798 0 1.535-.428 1.93-1.12l-1.302-.745a.72.72 0 0 1-.628.365zm6.385-2.483a.723.723 0 0 1-.675.983v1.5a2.223 2.223 0 0 0 2.075-3.022zm.01-5.904c-.222.074-.458.147-.65.265l.788 1.277c-.01.005-.002-.001.056-.023c.061-.023.143-.05.28-.096zm.143 2.124a8 8 0 0 1-.104-.277c-.02-.059-.02-.069-.018-.059l-1.486.204c.03.223.124.452.208.67zm-.793-1.859a1.75 1.75 0 0 0-.815 1.727l1.486-.204a.25.25 0 0 1 .117-.246zm3.36-1.733a.78.78 0 0 1-.535.742l.474 1.423a2.28 2.28 0 0 0 1.561-2.165zM7.07 16.228a2.223 2.223 0 0 0 2.075 3.022v-1.5a.723.723 0 0 1-.675-.983zm.916-3.942c.137.045.219.073.28.096c.058.022.065.028.056.023l.788-1.277c-.192-.118-.428-.191-.65-.265zm1.73 1.24c.085-.22.178-.448.209-.671l-1.486-.204c.001-.01.001 0-.018.059a8 8 0 0 1-.104.277zm-1.394-1.121a.25.25 0 0 1 .117.246l1.486.204a1.75 1.75 0 0 0-.815-1.727zM4.25 9.395c0 .983.629 1.855 1.56 2.165l.475-1.423a.78.78 0 0 1-.535-.742zm1.5 0c0-.498.46-.87.946-.765l.315-1.466A2.282 2.282 0 0 0 4.25 9.395zm7.175 8.735a2.22 2.22 0 0 0 1.93 1.12v-1.5c-.26 0-.5-.14-.628-.365zm6.825-8.735a2.282 2.282 0 0 0-2.76-2.231l.314 1.466a.782.782 0 0 1 .946.765z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M19.454 14.5c1.583.796 2.546 1.848 2.546 3c0 2.485-4.477 4.5-10 4.5S2 19.985 2 17.5c0-1.152.963-2.204 2.546-3" opacity=".5"></svg:path></svg:g>`,
})
export class SolarPeopleNearbyLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPerfumeBoldDuotoneIcon],svg[solar-perfume-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7 5.75h.107c.097.001.21.002.306 0c.139-.005.327-.018.516-.076c.202-.063.437-.188.608-.435c.166-.238.213-.505.213-.739s-.047-.501-.213-.74a1.14 1.14 0 0 0-.609-.434a2 2 0 0 0-.516-.075a8 8 0 0 0-.412 0z" clip-rule="evenodd" opacity=".4"></svg:path><svg:g fill="currentColor" opacity=".5"><svg:path d="M2.147 13.059A7 7 0 0 0 2 14.495c0 1.915.766 3.662 2.028 4.987c.45.473.675.709 1.618 1.114C6.59 21 7.24 21 8.542 21h2.916c1.302 0 1.952 0 2.896-.404c.943-.405 1.168-.641 1.619-1.114C17.233 18.157 18 16.41 18 14.495q0-.199-.01-.395c-.598-.316-1.6-.612-2.676-.784c-3.07-.491-4.688 1.988-7.78 1.653c-2.215-.24-3.936-1.318-5.387-1.91"></svg:path><svg:path d="M7.534 14.969c3.092.335 4.71-2.144 7.78-1.653c1.075.172 2.078.468 2.675.784C17.77 10.144 14.277 7 10 7c-3.894 0-7.138 2.606-7.853 6.059c1.45.592 3.172 1.67 5.387 1.91"></svg:path></svg:g><svg:path fill="currentColor" d="M13 7.545V5c0-1.414 0-2.121-.44-2.56C12.122 2 11.415 2 10 2s-2.121 0-2.56.44c-.201.2-.31.456-.37.81h.038c.096-.001.209-.002.304.001c.14.004.328.017.516.075c.203.063.438.188.61.435c.165.238.212.505.212.739s-.047.501-.213.74a1.14 1.14 0 0 1-.608.434a2 2 0 0 1-.516.075c-.096.003-.21.002-.306.002H7v1.794A8.5 8.5 0 0 1 10 7c1.06 0 2.074.193 3 .545M2.147 13.059A7 7 0 0 0 2 14.495c0 1.915.766 3.662 2.028 4.987c.45.473.675.709 1.618 1.114C6.59 21 7.24 21 8.542 21h2.916c1.302 0 1.952 0 2.896-.404c.943-.405 1.168-.641 1.619-1.114C17.233 18.157 18 16.41 18 14.495q0-.199-.01-.395c-.598-.316-1.6-.612-2.676-.784c-3.07-.491-4.688 1.988-7.78 1.653c-2.215-.24-3.936-1.318-5.387-1.91m18.401-7.681c1.253.647 1.8 1.897 1.221 2.792c-.579.896-2.064 1.098-3.317.452s-1.8-1.897-1.221-2.792c.579-.896 2.064-1.098 3.317-.452"></svg:path><svg:path fill="currentColor" d="M13 5.75h1.32c.66 0 1.31.154 1.9.449l.78.39a1.45 1.45 0 0 1 .23-.76c.14-.215.331-.39.56-.523l-.899-.449a5.75 5.75 0 0 0-2.571-.607H13z" opacity=".5"></svg:path>`,
})
export class SolarPerfumeBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPerfumeLineDuotoneIcon],svg[solar-perfume-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M7 5.422V5c0-1.414 0-2.121.44-2.56C7.878 2 8.585 2 10 2s2.121 0 2.56.44C13 2.878 13 3.585 13 5v2H7V5.5M13 7H7"></svg:path><svg:path d="M7 5c.552 0 1 .052 1-.5S7.552 4 7 4" opacity=".5"></svg:path><svg:path d="M10 7c-4.418 0-8 3.356-8 7.495c0 1.915.766 3.662 2.028 4.987c.45.473.675.709 1.618 1.114C6.59 21 7.24 21 8.542 21h2.916c1.302 0 1.952 0 2.896-.404c.943-.405 1.168-.641 1.619-1.114C17.233 18.157 18 16.41 18 14.495C18 10.355 14.418 7 10 7Z"></svg:path><svg:path stroke-linecap="round" d="M2.5 13c1.435.58 3.143 1.73 5.36 1.98c2.996.338 4.564-2.156 7.538-1.662c1.048.174 2.025.474 2.602.794" opacity=".5"></svg:path><svg:path d="M13.5 5h.82a5 5 0 0 1 2.236.528L17.5 6" opacity=".5"></svg:path><svg:path d="M20.5 5.25c1.196.69 1.717 2.025 1.165 2.982c-.552.956-1.97 1.172-3.165.482s-1.717-2.026-1.165-2.982s1.97-1.173 3.165-.482Z"></svg:path></svg:g>`,
})
export class SolarPerfumeLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPhoneBoldDuotoneIcon],svg[solar-phone-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m16.1 13.359l.456-.453c.63-.626 1.611-.755 2.417-.317l1.91 1.039c1.227.667 1.498 2.302.539 3.255l-1.42 1.412c-.362.36-.81.622-1.326.67c-1.192.111-3.645.051-6.539-1.643zm-5.91-5.876l.287-.286c.707-.702.774-1.83.157-2.654L9.374 2.86C8.61 1.84 7.135 1.705 6.26 2.575l-1.57 1.56c-.433.432-.723.99-.688 1.61c.065 1.14.453 3.22 2.149 5.776z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M12.063 11.497c-2.946-2.929-1.88-4.008-1.873-4.015l-4.039 4.04c.667 1.004 1.535 2.081 2.664 3.204c1.14 1.134 2.26 1.975 3.322 2.596L16.1 13.36s-1.082 1.076-4.037-1.862" opacity=".6"></svg:path>`,
})
export class SolarPhoneBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPhoneCallingBoldDuotoneIcon],svg[solar-phone-calling-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15.556 14.548l-.455.48s-1.083 1.139-4.038-1.972s-1.872-4.25-1.872-4.25l.287-.303c.706-.744.773-1.938.156-2.81L8.374 3.91C7.61 2.83 6.135 2.688 5.26 3.609L3.691 5.26c-.433.457-.723 1.048-.688 1.705c.09 1.68.808 5.293 4.812 9.51c4.247 4.47 8.232 4.648 9.861 4.487c.516-.05.964-.329 1.325-.709l1.42-1.496c.96-1.01.69-2.74-.538-3.446l-1.91-1.1c-.806-.463-1.787-.327-2.417.336" opacity=".5"></svg:path><svg:path fill="currentColor" d="M13.26 1.88a.75.75 0 0 1 .861-.62c.025.005.107.02.15.03q.129.027.352.09c.297.087.712.23 1.21.458c.996.457 2.321 1.256 3.697 2.631c1.376 1.376 2.175 2.702 2.632 3.698c.228.498.37.912.457 1.21a6 6 0 0 1 .113.454l.005.031a.765.765 0 0 1-.617.878a.75.75 0 0 1-.86-.617a3 3 0 0 0-.081-.327a7.4 7.4 0 0 0-.38-1.004c-.39-.85-1.092-2.024-2.33-3.262s-2.411-1.939-3.262-2.329a7.4 7.4 0 0 0-1.003-.38a6 6 0 0 0-.318-.08a.76.76 0 0 1-.626-.861"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M13.486 5.33a.75.75 0 0 1 .927-.516l-.206.721l.206-.72h.003l.003.001l.008.002l.02.006l.056.02q.067.023.177.07c.146.062.345.158.59.303c.489.29 1.157.77 1.942 1.556c.785.785 1.266 1.453 1.556 1.942c.145.245.241.444.303.59a3 3 0 0 1 .09.233l.005.02l.003.008v.003l.001.001s0 .002-.72.208l.72-.206a.75.75 0 0 1-1.439.422l-.003-.01l-.035-.088a4 4 0 0 0-.216-.417c-.223-.376-.626-.946-1.326-1.646s-1.269-1.102-1.646-1.325a4 4 0 0 0-.504-.25l-.01-.004a.75.75 0 0 1-.505-.925" clip-rule="evenodd"></svg:path>`,
})
export class SolarPhoneCallingBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPhoneCallingLineDuotoneIcon],svg[solar-phone-calling-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M13.5 2s2.334.212 5.303 3.182c2.97 2.97 3.182 5.303 3.182 5.303m-7.778-4.949s.99.282 2.475 1.767s1.768 2.475 1.768 2.475"></svg:path><svg:path fill="currentColor" d="m15.1 15.027l-.543-.516zm.456-.48l.544.517zm2.417-.335l-.374.65zm1.91 1.1l-.374.65zm.539 3.446l.543.517zm-1.42 1.496l-.545-.517zm-1.326.71l.074.745zm-9.86-4.489l.543-.516zm-4.813-9.51l-.749.041zm6.475 1.538l.543.517zm.156-2.81l.613-.433zM8.374 3.91l-.613.433zM5.26 3.609l.544.516zM3.691 5.26l-.543-.516zm7.372 7.795l.544-.517zm4.582 2.488l.455-.48l-1.088-1.033l-.455.48zm1.954-.682l1.91 1.1l.749-1.3l-1.911-1.1zm2.279 3.38l-1.42 1.495l1.087 1.034l1.42-1.496zm-2.275 1.975c-1.435.141-5.18.02-9.244-4.258l-1.087 1.033c4.429 4.663 8.654 4.898 10.478 4.717zm-9.244-4.258c-3.876-4.081-4.526-7.523-4.607-9.033l-1.498.08c.1 1.85.884 5.634 5.018 9.986zm1.376-6.637l.286-.302l-1.087-1.033l-.287.302zm.512-4.062L8.986 3.477l-1.225.866l1.26 1.783zm-5.53-2.168L3.149 4.745l1.088 1.033l1.57-1.653zm4.474 5.713a38 38 0 0 0-.545-.515l-.002.002l-.003.003l-.05.058a1.6 1.6 0 0 0-.23.427c-.098.275-.15.639-.084 1.093c.13.892.715 2.091 2.242 3.7l1.088-1.034c-1.428-1.503-1.78-2.428-1.846-2.884c-.032-.22 0-.335.013-.372l.008-.019l-.028.037l-.018.02s-.002 0-.545-.516m1.328 4.767c1.523 1.604 2.673 2.234 3.55 2.377c.451.073.816.014 1.092-.095a1.5 1.5 0 0 0 .421-.25l.036-.034l.014-.014l.007-.006l.003-.003l.001-.002s.002-.001-.542-.518c-.544-.516-.543-.517-.543-.518l.002-.001l.002-.003l.005-.005l.01-.01l.037-.032q.015-.008-.004.001c-.02.008-.11.04-.3.009c-.402-.066-1.27-.42-2.703-1.929zM8.986 3.477C7.972 2.043 5.944 1.8 4.718 3.092l1.087 1.033c.523-.55 1.444-.507 1.956.218zM3.752 6.926c-.022-.4.152-.8.484-1.148L3.148 4.745c-.536.564-.943 1.347-.894 2.261zm14.705 12.811c-.279.294-.57.452-.854.48l.147 1.492c.747-.073 1.352-.472 1.795-.939zM10.021 9.02c.968-1.019 1.036-2.613.226-3.76l-1.225.866c.422.597.357 1.392-.088 1.86zm9.488 6.942c.821.473.982 1.635.369 2.28l1.087 1.033c1.305-1.374.925-3.673-.707-4.613zm-3.409-.898c.385-.406.986-.497 1.499-.202l.748-1.3c-1.099-.632-2.46-.45-3.335.47z" opacity=".5"></svg:path></svg:g>`,
})
export class SolarPhoneCallingLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPhoneCallingRoundedBoldDuotoneIcon],svg[solar-phone-calling-rounded-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10.038 5.316l.649 1.163c.585 1.05.35 2.426-.572 3.349c0 0-1.12 1.119.91 3.148c2.027 2.027 3.146.91 3.147.91c.923-.923 2.3-1.158 3.349-.573l1.163.65c1.585.884 1.772 3.106.379 4.5c-.837.836-1.863 1.488-2.996 1.53c-1.908.073-5.149-.41-8.4-3.66c-3.25-3.251-3.733-6.492-3.66-8.4c.043-1.133.694-2.159 1.53-2.996c1.394-1.393 3.616-1.206 4.5.38" opacity=".5"></svg:path><svg:path fill="currentColor" d="M13.26 1.88a.75.75 0 0 1 .861-.62c.025.005.107.02.15.03q.129.027.352.09c.297.087.712.23 1.21.458c.996.457 2.321 1.256 3.697 2.631c1.376 1.376 2.175 2.702 2.632 3.698c.228.498.37.912.457 1.21a6 6 0 0 1 .113.454l.005.031a.765.765 0 0 1-.617.878a.75.75 0 0 1-.86-.617a3 3 0 0 0-.081-.327a7.4 7.4 0 0 0-.38-1.004c-.39-.85-1.092-2.024-2.33-3.262s-2.411-1.939-3.262-2.329a7.4 7.4 0 0 0-1.003-.38a6 6 0 0 0-.318-.08a.76.76 0 0 1-.626-.861"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M13.486 5.33a.75.75 0 0 1 .927-.516l-.206.721l.206-.72h.003l.003.001l.008.002l.02.006l.056.02q.067.023.177.07c.146.062.345.158.59.303c.489.29 1.157.77 1.942 1.556c.785.785 1.266 1.453 1.556 1.942c.145.245.241.444.303.59a3 3 0 0 1 .09.233l.005.02l.003.008v.003l.001.001s0 .002-.72.208l.72-.206a.75.75 0 0 1-1.439.422l-.003-.01l-.035-.088a4 4 0 0 0-.216-.417c-.223-.376-.626-.946-1.326-1.646s-1.269-1.102-1.646-1.325a4 4 0 0 0-.504-.25l-.01-.004a.75.75 0 0 1-.505-.925" clip-rule="evenodd"></svg:path>`,
})
export class SolarPhoneCallingRoundedBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPhoneCallingRoundedLineDuotoneIcon],svg[solar-phone-calling-rounded-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M14 2s2.2.2 5 3s3 5 3 5m-7.793-4.464s.99.282 2.475 1.767s1.768 2.475 1.768 2.475"></svg:path><svg:path d="m10.038 5.316l.649 1.163c.585 1.05.35 2.426-.572 3.349q0 0 0 0s-1.12 1.119.91 3.148c2.027 2.027 3.146.91 3.147.91q0 0 0 0c.923-.923 2.3-1.158 3.349-.573l1.163.65c1.585.884 1.772 3.106.379 4.5c-.837.836-1.863 1.488-2.996 1.53c-1.908.073-5.149-.41-8.4-3.66c-3.25-3.251-3.733-6.492-3.66-8.4c.043-1.133.694-2.159 1.53-2.996c1.394-1.393 3.616-1.206 4.5.38Z" opacity=".5"></svg:path></svg:g>`,
})
export class SolarPhoneCallingRoundedLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPhoneLineDuotoneIcon],svg[solar-phone-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="m16.1 13.359l.456-.453c.63-.626 1.611-.755 2.417-.317l1.91 1.039c1.227.667 1.498 2.302.539 3.255l-1.42 1.412c-.362.36-.81.622-1.326.67M4.003 5.745c-.035-.62.255-1.178.689-1.61l1.57-1.56c.874-.87 2.348-.735 3.111.284l1.261 1.684c.617.824.55 1.952-.157 2.654l-.286.286"></svg:path><svg:path d="M18.676 18.965c-1.63.152-5.614-.016-9.86-4.238c-4.005-3.982-4.723-7.395-4.813-8.981" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="M16.1 13.359s-1.082 1.076-4.037-1.862s-1.872-4.015-1.872-4.015" opacity=".5"></svg:path></svg:g>`,
})
export class SolarPhoneLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPhoneRoundedBoldDuotoneIcon],svg[solar-phone-rounded-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m10.687 6.48l-.65-1.164c-.884-1.585-3.106-1.772-4.5-.379c-.836.837-1.487 1.863-1.53 2.996c-.056 1.47.217 3.728 1.83 6.173l4.278-4.278c.922-.923 1.157-2.3.572-3.349m3.485 7.405l-4.278 4.279c2.445 1.612 4.704 1.885 6.173 1.83c1.133-.043 2.159-.695 2.996-1.532c1.393-1.393 1.206-3.615-.38-4.5l-1.162-.649c-1.05-.585-2.426-.35-3.349.572" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M11.025 12.976c-2.03-2.029-.91-3.148-.91-3.148l-4.279 4.278c.482.731 1.084 1.479 1.832 2.227s1.495 1.349 2.226 1.83l4.278-4.277s-1.119 1.119-3.148-.91" opacity=".5"></svg:path>`,
})
export class SolarPhoneRoundedBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPhoneRoundedLineDuotoneIcon],svg[solar-phone-rounded-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M5.007 6.933C5.05 5.8 5.7 4.774 6.537 3.937c1.394-1.393 3.616-1.206 4.5.38l.65 1.162c.585 1.05.35 2.426-.572 3.349m5.952 10.165c1.133-.042 2.159-.694 2.996-1.53c1.393-1.394 1.206-3.616-.38-4.5l-1.162-.65c-1.05-.585-2.426-.35-3.349.572"></svg:path><svg:path d="M5.007 6.933c-.073 1.908.41 5.149 3.66 8.4c3.251 3.25 6.492 3.733 8.4 3.66m-1.895-6.108s-1.119 1.12-3.148-.91c-2.028-2.028-.91-3.147-.91-3.147" opacity=".5"></svg:path></svg:g>`,
})
export class SolarPhoneRoundedLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPieChart2BoldDuotoneIcon],svg[solar-pie-chart-2-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.222 4.601a9.5 9.5 0 0 1 1.395-.771c1.372-.615 2.058-.922 2.97-.33c.913.59.913 1.56.913 3.5v1.5c0 1.886 0 2.828.586 3.414s1.528.586 3.414.586H17c1.94 0 2.91 0 3.5.912c.592.913.285 1.599-.33 2.97a9.5 9.5 0 0 1-10.523 5.435A9.5 9.5 0 0 1 6.222 4.601" opacity=".5"></svg:path><svg:path fill="currentColor" d="M21.446 7.069a8.03 8.03 0 0 0-4.515-4.515C15.389 1.947 14 3.344 14 5v4a1 1 0 0 0 1 1h4c1.657 0 3.053-1.39 2.446-2.931"></svg:path>`,
})
export class SolarPieChart2BoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPieChart2LineDuotoneIcon],svg[solar-pie-chart-2-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M6.222 4.601a9.5 9.5 0 0 1 1.395-.771c1.372-.615 2.058-.922 2.97-.33c.913.59.913 1.56.913 3.5v1.5c0 1.886 0 2.828.586 3.414s1.528.586 3.414.586H17c1.94 0 2.91 0 3.5.912c.592.913.285 1.599-.33 2.97a9.5 9.5 0 0 1-10.523 5.435A9.5 9.5 0 0 1 6.222 4.601Z" opacity=".5"></svg:path><svg:path d="M21.446 7.069a8.03 8.03 0 0 0-4.515-4.515C15.389 1.947 14 3.344 14 5v4a1 1 0 0 0 1 1h4c1.657 0 3.053-1.39 2.446-2.931Z"></svg:path></svg:g>`,
})
export class SolarPieChart2LineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPieChart3BoldDuotoneIcon],svg[solar-pie-chart-3-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.444 3.685a10 10 0 0 1 1.662-.896c1.403-.593 2.104-.89 3-.296C12 3.086 12 4.057 12 6v2c0 1.886 0 2.828.586 3.414S14.114 12 16 12h2c1.942 0 2.914 0 3.507.895s.297 1.596-.296 3a10 10 0 0 1-11.162 5.913A10 10 0 0 1 6.444 3.685"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M13.774 2.128a.75.75 0 0 1 .913-.54a10.77 10.77 0 0 1 7.725 7.725a.75.75 0 0 1-1.453.374a9.27 9.27 0 0 0-6.646-6.646a.75.75 0 0 1-.54-.913" clip-rule="evenodd" opacity=".5"></svg:path>`,
})
export class SolarPieChart3BoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPieChart3LineDuotoneIcon],svg[solar-pie-chart-3-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M6.444 3.685a10 10 0 0 1 1.662-.896c1.403-.593 2.104-.89 3-.296C12 3.086 12 4.057 12 6v2c0 1.886 0 2.828.586 3.414S14.114 12 16 12h2c1.942 0 2.914 0 3.507.895s.297 1.596-.296 3a10 10 0 0 1-11.162 5.913A10 10 0 0 1 6.444 3.685Z"></svg:path><svg:path stroke-linecap="round" d="M14.5 2.315A10.02 10.02 0 0 1 21.685 9.5" opacity=".5"></svg:path></svg:g>`,
})
export class SolarPieChart3LineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPieChartBoldDuotoneIcon],svg[solar-pie-chart-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.163 3.775a.75.75 0 0 1-.49.94A8.465 8.465 0 0 0 2.75 12.79a8.46 8.46 0 0 0 8.46 8.461a8.465 8.465 0 0 0 8.075-5.922a.75.75 0 1 1 1.43.45c-1.268 4.04-5.043 6.972-9.504 6.972c-5.501 0-9.961-4.46-9.961-9.96c0-4.462 2.932-8.236 6.973-9.506a.75.75 0 0 1 .94.491" clip-rule="evenodd" opacity=".5"></svg:path><svg:path fill="currentColor" d="M21.913 9.947a11.35 11.35 0 0 0-7.86-7.86C12.409 1.628 11 3.054 11 4.76v6.694c0 .853.692 1.545 1.545 1.545h6.694c1.707 0 3.133-1.41 2.674-3.053"></svg:path>`,
})
export class SolarPieChartBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPieChartLineDuotoneIcon],svg[solar-pie-chart-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M20 15.552A9.215 9.215 0 0 1 11.21 22A9.21 9.21 0 0 1 2 12.79A9.215 9.215 0 0 1 8.448 4" opacity=".5"></svg:path><svg:path d="M21.913 9.947a11.35 11.35 0 0 0-7.86-7.86C12.409 1.628 11 3.054 11 4.76v6.694c0 .853.692 1.545 1.545 1.545h6.694c1.707 0 3.133-1.41 2.674-3.053Z"></svg:path></svg:g>`,
})
export class SolarPieChartLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPillBoldDuotoneIcon],svg[solar-pill-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.99 13.602a6.796 6.796 0 0 1 9.612-9.611l6.407 6.407a6.796 6.796 0 1 1-9.61 9.611z" opacity=".5"></svg:path><svg:path fill="currentColor" d="m7.807 17.419l-1.253-1.254l.495-.095h.001l.014-.004q.022-.004.073-.017q.105-.024.316-.091c.281-.09.697-.243 1.21-.49c1.024-.493 2.437-1.364 3.939-2.866c1.5-1.501 2.372-2.915 2.866-3.94c.247-.512.4-.927.49-1.209a5 5 0 0 0 .108-.389l.003-.014l.096-.496l1.253 1.253l-.032.103a11 11 0 0 1-.567 1.404c-.56 1.162-1.525 2.717-3.157 4.349c-1.631 1.631-3.187 2.597-4.348 3.156a11 11 0 0 1-1.507.6"></svg:path>`,
})
export class SolarPillBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPillLineDuotoneIcon],svg[solar-pill-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M3.99 13.602a6.796 6.796 0 0 1 9.612-9.611l6.407 6.407a6.796 6.796 0 1 1-9.61 9.611z"></svg:path><svg:path d="M16.806 7.194s-.541 2.806-3.674 5.939s-5.938 3.673-5.938 3.673" opacity=".5"></svg:path></svg:g>`,
})
export class SolarPillLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPills2BoldDuotoneIcon],svg[solar-pills-2-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.465 20.536a5 5 0 1 0 7.07-7.071a5 5 0 0 0-7.07 7.07M3 7a5 5 0 1 0 10 0A5 5 0 0 0 3 7" opacity=".5"></svg:path><svg:path fill="currentColor" d="M12.056 17.75h9.888a5 5 0 0 0 0-1.5h-9.888a5 5 0 0 0 0 1.5M3.974 4.035l6.991 6.991a5 5 0 0 0 1.06-1.06l-6.99-6.992a5 5 0 0 0-1.061 1.06"></svg:path>`,
})
export class SolarPills2BoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPills2LineDuotoneIcon],svg[solar-pills-2-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M11.536 10.536a5 5 0 0 0-7.071-7.071m7.07 7.07a5 5 0 0 1-7.071-7.071m7.072 7.072L4.464 3.464"></svg:path><svg:path d="M22 17a5 5 0 1 0-10 0m10 0a5 5 0 0 1-10 0m10 0H12" opacity=".5"></svg:path></svg:g>`,
})
export class SolarPills2LineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPills3BoldDuotoneIcon],svg[solar-pills-3-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.757 7.121A3 3 0 1 0 19 2.88a3 3 0 0 0-4.243 4.242m6.148 10.259a3.738 3.738 0 0 0-5.286-5.286l-3.524 3.524a3.738 3.738 0 0 0 5.286 5.286z" opacity=".5"></svg:path><svg:path fill="currentColor" d="M19.878 18.408v-.003l-.732-.14l-.028-.008a2 2 0 0 1-.143-.04a4.5 4.5 0 0 1-.583-.237c-.5-.24-1.2-.671-1.95-1.421s-1.18-1.451-1.422-1.951a5 5 0 0 1-.236-.583a3 3 0 0 1-.048-.17l-.141-.733h-.003l-1.266 1.266l.03.094c.06.193.16.459.313.777c.307.637.832 1.48 1.712 2.36s1.723 1.405 2.36 1.712a6 6 0 0 0 .871.343zM9.727 12.682a4.61 4.61 0 0 1-6.454 0A4.46 4.46 0 0 1 2 10.25h9a4.46 4.46 0 0 1-1.273 2.432M11 8.75H2a4.46 4.46 0 0 1 1.273-2.432a4.61 4.61 0 0 1 6.454 0A4.46 4.46 0 0 1 11 8.75"></svg:path>`,
})
export class SolarPills3BoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPills3LineDuotoneIcon],svg[solar-pills-3-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M11 9.5a4.5 4.5 0 1 0-9 0m9 0a4.5 4.5 0 0 1-9 0m9 0H2"></svg:path><svg:path stroke-linecap="round" d="M14.757 7.121A3 3 0 1 0 19 2.88a3 3 0 0 0-4.243 4.242Z" opacity=".5"></svg:path><svg:path d="M20.905 17.381a3.738 3.738 0 0 0-5.286-5.286l-3.524 3.524a3.738 3.738 0 0 0 5.286 5.286z"></svg:path><svg:path d="M14 14s.281 1.46 1.911 3.09S19 19 19 19" opacity=".5"></svg:path></svg:g>`,
})
export class SolarPills3LineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPillsBoldDuotoneIcon],svg[solar-pills-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m10.01 13.109l-.495.095l-1.923-1.923a5.437 5.437 0 1 1 7.69-7.689l1.922 1.923l-.096.495l-.001.009l-.013.054a4 4 0 0 1-.07.244c-.07.22-.19.545-.385.948c-.388.806-1.076 1.923-2.264 3.11c-1.188 1.189-2.304 1.876-3.11 2.265c-.403.194-.73.314-.948.383a4 4 0 0 1-.298.084zm3.52-8.64a.75.75 0 1 0-1.06 1.061l1.5 1.5a.75.75 0 1 0 1.06-1.06z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="m20.408 8.718l-1.953-1.952l-.003.008c-.09.28-.235.672-.462 1.143c-.454.943-1.236 2.201-2.554 3.52s-2.577 2.1-3.52 2.554a9 9 0 0 1-1.143.461l-.007.003l1.953 1.952a5.437 5.437 0 1 0 7.688-7.689"></svg:path><svg:path fill="currentColor" d="M6.717 10.138c.234.409.526.794.875 1.144l5.127 5.126c.349.35.734.641 1.143.876a6 6 0 0 1-1.62 2.959a6 6 0 1 1-5.526-10.105" opacity=".5"></svg:path>`,
})
export class SolarPillsBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPillsLineDuotoneIcon],svg[solar-pills-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M17.845 6.155s-.433 2.245-2.94 4.751c-2.505 2.506-4.75 2.938-4.75 2.938m10.253 2.563a5.437 5.437 0 0 1-7.69 0l-5.126-5.126a5.437 5.437 0 1 1 7.69-7.689l5.125 5.126a5.437 5.437 0 0 1 0 7.69Z"></svg:path><svg:path stroke-linecap="round" d="M14.5 6.5L13 5" opacity=".5"></svg:path><svg:path d="M6.73 10.135a6 6 0 1 0 7.143 7.098" opacity=".5"></svg:path></svg:g>`,
})
export class SolarPillsLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPinBoldDuotoneIcon],svg[solar-pin-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m16.219 4.838l2.964 2.967c2.012 2.014 3.018 3.021 2.784 4.107c-.235 1.085-1.567 1.585-4.23 2.586l-1.845.693c-.713.268-1.07.402-1.345.64q-.181.158-.322.352c-.212.297-.313.664-.515 1.4c-.46 1.672-.69 2.508-1.239 2.821c-.23.132-.492.2-.758.2c-.63 0-1.243-.614-2.469-1.84l-1.466-1.468l-1.079-1.08L5.285 14.8c-1.218-1.219-1.827-1.828-1.83-2.455a1.53 1.53 0 0 1 .203-.773c.313-.543 1.143-.772 2.803-1.23c.737-.203 1.105-.304 1.402-.517q.199-.144.36-.332c.236-.278.368-.637.63-1.355l.669-1.823c.987-2.693 1.48-4.04 2.568-4.28s2.102.774 4.129 2.803" clip-rule="evenodd" opacity=".5"></svg:path><svg:path fill="currentColor" d="m3.302 21.776l4.476-4.48l-1.079-1.08l-4.476 4.48a.764.764 0 0 0 1.08 1.08"></svg:path>`,
})
export class SolarPinBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPinCircleBoldDuotoneIcon],svg[solar-pin-circle-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10" clip-rule="evenodd" opacity=".5"></svg:path><svg:path fill="currentColor" d="m15.592 9.903l-1.483-1.484c-1.013-1.015-1.52-1.522-2.064-1.402s-.79.794-1.284 2.14l-.334.912c-.132.36-.197.539-.316.677a1 1 0 0 1-.18.166c-.148.107-.332.158-.7.26c-.83.228-1.246.342-1.402.614a.77.77 0 0 0-.102.386c.002.314.306.618.915 1.228l.447.448l-1.62 1.622a.75.75 0 0 0 1.062 1.06l1.618-1.621l.473.473c.613.613.92.92 1.235.92a.76.76 0 0 0 .379-.1c.274-.156.389-.574.619-1.41c.1-.368.152-.552.258-.7q.07-.098.16-.176c.138-.12.316-.187.673-.32l.922-.347c1.332-.5 1.998-.75 2.115-1.293s-.385-1.046-1.391-2.053"></svg:path>`,
})
export class SolarPinCircleBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPinCircleLineDuotoneIcon],svg[solar-pin-circle-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5" opacity=".5"></svg:circle><svg:path fill="currentColor" d="m14.495 7.975l.53-.53zm1.54 1.543l-.53.53zm-5.166 5.696l-.53.53zm-2.058-2.06l.53-.53zm6.473-.157l-.264-.702zm-.96.36l.265.702zm-3.658-3.666l-.704-.258zm.347-.948l.704.258zm-1.59 2.094l.199.723zm.728-.27l-.438-.608zm.187-.172l.57.487zm3.288 3.295l.49.567zm-.436.91l-.723-.198zm.269-.727l-.61-.437zm-5.6-1.995l-.75.004zm.106-.402l-.65-.374zm4.188 4.696v-.75zm.394-.105l-.372-.651zm-.198-9.549l.161.732zm-5.38 9.452a.75.75 0 0 0 1.062 1.06zm3.388-1.269a.75.75 0 1 0-1.061-1.06zm3.607-6.196l1.541 1.543l1.061-1.06l-1.54-1.543zm-2.564 6.18l-2.06-2.062l-1.06 1.06l2.058 2.06zm3.62-2.39l-.959.36l.528 1.404l.958-.36zM11.37 9.95l.348-.95l-1.409-.516l-.347.948zm-1.748 1.61c.328-.09.678-.175.967-.383L9.713 9.96c-.02.014-.052.034-.49.155zm.34-2.126c-.156.426-.18.458-.195.476l1.142.973c.23-.271.344-.613.461-.933zm.627 1.743q.177-.128.32-.294L9.767 9.91a.3.3 0 0 1-.054.05zm3.472 1.48c-.318.119-.658.235-.927.467l.982 1.134c.018-.015.05-.038.473-.198zm-.148 2.143c.12-.436.141-.47.155-.489l-1.219-.874c-.207.289-.292.638-.382.966zm-.779-1.676a1.8 1.8 0 0 0-.285.313l1.219.874a.3.3 0 0 1 .049-.053zm-3.793-.499c-.33-.33-.53-.533-.656-.69c-.127-.16-.076-.154-.076-.061l-1.5.01c.003.419.212.746.403.985c.19.24.465.512.768.816zm-.118-2.51c-.413.114-.786.215-1.071.33c-.284.113-.627.294-.837.658l1.3.748c-.047.081-.093.062.096-.014c.187-.075.461-.152.91-.276zm-.614 1.759q0-.012.006-.023l-1.3-.748a1.55 1.55 0 0 0-.206.78zm1.73 3.872c.305.305.579.581.82.774c.24.191.57.402.992.403l.003-1.5c.094 0 .1.05-.06-.077c-.159-.126-.362-.328-.694-.66zm2.128-1.343c-.124.452-.202.729-.277.918c-.077.19-.097.143-.015.096l.743 1.303c.367-.21.55-.555.664-.84c.115-.287.217-.663.331-1.08zm-.316 2.52c.27 0 .534-.07.767-.203l-.743-1.303a.04.04 0 0 1-.021.006zm3.354-6.874c.54.54.884.888 1.09 1.165c.097.131.135.21.149.252l.006.026v.003l1.466.317c.128-.596-.121-1.093-.416-1.491c-.287-.388-.728-.826-1.234-1.332zm.042 3.651c.67-.251 1.252-.468 1.674-.702c.433-.24.866-.59.995-1.186l-1.466-.317l-.001.003l-.017.02a1 1 0 0 1-.24.168c-.3.168-.757.341-1.472.61zm-.522-6.254c-.509-.51-.95-.954-1.34-1.243c-.399-.297-.899-.548-1.498-.416l.323 1.464h.008l.02.006a1 1 0 0 1 .254.15c.278.207.628.554 1.172 1.1zm-3.308 1.556c.266-.723.437-1.185.603-1.49a1 1 0 0 1 .183-.257l.005-.003h.002l-.323-1.465c-.599.132-.947.57-1.185 1.008c-.231.426-.445 1.014-.693 1.691zm-3.686 8.03l2.326-2.33l-1.061-1.06l-2.327 2.329z"></svg:path></svg:g>`,
})
export class SolarPinCircleLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPinLineDuotoneIcon],svg[solar-pin-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15.99 4.95l.53-.53zm3.082 3.086l-.53.53zM8.738 19.429l-.53.53zm-4.116-4.12l.53-.53zm12.945-.315l-.264-.702zm-1.917.72l.264.703zM8.332 8.383l-.704-.258zm.695-1.896l.704.258zm-3.182 4.188l.2.723zm1.457-.539l-.438-.609zm.374-.345l.57.487zm6.575 6.59l.491.568zm-.87 1.821l-.723-.199zm.536-1.454l-.61-.438zM2.719 12.755l-.75.005zm.212-.803l-.65-.374zm8.374 9.391l.001-.75zm.788-.208l-.371-.652zm-.396-19.099l.162.732zM15.46 5.48l3.082 3.086l1.061-1.06L16.52 4.42zM9.269 18.9l-4.117-4.12l-1.06 1.06l4.116 4.12zm8.034-4.607l-1.917.72l.528 1.405l1.917-.72zM9.036 8.64l.695-1.896l-1.408-.516l-.695 1.896zm-2.992 2.756c.712-.196 1.253-.334 1.696-.652l-.876-1.218c-.173.125-.398.198-1.218.424zm1.584-3.272c-.293.8-.385 1.018-.523 1.18l1.142.973c.353-.415.535-.944.79-1.637zm.112 2.62q.281-.203.507-.467l-1.142-.973a1.4 1.4 0 0 1-.241.222zm7.646 4.268c-.689.26-1.214.445-1.626.801l.982 1.135c.16-.14.377-.233 1.172-.531zM14.104 18.4c.225-.819.298-1.043.422-1.216l-1.218-.875c-.318.443-.455.983-.65 1.693zm-.344-2.586q-.256.22-.452.495l1.218.875q.095-.132.216-.236zm-8.608-1.036c-.646-.647-1.084-1.087-1.368-1.444c-.286-.359-.315-.514-.315-.583l-1.5.009c.003.582.292 1.07.641 1.508c.35.44.861.95 1.481 1.57zm.494-4.828c-.845.234-1.542.424-2.063.634c-.52.208-1.012.49-1.302.994l1.3.748c.034-.06.136-.18.56-.35s1.022-.337 1.903-.58zm-2.177 2.8a.84.84 0 0 1 .111-.424l-1.3-.748a2.34 2.34 0 0 0-.311 1.182zm4.739 7.21c.624.624 1.137 1.139 1.579 1.49c.44.352.931.642 1.517.643l.002-1.5c-.069 0-.224-.029-.585-.316c-.36-.286-.802-.727-1.452-1.378zm4.45-1.958c-.245.888-.412 1.49-.583 1.917c-.172.428-.293.53-.353.564l.743 1.303c.51-.29.792-.786 1.002-1.309c.21-.524.402-1.225.637-2.077zm-1.354 4.091c.407 0 .807-.105 1.161-.307l-.743-1.303a.84.84 0 0 1-.416.11zm7.237-13.527c1.064 1.064 1.8 1.803 2.25 2.413c.444.598.495.917.441 1.167l1.466.317c.19-.878-.16-1.647-.701-2.377c-.533-.72-1.366-1.551-2.395-2.58zm-.71 7.13c1.361-.511 2.463-.923 3.246-1.358c.795-.44 1.431-.996 1.621-1.875l-1.466-.317c-.054.25-.232.52-.883.88c-.663.369-1.638.737-3.046 1.266zM16.52 4.42c-1.036-1.037-1.872-1.876-2.595-2.414c-.734-.544-1.508-.897-2.39-.702l.324 1.464c.25-.055.569-.005 1.172.443c.612.455 1.357 1.197 2.428 2.27zM9.731 6.744c.522-1.423.885-2.41 1.25-3.08c.36-.66.628-.84.878-.896l-.323-1.464c-.882.194-1.435.84-1.872 1.642c-.431.792-.837 1.906-1.341 3.282z"></svg:path><svg:path fill="currentColor" d="M1.47 21.47a.75.75 0 0 0 1.06 1.06zm5.714-3.598a.75.75 0 0 0-1.061-1.06zM2.53 22.53l4.653-4.658l-1.061-1.06l-4.654 4.658z" opacity=".5"></svg:path>`,
})
export class SolarPinLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPinListBoldDuotoneIcon],svg[solar-pin-list-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m12.951 8.595l-.364-.357C11.07 6.746 10.31 5.999 9.488 6c-.27 0-.535.054-.782.158c-.756.32-1.153 1.3-1.948 3.261l-.057.142c-.225.556-.338.834-.518 1.058c-.138.17-.303.317-.489.433c-.245.154-.538.236-1.124.4c-.908.252-1.362.38-1.563.65a.96.96 0 0 0-.185.696c.042.333.376.66 1.043 1.317l1.017 1l1.045 1.026l.018.018l1.027 1.009c.668.656 1.001.984 1.34 1.025c.251.031.505-.034.709-.18c.275-.199.404-.645.661-1.538c.167-.575.25-.863.406-1.104q.18-.276.441-.48c.228-.178.511-.289 1.077-.51l.144-.056c1.995-.78 2.993-1.17 3.318-1.914c.106-.243.16-.504.161-.768c0-.81-.758-1.556-2.277-3.048" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="m3.27 18.786l2.674-2.627l-.018-.018l-1.045-1.027l-2.663 2.637a.723.723 0 0 0 0 1.035a.753.753 0 0 0 1.053 0" opacity=".5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M22 8.377a.74.74 0 0 1-.744.731h-4.962a.74.74 0 0 1-.744-.731c0-.404.333-.731.744-.731h4.962c.411 0 .744.327.744.731m0 4.389a.74.74 0 0 1-.744.731h-3.97a.74.74 0 0 1-.744-.731c0-.404.333-.732.744-.732h3.97c.411 0 .744.328.744.732m0 4.389a.74.74 0 0 1-.744.731h-8.932a.74.74 0 0 1-.744-.731c0-.404.333-.732.744-.732h8.932c.411 0 .744.328.744.732" clip-rule="evenodd" opacity=".5"></svg:path>`,
})
export class SolarPinListBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPinListLineDuotoneIcon],svg[solar-pin-list-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="m13.632 8.224l-.367-.367c-1.53-1.53-2.295-2.295-3.124-2.294a2 2 0 0 0-.788.162C8.59 6.053 8.19 7.058 7.39 9.07l-.057.145c-.227.57-.34.855-.523 1.085a2 2 0 0 1-.492.444c-.247.158-.542.242-1.132.41c-.916.259-1.373.389-1.576.666a1 1 0 0 0-.186.714c.042.341.379.678 1.051 1.35l3.13 3.13c.673.673 1.01 1.01 1.35 1.052a1 1 0 0 0 .715-.186c.277-.203.407-.66.667-1.576c.167-.59.251-.885.409-1.132q.181-.284.444-.492c.23-.182.515-.296 1.085-.523l.145-.058c2.01-.8 3.016-1.2 3.344-1.962a2 2 0 0 0 .162-.788c0-.83-.764-1.594-2.294-3.124Z"></svg:path><svg:path stroke-linecap="round" d="m3.347 18.142l2.694-2.694M22 8h-5m5 4.5h-4m4 4.5h-9" opacity=".5"></svg:path></svg:g>`,
})
export class SolarPinListLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPip2BoldDuotoneIcon],svg[solar-pip-2-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.955 5.061C2 6.375 2 8.251 2 12s0 5.625.955 6.939a5 5 0 0 0 1.106 1.106C5.375 21 7.251 21 11 21h2c3.75 0 5.625 0 6.939-.955a5 5 0 0 0 1.106-1.106C22 17.625 22 15.749 22 12s0-5.625-.955-6.939a5 5 0 0 0-1.106-1.106C18.625 3 16.749 3 13 3h-2c-3.75 0-5.625 0-6.939.955A5 5 0 0 0 2.955 5.06" opacity=".5"></svg:path><svg:path fill="currentColor" d="M11 14.5c0-1.087 0-1.63.174-2.06a2.3 2.3 0 0 1 1.237-1.262c.42-.178.953-.178 2.018-.178h1.142c1.065 0 1.598 0 2.018.178a2.3 2.3 0 0 1 1.237 1.262c.174.43.174.973.174 2.06s0 1.63-.174 2.06a2.3 2.3 0 0 1-1.237 1.262c-.42.178-.953.178-2.018.178H14.43c-1.065 0-1.598 0-2.018-.178a2.3 2.3 0 0 1-1.237-1.262C11 16.13 11 15.587 11 14.5"></svg:path>`,
})
export class SolarPip2BoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPip2LineDuotoneIcon],svg[solar-pip-2-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 12c0-3.75 0-5.625.955-6.939A5 5 0 0 1 4.06 3.955C5.375 3 7.251 3 11 3h2c3.75 0 5.625 0 6.939.955a5 5 0 0 1 1.106 1.106C22 6.375 22 8.251 22 12s0 5.625-.955 6.939a5 5 0 0 1-1.106 1.106C18.625 21 16.749 21 13 21h-2c-3.75 0-5.625 0-6.939-.955a5 5 0 0 1-1.106-1.106C2 17.625 2 15.749 2 12Z" opacity=".5"></svg:path><svg:path d="M11 14c0-.932 0-1.398.152-1.765a2 2 0 0 1 1.083-1.083C12.602 11 13.068 11 14 11h1c.932 0 1.398 0 1.765.152a2 2 0 0 1 1.083 1.083C18 12.602 18 13.068 18 14s0 1.398-.152 1.765a2 2 0 0 1-1.083 1.083C16.398 17 15.932 17 15 17h-1c-.932 0-1.398 0-1.765-.152a2 2 0 0 1-1.083-1.083C11 15.398 11 14.932 11 14Z"></svg:path></svg:g>`,
})
export class SolarPip2LineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPipBoldDuotoneIcon],svg[solar-pip-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 17c0-1.886 0-2.828.586-3.414S15.114 13 17 13h1c1.886 0 2.828 0 3.414.586S22 15.114 22 17s0 2.828-.586 3.414S19.886 21 18 21h-1c-1.886 0-2.828 0-3.414-.586S13 18.886 13 17"></svg:path><svg:path fill="currentColor" d="M13.996 21h-4l-1.115-.001c-3.04-.012-4.663-.12-5.713-1.17a3 3 0 0 1-.19-.214c-.843-1.021-.96-2.558-.975-5.235A21 21 0 0 1 2 13.887V11c0-3.771 0-5.657 1.17-6.828C4.344 3 6.23 3 10.002 3h4c3.77 0 5.656 0 6.828 1.172q.1.1.19.213c.842 1.021.959 2.558.975 5.235q.003.273.002.493V13c0 3.771 0 5.657-1.171 6.828S17.767 21 13.996 21" opacity=".5"></svg:path>`,
})
export class SolarPipBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPipLineDuotoneIcon],svg[solar-pip-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M22 17v-6c0-3.771 0-5.657-1.172-6.828S17.771 3 14 3h-4C6.229 3 4.343 3 3.172 4.172S2 7.229 2 11v2c0 3.771 0 5.657 1.172 6.828S6.229 21 10 21h8" opacity=".5"></svg:path><svg:path d="M13 17c0-1.886 0-2.828.586-3.414S15.114 13 17 13h1c1.886 0 2.828 0 3.414.586S22 15.114 22 17s0 2.828-.586 3.414S19.886 21 18 21h-1c-1.886 0-2.828 0-3.414-.586S13 18.886 13 17Z"></svg:path></svg:g>`,
})
export class SolarPipLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPipetteBoldDuotoneIcon],svg[solar-pipette-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10.241 5.753l1.092 1.092l5.822 5.822l1.092 1.092a1.544 1.544 0 0 0 2.183-2.184l-1.091-1.091l1.455-1.456a4.117 4.117 0 1 0-5.822-5.822L13.516 4.66l-1.091-1.09a1.544 1.544 0 1 0-2.184 2.183"></svg:path><svg:path fill="currentColor" d="M4.709 13.469c-.456.456-.684.684-.829.957a2 2 0 0 0-.203.58c-.058.304-.022.624.049 1.265l.053.476c.02.175.029.262.031.346a2.06 2.06 0 0 1-.488 1.392a5 5 0 0 1-.241.25l-.629.63a1.544 1.544 0 1 0 2.184 2.183l.628-.629c.125-.124.187-.187.25-.24c.389-.33.885-.504 1.393-.49c.084.003.171.013.346.032l.476.053c.64.071.961.107 1.265.05q.305-.06.58-.204c.273-.145.501-.373.957-.829l1.439-1.439l1.06-1.06l.94-.94l1.06-1.06l2.125-2.125l-5.822-5.822z" opacity=".5"></svg:path><svg:path fill="currentColor" d="m12.116 14l1.854 1.852l1.06-1.06l-1.853-1.854A.75.75 0 1 0 12.117 14m-2.001 2l1.854 1.852l1.06-1.06l-1.853-1.854A.75.75 0 1 0 10.117 16"></svg:path>`,
})
export class SolarPipetteBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPipetteLineDuotoneIcon],svg[solar-pipette-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="m10.531 19.291l-.53-.53zm.802-12.446l.53-.53zm-1.092-1.092l-.53.53zm2.184-2.183l.53-.53zm1.091 1.091l-.53.53a.75.75 0 0 0 1.06 0zm1.456-1.455l-.53-.53zm4.367 7.278l-.53-.53a.75.75 0 0 0 0 1.06zm1.091 1.091l-.53.53zM4.71 13.47l-.53-.53zm-2.257 5.896l.53.53zm.629-.63l-.53-.53zm1.555 2.813l.53.53zm.628-.629l-.53-.53zM3.78 16.747l-.746.082zm-.053-.476l.745-.082zm3.527 3.95l-.083.746zm.476.053l.082-.745zm-2.214.404L6 21.25zm1.392-.488l.022-.75zM3.88 14.426l-.663-.351zm-.203.58l-.737-.14zm-.355 3.48L2.75 18zm.488-1.393l.75-.022zm5.764 3.027l.351.662zm-.58.203l.14.737zm5.506-5l-.53-.531zm-2.637-9.009l-1.091-1.091l-1.061 1.06l1.092 1.092zm6.914 6.914l-1.091-1.091l-1.061 1.06l1.092 1.092zM11.894 4.1l1.092 1.092l1.06-1.06l-1.091-1.093zm2.153 1.092l1.455-1.456l-1.06-1.06l-1.456 1.455zm6.217 3.306l-1.456 1.455l1.06 1.061l1.457-1.456zm-9.461-1.123l5.822 5.822l1.06-1.06l-5.822-5.823zM5.239 14l6.624-6.624l-1.06-1.06l-6.624 6.623zm-2.256 5.896l.628-.629l-1.06-1.06l-.63.628zm2.183 2.183l.629-.629l-1.061-1.06l-.629.628zm-.642-5.414l-.053-.476l-1.49.166l.052.476zm2.646 4.303l.476.053l.165-1.491l-.475-.053zm-1.375.482c.133-.133.17-.17.205-.2l-.97-1.143c-.093.08-.18.167-.296.283zm1.541-1.973c-.162-.018-.285-.032-.407-.036l-.044 1.5c.046 0 .098.006.285.027zM6 21.25c.247-.21.562-.32.885-.31l.044-1.5a2.8 2.8 0 0 0-1.9.666zm-4.078.828a2.294 2.294 0 0 0 3.244 0l-1.06-1.06a.794.794 0 0 1-1.123 0zm2.257-9.14c-.424.424-.752.74-.962 1.137l1.326.702c.08-.15.207-.289.696-.778zm.292 3.25c-.076-.687-.09-.875-.058-1.042l-1.473-.28c-.084.44-.026.893.04 1.488zm-1.254-2.113a2.8 2.8 0 0 0-.277.792l1.473.279q.037-.194.13-.369zM20.264 3.736a3.367 3.367 0 0 1 0 4.762l1.06 1.06a4.865 4.865 0 0 0 0-6.882zm-4.762 0a3.367 3.367 0 0 1 4.762 0l1.06-1.06a4.867 4.867 0 0 0-6.882 0zm4.398 9.492a.794.794 0 0 1-1.123 0l-1.06 1.061a2.294 2.294 0 0 0 3.244 0zM3.61 19.266c.116-.116.204-.203.283-.295L2.75 18c-.03.035-.066.072-.2.205zm-.578-2.436c.021.187.026.239.028.285l1.499-.044c-.004-.122-.018-.245-.036-.407zm.86 2.14c.45-.529.687-1.205.667-1.899l-1.5.044c.01.323-.1.638-.31.885zM10.773 4.1a.794.794 0 0 1 1.122 0l1.061-1.06a2.294 2.294 0 0 0-3.244 0zm-7.79 16.917a.794.794 0 0 1 0-1.122l-1.06-1.06a2.294 2.294 0 0 0 0 3.243zm7.79-15.794a.794.794 0 0 1 0-1.123L9.71 3.04a2.294 2.294 0 0 0 0 3.243zm10.189 9.066a2.294 2.294 0 0 0 0-3.244l-1.061 1.06c.31.31.31.813 0 1.123zM10 18.761c-.489.489-.628.617-.778.696l.702 1.325c.396-.21.713-.537 1.136-.96zM7.646 21.02c.595.066 1.047.124 1.487.04l-.279-1.473c-.167.031-.355.018-1.043-.058zm1.577-1.563a1.3 1.3 0 0 1-.369.13l.28 1.473a2.8 2.8 0 0 0 .791-.277zm9.585-8.443l1.092 1.092l1.06-1.061l-1.091-1.092zm-7.746 8.807l3.968-3.968l-1.06-1.061L10 18.761zm3.968-3.968l2.656-2.656l-1.061-1.06l-2.655 2.655z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m14.5 15.322l-1.854-1.853m-.146 3.853l-1.854-1.853" opacity=".5"></svg:path></svg:g>`,
})
export class SolarPipetteLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPlaaylistMinimalisticBoldDuotoneIcon],svg[solar-plaaylist-minimalistic-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.25 6A.75.75 0 0 1 3 5.25h17a.75.75 0 0 1 0 1.5H3A.75.75 0 0 1 2.25 6m0 5a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75m0 5a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75" clip-rule="evenodd" opacity=".5"></svg:path><svg:path fill="currentColor" d="M19.125 10.685c1.642.948 2.463 1.422 2.723 2.05a2 2 0 0 1 0 1.53c-.26.627-1.081 1.101-2.723 2.05c-1.642.947-2.463 1.421-3.136 1.333a2 2 0 0 1-1.326-.766c-.413-.538-.413-1.486-.413-3.382s0-2.844.413-3.383a2 2 0 0 1 1.326-.765c.673-.089 1.494.385 3.136 1.333"></svg:path>`,
})
export class SolarPlaaylistMinimalisticBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPlaaylistMinimalisticLineDuotoneIcon],svg[solar-plaaylist-minimalistic-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M20 6H3m7 10H3m7-5H3" opacity=".5"></svg:path><svg:path d="M19.125 10.685c1.642.948 2.463 1.422 2.723 2.05a2 2 0 0 1 0 1.53c-.26.627-1.081 1.101-2.723 2.05c-1.642.947-2.463 1.421-3.136 1.333a2 2 0 0 1-1.326-.766c-.413-.538-.413-1.486-.413-3.382s0-2.844.413-3.383a2 2 0 0 1 1.326-.765c.673-.089 1.494.385 3.136 1.333Z"></svg:path></svg:g>`,
})
export class SolarPlaaylistMinimalisticLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPlain2BoldDuotoneIcon],svg[solar-plain-2-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.796 18.204L21.512 2.488c-.988-.989-2.86-.364-6.606.884l-9.331 3.11c-2.082.694-3.123 1.041-3.439 1.804q-.112.271-.133.564c-.059.824.717 1.6 2.269 3.151l.283.283c.254.254.382.382.478.523c.19.28.297.607.31.945c.008.171-.019.35-.072.705c-.196 1.304-.294 1.956-.179 2.458c.114.495.362.938.704 1.289" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="m17.498 18.486l3.13-9.392c1.25-3.745 1.873-5.617.885-6.606L5.797 18.204c.348.356.794.617 1.296.74c.5.122 1.153.033 2.46-.144l.071-.01c.369-.05.553-.075.73-.064c.32.02.63.124.898.303c.147.099.278.23.541.493l.251.251c1.51 1.51 2.266 2.265 3.067 2.226c.22-.01.438-.062.64-.151c.734-.323 1.072-1.336 1.747-3.362" opacity=".5"></svg:path>`,
})
export class SolarPlain2BoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPlain2LineDuotoneIcon],svg[solar-plain-2-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="m17.498 18.485l3.13-9.391c1.248-3.745 1.873-5.618.884-6.606c-.988-.989-2.86-.364-6.606.884l-9.331 3.11c-2.082.694-3.123 1.041-3.439 1.804q-.112.271-.133.564c-.059.824.717 1.6 2.269 3.151l.283.283c.254.254.382.382.478.523c.19.28.297.607.31.945c.008.171-.019.35-.072.705c-.196 1.304-.294 1.956-.179 2.458c.23 1 1.004 1.785 2 2.028c.5.123 1.154.034 2.46-.143l.072-.01c.368-.05.552-.075.729-.064c.32.019.63.124.898.303c.147.098.279.23.541.492l.252.252c1.51 1.51 2.265 2.265 3.066 2.226c.22-.011.438-.062.64-.152c.734-.323 1.072-1.336 1.747-3.362Z"></svg:path><svg:path stroke-linecap="round" d="M6 18L21 3" opacity=".5"></svg:path></svg:g>`,
})
export class SolarPlain2LineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
