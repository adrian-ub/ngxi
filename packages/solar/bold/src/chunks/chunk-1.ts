import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarHikingBoldIcon],svg[solar-hiking-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 4.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M19 7.25a.75.75 0 0 1 .75.75v14a.75.75 0 0 1-1.5 0v-9.899c-.485.405-.87.72-1.307.879a2.75 2.75 0 0 1-1.886 0c-.453-.165-.85-.497-1.36-.923l-.093-.077l-.081-.068a6 6 0 0 0-.47-.37a5.3 5.3 0 0 0-1.2-.587a8 8 0 0 0-.386-.09a1 1 0 0 0-.092-.014l-.019.008a.5.5 0 0 0-.191.143a.3.3 0 0 0-.012.048c-.01.053-.017.124-.031.27l-.162 1.623c-.094.934-.105 1.184-.04 1.393q.059.184.169.342c.125.18.33.324 1.126.822l.105.066c.796.496 1.347.84 1.745 1.335q.3.375.498.812c.261.579.318 1.226.401 2.16l.011.125l.172 1.935a.75.75 0 0 1-1.494.134l-.172-1.936c-.098-1.107-.142-1.483-.285-1.802a2.3 2.3 0 0 0-.3-.487c-.219-.273-.534-.481-1.476-1.07l-.112-.07c-.63-.393-1.126-.702-1.45-1.165a2.8 2.8 0 0 1-.369-.754c-.169-.539-.11-1.12-.035-1.859l.013-.13l.162-1.622l.005-.048c.022-.23.047-.485.17-.752c.135-.297.373-.53.594-.686s.52-.302.846-.33c.184-.016.356.008.505.036c.144.028.316.07.507.118l.026.006l.018.005l.029.008c.008.003.042.014.082.032l.02.009l.054.019a6.8 6.8 0 0 1 1.425.72c.205.144.342.258.561.44l.012.01l.082.069c.648.54.832.68 1.006.743c.277.1.58.1.858 0c.174-.064.358-.203 1.007-.743l.814-.68V8a.75.75 0 0 1 .75-.75m-6.63 3.697l.005-.003zm-.541-1.4h.002l.007-.003zm-3.117.216a.75.75 0 0 1-.475.948l-1.672.558a1.19 1.19 0 0 0-.815 1.13c0 .085.047.161.122.199l2.463 1.231a.75.75 0 1 1-.67 1.342L5.2 13.939a1.72 1.72 0 0 1-.951-1.54c0-1.158.742-2.187 1.84-2.553l1.673-.558a.75.75 0 0 1 .949.475m.704 7.113a.75.75 0 0 1 .208 1.04l-3 4.5a.75.75 0 1 1-1.248-.832l3-4.5a.75.75 0 0 1 1.04-.208" clip-rule="evenodd"></svg:path>`,
})
export class SolarHikingBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHikingMinimalisticBoldIcon],svg[solar-hiking-minimalistic-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 5.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M19 6.25a.75.75 0 0 1 .75.75v14a.75.75 0 1 1-1.5 0V10.994a5.88 5.88 0 0 1-5.636.15a1.098 1.098 0 0 0-1.658.832l-.068.686a1.54 1.54 0 0 0 .714 1.455l.333.208a6.59 6.59 0 0 1 3.07 5.001l.142 1.607a.75.75 0 1 1-1.494.134l-.143-1.608a5.09 5.09 0 0 0-2.37-3.862l-.333-.208a3.04 3.04 0 0 1-1.412-2.876l.069-.687c.188-1.885 2.264-2.938 3.894-1.986a4.38 4.38 0 0 0 4.739-.563l.153-.128V7a.75.75 0 0 1 .75-.75m-9.81 9.525a.75.75 0 0 1 .535.916L9 16.5l.725.19v.003l-.001.005l-.005.016l-.016.058q-.02.076-.06.207c-.05.174-.125.415-.219.686c-.181.525-.456 1.223-.796 1.745c-.357.548-.918 1.101-1.35 1.493a16 16 0 0 1-.751.637l-.05.039l-.014.01l-.005.005L6 21l.458.594a.75.75 0 0 1-.916-1.188l.003-.002l.01-.008l.04-.032l.157-.126c.133-.11.317-.265.518-.447c.417-.377.856-.823 1.102-1.2c.234-.36.46-.912.635-1.417a14 14 0 0 0 .25-.803l.014-.048l.003-.011v-.003a.75.75 0 0 1 .917-.534" clip-rule="evenodd"></svg:path>`,
})
export class SolarHikingMinimalisticBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHikingRoundBoldIcon],svg[solar-hiking-round-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 4.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M19 7.25a.75.75 0 0 1 .75.75v14a.75.75 0 0 1-1.5 0V11.994a5.88 5.88 0 0 1-5.636.15a1.098 1.098 0 0 0-1.658.832l-.068.686a1.54 1.54 0 0 0 .714 1.455l.333.208a6.59 6.59 0 0 1 3.07 5.001l.143 1.607a.75.75 0 0 1-1.495.134l-.143-1.608a5.09 5.09 0 0 0-2.37-3.862l-.333-.208a3.04 3.04 0 0 1-1.412-2.876l.069-.687c.188-1.885 2.264-2.938 3.894-1.986a4.38 4.38 0 0 0 4.739-.563l.153-.128V8a.75.75 0 0 1 .75-.75M9.749 9.955a.75.75 0 0 1-.704.794l-2.389.143a.971.971 0 0 0-.581 1.692l2.087 1.856a.75.75 0 1 1-.997 1.12L5.08 13.705a2.471 2.471 0 0 1 1.487-4.31l2.389-.144a.75.75 0 0 1 .794.704m-.558 6.82c.4.105.64.515.534.916L9 17.5l.725.19v.003l-.001.005l-.005.016l-.016.058q-.02.076-.06.207a16 16 0 0 1-.219.686c-.181.525-.456 1.223-.796 1.745c-.357.548-.918 1.101-1.35 1.493a16 16 0 0 1-.751.637l-.05.039l-.014.01l-.005.005l-.445-.577l.445.577a.75.75 0 0 1-.916-1.188l.003-.002l.01-.008l.04-.032l.157-.126c.133-.11.317-.265.518-.447c.417-.377.856-.823 1.102-1.2c.234-.36.46-.912.635-1.417a14 14 0 0 0 .25-.803l.014-.048l.003-.011v-.003a.75.75 0 0 1 .917-.534" clip-rule="evenodd"></svg:path>`,
})
export class SolarHikingRoundBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHistory2BoldIcon],svg[solar-history-2-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.25 2a.75.75 0 0 1 .75-.75c5.937 0 10.75 4.813 10.75 10.75S17.937 22.75 12 22.75S1.25 17.937 1.25 12a.75.75 0 0 1 1.5 0A9.25 9.25 0 1 0 12 2.75a.75.75 0 0 1-.75-.75M12 8.25a.75.75 0 0 1 .75.75v3.25H16a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75V9a.75.75 0 0 1 .75-.75M9.1 2.398a.75.75 0 0 1-.43.97a9 9 0 0 0-.42.173a.75.75 0 1 1-.608-1.37q.24-.108.488-.203a.75.75 0 0 1 .97.43M5.648 4.24a.75.75 0 0 1-.026 1.06a9 9 0 0 0-.321.322a.75.75 0 1 1-1.087-1.035q.183-.19.373-.373a.75.75 0 0 1 1.06.026M3.16 7.261a.75.75 0 0 1 .381.99q-.092.207-.174.419a.75.75 0 0 1-1.399-.54q.094-.247.202-.488a.75.75 0 0 1 .99-.381" clip-rule="evenodd"></svg:path>`,
})
export class SolarHistory2BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHistory3BoldIcon],svg[solar-history-3-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.1 2.398a.75.75 0 0 1-.43.97a9 9 0 0 0-.42.173a.75.75 0 1 1-.608-1.37q.24-.108.488-.203a.75.75 0 0 1 .97.43M5.648 4.24a.75.75 0 0 1-.026 1.06a9 9 0 0 0-.321.322a.75.75 0 1 1-1.087-1.035q.183-.19.373-.373a.75.75 0 0 1 1.06.026M3.16 7.261a.75.75 0 0 1 .381.99q-.092.207-.174.419a.75.75 0 0 1-1.399-.54q.094-.247.202-.488a.75.75 0 0 1 .99-.381m-1.139 3.743a.75.75 0 0 1 .732.768a10 10 0 0 0 0 .456a.75.75 0 0 1-1.5.036a11 11 0 0 1 0-.528a.75.75 0 0 1 .768-.732M21.603 14.9a.75.75 0 0 1 .429.97q-.095.247-.202.488a.75.75 0 1 1-1.371-.609a9 9 0 0 0 .174-.419a.75.75 0 0 1 .97-.43m-19.205 0a.75.75 0 0 1 .97.43q.081.211.173.42a.75.75 0 1 1-1.37.608q-.108-.24-.203-.488a.75.75 0 0 1 .43-.97m17.362 3.452c.3.286.311.76.026 1.06q-.183.192-.373.374a.75.75 0 1 1-1.035-1.087q.165-.156.321-.32a.75.75 0 0 1 1.06-.027m-15.52 0a.75.75 0 0 1 1.06.026q.157.165.322.321a.75.75 0 1 1-1.035 1.087a11 11 0 0 1-.373-.373a.75.75 0 0 1 .026-1.06m3.021 2.488a.75.75 0 0 1 .99-.381q.207.092.419.174a.75.75 0 0 1-.54 1.399a11 11 0 0 1-.488-.202a.75.75 0 0 1-.381-.99m9.478 0a.75.75 0 0 1-.381.99q-.24.107-.488.202a.75.75 0 1 1-.54-1.4a9 9 0 0 0 .42-.173a.75.75 0 0 1 .989.381m-5.735 1.139a.75.75 0 0 1 .768-.732a9 9 0 0 0 .456 0a.75.75 0 0 1 .036 1.5a11 11 0 0 1-.528 0a.75.75 0 0 1-.732-.768M12 2.75A9.25 9.25 0 0 1 21.25 12a.75.75 0 0 0 1.5 0c0-5.937-4.813-10.75-10.75-10.75a.75.75 0 0 0 0 1.5m0 5.5a.75.75 0 0 1 .75.75v3.25H16a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75V9a.75.75 0 0 1 .75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarHistory3BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHistoryBoldIcon],svg[solar-history-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.079 5.069c3.795-3.79 9.965-3.75 13.783.069c3.82 3.82 3.86 9.993.064 13.788s-9.968 3.756-13.788-.064a9.81 9.81 0 0 1-2.798-8.28a.75.75 0 1 1 1.487.203a8.31 8.31 0 0 0 2.371 7.017c3.245 3.244 8.468 3.263 11.668.064c3.199-3.2 3.18-8.423-.064-11.668c-3.243-3.242-8.463-3.263-11.663-.068l.748.003a.75.75 0 1 1-.007 1.5l-2.546-.012a.75.75 0 0 1-.746-.747L3.575 4.33a.75.75 0 1 1 1.5-.008zm6.92 2.18a.75.75 0 0 1 .75.75v3.69l2.281 2.28a.75.75 0 1 1-1.06 1.061l-2.72-2.72V8a.75.75 0 0 1 .75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarHistoryBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHome2BoldIcon],svg[solar-home-2-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.52 7.823C2 8.77 2 9.915 2 12.203v1.522c0 3.9 0 5.851 1.172 7.063S6.229 22 10 22h4c3.771 0 5.657 0 6.828-1.212S22 17.626 22 13.725v-1.521c0-2.289 0-3.433-.52-4.381c-.518-.949-1.467-1.537-3.364-2.715l-2-1.241C14.111 2.622 13.108 2 12 2s-2.11.622-4.116 1.867l-2 1.241C3.987 6.286 3.038 6.874 2.519 7.823M11.25 18a.75.75 0 0 0 1.5 0v-3a.75.75 0 0 0-1.5 0z" clip-rule="evenodd"></svg:path>`,
})
export class SolarHome2BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHomeAddAngleBoldIcon],svg[solar-home-add-angle-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.335 7.875c-.54 1.127-.35 2.446.03 5.083l.278 1.937c.487 3.388.731 5.081 1.906 6.093S7.447 22 10.894 22h2.212c3.447 0 5.17 0 6.345-1.012s1.419-2.705 1.906-6.093l.279-1.937c.38-2.637.57-3.956.029-5.083s-1.691-1.813-3.992-3.183l-1.385-.825C14.2 2.622 13.154 2 12 2s-2.199.622-4.288 1.867l-1.385.825c-2.3 1.37-3.451 2.056-3.992 3.183M12 9.25a.75.75 0 0 1 .75.75v2.25H15a.75.75 0 0 1 0 1.5h-2.25V16a.75.75 0 0 1-1.5 0v-2.25H9a.75.75 0 0 1 0-1.5h2.25V10a.75.75 0 0 1 .75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarHomeAddAngleBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHomeAddBoldIcon],svg[solar-home-add-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.52 7.823C2 8.77 2 9.915 2 12.203v1.522c0 3.9 0 5.851 1.172 7.063S6.229 22 10 22h4c3.771 0 5.657 0 6.828-1.212S22 17.626 22 13.725v-1.521c0-2.289 0-3.433-.52-4.381c-.518-.949-1.467-1.537-3.364-2.715l-2-1.241C14.111 2.622 13.108 2 12 2s-2.11.622-4.116 1.867l-2 1.241C3.987 6.286 3.038 6.874 2.519 7.823M12.75 11a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V17a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25z" clip-rule="evenodd"></svg:path>`,
})
export class SolarHomeAddBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHomeAngle2BoldIcon],svg[solar-home-angle-2-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.335 7.875c-.54 1.127-.35 2.446.03 5.083l.278 1.937c.487 3.388.731 5.081 1.906 6.093S7.447 22 10.894 22h2.212c3.447 0 5.17 0 6.345-1.012s1.419-2.705 1.906-6.093l.279-1.937c.38-2.637.57-3.956.029-5.083s-1.691-1.813-3.992-3.183l-1.385-.825C14.2 2.622 13.154 2 12 2s-2.199.622-4.288 1.867l-1.385.825c-2.3 1.37-3.451 2.056-3.992 3.183M12 18.75a.75.75 0 0 1-.75-.75v-3a.75.75 0 0 1 1.5 0v3a.75.75 0 0 1-.75.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarHomeAngle2BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHomeAngleBoldIcon],svg[solar-home-angle-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.335 7.875c-.54 1.127-.35 2.446.03 5.083l.278 1.937c.487 3.388.731 5.081 1.906 6.093S7.447 22 10.894 22h2.212c3.447 0 5.17 0 6.345-1.012s1.419-2.705 1.906-6.093l.279-1.937c.38-2.637.57-3.956.029-5.083s-1.691-1.813-3.992-3.183l-1.385-.825C14.2 2.622 13.154 2 12 2s-2.199.622-4.288 1.867l-1.385.825c-2.3 1.37-3.451 2.056-3.992 3.183M8.25 18a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarHomeAngleBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHomeBoldIcon],svg[solar-home-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:path id="solarHomeBold0" fill="currentColor" d="M10.75 9.5a1.25 1.25 0 1 1 2.5 0a1.25 1.25 0 0 1-2.5 0"></svg:path></svg:defs><svg:path fill="currentColor" d="M18.5 3H16a.5.5 0 0 0-.5.5v.059l3.5 2.8V3.5a.5.5 0 0 0-.5-.5"></svg:path><svg:use href="#solarHomeBold0" fill-rule="evenodd" clip-rule="evenodd"></svg:use><svg:path fill="currentColor" fill-rule="evenodd" d="m20.75 10.96l.782.626a.75.75 0 0 0 .936-1.172l-8.125-6.5a3.75 3.75 0 0 0-4.686 0l-8.125 6.5a.75.75 0 0 0 .937 1.172l.781-.626v10.29H2a.75.75 0 0 0 0 1.5h20a.75.75 0 0 0 0-1.5h-1.25zM9.25 9.5a2.75 2.75 0 1 1 5.5 0a2.75 2.75 0 0 1-5.5 0m2.8 3.75c.664 0 1.237 0 1.696.062c.492.066.963.215 1.345.597s.531.853.597 1.345c.058.43.062.96.062 1.573v4.423h-1.5V17c0-.728-.002-1.2-.048-1.546c-.044-.325-.114-.427-.172-.484s-.159-.128-.484-.172c-.347-.046-.818-.048-1.546-.048s-1.2.002-1.546.048c-.325.044-.427.115-.484.172s-.128.159-.172.484c-.046.347-.048.818-.048 1.546v4.25h-1.5v-4.3c0-.664 0-1.237.062-1.696c.066-.492.215-.963.597-1.345s.854-.531 1.345-.597c.459-.062 1.032-.062 1.697-.062z" clip-rule="evenodd"></svg:path><svg:use href="#solarHomeBold0" fill-rule="evenodd" clip-rule="evenodd"></svg:use>`,
})
export class SolarHomeBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHomeSmileAngleBoldIcon],svg[solar-home-smile-angle-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.106 22h-2.212c-3.447 0-5.17 0-6.345-1.012s-1.419-2.705-1.906-6.093l-.279-1.937c-.38-2.637-.57-3.956-.029-5.083s1.691-1.813 3.992-3.183l1.385-.825C9.8 2.622 10.846 2 12 2s2.199.622 4.288 1.867l1.385.825c2.3 1.37 3.451 2.056 3.992 3.183s.35 2.446-.03 5.083l-.278 1.937c-.487 3.388-.731 5.081-1.906 6.093S16.553 22 13.106 22m-4.708-6.447a.75.75 0 0 1 1.049-.156c.728.54 1.607.853 2.553.853s1.825-.313 2.553-.853a.75.75 0 1 1 .894 1.205A5.77 5.77 0 0 1 12 17.75a5.77 5.77 0 0 1-3.447-1.148a.75.75 0 0 1-.155-1.049" clip-rule="evenodd"></svg:path>`,
})
export class SolarHomeSmileAngleBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHomeSmileBoldIcon],svg[solar-home-smile-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.52 7.823C2 8.77 2 9.915 2 12.203v1.522c0 3.9 0 5.851 1.172 7.063S6.229 22 10 22h4c3.771 0 5.657 0 6.828-1.212S22 17.626 22 13.725v-1.521c0-2.289 0-3.433-.52-4.381c-.518-.949-1.467-1.537-3.364-2.715l-2-1.241C14.111 2.622 13.108 2 12 2s-2.11.622-4.116 1.867l-2 1.241C3.987 6.286 3.038 6.874 2.519 7.823m6.927 7.575a.75.75 0 1 0-.894 1.204A5.77 5.77 0 0 0 12 17.75a5.77 5.77 0 0 0 3.447-1.148a.75.75 0 1 0-.894-1.204A4.27 4.27 0 0 1 12 16.25a4.27 4.27 0 0 1-2.553-.852" clip-rule="evenodd"></svg:path>`,
})
export class SolarHomeSmileBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHomeWifiAngleBoldIcon],svg[solar-home-wifi-angle-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.335 7.875c-.54 1.127-.35 2.446.03 5.083l.278 1.937c.487 3.388.731 5.081 1.906 6.093S7.447 22 10.894 22h2.212c3.447 0 5.17 0 6.345-1.012s1.419-2.705 1.906-6.093l.279-1.937c.38-2.637.57-3.956.029-5.083s-1.691-1.813-3.992-3.183l-1.385-.825C14.2 2.622 13.154 2 12 2s-2.199.622-4.288 1.867l-1.385.825c-2.3 1.37-3.451 2.056-3.992 3.183M13.45 16.51c-.808-.872-2.092-.872-2.9 0a.75.75 0 1 1-1.1-1.02c1.401-1.513 3.699-1.513 5.1 0a.75.75 0 0 1-1.1 1.02m-4.9-2.16c1.913-2.064 4.988-2.064 6.9 0a.75.75 0 1 0 1.1-1.019c-2.506-2.705-6.594-2.705-9.1 0a.75.75 0 1 0 1.1 1.02m8.9-2.158c-3.017-3.256-7.883-3.256-10.9 0a.75.75 0 1 1-1.1-1.02c3.61-3.896 9.49-3.896 13.1 0a.75.75 0 1 1-1.1 1.02" clip-rule="evenodd"></svg:path>`,
})
export class SolarHomeWifiAngleBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHomeWifiBoldIcon],svg[solar-home-wifi-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14 22h-4c-3.771 0-5.657 0-6.828-1.212S2 17.626 2 13.725v-1.521c0-2.289 0-3.433.52-4.381c.518-.949 1.467-1.537 3.364-2.715l2-1.241C9.889 2.622 10.892 2 12 2s2.11.622 4.116 1.867l2 1.241c1.897 1.178 2.846 1.766 3.365 2.715S22 9.915 22 12.203v1.522c0 3.9 0 5.851-1.172 7.063S17.771 22 14 22m3.45-9.808c-3.017-3.256-7.883-3.256-10.9 0a.75.75 0 1 1-1.1-1.02c3.61-3.896 9.49-3.896 13.1 0a.75.75 0 1 1-1.1 1.02m-2 2.159c-1.912-2.065-4.987-2.065-6.9 0a.75.75 0 1 1-1.1-1.02c2.506-2.705 6.594-2.705 9.1 0a.75.75 0 1 1-1.1 1.02m-2 2.158c-.808-.871-2.092-.871-2.9 0a.75.75 0 1 1-1.1-1.019c1.401-1.513 3.699-1.513 5.1 0a.75.75 0 0 1-1.1 1.02" clip-rule="evenodd"></svg:path>`,
})
export class SolarHomeWifiBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHospitalBoldIcon],svg[solar-hospital-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M21.5 8.5c0-1.404 0-2.107-.337-2.611a2 2 0 0 0-.552-.552c-.441-.295-1.034-.332-2.115-.336q.005.438.004.91V7.25h1a.75.75 0 0 1 0 1.5h-1v1.5h1a.75.75 0 0 1 0 1.5h-1v1.5h1a.75.75 0 0 1 0 1.5h-1v6.5H17V6c0-1.886 0-2.828-.586-3.414S14.886 2 13 2h-2c-1.886 0-2.828 0-3.414.586S7 4.114 7 6v15.25H5.5v-6.5h-1a.75.75 0 0 1 0-1.5h1v-1.5h-1a.75.75 0 0 1 0-1.5h1v-1.5h-1a.75.75 0 0 1 0-1.5h1V5.91q-.001-.47.004-.91c-1.081.005-1.674.042-2.115.337a2 2 0 0 0-.552.552C2.5 6.393 2.5 7.096 2.5 8.5v12.75H2a.75.75 0 0 0 0 1.5h20a.75.75 0 0 0 0-1.5h-.5zM12 4.25a.75.75 0 0 1 .75.75v1.25H14a.75.75 0 0 1 0 1.5h-1.25V9a.75.75 0 0 1-1.5 0V7.75H10a.75.75 0 0 1 0-1.5h1.25V5a.75.75 0 0 1 .75-.75M9.25 12a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75m0 3a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75M12 18.25a.75.75 0 0 1 .75.75v2.25h-1.5V19a.75.75 0 0 1 .75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarHospitalBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHourglassBoldIcon],svg[solar-hourglass-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.198 3.3C5.8 2 7.867 2 12 2s6.2 0 6.802 1.3q.078.166.13.346c.41 1.387-1.052 2.995-3.974 6.21L13 12l1.958 2.143c2.922 3.216 4.383 4.824 3.974 6.21a2.5 2.5 0 0 1-.13.348C18.2 22 16.133 22 12 22s-6.2 0-6.802-1.3a2.5 2.5 0 0 1-.13-.346c-.41-1.387 1.052-2.995 3.974-6.21L11 12L9.042 9.857C6.12 6.64 4.66 5.033 5.068 3.647q.052-.18.13-.348"></svg:path>`,
})
export class SolarHourglassBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarHourglassLineBoldIcon],svg[solar-hourglass-line-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.198 3.3C5.8 2 7.867 2 12 2s6.2 0 6.802 1.3q.078.166.13.346c.41 1.387-1.052 2.995-3.974 6.21L13 12l1.958 2.143c2.922 3.216 4.383 4.824 3.974 6.21a2.5 2.5 0 0 1-.13.348C18.2 22 16.133 22 12 22s-6.2 0-6.802-1.3a2.5 2.5 0 0 1-.13-.346c-.41-1.387 1.052-2.995 3.974-6.21L11 12L9.042 9.857C6.12 6.64 4.66 5.033 5.068 3.647q.052-.18.13-.348M10 17.75a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5zM9.25 5.5a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarHourglassLineBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarImportBoldIcon],svg[solar-import-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M15.53 10.47a.75.75 0 0 0-1.06 0l-1.72 1.72V4a.75.75 0 0 0-1.5 0v8.19l-1.72-1.72a.75.75 0 0 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l3-3a.75.75 0 0 0 0-1.06" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M17.748 12c-.448 0-.84.274-1.157.591l-3 3a2.25 2.25 0 0 1-3.182 0l-3-3C7.092 12.274 6.7 12 6.252 12H4a8 8 0 1 0 16 0z"></svg:path>`,
})
export class SolarImportBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarInboxArchiveBoldIcon],svg[solar-inbox-archive-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12m3-3.5v-1A1.5 1.5 0 0 1 6.5 6h11A1.5 1.5 0 0 1 19 7.5v1a2.5 2.5 0 0 0-1.5-.5h-11c-.563 0-1.082.186-1.5.5m0 2v1a2.5 2.5 0 0 1 1.5-.5h11a2.5 2.5 0 0 1 1.5.5v-1A1.5 1.5 0 0 0 17.5 9h-11A1.5 1.5 0 0 0 5 10.5m15 3.75a.75.75 0 1 1 0 1.5h-2.343c-.879 0-1.11.013-1.307.095c-.198.082-.37.236-.991.857l-.305.305c-.432.432-.773.774-1.207.98q-.122.057-.248.102c-.453.162-.936.162-1.547.161h-.218c-.646 0-1.157.001-1.63-.178a3 3 0 0 1-.26-.114c-.452-.227-.797-.603-1.235-1.079l-.11-.121c-.59-.64-.753-.799-.944-.889l-.061-.027c-.195-.079-.424-.092-1.293-.092H4a.75.75 0 0 1 0-1.5h1.02v-1A1.5 1.5 0 0 1 6.5 12h11a1.5 1.5 0 0 1 1.48 1.25v1z" clip-rule="evenodd"></svg:path>`,
})
export class SolarInboxArchiveBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarInboxBoldIcon],svg[solar-inbox-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.464 20.536C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465c1.271-1.27 1.44-3.213 1.462-6.785H18.84c-.974 0-1.229.016-1.442.114c-.214.099-.392.282-1.026 1.02l-.605.707l-.088.102c-.502.587-.9 1.052-1.45 1.305s-1.162.253-1.934.252h-.589c-.773 0-1.385.002-1.935-.252c-.55-.253-.948-.718-1.45-1.305l-.088-.102l-.605-.706c-.634-.74-.812-.922-1.026-1.02c-.213-.099-.468-.115-1.442-.115H2.003c.023 3.572.19 5.515 1.461 6.785"></svg:path><svg:path fill="currentColor" d="M20.536 3.464C19.07 2 16.714 2 12 2S4.929 2 3.464 3.464C2 4.93 2 7.286 2 12v.25h3.295c.772 0 1.384-.002 1.934.252c.55.253.948.718 1.45 1.305l.088.102l.605.706c.634.74.812.922 1.026 1.02c.213.099.468.115 1.442.115h.32c.974 0 1.229-.016 1.442-.114c.214-.099.392-.282 1.026-1.02l.605-.707l.088-.102c.502-.587.9-1.052 1.45-1.305c.55-.254 1.162-.253 1.935-.252H22V12c0-4.714 0-7.071-1.465-8.536"></svg:path>`,
})
export class SolarInboxBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarInboxInBoldIcon],svg[solar-inbox-in-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 10.75a.75.75 0 0 0 .53-.22l3-3a.75.75 0 0 0-1.06-1.06l-1.72 1.72V2a.75.75 0 0 0-1.5 0v6.19L9.53 6.47a.75.75 0 0 0-1.06 1.06l3 3c.14.141.331.22.53.22" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M3.464 20.536C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465c1.271-1.27 1.44-3.213 1.462-6.785H18.84c-.974 0-1.229.016-1.442.114c-.214.099-.392.282-1.026 1.02l-.693.81c-.502.586-.9 1.051-1.45 1.304s-1.162.253-1.934.252h-.59c-.772 0-1.384.002-1.934-.252c-.55-.253-.948-.718-1.45-1.305l-.693-.808c-.634-.74-.812-.922-1.026-1.02c-.213-.099-.468-.115-1.442-.115H2.003c.023 3.572.19 5.515 1.461 6.785"></svg:path><svg:path fill="currentColor" d="M22 12c0-4.714 0-7.071-1.465-8.536c-1.21-1.21-3.03-1.42-6.285-1.456v2.87a2.25 2.25 0 0 1 2.341 3.713l-3 3a2.25 2.25 0 0 1-3.182 0l-3-3A2.25 2.25 0 0 1 9.75 4.878v-2.87c-3.256.036-5.075.246-6.286 1.456C2 4.93 2 7.286 2 12v.25h3.295c.772 0 1.384-.002 1.934.252c.55.253.948.718 1.45 1.305l.693.808c.634.74.812.922 1.026 1.02c.213.099.468.115 1.442.115h.32c.974 0 1.229-.016 1.442-.114c.214-.099.392-.282 1.026-1.02l.693-.81c.502-.586.9-1.051 1.45-1.304s1.162-.253 1.935-.252H22z"></svg:path>`,
})
export class SolarInboxInBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarInboxLineBoldIcon],svg[solar-inbox-line-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.464 20.536C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465c1.271-1.27 1.44-3.213 1.462-6.785H18.84c-.974 0-1.229.016-1.442.114c-.214.099-.392.282-1.026 1.02l-.693.81c-.502.586-.9 1.051-1.45 1.304s-1.162.253-1.934.252h-.59c-.772 0-1.384.002-1.934-.252c-.55-.253-.948-.718-1.45-1.305l-.693-.808c-.634-.74-.812-.922-1.026-1.02c-.213-.099-.468-.115-1.442-.115H2.003c.023 3.572.19 5.515 1.461 6.785"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M7.25 7A.75.75 0 0 1 8 6.25h8a.75.75 0 0 1 0 1.5H8A.75.75 0 0 1 7.25 7" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12 2c4.714 0 7.071 0 8.535 1.464C22 4.93 22 7.286 22 12v.25h-3.294c-.773 0-1.385-.002-1.935.252c-.55.253-.948.718-1.45 1.305l-.693.808c-.634.74-.812.922-1.026 1.02c-.213.099-.468.115-1.442.115h-.32c-.974 0-1.229-.016-1.442-.114c-.214-.099-.392-.282-1.026-1.02l-.693-.81c-.502-.586-.9-1.051-1.45-1.304s-1.162-.253-1.934-.252H2V12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2m-2.75 8.5a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarInboxLineBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarInboxOutBoldIcon],svg[solar-inbox-out-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 1.25a.75.75 0 0 1 .53.22l3 3a.75.75 0 0 1-1.06 1.06l-1.72-1.72V10a.75.75 0 0 1-1.5 0V3.81L9.53 5.53a.75.75 0 0 1-1.06-1.06l3-3a.75.75 0 0 1 .53-.22" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M3.464 20.536C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465c1.271-1.27 1.44-3.213 1.462-6.785H18.84c-.974 0-1.229.016-1.442.114c-.214.099-.392.282-1.026 1.02l-.693.81c-.502.586-.9 1.051-1.45 1.304s-1.162.253-1.934.252h-.59c-.772 0-1.384.002-1.934-.252c-.55-.253-.948-.718-1.45-1.305l-.693-.808c-.634-.74-.812-.922-1.026-1.02c-.213-.099-.468-.115-1.442-.115H2.003c.023 3.572.19 5.515 1.461 6.785"></svg:path><svg:path fill="currentColor" d="M22 12c0-4.714 0-7.071-1.465-8.536c-1.02-1.02-2.473-1.33-4.856-1.423l-.472-.016l1.384 1.384a2.25 2.25 0 0 1-2.341 3.713V10a2.25 2.25 0 0 1-4.5 0V7.122a2.25 2.25 0 0 1-2.341-3.713l1.376-1.384c-2.66.073-4.235.354-5.32 1.44C2 4.928 2 7.285 2 12v.25h3.295c.772 0 1.384-.002 1.934.252c.55.253.948.718 1.45 1.305l.693.808c.634.74.812.922 1.026 1.02c.213.099.468.115 1.442.115h.32c.974 0 1.229-.016 1.442-.114c.214-.099.392-.282 1.026-1.02l.693-.81c.502-.586.9-1.051 1.45-1.304s1.162-.253 1.935-.252H22z"></svg:path>`,
})
export class SolarInboxOutBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarInboxUnreadBoldIcon],svg[solar-inbox-unread-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 5a3 3 0 1 1-6 0a3 3 0 0 1 6 0M3.464 20.536C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465c1.271-1.27 1.44-3.213 1.462-6.785H18.84c-.974 0-1.229.016-1.442.114c-.214.099-.392.282-1.026 1.02l-.693.81c-.502.586-.9 1.051-1.45 1.304s-1.162.253-1.934.252h-.59c-.772 0-1.384.002-1.934-.252c-.55-.253-.948-.718-1.45-1.305l-.693-.808c-.634-.74-.812-.922-1.026-1.02c-.213-.099-.468-.115-1.442-.115H2.003c.023 3.572.19 5.515 1.461 6.785"></svg:path><svg:path fill="currentColor" d="M12 2C7.286 2 4.929 2 3.464 3.464C2 4.93 2 7.286 2 12v.25h3.295c.772 0 1.384-.002 1.934.252c.55.253.948.718 1.45 1.305l.693.808c.634.74.812.922 1.026 1.02c.213.099.468.115 1.442.115h.32c.974 0 1.229-.016 1.442-.114c.214-.099.392-.282 1.026-1.02l.693-.81c.502-.586.9-1.051 1.45-1.304s1.162-.253 1.935-.252H22V12c0-1.122 0-2.11-.02-2.985a5 5 0 0 1-6.995-6.995C14.11 2 13.122 2 12 2"></svg:path>`,
})
export class SolarInboxUnreadBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarIncognitoBoldIcon],svg[solar-incognito-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m4.614 8.545l-.426 1.705H2a.75.75 0 0 0 0 1.5h20a.75.75 0 0 0 0-1.5h-2.187l-.427-1.705c-.546-2.183-.818-3.274-1.632-3.91C16.94 4 15.815 4 13.565 4h-3.13c-2.25 0-3.375 0-4.189.635c-.814.636-1.087 1.727-1.632 3.91M6.5 21a3.5 3.5 0 0 0 3.384-2.604l1.11-.555a2.25 2.25 0 0 1 2.012 0l1.11.555A3.501 3.501 0 0 0 21 17.5a3.5 3.5 0 0 0-6.91-.794l-.413-.206a3.75 3.75 0 0 0-3.354 0l-.413.206A3.501 3.501 0 0 0 3 17.5A3.5 3.5 0 0 0 6.5 21" clip-rule="evenodd"></svg:path>`,
})
export class SolarIncognitoBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarIncomingCallBoldIcon],svg[solar-incoming-call-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m19 5l-4 4m0 0V6m0 3h3"></svg:path><svg:path fill="currentColor" d="m15.556 14.548l-.455.48s-1.083 1.139-4.038-1.972s-1.872-4.25-1.872-4.25l.287-.303c.706-.744.773-1.938.156-2.81L8.374 3.91C7.61 2.83 6.135 2.688 5.26 3.609L3.691 5.26c-.433.457-.723 1.048-.688 1.705c.09 1.68.808 5.293 4.812 9.51c4.247 4.47 8.232 4.648 9.861 4.487c.516-.05.964-.329 1.325-.709l1.42-1.496c.96-1.01.69-2.74-.538-3.446l-1.91-1.1c-.806-.463-1.787-.327-2.417.336"></svg:path></svg:g>`,
})
export class SolarIncomingCallBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarIncomingCallRoundedBoldIcon],svg[solar-incoming-call-rounded-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m19 5l-4 4m0 0V6m0 3h3"></svg:path><svg:path fill="currentColor" d="m10.038 5.316l.649 1.163c.585 1.05.35 2.426-.572 3.349c0 0-1.12 1.119.91 3.148c2.027 2.027 3.146.91 3.147.91c.923-.923 2.3-1.158 3.349-.573l1.163.65c1.585.884 1.772 3.106.379 4.5c-.837.836-1.863 1.488-2.996 1.53c-1.908.073-5.149-.41-8.4-3.66c-3.25-3.251-3.733-6.492-3.66-8.4c.043-1.133.694-2.159 1.53-2.996c1.394-1.393 3.616-1.206 4.5.38"></svg:path></svg:g>`,
})
export class SolarIncomingCallRoundedBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarInfinityBoldIcon],svg[solar-infinity-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7 7.75a4.25 4.25 0 0 0 0 8.5c.597 0 1.045-.107 1.407-.284c.362-.176.679-.442.986-.816c.54-.66.983-1.558 1.567-2.741q.175-.355.37-.744l.34-.69c.581-1.181 1.117-2.27 1.777-3.075c.41-.501.89-.923 1.49-1.215S16.216 6.25 17 6.25a5.75 5.75 0 1 1-3.45 10.35a.75.75 0 0 1 .9-1.2A4.25 4.25 0 1 0 17 7.75c-.597 0-1.045.107-1.407.284c-.362.176-.679.442-.986.816c-.54.66-.983 1.558-1.567 2.741q-.175.355-.37.744l-.34.69c-.581 1.181-1.117 2.27-1.777 3.076c-.41.5-.89.922-1.49 1.214s-1.28.435-2.063.435A5.75 5.75 0 1 1 10.451 7.4a.75.75 0 1 1-.901 1.2A4.23 4.23 0 0 0 7 7.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarInfinityBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarInfoCircleBoldIcon],svg[solar-info-circle-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10m-10 5.75a.75.75 0 0 0 .75-.75v-6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75M12 7a1 1 0 1 1 0 2a1 1 0 0 1 0-2" clip-rule="evenodd"></svg:path>`,
})
export class SolarInfoCircleBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarInfoSquareBoldIcon],svg[solar-info-square-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 22c-4.714 0-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22m0-4.25a.75.75 0 0 0 .75-.75v-6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75M12 7a1 1 0 1 1 0 2a1 1 0 0 1 0-2" clip-rule="evenodd"></svg:path>`,
})
export class SolarInfoSquareBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarIphoneBoldIcon],svg[solar-iphone-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M20 9.801v4.067c0 3.833 0 5.75-1.172 6.941S15.771 22 12 22s-5.657 0-6.828-1.191C4 19.619 4 17.701 4 13.868V9.8c0-3.833 0-5.75 1.172-6.94c.375-.383.825-.642 1.386-.819c.353-.11.728.047.942.35l.154.236c.634.97.855 1.307 1.368 1.631q.165.105.342.186c.591.274 1.273.274 2.636.274s2.044 0 2.636-.274q.177-.081.342-.186c.513-.324.734-.662 1.368-1.631l.154-.235c.2-.305.564-.467.91-.36c.577.176 1.036.438 1.418.827C20 4.051 20 5.968 20 9.801M9 18.23a.75.75 0 0 0-.75.755c0 .416.336.754.75.754h6c.414 0 .75-.338.75-.755a.75.75 0 0 0-.75-.754z" clip-rule="evenodd"></svg:path>`,
})
export class SolarIphoneBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarJarOfPills2BoldIcon],svg[solar-jar-of-pills-2-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16.366 16.179l.512-.512c.916-.916 2.432-.885 3.386.07c.954.953.985 2.469.069 3.385l-.512.512a5 5 0 0 0-.168-.377a6.5 6.5 0 0 0-1.232-1.678a6.5 6.5 0 0 0-1.678-1.232a5 5 0 0 0-.377-.168m-1.226 1.226l-.473.473c-.916.916-.885 2.432.07 3.386c.953.954 2.469.985 3.385.069l.473-.473l-.1-.47l-.003-.011l-.026-.084a3 3 0 0 0-.156-.37a5 5 0 0 0-.95-1.285c-.5-.501-.962-.79-1.285-.95a3 3 0 0 0-.454-.182l-.011-.003zM6.076 2.617C6 2.801 6 3.034 6 3.5s0 .699.076.883a1 1 0 0 0 .541.54C6.801 5 7.034 5 7.5 5h9c.466 0 .699 0 .883-.076a1 1 0 0 0 .54-.541C18 4.199 18 3.966 18 3.5s0-.699-.076-.883a1 1 0 0 0-.541-.54C17.199 2 16.966 2 16.5 2h-9c-.466 0-.699 0-.883.076a1 1 0 0 0-.54.541M7.75 6L5.501 7.799a4 4 0 0 0-1.135 1.45H19.64a4 4 0 0 0-1.123-1.45L16.294 6z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M20 10.908q0-.079-.003-.158H4.004L4 10.922v6.328h9.234q.166-.226.373-.433l2.21-2.21c1.144-1.144 2.795-1.377 4.183-.812zm-7.25 2.342V12a.75.75 0 0 0-1.5 0v1.25H10a.75.75 0 0 0 0 1.5h1.25V16a.75.75 0 0 0 1.5 0v-1.25H14a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M12.573 18.75a3.98 3.98 0 0 0 .812 3.25H8.957c-.571 0-.857 0-1.127-.037a4 4 0 0 1-2.153-1.008c-.201-.184-.384-.404-.75-.842a4 4 0 0 1-.743-1.363z"></svg:path>`,
})
export class SolarJarOfPills2BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarJarOfPillsBoldIcon],svg[solar-jar-of-pills-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.076 2.617C6 2.801 6 3.034 6 3.5s0 .699.076.883a1 1 0 0 0 .541.54C6.801 5 7.034 5 7.5 5h9c.466 0 .699 0 .883-.076a1 1 0 0 0 .54-.541C18 4.199 18 3.966 18 3.5s0-.699-.076-.883a1 1 0 0 0-.541-.54C17.199 2 16.966 2 16.5 2h-9c-.466 0-.699 0-.883.076a1 1 0 0 0-.54.541M7.75 6L5.501 7.799a4 4 0 0 0-1.135 1.45H19.64a4 4 0 0 0-1.123-1.45L16.294 6z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M20 10.908q0-.079-.003-.158H4.004L4 10.922v6.328h16zm-7.25 2.342V12a.75.75 0 0 0-1.5 0v1.25H10a.75.75 0 0 0 0 1.5h1.25V16a.75.75 0 0 0 1.5 0v-1.25H14a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M4.927 20.113a4 4 0 0 1-.743-1.363H19.82a4 4 0 0 1-.732 1.358l-.359.435A4 4 0 0 1 15.642 22H8.957c-.571 0-.857 0-1.127-.037a4 4 0 0 1-2.153-1.008c-.201-.184-.384-.404-.75-.842"></svg:path>`,
})
export class SolarJarOfPillsBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarKeyBoldIcon],svg[solar-key-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M22 8.293c0 3.476-2.83 6.294-6.32 6.294c-.636 0-2.086-.146-2.791-.732l-.882.878c-.519.517-.379.669-.148.919c.096.105.208.226.295.399c0 0 .735 1.024 0 2.049c-.441.585-1.676 1.404-3.086 0l-.294.292s.881 1.025.147 2.05c-.441.585-1.617 1.17-2.646.146l-1.028 1.024c-.706.703-1.568.293-1.91 0l-.883-.878c-.823-.82-.343-1.708 0-2.05l7.642-7.61s-.735-1.17-.735-2.78c0-3.476 2.83-6.294 6.32-6.294S22 4.818 22 8.293m-6.319 2.196a2.2 2.2 0 0 0 2.204-2.195a2.2 2.2 0 0 0-2.204-2.196a2.2 2.2 0 0 0-2.204 2.196a2.2 2.2 0 0 0 2.204 2.195" clip-rule="evenodd"></svg:path>`,
})
export class SolarKeyBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarKeyMinimalistic2BoldIcon],svg[solar-key-minimalistic-2-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M15 16a7 7 0 1 0-5.452-2.609L3.97 18.97l-1 1a.75.75 0 1 0 1.06 1.061l.47-.47l.97.97a.75.75 0 0 0 1.06-1.06l-.97-.97l.94-.94l.97.97a.75.75 0 0 0 1.06-1.06l-.97-.97l3.049-3.048A6.97 6.97 0 0 0 15 16m0-5a2 2 0 1 0 0-4a2 2 0 0 0 0 4" clip-rule="evenodd"></svg:path>`,
})
export class SolarKeyMinimalistic2BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarKeyMinimalisticBoldIcon],svg[solar-key-minimalistic-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M18.977 14.79a6.907 6.907 0 1 0-11.573-3.159c.095.369.01.768-.258 1.037L3.433 16.38a1.48 1.48 0 0 0-.424 1.21l.232 2.089c.025.223.125.43.283.589l.208.208a1 1 0 0 0 .589.283l2.089.232a1.48 1.48 0 0 0 1.21-.424l.71-.71l-1.747-1.728a.75.75 0 1 1 1.055-1.066l1.752 1.733l1.942-1.942c.27-.27.668-.353 1.037-.258a6.9 6.9 0 0 0 6.608-1.806m-6.391-6.204a2 2 0 1 1 2.828 2.828a2 2 0 0 1-2.828-2.828" clip-rule="evenodd"></svg:path>`,
})
export class SolarKeyMinimalisticBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarKeyMinimalisticSquare2BoldIcon],svg[solar-key-minimalistic-square-2-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.62 18.98a3.23 3.23 0 0 0 2.644-.927l2.655-2.655A7.75 7.75 0 0 0 22 12.955c-.006 4.084-.101 6.218-1.463 7.58C19.07 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.827 2.102 6.961 2.007 11.045 2a7.75 7.75 0 0 0-2.443 7.08l-2.655 2.656a3.23 3.23 0 0 0-.927 2.643l.193 1.741c.071.637.356 1.23.81 1.684l.173.174a2.82 2.82 0 0 0 1.684.809z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M21.963 8.412a5.73 5.73 0 0 1-1.649 3.413a5.75 5.75 0 0 1-5.507 1.505a.9.9 0 0 0-.864.215l-1.53 1.53l-.002-.003l-1.458-1.442a.75.75 0 0 0-1.055 1.067l1.455 1.438l-.503.504a1.23 1.23 0 0 1-1.009.353l-1.74-.193a.82.82 0 0 1-.49-.236l-.174-.173a.82.82 0 0 1-.236-.49l-.193-1.741a1.23 1.23 0 0 1 .353-1.009l3.094-3.093a.9.9 0 0 0 .215-.864a5.75 5.75 0 0 1 1.505-5.507a5.73 5.73 0 0 1 3.413-1.649c.906.034 1.68.097 2.348.216c.87.267 1.69.744 2.378 1.433a5.7 5.7 0 0 1 1.433 2.378c.12.668.182 1.442.216 2.348m-6.975-1.757a1.667 1.667 0 1 1 2.357 2.357a1.667 1.667 0 0 1-2.357-2.357" clip-rule="evenodd"></svg:path>`,
})
export class SolarKeyMinimalisticSquare2BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarKeyMinimalisticSquare3BoldIcon],svg[solar-key-minimalistic-square-3-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.5 10.25a1.75 1.75 0 1 0 0 3.5a1.75 1.75 0 0 0 0-3.5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12m9.663-.75a3.251 3.251 0 1 0 0 1.5h3.087v.75a.75.75 0 0 0 1.5 0v-.75H17a.25.25 0 0 1 .25.25v1a.75.75 0 0 0 1.5 0v-1A1.75 1.75 0 0 0 17 11.25z" clip-rule="evenodd"></svg:path>`,
})
export class SolarKeyMinimalisticSquare3BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarKeyMinimalisticSquareBoldIcon],svg[solar-key-minimalistic-square-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.39 9.724a1.333 1.333 0 1 1 1.886 1.885a1.333 1.333 0 0 1-1.886-1.885"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464M16.651 7.35a4.605 4.605 0 0 1-4.405 7.715a.72.72 0 0 0-.691.172l-1.118 1.118l-.003-.003l-1.166-1.153a.75.75 0 1 0-1.055 1.066l1.163 1.15l-.296.297a.99.99 0 0 1-.807.283l-1.392-.155a.66.66 0 0 1-.393-.188l-.139-.14a.66.66 0 0 1-.188-.392l-.155-1.392a.99.99 0 0 1 .283-.807l2.475-2.474a.72.72 0 0 0 .172-.692a4.604 4.604 0 0 1 7.715-4.405" clip-rule="evenodd"></svg:path>`,
})
export class SolarKeyMinimalisticSquareBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarKeySquare2BoldIcon],svg[solar-key-square-2-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M22 6.72c0 2.607-2.122 4.72-4.74 4.72c-.477 0-1.565-.11-2.094-.549l-.661.659c-.389.387-.284.501-.11.689c.071.078.155.17.22.299c0 0 .551.768 0 1.537c-.33.439-1.256 1.053-2.314 0l-.22.22s.66.768.11 1.536c-.331.439-1.213.878-1.985.11l-.771.768c-.53.527-1.176.22-1.433 0l-.661-.659c-.617-.614-.257-1.28 0-1.536l5.731-5.708s-.55-.878-.55-2.086c0-2.607 2.121-4.72 4.739-4.72S22 4.113 22 6.72m-3.086 0c0 .91-.74 1.647-1.653 1.647a1.65 1.65 0 0 1-1.654-1.647c0-.91.74-1.647 1.654-1.647a1.65 1.65 0 0 1 1.653 1.647" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M13.196 2.001a6.2 6.2 0 0 0-2.175 4.72c0 .68.127 1.276.273 1.738l-5.012 4.992a2.7 2.7 0 0 0-.75 1.455c-.122.747.095 1.555.75 2.207l.662.659q.04.04.084.078a2.8 2.8 0 0 0 1.37.623a2.42 2.42 0 0 0 2.088-.693c.385.097.78.105 1.16.032a2.9 2.9 0 0 0 1.763-1.107q.199-.278.31-.557a3 3 0 0 0 .291-.04a3 3 0 0 0 1.824-1.16a2.74 2.74 0 0 0 .487-2.08a6.24 6.24 0 0 0 5.678-2.1L22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2z"></svg:path>`,
})
export class SolarKeySquare2BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarKeySquareBoldIcon],svg[solar-key-square-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.208 11.093c.73 0 1.323-.59 1.323-1.317a1.32 1.32 0 0 0-1.323-1.317c-.73 0-1.322.59-1.322 1.317a1.32 1.32 0 0 0 1.322 1.317"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464m10.744 10.088A3.784 3.784 0 0 0 18 9.776A3.784 3.784 0 0 0 14.208 6a3.784 3.784 0 0 0-3.791 3.776c0 .966.44 1.669.44 1.669L6.274 16.01c-.206.205-.494.738 0 1.23l.529.526c.205.176.723.422 1.146 0l.617-.614c.617.614 1.323.263 1.587-.088c.441-.615-.088-1.23-.088-1.23l.177-.175c.846.843 1.587.351 1.851 0c.441-.615 0-1.23 0-1.23a1 1 0 0 0-.177-.239c-.138-.15-.222-.241.089-.551l.53-.527c.422.351 1.292.44 1.674.44" clip-rule="evenodd"></svg:path>`,
})
export class SolarKeySquareBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarKeyboardBoldIcon],svg[solar-keyboard-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 5h8c2.828 0 4.243 0 5.121.879C22 6.757 22 8.172 22 11v2c0 2.828 0 4.243-.879 5.121C20.243 19 18.828 19 16 19H8c-2.828 0-4.243 0-5.121-.879C2 17.243 2 15.828 2 13v-2c0-2.828 0-4.243.879-5.121C3.757 5 5.172 5 8 5m-2 5a1 1 0 1 0 0-2a1 1 0 0 0 0 2m0 3a1 1 0 1 0 0-2a1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2a1 1 0 0 0 0 2m0-3a1 1 0 1 0 0-2a1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2a1 1 0 0 0 0 2m0 3a1 1 0 1 0 0-2a1 1 0 0 0 0 2m3-3a1 1 0 1 0 0-2a1 1 0 0 0 0 2m0 3a1 1 0 1 0 0-2a1 1 0 0 0 0 2m3-3a1 1 0 1 0 0-2a1 1 0 0 0 0 2m0 3a1 1 0 1 0 0-2a1 1 0 0 0 0 2m-.25 3a.75.75 0 0 1-.75.75H7a.75.75 0 0 1 0-1.5h10a.75.75 0 0 1 .75.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarKeyboardBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarKickScooterBoldIcon],svg[solar-kick-scooter-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M16.631 4.769a15 15 0 0 0-1.022-.019H14.38a.75.75 0 1 1 0-1.5h1.255c.435 0 .803 0 1.107.023c.32.024.622.075.918.206c.456.202.846.529 1.124.942c.181.269.283.558.36.867c.073.294.133.653.205 1.077l1.009 5.98a.75.75 0 0 1-.74.876c-2.487 0-4.488 1.99-4.488 4.426a.75.75 0 0 1-.75.75H7.42a3.13 3.13 0 0 1-3.039 2.353c-1.72 0-3.131-1.38-3.131-3.103c0-1.722 1.41-3.103 3.131-3.103c1.462 0 2.7.997 3.039 2.353h6.258c.337-2.64 2.425-4.73 5.065-5.113l-.868-5.143c-.077-.458-.128-.76-.186-.991c-.055-.222-.103-.324-.148-.391a1.15 1.15 0 0 0-.488-.408c-.077-.034-.19-.065-.422-.082m-.143 12.878c0-1.722 1.41-3.103 3.131-3.103s3.131 1.381 3.131 3.103s-1.41 3.103-3.131 3.103s-3.13-1.38-3.13-3.103" clip-rule="evenodd"></svg:path>`,
})
export class SolarKickScooterBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLadleBoldIcon],svg[solar-ladle-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.684 2.75A2.934 2.934 0 0 0 2.75 5.684a.75.75 0 0 1-1.5 0a4.434 4.434 0 1 1 8.868 0v6.057a5.7 5.7 0 0 0-.974.618a3.7 3.7 0 0 0-.526.515v-7.19A2.934 2.934 0 0 0 5.684 2.75m2.949 13.393a7.066 7.066 0 0 0 14.084.225a4 4 0 0 1-.207.207c-.503.464-1.145.817-1.802 1.083c-1.324.536-3.02.842-4.708.842c-1.685 0-3.486-.305-4.908-.823c-.706-.256-1.4-.595-1.948-1.036a3.7 3.7 0 0 1-.51-.498"></svg:path><svg:path fill="currentColor" d="M22 14.5c0 1.38-2.946 2.5-6 2.5s-6.5-1.12-6.5-2.5S12.946 12 16 12s6 1.12 6 2.5"></svg:path>`,
})
export class SolarLadleBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLampBoldIcon],svg[solar-lamp-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.667 3.151c-.786.775-1.09 1.948-1.699 4.294l-.084.324c-.828 3.189-1.242 4.783-.49 5.903q.112.168.247.319C5.536 15 7.183 15 10.477 15h.779v6.25h-2.25a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5h-2.25V15h.78c1.32 0 2.374 0 3.223-.065l-.003.065v2a.75.75 0 1 0 1.5 0v-2.318c.468-.15.83-.369 1.116-.691q.135-.15.247-.32c.752-1.12.338-2.713-.49-5.902l-.084-.324c-.609-2.346-.913-3.519-1.7-4.294a4 4 0 0 0-.756-.585C15.64 2 14.429 2 12.007 2c-2.424 0-3.635 0-4.583.566a4 4 0 0 0-.757.585"></svg:path>`,
})
export class SolarLampBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLaptop2BoldIcon],svg[solar-laptop-2-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 22h14a3 3 0 0 0 3-3v-1.5a1 1 0 0 0-1-1h-4.333a2 2 0 0 0-1.2.4l-.934.7a2 2 0 0 1-1.2.4h-2.666a2 2 0 0 1-1.2-.4l-.934-.7a2 2 0 0 0-1.2-.4H3a1 1 0 0 0-1 1V19a3 3 0 0 0 3 3M9.5 2h5c2.828 0 4.243 0 5.121.879c.879.878.879 2.293.879 5.121v7h-3.833a3.5 3.5 0 0 0-2.1.7l-.934.7a.5.5 0 0 1-.3.1h-2.666a.5.5 0 0 1-.3-.1l-.934-.7a3.5 3.5 0 0 0-2.1-.7H3.5V8c0-2.828 0-4.243.879-5.121C5.257 2 6.672 2 9.5 2"></svg:path>`,
})
export class SolarLaptop2BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLaptop3BoldIcon],svg[solar-laptop-3-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.5 2h-5c-2.828 0-4.243 0-5.121.879C3.5 3.757 3.5 5.172 3.5 8v3.5c0 1.886 0 2.828.586 3.414s1.528.586 3.414.586h9c1.886 0 2.828 0 3.414-.586s.586-1.528.586-3.414V8c0-2.828 0-4.243-.879-5.121C18.743 2 17.328 2 14.5 2M5 22h14a3 3 0 0 0 3-3v-1a1 1 0 0 0-1-1h-4.333a2 2 0 0 0-1.2.4l-.934.7a2 2 0 0 1-1.2.4h-2.666a2 2 0 0 1-1.2-.4l-.934-.7a2 2 0 0 0-1.2-.4H3a1 1 0 0 0-1 1v1a3 3 0 0 0 3 3"></svg:path>`,
})
export class SolarLaptop3BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLaptopBoldIcon],svg[solar-laptop-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m21.391 16.336l.088.092a2 2 0 0 1 .52 1.284l.001.127c0 .15 0 .224-.004.287a2 2 0 0 1-1.87 1.87a5 5 0 0 1-.287.004H4.161c-.15 0-.224 0-.287-.004a2 2 0 0 1-1.87-1.87C2 18.063 2 17.988 2 17.84l.001-.127a2 2 0 0 1 .608-1.376L3.903 15h16.194zM8.75 18a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1-.75-.75M4.353 7c0-1.886 0-2.828.586-3.414S6.467 3 8.353 3h7.294c1.886 0 2.829 0 3.414.586c.586.586.586 1.528.586 3.414v7H4.353zM12 6.5A.75.75 0 1 0 12 5a.75.75 0 0 0 0 1.5" clip-rule="evenodd"></svg:path>`,
})
export class SolarLaptopBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLaptopMinimalisticBoldIcon],svg[solar-laptop-minimalistic-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1 20.24c0-.42.344-.76.767-.76h20.466c.423 0 .767.34.767.76s-.344.76-.767.76H1.767A.764.764 0 0 1 1 20.24M3.69 3.89c-.9.89-.9 2.324-.9 5.19v5.067c0 1.91 0 2.866.6 3.46s1.564.593 3.494.593h10.232c1.93 0 2.895 0 3.494-.594c.6-.593.6-1.549.6-3.46V9.08c0-2.866 0-4.3-.9-5.19C19.411 3 17.964 3 15.07 3H8.93c-2.894 0-4.341 0-5.24.89m4.473 11.27c0-.42.343-.76.767-.76h6.14c.424 0 .767.34.767.76s-.343.76-.767.76H8.93a.764.764 0 0 1-.767-.76" clip-rule="evenodd"></svg:path>`,
})
export class SolarLaptopMinimalisticBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLayersBoldIcon],svg[solar-layers-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.979 9.685C2.993 8.891 2 8.494 2 8s.993-.89 2.979-1.685l2.808-1.123C9.773 4.397 10.767 4 12 4s2.227.397 4.213 1.192l2.808 1.123C21.007 7.109 22 7.506 22 8s-.993.89-2.979 1.685l-2.808 1.124C14.227 11.603 13.233 12 12 12s-2.227-.397-4.213-1.191z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M2 8c0 .494.993.89 2.979 1.685l2.808 1.124C9.773 11.603 10.767 12 12 12s2.227-.397 4.213-1.191l2.808-1.124C21.007 8.891 22 8.494 22 8s-.993-.89-2.979-1.685l-2.808-1.123C14.227 4.397 13.233 4 12 4s-2.227.397-4.213 1.192L4.98 6.315C2.993 7.109 2 7.506 2 8" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="m19.021 13.685l-2.808 1.124C14.227 15.603 13.233 16 12 16s-2.227-.397-4.213-1.191L4.98 13.685C2.993 12.891 2 12.493 2 12c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 12.535 10.572 13 12 13s2.59-.465 4.439-1.205l3.14-1.256C21.194 11.189 22 11.555 22 12c0 .493-.993.89-2.979 1.685"></svg:path><svg:path fill="currentColor" d="m19.021 17.685l-2.808 1.123C14.227 19.603 13.233 20 12 20s-2.227-.397-4.213-1.192L4.98 17.685C2.993 16.89 2 16.493 2 16c0-.445.807-.812 2.42-1.461l3.141 1.256C9.411 16.535 10.572 17 12 17s2.59-.465 4.439-1.205l3.14-1.256c1.614.65 2.421 1.016 2.421 1.46c0 .494-.993.891-2.979 1.686"></svg:path>`,
})
export class SolarLayersBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLayersMinimalisticBoldIcon],svg[solar-layers-minimalistic-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.624 4.449C9.501 3.698 10.621 3.25 12 3.25s2.499.448 4.376 1.199l2.97 1.188c.954.382 1.727.69 2.258.969c.268.14.528.3.729.493c.206.198.417.498.417.901s-.21.703-.417.901c-.2.193-.46.352-.73.493c-.53.278-1.303.587-2.258.97l-2.97 1.187C14.5 12.302 13.38 12.75 12 12.75s-2.499-.448-4.376-1.199l-2.969-1.188c-.955-.382-1.728-.69-2.259-.969a3.2 3.2 0 0 1-.729-.493C1.461 8.703 1.25 8.403 1.25 8s.21-.703.417-.901c.2-.193.46-.352.73-.493c.53-.278 1.303-.587 2.258-.97z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M2.5 11.442v-.002l.003.003l.024.021q.036.03.118.094c.109.084.278.208.508.357c.46.299 1.161.697 2.104 1.074l2.809 1.123c2.025.81 2.874 1.138 3.934 1.138s1.91-.328 3.934-1.138l2.809-1.123a12 12 0 0 0 2.104-1.074a8 8 0 0 0 .65-.472l.003-.002l.001-.001a.75.75 0 0 1 1 1.118L22 12l.5.558v.002l-.002.001l-.005.004l-.014.012l-.045.039a9 9 0 0 1-.77.558A13.7 13.7 0 0 1 19.3 14.38l-2.809 1.124l-.115.046c-1.877.751-2.997 1.199-4.376 1.199s-2.499-.448-4.376-1.199l-.115-.046L4.7 14.38a13.7 13.7 0 0 1-2.363-1.207a9 9 0 0 1-.771-.558l-.045-.039l-.014-.012l-.005-.004l-.001-.002H1.5L2 12l-.5.559a.75.75 0 0 1 1-1.119m-.001 4a.75.75 0 0 0-1.057.06zm0 0l.004.003l.024.021q.036.03.118.094c.109.084.278.208.508.357c.46.299 1.161.696 2.104 1.074l2.809 1.123c2.025.81 2.874 1.138 3.934 1.138s1.91-.328 3.934-1.138l2.809-1.123a12 12 0 0 0 2.104-1.074a8 8 0 0 0 .65-.472l.003-.002l.001-.001a.75.75 0 0 1 1 1.118l-.484-.54l.484.54l-.002.002l-.001.001l-.005.004l-.014.012q-.016.015-.045.038a9 9 0 0 1-.77.558a13.7 13.7 0 0 1-2.364 1.208l-2.809 1.124l-.115.046c-1.877.751-2.997 1.199-4.376 1.199s-2.499-.448-4.376-1.199l-.115-.046L4.7 18.38a13.7 13.7 0 0 1-2.363-1.207a9 9 0 0 1-.771-.558l-.045-.039l-.014-.012l-.005-.004l-.001-.002H1.5L2 16l-.5.559a.75.75 0 0 1-.058-1.06" clip-rule="evenodd"></svg:path>`,
})
export class SolarLayersMinimalisticBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLeafBoldIcon],svg[solar-leaf-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.25 2.083a3.5 3.5 0 0 0-.713.243C6.553 4.188 4 9.395 4 13.856c0 4.24 3.183 7.724 7.25 8.109zm1.5 19.882c4.067-.385 7.25-3.868 7.25-8.108q0-.61-.063-1.234l-7.187 7.188zM18.26 7.18a13.4 13.4 0 0 0-1.34-2.04l-4.17 4.17v3.38zm-2.352-3.15a9.2 9.2 0 0 0-2.445-1.704a3.5 3.5 0 0 0-.713-.243v5.106zm3.028 4.594l-6.186 6.187v2.878l6.75-6.75l.132-.132a15 15 0 0 0-.696-2.183"></svg:path>`,
})
export class SolarLeafBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLetterBoldIcon],svg[solar-letter-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.172 5.172C2 6.343 2 8.229 2 12s0 5.657 1.172 6.828S6.229 20 10 20h4c3.771 0 5.657 0 6.828-1.172S22 15.771 22 12s0-5.657-1.172-6.828S17.771 4 14 4h-4C6.229 4 4.343 4 3.172 5.172M18.576 7.52a.75.75 0 0 1-.096 1.056l-2.196 1.83c-.887.74-1.605 1.338-2.24 1.746c-.66.425-1.303.693-2.044.693s-1.384-.269-2.045-.693c-.634-.408-1.352-1.007-2.239-1.745L5.52 8.577a.75.75 0 0 1 .96-1.153l2.16 1.799c.933.777 1.58 1.315 2.128 1.667c.529.34.888.455 1.233.455s.704-.114 1.233-.455c.547-.352 1.195-.89 2.128-1.667l2.159-1.8a.75.75 0 0 1 1.056.097" clip-rule="evenodd"></svg:path>`,
})
export class SolarLetterBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLetterOpenedBoldIcon],svg[solar-letter-opened-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 22h4c3.771 0 5.657 0 6.828-1.171S22 17.77 22 14s0-5.657-1.172-6.828c-.362-.363-.794-.613-1.328-.786v2.773c.003.34.009.911-.236 1.433c-.244.522-.686.884-.95 1.1q-.04.03-.073.06l-1.507 1.255c-.86.718-1.61 1.342-2.284 1.776c-.725.466-1.51.812-2.45.812s-1.724-.346-2.45-.812c-.674-.434-1.423-1.058-2.284-1.775l-1.507-1.256l-.073-.06c-.264-.216-.705-.578-.95-1.1c-.244-.522-.24-1.093-.237-1.433l.001-.096V6.385c-.534.173-.966.424-1.328.787C2 8.343 2 10.229 2 14s0 5.657 1.172 6.829S6.229 22 10 22"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="m6.72 10.6l1.439 1.2c1.837 1.53 2.755 2.295 3.841 2.295s2.005-.765 3.841-2.296l1.44-1.2c.353-.294.53-.442.625-.643c.094-.202.094-.432.094-.893V7q0-.48-.002-.898c-.012-1.771-.098-2.737-.73-3.37C16.536 2 15.358 2 13 2h-2c-2.357 0-3.535 0-4.268.732c-.632.633-.72 1.599-.732 3.37Q5.998 6.519 6 7v2.063c0 .46 0 .691.095.893c.094.201.27.349.625.644M9.25 6a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4A.75.75 0 0 1 9.25 6m1 3a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarLetterOpenedBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLetterUnreadBoldIcon],svg[solar-letter-unread-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 6a3 3 0 1 1-6 0a3 3 0 0 1 6 0"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M14 5h-4C6.229 5 4.343 5 3.172 6.172S2 9.229 2 13s0 5.657 1.172 6.828S6.229 21 10 21h4c3.771 0 5.657 0 6.828-1.172S22 16.771 22 13c0-1.453 0-2.627-.067-3.587A4.48 4.48 0 0 1 19 10.5c-.479 0-.94-.075-1.373-.213l-1.343 1.12c-.887.738-1.605 1.337-2.24 1.745c-.66.425-1.303.693-2.044.693s-1.384-.269-2.045-.693c-.634-.408-1.352-1.007-2.239-1.745L5.52 9.577a.75.75 0 0 1 .96-1.153l2.159 1.799c.933.777 1.58 1.315 2.128 1.667c.529.34.888.455 1.233.455s.704-.114 1.233-.455c.547-.352 1.195-.89 2.128-1.667l.84-.7A4.49 4.49 0 0 1 14.61 5z" clip-rule="evenodd"></svg:path>`,
})
export class SolarLetterUnreadBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLibraryBoldIcon],svg[solar-library-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.51 2h6.98c.232 0 .41 0 .566.015c1.108.109 2.015.775 2.4 1.672H5.544c.385-.897 1.292-1.563 2.4-1.672C8.098 2 8.276 2 8.51 2m-2.2 2.723c-1.39 0-2.53.84-2.91 1.954l-.024.07c.398-.12.813-.2 1.232-.253c1.08-.139 2.446-.139 4.032-.139h6.892c1.586 0 2.951 0 4.032.139c.42.054.834.132 1.232.253l-.023-.07c-.38-1.114-1.52-1.954-2.911-1.954z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M8.672 7.542h6.656c3.374 0 5.062 0 6.01.987s.724 2.511.278 5.56l-.422 2.892c-.35 2.391-.525 3.587-1.422 4.303s-2.22.716-4.867.716h-5.81c-2.646 0-3.97 0-4.867-.716s-1.072-1.912-1.422-4.303l-.422-2.891c-.447-3.05-.67-4.574.278-5.561s2.636-.987 6.01-.987M8 18c0-.414.373-.75.833-.75h6.334c.46 0 .833.336.833.75s-.373.75-.833.75H8.833c-.46 0-.833-.336-.833-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarLibraryBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLightbulbBoldIcon],svg[solar-lightbulb-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="solarLightbulbBold0"><svg:g fill="none" fill-rule="evenodd" clip-rule="evenodd"><svg:path fill="#fff" d="M11.5 2C7.358 2 4 5.436 4 9.674c0 2.273.966 4.315 2.499 5.72c.51.467.889.814 1.157 1.066a15 15 0 0 1 .4.39l.033.036c.237.3.288.376.318.446s.053.16.112.54c.024.15.026.406.026 1.105v.03c0 .409 0 .762.026 1.051c.027.306.087.61.248.895c.18.319.438.583.75.767c.278.165.575.226.874.254c.283.026.628.026 1.028.026h.058c.4 0 .745 0 1.028-.026c.3-.028.595-.09.875-.254a2.07 2.07 0 0 0 .749-.767c.16-.285.22-.588.248-.895c.026-.29.026-.642.025-1.051v-.03c0-.699.003-.955.026-1.105c.06-.38.082-.47.113-.54c.03-.07.081-.147.318-.446l.003-.003l.005-.006l.025-.027l.088-.09q.112-.113.312-.3c.268-.252.647-.599 1.157-1.067A7.74 7.74 0 0 0 19 9.674C19 5.436 15.642 2 11.5 2m1.57 17.932q.011-.113.015-.258h-3.17q.004.145.014.258c.019.21.05.286.071.324a.7.7 0 0 0 .25.255c.037.022.111.054.316.073c.214.02.497.02.934.02s.72 0 .934-.02c.205-.019.279-.05.316-.073a.7.7 0 0 0 .25-.255c.021-.038.052-.114.07-.324"></svg:path><svg:path fill="#000" d="M9.274 13.35a.75.75 0 0 1 1.025.274a1.25 1.25 0 0 0 2.166 0a.75.75 0 1 1 1.298.752a2.76 2.76 0 0 1-1.631 1.27V17a.75.75 0 0 1-1.5 0v-1.354A2.76 2.76 0 0 1 9 14.376a.75.75 0 0 1 .274-1.025"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h24v24H0z" mask="url(#solarLightbulbBold0)"></svg:path>`,
})
export class SolarLightbulbBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLightbulbBoltBoldIcon],svg[solar-lightbulb-bolt-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.5 2C7.358 2 4 5.436 4 9.674c0 2.273.966 4.315 2.499 5.72c.51.467.889.814 1.157 1.066a15 15 0 0 1 .4.39l.033.036c.237.3.288.376.318.446s.053.16.112.54c.024.15.026.406.026 1.105v.03c0 .409 0 .762.026 1.051c.027.306.087.61.248.895c.18.319.438.583.75.767c.278.165.575.226.874.254c.283.026.628.026 1.028.026h.058c.4 0 .745 0 1.028-.026c.3-.028.595-.09.875-.254a2.07 2.07 0 0 0 .749-.767c.16-.285.22-.588.248-.895c.026-.29.026-.642.025-1.051v-.03c0-.699.003-.955.026-1.105c.06-.38.082-.47.113-.54c.03-.07.081-.147.318-.446l.008-.01l.025-.026l.088-.09q.112-.113.312-.3c.268-.252.647-.599 1.157-1.067A7.74 7.74 0 0 0 19 9.674C19 5.436 15.642 2 11.5 2m1.585 17.674h-3.17q.004.145.014.258c.019.21.05.286.071.324a.7.7 0 0 0 .25.255c.037.022.111.054.316.073c.214.02.497.02.934.02s.72 0 .934-.02c.205-.019.279-.05.316-.073a.7.7 0 0 0 .25-.255c.021-.038.052-.114.07-.324q.011-.113.015-.258M12.61 8.176c.307.224.378.66.159.974l-1.178 1.687h1.402a.68.68 0 0 1 .607.379a.71.71 0 0 1-.052.724L11.6 14.731a.67.67 0 0 1-.951.162a.71.71 0 0 1-.158-.973l1.178-1.687h-1.403a.68.68 0 0 1-.606-.379a.71.71 0 0 1 .051-.725l1.948-2.79a.67.67 0 0 1 .951-.163" clip-rule="evenodd"></svg:path>`,
})
export class SolarLightbulbBoltBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLightbulbMinimalisticBoldIcon],svg[solar-lightbulb-minimalistic-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.25 18.709c0-.42.336-.76.75-.76h4c.414 0 .75.34.75.76s-.336.76-.75.76h-4a.755.755 0 0 1-.75-.76m.667 2.532c0-.42.335-.76.75-.76h2.666c.415 0 .75.34.75.76a.754.754 0 0 1-.75.759h-2.666a.755.755 0 0 1-.75-.76" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="m7.41 13.828l1.105 1.053c.31.295.485.707.485 1.137c0 .647.518 1.172 1.157 1.172h3.686c.639 0 1.157-.525 1.157-1.172c0-.43.176-.842.485-1.137l1.104-1.053c1.542-1.48 2.402-3.425 2.41-5.446L19 8.297C19 4.842 15.866 2 12 2S5 4.842 5 8.297v.085c.009 2.021.87 3.966 2.41 5.446"></svg:path>`,
})
export class SolarLightbulbMinimalisticBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLightningBoldIcon],svg[solar-lightning-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M10.8 8h2.4c2.263 0 3.394 0 4.097.692C18 9.385 18 10.5 18 12.727v2.546c0 2.228 0 3.342-.703 4.035C16.594 20 15.463 20 13.2 20h-2.4c-2.263 0-3.394 0-4.097-.692C6 18.615 6 17.5 6 15.273v-2.546c0-2.228 0-3.342.703-4.035C7.406 8 8.537 8 10.8 8m1.8 4.45a.75.75 0 1 0-1.2-.9l-1.5 2a.75.75 0 0 0 .6 1.2H12l-.6.8a.75.75 0 1 0 1.2.9l1.5-2a.75.75 0 0 0-.6-1.2H12zM10.733 7c-.854 0-1.601 0-2.233.048V5.5c0-1.404 0-2.107.337-2.611a2 2 0 0 1 .552-.552C9.893 2 10.596 2 12 2s2.107 0 2.611.337a2 2 0 0 1 .552.552c.337.504.337 1.207.337 2.611v1.548C14.868 7 14.121 7 13.267 7zM11 3.75a.75.75 0 0 0 0 1.5h2a.75.75 0 0 0 0-1.5z"></svg:path><svg:path d="M13.2 8h-2.4c-2.263 0-3.394 0-4.097.692C6 9.385 6 10.5 6 12.727v2.546c0 2.228 0 3.342.703 4.035C7.406 20 8.537 20 10.8 20h.45v2a.75.75 0 0 0 1.5 0v-2h.45c2.263 0 3.394 0 4.097-.692C18 18.615 18 17.5 18 15.273v-2.546c0-2.228 0-3.342-.703-4.035C16.594 8 15.463 8 13.2 8m-.75 3.4a.75.75 0 0 1 .15 1.05l-.6.8h1.5a.75.75 0 0 1 .6 1.2l-1.5 2a.75.75 0 1 1-1.2-.9l.6-.8h-1.5a.75.75 0 0 1-.6-1.2l1.5-2a.75.75 0 0 1 1.05-.15"></svg:path></svg:g>`,
})
export class SolarLightningBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLikeBoldIcon],svg[solar-like-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20.27 16.265l.705-4.08a1.666 1.666 0 0 0-1.64-1.95h-5.181a.833.833 0 0 1-.822-.969l.663-4.045a4.8 4.8 0 0 0-.09-1.973a1.64 1.64 0 0 0-1.092-1.137l-.145-.047a1.35 1.35 0 0 0-.994.068c-.34.164-.588.463-.68.818l-.476 1.834a7.6 7.6 0 0 1-.656 1.679c-.415.777-1.057 1.4-1.725 1.975l-1.439 1.24a1.67 1.67 0 0 0-.572 1.406l.812 9.393A1.666 1.666 0 0 0 8.597 22h4.648c3.482 0 6.453-2.426 7.025-5.735"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M2.968 9.485a.75.75 0 0 1 .78.685l.97 11.236a1.237 1.237 0 1 1-2.468.107V10.234a.75.75 0 0 1 .718-.749" clip-rule="evenodd"></svg:path>`,
})
export class SolarLikeBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLinkBoldIcon],svg[solar-link-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.729 3.884c1.434-1.44 3.532-1.47 4.693-.304c1.164 1.168 1.133 3.28-.303 4.72l-2.423 2.433a.75.75 0 0 0 1.062 1.059l2.424-2.433c1.911-1.919 2.151-4.982.303-6.838c-1.85-1.857-4.907-1.615-6.82.304L9.819 7.692c-1.911 1.919-2.151 4.982-.303 6.837a.75.75 0 1 0 1.063-1.058c-1.164-1.168-1.132-3.28.303-4.72z"></svg:path><svg:path fill="currentColor" d="M14.485 9.47a.75.75 0 0 0-1.063 1.06c1.164 1.168 1.133 3.279-.303 4.72l-4.847 4.866c-1.435 1.44-3.533 1.47-4.694.304c-1.164-1.168-1.132-3.28.303-4.72l2.424-2.433a.75.75 0 0 0-1.063-1.059l-2.424 2.433c-1.911 1.92-2.151 4.982-.303 6.838c1.85 1.858 4.907 1.615 6.82-.304l4.847-4.867c1.911-1.918 2.151-4.982.303-6.837"></svg:path>`,
})
export class SolarLinkBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLinkBrokenBoldIcon],svg[solar-link-broken-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.99 3.991c-1.553-1.521-3.681-1.58-4.765-.518l-3.7 3.625a.75.75 0 0 1-1.05-1.071l3.7-3.625c1.836-1.799 4.914-1.393 6.865.518c1.953 1.913 2.378 4.955.528 6.768l-2.907 2.848a.75.75 0 1 1-1.05-1.072l2.907-2.848c1.07-1.048 1.022-3.106-.528-4.625M6.624 3.584a.75.75 0 1 0-1.248.832l2 3a.75.75 0 0 0 1.248-.832zM2.237 7.289a.75.75 0 1 0-.474 1.423l6 2a.75.75 0 0 0 .474-1.423zm4.491 5.217a.75.75 0 0 0-1.107-1.012l-1.261 1.38c-1.727 1.889-1.35 5.053.504 7.081c1.865 2.04 4.87 2.505 6.655.552l4.035-4.414a.75.75 0 0 0-1.107-1.012l-4.035 4.414c-1.001 1.095-2.963 1.065-4.44-.552c-1.49-1.628-1.564-3.9-.505-5.058z"></svg:path>`,
})
export class SolarLinkBrokenBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLinkBrokenMinimalisticBoldIcon],svg[solar-link-broken-minimalistic-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m10 5.049l.367-.343c2.432-2.275 6.376-2.275 8.809 0s2.432 5.961 0 8.235L16.974 15M14 18.928l-.366.35c-2.422 2.316-6.38 2.286-8.802-.03c-2.398-2.293-2.456-6.033-.091-8.358l.905-.89m.941-7L7.5 5.205m-3.998.882L9.05 8.795"></svg:path>`,
})
export class SolarLinkBrokenMinimalisticBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLinkCircleBoldIcon],svg[solar-link-circle-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.464 20.536C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535M9.5 8.75A3.25 3.25 0 1 0 12.75 12a.75.75 0 0 1 1.5 0A4.75 4.75 0 1 1 9.5 7.25a.75.75 0 0 1 0 1.5M17.75 12a3.25 3.25 0 0 1-3.25 3.25a.75.75 0 0 0 0 1.5A4.75 4.75 0 1 0 9.75 12a.75.75 0 0 0 1.5 0a3.25 3.25 0 0 1 6.5 0" clip-rule="evenodd"></svg:path>`,
})
export class SolarLinkCircleBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLinkMinimalistic2BoldIcon],svg[solar-link-minimalistic-2-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.739 4.261a6.867 6.867 0 0 0-9.711 0l-.72.721a.75.75 0 0 0 1.06 1.06l.72-.72a5.367 5.367 0 1 1 7.59 7.59l-.72.72a.75.75 0 0 0 1.06 1.06l.72-.72a6.867 6.867 0 0 0 0-9.71M6.043 9.307a.75.75 0 0 1 0 1.06l-.721.722a5.367 5.367 0 1 0 7.59 7.59l.72-.722a.75.75 0 0 1 1.06 1.06l-.72.722a6.867 6.867 0 0 1-9.71-9.711l.72-.72a.75.75 0 0 1 1.06 0"></svg:path><svg:path fill="currentColor" d="M14.693 9.307a.75.75 0 0 1 0 1.06l-4.325 4.326a.75.75 0 1 1-1.06-1.06l4.324-4.326a.75.75 0 0 1 1.06 0"></svg:path>`,
})
export class SolarLinkMinimalistic2BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLinkMinimalisticBoldIcon],svg[solar-link-minimalistic-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 6.75a5.25 5.25 0 0 0 0 10.5h1a.75.75 0 0 1 0 1.5H8a6.75 6.75 0 0 1 0-13.5h1a.75.75 0 0 1 0 1.5z"></svg:path><svg:path fill="currentColor" d="M8.25 12a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75"></svg:path><svg:path fill="currentColor" d="M15 5.25a.75.75 0 0 0 0 1.5h1a5.25 5.25 0 1 1 0 10.5h-1a.75.75 0 0 0 0 1.5h1a6.75 6.75 0 0 0 0-13.5z"></svg:path>`,
})
export class SolarLinkMinimalisticBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLinkRoundAngleBoldIcon],svg[solar-link-round-angle-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.17 6.309a5.317 5.317 0 0 1 7.522 0a5.326 5.326 0 0 1 0 7.529l-1.43 1.43a.75.75 0 0 0 1.06 1.061l1.43-1.431a6.826 6.826 0 0 0 0-9.65a6.817 6.817 0 0 0-9.644 0l-2.86 2.864A6.826 6.826 0 0 0 6.69 19.749a.75.75 0 1 0 .083-1.498a5.326 5.326 0 0 1-3.465-9.08z"></svg:path><svg:path fill="currentColor" d="M17.31 4.251a.75.75 0 0 0-.083 1.498a5.326 5.326 0 0 1 3.465 9.08L17.83 17.69a5.317 5.317 0 0 1-7.523 0a5.326 5.326 0 0 1 0-7.528l1.43-1.432a.75.75 0 0 0-1.06-1.06l-1.43 1.431a6.826 6.826 0 0 0 0 9.65a6.817 6.817 0 0 0 9.644 0l2.86-2.864A6.826 6.826 0 0 0 17.31 4.251"></svg:path>`,
})
export class SolarLinkRoundAngleBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLinkRoundBoldIcon],svg[solar-link-round-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.25 9A6.75 6.75 0 0 1 8 2.25h4a6.75 6.75 0 0 1 0 13.5h-2a.75.75 0 0 1 0-1.5h2a5.25 5.25 0 1 0 0-10.5H8a5.25 5.25 0 0 0-3.913 8.75a.75.75 0 0 1-1.118 1A6.73 6.73 0 0 1 1.25 9M12 9.75a5.25 5.25 0 1 0 0 10.5h4a5.25 5.25 0 0 0 3.913-8.75a.75.75 0 1 1 1.118-1A6.75 6.75 0 0 1 16 21.75h-4a6.75 6.75 0 0 1 0-13.5h2a.75.75 0 0 1 0 1.5z" clip-rule="evenodd"></svg:path>`,
})
export class SolarLinkRoundBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLinkSquareBoldIcon],svg[solar-link-square-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 22c-4.714 0-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22M9.198 7.25h.104c.899 0 1.648 0 2.242.08c.628.084 1.195.27 1.65.725c.456.456.642 1.023.726 1.65c.08.595.08 1.345.08 2.243V12a.75.75 0 0 1-1.5 0c0-.964-.002-1.612-.066-2.095c-.063-.461-.17-.659-.3-.789s-.328-.237-.79-.3c-.482-.064-1.13-.066-2.094-.066s-1.612.002-2.095.067c-.461.062-.659.169-.789.3s-.237.327-.3.788C6.003 10.388 6 11.036 6 12s.002 1.612.067 2.095c.062.461.169.659.3.789s.327.237.788.3c.483.064 1.131.066 2.095.066a.75.75 0 0 1 0 1.5h-.052c-.898 0-1.648 0-2.242-.08c-.628-.084-1.195-.27-1.65-.726c-.456-.455-.642-1.022-.726-1.65c-.08-.594-.08-1.344-.08-2.242v-.104c0-.899 0-1.648.08-2.242c.084-.628.27-1.195.725-1.65c.456-.456 1.023-.642 1.65-.726c.595-.08 1.345-.08 2.243-.08m7.647 1.567c-.483-.065-1.131-.067-2.095-.067a.75.75 0 0 1 0-1.5h.052c.899 0 1.648 0 2.242.08c.628.084 1.195.27 1.65.725c.456.456.642 1.023.726 1.65c.08.595.08 1.345.08 2.243v.104c0 .899 0 1.648-.08 2.242c-.084.628-.27 1.195-.726 1.65c-.455.456-1.022.642-1.65.726c-.594.08-1.344.08-2.242.08h-.104c-.899 0-1.648 0-2.242-.08c-.628-.084-1.195-.27-1.65-.726c-.456-.455-.642-1.022-.726-1.65C10 13.7 10 12.95 10 12.052V12a.75.75 0 0 1 1.5 0c0 .964.002 1.612.066 2.095c.063.461.17.659.3.789s.328.237.79.3c.482.064 1.13.066 2.094.066s1.612-.002 2.095-.066c.461-.063.659-.17.789-.3s.237-.328.3-.79c.064-.482.066-1.13.066-2.094s-.002-1.612-.067-2.095c-.062-.461-.169-.659-.3-.789s-.327-.237-.788-.3" clip-rule="evenodd"></svg:path>`,
})
export class SolarLinkSquareBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarListArrowDownBoldIcon],svg[solar-list-arrow-down-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.25 6A.75.75 0 0 1 3 5.25h18a.75.75 0 0 1 0 1.5H3A.75.75 0 0 1 2.25 6m0 4A.75.75 0 0 1 3 9.25h18a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75m0 4a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75m15.25-.75a.75.75 0 0 1 .75.75v4.19l1.22-1.22a.75.75 0 1 1 1.06 1.06l-2.5 2.5a.75.75 0 0 1-1.06 0l-2.5-2.5a.75.75 0 1 1 1.06-1.06l1.22 1.22V14a.75.75 0 0 1 .75-.75M2.25 18a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarListArrowDownBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarListArrowDownMinimalisticBoldIcon],svg[solar-list-arrow-down-minimalistic-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.25 6A.75.75 0 0 1 3 5.25h17a.75.75 0 0 1 0 1.5H3A.75.75 0 0 1 2.25 6m0 5a.75.75 0 0 1 .75-.75h9a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75m0 5a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75m14.72 1.53a.75.75 0 0 0 1.06 0l2.5-2.5a.75.75 0 1 0-1.06-1.06l-1.22 1.22V9a.75.75 0 0 0-1.5 0v6.19l-1.22-1.22a.75.75 0 1 0-1.06 1.06z" clip-rule="evenodd"></svg:path>`,
})
export class SolarListArrowDownMinimalisticBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarListArrowUpBoldIcon],svg[solar-list-arrow-up-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.25 6A.75.75 0 0 1 3 5.25h18a.75.75 0 0 1 0 1.5H3A.75.75 0 0 1 2.25 6m0 4A.75.75 0 0 1 3 9.25h18a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75m0 4a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75m14.72-.53a.75.75 0 0 1 1.06 0l2.5 2.5a.75.75 0 1 1-1.06 1.06l-1.22-1.22V20a.75.75 0 0 1-1.5 0v-4.19l-1.22 1.22a.75.75 0 1 1-1.06-1.06zM2.25 18a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarListArrowUpBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarListArrowUpMinimalisticBoldIcon],svg[solar-list-arrow-up-minimalistic-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.25 6A.75.75 0 0 1 3 5.25h17a.75.75 0 0 1 0 1.5H3A.75.75 0 0 1 2.25 6m14.72 2.47a.75.75 0 0 1 1.06 0l2.5 2.5a.75.75 0 1 1-1.06 1.06l-1.22-1.22V17a.75.75 0 0 1-1.5 0v-6.19l-1.22 1.22a.75.75 0 1 1-1.06-1.06zM2.25 11a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75m0 5a.75.75 0 0 1 .75-.75h9a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarListArrowUpMinimalisticBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarListBoldIcon],svg[solar-list-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.25 7A.75.75 0 0 1 4 6.25h16a.75.75 0 0 1 0 1.5H4A.75.75 0 0 1 3.25 7m0 5a.75.75 0 0 1 .75-.75h11a.75.75 0 0 1 0 1.5H4a.75.75 0 0 1-.75-.75m0 5a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5H4a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarListBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarListCheckBoldIcon],svg[solar-list-check-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 5.75A.75.75 0 0 1 2.75 5h18a.75.75 0 0 1 0 1.5h-18A.75.75 0 0 1 2 5.75m0 4A.75.75 0 0 1 2.75 9h18a.75.75 0 0 1 0 1.5h-18A.75.75 0 0 1 2 9.75m18.211 2.909a.75.75 0 0 1 .13 1.052l-3.9 5a.75.75 0 0 1-1.165.021l-2.1-2.5a.75.75 0 1 1 1.148-.964l1.504 1.79l3.33-4.27a.75.75 0 0 1 1.053-.13M2 13.75a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5h-7a.75.75 0 0 1-.75-.75m0 4a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5h-7a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarListCheckBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarListCheckMinimalisticBoldIcon],svg[solar-list-check-minimalistic-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h17a.75.75 0 0 1 0 1.5h-17A.75.75 0 0 1 3 6.75m18.211 4.409a.75.75 0 0 1 .13 1.052l-3.9 5a.75.75 0 0 1-1.165.021l-2.1-2.5a.75.75 0 1 1 1.148-.964l1.504 1.79l3.33-4.27a.75.75 0 0 1 1.053-.13M3 11.75a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5h-7a.75.75 0 0 1-.75-.75m0 5a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5h-7a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarListCheckMinimalisticBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarListCrossBoldIcon],svg[solar-list-cross-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.25 6A.75.75 0 0 1 3 5.25h18a.75.75 0 0 1 0 1.5H3A.75.75 0 0 1 2.25 6m0 4A.75.75 0 0 1 3 9.25h18a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75m12.22 2.97a.75.75 0 0 1 1.06 0l1.97 1.97l1.97-1.97a.75.75 0 1 1 1.06 1.06L18.56 16l1.97 1.97a.75.75 0 1 1-1.06 1.06l-1.97-1.97l-1.97 1.97a.75.75 0 1 1-1.06-1.06L16.44 16l-1.97-1.97a.75.75 0 0 1 0-1.06M2.25 14a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75m0 4a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarListCrossBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarListCrossMinimalisticBoldIcon],svg[solar-list-cross-minimalistic-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.25 6A.75.75 0 0 1 3 5.25h17a.75.75 0 0 1 0 1.5H3A.75.75 0 0 1 2.25 6m0 5a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75m12.22-.53a.75.75 0 0 1 1.06 0l1.97 1.97l1.97-1.97a.75.75 0 1 1 1.06 1.06l-1.97 1.97l1.97 1.97a.75.75 0 1 1-1.06 1.06l-1.97-1.97l-1.97 1.97a.75.75 0 1 1-1.06-1.06l1.97-1.97l-1.97-1.97a.75.75 0 0 1 0-1.06M2.25 16a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarListCrossMinimalisticBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarListDownBoldIcon],svg[solar-list-down-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.25 6A.75.75 0 0 1 3 5.25h18a.75.75 0 0 1 0 1.5H3A.75.75 0 0 1 2.25 6m0 4A.75.75 0 0 1 3 9.25h18a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75m0 4a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75m11.18.512a.75.75 0 0 1 1.058-.081l3.012 2.581l3.012-2.581a.75.75 0 1 1 .976 1.138l-3.5 3a.75.75 0 0 1-.976 0l-3.5-3a.75.75 0 0 1-.081-1.057M2.25 18a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarListDownBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarListDownMinimalisticBoldIcon],svg[solar-list-down-minimalistic-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.25 6A.75.75 0 0 1 3 5.25h17a.75.75 0 0 1 0 1.5H3A.75.75 0 0 1 2.25 6m0 5a.75.75 0 0 1 .75-.75h17a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75m0 5a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75m14.762 2.57c.28.24.695.24.976 0l3.5-3a.75.75 0 1 0-.976-1.14L17.5 17.013l-3.012-2.581a.75.75 0 1 0-.976 1.138z" clip-rule="evenodd"></svg:path>`,
})
export class SolarListDownMinimalisticBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarListHeartBoldIcon],svg[solar-list-heart-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 15.036c0 1.235 1.485 2.543 2.52 3.305c.435.32.652.48.98.48s.545-.16.98-.48c1.035-.762 2.52-2.07 2.52-3.305c0-2.008-1.925-2.757-3.5-1.206c-1.575-1.551-3.5-.802-3.5 1.206"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M2.25 6A.75.75 0 0 1 3 5.25h18a.75.75 0 0 1 0 1.5H3A.75.75 0 0 1 2.25 6m0 4A.75.75 0 0 1 3 9.25h18a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75m0 4a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75m0 4a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarListHeartBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarListHeartMinimalisticBoldIcon],svg[solar-list-heart-minimalistic-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.25 6A.75.75 0 0 1 3 5.25h17a.75.75 0 0 1 0 1.5H3A.75.75 0 0 1 2.25 6m0 5a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75m0 5a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M13 11.715c0 1.752 2.163 3.615 3.49 4.593c.454.335.681.502 1.01.502s.556-.167 1.01-.502c1.327-.978 3.49-2.84 3.49-4.593c0-2.677-2.475-3.677-4.5-1.609c-2.025-2.068-4.5-1.068-4.5 1.609"></svg:path>`,
})
export class SolarListHeartMinimalisticBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarListUpBoldIcon],svg[solar-list-up-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.25 6A.75.75 0 0 1 3 5.25h18a.75.75 0 0 1 0 1.5H3A.75.75 0 0 1 2.25 6m0 4A.75.75 0 0 1 3 9.25h18a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75m0 4a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75m14.762.43a.75.75 0 0 1 .976 0l3.5 3a.75.75 0 1 1-.976 1.14L17.5 15.987l-3.012 2.581a.75.75 0 1 1-.976-1.138zM2.25 18a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarListUpBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarListUpMinimalisticBoldIcon],svg[solar-list-up-minimalistic-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.25 6A.75.75 0 0 1 3 5.25h17a.75.75 0 0 1 0 1.5H3A.75.75 0 0 1 2.25 6m0 5a.75.75 0 0 1 .75-.75h17a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75m14.762 3.43a.75.75 0 0 1 .976 0l3.5 3a.75.75 0 1 1-.976 1.14L17.5 15.987l-3.012 2.581a.75.75 0 1 1-.976-1.138zM2.25 16a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarListUpMinimalisticBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLockBoldIcon],svg[solar-lock-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.25 10.055V8a6.75 6.75 0 0 1 13.5 0v2.055c1.115.083 1.84.293 2.371.824C22 11.757 22 13.172 22 16s0 4.243-.879 5.121C20.243 22 18.828 22 16 22H8c-2.828 0-4.243 0-5.121-.879C2 20.243 2 18.828 2 16s0-4.243.879-5.121c.53-.531 1.256-.741 2.371-.824M6.75 8a5.25 5.25 0 0 1 10.5 0v2.004Q16.676 9.999 16 10H8q-.677-.001-1.25.004z" clip-rule="evenodd"></svg:path>`,
})
export class SolarLockBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLockKeyholeBoldIcon],svg[solar-lock-keyhole-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.25 10.055V8a6.75 6.75 0 0 1 13.5 0v2.055c1.115.083 1.84.293 2.371.824C22 11.757 22 13.172 22 16s0 4.243-.879 5.121C20.243 22 18.828 22 16 22H8c-2.828 0-4.243 0-5.121-.879C2 20.243 2 18.828 2 16s0-4.243.879-5.121c.53-.531 1.256-.741 2.371-.824M6.75 8a5.25 5.25 0 0 1 10.5 0v2.004Q16.676 9.999 16 10H8q-.677-.001-1.25.004zM14 16a2 2 0 1 1-4 0a2 2 0 0 1 4 0" clip-rule="evenodd"></svg:path>`,
})
export class SolarLockKeyholeBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLockKeyholeMinimalisticBoldIcon],svg[solar-lock-keyhole-minimalistic-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.25 10.055V8a6.75 6.75 0 0 1 13.5 0v2.055c1.115.083 1.84.293 2.371.824C22 11.757 22 13.172 22 16s0 4.243-.879 5.121C20.243 22 18.828 22 16 22H8c-2.828 0-4.243 0-5.121-.879C2 20.243 2 18.828 2 16s0-4.243.879-5.121c.53-.531 1.256-.741 2.371-.824M6.75 8a5.25 5.25 0 0 1 10.5 0v2.004Q16.676 9.999 16 10H8q-.677-.001-1.25.004zM12 13.25a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 .75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarLockKeyholeMinimalisticBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLockKeyholeMinimalisticUnlockedBoldIcon],svg[solar-lock-keyhole-minimalistic-unlocked-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 2.75A5.25 5.25 0 0 0 6.75 8v2.004Q7.323 9.999 8 10h8c2.828 0 4.243 0 5.121.879C22 11.757 22 13.172 22 16s0 4.243-.879 5.121C20.243 22 18.828 22 16 22H8c-2.828 0-4.243 0-5.121-.879C2 20.243 2 18.828 2 16s0-4.243.879-5.121c.53-.531 1.256-.741 2.371-.824V8a6.75 6.75 0 0 1 13.287-1.687a.75.75 0 1 1-1.452.374A5.25 5.25 0 0 0 12 2.75M12.75 14a.75.75 0 0 0-1.5 0v4a.75.75 0 0 0 1.5 0z" clip-rule="evenodd"></svg:path>`,
})
export class SolarLockKeyholeMinimalisticUnlockedBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLockKeyholeUnlockedBoldIcon],svg[solar-lock-keyhole-unlocked-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.75 8a5.25 5.25 0 0 1 10.335-1.313a.75.75 0 0 0 1.452-.374A6.75 6.75 0 0 0 5.25 8v2.055c-1.115.083-1.84.293-2.371.824C2 11.757 2 13.172 2 16s0 4.243.879 5.121C3.757 22 5.172 22 8 22h8c2.828 0 4.243 0 5.121-.879C22 20.243 22 18.828 22 16s0-4.243-.879-5.121C20.243 10 18.828 10 16 10H8q-.677-.001-1.25.004zM14 16a2 2 0 1 1-4 0a2 2 0 0 1 4 0" clip-rule="evenodd"></svg:path>`,
})
export class SolarLockKeyholeUnlockedBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLockPasswordBoldIcon],svg[solar-lock-password-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.25 10.055V8a6.75 6.75 0 0 1 13.5 0v2.055c1.115.083 1.84.293 2.371.824C22 11.757 22 13.172 22 16s0 4.243-.879 5.121C20.243 22 18.828 22 16 22H8c-2.828 0-4.243 0-5.121-.879C2 20.243 2 18.828 2 16s0-4.243.879-5.121c.53-.531 1.256-.741 2.371-.824M6.75 8a5.25 5.25 0 0 1 10.5 0v2.004Q16.676 9.999 16 10H8q-.677-.001-1.25.004zM8 17a1 1 0 1 0 0-2a1 1 0 0 0 0 2m4 0a1 1 0 1 0 0-2a1 1 0 0 0 0 2m5-1a1 1 0 1 1-2 0a1 1 0 0 1 2 0" clip-rule="evenodd"></svg:path>`,
})
export class SolarLockPasswordBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLockPasswordUnlockedBoldIcon],svg[solar-lock-password-unlocked-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.75 8a5.25 5.25 0 0 1 10.335-1.313a.75.75 0 0 0 1.452-.374A6.75 6.75 0 0 0 5.25 8v2.055c-1.115.083-1.84.293-2.371.824C2 11.757 2 13.172 2 16s0 4.243.879 5.121C3.757 22 5.172 22 8 22h8c2.828 0 4.243 0 5.121-.879C22 20.243 22 18.828 22 16s0-4.243-.879-5.121C20.243 10 18.828 10 16 10H8q-.677-.001-1.25.004zM8 17a1 1 0 1 0 0-2a1 1 0 0 0 0 2m4 0a1 1 0 1 0 0-2a1 1 0 0 0 0 2m5-1a1 1 0 1 1-2 0a1 1 0 0 1 2 0" clip-rule="evenodd"></svg:path>`,
})
export class SolarLockPasswordUnlockedBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLockUnlockedBoldIcon],svg[solar-lock-unlocked-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.75 8a5.25 5.25 0 0 1 10.335-1.313a.75.75 0 0 0 1.452-.374A6.75 6.75 0 0 0 5.25 8v2.055c-1.115.083-1.84.293-2.371.824C2 11.757 2 13.172 2 16s0 4.243.879 5.121C3.757 22 5.172 22 8 22h8c2.828 0 4.243 0 5.121-.879C22 20.243 22 18.828 22 16s0-4.243-.879-5.121C20.243 10 18.828 10 16 10H8q-.677-.001-1.25.004z"></svg:path>`,
})
export class SolarLockUnlockedBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLogin2BoldIcon],svg[solar-login-2-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.625 12c0 .414.336.75.75.75h10.973l-1.961 1.68a.75.75 0 1 0 .976 1.14l3.5-3a.75.75 0 0 0 0-1.14l-3.5-3a.75.75 0 1 0-.976 1.14l1.96 1.68H2.376a.75.75 0 0 0-.75.75" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M9.375 9.75h.378a2.25 2.25 0 0 1 3.586-2.458l3.5 3a2.25 2.25 0 0 1 0 3.416l-3.5 3a2.25 2.25 0 0 1-3.586-2.458h-.378V16c0 2.828 0 4.243.879 5.121c.878.879 2.293.879 5.121.879h1c2.828 0 4.243 0 5.121-.879c.879-.878.879-2.293.879-5.121V8c0-2.828 0-4.243-.879-5.121C20.618 2 19.203 2 16.375 2h-1c-2.828 0-4.243 0-5.121.879c-.879.878-.879 2.293-.879 5.121z"></svg:path>`,
})
export class SolarLogin2BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLogin3BoldIcon],svg[solar-login-3-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.5 9.568v4.864c0 2.294 0 3.44.722 4.153c.655.647 1.674.706 3.596.712l-.015-.105c-.115-.844-.115-1.916-.115-3.247v-.053c0-.403.331-.73.74-.73c.408 0 .739.327.739.73c0 1.396.001 2.37.101 3.105c.098.714.275 1.093.548 1.362s.656.445 1.379.54c.744.1 1.731.101 3.146.101h.985c1.415 0 2.401-.002 3.146-.1c.723-.096 1.106-.272 1.378-.541c.273-.27.451-.648.548-1.362c.1-.734.102-1.709.102-3.105V8.108c0-1.397-.002-2.37-.102-3.105c-.097-.714-.275-1.093-.547-1.362c-.273-.27-.656-.445-1.38-.54C17.728 3 16.742 3 15.327 3h-.985c-1.415 0-2.402.002-3.146.1c-.723.096-1.106.272-1.379.541c-.273.27-.45.648-.548 1.362c-.1.734-.101 1.708-.101 3.105c0 .403-.331.73-.74.73a.734.734 0 0 1-.739-.73v-.053c0-1.33 0-2.403.115-3.247l.015-.105c-1.922.006-2.94.065-3.596.712c-.722.713-.722 1.86-.722 4.153m9.885 5.38l2.464-2.432a.723.723 0 0 0 0-1.032l-2.464-2.432a.746.746 0 0 0-1.045 0a.723.723 0 0 0 0 1.032l1.202 1.186H6.457a.734.734 0 0 0-.74.73c0 .403.331.73.74.73h7.085l-1.202 1.186a.723.723 0 0 0 0 1.032a.746.746 0 0 0 1.045 0" clip-rule="evenodd"></svg:path>`,
})
export class SolarLogin3BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLoginBoldIcon],svg[solar-login-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10.845 8.095a.75.75 0 0 0 0 1.06l1.72 1.72h-8.19a.75.75 0 0 0 0 1.5h8.19l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 0 0-1.06 0" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M12.375 5.877c0 .448.274.84.591 1.157l3 3a2.25 2.25 0 0 1 0 3.182l-3 3c-.317.317-.591.709-.591 1.157v2.252a8 8 0 1 0 0-16z"></svg:path>`,
})
export class SolarLoginBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLogout2BoldIcon],svg[solar-logout-2-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M16.125 12a.75.75 0 0 0-.75-.75H4.402l1.961-1.68a.75.75 0 1 0-.976-1.14l-3.5 3a.75.75 0 0 0 0 1.14l3.5 3a.75.75 0 1 0 .976-1.14l-1.96-1.68h10.972a.75.75 0 0 0 .75-.75" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M9.375 8c0 .702 0 1.053.169 1.306a1 1 0 0 0 .275.275c.253.169.604.169 1.306.169h4.25a2.25 2.25 0 0 1 0 4.5h-4.25c-.702 0-1.053 0-1.306.168a1 1 0 0 0-.275.276c-.169.253-.169.604-.169 1.306c0 2.828 0 4.243.879 5.121c.878.879 2.292.879 5.12.879h1c2.83 0 4.243 0 5.122-.879c.879-.878.879-2.293.879-5.121V8c0-2.828 0-4.243-.879-5.121S19.203 2 16.375 2h-1c-2.829 0-4.243 0-5.121.879c-.879.878-.879 2.293-.879 5.121"></svg:path>`,
})
export class SolarLogout2BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLogout3BoldIcon],svg[solar-logout-3-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.5 9.568v4.864c0 2.294 0 3.44.722 4.153c.655.647 1.674.706 3.596.712c-.101-.675-.122-1.48-.128-2.428a.734.734 0 0 1 .735-.734a.735.735 0 0 1 .744.726c.006 1.064.033 1.818.14 2.39c.103.552.267.87.507 1.108c.273.27.656.445 1.38.54c.744.1 1.73.101 3.145.101h.985c1.415 0 2.401-.002 3.146-.1c.723-.096 1.106-.272 1.378-.541c.273-.27.451-.648.548-1.362c.1-.734.102-1.709.102-3.105V8.108c0-1.397-.002-2.37-.102-3.105c-.097-.714-.275-1.093-.547-1.362c-.273-.27-.656-.445-1.38-.54C17.728 3 16.742 3 15.327 3h-.985c-1.415 0-2.401.002-3.146.1c-.723.096-1.106.272-1.379.541c-.24.237-.404.556-.507 1.108c-.107.572-.134 1.326-.14 2.39a.735.735 0 0 1-.744.726a.734.734 0 0 1-.735-.734c.006-.948.027-1.753.128-2.428c-1.922.006-2.94.065-3.596.712c-.722.713-.722 1.86-.722 4.153m2.434 2.948a.723.723 0 0 1 0-1.032l1.97-1.946a.746.746 0 0 1 1.046 0a.723.723 0 0 1 0 1.032l-.71.7h7.086c.408 0 .74.327.74.73s-.332.73-.74.73H8.24l.71.7a.723.723 0 0 1 0 1.032a.746.746 0 0 1-1.046 0z" clip-rule="evenodd"></svg:path>`,
})
export class SolarLogout3BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarLogoutBoldIcon],svg[solar-logout-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M16.47 8.47a.75.75 0 0 0 0 1.06l1.72 1.72H10a.75.75 0 0 0 0 1.5h8.19l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 0 0-1.06 0" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M4 12a8 8 0 0 0 8 8v-3.75c0-.943 0-1.414-.293-1.707s-.764-.293-1.707-.293"></svg:path>`,
})
export class SolarLogoutBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMagicStick2BoldIcon],svg[solar-magic-stick-2-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13.036 3.652l-.573.339c-.63.373-.945.56-1.291.603c-.347.043-.687-.061-1.365-.27l-.618-.19c-2.39-.736-3.584-1.103-4.302-.446s-.484 1.904-.016 4.397l.121.645c.133.709.2 1.063.12 1.409c-.078.346-.293.645-.724 1.242l-.392.544C2.48 14.028 1.723 15.08 2.093 15.95s1.621.987 4.126 1.216l.648.06c.711.064 1.067.097 1.365.267s.504.46.917 1.038l.376.526c1.452 2.035 2.178 3.052 3.125 2.934c.946-.119 1.486-1.295 2.566-3.646l.28-.609c.156-.341.273-.596.385-.795l4.589 4.59a.75.75 0 1 0 1.06-1.061l-4.43-4.432q.182-.066.411-.146l.624-.218c2.413-.846 3.62-1.268 3.835-2.213s-.703-1.786-2.54-3.469l-.475-.435c-.522-.478-.783-.717-.919-1.036c-.135-.32-.13-.683-.118-1.41l.01-.661c.038-2.557.058-3.835-.755-4.3c-.814-.466-1.921.19-4.136 1.502"></svg:path>`,
})
export class SolarMagicStick2BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMagicStick3BoldIcon],svg[solar-magic-stick-3-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.845 3.845a2.883 2.883 0 0 0 0 4.077L5.432 9.51l.038-.04l4-4l.04-.038l-1.588-1.587a2.883 2.883 0 0 0-4.077 0m6.723 2.645l-.038.04l-4 4l-.04.038l9.588 9.588a2.884 2.884 0 0 0 4.078-4.078zM16.1 2.307a.483.483 0 0 1 .9 0l.43 1.095a.48.48 0 0 0 .272.274l1.091.432a.486.486 0 0 1 0 .903l-1.09.432a.5.5 0 0 0-.273.273L17 6.81a.483.483 0 0 1-.9 0l-.43-1.095a.5.5 0 0 0-.273-.273l-1.09-.432a.486.486 0 0 1 0-.903l1.09-.432a.5.5 0 0 0 .273-.274zm3.867 6.823a.483.483 0 0 1 .9 0l.156.399c.05.125.148.224.273.273l.398.158a.486.486 0 0 1 0 .902l-.398.158a.5.5 0 0 0-.273.273l-.156.4a.483.483 0 0 1-.9 0l-.157-.4a.5.5 0 0 0-.272-.273l-.398-.158a.486.486 0 0 1 0-.902l.398-.158a.5.5 0 0 0 .272-.273zM5.133 15.307a.483.483 0 0 1 .9 0l.157.4a.48.48 0 0 0 .272.273l.398.157a.486.486 0 0 1 0 .903l-.398.158a.48.48 0 0 0-.272.273l-.157.4a.483.483 0 0 1-.9 0l-.157-.4a.48.48 0 0 0-.272-.273l-.398-.158a.486.486 0 0 1 0-.903l.398-.157a.48.48 0 0 0 .272-.274z"></svg:path>`,
})
export class SolarMagicStick3BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMagicStickBoldIcon],svg[solar-magic-stick-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.714 2.127c-.836-.43-1.922.263-4.095 1.65l-.562.36c-.618.394-.927.591-1.273.648c-.347.056-.692-.034-1.382-.215l-.628-.164C6.345 3.769 5.13 3.45 4.436 4.13s-.412 1.908.157 4.363l.147.635c.161.697.242 1.046.177 1.393c-.066.346-.27.65-.68 1.26l-.372.555c-1.439 2.145-2.158 3.217-1.753 4.067c.406.85 1.668.915 4.192 1.045l.654.033c.717.037 1.076.056 1.382.213c.306.158.524.436.962.994l.398.507c1.539 1.962 2.309 2.943 3.255 2.788c.945-.154 1.441-1.342 2.433-3.717l.257-.614c.282-.675.422-1.012.677-1.261c.255-.25.595-.382 1.274-.647l.618-.24c2.39-.933 3.586-1.4 3.765-2.345s-.777-1.744-2.688-3.342l-.495-.413c-.543-.454-.815-.68-.963-.992s-.158-.672-.175-1.393l-.016-.657c-.062-2.538-.093-3.806-.928-4.236M19.53 18.47a.75.75 0 1 0-1.06 1.06l2 2a.75.75 0 1 0 1.06-1.06z"></svg:path>`,
})
export class SolarMagicStickBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMagnetBoldIcon],svg[solar-magnet-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.25 2H13C7.477 2 3 6.477 3 12s4.477 10 10 10h3.25v-5H13a5 5 0 0 1 0-10h3.25zm1.5 5h1.75A1.5 1.5 0 0 0 21 5.5v-2A1.5 1.5 0 0 0 19.5 2h-1.75zm0 10v5h1.75a1.5 1.5 0 0 0 1.5-1.5v-2a1.5 1.5 0 0 0-1.5-1.5z"></svg:path>`,
})
export class SolarMagnetBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMagnetWaveBoldIcon],svg[solar-magnet-wave-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.694 3H11a9 9 0 1 0 0 18h2.694v-4.5h-2.75a4.5 4.5 0 0 1 0-9h2.75zm1.5 4.5H16.5A1.5 1.5 0 0 0 18 6V4.5A1.5 1.5 0 0 0 16.5 3h-1.306zm0 9V21H16.5a1.5 1.5 0 0 0 1.5-1.5V18a1.5 1.5 0 0 0-1.5-1.5zm4.962-7.864a.75.75 0 0 0-1.317.719l.005.01l.038.087c.035.087.087.235.141.447c.11.424.227 1.111.227 2.101s-.118 1.677-.227 2.101a4 4 0 0 1-.179.534l-.005.01a.75.75 0 0 0 1.317.72L19.5 15l.656.364v-.001l.001-.002l.002-.003l.004-.007l.01-.018l.026-.053q.03-.064.075-.175c.06-.147.132-.356.203-.631c.14-.551.273-1.364.273-2.474s-.132-1.923-.273-2.474a5 5 0 0 0-.203-.631a3 3 0 0 0-.102-.228l-.01-.018l-.003-.007l-.002-.004s-.001-.002-.657.362z"></svg:path><svg:path fill="currentColor" d="M23.503 14.846a11.3 11.3 0 0 1-.553 1.998a7.7 7.7 0 0 1-.572 1.195a5 5 0 0 1-.289.425l-.007.01l-.003.003l-.002.002v.001a.75.75 0 0 1-1.157-.956l.003-.004l.031-.041q.047-.062.137-.212c.12-.199.288-.516.459-.961c.162-.42.327-.956.456-1.617c.127-.65.22-1.42.24-2.32a17 17 0 0 0-.057-1.764c-.117-1.285-.383-2.244-.639-2.91a6 6 0 0 0-.459-.962a3 3 0 0 0-.168-.253l-.003-.004a.75.75 0 0 1 1.156-.956l.001.001l.002.002l.003.003l.007.01a2 2 0 0 1 .086.114q.08.109.203.311c.161.27.368.665.572 1.195c.301.783.594 1.855.726 3.243q.072.74.074 1.601m0 0a15.6 15.6 0 0 1-.247 2.846z"></svg:path>`,
})
export class SolarMagnetWaveBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMagniferBoldIcon],svg[solar-magnifer-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M21.788 21.788a.723.723 0 0 0 0-1.022L18.122 17.1a9.157 9.157 0 1 0-1.022 1.022l3.666 3.666a.723.723 0 0 0 1.022 0" clip-rule="evenodd"></svg:path>`,
})
export class SolarMagniferBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMagniferBugBoldIcon],svg[solar-magnifer-bug-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M8.857 11.947a2.13 2.13 0 0 0 1.429 2.01v-3.194H8.857zm4.164-2.605A2.14 2.14 0 0 0 11 7.921a2.14 2.14 0 0 0-2.02 1.421zm.122 1.421h-1.429v3.195a2.13 2.13 0 0 0 1.429-2.01z"></svg:path><svg:path d="M21.788 21.788a.723.723 0 0 0 0-1.022L18.122 17.1a9.157 9.157 0 1 0-1.022 1.022l3.666 3.666a.723.723 0 0 0 1.022 0M8.19 7.86A3.57 3.57 0 0 1 11 6.5c1.14 0 2.157.532 2.81 1.36l.68-.338a.716.716 0 0 1 .958.318a.71.71 0 0 1-.319.953l-.679.338q.12.442.121.922v.236h.715c.394 0 .714.319.714.711s-.32.71-.714.71h-.715v.237q-.002.48-.12.922l.678.338a.71.71 0 0 1 .32.953a.716.716 0 0 1-.959.318l-.68-.338A3.57 3.57 0 0 1 11 15.5a3.57 3.57 0 0 1-2.81-1.36l-.68.338a.716.716 0 0 1-.958-.318a.71.71 0 0 1 .319-.953l.679-.338a3.5 3.5 0 0 1-.121-.922v-.236h-.715A.71.71 0 0 1 6 11c0-.392.32-.71.714-.71h.715v-.237q.001-.48.12-.922l-.678-.338a.71.71 0 0 1-.32-.953a.716.716 0 0 1 .959-.318z"></svg:path></svg:g>`,
})
export class SolarMagniferBugBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMagniferZoomInBoldIcon],svg[solar-magnifer-zoom-in-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M21.788 21.788a.723.723 0 0 0 0-1.022L18.122 17.1a9.157 9.157 0 1 0-1.022 1.022l3.666 3.666a.723.723 0 0 0 1.022 0M11.157 8.024c.399 0 .723.324.723.723v1.687h1.686a.723.723 0 0 1 0 1.446H11.88v1.686a.723.723 0 1 1-1.445 0V11.88H8.747a.723.723 0 1 1 0-1.445h1.687V8.747c0-.4.323-.723.723-.723" clip-rule="evenodd"></svg:path>`,
})
export class SolarMagniferZoomInBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMagniferZoomOutBoldIcon],svg[solar-magnifer-zoom-out-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M21.788 21.788a.723.723 0 0 0 0-1.022L18.122 17.1a9.157 9.157 0 1 0-1.022 1.022l3.666 3.666a.723.723 0 0 0 1.022 0M8.024 11.157c0-.4.324-.723.723-.723h4.82a.723.723 0 0 1 0 1.446h-4.82a.723.723 0 0 1-.723-.723" clip-rule="evenodd"></svg:path>`,
})
export class SolarMagniferZoomOutBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMailboxBoldIcon],svg[solar-mailbox-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.5 20v2a.75.75 0 0 0 1.5 0v-2zm5.5 0h-1.5v2a.75.75 0 0 0 1.5 0z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="m17.385 6.585l.256-.052a2.2 2.2 0 0 1 1.24.115c.69.277 1.446.328 2.165.148l.061-.015c.524-.131.893-.618.893-1.178v-2.13c0-.738-.664-1.282-1.355-1.109c-.396.1-.812.071-1.193-.081l-.073-.03a3.5 3.5 0 0 0-2-.185l-.449.09c-.54.108-.93.6-.93 1.17v6.953c0 .397.31.719.692.719a.706.706 0 0 0 .693-.72z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M14.5 6v4.28c0 1.172.928 2.22 2.192 2.22s2.193-1.048 2.193-2.22V8.229c.76.205 1.56.23 2.335.067c.492.842.78 1.86.78 2.955v6.175C22 18.847 21.012 20 19.793 20H12.5v-8.75c0-2.03-.832-3.974-2.217-5.25z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M2 11.25C2 8.35 4.015 6 6.5 6S11 8.35 11 11.25V20H4.233C3 20 2 18.834 2 17.395zM4.25 16a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarMailboxBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMapArrowDownBoldIcon],svg[solar-map-arrow-down-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m3.165 4.497l7.362 16.51c.59 1.324 2.355 1.324 2.946 0l7.362-16.51c.667-1.495-.814-3.047-2.202-2.306L12.73 5.343c-.459.245-1 .245-1.458 0L5.367 2.191c-1.388-.74-2.87.81-2.202 2.306"></svg:path>`,
})
export class SolarMapArrowDownBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMapArrowLeftBoldIcon],svg[solar-map-arrow-left-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.503 20.835l-16.51-7.363c-1.324-.59-1.324-2.354 0-2.944l16.51-7.363c1.495-.667 3.047.814 2.306 2.202l-3.152 5.904c-.245.459-.245 1 0 1.458l3.152 5.904c.74 1.388-.81 2.87-2.306 2.202"></svg:path>`,
})
export class SolarMapArrowLeftBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMapArrowRightBoldIcon],svg[solar-map-arrow-right-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m4.497 20.835l16.51-7.363c1.324-.59 1.324-2.354 0-2.944L4.497 3.164c-1.495-.667-3.047.814-2.306 2.202l3.152 5.904c.245.459.245 1 0 1.458l-3.152 5.904c-.74 1.388.81 2.87 2.306 2.202"></svg:path>`,
})
export class SolarMapArrowRightBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMapArrowSquareBoldIcon],svg[solar-map-arrow-square-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.464 20.536C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535m13.47-12.34l-3.511 9.166c-.319.83-1.483.857-1.731.04l-1.057-3.477a.84.84 0 0 0-.56-.56l-3.477-1.057c-.817-.248-.79-1.412.04-1.73l9.166-3.513a.863.863 0 0 1 1.13 1.131" clip-rule="evenodd"></svg:path>`,
})
export class SolarMapArrowSquareBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMapArrowUpBoldIcon],svg[solar-map-arrow-up-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m3.165 19.503l7.362-16.51c.59-1.324 2.355-1.324 2.946 0l7.362 16.51c.667 1.495-.814 3.047-2.202 2.306l-5.904-3.152c-.459-.245-1-.245-1.458 0l-5.904 3.152c-1.388.74-2.87-.81-2.202-2.306"></svg:path>`,
})
export class SolarMapArrowUpBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMapBoldIcon],svg[solar-map-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.436 5.147C2 5.643 2 6.495 2 8.197v9.394c0 1.206 0 1.809.315 2.263c.314.454.864.645 1.964 1.026l1.294.449c.701.243 1.24.43 1.693.55c.296.079.567-.153.567-.459V6.27a.55.55 0 0 0-.425-.52c-.389-.099-.857-.261-1.498-.483c-1.553-.539-2.33-.808-2.92-.535a1.7 1.7 0 0 0-.554.415M12.62 3.481l-1.536 1.065c-.555.385-.963.668-1.31.869a.54.54 0 0 0-.274.458V20.92c0 .37.384.602.696.402c.335-.214.719-.48 1.184-.802l1.536-1.065c.555-.385.963-.668 1.31-.869a.54.54 0 0 0 .274-.458V3.08c0-.371-.384-.602-.696-.403c-.335.215-.719.48-1.184.803m7.1-.36l-1.293-.448c-.701-.243-1.24-.43-1.693-.55c-.296-.079-.567.153-.567.459v15.15a.55.55 0 0 0 .425.52c.389.099.857.26 1.498.483c1.553.539 2.33.808 2.92.535a1.7 1.7 0 0 0 .554-.415c.436-.496.436-1.348.436-3.05V6.41c0-1.206 0-1.81-.315-2.263c-.314-.454-.864-.645-1.964-1.026"></svg:path>`,
})
export class SolarMapBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMapPointAddBoldIcon],svg[solar-map-point-add-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 2c-4.418 0-8 3.646-8 8.143c0 4.462 2.553 9.67 6.537 11.531a3.45 3.45 0 0 0 2.926 0C17.447 19.812 20 14.606 20 10.144C20 5.645 16.418 2 12 2m0 4.75a.75.75 0 0 1 .75.75v1.75h1.75a.75.75 0 0 1 0 1.5h-1.75v1.75a.75.75 0 0 1-1.5 0v-1.75H9.5a.75.75 0 0 1 0-1.5h1.75V7.5a.75.75 0 0 1 .75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarMapPointAddBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMapPointBoldIcon],svg[solar-map-point-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 2c-4.418 0-8 4.003-8 8.5c0 4.462 2.553 9.312 6.537 11.174a3.45 3.45 0 0 0 2.926 0C17.447 19.812 20 14.962 20 10.5C20 6.003 16.418 2 12 2m0 10a2 2 0 1 0 0-4a2 2 0 0 0 0 4" clip-rule="evenodd"></svg:path>`,
})
export class SolarMapPointBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMapPointFavouriteBoldIcon],svg[solar-map-point-favourite-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 2c-4.418 0-8 3.646-8 8.143c0 4.462 2.553 9.67 6.537 11.531a3.45 3.45 0 0 0 2.926 0C17.447 19.812 20 14.606 20 10.144C20 5.645 16.418 2 12 2M9 8.757c0 1.02 1.165 2.097 2.043 2.765c.42.319.63.478.957.478c.328 0 .537-.16.957-.479C13.835 10.855 15 9.778 15 8.758c0-1.733-1.65-2.38-3-1.041c-1.35-1.339-3-.692-3 1.041" clip-rule="evenodd"></svg:path>`,
})
export class SolarMapPointFavouriteBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMapPointHospitalBoldIcon],svg[solar-map-point-hospital-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M12 7.75a.75.75 0 0 1 .75.75v.75h.75a.75.75 0 0 1 0 1.5h-.75v.75a.75.75 0 0 1-1.5 0v-.75h-.75a.75.75 0 0 1 0-1.5h.75V8.5a.75.75 0 0 1 .75-.75"></svg:path><svg:path d="M12 2c-4.418 0-8 3.646-8 8.143c0 4.462 2.553 9.67 6.537 11.531a3.45 3.45 0 0 0 2.926 0C17.447 19.812 20 14.606 20 10.144C20 5.645 16.418 2 12 2m0 12a4 4 0 1 0 0-8a4 4 0 0 0 0 8m.75-5.5a.75.75 0 0 0-1.5 0v.75h-.75a.75.75 0 0 0 0 1.5h.75v.75a.75.75 0 0 0 1.5 0v-.75h.75a.75.75 0 0 0 0-1.5h-.75z"></svg:path></svg:g>`,
})
export class SolarMapPointHospitalBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMapPointRemoveBoldIcon],svg[solar-map-point-remove-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 2c-4.418 0-8 3.646-8 8.143c0 4.462 2.553 9.67 6.537 11.531a3.45 3.45 0 0 0 2.926 0C17.447 19.812 20 14.606 20 10.144C20 5.645 16.418 2 12 2m-3.75 8A.75.75 0 0 1 9 9.25h6a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarMapPointRemoveBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMapPointRotateBoldIcon],svg[solar-map-point-rotate-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6 8.107C6 4.734 8.686 2 12 2s6 2.734 6 6.107c0 3.347-1.915 7.252-4.903 8.649a2.59 2.59 0 0 1-2.194 0C7.915 15.359 6 11.454 6 8.107M12 10a2 2 0 1 0 0-4a2 2 0 0 0 0 4m-8.373 4.534a.75.75 0 0 1-.122 1.054c-.573.454-.755.855-.755 1.162c0 .243.11.538.44.88c.334.345.856.695 1.566 1.017c1.254.569 2.988 1 4.994 1.187v-.459a.75.75 0 0 1 1.244-.564l1.5 1.312a.75.75 0 0 1 0 1.129l-1.5 1.313A.75.75 0 0 1 9.75 22v-.66c-2.185-.191-4.14-.659-5.614-1.327c-.814-.369-1.515-.815-2.024-1.34c-.511-.53-.862-1.179-.862-1.923c0-.95.567-1.738 1.324-2.338a.75.75 0 0 1 1.053.122m16.746 0a.75.75 0 0 1 1.053-.122c.757.6 1.324 1.388 1.324 2.338c0 1.378-1.168 2.41-2.547 3.101c-1.441.723-3.412 1.234-5.627 1.459a.75.75 0 0 1-.152-1.493c2.098-.212 3.877-.69 5.107-1.307c1.294-.648 1.719-1.303 1.719-1.76c0-.307-.182-.708-.755-1.162a.75.75 0 0 1-.122-1.054" clip-rule="evenodd"></svg:path>`,
})
export class SolarMapPointRotateBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMapPointSchoolBoldIcon],svg[solar-map-point-school-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.463 21.674a3.45 3.45 0 0 1-2.926 0C6.553 19.812 4 14.606 4 10.144C4 5.645 7.582 2 12 2s8 3.646 8 8.143c0 4.462-2.553 9.67-6.537 11.531M10.967 5.932a3.03 3.03 0 0 1 2.066 0l2.342.855c.541.198.875.68.875 1.213s-.334 1.015-.875 1.213l-.125.045V11.7c0 .673-.394 1.329-1.08 1.582c-.526.194-1.391.468-2.17.468s-1.644-.274-2.17-.468c-.686-.253-1.08-.909-1.08-1.582V9.258l-.125-.045C8.084 9.015 7.75 8.533 7.75 8s.334-1.015.875-1.213z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M11.481 7.34a1.53 1.53 0 0 1 1.038 0l1.804.66l-1.804.66a1.53 1.53 0 0 1-1.038 0L9.677 8z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M10.25 11.7V9.806l.717.262a3.03 3.03 0 0 0 2.066 0l.717-.262V11.7c0 .105-.057.159-.1.175c-.501.185-1.154.375-1.65.375s-1.149-.19-1.65-.375c-.043-.016-.1-.07-.1-.175"></svg:path>`,
})
export class SolarMapPointSchoolBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMapPointSearchBoldIcon],svg[solar-map-point-search-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 2c-4.418 0-8 3.646-8 8.143c0 4.462 2.553 9.67 6.537 11.531a3.45 3.45 0 0 0 2.926 0C17.447 19.812 20 14.606 20 10.144C20 5.645 16.418 2 12 2m-3.75 8a3.75 3.75 0 1 1 6.88 2.065l.902.907a.75.75 0 0 1-1.064 1.057l-.897-.902A3.75 3.75 0 0 1 8.25 10m1.5 0a2.25 2.25 0 1 1 4.5 0a2.25 2.25 0 0 1-4.5 0" clip-rule="evenodd"></svg:path>`,
})
export class SolarMapPointSearchBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMapPointWaveBoldIcon],svg[solar-map-point-wave-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22c5.523 0 10-2.014 10-4.5c0-1.266-1.163-2.41-3.035-3.229c-1.142 2.096-2.883 3.903-5.095 4.848a4.78 4.78 0 0 1-3.74 0c-2.212-.945-3.953-2.752-5.095-4.847C3.163 15.089 2 16.234 2 17.5C2 19.986 6.477 22 12 22"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M5 8.515C5 4.917 8.134 2 12 2s7 2.917 7 6.515c0 3.57-2.234 7.735-5.72 9.225a3.28 3.28 0 0 1-2.56 0C7.234 16.25 5 12.084 5 8.515M12 11a2 2 0 1 0 0-4a2 2 0 0 0 0 4" clip-rule="evenodd"></svg:path>`,
})
export class SolarMapPointWaveBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMaskHapplyBoldIcon],svg[solar-mask-happly-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M21 11.901V6.43c0-2.269 0-3.404-.707-4.024s-1.788-.434-3.95-.061l-1.055.182c-1.64.283-2.46.425-3.288.425s-1.648-.142-3.288-.425l-1.054-.182c-2.162-.373-3.243-.56-3.95.06S3 4.16 3 6.43v5.472c0 5.69 4.239 8.45 6.899 9.622c.721.318 1.082.477 2.101.477c1.02 0 1.38-.159 2.101-.477C16.761 20.351 21 17.59 21 11.901M7.17 9.141c.124-.257.587-.607 1.33-.607s1.206.35 1.33.606a.74.74 0 0 0 1.005.348a.79.79 0 0 0 .336-1.043C10.712 7.494 9.603 6.98 8.5 6.98s-2.212.515-2.67 1.466a.79.79 0 0 0 .335 1.043a.74.74 0 0 0 1.006-.348m8.33-.607c-.743 0-1.206.35-1.33.606a.74.74 0 0 1-1.005.348a.79.79 0 0 1-.336-1.043c.459-.951 1.567-1.466 2.671-1.466s2.212.515 2.67 1.466a.79.79 0 0 1-.335 1.043a.74.74 0 0 1-1.006-.348c-.123-.256-.586-.606-1.329-.606M7.99 14.542a.804.804 0 0 1-.032-1.104a.75.75 0 0 1 1.067-.022l.102.079c.101.071.268.176.507.285c.475.216 1.247.453 2.367.453s1.892-.237 2.367-.453c.239-.109.406-.214.506-.285a2 2 0 0 0 .117-.091l.001-.001a.73.73 0 0 1 1.052.035a.797.797 0 0 1-.026 1.098l-.001.002h-.001l-.003.004l-.008.007l-.02.019l-.06.052a3 3 0 0 1-.202.156a4.6 4.6 0 0 1-.751.427c-.663.302-1.64.584-2.971.584c-1.33 0-2.308-.282-2.97-.584a4.6 4.6 0 0 1-.752-.427a3 3 0 0 1-.288-.233z" clip-rule="evenodd"></svg:path>`,
})
export class SolarMaskHapplyBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMaskSadBoldIcon],svg[solar-mask-sad-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M21 11.406V6.208c0-2.156 0-3.234-.707-3.824s-1.788-.412-3.95-.057l-1.055.173c-1.64.269-2.46.403-3.288.403S10.352 2.77 8.712 2.5l-1.054-.173c-2.162-.355-3.243-.532-3.95.057S3 4.052 3 6.208v5.198c0 5.405 4.239 8.027 6.899 9.14C10.62 20.85 10.98 21 12 21s1.38-.151 2.101-.453C16.761 19.433 21 16.81 21 11.407M7.996 13.812a.745.745 0 0 0-.04 1.056a.76.76 0 0 0 1.054.033l.005-.005l.01-.007a1 1 0 0 1 .101-.075c.101-.068.268-.168.507-.271c.475-.206 1.247-.43 2.367-.43s1.892.224 2.367.43c.239.103.406.203.506.271q.075.052.103.075l.01.008l.005.004c.3.274.769.26 1.052-.033a.73.73 0 0 0-.026-1.043l-.001-.002h-.001l-.003-.004l-.008-.007l-.02-.017l-.06-.05a3 3 0 0 0-.202-.148a4.6 4.6 0 0 0-.751-.406c-.663-.287-1.64-.554-2.971-.554c-1.33 0-2.308.268-2.97.554c-.33.143-.58.289-.752.406a3 3 0 0 0-.262.198zM8.5 8.208c-.743 0-1.205.333-1.329.576a.756.756 0 0 1-1.006.33a.733.733 0 0 1-.336-.99C6.288 7.22 7.397 6.73 8.5 6.73c1.104 0 2.212.49 2.671 1.393a.733.733 0 0 1-.336.99a.756.756 0 0 1-1.006-.33c-.123-.243-.586-.576-1.329-.576m7 0c-.743 0-1.206.333-1.329.576a.756.756 0 0 1-1.006.33a.733.733 0 0 1-.336-.99c.459-.904 1.568-1.393 2.671-1.393c1.104 0 2.212.49 2.671 1.393a.733.733 0 0 1-.336.99a.756.756 0 0 1-1.006-.33c-.123-.243-.586-.576-1.329-.576" clip-rule="evenodd"></svg:path>`,
})
export class SolarMaskSadBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMasksBoldIcon],svg[solar-masks-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21.537 9.136l-.846 3.297c-.43 1.676-1.306 2.855-2.336 3.685c.219-1.144.214-2.418-.144-3.814l-.864-3.37l-.15-.584a.9.9 0 0 1 .599-.044c.378.101.608.406.637.702a.75.75 0 1 0 1.493-.145c-.091-.942-.783-1.749-1.742-2.006a2.4 2.4 0 0 0-1.418.05l-.017-.044c-.224-.596-.552-1.229-1.171-1.693a3.5 3.5 0 0 0-1.13-.562c-.759-.215-1.463-.076-2.064.124c-.558.185-1.21.49-1.924.825l-.072.034c-1.185.555-1.659.773-2.144.928q-.22.07-.446.127l.327-1.267c.44-1.719.661-2.578 1.236-3.01c.193-.145.41-.252.638-.317c.684-.194 1.461.17 3.015.897c1.15.54 1.726.809 2.326 1q.314.099.632.176c.612.149 1.239.216 2.493.351c1.694.182 2.54.273 3.04.798c.167.177.303.383.4.609c.292.675.072 1.534-.368 3.253"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="m16.758 12.677l-.845-3.298c-.44-1.719-.66-2.578-1.236-3.01a2 2 0 0 0-.638-.317c-.684-.194-1.46.17-3.015.897c-1.15.54-1.726.809-2.326 1a10 10 0 0 1-.632.176c-.611.149-1.238.216-2.493.351c-1.694.182-2.54.273-3.04.798a2.1 2.1 0 0 0-.4.609c-.292.675-.072 1.534.369 3.253l.845 3.297c.993 3.876 4.296 5.096 6.516 5.473c.677.115 1.016.172 2.044-.116s1.294-.514 1.825-.968c1.742-1.487 4.02-4.27 3.026-8.145m-10.753.691c.029-.296.26-.6.638-.702c.379-.102.73.047.903.29a.75.75 0 0 0 1.22-.873c-.55-.77-1.552-1.123-2.511-.866s-1.651 1.064-1.743 2.006a.75.75 0 0 0 1.493.145m5.796-1.553c.029-.296.26-.6.638-.702c.379-.102.73.047.903.289a.75.75 0 1 0 1.22-.872c-.55-.77-1.552-1.123-2.511-.866s-1.651 1.063-1.743 2.006a.75.75 0 0 0 1.493.145m1.846 3.814a.75.75 0 0 1-.885 1.211l-.01-.006a2 2 0 0 0-.485-.2c-.36-.098-.929-.163-1.685.04c-.756.202-1.216.543-1.48.808a2 2 0 0 0-.32.416l-.005.01a.75.75 0 0 1-1.372-.607l.688.298c-.688-.298-.687-.3-.687-.3v-.001l.002-.004l.004-.009l.01-.022l.033-.064q.04-.078.115-.196c.1-.156.252-.36.468-.578c.437-.44 1.125-.924 2.156-1.2c1.031-.277 1.87-.2 2.467-.038c.296.08.53.18.694.266a3 3 0 0 1 .258.151l.02.015l.008.005l.003.003h.002z" clip-rule="evenodd"></svg:path>`,
})
export class SolarMasksBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMaximizeBoldIcon],svg[solar-maximize-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.143 1.25a.75.75 0 1 0 0 1.5h4.046l-5.72 5.72a.75.75 0 0 0 1.061 1.06l5.72-5.72v4.047a.75.75 0 0 0 1.5 0V2a.75.75 0 0 0-.75-.75zm-8.286 21.5a.75.75 0 0 0 0-1.5H3.811l5.72-5.72a.75.75 0 1 0-1.061-1.06l-5.72 5.72v-4.047a.75.75 0 1 0-1.5 0V22c0 .414.336.75.75.75z"></svg:path>`,
})
export class SolarMaximizeBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMaximizeSquare2BoldIcon],svg[solar-maximize-square-2-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12m12-4.25a.75.75 0 0 1 0-1.5h3a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0V8.81l-2.22 2.22a.75.75 0 1 1-1.06-1.06l2.22-2.22zm-2.97 5.22a.75.75 0 0 1 0 1.06l-2.22 2.22H10a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75v-3a.75.75 0 0 1 1.5 0v1.19l2.22-2.22a.75.75 0 0 1 1.06 0M10.75 7a.75.75 0 0 1-.75.75H8.81l2.22 2.22a.75.75 0 1 1-1.06 1.06L7.75 8.81V10a.75.75 0 0 1-1.5 0V7A.75.75 0 0 1 7 6.25h3a.75.75 0 0 1 .75.75m2.22 7.03a.75.75 0 1 1 1.06-1.06l2.22 2.22V14a.75.75 0 0 1 1.5 0v3a.75.75 0 0 1-.75.75h-3a.75.75 0 0 1 0-1.5h1.19z" clip-rule="evenodd"></svg:path>`,
})
export class SolarMaximizeSquare2BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMaximizeSquare3BoldIcon],svg[solar-maximize-square-3-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 18c0-1.886 0-2.828.586-3.414S4.114 14 6 14s2.828 0 3.414.586S10 16.114 10 18s0 2.828-.586 3.414S7.886 22 6 22s-2.828 0-3.414-.586S2 19.886 2 18"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M3.464 3.464C2 4.93 2 7.286 2 12v1.138c.509-.333 1.069-.48 1.606-.551c.645-.087 1.439-.087 2.305-.087h.179c.865 0 1.659 0 2.304.087c.711.095 1.463.32 2.08.938c.619.618.844 1.37.94 2.08c.086.646.086 1.44.086 2.305v.18c0 .865 0 1.659-.087 2.304c-.072.537-.218 1.097-.55 1.605L12 22c4.714 0 7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464M13.25 6.25a.75.75 0 0 0 0 1.5h1.94l-3.72 3.72a.75.75 0 1 0 1.06 1.06l3.72-3.72v1.94a.75.75 0 0 0 1.5 0V7a.75.75 0 0 0-.75-.75z" clip-rule="evenodd"></svg:path>`,
})
export class SolarMaximizeSquare3BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMaximizeSquareBoldIcon],svg[solar-maximize-square-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12m10.5-5a.75.75 0 0 1 .75-.75H17a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V8.81l-7.44 7.44h1.94a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75v-3.75a.75.75 0 0 1 1.5 0v1.94l7.44-7.44h-1.94A.75.75 0 0 1 12.5 7" clip-rule="evenodd"></svg:path>`,
})
export class SolarMaximizeSquareBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMaximizeSquareMinimalisticBoldIcon],svg[solar-maximize-square-minimalistic-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464M13.25 7c0 .414.336.75.75.75h1.19l-2.22 2.22a.75.75 0 1 0 1.06 1.06l2.22-2.22V10a.75.75 0 0 0 1.5 0V7a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75m-2.22 7.03a.75.75 0 1 0-1.06-1.06l-2.22 2.22V14a.75.75 0 0 0-1.5 0v3c0 .414.336.75.75.75h3a.75.75 0 0 0 0-1.5H8.81z" clip-rule="evenodd"></svg:path>`,
})
export class SolarMaximizeSquareMinimalisticBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMedalRibbonBoldIcon],svg[solar-medal-ribbon-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 9A7 7 0 1 1 5 9a7 7 0 0 1 14 0"></svg:path><svg:path fill="currentColor" d="m7.093 15.941l-.379 1.382c-.628 2.292-.942 3.438-.523 4.065c.147.22.344.396.573.513c.652.332 1.66-.193 3.675-1.243c.67-.35 1.006-.524 1.362-.562a2 2 0 0 1 .398 0c.356.038.691.213 1.362.562c2.015 1.05 3.023 1.575 3.675 1.243c.229-.117.426-.293.573-.513c.42-.627.105-1.773-.523-4.065l-.379-1.382A8.46 8.46 0 0 1 12 17.5a8.46 8.46 0 0 1-4.907-1.559"></svg:path>`,
})
export class SolarMedalRibbonBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMedalRibbonStarBoldIcon],svg[solar-medal-ribbon-star-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 16a7 7 0 1 0 0-14a7 7 0 0 0 0 14m0-10c-.284 0-.474.34-.854 1.023l-.098.176c-.108.194-.162.29-.246.354c-.085.064-.19.088-.4.135l-.19.044c-.738.167-1.107.25-1.195.532s.164.577.667 1.165l.13.152c.143.167.215.25.247.354s.021.215 0 .438l-.02.203c-.076.785-.114 1.178.115 1.352c.23.174.576.015 1.267-.303l.178-.082c.197-.09.295-.135.399-.135s.202.045.399.135l.178.082c.691.319 1.037.477 1.267.303s.191-.567.115-1.352l-.02-.203c-.021-.223-.032-.334 0-.438s.104-.187.247-.354l.13-.152c.503-.588.755-.882.667-1.165c-.088-.282-.457-.365-1.195-.532l-.19-.044c-.21-.047-.315-.07-.4-.135c-.084-.064-.138-.16-.246-.354l-.098-.176C12.474 6.34 12.284 6 12 6" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="m7.093 15.941l-.379 1.382c-.628 2.292-.942 3.438-.523 4.065c.147.22.344.396.573.513c.652.332 1.66-.193 3.675-1.243c.67-.35 1.006-.524 1.362-.562a2 2 0 0 1 .398 0c.356.038.691.213 1.362.562c2.015 1.05 3.023 1.575 3.675 1.243c.229-.117.426-.293.573-.513c.42-.627.105-1.773-.523-4.065l-.379-1.382A8.46 8.46 0 0 1 12 17.5a8.46 8.46 0 0 1-4.907-1.559"></svg:path>`,
})
export class SolarMedalRibbonStarBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMedalRibbonsStarBoldIcon],svg[solar-medal-ribbons-star-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 16a7 7 0 1 0 0-14a7 7 0 0 0 0 14m0-10c-.284 0-.474.34-.854 1.023l-.098.176c-.108.194-.162.29-.246.354c-.085.064-.19.088-.4.135l-.19.044c-.738.167-1.107.25-1.195.532s.164.577.667 1.165l.13.152c.143.167.215.25.247.354s.021.215 0 .438l-.02.203c-.076.785-.114 1.178.115 1.352c.23.174.576.015 1.267-.303l.178-.082c.197-.09.295-.135.399-.135s.202.045.399.135l.178.082c.691.319 1.037.477 1.267.303s.191-.567.115-1.352l-.02-.203c-.021-.223-.032-.334 0-.438s.104-.187.247-.354l.13-.152c.503-.588.755-.882.667-1.165c-.088-.282-.457-.365-1.195-.532l-.19-.044c-.21-.047-.315-.07-.4-.135c-.084-.064-.138-.16-.246-.354l-.098-.176C12.474 6.34 12.284 6 12 6" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M4.495 12.995L2.992 14.55c-.54.56-.81.839-.904 1.076c-.213.54-.03 1.138.433 1.422c.204.124.57.163 1.305.24c.414.044.622.066.795.133c.389.149.69.462.835.864c.064.18.085.394.127.823c.075.76.113 1.14.233 1.351c.274.48.853.669 1.374.448c.228-.096.498-.376 1.039-.935l2.482-2.57a8.5 8.5 0 0 1-6.216-4.408m8.795 4.409l2.482 2.57c.54.56.81.839 1.038.936c.521.22 1.1.031 1.374-.449c.12-.21.157-.59.232-1.35c.043-.43.064-.644.128-.824c.144-.402.446-.715.835-.864c.173-.067.38-.088.795-.132c.734-.078 1.101-.117 1.305-.241c.463-.284.646-.883.433-1.422c-.094-.237-.364-.517-.904-1.076l-1.503-1.556a8.5 8.5 0 0 1-6.216 4.408"></svg:path>`,
})
export class SolarMedalRibbonsStarBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMedalStarBoldIcon],svg[solar-medal-star-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.436 5.783a3 3 0 0 0-2.872 0L5.769 8.397a3 3 0 0 0-1.563 2.634v4.938a3 3 0 0 0 1.563 2.634l4.795 2.614a3 3 0 0 0 2.872 0l4.794-2.614a3 3 0 0 0 1.564-2.634V11.03a3 3 0 0 0-1.564-2.634zM12 10.5c-.284 0-.474.34-.854 1.023l-.098.176c-.108.194-.162.29-.246.354c-.085.064-.19.088-.4.135l-.19.044c-.738.167-1.107.25-1.195.532s.164.577.667 1.165l.13.152c.143.167.215.25.247.354s.021.215 0 .438l-.02.203c-.076.785-.114 1.178.115 1.352c.23.174.576.015 1.267-.303l.178-.082c.197-.09.295-.135.399-.135s.202.045.399.135l.178.082c.691.319 1.037.477 1.267.303s.191-.567.115-1.352l-.02-.203c-.021-.223-.032-.334 0-.438s.104-.187.247-.354l.13-.152c.503-.588.755-.882.667-1.165c-.088-.282-.457-.365-1.195-.532l-.19-.044c-.21-.047-.315-.07-.4-.135c-.084-.064-.138-.16-.246-.354l-.098-.176c-.38-.682-.57-1.023-.854-1.023" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M11 2h2c1.886 0 2.828 0 3.414.586S17 4.114 17 6v.018l-2.846-1.552a4.5 4.5 0 0 0-4.308 0L7 6.018V6c0-1.886 0-2.828.586-3.414S9.114 2 11 2"></svg:path>`,
})
export class SolarMedalStarBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMedalStarCircleBoldIcon],svg[solar-medal-star-circle-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 22a8 8 0 1 0 0-16a8 8 0 0 0 0 16m0-11c-.284 0-.474.34-.854 1.023l-.098.176c-.108.194-.162.29-.246.354c-.085.064-.19.088-.4.135l-.19.044c-.738.167-1.107.25-1.195.532s.164.577.667 1.165l.13.152c.143.167.215.25.247.354s.021.215 0 .438l-.02.203c-.076.785-.114 1.178.115 1.352c.23.174.576.015 1.267-.303l.178-.082c.197-.09.295-.136.399-.136s.202.046.399.136l.178.082c.691.319 1.037.477 1.267.303s.191-.567.115-1.352l-.02-.203c-.021-.223-.032-.334 0-.438s.104-.187.247-.354l.13-.152c.503-.588.755-.882.667-1.165c-.088-.282-.457-.365-1.195-.532l-.19-.044c-.21-.047-.315-.07-.4-.135c-.084-.064-.138-.16-.246-.354l-.098-.176C12.474 11.34 12.284 11 12 11" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M11 2h2c1.886 0 2.828 0 3.414.586c.578.577.586 1.502.586 3.335A9.46 9.46 0 0 0 12 4.5a9.46 9.46 0 0 0-5 1.42c0-1.832.008-2.757.586-3.334C8.172 2 9.114 2 11 2"></svg:path>`,
})
export class SolarMedalStarCircleBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMedalStarSquareBoldIcon],svg[solar-medal-star-square-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10 6h4c2.828 0 4.243 0 5.121.879C20 7.757 20 9.172 20 12v1.056c0 2.405 0 3.608-.597 4.575c-.598.966-1.674 1.504-3.825 2.58c-1.756.878-2.634 1.317-3.578 1.317s-1.822-.439-3.578-1.317c-2.151-1.076-3.227-1.614-3.825-2.58C4 16.664 4 15.46 4 13.056V12c0-2.828 0-4.243.879-5.121C5.757 6 7.172 6 10 6m2 4c-.284 0-.474.34-.854 1.023l-.098.176c-.108.194-.162.29-.246.354c-.085.064-.19.088-.4.135l-.19.044c-.738.167-1.107.25-1.195.532s.164.577.667 1.165l.13.152c.143.167.215.25.247.354s.021.215 0 .438l-.02.203c-.076.785-.114 1.178.115 1.352c.23.174.576.015 1.267-.303l.178-.082c.197-.09.295-.135.399-.135s.202.045.399.135l.178.082c.691.319 1.037.477 1.267.303s.191-.567.115-1.352l-.02-.203c-.021-.223-.032-.334 0-.438s.104-.187.247-.354l.13-.152c.503-.588.755-.882.667-1.165c-.088-.282-.457-.365-1.195-.532l-.19-.044c-.21-.047-.315-.07-.4-.135c-.084-.064-.138-.16-.246-.354l-.098-.176C12.474 10.34 12.284 10 12 10" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M11 2h2c1.886 0 2.828 0 3.414.586c.414.414.535 1.006.571 1.983c-.82-.07-1.791-.07-2.886-.069H9.9c-1.095 0-2.065 0-2.886.069c.035-.977.157-1.57.57-1.983C8.172 2 9.116 2 11 2"></svg:path>`,
})
export class SolarMedalStarSquareBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMedicalKitBoldIcon],svg[solar-medical-kit-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M12 11.75a.75.75 0 0 1 .75.75v.75h.75a.75.75 0 0 1 0 1.5h-.75v.75a.75.75 0 0 1-1.5 0v-.75h-.75a.75.75 0 0 1 0-1.5h.75v-.75a.75.75 0 0 1 .75-.75"></svg:path><svg:path d="M11.948 1.25c-.899 0-1.648 0-2.242.08c-.628.084-1.195.27-1.65.725c-.456.456-.642 1.023-.726 1.65c-.08.595-.08 1.345-.08 2.243v.078c-2.021.066-3.235.302-4.078 1.146C2 8.343 2 10.229 2 14s0 5.657 1.172 6.828S6.229 22 10 22h4c3.771 0 5.657 0 6.828-1.172S22 17.771 22 14s0-5.657-1.172-6.828c-.843-.844-2.057-1.08-4.078-1.146v-.078c0-.898 0-1.648-.08-2.242c-.084-.628-.27-1.195-.726-1.65c-.455-.456-1.022-.642-1.65-.726c-.594-.08-1.344-.08-2.242-.08zm3.302 4.752V6c0-.964-.002-1.612-.066-2.095c-.063-.461-.17-.659-.3-.789s-.328-.237-.79-.3c-.482-.064-1.13-.066-2.094-.066s-1.612.002-2.095.067c-.461.062-.659.169-.789.3s-.237.327-.3.788C8.753 4.388 8.75 5.036 8.75 6v.002Q9.337 6 10 6h4q.662 0 1.25.002M16 14a4 4 0 1 1-8 0a4 4 0 0 1 8 0"></svg:path></svg:g>`,
})
export class SolarMedicalKitBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMeditationBoldIcon],svg[solar-meditation-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.5 4.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12.869 9.822a5.3 5.3 0 0 0-1.738 0c-2.507.423-4.38 2.624-4.38 5.198c0 .564-.317 1.085-.824 1.341L3.338 17.67a.75.75 0 0 1-.676-1.338l2.587-1.308l.001-.003c0-3.306 2.402-6.133 5.632-6.677a6.8 6.8 0 0 1 2.236 0c3.23.544 5.632 3.371 5.632 6.677v.002l2.588 1.309a.75.75 0 1 1-.676 1.338l-2.589-1.308a1.5 1.5 0 0 1-.823-1.341c0-2.574-1.873-4.775-4.381-5.198M9.95 15.4a.75.75 0 0 1 .15 1.05l-1.046 1.395l-.071.093a2.75 2.75 0 0 1-1.421.944l-.113.029l-.008.002l-1.485.371a1.59 1.59 0 0 0-1.206 1.545c0 .232.189.421.421.421h1.556c.617 0 .865-.001 1.103-.03a4.25 4.25 0 0 0 1.64-.546c.206-.12.405-.268.898-.638L12.55 18.4a.75.75 0 0 1 .9 1.2l-.904.678l1.257.472c.627.235.88.328 1.137.389q.207.048.42.076c.261.034.53.035 1.2.035h2.269a.42.42 0 0 0 .421-.421c0-.73-.497-1.368-1.206-1.545l-1.493-.373l-.112-.03a2.75 2.75 0 0 1-1.422-.943l-.07-.093L13.9 16.45a.75.75 0 1 1 1.2-.9l1.042 1.389l.052.069a1.25 1.25 0 0 0 .729.45l1.485.37a3.09 3.09 0 0 1 2.342 3c0 1.062-.86 1.922-1.921 1.922h-2.321c-.602 0-.973 0-1.342-.048a6 6 0 0 1-.568-.103c-.362-.085-.71-.215-1.273-.426l-2.203-.826c-.381.285-.632.47-.9.624a5.75 5.75 0 0 1-2.217.74c-.335.04-.676.039-1.23.039H5.172a1.92 1.92 0 0 1-1.92-1.921a3.09 3.09 0 0 1 2.341-3l1.485-.371l.084-.022a1.25 1.25 0 0 0 .697-.497L8.9 15.55a.75.75 0 0 1 1.05-.15" clip-rule="evenodd"></svg:path>`,
})
export class SolarMeditationBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMeditationRoundBoldIcon],svg[solar-meditation-round-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.5 4.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12 9.77a6 6 0 0 0-.86.052l-.892.15c-2.013.339-3.498 2.102-3.498 4.178a3.25 3.25 0 0 1-1.43 2.696l-.1.069a3.4 3.4 0 0 1-.823.406l-1.157.39a.75.75 0 0 1-.48-1.422l1.159-.39q.246-.083.462-.228l.102-.069a1.75 1.75 0 0 0 .767-1.452c0-2.797 2.003-5.195 4.748-5.657l.89-.15A7 7 0 0 1 12 8.271c.387 0 .807.02 1.112.072l.89.15c2.746.462 4.748 2.86 4.748 5.657c0 .586.29 1.13.768 1.452l.101.069q.217.145.463.228l1.158.39a.75.75 0 0 1-.48 1.422l-1.157-.39a3.4 3.4 0 0 1-.822-.406l-.101-.069a3.25 3.25 0 0 1-1.43-2.696c0-2.076-1.485-3.839-3.497-4.178l-.892-.15a6 6 0 0 0-.86-.051m-3.1 5.78a.75.75 0 1 1 1.2.9l-.924 1.233l-.022.029a5 5 0 0 1-.34.42a2.75 2.75 0 0 1-1.007.67c-.155.058-.316.098-.52.15l-.035.008l-1.794.449a.935.935 0 0 0 .227 1.841h.684c1.546 0 3.05-.501 4.287-1.429L12.55 18.4a.75.75 0 1 1 .9 1.2l-.904.678l.491.185c.534.2.775.29 1.017.366a9.3 9.3 0 0 0 2.243.407c.253.014.51.014 1.08.014h.939a.935.935 0 0 0 .226-1.841l-1.473-.369l-.082-.02c-.476-.119-.851-.212-1.186-.406a3 3 0 0 1-.29-.192c-.308-.234-.54-.543-.833-.936l-.051-.067l-.727-.969a.75.75 0 1 1 1.2-.9l.727.969c.368.491.471.618.591.709q.063.046.132.087c.13.075.287.121.883.27l1.473.368a2.435 2.435 0 0 1-.59 4.797h-.963c-.539 0-.84 0-1.14-.017a10.8 10.8 0 0 1-2.607-.473c-.286-.09-.568-.195-1.072-.384l-1.432-.537a8.65 8.65 0 0 1-4.733 1.411h-.684a2.435 2.435 0 0 1-.59-4.797l1.793-.448c.255-.064.324-.082.384-.105c.173-.066.33-.17.458-.304c.044-.047.088-.102.246-.313z" clip-rule="evenodd"></svg:path>`,
})
export class SolarMeditationRoundBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMenBoldIcon],svg[solar-men-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 1.25a.75.75 0 1 0 0 1.5h3.19l-5.088 5.088a8 8 0 1 0 1.06 1.06l5.088-5.087V7a.75.75 0 1 0 1.5 0V2a.75.75 0 0 0-.75-.75z"></svg:path>`,
})
export class SolarMenBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMentionCircleBoldIcon],svg[solar-mention-circle-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 10.35a1.65 1.65 0 1 1 0 3.3a1.65 1.65 0 0 1 0-3.3"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2M6.75 12a5.25 5.25 0 1 1 10.185 1.797a.8.8 0 0 1-.217.304l-.08.075a.887.887 0 0 1-1.488-.652V12a3.15 3.15 0 1 0-1.277 2.533a2.386 2.386 0 0 0 3.782.745l.08-.074c.25-.23.476-.528.609-.893A6.75 6.75 0 1 0 12 18.75a.75.75 0 0 0 0-1.501A5.25 5.25 0 0 1 6.75 12" clip-rule="evenodd"></svg:path>`,
})
export class SolarMentionCircleBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMentionSquareBoldIcon],svg[solar-mention-square-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 10.35a1.65 1.65 0 1 1 0 3.3a1.65 1.65 0 0 1 0-3.3"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464M6.75 12a5.25 5.25 0 1 1 10.185 1.797a.8.8 0 0 1-.217.304l-.08.075a.887.887 0 0 1-1.488-.652V12a3.15 3.15 0 1 0-1.277 2.533a2.386 2.386 0 0 0 3.782.745l.08-.074c.25-.23.476-.528.609-.893A6.75 6.75 0 1 0 12 18.75a.75.75 0 0 0 0-1.501A5.25 5.25 0 0 1 6.75 12" clip-rule="evenodd"></svg:path>`,
})
export class SolarMentionSquareBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMenuDotsBoldIcon],svg[solar-menu-dots-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 12a2 2 0 1 1-4 0a2 2 0 0 1 4 0m7 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0m7 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0"></svg:path>`,
})
export class SolarMenuDotsBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMenuDotsCircleBoldIcon],svg[solar-menu-dots-circle-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10M8 13a1 1 0 1 0 0-2a1 1 0 0 0 0 2m4 0a1 1 0 1 0 0-2a1 1 0 0 0 0 2m4 0a1 1 0 1 0 0-2a1 1 0 0 0 0 2" clip-rule="evenodd"></svg:path>`,
})
export class SolarMenuDotsCircleBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMenuDotsSquareBoldIcon],svg[solar-menu-dots-square-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464M12 13a1 1 0 1 0 0-2a1 1 0 0 0 0 2m-3-1a1 1 0 1 1-2 0a1 1 0 0 1 2 0m7 1a1 1 0 1 0 0-2a1 1 0 0 0 0 2" clip-rule="evenodd"></svg:path>`,
})
export class SolarMenuDotsSquareBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMicrophone2BoldIcon],svg[solar-microphone-2-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.75 7.75A.75.75 0 0 0 9 7H6.298a5.751 5.751 0 0 1 11.404 0H13.5a.75.75 0 0 0 0 1.5h4.25V10H13.5a.75.75 0 0 0 0 1.5h4.201a5.751 5.751 0 0 1-11.403 0H9A.75.75 0 0 0 9 10H6.25V8.5H9a.75.75 0 0 0 .75-.75"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M4 9a.75.75 0 0 1 .75.75v1a7.25 7.25 0 1 0 14.5 0v-1a.75.75 0 0 1 1.5 0v1a8.75 8.75 0 0 1-8 8.718v2.282a.75.75 0 0 1-1.5 0v-2.282a8.75 8.75 0 0 1-8-8.718v-1A.75.75 0 0 1 4 9" clip-rule="evenodd"></svg:path>`,
})
export class SolarMicrophone2BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMicrophone3BoldIcon],svg[solar-microphone-3-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M4 9a.75.75 0 0 1 .75.75v1a7.25 7.25 0 1 0 14.5 0v-1a.75.75 0 0 1 1.5 0v1a8.75 8.75 0 0 1-8 8.718v2.282a.75.75 0 0 1-1.5 0v-2.282a8.75 8.75 0 0 1-8-8.718v-1A.75.75 0 0 1 4 9"></svg:path><svg:path d="M12 2a5.75 5.75 0 0 0-5.75 5.75v3a5.75 5.75 0 0 0 11.5 0v-3A5.75 5.75 0 0 0 12 2m2 9.5a.75.75 0 0 0 0-1.5h-4a.75.75 0 0 0 0 1.5zm-.25-3.75a.75.75 0 0 1-.75.75h-2A.75.75 0 0 1 11 7h2a.75.75 0 0 1 .75.75"></svg:path></svg:g>`,
})
export class SolarMicrophone3BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMicrophoneBoldIcon],svg[solar-microphone-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2a5.75 5.75 0 0 0-5.75 5.75v3a5.75 5.75 0 0 0 11.452.75H13a.75.75 0 0 1 0-1.5h4.75V8.5H13A.75.75 0 0 1 13 7h4.701A5.75 5.75 0 0 0 12 2"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M4 9a.75.75 0 0 1 .75.75v1a7.25 7.25 0 1 0 14.5 0v-1a.75.75 0 0 1 1.5 0v1a8.75 8.75 0 0 1-8 8.718v2.282a.75.75 0 0 1-1.5 0v-2.282a8.75 8.75 0 0 1-8-8.718v-1A.75.75 0 0 1 4 9" clip-rule="evenodd"></svg:path>`,
})
export class SolarMicrophoneBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMicrophoneLargeBoldIcon],svg[solar-microphone-large-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M3.692 10.372c.383 0 .693.313.693.698v1.86c0 4.239 3.41 7.675 7.615 7.675c4.206 0 7.615-3.436 7.615-7.675v-1.86c0-.386.31-.698.693-.698s.692.313.692.698v1.86c0 5.01-4.03 9.07-9 9.07s-9-4.06-9-9.07v-1.86c0-.386.31-.698.692-.698"></svg:path><svg:path d="M12 2C8.559 2 5.77 4.811 5.77 8.28v4.65c0 3.468 2.789 6.28 6.23 6.28s6.23-2.812 6.23-6.28V8.28C18.23 4.81 15.442 2 12 2M9.678 7.39a.7.7 0 0 1-.027-.986l.503.48l-.502-.48v-.001l.002-.002l.003-.003l.007-.008l.06-.055a2 2 0 0 1 .128-.099a2.3 2.3 0 0 1 .437-.232c.379-.154.93-.283 1.711-.283s1.332.129 1.711.283c.19.077.332.16.437.232a1.5 1.5 0 0 1 .188.154l.007.008l.003.003l.002.002s.001.001-.492.471l.493-.47c.263.28.25.722-.027.987a.69.69 0 0 1-.951 0l-.007-.005a1 1 0 0 0-.172-.088C13 7.22 12.63 7.116 12 7.116s-1 .104-1.192.182a1 1 0 0 0-.172.088l-.007.005a.69.69 0 0 1-.95 0m0 2.791a.7.7 0 0 1-.027-.986l.503.48l-.502-.48v-.002l.002-.001l.003-.004l.007-.007l.06-.056a2 2 0 0 1 .128-.098a2.3 2.3 0 0 1 .437-.232c.379-.154.93-.283 1.711-.283s1.332.129 1.711.283c.19.077.332.16.437.232a1.5 1.5 0 0 1 .188.154l.007.007l.003.004l.002.001v.001s.001.001-.492.47l.493-.469c.263.28.25.722-.027.986a.69.69 0 0 1-.951 0l-.007-.004a1 1 0 0 0-.172-.088C13 10.01 12.63 9.907 12 9.907s-1 .104-1.192.182a1 1 0 0 0-.172.088l-.007.005a.69.69 0 0 1-.95 0"></svg:path></svg:g>`,
})
export class SolarMicrophoneLargeBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMinimalisticMagniferBoldIcon],svg[solar-minimalistic-magnifer-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.313 11.157a9.157 9.157 0 1 1-18.313 0a9.157 9.157 0 0 1 18.313 0"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M18.838 18.838a.723.723 0 0 1 1.023 0l1.927 1.928a.723.723 0 0 1-1.022 1.022l-1.928-1.927a.723.723 0 0 1 0-1.023" clip-rule="evenodd"></svg:path>`,
})
export class SolarMinimalisticMagniferBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMinimalisticMagniferBugBoldIcon],svg[solar-minimalistic-magnifer-bug-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M18.838 18.838a.723.723 0 0 1 1.023 0l1.927 1.928a.723.723 0 0 1-1.022 1.022l-1.928-1.927a.723.723 0 0 1 0-1.023m-9.981-6.891a2.13 2.13 0 0 0 1.429 2.01v-3.194H8.857zm4.164-2.605A2.14 2.14 0 0 0 11 7.921a2.14 2.14 0 0 0-2.02 1.421zm.122 1.421h-1.429v3.195a2.13 2.13 0 0 0 1.429-2.01z"></svg:path><svg:path d="M11.157 20.313a9.157 9.157 0 1 0 0-18.313a9.157 9.157 0 0 0 0 18.313M8.189 7.86A3.57 3.57 0 0 1 11 6.5c1.14 0 2.157.532 2.81 1.36l.68-.338a.716.716 0 0 1 .958.318a.71.71 0 0 1-.319.953l-.679.338q.12.442.121.922v.236h.715c.394 0 .714.319.714.711s-.32.71-.714.71h-.715v.237q-.002.48-.12.922l.678.338a.71.71 0 0 1 .32.953a.716.716 0 0 1-.959.318l-.68-.338A3.57 3.57 0 0 1 11 15.5a3.57 3.57 0 0 1-2.81-1.36l-.68.338a.716.716 0 0 1-.958-.318a.71.71 0 0 1 .319-.953l.679-.338a3.5 3.5 0 0 1-.121-.922v-.236h-.715A.71.71 0 0 1 6 11c0-.392.32-.71.714-.71h.715v-.237q.001-.48.12-.922l-.678-.338a.71.71 0 0 1-.32-.953a.716.716 0 0 1 .959-.318zm2.097 6.098a2.13 2.13 0 0 1-1.429-2.01v-1.185h1.429zM11 7.92a2.14 2.14 0 0 1 2.02 1.421H8.98A2.14 2.14 0 0 1 11 7.921m.714 2.842h1.429v1.184a2.13 2.13 0 0 1-1.429 2.01z"></svg:path></svg:g>`,
})
export class SolarMinimalisticMagniferBugBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMinimalisticMagniferZoomInBoldIcon],svg[solar-minimalistic-magnifer-zoom-in-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="solarMinimalisticMagniferZoomInBold0"><svg:g fill="none"><svg:path fill="#fff" d="M20.313 11.157a9.157 9.157 0 1 1-18.313 0a9.157 9.157 0 0 1 18.313 0"></svg:path><svg:path fill="#000" fill-rule="evenodd" d="M11.157 8.024c.399 0 .723.324.723.723v1.687h1.686a.723.723 0 0 1 0 1.446H11.88v1.686a.723.723 0 1 1-1.445 0V11.88H8.747a.723.723 0 1 1 0-1.445h1.687V8.747c0-.4.323-.723.723-.723" clip-rule="evenodd"></svg:path><svg:path fill="#fff" fill-rule="evenodd" d="M18.838 18.838a.723.723 0 0 1 1.023 0l1.927 1.928a.723.723 0 0 1-1.022 1.022l-1.928-1.927a.723.723 0 0 1 0-1.023" clip-rule="evenodd"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h24v24H0z" mask="url(#solarMinimalisticMagniferZoomInBold0)"></svg:path>`,
})
export class SolarMinimalisticMagniferZoomInBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMinimalisticMagniferZoomOutBoldIcon],svg[solar-minimalistic-magnifer-zoom-out-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="solarMinimalisticMagniferZoomOutBold0"><svg:g fill="none"><svg:path fill="#fff" d="M20.128 11.143c0 5.05-4.058 9.143-9.064 9.143S2 16.192 2 11.143S6.058 2 11.064 2s9.064 4.093 9.064 9.143"></svg:path><svg:path fill="#000" fill-rule="evenodd" d="M8.294 11.143a.76.76 0 0 1 .756-.762h4.028a.76.76 0 0 1 .756.762a.76.76 0 0 1-.756.762H9.05a.76.76 0 0 1-.756-.762" clip-rule="evenodd"></svg:path><svg:path fill="#fff" fill-rule="evenodd" d="M17.82 19.7a1.77 1.77 0 0 1 1.9-1.917c.189.016.414.084.643.154l.066.02l.06.018c.211.063.42.126.58.212a1.786 1.786 0 0 1 .638 2.55c-.1.151-.255.307-.41.464l-.045.044l-.044.045c-.156.157-.31.313-.46.414a1.754 1.754 0 0 1-2.528-.643a3.3 3.3 0 0 1-.21-.585l-.018-.06l-.02-.067c-.07-.232-.137-.459-.153-.648" clip-rule="evenodd"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h24v24H0z" mask="url(#solarMinimalisticMagniferZoomOutBold0)"></svg:path>`,
})
export class SolarMinimalisticMagniferZoomOutBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMinimizeBoldIcon],svg[solar-minimize-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.857 9.75a.75.75 0 1 0 0-1.5h-4.046l5.72-5.72a.75.75 0 0 0-1.061-1.06l-5.72 5.72V3.142a.75.75 0 0 0-1.5 0V9c0 .414.336.75.75.75zm-17.714 4.5a.75.75 0 0 0 0 1.5h4.046l-5.72 5.72a.75.75 0 1 0 1.061 1.06l5.72-5.72v4.047a.75.75 0 1 0 1.5 0V15a.75.75 0 0 0-.75-.75z"></svg:path>`,
})
export class SolarMinimizeBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMinimizeSquare2BoldIcon],svg[solar-minimize-square-2-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12m4.47 5.53a.75.75 0 0 1 0-1.06l2.22-2.22H7.5a.75.75 0 0 1 0-1.5h3a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0v-1.19l-2.22 2.22a.75.75 0 0 1-1.06 0m10.03-6.28a.75.75 0 0 0 0-1.5h-1.19l2.22-2.22a.75.75 0 0 0-1.06-1.06l-2.22 2.22V7.5a.75.75 0 0 0-1.5 0v3c0 .414.336.75.75.75zm-9.75-.75c0 .414.336.75.75.75h3a.75.75 0 0 0 .75-.75v-3a.75.75 0 0 0-1.5 0v1.19L7.53 6.47a.75.75 0 0 0-1.06 1.06l2.22 2.22H7.5a.75.75 0 0 0-.75.75m10.78 5.97a.75.75 0 1 1-1.06 1.06l-2.22-2.22v1.19a.75.75 0 0 1-1.5 0v-3a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5h-1.19z" clip-rule="evenodd"></svg:path>`,
})
export class SolarMinimizeSquare2BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMinimizeSquare3BoldIcon],svg[solar-minimize-square-3-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 18c0-1.886 0-2.828.586-3.414S4.114 14 6 14s2.828 0 3.414.586S10 16.114 10 18s0 2.828-.586 3.414S7.886 22 6 22s-2.828 0-3.414-.586S2 19.886 2 18"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M3.464 3.464C2 4.93 2 7.286 2 12v1.138c.509-.333 1.069-.48 1.606-.551c.645-.087 1.439-.087 2.305-.087h.179c.865 0 1.659 0 2.304.087c.711.095 1.463.32 2.08.938c.619.618.844 1.37.94 2.08c.086.646.086 1.44.086 2.305v.18c0 .865 0 1.659-.087 2.304c-.072.537-.218 1.097-.55 1.605L12 22c4.714 0 7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464M15.75 12.75a.75.75 0 0 0 0-1.5h-1.94l3.72-3.72a.75.75 0 0 0-1.06-1.06l-3.72 3.72V8.25a.75.75 0 0 0-1.5 0V12c0 .414.336.75.75.75z" clip-rule="evenodd"></svg:path>`,
})
export class SolarMinimizeSquare3BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMinimizeSquareBoldIcon],svg[solar-minimize-square-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.134 0 6.455 0 7.952.988L14.75 8.189V6.25a.75.75 0 0 0-1.5 0V10c0 .414.336.75.75.75h3.75a.75.75 0 0 0 0-1.5h-1.94l5.202-5.202C22 5.545 22 7.866 22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22c-4.134 0-6.455 0-7.952-.988l5.202-5.201v1.939a.75.75 0 0 0 1.5 0V14a.75.75 0 0 0-.75-.75H6.25a.75.75 0 0 0 0 1.5h1.94l-5.202 5.202C2 18.455 2 16.134 2 12"></svg:path>`,
})
export class SolarMinimizeSquareBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMinimizeSquareMinimalisticBoldIcon],svg[solar-minimize-square-minimalistic-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12m4.47 5.53a.75.75 0 0 1 0-1.06l2.22-2.22H7.5a.75.75 0 0 1 0-1.5h3a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0v-1.19l-2.22 2.22a.75.75 0 0 1-1.06 0m10.03-6.28a.75.75 0 0 0 0-1.5h-1.19l2.22-2.22a.75.75 0 0 0-1.06-1.06l-2.22 2.22V7.5a.75.75 0 0 0-1.5 0v3c0 .414.336.75.75.75z" clip-rule="evenodd"></svg:path>`,
})
export class SolarMinimizeSquareMinimalisticBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMinusCircleBoldIcon],svg[solar-minus-circle-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10m-6.25 0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1 0-1.5h6a.75.75 0 0 1 .75.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarMinusCircleBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMinusSquareBoldIcon],svg[solar-minus-square-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 22c-4.714 0-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22m3.75-10a.75.75 0 0 1-.75.75H9a.75.75 0 0 1 0-1.5h6a.75.75 0 0 1 .75.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarMinusSquareBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMirrorBoldIcon],svg[solar-mirror-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.636 22h12.728A3.636 3.636 0 0 0 22 18.364C22 17.61 21.39 17 20.636 17h-3.808a2 2 0 0 0-1.414.586l-.828.828a2 2 0 0 1-1.414.586h-2.344a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 7.172 17H3.364C2.61 17 2 17.61 2 18.364A3.636 3.636 0 0 0 5.636 22"></svg:path><svg:path fill="currentColor" d="M3 12a9 9 0 1 1 17.294 3.5h-3.466a3.5 3.5 0 0 0-2.474 1.025l-.829.829a.5.5 0 0 1-.353.146h-2.344a.5.5 0 0 1-.353-.146l-.829-.829A3.5 3.5 0 0 0 7.172 15.5H3.706A9 9 0 0 1 3 12"></svg:path>`,
})
export class SolarMirrorBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMirrorLeftBoldIcon],svg[solar-mirror-left-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.34 20.75a.75.75 0 0 1 .75-.75H15q.653 0 1.202-.003a.75.75 0 0 1 .013 1.5q-.562.004-1.213.003h-.911a.75.75 0 0 1-.75-.75m0-18a.75.75 0 0 1 .75-.75h.912q.65 0 1.213.003a.75.75 0 1 1-.013 1.5Q15.652 3.5 15 3.5h-.91a.75.75 0 0 1-.75-.75m5.031 17.945a.75.75 0 0 1 .494-.938c.32-.1.544-.235.726-.416s.316-.405.415-.726a.75.75 0 0 1 1.433.445c-.16.515-.408.962-.787 1.342s-.827.627-1.342.787a.75.75 0 0 1-.939-.494m0-17.89a.75.75 0 0 1 .939-.494c.515.16.962.408 1.342.787s.627.827.787 1.342a.75.75 0 1 1-1.433.445c-.1-.321-.234-.545-.415-.726a1.7 1.7 0 0 0-.726-.416a.75.75 0 0 1-.494-.938m2.62 13.904a.75.75 0 0 1-.744-.757q.004-.55.003-1.202v-1.364a.75.75 0 0 1 1.5 0v1.366q0 .651-.003 1.213a.75.75 0 0 1-.757.744m0-9.918a.75.75 0 0 1 .756.744q.004.561.003 1.213v1.366a.75.75 0 1 1-1.5 0V8.75q0-.653-.003-1.202a.75.75 0 0 1 .743-.757" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M3 10.75v2c0 3.771 0 5.657 1.172 6.828c1.092 1.093 3.676 1.167 7.078 1.172a.75.75 0 0 0 1.5 0v-18a.75.75 0 0 0-1.5 0c-3.402.005-5.986.079-7.078 1.172C3 5.093 3 6.979 3 10.75"></svg:path>`,
})
export class SolarMirrorLeftBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMirrorRightBoldIcon],svg[solar-mirror-right-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.66 2.75a.75.75 0 0 1-.75.75H10q-.653 0-1.202.003a.75.75 0 0 1-.013-1.5Q9.346 2 9.998 2h.911a.75.75 0 0 1 .75.75m0 18a.75.75 0 0 1-.75.75h-.912q-.652 0-1.213-.003a.75.75 0 0 1 .013-1.5Q9.348 20 10 20h.91a.75.75 0 0 1 .75.75M6.628 2.805a.75.75 0 0 1-.494.938c-.321.1-.545.235-.726.416s-.316.405-.416.726A.75.75 0 0 1 3.56 4.44c.16-.515.408-.962.787-1.342s.827-.627 1.342-.787a.75.75 0 0 1 .939.494m0 17.89a.75.75 0 0 1-.939.494a3.2 3.2 0 0 1-1.342-.787a3.2 3.2 0 0 1-.787-1.342a.75.75 0 1 1 1.432-.445c.1.321.235.545.416.726s.405.316.726.416a.75.75 0 0 1 .494.938M4.009 6.791a.75.75 0 0 1 .744.757q-.004.55-.003 1.202v1.364a.75.75 0 0 1-1.5 0V8.748q0-.652.003-1.213a.75.75 0 0 1 .757-.744m0 9.918a.75.75 0 0 1-.756-.744q-.004-.562-.003-1.213v-1.366a.75.75 0 0 1 1.5 0v1.364q0 .653.003 1.202a.75.75 0 0 1-.743.757" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M22 12.75v-2c0-3.771 0-5.657-1.172-6.828c-1.092-1.093-3.676-1.167-7.078-1.172a.75.75 0 0 0-1.5 0v18a.75.75 0 0 0 1.5 0c3.402-.005 5.986-.079 7.078-1.172C22 18.407 22 16.521 22 12.75"></svg:path>`,
})
export class SolarMirrorRightBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMoneyBagBoldIcon],svg[solar-money-bag-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.052 1.25h-.104c-.899 0-1.648 0-2.242.08c-.628.084-1.195.27-1.65.725c-.456.456-.642 1.023-.726 1.65c-.057.427-.074 1.446-.078 2.32c-2.022.067-3.237.303-4.08 1.147C2 8.343 2 10.229 2 14s0 5.657 1.172 6.828S6.229 22 10 22h4c3.771 0 5.657 0 6.828-1.172S22 17.771 22 14s0-5.657-1.172-6.828c-.843-.844-2.058-1.08-4.08-1.146c-.004-.875-.02-1.894-.078-2.32c-.084-.628-.27-1.195-.726-1.65c-.455-.456-1.022-.642-1.65-.726c-.594-.08-1.344-.08-2.242-.08m3.196 4.752c-.005-.847-.019-1.758-.064-2.097c-.063-.461-.17-.659-.3-.789s-.328-.237-.79-.3c-.482-.064-1.13-.066-2.094-.066s-1.612.002-2.095.067c-.461.062-.659.169-.789.3s-.237.327-.3.788c-.045.34-.06 1.25-.064 2.097Q9.34 5.999 10 6h4q.662 0 1.248.002M12 9.25a.75.75 0 0 1 .75.75v.01c1.089.274 2 1.133 2 2.323a.75.75 0 0 1-1.5 0c0-.384-.426-.916-1.25-.916s-1.25.532-1.25.916s.426.917 1.25.917c1.385 0 2.75.96 2.75 2.417c0 1.19-.911 2.048-2 2.323V18a.75.75 0 0 1-1.5 0v-.01c-1.089-.274-2-1.133-2-2.323a.75.75 0 0 1 1.5 0c0 .384.426.916 1.25.916s1.25-.532 1.25-.916s-.426-.917-1.25-.917c-1.385 0-2.75-.96-2.75-2.417c0-1.19.911-2.049 2-2.323V10a.75.75 0 0 1 .75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarMoneyBagBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMonitorBoldIcon],svg[solar-monitor-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 17c-2.828 0-4.243 0-5.121-.879c-.57-.569-.77-1.363-.84-2.621h19.923c-.07 1.258-.271 2.052-.84 2.621C20.241 17 18.827 17 16 17h-3.25v4H16a.75.75 0 0 1 0 1.5H8A.75.75 0 0 1 8 21h3.25v-4zm2-15h4c3.771 0 5.657 0 6.828 1.172S22 6.229 22 10v1q.002.827-.006 1.5H2.007Q1.998 11.827 2 11v-1c0-3.771 0-5.657 1.172-6.828S6.229 2 10 2"></svg:path>`,
})
export class SolarMonitorBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMonitorCameraBoldIcon],svg[solar-monitor-camera-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 2h-1c-1.414 0-2.121 0-2.56.44C12 2.878 12 3.585 12 5s0 2.121.44 2.56C12.878 8 13.585 8 15 8h1c1.414 0 2.121 0 2.56-.44c.285-.284.386-.681.42-1.31H19l1.615.673c.627.261.94.391 1.162.243C22 7.018 22 6.678 22 6V4c0-.678 0-1.018-.223-1.166c-.222-.148-.535-.018-1.162.243L19 3.75h-.02c-.035-.629-.135-1.026-.42-1.31C18.122 2 17.415 2 16 2M8 17c-2.828 0-4.243 0-5.121-.879c-.57-.569-.77-1.363-.84-2.621h19.923c-.07 1.258-.271 2.052-.84 2.621C20.241 17 18.827 17 16 17h-3.25v4H16a.75.75 0 0 1 0 1.5H8A.75.75 0 0 1 8 21h3.25v-4z"></svg:path><svg:path fill="currentColor" d="M22 10v1q.002.827-.006 1.5H2.007Q1.998 11.827 2 11v-1c0-3.771 0-5.657 1.172-6.828S6.229 2 10 2h.918c-.205.384-.3.786-.35 1.154c-.068.51-.068 1.128-.068 1.764v.164c0 .636 0 1.254.068 1.764c.078.575.266 1.23.81 1.775c.546.545 1.201.733 1.776.81c.51.07 1.128.07 1.764.069h1.164c.636 0 1.254 0 1.764-.068c.575-.078 1.23-.266 1.775-.81a2.6 2.6 0 0 0 .302-.362l.116.048l.056.023c.26.109.59.246.885.321c.233.06.606.122 1.018.027Q22 9.298 22 10"></svg:path>`,
})
export class SolarMonitorCameraBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMonitorSmartphoneBoldIcon],svg[solar-monitor-smartphone-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 2h-4C6.229 2 4.343 2 3.172 3.172S2 6.229 2 10v1q-.002.827.007 1.5h10.595c.103-.68.336-1.387.923-1.975c.618-.618 1.37-.843 2.08-.938c.646-.087 1.44-.087 2.305-.087h.18c.865 0 1.659 0 2.304.087c.538.072 1.098.218 1.606.551V10c0-3.771 0-5.657-1.172-6.828S17.771 2 14 2M2.879 16.121C3.757 17 5.172 17 8 17h3.25v4H8a.75.75 0 0 0 0 1.5h5.55l-.025-.025c-.618-.618-.843-1.37-.938-2.08c-.087-.646-.087-1.44-.087-2.305v-3.18c0-.498 0-.973.017-1.41H2.038c.07 1.258.271 2.052.84 2.621"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M22 15v3c0 1.886 0 2.828-.586 3.414S19.886 22 18 22s-2.828 0-3.414-.586S14 19.886 14 18v-3c0-1.886 0-2.828.586-3.414S16.114 11 18 11s2.828 0 3.414.586S22 13.114 22 15m-5.75 5a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarMonitorSmartphoneBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMoonBoldIcon],svg[solar-moon-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22c5.523 0 10-4.477 10-10c0-.463-.694-.54-.933-.143a6.5 6.5 0 1 1-8.924-8.924C12.54 2.693 12.463 2 12 2C6.477 2 2 6.477 2 12s4.477 10 10 10"></svg:path>`,
})
export class SolarMoonBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMoonFogBoldIcon],svg[solar-moon-fog-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 12C2 6.477 6.477 2 12 2c.463 0 .54.693.143.933a6.5 6.5 0 1 0 8.924 8.924c.24-.396.933-.32.933.143c0 1.138-.19 2.231-.54 3.25H22a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1 0-1.5h.54A10 10 0 0 1 2 12m3 6.25a.75.75 0 0 0 0 1.5h14a.75.75 0 0 0 0-1.5zm3 3a.75.75 0 0 0 0 1.5h8a.75.75 0 0 0 0-1.5zM19.9 2.307a.483.483 0 0 0-.9 0l-.43 1.095a.48.48 0 0 1-.272.274l-1.091.432a.486.486 0 0 0 0 .903l1.091.432a.48.48 0 0 1 .272.273L19 6.81c.162.41.74.41.9 0l.43-1.095a.48.48 0 0 1 .273-.273l1.091-.432a.486.486 0 0 0 0-.903l-1.091-.432a.48.48 0 0 1-.273-.274z"></svg:path><svg:path fill="currentColor" d="M16.033 8.13a.483.483 0 0 0-.9 0l-.157.399a.48.48 0 0 1-.272.273l-.398.158a.486.486 0 0 0 0 .903l.398.157c.125.05.223.148.272.274l.157.399c.161.41.739.41.9 0l.157-.4a.48.48 0 0 1 .272-.273l.398-.157a.486.486 0 0 0 0-.903l-.398-.158a.48.48 0 0 1-.272-.273z"></svg:path>`,
})
export class SolarMoonFogBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMoonSleepBoldIcon],svg[solar-moon-sleep-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M18 2.75a.75.75 0 0 1 0-1.5h4a.75.75 0 0 1 .53 1.28l-2.72 2.72H22a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.53-1.28l2.72-2.72zm-4.5 6a.75.75 0 0 1 0-1.5h3a.75.75 0 0 1 .53 1.28l-1.72 1.72h1.19a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.53-1.28l1.72-1.72z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M12 22c5.523 0 10-4.477 10-10c0-.463-.694-.54-.933-.143a6.5 6.5 0 1 1-8.924-8.924C12.54 2.693 12.463 2 12 2C6.477 2 2 6.477 2 12s4.477 10 10 10"></svg:path>`,
})
export class SolarMoonSleepBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMoonStarsBoldIcon],svg[solar-moon-stars-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.9 2.307a.483.483 0 0 0-.9 0l-.43 1.095a.48.48 0 0 1-.272.274l-1.091.432a.486.486 0 0 0 0 .903l1.091.432a.48.48 0 0 1 .272.273L19 6.81c.162.41.74.41.9 0l.43-1.095a.48.48 0 0 1 .273-.273l1.091-.432a.486.486 0 0 0 0-.903l-1.091-.432a.48.48 0 0 1-.273-.274zM16.033 8.13a.483.483 0 0 0-.9 0l-.157.399a.48.48 0 0 1-.272.273l-.398.158a.486.486 0 0 0 0 .903l.398.157c.125.05.223.148.272.274l.157.399c.161.41.739.41.9 0l.157-.4a.48.48 0 0 1 .272-.273l.398-.157a.486.486 0 0 0 0-.903l-.398-.158a.48.48 0 0 1-.272-.273z"></svg:path><svg:path fill="currentColor" d="M12 22c5.523 0 10-4.477 10-10c0-.463-.694-.54-.933-.143a6.5 6.5 0 1 1-8.924-8.924C12.54 2.693 12.463 2 12 2C6.477 2 2 6.477 2 12s4.477 10 10 10"></svg:path>`,
})
export class SolarMoonStarsBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMouseBoldIcon],svg[solar-mouse-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 8.974v6.012C19 18.86 15.866 22 12 22s-7-3.14-7-7.014V8.974A7.01 7.01 0 0 1 11.25 2v3.385c-.591.282-1 .886-1 1.585v2.004c0 .969.784 1.754 1.75 1.754s1.75-.785 1.75-1.754V6.97c0-.7-.409-1.303-1-1.585V2A7.01 7.01 0 0 1 19 8.974"></svg:path>`,
})
export class SolarMouseBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMouseCircleBoldIcon],svg[solar-mouse-circle-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 21.453c-5.227 0-9.465-4.27-9.465-9.537c0-4.617 3.257-8.47 7.583-9.349c.527-.107 1.115.335 1.115 1.1V5.73h1.534V3.668c0-1.513-1.263-2.96-2.952-2.617C4.787 2.073 1 6.548 1 11.916C1 18.038 5.925 23 12 23s11-4.962 11-11.084c0-4.388-2.531-8.18-6.199-9.975a.765.765 0 0 0-1.026.358a.776.776 0 0 0 .355 1.033a9.54 9.54 0 0 1 5.335 8.584c0 5.267-4.238 9.537-9.465 9.537" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M7.907 13.954c0 2.291 1.832 4.148 4.093 4.148c2.26 0 4.093-1.857 4.093-4.148v-3.37H7.907zm4.86-4.616h3.254c-.312-1.667-1.609-3.292-3.254-3.608zm-1.534 0V5.73c-1.646.316-2.943 1.94-3.254 3.608z"></svg:path>`,
})
export class SolarMouseCircleBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMouseMinimalisticBoldIcon],svg[solar-mouse-minimalistic-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M19 9v6a7 7 0 1 1-14 0V9a7 7 0 0 1 14 0m-7-4.75a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0V5a.75.75 0 0 1 .75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarMouseMinimalisticBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMoveToFolderBoldIcon],svg[solar-move-to-folder-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 11.798V14c0 3.771 0 5.657-1.172 6.828S17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172c-.975-.974-1.139-2.442-1.166-5.078h8.688l-2.26 1.643a.75.75 0 0 0 .882 1.214l4.125-3a.75.75 0 0 0 0-1.213l-4.125-3a.75.75 0 1 0-.882 1.213l2.26 1.643H2v-7.3c0-.883 0-1.324.07-1.692A4 4 0 0 1 5.257 2.07C5.626 2 6.068 2 6.95 2c.386 0 .58 0 .766.017a4 4 0 0 1 2.18.904c.144.119.28.255.554.529L11 4c.816.816 1.224 1.224 1.712 1.495q.404.226.848.352C14.098 6 14.675 6 15.828 6h.374c2.632 0 3.949 0 4.804.77q.118.105.225.224C22 7.849 22 9.166 22 11.798"></svg:path>`,
})
export class SolarMoveToFolderBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMultipleForwardLeftBoldIcon],svg[solar-multiple-forward-left-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.475 5.184L7.497 9.608c-.93.827-1.396 1.241-1.567 1.73a2 2 0 0 0 0 1.325c.171.488.637.902 1.567 1.729l4.978 4.425c.422.375.634.563.813.57a.5.5 0 0 0 .405-.182c.114-.139.114-.421.114-.986v-2.79c2.428 0 4.992.78 6.865 2.164c.975.72 1.462 1.08 1.648 1.067a.45.45 0 0 0 .39-.24c.096-.16.01-.658-.16-1.653c-1.104-6.466-5.554-8.196-8.743-8.196v-2.79c0-.565 0-.847-.114-.986a.5.5 0 0 0-.405-.181c-.18.006-.39.194-.813.57"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M9.818 3.99a.75.75 0 0 0-1.06-.04L3.542 8.794a4.647 4.647 0 0 0 .15 6.944l5.09 4.333a.75.75 0 1 0 .972-1.142l-5.09-4.333a3.147 3.147 0 0 1-.102-4.703L9.78 5.05a.75.75 0 0 0 .039-1.06" clip-rule="evenodd"></svg:path>`,
})
export class SolarMultipleForwardLeftBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMultipleForwardRightBoldIcon],svg[solar-multiple-forward-right-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12.332 5.184l4.977 4.424c.93.827 1.396 1.241 1.568 1.73a2 2 0 0 1 0 1.325c-.172.488-.637.902-1.568 1.729l-4.978 4.425c-.422.375-.633.563-.812.57a.5.5 0 0 1-.405-.182C11 19.066 11 18.784 11 18.219v-2.79c-2.428 0-4.993.78-6.865 2.164c-.975.72-1.463 1.08-1.648 1.067a.45.45 0 0 1-.39-.24c-.096-.16-.011-.658.159-1.653C3.361 10.3 7.811 8.57 11 8.57V5.78c0-.565 0-.847.114-.986a.5.5 0 0 1 .405-.181c.18.006.39.194.813.57"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M14.989 3.99a.75.75 0 0 1 1.06-.04l5.216 4.844a4.647 4.647 0 0 1-.15 6.944l-5.09 4.333a.75.75 0 1 1-.973-1.142l5.09-4.333a3.147 3.147 0 0 0 .102-4.703L15.028 5.05a.75.75 0 0 1-.04-1.06" clip-rule="evenodd"></svg:path>`,
})
export class SolarMultipleForwardRightBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMusicLibrary2BoldIcon],svg[solar-music-library-2-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.51 2h6.98c.232 0 .41 0 .566.015c1.108.109 2.015.775 2.4 1.672H5.544c.385-.897 1.292-1.563 2.4-1.672C8.098 2 8.276 2 8.51 2m-2.2 2.723c-1.39 0-2.53.84-2.91 1.954l-.024.07c.398-.12.813-.2 1.232-.253c1.08-.139 2.446-.139 4.032-.139h6.892c1.586 0 2.951 0 4.032.139c.42.054.834.132 1.232.253l-.023-.07c-.38-1.114-1.52-1.954-2.911-1.954zM11.25 17a.75.75 0 1 0-1.5 0a.75.75 0 0 0 1.5 0"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M8.672 7.542h6.656c3.374 0 5.062 0 6.01.987s.724 2.511.278 5.56l-.422 2.892c-.35 2.391-.525 3.587-1.422 4.303s-2.22.716-4.867.716h-5.81c-2.646 0-3.97 0-4.867-.716s-1.072-1.912-1.422-4.303l-.422-2.891c-.447-3.05-.67-4.574.278-5.561s2.636-.987 6.01-.987M12.75 10.5a.75.75 0 0 0-1.5 0v4.378A2.25 2.25 0 1 0 12.75 17v-3.68c.67.543 1.512.93 2.25.93a.75.75 0 0 0 0-1.5c-.305 0-.886-.219-1.416-.69c-.519-.46-.834-1.021-.834-1.56" clip-rule="evenodd"></svg:path>`,
})
export class SolarMusicLibrary2BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMusicLibraryBoldIcon],svg[solar-music-library-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.51 2h6.98c.232 0 .41 0 .566.015c1.108.109 2.015.775 2.4 1.672H5.544c.385-.897 1.292-1.563 2.4-1.672C8.098 2 8.276 2 8.51 2m-2.2 2.723c-1.39 0-2.53.84-2.91 1.954l-.024.07c.398-.12.813-.2 1.232-.253c1.08-.139 2.446-.139 4.032-.139h6.892c1.586 0 2.951 0 4.032.139c.42.054.834.132 1.232.253l-.023-.07c-.38-1.114-1.52-1.954-2.911-1.954z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M15.328 7.542H8.672c-3.374 0-5.062 0-6.01.987s-.725 2.511-.278 5.56l.422 2.892c.35 2.391.525 3.587 1.422 4.303c.898.716 2.22.716 4.867.716h5.81c2.646 0 3.97 0 4.867-.716s1.072-1.912 1.422-4.303l.422-2.891c.447-3.05.67-4.574-.278-5.561s-2.636-.987-6.01-.987m-.74 2.623c-1.231-.526-2.645.266-2.727 1.528q-.005.082-.004.206v3.623a2.7 2.7 0 0 0-1.286-.321C9.151 15.2 8 16.275 8 17.6S9.151 20 10.571 20s2.572-1.074 2.572-2.4v-3.919l.928.462q.118.06.198.095c1.231.526 2.645-.266 2.728-1.528q.004-.082.003-.207v-.026l-.001-.093c-.021-.623-.387-1.192-.966-1.503l-.087-.044l-1.16-.578q-.118-.059-.197-.094" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M14.053 11.256c-.41-.175-.882.089-.909.51a4 4 0 0 0 0 .214a.6.6 0 0 0 .321.501l.058.03l1.135.564c.107.054.133.066.146.072c.41.175.882-.089.91-.51a4 4 0 0 0 0-.215a.6.6 0 0 0-.322-.5zM10.571 16.4c.71 0 1.286.538 1.286 1.2c0 .663-.575 1.2-1.286 1.2c-.71 0-1.285-.537-1.285-1.2s.575-1.2 1.285-1.2"></svg:path>`,
})
export class SolarMusicLibraryBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMusicNote2BoldIcon],svg[solar-music-note-2-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.75 2a.75.75 0 0 0-1.5 0v12.536A4.75 4.75 0 1 0 13.75 18V6.243A6.74 6.74 0 0 0 19 8.75a.75.75 0 0 0 0-1.5A5.25 5.25 0 0 1 13.75 2"></svg:path>`,
})
export class SolarMusicNote2BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMusicNote3BoldIcon],svg[solar-music-note-3-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.319 2.505A2.75 2.75 0 0 0 11.414 4.3c-.098.27-.132.563-.148.869A17 17 0 0 0 11.25 6v8.536A4.75 4.75 0 1 0 12.75 18V9.21q.156.083.343.175L15.8 10.74c.418.21.759.38 1.038.5c.281.123.558.223.843.257A2.75 2.75 0 0 0 20.586 9.7c.098-.27.132-.563.148-.87c.016-.303.016-.683.016-1.151v-.083c0-.348 0-.62-.049-.878a2.75 2.75 0 0 0-1.03-1.667c-.21-.16-.453-.281-.764-.436L16.2 3.262a22 22 0 0 0-1.038-.501c-.28-.123-.558-.223-.843-.256"></svg:path>`,
})
export class SolarMusicNote3BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMusicNote4BoldIcon],svg[solar-music-note-4-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.85 4.7c-.398-1.124-1.497-1.821-2.656-1.683a2.7 2.7 0 0 0-.77.24c-.256.114-.567.274-.95.47L13 4.997c-.284.145-.507.259-.698.409a2.6 2.6 0 0 0-.942 1.563c-.045.242-.045.497-.045.823v6.506a4.27 4.27 0 0 0-2.971-1.206c-2.4 0-4.344 1.994-4.344 4.454S5.944 22 8.343 22s4.343-1.994 4.343-4.454v-6.363c.43.226.926.325 1.434.265c.261-.032.514-.125.771-.24c.255-.114.566-.274.949-.47l2.475-1.27c.285-.145.507-.259.698-.408c.49-.385.826-.942.942-1.564c.045-.242.045-.497.045-.823v-.077c0-.439 0-.796-.015-1.08a3 3 0 0 0-.135-.816"></svg:path>`,
})
export class SolarMusicNote4BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMusicNoteBoldIcon],svg[solar-music-note-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10.09 11.963l9.274-3.332v5.54a3.8 3.8 0 0 0-1.91-.501c-1.958 0-3.545 1.426-3.545 3.185s1.587 3.185 3.545 3.185c1.959 0 3.546-1.426 3.546-3.185V7.492c0-1.12 0-2.059-.088-2.807a7 7 0 0 0-.043-.31c-.084-.51-.234-.988-.522-1.386a2.2 2.2 0 0 0-.676-.617l-.009-.005c-.771-.461-1.639-.428-2.532-.224c-.864.198-1.936.6-3.25 1.095l-2.284.859c-.615.231-1.137.427-1.547.63c-.435.216-.81.471-1.092.851c-.281.38-.398.79-.452 1.234c-.05.418-.05.926-.05 1.525v7.794a3.8 3.8 0 0 0-1.91-.501C4.587 15.63 3 17.056 3 18.815S4.587 22 6.545 22c1.959 0 3.546-1.426 3.546-3.185z"></svg:path>`,
})
export class SolarMusicNoteBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMusicNoteSlider2BoldIcon],svg[solar-music-note-slider-2-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.419 8c0-2.828 0-4.243.817-5.121S9.369 2 12 2s3.947 0 4.764.879c.817.878.817 2.293.817 5.121v8c0 2.828 0 4.243-.817 5.121S14.631 22 12 22s-3.947 0-4.764-.879c-.817-.878-.817-2.293-.817-5.121zm-1.396-.099V16.1c0 .982 0 1.865.046 2.629q.025.405.069.764q.02.16.046.32c.036.217-.131.42-.35.401c-.43-.037-.82-.118-1.183-.317a3.15 3.15 0 0 1-1.321-1.42c-.186-.391-.26-.81-.296-1.273C2 16.756 2 16.205 2 15.531V8.47c0-.674 0-1.224.034-1.672c.035-.463.11-.882.296-1.272a3.15 3.15 0 0 1 1.32-1.42c.364-.2.753-.28 1.184-.318c.219-.02.386.184.35.4a8 8 0 0 0-.046.321q-.044.36-.069.764c-.046.764-.046 1.646-.046 2.63m13.954 0V16.1c0 .982 0 1.865-.047 2.629q-.023.405-.068.764a8 8 0 0 1-.046.32c-.036.217.131.42.35.401c.43-.037.82-.118 1.183-.317a3.15 3.15 0 0 0 1.322-1.42c.185-.391.26-.81.295-1.273c.034-.447.034-.998.034-1.671V8.468c0-.674 0-1.225-.034-1.672c-.035-.463-.11-.882-.296-1.272a3.15 3.15 0 0 0-1.32-1.42c-.364-.2-.753-.28-1.184-.318c-.219-.02-.386.184-.35.4q.026.16.046.321q.044.36.069.764c.046.764.046 1.646.046 2.63m-4.109.51a1 1 0 0 1 .11-.042a.25.25 0 0 1 .254.157a1 1 0 0 1 .012.118c.006.117.006.276.006.527a7 7 0 0 1-.005.259a.25.25 0 0 1-.093.15l-.038.023c-.04.022-.095.05-.191.097l-1.317.659c-.224.112-.366.183-.474.23a1 1 0 0 1-.11.042a.25.25 0 0 1-.254-.157a1 1 0 0 1-.012-.117a11 11 0 0 1-.006-.528a7 7 0 0 1 .005-.258a.25.25 0 0 1 .093-.151l.038-.022c.04-.022.095-.05.191-.098l1.317-.658c.224-.112.366-.183.474-.23m1.777-.389a1.75 1.75 0 0 0-1.848-1.142c-.198.023-.377.09-.528.157c-.149.064-.326.153-.53.255l-1.333.667l-.036.018a2.7 2.7 0 0 0-.433.251a1.75 1.75 0 0 0-.656 1.061a2.6 2.6 0 0 0-.031.5v2.761a2.75 2.75 0 1 0 1.5 2.45v-2.886q.222.033.453.006c.198-.023.377-.09.528-.156c.149-.065.326-.154.53-.255l1.333-.667l.036-.018c.145-.073.299-.15.433-.252a1.75 1.75 0 0 0 .656-1.06c.031-.167.031-.338.031-.5v-.06c0-.226 0-.425-.009-.587a1.9 1.9 0 0 0-.096-.543M10 13.75a1.25 1.25 0 1 1 0 2.5a1.25 1.25 0 0 1 0-2.5" clip-rule="evenodd"></svg:path>`,
})
export class SolarMusicNoteSlider2BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMusicNoteSliderBoldIcon],svg[solar-music-note-slider-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 12.75a1.25 1.25 0 1 1 0 2.5a1.25 1.25 0 0 1 0-2.5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M6.419 8c0-2.828 0-4.243.817-5.121S9.369 2 12 2s3.947 0 4.764.879c.817.878.817 2.293.817 5.121v8c0 2.828 0 4.243-.817 5.121S14.631 22 12 22s-3.947 0-4.764-.879c-.817-.878-.817-2.293-.817-5.121zm7.331 0a.75.75 0 0 0-1.5 0v3.55a2.75 2.75 0 1 0 1.5 2.45v-3.55c.375.192.8.3 1.25.3a.75.75 0 0 0 0-1.5c-.69 0-1.25-.56-1.25-1.25" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M5.023 7.901V16.1c0 .982 0 1.865.046 2.629q.025.405.069.764q.02.16.046.32c.036.217-.131.42-.35.401c-.43-.037-.82-.118-1.183-.317a3.15 3.15 0 0 1-1.321-1.42c-.186-.391-.26-.81-.296-1.273C2 16.756 2 16.205 2 15.531V8.47c0-.674 0-1.224.034-1.672c.035-.463.11-.882.296-1.272a3.15 3.15 0 0 1 1.32-1.42c.364-.2.753-.28 1.184-.318c.219-.02.386.184.35.4a8 8 0 0 0-.046.321q-.044.36-.069.764c-.046.764-.046 1.646-.046 2.63m13.954-.002V16.1c0 .982 0 1.865-.047 2.629q-.023.405-.068.764a8 8 0 0 1-.046.32c-.036.217.131.42.35.401c.43-.037.82-.118 1.183-.317a3.15 3.15 0 0 0 1.322-1.42c.185-.391.26-.81.295-1.273c.034-.447.034-.998.034-1.671V8.468c0-.674 0-1.225-.034-1.672c-.035-.463-.11-.882-.296-1.272a3.15 3.15 0 0 0-1.32-1.42c-.364-.2-.753-.28-1.184-.318c-.219-.02-.386.184-.35.4q.026.16.046.321q.044.36.069.764c.046.764.046 1.646.046 2.63"></svg:path>`,
})
export class SolarMusicNoteSliderBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMusicNotesBoldIcon],svg[solar-music-notes-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12.75 12.508l8.5-3.4v5.653a3.25 3.25 0 1 0 1.5 2.74V7.945c0-1.143 0-2.101-.08-2.865a8 8 0 0 0-.04-.315c-.078-.522-.214-1.008-.479-1.415a2.2 2.2 0 0 0-.62-.63l-.007-.005c-.708-.47-1.503-.437-2.322-.228c-.792.202-1.774.613-2.978 1.117l-2.094.876c-.565.236-1.043.437-1.418.644c-.4.22-.743.48-1.001.868s-.366.805-.415 1.259c-.046.426-.046.945-.046 1.557v7.952a3.25 3.25 0 1 0 1.5 2.74zM7.75 2a.75.75 0 0 0-1.5 0v5.76a3.25 3.25 0 1 0 1.5 2.74V5.005c.699.504 1.53.745 2.25.745a.75.75 0 0 0 0-1.5a2.44 2.44 0 0 1-1.488-.552c-.434-.357-.762-.9-.762-1.698"></svg:path>`,
})
export class SolarMusicNotesBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarMutedBoldIcon],svg[solar-muted-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.47 8.47a.75.75 0 0 1 1.06 0L17 10.94l2.47-2.47a.75.75 0 1 1 1.06 1.06L18.06 12l2.47 2.47a.75.75 0 0 1-1.06 1.06L17 13.06l-2.47 2.47a.75.75 0 0 1-1.06-1.06L15.94 12l-2.47-2.47a.75.75 0 0 1 0-1.06" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M3.681 8.164c-.621.788-.64 1.71-.678 3.552a14 14 0 0 0 0 .569c.038 1.842.057 2.763.678 3.551c.113.144.28.315.42.431c.763.636 1.771.636 3.788.636c.72 0 1.081 0 1.425.093q.107.029.211.066c.336.121.637.33 1.238.746c2.374 1.645 3.56 2.467 4.557 2.11a2.1 2.1 0 0 0 .541-.29c.786-.58.91-1.863 1.024-4.331l-1.294 1.294a2.25 2.25 0 1 1-3.182-3.182L13.818 12l-1.409-1.409a2.25 2.25 0 1 1 3.182-3.182l1.294 1.294c-.115-2.468-.238-3.751-1.024-4.331a2.1 2.1 0 0 0-.54-.29c-.997-.357-2.184.465-4.558 2.11c-.601.416-.902.625-1.238.746a3 3 0 0 1-.211.067c-.344.092-.704.092-1.425.092c-2.017 0-3.025 0-3.789.636c-.14.116-.306.287-.419.43"></svg:path>`,
})
export class SolarMutedBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarNotebookBoldIcon],svg[solar-notebook-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.75 2.013V22H15c2.828 0 4.243 0 5.121-.879C21 20.243 21 18.828 21 16V8c0-2.828 0-4.243-.879-5.121C19.243 2 17.828 2 15 2H9zm2 4.487a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1-.75-.75m0 3.5a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1-.75-.75M3 7.25c.008-2.336.081-3.574.879-4.371c.675-.675 1.666-.832 3.371-.868v19.978c-1.705-.036-2.696-.193-3.371-.868c-.798-.797-.871-2.035-.878-4.371H4a.75.75 0 0 0 0-1.5H3v-2.5h1a.75.75 0 0 0 0-1.5H3v-2.5h1a.75.75 0 0 0 0-1.5zm0 0H2a.75.75 0 0 0 0 1.5h1zm0 5.5H2a.75.75 0 0 1 0-1.5h1zm0 2.5H2a.75.75 0 0 0 0 1.5h1z" clip-rule="evenodd"></svg:path>`,
})
export class SolarNotebookBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarNotebookBookmarkBoldIcon],svg[solar-notebook-bookmark-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14.25 4.48v3.057c0 .111 0 .27.021.406a.94.94 0 0 0 .444.683a.96.96 0 0 0 .783.072c.13-.04.272-.108.378-.159L17 8.005l1.124.534c.106.05.248.119.378.16a.96.96 0 0 0 .783-.073a.94.94 0 0 0 .444-.683c.022-.136.021-.295.021-.406V3.031q.17-.008.332-.013C21.154 2.98 22 3.86 22 4.933v11.21c0 1.112-.906 2.01-2.015 2.08c-.97.06-2.108.179-2.985.41c-1.082.286-2.373.904-3.372 1.436q-.422.224-.878.323V5.174a3.6 3.6 0 0 0 .924-.371q.277-.162.576-.323m5.478 8.338a.75.75 0 0 1-.546.91l-4 1a.75.75 0 1 1-.364-1.456l4-1a.75.75 0 0 1 .91.546M11.25 5.214a3.4 3.4 0 0 1-.968-.339C9.296 4.354 8.05 3.765 7 3.487c-.887-.233-2.041-.352-3.018-.412C2.886 3.008 2 3.9 2 4.998v11.146c0 1.11.906 2.01 2.015 2.079c.97.06 2.108.179 2.985.41c1.081.286 2.373.904 3.372 1.436q.422.224.878.324zM4.273 8.818a.75.75 0 0 1 .91-.546l4 1a.75.75 0 1 1-.365 1.456l-4-1a.75.75 0 0 1-.545-.91m.91 3.454a.75.75 0 1 0-.365 1.456l4 1a.75.75 0 0 0 .364-1.456z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M18.25 3.151c-.62.073-1.23.18-1.75.336a8 8 0 0 0-.75.27v3.182l.75-.356l.008-.005a1.1 1.1 0 0 1 .492-.13q.072 0 .138.01c.175.029.315.1.354.12l.009.005l.75.356V3.15"></svg:path>`,
})
export class SolarNotebookBookmarkBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarNotebookMinimalisticBoldIcon],svg[solar-notebook-minimalistic-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 16.144V4.998c0-1.098.886-1.99 1.982-1.923c.977.06 2.131.179 3.018.412c1.05.277 2.296.867 3.282 1.388c.307.163.634.275.968.339v15.179a3.4 3.4 0 0 1-.878-.324c-1-.532-2.29-1.15-3.372-1.436c-.877-.231-2.016-.35-2.985-.41C2.906 18.153 2 17.255 2 16.143m10.75 4.25a3.4 3.4 0 0 0 .878-.324c1-.532 2.29-1.15 3.372-1.436c.877-.231 2.016-.35 2.985-.41c1.109-.07 2.015-.968 2.015-2.08V4.934c0-1.072-.846-1.953-1.918-1.915c-1.129.04-2.535.156-3.582.47c-.908.271-1.965.816-2.826 1.315a3.5 3.5 0 0 1-.924.37z"></svg:path>`,
})
export class SolarNotebookMinimalisticBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarNotebookSquareBoldIcon],svg[solar-notebook-square-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.172 2.172C2 3.343 2 5.229 2 9v4c0 3.771 0 5.657 1.172 6.828S6.229 21 10 21h4c3.771 0 5.657 0 6.828-1.172S22 16.771 22 13V9c0-3.771 0-5.657-1.172-6.828S17.771 1 14 1h-4C6.229 1 4.343 1 3.172 2.172m9.335 13.55l-.007.004V7.283l.022-.013c.553-.32 1.447-.796 2.178-1c.54-.149 1.24-.218 1.857-.248c.805-.04 1.443.623 1.443 1.43v5.459c0 .833-.68 1.504-1.51 1.566c-.506.038-1.052.101-1.49.208c-.837.205-1.883.716-2.493 1.037M6 7.496v5.415c0 .833.68 1.504 1.51 1.566c.506.038 1.052.101 1.49.208c.837.205 1.883.716 2.493 1.037l.007.004V7.311l-.035-.018C10.85 6.971 9.824 6.473 9 6.271c-.444-.109-1-.173-1.513-.21C6.665 6 6 6.673 6 7.496" clip-rule="evenodd"></svg:path>`,
})
export class SolarNotebookSquareBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarNotesBoldIcon],svg[solar-notes-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m2.755 14.716l.517 1.932c.604 2.255.907 3.383 1.592 4.114a4 4 0 0 0 2.01 1.16c.976.228 2.104-.074 4.36-.678c2.254-.604 3.382-.906 4.113-1.591q.091-.086.176-.176a9 9 0 0 1-1.014-.15c-.696-.138-1.523-.36-2.501-.622l-.107-.029l-.025-.006c-1.064-.286-1.953-.524-2.663-.78c-.747-.27-1.425-.603-2.002-1.143a5.5 5.5 0 0 1-1.596-2.765c-.18-.769-.128-1.523.012-2.304c.134-.749.374-1.647.662-2.722l.535-1.994l.018-.07c-1.92.517-2.931.823-3.605 1.454a4 4 0 0 0-1.161 2.012c-.228.975.074 2.103.679 4.358"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="m20.83 10.715l-.518 1.932c-.605 2.255-.907 3.383-1.592 4.114a4 4 0 0 1-2.01 1.161q-.145.034-.295.052c-.915.113-2.032-.186-4.064-.73c-2.255-.605-3.383-.907-4.114-1.592a4 4 0 0 1-1.161-2.011c-.228-.976.074-2.103.679-4.358l.517-1.932l.244-.905c.455-1.666.761-2.583 1.348-3.21a4 4 0 0 1 2.01-1.16c.976-.228 2.104.074 4.36.679c2.254.604 3.382.906 4.113 1.59a4 4 0 0 1 1.161 2.012c.228.976-.075 2.103-.679 4.358m-9.778-.91a.75.75 0 0 1 .919-.53l4.83 1.295a.75.75 0 1 1-.389 1.448l-4.83-1.294a.75.75 0 0 1-.53-.918m-.776 2.898a.75.75 0 0 1 .918-.53l2.898.777a.75.75 0 1 1-.388 1.448l-2.898-.776a.75.75 0 0 1-.53-.919" clip-rule="evenodd"></svg:path>`,
})
export class SolarNotesBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarNotesMinimalisticBoldIcon],svg[solar-notes-minimalistic-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20.062 12.647l.517-1.932c.604-2.255.907-3.382.68-4.358a4 4 0 0 0-1.162-2.011c-.731-.685-1.859-.987-4.114-1.591c-2.255-.605-3.383-.907-4.358-.68a4 4 0 0 0-2.011 1.162c-.587.626-.893 1.543-1.348 3.209l-.244.905l-.517 1.932c-.605 2.255-.907 3.382-.68 4.358a4 4 0 0 0 1.162 2.011c.731.685 1.859.987 4.114 1.592c2.032.544 3.149.843 4.064.73q.15-.019.294-.052a4 4 0 0 0 2.011-1.16c.685-.732.987-1.86 1.592-4.115"></svg:path><svg:path fill="currentColor" d="m2.505 14.715l.517 1.932c.604 2.255.907 3.383 1.592 4.114a4 4 0 0 0 2.01 1.16c.976.228 2.104-.074 4.36-.678c2.254-.604 3.382-.906 4.113-1.591q.091-.086.176-.176a9 9 0 0 1-1.014-.15c-.696-.138-1.523-.36-2.501-.622l-.107-.029l-.025-.006c-1.064-.285-1.953-.524-2.663-.78c-.747-.27-1.425-.603-2.002-1.143a5.5 5.5 0 0 1-1.596-2.765c-.18-.769-.128-1.522.012-2.304c.134-.749.374-1.646.662-2.722l.535-1.994l.018-.07c-1.92.517-2.931.823-3.605 1.454a4 4 0 0 0-1.161 2.012c-.228.975.074 2.103.679 4.358"></svg:path>`,
})
export class SolarNotesMinimalisticBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarNotificationLinesRemoveBoldIcon],svg[solar-notification-lines-remove-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M12 22c-4.714 0-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2h.258c-.405.567-.578 1.205-.662 1.831c-.096.714-.096 1.595-.096 2.577v.184c0 .982 0 1.863.096 2.577c.104.779.348 1.578 1.002 2.233c.655.654 1.454.898 2.233 1.002c.714.096 1.595.096 2.577.096h.184c.982 0 1.863 0 2.577-.096c.626-.084 1.264-.257 1.831-.662V12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22m-5.75-8a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75m0 3.5a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75"></svg:path><svg:path d="M17.5 11c-2.121 0-3.182 0-3.841-.659S13 8.621 13 6.5s0-3.182.659-3.841S15.379 2 17.5 2s3.182 0 3.841.659S22 4.379 22 6.5s0 3.182-.659 3.841S19.621 11 17.5 11m-2.53-7.03a.75.75 0 0 1 1.06 0l1.47 1.47l1.47-1.47a.75.75 0 1 1 1.06 1.06L18.56 6.5l1.47 1.47a.75.75 0 0 1-1.06 1.06L17.5 7.56l-1.47 1.47a.75.75 0 1 1-1.06-1.06l1.47-1.47l-1.47-1.47a.75.75 0 0 1 0-1.06"></svg:path></svg:g>`,
})
export class SolarNotificationLinesRemoveBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarNotificationRemoveBoldIcon],svg[solar-notification-remove-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M17.5 11c-2.121 0-3.182 0-3.841-.659S13 8.621 13 6.5s0-3.182.659-3.841S15.379 2 17.5 2s3.182 0 3.841.659S22 4.379 22 6.5s0 3.182-.659 3.841S19.621 11 17.5 11m-2.53-7.03a.75.75 0 0 1 1.06 0l1.47 1.47l1.47-1.47a.75.75 0 1 1 1.06 1.06L18.56 6.5l1.47 1.47a.75.75 0 0 1-1.06 1.06L17.5 7.56l-1.47 1.47a.75.75 0 1 1-1.06-1.06l1.47-1.47l-1.47-1.47a.75.75 0 0 1 0-1.06" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M12 22c-4.714 0-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2h.258c-.405.567-.578 1.205-.662 1.831c-.096.714-.096 1.595-.096 2.577v.184c0 .982 0 1.863.096 2.577c.104.779.348 1.578 1.002 2.233c.655.654 1.454.898 2.233 1.002c.714.096 1.595.096 2.577.096h.184c.982 0 1.863 0 2.577-.096c.626-.084 1.264-.257 1.831-.662V12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22"></svg:path>`,
})
export class SolarNotificationRemoveBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarNotificationUnreadBoldIcon],svg[solar-notification-unread-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22c-4.714 0-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c1.399 0 2.59 0 3.612.038a4.5 4.5 0 0 0 6.35 6.35C22 9.41 22 10.601 22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22"></svg:path><svg:path fill="currentColor" d="M22 5a3 3 0 1 1-6 0a3 3 0 0 1 6 0"></svg:path>`,
})
export class SolarNotificationUnreadBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarNotificationUnreadLinesBoldIcon],svg[solar-notification-unread-lines-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 5a3 3 0 1 1-6 0a3 3 0 0 1 6 0"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M6.25 14a.75.75 0 0 1 .75-.75h9a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M3.464 20.536C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12c0-1.399 0-2.59-.038-3.612a4.5 4.5 0 0 1-6.35-6.35C14.59 2 13.399 2 12 2C7.286 2 4.929 2 3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535M6.25 17.5a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarNotificationUnreadLinesBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarObjectScanBoldIcon],svg[solar-object-scan-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M22 13.25a.75.75 0 0 1 .75.75v.056c0 1.838 0 3.294-.153 4.433c-.158 1.172-.49 2.121-1.238 2.87c-.749.748-1.698 1.08-2.87 1.238c-1.14.153-2.595.153-4.433.153H14a.75.75 0 0 1 0-1.5c1.907 0 3.262-.002 4.29-.14c1.005-.135 1.585-.389 2.008-.812s.677-1.003.812-2.009c.138-1.027.14-2.382.14-4.289a.75.75 0 0 1 .75-.75m-20 0a.75.75 0 0 1 .75.75c0 1.907.002 3.262.14 4.29c.135 1.005.389 1.585.812 2.008s1.003.677 2.009.812c1.028.138 2.382.14 4.289.14a.75.75 0 0 1 0 1.5h-.056c-1.838 0-3.294 0-4.433-.153c-1.172-.158-2.121-.49-2.87-1.238c-.748-.749-1.08-1.698-1.238-2.87c-.153-1.14-.153-2.595-.153-4.433V14a.75.75 0 0 1 .75-.75m7.944-12H10a.75.75 0 0 1 0 1.5c-1.907 0-3.261.002-4.29.14c-1.005.135-1.585.389-2.008.812S3.025 4.705 2.89 5.71c-.138 1.029-.14 2.383-.14 4.29a.75.75 0 0 1-1.5 0v-.056c0-1.838 0-3.294.153-4.433c.158-1.172.49-2.121 1.238-2.87c.749-.748 1.698-1.08 2.87-1.238c1.14-.153 2.595-.153 4.433-.153m8.346 1.64c-1.028-.138-2.383-.14-4.29-.14a.75.75 0 0 1 0-1.5h.056c1.838 0 3.294 0 4.433.153c1.172.158 2.121.49 2.87 1.238c.748.749 1.08 1.698 1.238 2.87c.153 1.14.153 2.595.153 4.433V10a.75.75 0 0 1-1.5 0c0-1.907-.002-3.261-.14-4.29c-.135-1.005-.389-1.585-.812-2.008s-1.003-.677-2.009-.812" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M6.025 13.109C6.775 12.746 8.443 11.5 12 11.5s5.224 1.246 5.975 1.609l.012.006a1.6 1.6 0 0 1 .263.151c.132.097.229.21.308.337c.194.31.192.604.191.777v.172c0 .899 0 1.648-.08 2.242c-.084.628-.27 1.195-.725 1.65c-.456.456-1.022.642-1.65.726c-.595.08-1.344.08-2.243.08H9.948c-.898 0-1.647 0-2.242-.08c-.628-.084-1.195-.27-1.65-.726c-.456-.455-.641-1.022-.726-1.65c-.08-.594-.08-1.344-.08-2.242v-.172c0-.174-.003-.468.192-.777c.079-.126.176-.24.308-.337a1.7 1.7 0 0 1 .275-.157" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M16.295 4.83c-.595-.08-1.345-.08-2.243-.08H9.948c-.898 0-1.648 0-2.242.08c-.628.084-1.195.27-1.65.725c-.456.456-.642 1.023-.726 1.65c-.08.595-.08 1.345-.08 2.243v.286q-.29.187-.496.345a6 6 0 0 0-.497.426l-.01.01l-.004.004l-.001.002l-.002.001a.92.92 0 0 0-.026 1.212a.722.722 0 0 0 1.09.034l.008-.009l.055-.05a4 4 0 0 1 .263-.216a7 7 0 0 1 1.172-.708C7.879 10.26 9.58 9.715 12 9.715s4.12.545 5.198 1.07c.54.262.927.522 1.172.708a4 4 0 0 1 .318.266l.008.009a.722.722 0 0 0 1.09-.034a.92.92 0 0 0-.026-1.212l-.047-.047l-.1-.094a6 6 0 0 0-.367-.302a8 8 0 0 0-.496-.345v-.286c0-.898 0-1.648-.08-2.242c-.084-.628-.27-1.195-.726-1.65c-.455-.456-1.022-.642-1.65-.726"></svg:path>`,
})
export class SolarObjectScanBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarOutgoingCallBoldIcon],svg[solar-outgoing-call-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m15 9l4-4m0 0v3m0-3h-3"></svg:path><svg:path fill="currentColor" d="m15.556 14.548l-.455.48s-1.083 1.139-4.038-1.972s-1.872-4.25-1.872-4.25l.287-.303c.706-.744.773-1.938.156-2.81L8.374 3.91C7.61 2.83 6.135 2.688 5.26 3.609L3.691 5.26c-.433.457-.723 1.048-.688 1.705c.09 1.68.808 5.293 4.812 9.51c4.247 4.47 8.232 4.648 9.861 4.487c.516-.05.964-.329 1.325-.709l1.42-1.496c.96-1.01.69-2.74-.538-3.446l-1.91-1.1c-.806-.463-1.787-.327-2.417.336"></svg:path></svg:g>`,
})
export class SolarOutgoingCallBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarOutgoingCallRoundedBoldIcon],svg[solar-outgoing-call-rounded-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m15 9l4-4m0 0v3m0-3h-3"></svg:path><svg:path fill="currentColor" d="m10.038 5.316l.649 1.163c.585 1.05.35 2.426-.572 3.349c0 0-1.12 1.119.91 3.148c2.027 2.027 3.146.91 3.147.91c.923-.923 2.3-1.158 3.349-.573l1.163.65c1.585.884 1.772 3.106.379 4.5c-.837.836-1.863 1.488-2.996 1.53c-1.908.073-5.149-.41-8.4-3.66c-3.25-3.251-3.733-6.492-3.66-8.4c.043-1.133.694-2.159 1.53-2.996c1.394-1.393 3.616-1.206 4.5.38"></svg:path></svg:g>`,
})
export class SolarOutgoingCallRoundedBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarOvenMittsBoldIcon],svg[solar-oven-mitts-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m4.019 16.537l3.569 3.49C8.933 21.341 9.606 22 10.443 22c.514 0 .966-.248 1.55-.745c.358-.304.537-.457.545-.677s-.169-.393-.522-.74l-7.91-7.765c-.24-.236-.36-.354-.492-.387a.5.5 0 0 0-.266.007c-.13.04-.247.166-.479.418c-.58.63-.869 1.098-.869 1.634c0 .818.673 1.476 2.019 2.792m16.059-3.14a6.314 6.314 0 0 0 0-9.073c-2.562-2.505-6.716-2.505-9.278 0l-.466.455C9.914 3.152 8.668 1.98 7.214 2c-1.773.027-3.182 1.817-3.148 4l-.033 3.457c-.002.218-.003.327.036.421s.115.17.268.32l8.788 8.627c.33.324.495.486.7.486s.37-.161.7-.485z"></svg:path>`,
})
export class SolarOvenMittsBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarOvenMittsMinimalisticBoldIcon],svg[solar-oven-mitts-minimalistic-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m7.588 20.026l-3.57-3.49C2.674 15.222 2 14.564 2 13.747c0-.537.29-1.005.87-1.635c.59-.643.886-.964 1.02-1.3c.133-.336.137-.714.144-1.47L4.066 6c-.034-2.183 1.375-3.973 3.147-4c1.455-.022 2.702 1.152 3.121 2.78l.466-.456c2.562-2.505 6.716-2.505 9.278 0a6.314 6.314 0 0 1 0 9.072l-6.78 6.63C11.952 21.342 11.278 22 10.443 22c-.837 0-1.51-.658-2.855-1.974M5.98 12.872a.75.75 0 0 1 1.06-.012l4.283 4.187a.75.75 0 0 1-1.048 1.073l-4.283-4.187a.75.75 0 0 1-.012-1.06" clip-rule="evenodd"></svg:path>`,
})
export class SolarOvenMittsMinimalisticBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPaintRollerBoldIcon],svg[solar-paint-roller-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 4.5c0-.935 0-1.402.201-1.75a1.5 1.5 0 0 1 .549-.549C7.098 2 7.565 2 8.5 2h7c.935 0 1.402 0 1.75.201a1.5 1.5 0 0 1 .549.549C18 3.098 18 3.565 18 4.5s0 1.402-.201 1.75a1.5 1.5 0 0 1-.549.549C16.902 7 16.435 7 15.5 7h-7c-.935 0-1.402 0-1.75-.201a1.5 1.5 0 0 1-.549-.549C6 5.902 6 5.435 6 4.5m-.998-.56a.748.748 0 0 0 0 1.121Q5 4.813 5 4.541V4.46q0-.273.002-.52M10 16v4c0 .943 0 1.414.293 1.707S11.057 22 12 22s1.414 0 1.707-.293S14 20.943 14 20v-4c0-.943 0-1.414-.293-1.707S12.943 14 12 14s-1.414 0-1.707.293S10 15.057 10 16"></svg:path><svg:path fill="currentColor" d="M18.994 5.25h.051c.455 0 .76 0 .997.016c.23.015.342.042.416.07c.323.128.578.383.706.706c.029.074.056.187.07.417c.016.236.016.541.016.996c0 .837-.01 1.067-.071 1.239a1.25 1.25 0 0 1-.592.687c-.161.086-.387.13-1.215.255l-4.123.618c-.773.116-1.421.213-1.934.358c-.543.152-1.023.38-1.398.816c-.384.445-.542.977-.61 1.578c.204-.006.42-.006.639-.006h.109c.265 0 .525 0 .766.011c.05-.32.127-.482.232-.604c.11-.127.278-.242.668-.351c.411-.116.966-.2 1.797-.325l4.196-.63c.65-.097 1.158-.172 1.577-.395a2.75 2.75 0 0 0 1.302-1.513c.158-.447.158-.96.157-1.617V7.43c0-.424 0-.779-.019-1.07a2.8 2.8 0 0 0-.172-.868a2.75 2.75 0 0 0-1.551-1.552a2.8 2.8 0 0 0-.869-.172a18 18 0 0 0-1.07-.019h-.075q.008.33.006.71v.08q.002.38-.006.71"></svg:path>`,
})
export class SolarPaintRollerBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPaletteBoldIcon],svg[solar-palette-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10 6v12c0 1.4 0 2.1-.272 2.635a2.5 2.5 0 0 1-1.093 1.092C8.1 22 7.4 22 6 22s-2.1 0-2.635-.273a2.5 2.5 0 0 1-1.093-1.092C2 20.1 2 19.4 2 18V6c0-1.4 0-2.1.272-2.635a2.5 2.5 0 0 1 1.093-1.093C3.9 2 4.6 2 6 2s2.1 0 2.635.272a2.5 2.5 0 0 1 1.093 1.093C10 3.9 10 4.6 10 6M7 19.75a.75.75 0 0 0 0-1.5H5a.75.75 0 0 0 0 1.5z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="m19.06 10.614l-5.838 6.09c-.73.761-1.095 1.142-1.408 1.016c-.314-.126-.314-.653-.314-1.708V7.774a2.5 2.5 0 0 1 .73-1.76l1.054-1.055l.43-.33c1.004-.767 1.506-1.15 2.053-1.269a2.5 2.5 0 0 1 1.353.085c.528.184.979.628 1.88 1.514c1 1 1.5 1.5 1.685 2.072a2.5 2.5 0 0 1 .011 1.503c-.176.575-.663 1.077-1.636 2.08M12.79 22h5.11c1.4 0 2.1 0 2.634-.273a2.5 2.5 0 0 0 1.093-1.092c.272-.535.272-1.235.272-2.635s0-2.1-.272-2.635a2.5 2.5 0 0 0-1.093-1.092C20 14 19.3 14 17.9 14h-.22l-5.801 5.798a1.22 1.22 0 0 0-.378.883c0 .713.577 1.319 1.29 1.319"></svg:path>`,
})
export class SolarPaletteBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPaletteRoundBoldIcon],svg[solar-palette-round-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.9 22a4 4 0 1 0 0-8h-.22l-5.802 5.798a1.22 1.22 0 0 0-.378.883c0 .713.577 1.319 1.29 1.319zM13.284 4.959l-1.055 1.055a2.5 2.5 0 0 0-.729 1.76v8.238c0 1.055 0 1.582.313 1.708c.314.126.679-.255 1.409-1.016l5.838-6.09a4.042 4.042 0 0 0-5.776-5.655"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M10 6v12a4 4 0 0 1-8 0V6a4 4 0 1 1 8 0M6 19a1 1 0 1 0 0-2a1 1 0 0 0 0 2" clip-rule="evenodd"></svg:path>`,
})
export class SolarPaletteRoundBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPallete2BoldIcon],svg[solar-pallete-2-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10.847 21.934C5.867 21.362 2 17.133 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10c0 5.157-3.283 4.733-6.086 4.37c-1.618-.209-3.075-.397-3.652.518c-.395.626.032 1.406.555 1.929a1.673 1.673 0 0 1 0 2.366c-.523.523-1.235.836-1.97.751M11.085 7a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0M6.5 13a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m11 0a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m-3-4.5a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3" clip-rule="evenodd"></svg:path>`,
})
export class SolarPallete2BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPanoramaBoldIcon],svg[solar-panorama-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.21 12.84c0 .778-.625 1.409-1.396 1.409s-1.395-.631-1.395-1.41s.624-1.409 1.395-1.409c.77 0 1.395.631 1.395 1.41"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M18.448 3.073c-1.06-.332-2.03.514-2.03 1.547v3.626c-1.296.252-2.804.397-4.418.397s-3.122-.145-4.419-.397V4.62c0-1.033-.97-1.879-2.028-1.547c-.982.307-1.831.697-2.45 1.17C2.495 4.705 2 5.338 2 6.13v11.95q.002.323.104.614q.091.262.244.493c.324.491.841.894 1.44 1.223c.609.334 1.351.62 2.185.852C7.64 21.727 9.737 22 12 22c1.9 0 3.682-.192 5.189-.529c1.493-.333 2.773-.82 3.63-1.445c.208-.152.405-.322.576-.511c.36-.398.605-.877.605-1.436V6.13c0-.792-.494-1.425-1.103-1.889c-.619-.472-1.468-.862-2.45-1.169m2.157 5.154l-.081.052c-.823.516-1.952.93-3.254 1.227c-1.524.347-3.335.547-5.27.547s-3.745-.2-5.27-.547c-1.302-.297-2.431-.71-3.254-1.227l-.08-.052v9.162l2.83-2.675l1.276-1.08a2.39 2.39 0 0 1 3.192.105l3.09 2.985a.786.786 0 0 0 .975.078l.215-.145a2.91 2.91 0 0 1 3.532.207l1.9 1.653c.157-.188.199-.337.199-.438z" clip-rule="evenodd"></svg:path>`,
})
export class SolarPanoramaBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPaperBinBoldIcon],svg[solar-paper-bin-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.21 3.042c-.463.539-.623 1.227-.603 2.208h18.787c.02-.981-.14-1.67-.604-2.208C19.892 2 18.272 2 15.033 2H8.967C5.727 2 4.108 2 3.21 3.042M3.034 8.89a85 85 0 0 1-.304-2.14h.96L4.94 8L3.165 9.773zm.566 3.77l.349 2.33l.99-.99zm.625 4.175l.009.055q.111.753.21 1.36H6.69L7.94 17L6 15.06zm7.085 1.415h1.38L13.94 17L12 15.06L10.06 17zm6 0h2.246q.099-.607.21-1.36l.009-.055L18 15.061L16.06 17zm2.742-3.26l.35-2.33L19.06 14zm.782-5.217l.133-.883c.121-.81.227-1.518.304-2.14h-.96L19.06 8zM15.69 6.75h-1.38L13.06 8L15 9.94L16.94 8zm-6 0H8.31L7.06 8L9 9.94L10.94 8zm-4.932 13c.196.686.451 1.165.868 1.523C6.47 22 7.702 22 10.167 22h3.666c2.465 0 3.697 0 4.541-.727c.417-.358.672-.837.868-1.523zM4.06 11L6 9.06L7.94 11L6 12.94zm3 3L9 12.06L10.94 14L9 15.94zM15 15.94L13.06 14L15 12.06L16.94 14zm-3-3L13.94 11L12 9.06L10.06 11zm6 0L16.06 11L18 9.06L19.94 11z"></svg:path>`,
})
export class SolarPaperBinBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPaperclip2BoldIcon],svg[solar-paperclip-2-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.244 1.955c1.7-.94 3.79-.94 5.49 0c.63.348 1.218.91 2.173 1.825l.093.09l.098.093c.95.91 1.54 1.475 1.906 2.081a5.14 5.14 0 0 1 0 5.337c-.366.607-.955 1.17-1.906 2.08l-.098.095l-7.457 7.14c-.53.506-.96.92-1.34 1.226c-.393.316-.78.561-1.235.692a3.5 3.5 0 0 1-1.937 0c-.454-.13-.841-.376-1.234-.692c-.38-.307-.811-.72-1.34-1.226l-.048-.046c-.529-.507-.96-.92-1.28-1.283c-.33-.376-.592-.753-.733-1.201a3.2 3.2 0 0 1 0-1.907c.14-.448.402-.825.733-1.2c.32-.364.751-.777 1.28-1.284l7.35-7.038l.079-.075c.369-.354.68-.654 1.041-.82a2.4 2.4 0 0 1 2.007 0c.36.166.672.466 1.041.82l.079.075l.08.078c.367.35.683.651.86 1.003a2.21 2.21 0 0 1 0 1.994a2.3 2.3 0 0 1-.391.538c-.142.152-.323.326-.535.529l-7.394 7.08a.75.75 0 0 1-1.038-1.083l7.38-7.067c.23-.22.38-.364.488-.48a1 1 0 0 0 .15-.191a.71.71 0 0 0 0-.646c-.044-.088-.143-.198-.638-.671c-.492-.471-.61-.57-.71-.617a.9.9 0 0 0-.75 0c-.101.047-.22.146-.711.617L5.47 14.836c-.558.535-.943.904-1.215 1.213c-.267.304-.376.496-.428.66a1.7 1.7 0 0 0 0 1.008c.052.163.16.355.428.659c.272.31.657.678 1.215 1.213c.56.535.945.904 1.269 1.165c.316.255.523.365.707.418c.361.104.747.104 1.108 0c.184-.053.391-.163.707-.418c.324-.261.71-.63 1.269-1.165l7.433-7.117c1.08-1.034 1.507-1.453 1.756-1.866a3.65 3.65 0 0 0 0-3.787c-.249-.413-.676-.832-1.756-1.866c-1.079-1.032-1.518-1.444-1.954-1.685a4.2 4.2 0 0 0-4.039 0c-.437.24-.876.653-1.954 1.685l-5.99 5.735A.75.75 0 0 1 2.99 9.605L8.98 3.87l.093-.09c.955-.914 1.543-1.477 2.172-1.825" clip-rule="evenodd"></svg:path>`,
})
export class SolarPaperclip2BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPaperclipBoldIcon],svg[solar-paperclip-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.886 3.363c2.942-2.817 7.7-2.817 10.643 0c2.961 2.834 2.961 7.444 0 10.279l-7.948 7.608c-2.09 2-5.466 2-7.556 0a5.03 5.03 0 0 1 0-7.324l7.834-7.498a3.253 3.253 0 0 1 4.468 0a3 3 0 0 1 0 4.367l-7.89 7.554a.75.75 0 1 1-1.038-1.084l7.89-7.553a1.503 1.503 0 0 0 0-2.2a1.753 1.753 0 0 0-2.393 0L5.062 15.01a3.53 3.53 0 0 0 0 5.156c1.51 1.445 3.972 1.445 5.482 0l7.948-7.608c2.344-2.244 2.344-5.868 0-8.112c-2.363-2.261-6.206-2.261-8.57 0l-6.403 6.13A.75.75 0 0 1 2.48 9.493z" clip-rule="evenodd"></svg:path>`,
})
export class SolarPaperclipBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPaperclipRounded2BoldIcon],svg[solar-paperclip-rounded-2-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 2C7.286 2 4.929 2 3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2M8.964 6.863c2.238-2.15 5.856-2.15 8.094 0a5.41 5.41 0 0 1 0 7.858l-2.204 2.118a3.317 3.317 0 0 1-4.567 0a3.08 3.08 0 0 1 0-4.47l1.764-1.694a.75.75 0 1 1 1.039 1.081l-1.764 1.695a1.58 1.58 0 0 0 0 2.306a1.82 1.82 0 0 0 2.488 0l2.205-2.117a3.91 3.91 0 0 0 0-5.696c-1.658-1.592-4.358-1.592-6.016 0l-2.205 2.118a3.327 3.327 0 0 0 0 4.848a.75.75 0 0 1-1.039 1.082a4.827 4.827 0 0 1 0-7.012z" clip-rule="evenodd"></svg:path>`,
})
export class SolarPaperclipRounded2BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPaperclipRoundedBoldIcon],svg[solar-paperclip-rounded-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 2C7.286 2 4.929 2 3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2m-.889 3.673a4.07 4.07 0 0 1 3.614 0c.565.28 1.072.774 1.829 1.511l.1.098l.104.1c.754.735 1.263 1.23 1.553 1.783a3.84 3.84 0 0 1 0 3.565c-.29.554-.799 1.049-1.553 1.783l-.104.1l-2.203 2.146l-.034.033c-.18.175-.32.311-.461.417a2.74 2.74 0 0 1-3.27 0a5 5 0 0 1-.46-.417l-.035-.033l-.034-.034c-.18-.175-.32-.311-.429-.45a2.606 2.606 0 0 1 0-3.236c.11-.139.25-.275.429-.45l.034-.034l1.699-1.653a.75.75 0 0 1 1.046 1.075l-1.698 1.653c-.23.225-.292.287-.332.337a1.106 1.106 0 0 0 0 1.38c.04.05.101.113.332.337c.23.224.295.284.347.323a1.24 1.24 0 0 0 1.473 0c.052-.039.117-.1.347-.323l2.203-2.145c.897-.874 1.21-1.191 1.374-1.504a2.34 2.34 0 0 0 0-2.174c-.164-.313-.477-.63-1.374-1.504c-.895-.872-1.224-1.179-1.55-1.34a2.57 2.57 0 0 0-2.28 0c-.326.161-.655.468-1.55 1.34L7.99 10.535c-.503.49-.681.668-.797.83a2.34 2.34 0 0 0 0 2.74c.116.162.294.34.797.83a.75.75 0 1 1-1.046 1.075l-.058-.056c-.424-.413-.709-.69-.913-.975a3.84 3.84 0 0 1 0-4.487c.204-.285.489-.562.913-.975l.058-.056l2.238-2.179l.1-.098c.757-.737 1.264-1.231 1.83-1.511" clip-rule="evenodd"></svg:path>`,
})
export class SolarPaperclipRoundedBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarParagraphSpacingBoldIcon],svg[solar-paragraph-spacing-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.25 3A.75.75 0 0 1 4 2.25h16a.75.75 0 0 1 0 1.5H4A.75.75 0 0 1 3.25 3m0 18a.75.75 0 0 1 .75-.75h16a.75.75 0 0 1 0 1.5H4a.75.75 0 0 1-.75-.75m9.28-16.03a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 0 0 1.06 1.06l1.72-1.72v9.38l-1.72-1.72a.75.75 0 0 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06l-1.72 1.72V7.31l1.72 1.72a.75.75 0 1 0 1.06-1.06z"></svg:path>`,
})
export class SolarParagraphSpacingBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPassportBoldIcon],svg[solar-passport-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5a1 1 0 0 0-.591-.913c.144-.113.318-.19.51-.218l10.798-1.543A2 2 0 0 1 18 4.306v.82A4 4 0 0 0 17 5zm4.75 8a2.25 2.25 0 1 1 4.5 0a2.25 2.25 0 0 1-4.5 0"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M18 6.17c1.165.413 2 1.524 2 2.83v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V5a1 1 0 0 0 1 1h12c.35 0 .687.06 1 .17m-6 3.08a3.75 3.75 0 1 0 0 7.5a3.75 3.75 0 0 0 0-7.5m-2 9a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"></svg:path>`,
})
export class SolarPassportBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPassportMinimalisticBoldIcon],svg[solar-passport-minimalistic-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5a1 1 0 0 0-.591-.913c.144-.113.318-.19.51-.218l10.798-1.543A2 2 0 0 1 18 4.306v.82A4 4 0 0 0 17 5zm4.75 9a2.25 2.25 0 1 1 4.5 0a2.25 2.25 0 0 1-4.5 0"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M18 6.17c1.165.413 2 1.524 2 2.83v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V5a1 1 0 0 0 1 1h12c.35 0 .687.06 1 .17m-6 4.08a3.75 3.75 0 1 0 0 7.5a3.75 3.75 0 0 0 0-7.5" clip-rule="evenodd"></svg:path>`,
})
export class SolarPassportMinimalisticBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPasswordBoldIcon],svg[solar-password-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.172 5.172C2 6.343 2 8.229 2 12s0 5.657 1.172 6.828S6.229 20 10 20h4c3.771 0 5.657 0 6.828-1.172S22 15.771 22 12s0-5.657-1.172-6.828S17.771 4 14 4h-4C6.229 4 4.343 4 3.172 5.172M12.75 10a.75.75 0 0 0-1.5 0v.701l-.607-.35a.75.75 0 0 0-.75 1.298l.607.35l-.607.351a.75.75 0 1 0 .75 1.3l.607-.351V14a.75.75 0 0 0 1.5 0v-.7l.607.35a.75.75 0 0 0 .75-1.3L13.5 12l.607-.35a.75.75 0 0 0-.75-1.3l-.607.35zm-6.017-.75a.75.75 0 0 1 .75.75v.7l.606-.35a.75.75 0 0 1 .75 1.3l-.607.35l.607.35a.75.75 0 1 1-.75 1.3l-.606-.35v.7a.75.75 0 0 1-1.5 0v-.701l-.608.35a.75.75 0 0 1-.75-1.298L5.232 12l-.607-.35a.75.75 0 1 1 .75-1.3l.608.351V10a.75.75 0 0 1 .75-.75m11.285.75a.75.75 0 0 0-1.5 0v.701l-.607-.35a.75.75 0 0 0-.75 1.298l.607.35l-.608.351a.75.75 0 0 0 .75 1.3l.608-.351V14a.75.75 0 0 0 1.5 0v-.7l.607.35a.75.75 0 0 0 .75-1.3l-.607-.35l.607-.35a.75.75 0 0 0-.75-1.3l-.607.35z" clip-rule="evenodd"></svg:path>`,
})
export class SolarPasswordBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPasswordMinimalisticBoldIcon],svg[solar-password-minimalistic-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.172 5.172C2 6.343 2 8.229 2 12s0 5.657 1.172 6.828S6.229 20 10 20h4c3.771 0 5.657 0 6.828-1.172S22 15.771 22 12s0-5.657-1.172-6.828S17.771 4 14 4h-4C6.229 4 4.343 4 3.172 5.172M8 13a1 1 0 1 0 0-2a1 1 0 0 0 0 2m5-1a1 1 0 1 1-2 0a1 1 0 0 1 2 0m3 1a1 1 0 1 0 0-2a1 1 0 0 0 0 2" clip-rule="evenodd"></svg:path>`,
})
export class SolarPasswordMinimalisticBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPasswordMinimalisticInputBoldIcon],svg[solar-password-minimalistic-input-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.75 2a.75.75 0 0 0-1.5 0v20a.75.75 0 0 0 1.5 0v-2.006c2.636-.027 4.104-.191 5.078-1.166C22 17.657 22 15.771 22 12s0-5.657-1.172-6.828c-.974-.975-2.442-1.139-5.078-1.166z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M3.172 18.828C4.343 20 6.229 20 10 20h3V4h-3C6.229 4 4.343 4 3.172 5.172S2 8.229 2 12s0 5.657 1.172 6.828M13 12a1 1 0 1 0-2 0a1 1 0 0 0 2 0m-4 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0" clip-rule="evenodd"></svg:path>`,
})
export class SolarPasswordMinimalisticInputBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPauseBoldIcon],svg[solar-pause-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 6c0-1.886 0-2.828.586-3.414S4.114 2 6 2s2.828 0 3.414.586S10 4.114 10 6v12c0 1.886 0 2.828-.586 3.414S7.886 22 6 22s-2.828 0-3.414-.586S2 19.886 2 18zm12 0c0-1.886 0-2.828.586-3.414S16.114 2 18 2s2.828 0 3.414.586S22 4.114 22 6v12c0 1.886 0 2.828-.586 3.414S19.886 22 18 22s-2.828 0-3.414-.586S14 19.886 14 18z"></svg:path>`,
})
export class SolarPauseBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPauseCircleBoldIcon],svg[solar-pause-circle-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10M8.076 8.617C8 8.801 8 9.034 8 9.5v5c0 .466 0 .699.076.883a1 1 0 0 0 .541.54c.184.077.417.077.883.077s.699 0 .883-.076a1 1 0 0 0 .54-.541c.077-.184.077-.417.077-.883v-5c0-.466 0-.699-.076-.883a1 1 0 0 0-.541-.54C10.199 8 9.966 8 9.5 8s-.699 0-.883.076a1 1 0 0 0-.54.541m5 0C13 8.801 13 9.034 13 9.5v5c0 .466 0 .699.076.883a1 1 0 0 0 .541.54c.184.077.417.077.883.077s.699 0 .883-.076a1 1 0 0 0 .54-.541c.077-.184.077-.417.077-.883v-5c0-.466 0-.699-.076-.883a1 1 0 0 0-.541-.54C15.199 8 14.966 8 14.5 8s-.699 0-.883.076a1 1 0 0 0-.54.541" clip-rule="evenodd"></svg:path>`,
})
export class SolarPauseCircleBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPawBoldIcon],svg[solar-paw-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.57 15.376c1.586-3.228 2.38-4.842 3.52-5.227a2.85 2.85 0 0 1 1.82 0c1.14.385 1.934 1.999 3.52 5.227l.878 1.79c.41.833.614 1.25.663 1.534c.201 1.179-.67 2.265-1.846 2.3c-.283.008-.725-.113-1.61-.356a17 17 0 0 0-1.01-.259a7.6 7.6 0 0 0-3.01 0c-.252.051-.505.12-1.01.26c-.885.242-1.327.363-1.61.355c-1.175-.035-2.047-1.121-1.846-2.3c.048-.284.253-.7.663-1.535zM6.145 5.527c.412 1.631 1.576 2.717 2.6 2.426c1.025-.292 1.522-1.85 1.11-3.48c-.412-1.631-1.576-2.717-2.6-2.426c-1.025.292-1.522 1.85-1.11 3.48m11.71 0c-.412 1.631-1.576 2.717-2.6 2.426c-1.025-.292-1.522-1.85-1.11-3.48c.412-1.631 1.576-2.717 2.6-2.426c1.025.292 1.522 1.85 1.11 3.48m-15.653 6.77c.45 1.205 1.508 1.937 2.363 1.635s1.183-1.524.733-2.73c-.45-1.204-1.508-1.936-2.363-1.634s-1.183 1.524-.733 2.73m19.596-.001c-.45 1.205-1.508 1.937-2.363 1.635s-1.183-1.524-.733-2.73c.45-1.204 1.508-1.936 2.363-1.634s1.183 1.524.733 2.73"></svg:path>`,
})
export class SolarPawBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPen2BoldIcon],svg[solar-pen-2-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.25 22a.75.75 0 0 1 .75-.75h16a.75.75 0 0 1 0 1.5H4a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="m11.52 14.929l5.917-5.917a8.2 8.2 0 0 1-2.661-1.787a8.2 8.2 0 0 1-1.788-2.662L7.07 10.48c-.462.462-.693.692-.891.947a5.2 5.2 0 0 0-.599.969c-.139.291-.242.601-.449 1.22l-1.088 3.267a.848.848 0 0 0 1.073 1.073l3.266-1.088c.62-.207.93-.31 1.221-.45q.518-.246.969-.598c.255-.199.485-.43.947-.891m7.56-7.559a3.146 3.146 0 0 0-4.45-4.449l-.71.71l.031.09c.26.749.751 1.732 1.674 2.655A7 7 0 0 0 18.37 8.08z"></svg:path>`,
})
export class SolarPen2BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPenBoldIcon],svg[solar-pen-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11.4 18.161l7.396-7.396a10.3 10.3 0 0 1-3.326-2.234a10.3 10.3 0 0 1-2.235-3.327L5.839 12.6c-.577.577-.866.866-1.114 1.184a6.6 6.6 0 0 0-.749 1.211c-.173.364-.302.752-.56 1.526l-1.362 4.083a1.06 1.06 0 0 0 1.342 1.342l4.083-1.362c.775-.258 1.162-.387 1.526-.56q.647-.308 1.211-.749c.318-.248.607-.537 1.184-1.114m9.448-9.448a3.932 3.932 0 0 0-5.561-5.561l-.887.887l.038.111a8.75 8.75 0 0 0 2.092 3.32a8.75 8.75 0 0 0 3.431 2.13z"></svg:path>`,
})
export class SolarPenBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPenNewRoundBoldIcon],svg[solar-pen-new-round-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.194 2.806a2.753 2.753 0 0 1 0 3.893l-.496.496a5 5 0 0 1-.533-.151a5.2 5.2 0 0 1-1.968-1.241a5.2 5.2 0 0 1-1.241-1.968a5 5 0 0 1-.15-.533l.495-.496a2.753 2.753 0 0 1 3.893 0M14.58 13.313c-.404.404-.606.606-.829.78a4.6 4.6 0 0 1-.848.524c-.255.121-.526.211-1.068.392l-2.858.953a.742.742 0 0 1-.939-.94l.953-2.857c.18-.542.27-.813.392-1.068q.217-.453.524-.848c.174-.223.376-.425.78-.83l4.916-4.915a6.7 6.7 0 0 0 1.533 2.36a6.7 6.7 0 0 0 2.36 1.533z"></svg:path><svg:path fill="currentColor" d="M12 22c5.523 0 10-4.477 10-10a10 10 0 0 0-.591-3.395l-5.823 5.823c-.351.352-.615.616-.912.847a6 6 0 0 1-1.125.696c-.34.162-.694.28-1.166.437l-2.932.977a2.242 2.242 0 0 1-2.836-2.836l.977-2.932c.157-.472.275-.826.437-1.166q.287-.6.696-1.125c.231-.297.495-.56.847-.912l5.823-5.823A10 10 0 0 0 12 2C6.477 2 2 6.477 2 12s4.477 10 10 10"></svg:path>`,
})
export class SolarPenNewRoundBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPenNewSquareBoldIcon],svg[solar-pen-new-square-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.194 2.806a2.753 2.753 0 0 1 0 3.893l-.496.496a5 5 0 0 1-.533-.151a5.2 5.2 0 0 1-1.968-1.241a5.2 5.2 0 0 1-1.241-1.968a5 5 0 0 1-.15-.533l.495-.496a2.753 2.753 0 0 1 3.893 0M14.58 13.313c-.404.404-.606.606-.829.78a4.6 4.6 0 0 1-.848.524c-.255.121-.526.211-1.068.392l-2.858.953a.742.742 0 0 1-.939-.94l.953-2.857c.18-.542.27-.813.392-1.068q.217-.453.524-.848c.174-.223.376-.425.78-.83l4.916-4.915a6.7 6.7 0 0 0 1.533 2.36a6.7 6.7 0 0 0 2.36 1.533z"></svg:path><svg:path fill="currentColor" d="M20.536 20.536C22 19.07 22 16.714 22 12c0-1.548 0-2.842-.052-3.934l-6.362 6.362c-.351.352-.615.616-.912.847a6 6 0 0 1-1.125.696c-.34.162-.694.28-1.166.437l-2.932.977a2.242 2.242 0 0 1-2.836-2.836l.977-2.932c.157-.472.275-.826.437-1.166q.287-.6.696-1.125c.231-.297.495-.56.847-.912l6.362-6.362C14.842 2 13.548 2 12 2C7.286 2 4.929 2 3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465"></svg:path>`,
})
export class SolarPenNewSquareBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPeopleNearbyBoldIcon],svg[solar-people-nearby-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.25 4a2.75 2.75 0 1 1 5.5 0a2.75 2.75 0 0 1-5.5 0" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="m8.223 11.574l-2.175-.725a1.532 1.532 0 0 1 .805-2.952l1.898.407l.21.044a15 15 0 0 0 6.288-.044l1.897-.407a1.532 1.532 0 0 1 .806 2.952l-2.175.725c-.263.088-.394.132-.493.193a1 1 0 0 0-.466.986c.016.115.066.244.165.503l1.247 3.242a1.473 1.473 0 0 1-2.654 1.26L12 15l-1.576 2.757a1.473 1.473 0 0 1-2.654-1.26l1.247-3.241c.1-.259.149-.388.165-.503a1 1 0 0 0-.466-.986c-.099-.061-.23-.105-.493-.193"></svg:path><svg:path fill="currentColor" d="M12 22c5.523 0 10-2.015 10-4.5c0-1.722-2.15-3.218-5.306-3.975l.936 2.434c.749 1.948-.688 4.04-2.775 4.04a2.97 2.97 0 0 1-2.581-1.497l-.274-.48l-.274.48A2.97 2.97 0 0 1 9.147 20c-2.087 0-3.525-2.093-2.776-4.041l.936-2.434C4.149 14.282 2 15.778 2 17.5C2 19.985 6.477 22 12 22"></svg:path>`,
})
export class SolarPeopleNearbyBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPerfumeBoldIcon],svg[solar-perfume-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.4 12.15C3.45 9.16 6.455 7 10 7c3.957 0 7.243 2.691 7.886 6.226c-.655-.276-1.505-.505-2.365-.648c-1.735-.288-3.06.312-4.195.83l-.011.005c-1.154.527-2.111.964-3.37.822c-1.003-.113-1.906-.43-2.754-.806c-.384-.17-.749-.348-1.11-.525l-.121-.059a19 19 0 0 0-1.179-.54z"></svg:path><svg:path fill="currentColor" d="M2.053 13.628a7 7 0 0 0-.053.867c0 1.915.766 3.662 2.028 4.987c.45.473.675.709 1.618 1.114C6.59 21 7.24 21 8.542 21h2.916c1.302 0 1.952 0 2.896-.404c.943-.405 1.168-.641 1.619-1.114c1.158-1.217 1.898-2.79 2.012-4.52l-.349-.194c-.471-.262-1.354-.543-2.361-.71c-1.239-.206-2.184.193-3.326.715l-.11.05c-1.094.5-2.386 1.092-4.062.903c-1.215-.137-2.275-.519-3.194-.926c-.41-.182-.8-.372-1.16-.548l-.12-.059a18 18 0 0 0-1.084-.498zM12.56 2.44c.354.353.423.88.437 1.81h1.323a5.75 5.75 0 0 1 2.571.607l.836.418c.681-.549 1.8-.587 2.773-.025c1.196.69 1.718 2.025 1.165 2.982c-.552.956-1.97 1.172-3.165.482c-.844-.488-1.353-1.297-1.384-2.067l-.896-.448a4.25 4.25 0 0 0-1.9-.449H13v.734A9.5 9.5 0 0 0 10 6c-1.05 0-2.06.17-3 .484V5.75h.107c.097.001.21.002.306 0c.139-.005.327-.018.516-.076c.202-.063.437-.188.608-.435c.166-.238.213-.505.213-.739s-.047-.501-.213-.74a1.14 1.14 0 0 0-.609-.434a2 2 0 0 0-.516-.075a8 8 0 0 0-.304-.001H7.07c.059-.354.168-.61.368-.81C7.88 2 8.586 2 10 2s2.121 0 2.56.44"></svg:path>`,
})
export class SolarPerfumeBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPhoneBoldIcon],svg[solar-phone-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16.556 12.906l-.455.453s-1.083 1.076-4.038-1.862s-1.872-4.014-1.872-4.014l.286-.286c.707-.702.774-1.83.157-2.654L9.374 2.86C8.61 1.84 7.135 1.705 6.26 2.575l-1.57 1.56c-.433.432-.723.99-.688 1.61c.09 1.587.808 5 4.812 8.982c4.247 4.222 8.232 4.39 9.861 4.238c.516-.048.964-.31 1.325-.67l1.42-1.412c.96-.953.69-2.588-.538-3.255l-1.91-1.039c-.806-.437-1.787-.309-2.417.317"></svg:path>`,
})
export class SolarPhoneBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPhoneCallingBoldIcon],svg[solar-phone-calling-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15.556 14.548l-.455.48s-1.083 1.139-4.038-1.972s-1.872-4.25-1.872-4.25l.287-.303c.706-.744.773-1.938.156-2.81L8.374 3.91C7.61 2.83 6.135 2.688 5.26 3.609L3.691 5.26c-.433.457-.723 1.048-.688 1.705c.09 1.68.808 5.293 4.812 9.51c4.247 4.47 8.232 4.648 9.861 4.487c.516-.05.964-.329 1.325-.709l1.42-1.496c.96-1.01.69-2.74-.538-3.446l-1.91-1.1c-.806-.463-1.787-.327-2.417.336M13.26 1.88a.75.75 0 0 1 .861-.62c.025.005.107.02.15.03q.129.027.352.09c.297.087.712.23 1.21.458c.996.457 2.321 1.256 3.697 2.631c1.376 1.376 2.175 2.702 2.632 3.698c.228.498.37.912.457 1.21a6 6 0 0 1 .113.454l.005.031a.765.765 0 0 1-.617.878a.75.75 0 0 1-.86-.617a3 3 0 0 0-.081-.327a7.4 7.4 0 0 0-.38-1.004c-.39-.85-1.092-2.024-2.33-3.262s-2.411-1.939-3.262-2.329a7.4 7.4 0 0 0-1.003-.38a6 6 0 0 0-.318-.08a.76.76 0 0 1-.626-.861"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M13.486 5.33a.75.75 0 0 1 .927-.516l-.206.721l.206-.72h.003l.003.001l.008.002l.02.006l.056.02q.067.023.177.07c.146.062.345.158.59.303c.489.29 1.157.77 1.942 1.556c.785.785 1.266 1.453 1.556 1.942c.145.245.241.444.303.59a3 3 0 0 1 .09.233l.005.02l.003.008v.003l.001.001s0 .002-.72.208l.72-.206a.75.75 0 0 1-1.439.422l-.003-.01l-.035-.088a4 4 0 0 0-.216-.417c-.223-.376-.626-.946-1.326-1.646s-1.269-1.102-1.646-1.325a4 4 0 0 0-.504-.25l-.01-.004a.75.75 0 0 1-.505-.925" clip-rule="evenodd"></svg:path>`,
})
export class SolarPhoneCallingBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPhoneCallingRoundedBoldIcon],svg[solar-phone-calling-rounded-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10.038 5.316l.649 1.163c.585 1.05.35 2.426-.572 3.349c0 0-1.12 1.119.91 3.148c2.027 2.027 3.146.91 3.147.91c.923-.923 2.3-1.158 3.349-.573l1.163.65c1.585.884 1.772 3.106.379 4.5c-.837.836-1.863 1.488-2.996 1.53c-1.908.073-5.149-.41-8.4-3.66c-3.25-3.251-3.733-6.492-3.66-8.4c.043-1.133.694-2.159 1.53-2.996c1.394-1.393 3.616-1.206 4.5.38M13.26 1.88a.75.75 0 0 1 .861-.62c.025.005.107.02.15.03q.129.027.352.09c.297.087.712.23 1.21.458c.996.457 2.321 1.256 3.697 2.631c1.376 1.376 2.175 2.702 2.632 3.698c.228.498.37.912.457 1.21a6 6 0 0 1 .113.454l.005.031a.765.765 0 0 1-.617.878a.75.75 0 0 1-.86-.617a3 3 0 0 0-.081-.327a7.4 7.4 0 0 0-.38-1.004c-.39-.85-1.092-2.024-2.33-3.262s-2.411-1.939-3.262-2.329a7.4 7.4 0 0 0-1.003-.38a6 6 0 0 0-.318-.08a.76.76 0 0 1-.626-.861"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M13.486 5.33a.75.75 0 0 1 .927-.516l-.206.721l.206-.72h.003l.003.001l.008.002l.02.006l.056.02q.067.023.177.07c.146.062.345.158.59.303c.489.29 1.157.77 1.942 1.556c.785.785 1.266 1.453 1.556 1.942c.145.245.241.444.303.59a3 3 0 0 1 .09.233l.005.02l.003.008v.003l.001.001s0 .002-.72.208l.72-.206a.75.75 0 0 1-1.439.422l-.003-.01l-.035-.088a4 4 0 0 0-.216-.417c-.223-.376-.626-.946-1.326-1.646s-1.269-1.102-1.646-1.325a4 4 0 0 0-.504-.25l-.01-.004a.75.75 0 0 1-.505-.925" clip-rule="evenodd"></svg:path>`,
})
export class SolarPhoneCallingRoundedBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPhoneRoundedBoldIcon],svg[solar-phone-rounded-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10.038 5.316l.649 1.163c.585 1.05.35 2.426-.572 3.349c0 0-1.12 1.119.91 3.148c2.027 2.027 3.146.91 3.147.91c.923-.923 2.3-1.158 3.349-.573l1.163.65c1.585.884 1.772 3.106.379 4.5c-.837.836-1.863 1.488-2.996 1.53c-1.908.073-5.149-.41-8.4-3.66c-3.25-3.251-3.733-6.492-3.66-8.4c.043-1.133.694-2.159 1.53-2.996c1.394-1.393 3.616-1.206 4.5.38"></svg:path>`,
})
export class SolarPhoneRoundedBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPieChart2BoldIcon],svg[solar-pie-chart-2-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.222 4.601a9.5 9.5 0 0 1 1.395-.771c1.372-.615 2.058-.922 2.97-.33c.913.59.913 1.56.913 3.5v1.5c0 1.886 0 2.828.586 3.414s1.528.586 3.414.586H17c1.94 0 2.91 0 3.5.912c.592.913.285 1.599-.33 2.97a9.5 9.5 0 0 1-10.523 5.435A9.5 9.5 0 0 1 6.222 4.601"></svg:path><svg:path fill="currentColor" d="M21.446 7.069a8.03 8.03 0 0 0-4.515-4.515C15.389 1.947 14 3.344 14 5v4a1 1 0 0 0 1 1h4c1.657 0 3.053-1.39 2.446-2.931"></svg:path>`,
})
export class SolarPieChart2BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPieChart3BoldIcon],svg[solar-pie-chart-3-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.444 3.685a10 10 0 0 1 1.662-.896c1.403-.593 2.104-.89 3-.296C12 3.086 12 4.057 12 6v2c0 1.886 0 2.828.586 3.414S14.114 12 16 12h2c1.942 0 2.914 0 3.507.895s.297 1.596-.296 3a10 10 0 0 1-11.162 5.913A10 10 0 0 1 6.444 3.685"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M13.774 2.128a.75.75 0 0 1 .913-.54a10.77 10.77 0 0 1 7.725 7.725a.75.75 0 0 1-1.453.374a9.27 9.27 0 0 0-6.646-6.646a.75.75 0 0 1-.54-.913" clip-rule="evenodd"></svg:path>`,
})
export class SolarPieChart3BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPieChartBoldIcon],svg[solar-pie-chart-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.163 3.775a.75.75 0 0 1-.49.94A8.465 8.465 0 0 0 2.75 12.79a8.46 8.46 0 0 0 8.46 8.461a8.465 8.465 0 0 0 8.075-5.922a.75.75 0 1 1 1.43.45c-1.268 4.04-5.043 6.972-9.504 6.972c-5.501 0-9.961-4.46-9.961-9.96c0-4.462 2.932-8.236 6.973-9.506a.75.75 0 0 1 .94.491" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M21.913 9.947a11.35 11.35 0 0 0-7.86-7.86C12.409 1.628 11 3.054 11 4.76v6.694c0 .853.692 1.545 1.545 1.545h6.694c1.707 0 3.133-1.41 2.674-3.053"></svg:path>`,
})
export class SolarPieChartBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPillBoldIcon],svg[solar-pill-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.99 3.99a6.796 6.796 0 0 0 0 9.612l2.564 2.563l.495-.095h.001l.014-.003l.074-.018q.103-.024.315-.091c.282-.09.697-.243 1.21-.49c1.024-.493 2.438-1.364 3.939-2.866c1.501-1.501 2.372-2.915 2.866-3.939c.247-.512.4-.928.49-1.21a5 5 0 0 0 .109-.389l.003-.014l.095-.496l-2.563-2.563a6.796 6.796 0 0 0-9.611 0m13.428 3.816l-.032.103c-.11.343-.288.824-.568 1.404c-.56 1.162-1.525 2.718-3.156 4.349s-3.187 2.597-4.349 3.157a11 11 0 0 1-1.507.599l2.591 2.59a6.796 6.796 0 1 0 9.611-9.61z"></svg:path>`,
})
export class SolarPillBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPills2BoldIcon],svg[solar-pills-2-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.026 9.965a5 5 0 0 0-6.992-6.992zm-1.061 1.061a5 5 0 0 1-6.991-6.992zm10.979 5.224a5 5 0 0 0-9.887 0zm0 1.5h-9.888a5 5 0 0 0 9.888 0"></svg:path>`,
})
export class SolarPills2BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPills3BoldIcon],svg[solar-pills-3-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.682 12.682a4.5 4.5 0 0 1-7.62-2.432h8.875a4.5 4.5 0 0 1-1.255 2.432m1.255-3.932H2.063a4.5 4.5 0 0 1 8.875 0m3.819-1.629A3 3 0 1 0 19 2.88a3 3 0 0 0-4.243 4.242m6.148 4.973a3.74 3.74 0 0 1 0 5.286l-1.027 1.027v-.003l-.732-.14l-.028-.008a2 2 0 0 1-.143-.04a4.5 4.5 0 0 1-.583-.237c-.5-.24-1.2-.671-1.95-1.421s-1.181-1.451-1.422-1.951a5 5 0 0 1-.236-.583a2 2 0 0 1-.048-.17l-.141-.733h-.003l1.027-1.027a3.74 3.74 0 0 1 5.286 0m-7.579 2.293l.03.094c.06.193.16.459.313.777c.307.637.832 1.48 1.712 2.36s1.723 1.405 2.36 1.712a6 6 0 0 0 .871.343l-1.231 1.231a3.738 3.738 0 0 1-5.286-5.286z"></svg:path>`,
})
export class SolarPills3BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPillsBoldIcon],svg[solar-pills-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.592 11.282a5.437 5.437 0 1 1 7.69-7.69l1.922 1.923l-.096.495l-.001.009l-.013.054a4 4 0 0 1-.07.244a7 7 0 0 1-.385.948c-.388.806-1.076 1.923-2.264 3.11c-1.188 1.189-2.304 1.876-3.11 2.265c-.403.194-.73.313-.948.383a4 4 0 0 1-.298.084l-.009.002l-.495.095zM13.53 4.47a.75.75 0 1 0-1.06 1.06l1.5 1.5a.75.75 0 1 0 1.06-1.06z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="m18.452 6.774l.003-.008l1.953 1.952a5.437 5.437 0 1 1-7.69 7.69l-1.952-1.953l.007-.003a9 9 0 0 0 1.143-.461c.943-.455 2.202-1.236 3.52-2.554c1.318-1.319 2.1-2.577 2.554-3.52c.227-.471.373-.863.462-1.143M5.286 10.648a6 6 0 1 0 8.067 8.067a7 7 0 0 1-1.695-1.247l-5.126-5.126a7 7 0 0 1-1.246-1.694"></svg:path>`,
})
export class SolarPillsBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPinBoldIcon],svg[solar-pin-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.184 7.805l-2.965-2.967c-2.027-2.03-3.04-3.043-4.129-2.803s-1.581 1.587-2.568 4.28l-.668 1.823c-.263.718-.395 1.077-.632 1.355a2 2 0 0 1-.36.332c-.296.213-.664.314-1.4.517c-1.66.458-2.491.687-2.804 1.23a1.53 1.53 0 0 0-.204.773c.004.627.613 1.236 1.83 2.455L6.7 16.216l-4.476 4.48a.764.764 0 0 0 1.08 1.08l4.475-4.48l1.466 1.468c1.226 1.226 1.839 1.84 2.47 1.84c.265 0 .526-.068.757-.2c.548-.313.778-1.149 1.239-2.822c.202-.735.303-1.102.515-1.399q.14-.194.322-.352c.275-.238.632-.372 1.345-.64l1.844-.693c2.664-1 3.996-1.501 4.23-2.586c.235-1.086-.77-2.093-2.783-4.107"></svg:path>`,
})
export class SolarPinBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPinCircleBoldIcon],svg[solar-pin-circle-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10m-7.89-3.581l1.482 1.484c1.006 1.006 1.509 1.51 1.392 2.053c-.118.543-.784.793-2.116 1.293l-.922.346c-.356.134-.535.201-.672.32q-.091.08-.161.177c-.106.148-.157.332-.258.7c-.23.836-.345 1.254-.62 1.41a.76.76 0 0 1-.378.1c-.315 0-.622-.307-1.234-.92l-.473-.473l-1.619 1.62a.75.75 0 0 1-1.062-1.059l1.62-1.622l-.446-.448c-.61-.61-.914-.914-.916-1.228c0-.135.035-.269.102-.386c.157-.271.572-.386 1.402-.615c.368-.101.552-.152.7-.259a1 1 0 0 0 .18-.166c.119-.138.185-.318.316-.677l.334-.911c.494-1.347.74-2.02 1.285-2.14s1.05.386 2.064 1.4" clip-rule="evenodd"></svg:path>`,
})
export class SolarPinCircleBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPinListBoldIcon],svg[solar-pin-list-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M22 8.377a.74.74 0 0 1-.744.731h-4.962a.74.74 0 0 1-.745-.731c0-.404.334-.732.745-.732h4.962c.41 0 .744.328.744.732m0 4.389a.74.74 0 0 1-.744.731h-3.97a.74.74 0 0 1-.744-.731c0-.404.333-.732.744-.732h3.97c.41 0 .744.328.744.732" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="m12.587 8.238l.364.357c1.518 1.492 2.278 2.239 2.277 3.047c0 .265-.055.526-.161.769c-.325.743-1.323 1.133-3.318 1.914l-.145.056c-.565.221-.848.332-1.076.51a2 2 0 0 0-.44.48c-.157.24-.24.529-.407 1.104c-.258.893-.386 1.34-.661 1.537a1 1 0 0 1-.71.181c-.338-.04-.672-.369-1.34-1.025l-1.026-1.01l-2.673 2.628a.754.754 0 0 1-1.053 0a.723.723 0 0 1 0-1.035l2.663-2.637l-1.017-1c-.667-.655-1.001-.983-1.043-1.316a.96.96 0 0 1 .184-.697c.202-.27.656-.397 1.564-.65c.586-.163.879-.245 1.124-.399q.28-.176.488-.433c.181-.224.294-.502.519-1.058l.057-.142c.794-1.96 1.191-2.941 1.948-3.26c.247-.105.513-.159.781-.159c.824 0 1.583.745 3.101 2.238"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M22 17.155a.74.74 0 0 1-.744.731h-8.932a.74.74 0 0 1-.744-.731c0-.404.333-.732.744-.732h8.932c.41 0 .744.328.744.732" clip-rule="evenodd"></svg:path>`,
})
export class SolarPinListBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPip2BoldIcon],svg[solar-pip-2-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.955 5.061C2 6.375 2 8.251 2 12s0 5.625.955 6.939a5 5 0 0 0 1.106 1.106C5.375 21 7.251 21 11 21h2c3.75 0 5.625 0 6.939-.955a5 5 0 0 0 1.106-1.106C22 17.625 22 15.749 22 12s0-5.625-.955-6.939a5 5 0 0 0-1.106-1.106C18.625 3 16.749 3 13 3h-2c-3.75 0-5.625 0-6.939.955A5 5 0 0 0 2.955 5.06m8.219 7.38C11 12.868 11 13.412 11 14.5s0 1.63.174 2.06a2.3 2.3 0 0 0 1.237 1.262c.42.178.953.178 2.018.178h1.142c1.065 0 1.598 0 2.018-.178a2.3 2.3 0 0 0 1.237-1.262c.174-.43.174-.973.174-2.06s0-1.63-.174-2.06a2.3 2.3 0 0 0-1.237-1.262C17.169 11 16.636 11 15.571 11H14.43c-1.065 0-1.598 0-2.018.178a2.3 2.3 0 0 0-1.237 1.262" clip-rule="evenodd"></svg:path>`,
})
export class SolarPip2BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPipBoldIcon],svg[solar-pip-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 17c0-1.886 0-2.828.586-3.414S15.114 13 17 13h1c1.886 0 2.828 0 3.414.586S22 15.114 22 17s0 2.828-.586 3.414S19.886 21 18 21h-1c-1.886 0-2.828 0-3.414-.586S13 18.886 13 17"></svg:path><svg:path fill="currentColor" d="M14 3h-4C6.229 3 4.343 3 3.172 4.172S2 7.229 2 11v2c0 3.771 0 5.657 1.172 6.828S6.229 21 10 21c.466 0 .699 0 .883-.076a1 1 0 0 0 .54-.541c.077-.184.077-.417.077-.883v-2c0-2.828 0-4.243.879-5.121c.878-.879 2.293-.879 5.121-.879H20c.949 0 1.423 0 1.717-.297c.293-.298.287-.766.275-1.703c-.034-2.634-.215-4.38-1.164-5.328C19.657 3 17.771 3 14 3"></svg:path>`,
})
export class SolarPipBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPipetteBoldIcon],svg[solar-pipette-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10.241 5.753l8.006 8.006a1.544 1.544 0 0 0 2.183-2.184l-1.091-1.091l1.455-1.456a4.117 4.117 0 1 0-5.822-5.822L13.516 4.66l-1.091-1.09a1.544 1.544 0 1 0-2.184 2.183m.031 2.152L4.71 13.47c-.456.456-.684.684-.829.957a2 2 0 0 0-.203.58c-.058.304-.022.624.049 1.265l.053.476c.02.175.029.262.031.346a2.06 2.06 0 0 1-.488 1.392c-.054.064-.117.126-.241.25l-.629.63a1.544 1.544 0 0 0 2.184 2.183l.628-.629c.125-.124.187-.187.25-.24c.389-.33.885-.504 1.393-.49c.084.003.171.013.346.032l.476.053c.64.071.961.107 1.265.05a2 2 0 0 0 .58-.204c.273-.145.501-.373.957-.829l1.439-1.439L10.116 16a.75.75 0 1 1 1.06-1.06l1.854 1.853l.94-.94L12.116 14a.75.75 0 0 1 1.06-1.06l1.854 1.853l1.065-1.064z"></svg:path>`,
})
export class SolarPipetteBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPlaaylistMinimalisticBoldIcon],svg[solar-plaaylist-minimalistic-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.25 6A.75.75 0 0 1 3 5.25h17a.75.75 0 0 1 0 1.5H3A.75.75 0 0 1 2.25 6m0 5a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75m0 5a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M19.125 10.685c1.642.948 2.463 1.422 2.723 2.05c.203.49.203 1.04 0 1.53c-.26.628-1.081 1.102-2.723 2.05s-2.463 1.422-3.136 1.333a2 2 0 0 1-1.326-.765c-.413-.539-.413-1.487-.413-3.383s0-2.844.413-3.383a2 2 0 0 1 1.326-.765c.673-.089 1.494.385 3.136 1.333"></svg:path>`,
})
export class SolarPlaaylistMinimalisticBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPlain2BoldIcon],svg[solar-plain-2-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17.498 18.485l3.13-9.391c.791-2.373 1.331-3.994 1.37-5.115c.013-.377-.414-.503-.68-.236l-14.46 14.46c-.233.233-.177.626.14.716q.047.013.095.024c.5.123 1.153.034 2.46-.143l.07-.01c.369-.05.553-.075.73-.064c.32.02.63.124.898.303c.147.098.279.23.541.492l.252.252c1.51 1.51 2.265 2.265 3.066 2.226c.22-.011.438-.062.64-.151c.734-.324 1.072-1.337 1.747-3.363M14.906 3.372l-9.331 3.11c-2.082.694-3.123 1.041-3.439 1.804q-.112.271-.133.564c-.059.824.717 1.6 2.269 3.151l.283.283c.254.255.382.382.478.524c.19.28.297.606.31.944c.008.171-.019.35-.072.705c-.196 1.304-.294 1.956-.179 2.458l.013.052c.081.325.48.387.717.15L20.257 2.683c.267-.267.141-.694-.236-.68c-1.121.038-2.742.578-5.115 1.369"></svg:path>`,
})
export class SolarPlain2BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPlain3BoldIcon],svg[solar-plain-3-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m20.352 10.52l-1.716 5.15c-1.21 3.63-1.816 5.446-2.703 5.962c-.844.49-1.887.49-2.73 0c-.888-.516-1.493-2.331-2.703-5.962c-.195-.583-.292-.874-.455-1.118a2.2 2.2 0 0 0-.597-.597c-.244-.163-.535-.26-1.118-.454c-3.63-1.21-5.446-1.816-5.962-2.703a2.72 2.72 0 0 1 0-2.731C2.884 7.18 4.7 6.575 8.33 5.364l5.15-1.716c4.498-1.5 6.747-2.25 7.934-1.062s.438 3.436-1.062 7.935m-7.306.382a.75.75 0 0 1 .006-1.06l4.21-4.165a.75.75 0 1 1 1.055 1.067l-4.21 4.164a.75.75 0 0 1-1.061-.006" clip-rule="evenodd"></svg:path>`,
})
export class SolarPlain3BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPlainBoldIcon],svg[solar-plain-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m18.636 15.67l1.716-5.15c1.5-4.498 2.25-6.747 1.062-7.934s-3.436-.438-7.935 1.062L8.33 5.364C4.7 6.574 2.885 7.18 2.37 8.067a2.72 2.72 0 0 0 0 2.73c.515.888 2.33 1.493 5.96 2.704c.45.15.957.042 1.294-.291l5.506-5.455a.79.79 0 1 1 1.11 1.122l-5.416 5.366a1.4 1.4 0 0 0-.324 1.427c1.21 3.63 1.816 5.446 2.703 5.962a2.72 2.72 0 0 0 2.731 0c.887-.516 1.492-2.331 2.703-5.962"></svg:path>`,
})
export class SolarPlainBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPlanet2BoldIcon],svg[solar-planet-2-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 20a8 8 0 0 0 7.992-8.357q.384-.344.72-.682a.75.75 0 0 0-1.004-1.111a8 8 0 0 0-1.546-2.953q.449-.076.847-.113a.75.75 0 0 0-.138-1.494q-.637.06-1.345.2a.75.75 0 0 0-.472.309a8 8 0 0 0-13.013 7.024a.75.75 0 0 0-.73.193q-.503.505-.896.995a.75.75 0 1 0 1.172.937q.303-.38.707-.792a8 8 0 0 0 1.6 3.014a.75.75 0 0 0 .591 1.34a18 18 0 0 0 .666-.146A7.97 7.97 0 0 0 12 20m-4.849-1.636a8 8 0 0 1-1.256-1.194a.75.75 0 0 1 .3-.132c.996-.198 2.136-.53 3.36-.99a.75.75 0 0 1 .528 1.405c-1.03.387-2.018.693-2.932.91M19.708 9.85l-.06.054c-.687.692-1.568 1.43-2.61 2.171a.75.75 0 0 0 .871 1.222a24 24 0 0 0 2.083-1.654a8 8 0 0 0-.284-1.793m1.229-4.47a.75.75 0 1 0-.346 1.459c.394.093.546.232.602.322c.063.102.133.366-.157.948a.75.75 0 0 0 1.343.67c.378-.759.563-1.65.086-2.413c-.344-.55-.923-.843-1.528-.987M2.815 16.25a.75.75 0 0 0-1.43-.455c-.191.601-.211 1.262.15 1.84c.453.724 1.307 1.006 2.154 1.087a.75.75 0 1 0 .143-1.493c-.694-.066-.948-.267-1.025-.39c-.05-.08-.102-.244.008-.589m12.935-1.546a.75.75 0 1 0-.77-1.287a35 35 0 0 1-3.092 1.645a.75.75 0 0 0 .638 1.357a37 37 0 0 0 3.224-1.715" clip-rule="evenodd"></svg:path>`,
})
export class SolarPlanet2BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPlanet3BoldIcon],svg[solar-planet-3-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.775 14.118Q22 13.092 22 12a10 10 0 0 0-.525-3.206l-.527-.038h-.011l-.051-.003a10 10 0 0 0-1.096.043a13.4 13.4 0 0 0-3.047.67c-.263.09-.563.252-.958.485l-.248.148c-.322.192-.69.413-1.088.62c-1.03.539-2.323 1.031-4.012 1.031c-2.418 0-4.407-.804-5.78-1.596a12.4 12.4 0 0 1-1.6-1.096a9 9 0 0 1-.48-.415a10.1 10.1 0 0 0-.498 4.628l.385-.02h.011l.027-.001a9 9 0 0 1 .45-.006c.303.002.733.014 1.253.054c1.037.082 2.447.278 3.923.742c.45.142.899.374 1.327.606l.299.163c.346.19.697.383 1.087.57c.98.47 2.144.871 3.668.871c1.383 0 2.662-.344 3.802-.766c.571-.21 1.099-.438 1.591-.65l.018-.007c.475-.204.937-.403 1.343-.538z"></svg:path><svg:path fill="currentColor" d="M21.206 15.912q-.32.131-.711.3l-.01.005c-.487.21-1.045.45-1.654.674c-1.226.454-2.693.86-4.322.86c-1.813 0-3.203-.486-4.317-1.02a24 24 0 0 1-1.18-.617l-.272-.15c-.43-.232-.764-.399-1.062-.493a16.4 16.4 0 0 0-3.59-.677a16 16 0 0 0-1.453-.048l-.077.003h-.02l-.153.008C3.582 18.94 7.433 22 12 22c4.135 0 7.683-2.51 9.206-6.088M2.71 8.293l.285-.28zm.527-1.114l.297.302l.003.004l.019.018l.086.081c.079.072.2.18.36.31c.32.26.795.61 1.404.96c1.219.704 2.95 1.396 5.031 1.396c1.374 0 2.425-.394 3.317-.86c.355-.186.675-.377.993-.567l.275-.163c.392-.232.81-.468 1.235-.614a15 15 0 0 1 3.39-.743a11 11 0 0 1 1.156-.052A10 10 0 0 0 12 2a10 10 0 0 0-8.763 5.179m17.786.504L21 8.006z"></svg:path>`,
})
export class SolarPlanet3BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPlanet4BoldIcon],svg[solar-planet-4-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.846 15.572a8.04 8.04 0 0 0-.152-3.773l-.738-.045h-.008l-.039-.002l-.17-.002a9 9 0 0 0-.675.03c-.582.048-1.406.165-2.353.443c-.194.057-.419.161-.725.316l-.191.098c-.25.128-.541.277-.854.417c-.813.364-1.83.696-3.157.696c-1.893 0-3.453-.54-4.537-1.075a10 10 0 0 1-1.264-.743a7 7 0 0 1-.436-.328l-.027-.022l-.008-.008l-.003-.002l-.001-.001l.484-.557l-.485.556l-.102-.089a8.06 8.06 0 0 0-.305 3.784l.37-.015l.03.75l-.03-.75h.031a7 7 0 0 1 .365-.005c.243.002.588.01 1.003.037a16 16 0 0 1 3.086.498c.356.098.709.257 1.038.412l.23.11c.265.126.53.253.825.375a6.9 6.9 0 0 0 2.771.573c2.142 0 4.332-.864 5.32-1.407l.657-.361z"></svg:path><svg:path fill="currentColor" d="M17.202 17.486c-1.273.585-3.316 1.264-5.383 1.264a8.4 8.4 0 0 1-3.348-.688c-.333-.14-.643-.287-.912-.415l-.206-.099c-.329-.154-.576-.261-.794-.32a14.4 14.4 0 0 0-2.788-.45a15 15 0 0 0-1.224-.03l-.014.001h-.002l-.045.002a8.003 8.003 0 0 0 14.716.735M3.043 10.047l.449.392l.001.001l.013.01l.063.052q.088.07.27.2a9 9 0 0 0 1.073.628c.934.462 2.266.92 3.872.92c1.057 0 1.862-.26 2.544-.565c.273-.122.518-.247.764-.374l.216-.11c.306-.155.64-.317.98-.417a13.3 13.3 0 0 1 2.654-.498a10 10 0 0 1 1.013-.033l.062.002l.019.001h.01l-.046.748l.046-.747l.027.001A8 8 0 0 0 10 6a8 8 0 0 0-6.957 4.047"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M20.53 4.045a2 2 0 0 0-.306-.53c.326-.091.549-.097.606.003c.058.1-.058.29-.3.527M17.106 6.02c-.326.091-.548.097-.606-.003s.058-.29.3-.527a2 2 0 0 0 .306.53m0 0c.455-.126 1.113-.418 1.81-.82c.695-.402 1.277-.825 1.614-1.156a2 2 0 0 1-3.424 1.976m-.306-.53a2 2 0 0 1 3.424-1.977c-.455.127-1.113.419-1.809.82c-.696.403-1.278.826-1.615 1.157" clip-rule="evenodd"></svg:path>`,
})
export class SolarPlanet4BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPlanetBoldIcon],svg[solar-planet-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.992 11.643q.425-.38.789-.752c.754-.77 1.342-1.54 1.672-2.268c.324-.716.458-1.544.012-2.258c-.42-.67-1.185-.96-1.956-1.064c-.79-.107-1.75-.041-2.797.152l-.888.165a8 8 0 0 0-12.82 6.641l-.527.593c-.84.817-1.497 1.636-1.872 2.403c-.366.75-.54 1.627-.07 2.38c.433.691 1.232.979 2.032 1.074c.825.098 1.828.016 2.923-.201q.323-.064.66-.145a8 8 0 0 1-1.311-1.26c-.853.146-1.56.18-2.095.116c-.632-.075-.865-.264-.937-.38c-.063-.1-.132-.358.145-.925c.241-.494.688-1.092 1.342-1.758a8 8 0 0 0 1.545 2.947q.176-.03.36-.067c2.02-.4 4.613-1.351 7.28-2.772c2.665-1.42 4.848-3.012 6.227-4.42a8 8 0 0 0-1.545-2.947c.885-.151 1.61-.182 2.149-.11c.594.08.813.262.883.374c.06.095.126.33-.107.844c-.227.502-.683 1.129-1.377 1.836l-.003.003c.161.576.259 1.179.286 1.799"></svg:path><svg:path fill="currentColor" d="M12 20a8 8 0 0 0 7.992-8.357c-1.481 1.327-3.49 2.71-5.808 3.945c-2.492 1.328-4.96 2.281-7.033 2.775A7.97 7.97 0 0 0 12 20"></svg:path>`,
})
export class SolarPlanetBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPlateBoldIcon],svg[solar-plate-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.75 3a.75.75 0 0 0-1.5 0v2a.75.75 0 0 0 1.5 0z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M22.75 12.057c0 1.837 0 3.293-.153 4.432c-.158 1.172-.49 2.121-1.238 2.87c-.749.748-1.698 1.08-2.87 1.238c-1.14.153-2.595.153-4.433.153H9.944c-1.837 0-3.293 0-4.432-.153c-1.172-.158-2.121-.49-2.87-1.238c-.748-.749-1.08-1.698-1.238-2.87c-.153-1.14-.153-2.595-.153-4.433v-.926q.001-.575.008-1.096c.014-.975.05-1.81.145-2.523c.158-1.172.49-2.121 1.238-2.87c.749-.748 1.698-1.08 2.87-1.238c.716-.096 1.558-.132 2.541-.145l.697-.005a1 1 0 0 1 1.001.999V5a2.25 2.25 0 0 0 4.5 0v-.75c0-.552.448-1 1-.998c1.29.006 2.359.033 3.239.151c1.172.158 2.121.49 2.87 1.238c.748.749 1.08 1.698 1.238 2.87c.153 1.14.153 2.595.153 4.433zM8 9.75a.75.75 0 0 0 0 1.5h8a.75.75 0 0 0 0-1.5zm0 3.5a.75.75 0 0 0 0 1.5h5.5a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"></svg:path>`,
})
export class SolarPlateBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPlayBoldIcon],svg[solar-play-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.409 9.353a2.998 2.998 0 0 1 0 5.294L8.597 21.614C6.534 22.737 4 21.277 4 18.968V5.033c0-2.31 2.534-3.769 4.597-2.648z"></svg:path>`,
})
export class SolarPlayBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPlayCircleBoldIcon],svg[solar-play-circle-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10m-1.306-6.154l4.72-2.787c.781-.462.781-1.656 0-2.118l-4.72-2.787C9.934 7.706 9 8.29 9 9.214v5.573c0 .923.934 1.507 1.694 1.059" clip-rule="evenodd"></svg:path>`,
})
export class SolarPlayCircleBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPlayStreamBoldIcon],svg[solar-play-stream-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.467 4.392a.75.75 0 0 1-.001 1.06A9.22 9.22 0 0 0 2.75 12a9.22 9.22 0 0 0 2.775 6.606a.75.75 0 1 1-1.05 1.071A10.72 10.72 0 0 1 1.25 12c0-2.972 1.207-5.664 3.156-7.609a.75.75 0 0 1 1.06.001m13.15.072a.75.75 0 0 1 1.06.011A10.72 10.72 0 0 1 22.75 12c0 2.964-1.2 5.65-3.141 7.594a.75.75 0 1 1-1.062-1.06A9.22 9.22 0 0 0 21.25 12a9.22 9.22 0 0 0-2.644-6.475a.75.75 0 0 1 .01-1.06M8.308 7.488a.75.75 0 0 1-.035 1.06c-.949.888-1.524 2.102-1.524 3.434c0 1.348.589 2.575 1.558 3.466a.75.75 0 1 1-1.016 1.104c-1.252-1.151-2.042-2.77-2.042-4.57c0-1.779.771-3.38 2-4.53a.75.75 0 0 1 1.06.036m7.434.038a.75.75 0 0 1 1.06-.024c1.197 1.145 1.947 2.727 1.947 4.48c0 1.775-.767 3.373-1.99 4.521a.75.75 0 1 1-1.027-1.093c.945-.887 1.517-2.1 1.517-3.428c0-1.313-.559-2.512-1.484-3.396a.75.75 0 0 1-.023-1.06" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M13.656 10.451c.896.658 1.344.987 1.344 1.55c0 .562-.448.89-1.344 1.548a13 13 0 0 1-.718.495c-.197.125-.421.254-.653.381c-.894.49-1.34.734-1.741.463s-.437-.838-.51-1.971c-.02-.32-.034-.635-.034-.917s.013-.596.034-.917c.072-1.133.109-1.7.51-1.97c.4-.271.847-.027 1.74.462c.233.127.457.256.654.381c.226.143.471.314.718.495"></svg:path>`,
})
export class SolarPlayStreamBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPlaybackSpeedBoldIcon],svg[solar-playback-speed-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.608 1.517c.77-.175 1.57-.267 2.392-.267c5.937 0 10.75 4.813 10.75 10.75S17.937 22.75 12 22.75c-.822 0-1.622-.092-2.392-.267a.75.75 0 1 1 .332-1.463a9.25 9.25 0 1 0 0-18.04a.75.75 0 1 1-.332-1.463M7.314 3.132a.75.75 0 0 1-.235 1.034A9.3 9.3 0 0 0 4.166 7.08a.75.75 0 0 1-1.27-.8A10.8 10.8 0 0 1 6.28 2.897a.75.75 0 0 1 1.035.235M2.98 9.94a.75.75 0 1 0-1.463-.332c-.175.77-.267 1.57-.267 2.392s.092 1.622.267 2.393a.75.75 0 0 0 1.463-.333A9.3 9.3 0 0 1 2.75 12c0-.709.08-1.398.23-2.06m.152 6.746a.75.75 0 0 1 1.034.235a9.3 9.3 0 0 0 2.913 2.913a.75.75 0 0 1-.8 1.27a10.8 10.8 0 0 1-3.382-3.383a.75.75 0 0 1 .235-1.035"></svg:path><svg:path fill="currentColor" d="M15.414 10.941c.781.462.781 1.656 0 2.118l-4.72 2.787C9.934 16.294 9 15.71 9 14.786V9.214c0-.924.934-1.507 1.694-1.059z"></svg:path>`,
})
export class SolarPlaybackSpeedBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPlaylist2BoldIcon],svg[solar-playlist-2-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.345 5.993c.278-.103.61-.19.97-.125c.442.08.836.329 1.1.692c.215.296.28.634.308.93c.027.287.027.646.027 1.055v.11c0 .3.002.62-.106.915a1.75 1.75 0 0 1-.392.623c-.22.225-.509.363-.78.492l-.068.033l-1.785.857c-.369.177-.692.332-.964.432c-.261.097-.57.18-.905.136v4.286c0 1.814-1.435 3.321-3.25 3.321s-3.25-1.507-3.25-3.321s1.435-3.322 3.25-3.322a3.2 3.2 0 0 1 1.75.522V10h.003q-.004-.254-.003-.545v-.11c0-.3-.002-.62.106-.915a1.75 1.75 0 0 1 .392-.623c.22-.225.509-.363.78-.492l.068-.033l1.785-.857c.369-.177.692-.332.964-.432"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M2.25 5A.75.75 0 0 1 3 4.25h12a.75.75 0 0 1 0 1.5H3A.75.75 0 0 1 2.25 5m0 4A.75.75 0 0 1 3 8.25h10a.75.75 0 0 1 0 1.5H3A.75.75 0 0 1 2.25 9m0 4a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75m0 4a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarPlaylist2BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPlaylistBoldIcon],svg[solar-playlist-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.25 6A.75.75 0 0 1 3 5.25h18a.75.75 0 0 1 0 1.5H3A.75.75 0 0 1 2.25 6m0 4A.75.75 0 0 1 3 9.25h18a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75m0 4a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75m0 4a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M18.875 14.118c1.654.955 2.48 1.433 2.602 2.121a1.5 1.5 0 0 1 0 .521c-.121.69-.948 1.167-2.602 2.122s-2.48 1.432-3.138 1.193a1.5 1.5 0 0 1-.451-.26c-.536-.45-.536-1.405-.536-3.315s0-2.864.536-3.314c.134-.113.287-.2.451-.26c.657-.24 1.484.238 3.138 1.192"></svg:path>`,
})
export class SolarPlaylistBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPlaylistMinimalistic2BoldIcon],svg[solar-playlist-minimalistic-2-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M15.75 6a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h12a.75.75 0 0 1 .75.75m-2 4a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h10a.75.75 0 0 1 .75.75m-4 4a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h6a.75.75 0 0 1 .75.75m-1 4a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h5a.75.75 0 0 1 .75.75" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M17 7.25a.75.75 0 0 1 .75.75A3.25 3.25 0 0 0 21 11.25a.75.75 0 0 1 0 1.5c-1.257 0-2.4-.488-3.25-1.286V16.5a3.25 3.25 0 1 1-1.5-2.74V8a.75.75 0 0 1 .75-.75"></svg:path>`,
})
export class SolarPlaylistMinimalistic2BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPlaylistMinimalistic3BoldIcon],svg[solar-playlist-minimalistic-3-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.25 4A.75.75 0 0 1 3 3.25h17a.75.75 0 0 1 0 1.5H3A.75.75 0 0 1 2.25 4m0 5A.75.75 0 0 1 3 8.25h9a.75.75 0 0 1 0 1.5H3A.75.75 0 0 1 2.25 9m0 5a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M19.345 6.993c.278-.103.61-.19.97-.125c.442.08.836.329 1.1.692c.215.296.28.634.308.93c.027.287.027.646.027 1.055v.11c0 .3.002.62-.106.915a1.75 1.75 0 0 1-.392.623c-.22.225-.509.363-.78.492l-.068.033l-1.785.857c-.369.177-.692.332-.964.432c-.261.097-.57.18-.905.136v4.286c0 1.814-1.435 3.321-3.25 3.321s-3.25-1.507-3.25-3.321s1.435-3.322 3.25-3.322a3.2 3.2 0 0 1 1.75.522V11h.003q-.004-.254-.003-.545v-.109c0-.3-.002-.621.106-.916a1.75 1.75 0 0 1 .392-.623c.22-.225.509-.363.78-.492l.068-.033l1.785-.857c.369-.177.692-.332.964-.432"></svg:path>`,
})
export class SolarPlaylistMinimalistic3BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPlugCircleBoldIcon],svg[solar-plug-circle-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.477 2 2 6.483 2 12.014c0 5.278 4.078 9.602 9.25 9.986v-6.061a3.505 3.505 0 0 1-2.75-3.424v-.501a1 1 0 0 1 1-1.001h.25V9.01a.75.75 0 1 1 1.5 0v2.002h1.5V9.01a.75.75 0 1 1 1.5 0v2.002h.25a1 1 0 0 1 1 1.002v.5a3.505 3.505 0 0 1-2.75 3.425V22c5.172-.384 9.25-4.708 9.25-9.986C22 6.484 17.523 2 12 2"></svg:path>`,
})
export class SolarPlugCircleBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPlusMinusBoldIcon],svg[solar-plus-minus-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22c-4.134 0-6.455 0-7.952-.988L21.012 4.048C22 5.545 22 7.866 22 12m-3.25 5a.75.75 0 0 1-.75.75h-5a.75.75 0 0 1 0-1.5h5a.75.75 0 0 1 .75.75M12 2C7.286 2 4.929 2 3.464 3.464C2 4.93 2 7.286 2 12c0 4.134 0 6.455.988 7.952L19.952 2.988C18.455 2 16.134 2 12 2M8 4.75a.75.75 0 0 1 .75.75v1.75h1.75a.75.75 0 0 1 0 1.5H8.75v1.75a.75.75 0 0 1-1.5 0V8.75H5.5a.75.75 0 0 1 0-1.5h1.75V5.5A.75.75 0 0 1 8 4.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarPlusMinusBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPodcastBoldIcon],svg[solar-podcast-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.837 10.546c0-.402-.312-.728-.697-.728H8.58C8.905 8.158 10.312 6.91 12 6.91s3.095 1.25 3.419 2.91H12.93c-.385 0-.697.325-.697.726c0 .402.312.728.697.728h2.558v1.454H12.93c-.385 0-.697.326-.697.727c0 .402.312.728.697.728h2.489c-.278 1.425-1.354 2.547-2.721 2.836v2.255c0 .401-.313.727-.698.727s-.698-.326-.698-.727v-2.255c-1.367-.29-2.443-1.411-2.72-2.836h1.557c.386 0 .698-.326.698-.728s-.312-.727-.697-.727H8.512v-1.454h1.627c.386 0 .698-.326.698-.727"></svg:path><svg:path fill="currentColor" d="M12 4c-3.33 0-6.054 2.701-6.266 6.116a2.46 2.46 0 0 0-1.176-.298C3.145 9.818 2 11.012 2 12.485v1.94c0 1.472 1.145 2.666 2.558 2.666q.072 0 .143-.004v.004c1.334 0 2.415-1.127 2.415-2.518v-4.028c0-2.811 2.187-5.09 4.884-5.09s4.884 2.279 4.884 5.09v4.028c0 1.39 1.08 2.518 2.415 2.518v-.004q.07.004.143.004c1.413 0 2.558-1.194 2.558-2.667v-1.94c0-1.472-1.145-2.666-2.558-2.666c-.424 0-.824.108-1.176.298C18.054 6.701 15.329 4 12 4"></svg:path>`,
})
export class SolarPodcastBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPointOnMapBoldIcon],svg[solar-point-on-map-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 16.83v-5.667c0-1.044 0-1.566-.283-1.959c-.229-.317-.596-.486-1.25-.713c-.134 1.606-.666 3.247-1.501 4.682c-.973 1.672-2.418 3.167-4.269 3.974a4.26 4.26 0 0 1-3.394 0c-1.851-.807-3.296-2.302-4.269-3.974A11.5 11.5 0 0 1 4.7 9.658c-.383-.057-.676-.028-.93.113a1.5 1.5 0 0 0-.28.203C3 10.42 3 11.249 3 12.908v4.93c0 1.043 0 1.565.283 1.958s.778.558 1.768.888l.384.128c1.577.525 2.365.788 3.172.79q.364 0 .726-.052c.798-.115 1.548-.49 3.048-1.24c1.149-.575 1.724-.862 2.334-.995q.321-.07.65-.098c.623-.052 1.25.053 2.507.262c1.273.212 1.91.318 2.375.051q.239-.137.413-.35c.34-.415.34-1.06.34-2.35"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12 2C8.686 2 6 4.552 6 7.7c0 3.124 1.915 6.769 4.903 8.072a2.76 2.76 0 0 0 2.194 0C16.085 14.47 18 10.824 18 7.7C18 4.552 15.314 2 12 2m0 8a2 2 0 1 0 0-4a2 2 0 0 0 0 4" clip-rule="evenodd"></svg:path>`,
})
export class SolarPointOnMapBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPointOnMapPerspectiveBoldIcon],svg[solar-point-on-map-perspective-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 2a3 3 0 0 0-.75 5.905V13a.75.75 0 0 0 1.5 0V7.905A3.001 3.001 0 0 0 17 2M8 22h8c2.482 0 3.875 0 4.773-.594l-8.514-4.683l-8.043 5.08C5.087 22 6.283 22 8 22m2.758-6.102L2.51 11.362C2 12.263 2 13.64 2 16c0 2.666 0 4.075.736 4.964z"></svg:path><svg:path fill="currentColor" d="M22 16c0-2.828 0-4.243-.879-5.121c-.49-.49-1.146-.707-2.121-.803V13a2 2 0 1 1-4 0v-3H8c-2.045 0-3.35 0-4.25.332l17.937 9.865C22 19.3 22 18.006 22 16"></svg:path>`,
})
export class SolarPointOnMapPerspectiveBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPostsCarouselHorizontalBoldIcon],svg[solar-posts-carousel-horizontal-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.5 16V8a3 3 0 0 0-3-3a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 .5.5a3 3 0 0 0 3-3m7-11c1.886 0 2.828 0 3.414.586S16.5 7.114 16.5 9v6c0 1.886 0 2.828-.586 3.414S14.386 19 12.5 19h-1c-1.886 0-2.828 0-3.414-.586S7.5 16.886 7.5 15V9c0-1.886 0-2.828.586-3.414S9.614 5 11.5 5zm6 3v8a3 3 0 0 0 3 3a.5.5 0 0 0 .5-.5v-13a.5.5 0 0 0-.5-.5a3 3 0 0 0-3 3"></svg:path>`,
})
export class SolarPostsCarouselHorizontalBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPostsCarouselVerticalBoldIcon],svg[solar-posts-carousel-vertical-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 5.5h8a3 3 0 0 0 3-3a.5.5 0 0 0-.5-.5h-13a.5.5 0 0 0-.5.5a3 3 0 0 0 3 3m-3 6c0-1.886 0-2.828.586-3.414S7.114 7.5 9 7.5h6c1.886 0 2.828 0 3.414.586S19 9.614 19 11.5v1c0 1.886 0 2.828-.586 3.414S16.886 16.5 15 16.5H9c-1.886 0-2.828 0-3.414-.586S5 14.386 5 12.5zm11 7H8a3 3 0 0 0-3 3a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5a3 3 0 0 0-3-3"></svg:path>`,
})
export class SolarPostsCarouselVerticalBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPowerBoldIcon],svg[solar-power-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M12 2v4"></svg:path><svg:path fill="currentColor" d="M12.75 2.75a.75.75 0 0 0-1.5 0v4a.75.75 0 0 0 1.5 0z"></svg:path><svg:path fill="currentColor" d="M8.792 5.147a.75.75 0 1 0-.584-1.382A9.75 9.75 0 0 0 2.25 12.75c0 5.385 4.365 9.75 9.75 9.75s9.75-4.365 9.75-9.75a9.75 9.75 0 0 0-5.958-8.985a.75.75 0 1 0-.584 1.382A8.253 8.253 0 0 1 12 21A8.25 8.25 0 0 1 8.792 5.147"></svg:path></svg:g>`,
})
export class SolarPowerBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPresentationGraphBoldIcon],svg[solar-presentation-graph-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 1.25a.75.75 0 0 0 0 1.5h2v7.75c0 3.064 0 4.596 1.004 5.548s2.62.952 5.853.952h.393v3.537l-1.585.792a.75.75 0 1 0 .67 1.342L12 21.839l1.665.832a.75.75 0 1 0 .67-1.342l-1.585-.793V17h.393c3.232 0 4.849 0 5.853-.952S20 13.564 20 10.5V2.75h2a.75.75 0 0 0 0-1.5zm13.53 6.72a.75.75 0 0 1 0 1.06l-1.317 1.318a5 5 0 0 1-.452.416a1.24 1.24 0 0 1-.761.279a1.24 1.24 0 0 1-.761-.279a5 5 0 0 1-.452-.416l-.61-.61L11 9.561l-.177.175L9.53 11.03a.75.75 0 1 1-1.06-1.06l1.317-1.318c.145-.145.302-.302.452-.416A1.24 1.24 0 0 1 11 7.957c.334 0 .585.145.761.279c.15.114.307.271.452.416l.61.61l.177.176l.177-.175L14.47 7.97a.75.75 0 0 1 1.06 0" clip-rule="evenodd"></svg:path>`,
})
export class SolarPresentationGraphBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPrinter2BoldIcon],svg[solar-printer-2-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M16 6H8c-2.828 0-4.243 0-5.121.879C2 7.757 2 9.172 2 12s0 4.243.879 5.121c.494.495 1.158.711 2.149.806C5 17.204 5 16.352 5 15.5a.5.5 0 0 1 0-1h14a.5.5 0 0 1 0 1c0 .852 0 1.704-.028 2.427c.99-.095 1.655-.311 2.15-.806C22 16.243 22 14.828 22 12s0-4.243-.879-5.121C20.243 6 18.828 6 16 6m-7 4.75a.75.75 0 0 0 0-1.5H6a.75.75 0 0 0 0 1.5zm8 .25a1 1 0 1 0 0-2a1 1 0 0 0 0 2" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M17.121 2.879C16.242 2 14.828 2 12 2s-4.243 0-5.122.879c-.492.492-.708 1.153-.804 2.136C6.634 5 7.252 5 7.93 5h8.142c.677 0 1.295 0 1.854.015c-.095-.983-.312-1.644-.804-2.136M18 15.5c0 2.828 0 4.743-.879 5.621C16.243 22 14.828 22 12 22s-4.243 0-5.121-.879C6 20.243 6 18.328 6 15.5z"></svg:path>`,
})
export class SolarPrinter2BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPrinterBoldIcon],svg[solar-printer-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M16 6H8c-2.828 0-4.243 0-5.121.879C2 7.757 2 9.172 2 12s0 4.243.879 5.121c.494.495 1.158.711 2.149.806C5 17.204 5 15.352 5 14.5a.5.5 0 0 1 0-1h14a.5.5 0 0 1 0 1c0 .852 0 2.704-.028 3.427c.99-.095 1.655-.311 2.15-.806C22 16.243 22 14.828 22 12s0-4.243-.879-5.121C20.243 6 18.828 6 16 6m-7 4.75a.75.75 0 0 0 0-1.5H6a.75.75 0 0 0 0 1.5zm8 .25a1 1 0 1 0 0-2a1 1 0 0 0 0 2" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M17.121 2.879C16.242 2 14.828 2 12 2s-4.243 0-5.122.879c-.492.492-.708 1.153-.804 2.136C6.634 5 7.252 5 7.93 5h8.142c.677 0 1.295 0 1.854.015c-.095-.983-.312-1.644-.804-2.136"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M18 14.5c0 2.828 0 5.743-.879 6.621C16.243 22 14.828 22 12 22s-4.243 0-5.121-.879C6 20.243 6 17.328 6 14.5zm-2.25 2.25a.75.75 0 0 1-.75.75H9A.75.75 0 0 1 9 16h6a.75.75 0 0 1 .75.75m-2 3a.75.75 0 0 1-.75.75H9A.75.75 0 0 1 9 19h4a.75.75 0 0 1 .75.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarPrinterBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPrinterMinimalisticBoldIcon],svg[solar-printer-minimalistic-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.121 21.121C18 20.243 18 18.828 18 16v-3.34c-1.477-.502-3.458-.91-6-.91s-4.523.408-6 .91V16c0 2.828 0 4.243.879 5.121C7.757 22 9.172 22 12 22s4.243 0 5.121-.879"></svg:path><svg:path fill="currentColor" d="M16 6H8c-2.828 0-4.243 0-5.121.879C2 7.757 2 9.172 2 12s0 4.243.879 5.121c.492.493 1.153.71 2.136.804C5 17.366 5 16.748 5 16.071v-3.029l-.193.085a.75.75 0 0 1-.614-1.368c1.722-.773 4.288-1.51 7.807-1.51s6.085.737 7.807 1.51a.75.75 0 1 1-.614 1.368L19 13.042v3.029c0 .677 0 1.295-.015 1.854c.983-.095 1.644-.311 2.136-.804C22 16.243 22 14.828 22 12s0-4.243-.879-5.121C20.243 6 18.828 6 16 6m1.12-3.121C16.243 2 14.829 2 12 2s-4.243 0-5.122.879c-.492.492-.709 1.153-.804 2.136C6.634 5 7.252 5 7.93 5h8.141c.678 0 1.296 0 1.855.015c-.095-.983-.312-1.644-.804-2.136"></svg:path>`,
})
export class SolarPrinterMinimalisticBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarProgrammingBoldIcon],svg[solar-programming-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464m2.96 6.056a.75.75 0 0 1 1.056-.096l.277.23c.605.504 1.12.933 1.476 1.328c.379.42.674.901.674 1.518s-.295 1.099-.674 1.518c-.356.395-.871.824-1.476 1.328l-.277.23a.75.75 0 1 1-.96-1.152l.234-.195c.659-.55 1.09-.91 1.366-1.216c.262-.29.287-.427.287-.513s-.025-.222-.287-.513c-.277-.306-.707-.667-1.366-1.216l-.234-.195a.75.75 0 0 1-.096-1.056M17.75 15a.75.75 0 0 1-.75.75h-5a.75.75 0 0 1 0-1.5h5a.75.75 0 0 1 .75.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarProgrammingBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarProjectorBoldIcon],svg[solar-projector-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M4.614 20.643a.75.75 0 0 0 1.03-.257l1.431-2.387L8 18h8l.924-.001l1.433 2.387a.75.75 0 1 0 1.286-.772l-.997-1.661c1.174-.078 1.928-.285 2.475-.832C22 16.243 22 14.828 22 12s0-4.243-.879-5.121c-.326-.326-.726-.532-1.244-.66A6.5 6.5 0 1 1 8.233 6H8c-2.828-.001-4.243-.001-5.121.878S2 9.172 2 12s0 4.243.879 5.121c.547.547 1.301.754 2.475.832l-.997 1.661a.75.75 0 0 0 .257 1.03M5.5 8.75a.75.75 0 0 1 .75.75V11a.75.75 0 0 1-1.5 0V9.5a.75.75 0 0 1 .75-.75"></svg:path><svg:path d="M14 14a5 5 0 1 0 0-10a5 5 0 0 0 0 10m-.75-7a.75.75 0 0 1 .75-.75A2.75 2.75 0 1 1 11.25 9a.75.75 0 0 1 1.5 0A1.25 1.25 0 1 0 14 7.75a.75.75 0 0 1-.75-.75"></svg:path></svg:g>`,
})
export class SolarProjectorBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPulse2BoldIcon],svg[solar-pulse-2-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.464 3.464C2 4.93 2 7.286 2 12c0 .819 0 1.566.008 2.25h3.1c.526 0 .993-.002 1.421.182s.75.522 1.112.904l.075.078l1.141 1.199l.207.215l.177-.241l3.653-5.043c.15-.206.304-.42.458-.579c.175-.18.447-.394.842-.412s.685.17.876.333c.167.144.341.343.508.534l1.804 2.062c.486.555.59.65.703.701s.253.067.99.067h2.917A199 199 0 0 0 22 12c0-4.714 0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464"></svg:path><svg:path fill="currentColor" d="M21.956 15.75h-2.994c-.556.001-1.05.002-1.497-.201s-.771-.575-1.137-.994l-.075-.086l-1.777-2.03l-.206-.234q-.078.103-.184.251l-3.654 5.042a5 5 0 0 1-.442.56c-.17.177-.434.384-.816.41s-.67-.145-.863-.298a5 5 0 0 1-.513-.495l-1.169-1.227c-.48-.505-.582-.59-.69-.637c-.11-.047-.242-.061-.939-.061H2.044c.097 2.34.41 3.775 1.42 4.785C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465c1.01-1.01 1.324-2.445 1.421-4.785"></svg:path>`,
})
export class SolarPulse2BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarPulseBoldIcon],svg[solar-pulse-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464m11.635 8.63c-.184-.302-.365-.597-.541-.807c-.187-.224-.515-.532-1.017-.512s-.804.353-.973.591c-.159.225-.315.532-.475.848l-1.988 3.92q-.11.22-.193.377l-.238-.351l-.176-.266a11 11 0 0 0-.557-.788a2.2 2.2 0 0 0-.682-.59a2.2 2.2 0 0 0-.87-.24c-.272-.026-.597-.026-.964-.026H5a.75.75 0 0 0 0 1.5h1.394c.407 0 .661 0 .856.019c.18.017.254.044.301.07c.047.025.111.07.225.211c.123.152.265.363.49.702l.187.279c.188.283.373.56.553.759c.192.213.522.497 1.01.468c.486-.029.78-.35.947-.584c.154-.219.305-.517.459-.82l1.987-3.918q.117-.23.203-.395q.1.158.233.377l.654 1.068c.2.327.378.616.55.844c.186.247.399.469.692.633s.593.23.901.26c.284.027.623.027 1.006.027H19a.75.75 0 0 0 0-1.5h-1.32c-.424 0-.69 0-.894-.02c-.188-.019-.264-.049-.312-.076c-.049-.027-.114-.076-.227-.227c-.124-.163-.263-.39-.485-.752z" clip-rule="evenodd"></svg:path>`,
})
export class SolarPulseBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarQrCodeBoldIcon],svg[solar-qr-code-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M16.525 2h.068c.884 0 1.597 0 2.17.055c.592.056 1.108.175 1.571.459c.47.288.864.682 1.152 1.152c.284.463.403.979.46 1.57C22 5.81 22 6.524 22 7.407v.07c0 .58 0 1.064-.037 1.458c-.04.412-.124.795-.34 1.147c-.21.344-.5.633-.844.844c-.352.216-.736.3-1.147.34c-.394.037-.879.037-1.46.037h-1.104c-.836 0-1.533 0-2.086-.074c-.584-.079-1.111-.251-1.535-.675s-.596-.95-.675-1.535c-.074-.553-.074-1.25-.074-2.086V5.827c0-.58 0-1.065.037-1.459c.04-.411.124-.795.34-1.146c.21-.345.5-.634.844-.845c.352-.216.735-.3 1.147-.34C15.459 2 15.944 2 16.525 2m.824 5.814c-.48 0-.72 0-.889-.12a.7.7 0 0 1-.154-.154c-.12-.17-.12-.41-.12-.889s0-.719.12-.888a.7.7 0 0 1 .154-.155c.17-.12.41-.12.889-.12s.719 0 .888.12q.09.065.155.155c.12.169.12.409.12.888s0 .72-.12.889a.7.7 0 0 1-.155.154c-.169.12-.409.12-.888.12M10.08 2.377c-.35-.216-.734-.3-1.146-.34C8.54 2 8.056 2 7.475 2h-.068c-.884 0-1.597 0-2.17.055c-.592.056-1.108.175-1.571.459c-.47.288-.864.682-1.152 1.152c-.284.463-.403.979-.46 1.57C2 5.81 2 6.524 2 7.407v.07c0 .58 0 1.064.037 1.458c.04.412.124.795.34 1.147c.21.344.5.633.845.844c.351.216.735.3 1.146.34c.394.037.878.037 1.46.037h1.104c.836 0 1.533 0 2.086-.074c.584-.079 1.111-.251 1.535-.675s.596-.95.675-1.535c.074-.553.074-1.25.074-2.086V5.827c0-.58 0-1.065-.037-1.459c-.04-.411-.124-.795-.34-1.146a2.56 2.56 0 0 0-.844-.845M5.764 7.694c.169.12.409.12.888.12s.72 0 .889-.12a.7.7 0 0 0 .154-.154c.12-.17.12-.41.12-.889s0-.719-.12-.888a.7.7 0 0 0-.154-.155c-.17-.12-.41-.12-.889-.12s-.719 0-.888.12a.7.7 0 0 0-.155.155c-.12.169-.12.409-.12.888s0 .72.12.889a.7.7 0 0 0 .155.154m3.254 5.078c.584.079 1.111.251 1.535.675s.596.95.675 1.535c.074.553.074 1.25.074 2.086v1.105c0 .58 0 1.065-.037 1.459c-.04.411-.124.795-.34 1.146c-.21.345-.5.634-.844.845c-.352.216-.735.3-1.147.34C8.54 22 8.056 22 7.475 22h-.068c-.884 0-1.597 0-2.17-.055c-.592-.056-1.108-.175-1.571-.459a3.5 3.5 0 0 1-1.152-1.152c-.284-.463-.403-.979-.46-1.57C2 18.19 2 17.477 2 16.594v-.07c0-.58 0-1.065.037-1.458c.04-.412.124-.795.34-1.147c.21-.344.5-.633.845-.844c.351-.216.735-.3 1.146-.34c.394-.037.878-.037 1.46-.037h1.104c.836 0 1.533 0 2.086.074m-2.367 5.74c-.48 0-.719 0-.888-.12a.7.7 0 0 1-.155-.155c-.12-.169-.12-.409-.12-.888s0-.72.12-.889a.7.7 0 0 1 .155-.154c.169-.12.409-.12.888-.12s.72 0 .889.12q.09.065.154.154c.12.17.12.41.12.889s0 .719-.12.888a.7.7 0 0 1-.154.155c-.17.12-.41.12-.889.12" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M12.698 16.616v.035h1.395c0-.668 0-1.116.036-1.458c.033-.33.093-.482.16-.583a1.2 1.2 0 0 1 .32-.321c.102-.067.254-.127.584-.16c.342-.035.79-.036 1.458-.036h1.86v-1.395h-1.895c-.623 0-1.143 0-1.564.042c-.44.045-.849.143-1.217.389c-.28.186-.52.426-.706.706c-.246.368-.344.777-.389 1.217c-.042.42-.042.94-.042 1.564M22 18.535v-.023h-1.395c0 .443 0 .74-.016.97c-.016.224-.043.333-.073.405a1.16 1.16 0 0 1-.63.63c-.07.029-.18.056-.404.072c-.23.015-.527.016-.97.016h-1.86V22h1.883c.414 0 .759 0 1.042-.02a2.6 2.6 0 0 0 .844-.175a2.56 2.56 0 0 0 1.384-1.384c.112-.27.156-.549.176-.844c.019-.283.019-.628.019-1.042m-7.907 2.767a.698.698 0 1 1-1.395 0v-2.79h1.395zm7.209-8.604a.7.7 0 0 0-.697.697v3.256H22v-3.256a.7.7 0 0 0-.698-.697m-5.226 3.919c-.076.184-.076.417-.076.883s0 .699.076.883a1 1 0 0 0 .541.54c.184.077.417.077.883.077s.699 0 .883-.076a1 1 0 0 0 .54-.541c.077-.184.077-.417.077-.883s0-.699-.076-.883a1 1 0 0 0-.541-.54C18.199 16 17.966 16 17.5 16s-.699 0-.883.076a1 1 0 0 0-.54.541"></svg:path>`,
})
export class SolarQrCodeBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarQuestionCircleBoldIcon],svg[solar-question-circle-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10M12 7.75c-.621 0-1.125.504-1.125 1.125a.75.75 0 0 1-1.5 0a2.625 2.625 0 1 1 4.508 1.829q-.138.142-.264.267a7 7 0 0 0-.571.617c-.22.282-.298.489-.298.662V13a.75.75 0 0 1-1.5 0v-.75c0-.655.305-1.186.614-1.583c.229-.294.516-.58.75-.814q.106-.105.193-.194A1.125 1.125 0 0 0 12 7.75M12 17a1 1 0 1 0 0-2a1 1 0 0 0 0 2" clip-rule="evenodd"></svg:path>`,
})
export class SolarQuestionCircleBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarQuestionSquareBoldIcon],svg[solar-question-square-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 22c-4.714 0-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22m0-14.25c-.621 0-1.125.504-1.125 1.125a.75.75 0 0 1-1.5 0a2.625 2.625 0 1 1 4.508 1.829q-.138.142-.264.267a7 7 0 0 0-.571.617c-.22.282-.298.489-.298.662V13a.75.75 0 0 1-1.5 0v-.75c0-.655.305-1.186.614-1.583c.229-.294.516-.58.75-.814q.106-.105.193-.194A1.125 1.125 0 0 0 12 7.75M12 17a1 1 0 1 0 0-2a1 1 0 0 0 0 2" clip-rule="evenodd"></svg:path>`,
})
export class SolarQuestionSquareBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarQuitFullScreenBoldIcon],svg[solar-quit-full-screen-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14 1.25a.75.75 0 0 1 .75.75c0 1.907.002 3.261.14 4.29c.135 1.005.389 1.585.812 2.008s1.003.677 2.009.812c1.027.138 2.382.14 4.289.14a.75.75 0 0 1 0 1.5h-.056c-1.838 0-3.294 0-4.433-.153c-1.172-.158-2.121-.49-2.87-1.238c-.748-.749-1.08-1.698-1.238-2.87c-.153-1.14-.153-2.595-.153-4.433V2a.75.75 0 0 1 .75-.75m-4 0a.75.75 0 0 1 .75.75v.056c0 1.838 0 3.294-.153 4.433c-.158 1.172-.49 2.121-1.238 2.87c-.749.748-1.698 1.08-2.87 1.238c-1.14.153-2.595.153-4.433.153H2a.75.75 0 0 1 0-1.5c1.907 0 3.261-.002 4.29-.14c1.005-.135 1.585-.389 2.008-.812s.677-1.003.812-2.009c.138-1.028.14-2.382.14-4.289a.75.75 0 0 1 .75-.75M1.25 14a.75.75 0 0 1 .75-.75h.056c1.838 0 3.294 0 4.433.153c1.172.158 2.121.49 2.87 1.238c.748.749 1.08 1.698 1.238 2.87c.153 1.14.153 2.595.153 4.433V22a.75.75 0 0 1-1.5 0c0-1.907-.002-3.262-.14-4.29c-.135-1.005-.389-1.585-.812-2.008s-1.003-.677-2.009-.812c-1.028-.138-2.382-.14-4.289-.14a.75.75 0 0 1-.75-.75m20.694-.75H22a.75.75 0 0 1 0 1.5c-1.907 0-3.262.002-4.29.14c-1.005.135-1.585.389-2.008.812s-.677 1.003-.812 2.009c-.138 1.027-.14 2.382-.14 4.289a.75.75 0 0 1-1.5 0v-.056c0-1.838 0-3.294.153-4.433c.158-1.172.49-2.121 1.238-2.87c.749-.748 1.698-1.08 2.87-1.238c1.14-.153 2.595-.153 4.433-.153" clip-rule="evenodd"></svg:path>`,
})
export class SolarQuitFullScreenBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarQuitFullScreenCircleBoldIcon],svg[solar-quit-full-screen-circle-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10M10.004 5.251a.75.75 0 0 1 .743.756c-.007.851-.033 1.577-.151 2.18c-.122.623-.352 1.166-.798 1.612s-.99.676-1.613.798c-.602.118-1.328.144-2.179.151a.75.75 0 1 1-.012-1.5c.856-.007 1.453-.035 1.903-.123c.429-.084.666-.212.84-.387c.175-.174.303-.411.387-.84c.088-.45.116-1.048.123-1.903a.75.75 0 0 1 .757-.744m3.99 0a.75.75 0 0 1 .756.744c.007.855.035 1.453.123 1.903c.084.429.213.666.387.84c.174.175.411.303.84.387c.45.088 1.048.116 1.904.123a.75.75 0 0 1-.013 1.5c-.85-.007-1.577-.033-2.18-.151c-.623-.122-1.166-.352-1.612-.798s-.675-.99-.798-1.613c-.118-.602-.144-1.328-.151-2.179a.75.75 0 0 1 .743-.756m-7.988 8a.75.75 0 0 0-.012 1.5c.856.007 1.453.035 1.903.123c.429.084.666.212.84.386c.175.175.303.412.387.84c.088.45.116 1.048.123 1.904a.75.75 0 0 0 1.5-.013c-.007-.85-.033-1.576-.151-2.179c-.122-.623-.352-1.166-.798-1.612s-.99-.676-1.613-.798c-.602-.118-1.328-.144-2.179-.152m12.741.743a.75.75 0 0 1-.743.756c-.856.008-1.454.036-1.904.124c-.429.084-.666.212-.84.386c-.175.175-.303.412-.387.84c-.088.45-.116 1.048-.123 1.904a.75.75 0 1 1-1.5-.013c.007-.85.033-1.576.151-2.179c.123-.623.352-1.166.798-1.612s.99-.676 1.613-.798c.602-.118 1.328-.144 2.179-.152a.75.75 0 0 1 .756.744" clip-rule="evenodd"></svg:path>`,
})
export class SolarQuitFullScreenCircleBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarQuitFullScreenSquareBoldIcon],svg[solar-quit-full-screen-square-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464m6.54 1.787a.75.75 0 0 1 .743.756c-.007.851-.033 1.577-.151 2.18c-.122.623-.352 1.166-.798 1.612s-.99.676-1.613.798c-.602.118-1.328.144-2.179.151a.75.75 0 1 1-.012-1.5c.856-.007 1.453-.035 1.903-.123c.429-.084.666-.212.84-.387c.175-.174.303-.411.387-.84c.088-.45.116-1.048.123-1.903a.75.75 0 0 1 .757-.744m3.99 0a.75.75 0 0 1 .756.744c.007.855.035 1.453.123 1.903c.084.429.213.666.387.84c.174.175.411.303.84.387c.45.088 1.048.116 1.904.123a.75.75 0 0 1-.013 1.5c-.85-.007-1.577-.033-2.18-.151c-.623-.122-1.166-.352-1.612-.798s-.675-.99-.798-1.613c-.118-.602-.144-1.328-.151-2.179a.75.75 0 0 1 .743-.756m-7.988 8a.75.75 0 0 0-.012 1.5c.856.007 1.453.035 1.903.123c.429.084.666.212.84.386c.175.175.303.412.387.84c.088.45.116 1.048.123 1.904a.75.75 0 0 0 1.5-.013c-.007-.85-.033-1.576-.151-2.179c-.122-.623-.352-1.166-.798-1.612s-.99-.676-1.613-.798c-.602-.118-1.328-.144-2.179-.152m12.741.743a.75.75 0 0 1-.743.756c-.856.008-1.454.036-1.904.124c-.429.084-.666.212-.84.386c-.175.175-.303.412-.387.84c-.088.45-.116 1.048-.123 1.904a.75.75 0 1 1-1.5-.013c.007-.85.033-1.576.151-2.179c.123-.623.352-1.166.798-1.612s.99-.676 1.613-.798c.602-.118 1.328-.144 2.179-.152a.75.75 0 0 1 .756.744" clip-rule="evenodd"></svg:path>`,
})
export class SolarQuitFullScreenSquareBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarQuitPipBoldIcon],svg[solar-quit-pip-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10 3h4c3.771 0 5.657 0 6.828 1.172c.95.949 1.13 2.694 1.164 5.328c.012.937.018 1.405-.275 1.703c-.294.297-.768.297-1.717.297h-2.5c-2.828 0-4.243 0-5.121.879c-.879.878-.879 2.293-.879 5.121v2c0 .466 0 .699-.076.883a1 1 0 0 1-.541.54C10.699 21 10.466 21 10 21c-3.771 0-5.657 0-6.828-1.172S2 16.771 2 13v-2c0-3.771 0-5.657 1.172-6.828S6.229 3 10 3m.97 9.03a.75.75 0 1 0 1.06-1.06L9.31 8.25h1.19a.75.75 0 0 0 0-1.5h-3a.75.75 0 0 0-.75.75v3a.75.75 0 0 0 1.5 0V9.31z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M13.586 13.586C13 14.172 13 15.114 13 17s0 2.828.586 3.414S15.114 21 17 21h1c1.886 0 2.828 0 3.414-.586S22 18.886 22 17s0-2.828-.586-3.414S19.886 13 18 13h-1c-1.886 0-2.828 0-3.414.586"></svg:path>`,
})
export class SolarQuitPipBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRadar2BoldIcon],svg[solar-radar-2-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10m1.358-15.07a5.2 5.2 0 0 0-2.232-.107a.75.75 0 0 1-.252-1.478a6.749 6.749 0 1 1-4.519 2.953c.453-.69 1.358-.733 1.92-.279l4.197 3.398a.75.75 0 1 1-.944 1.166l-2.137-1.73A2.85 2.85 0 1 0 12 9.151a.75.75 0 0 1-.001-1.5a4.35 4.35 0 1 1-3.802 2.236l-.709-.573a5.249 5.249 0 1 0 5.87-2.384" clip-rule="evenodd"></svg:path>`,
})
export class SolarRadar2BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRadarBoldIcon],svg[solar-radar-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10m-8.642-5.07a5.2 5.2 0 0 0-2.232-.107a.75.75 0 0 1-.252-1.478a6.749 6.749 0 1 1-4.519 2.953c.453-.69 1.358-.733 1.92-.279l4.197 3.398a.75.75 0 1 1-.944 1.166L7.49 9.313a5.249 5.249 0 1 0 5.87-2.384" clip-rule="evenodd"></svg:path>`,
})
export class SolarRadarBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRadialBlurBoldIcon],svg[solar-radial-blur-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M17 20.66C12.217 23.421 6.1 21.783 3.34 17C.577 12.217 2.216 6.1 7 3.34a9.96 9.96 0 0 1 6.195-1.27A9.99 9.99 0 0 1 20.66 7a9.99 9.99 0 0 1 .536 8.929A9.96 9.96 0 0 1 17 20.66M14.25 6.5a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5m0 4.5a1.25 1.25 0 1 0 0-2.5a1.25 1.25 0 0 0 0 2.5m0 4.5a1.25 1.25 0 1 0 0-2.5a1.25 1.25 0 0 0 0 2.5M11 14.25a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0M9.75 11a1.25 1.25 0 1 0 0-2.5a1.25 1.25 0 0 0 0 2.5M15 18.25a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0M9.75 19a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5m0-12.5a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5m8.5 2.5a.75.75 0 1 1 0 1.5a.75.75 0 0 1 0-1.5M6.5 9.75a.75.75 0 1 0-1.5 0a.75.75 0 0 0 1.5 0m11.75 3.75a.75.75 0 1 1 0 1.5a.75.75 0 0 1 0-1.5m-11.75.75a.75.75 0 1 0-1.5 0a.75.75 0 0 0 1.5 0" clip-rule="evenodd"></svg:path>`,
})
export class SolarRadialBlurBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRadioBoldIcon],svg[solar-radio-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.75 12.25v-.75a.75.75 0 0 0-1.5 0v.75H7a1.25 1.25 0 1 1 0-2.5h10a1.25 1.25 0 1 1 0 2.5zm-9 4.75a.75.75 0 1 1 1.5 0a.75.75 0 0 1-1.5 0"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M15.32 3.679a.75.75 0 1 0-.64-1.357L6.768 6.046c-1.736.089-2.821.351-3.595 1.126C2 8.343 2 10.229 2 14s0 5.657 1.172 6.828S6.229 22 10 22h4c3.771 0 5.657 0 6.828-1.172S22 17.771 22 14s0-5.657-1.172-6.828S17.771 6 14 6h-3.613zM7 8.25a2.75 2.75 0 0 0 0 5.5h10a2.75 2.75 0 1 0 0-5.5zM5.25 17a2.25 2.25 0 1 1 4.5 0a2.25 2.25 0 0 1-4.5 0m7 0a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarRadioBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRadioMinimalisticBoldIcon],svg[solar-radio-minimalistic-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.75 14a2.25 2.25 0 1 1 4.5 0a2.25 2.25 0 0 1-4.5 0"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M15.32 3.679a.75.75 0 1 0-.64-1.357L6.768 6.046c-1.736.089-2.821.351-3.595 1.126C2 8.343 2 10.229 2 14s0 5.657 1.172 6.828S6.229 22 10 22h4c3.771 0 5.657 0 6.828-1.172S22 17.771 22 14s0-5.657-1.172-6.828S17.771 6 14 6h-3.613zM8 10.25a3.75 3.75 0 1 0 0 7.5a3.75 3.75 0 0 0 0-7.5m4.75.75a.75.75 0 0 1 .75-.75H19a.75.75 0 0 1 0 1.5h-5.5a.75.75 0 0 1-.75-.75m.75 2.25a.75.75 0 0 0 0 1.5H19a.75.75 0 0 0 0-1.5zM12.75 17a.75.75 0 0 1 .75-.75H19a.75.75 0 0 1 0 1.5h-5.5a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarRadioMinimalisticBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRankingBoldIcon],svg[solar-ranking-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 10h2c1.414 0 2.121 0 2.56.44c.44.439.44 1.146.44 2.56v6c0-1.414 0-2.121.44-2.56C16.878 16 17.585 16 19 16s2.121 0 2.56.44c.44.439.44 1.146.44 2.56v3H2c0-1.414 0-2.121.44-2.56C2.878 19 3.585 19 5 19s2.121 0 2.56.44C8 19.878 8 20.585 8 22v-9c0-1.414 0-2.121.44-2.56C8.878 10 9.585 10 11 10m.146-6.977C11.526 2.34 11.716 2 12 2s.474.34.854 1.023l.098.176c.108.194.162.29.246.354c.085.064.19.088.4.135l.19.044c.738.167 1.107.25 1.195.532s-.164.577-.667 1.165l-.13.152c-.143.167-.215.25-.247.354s-.021.215 0 .438l.02.203c.076.785.114 1.178-.115 1.352c-.23.175-.576.015-1.267-.303l-.178-.082c-.197-.09-.295-.136-.399-.136s-.202.046-.399.136l-.178.082c-.691.318-1.037.478-1.267.303c-.23-.174-.191-.567-.115-1.352l.02-.203c.021-.223.032-.334 0-.438s-.104-.187-.247-.354l-.13-.152c-.503-.588-.755-.882-.667-1.165c.088-.282.457-.365 1.195-.532l.19-.044c.21-.047.315-.07.4-.135c.084-.064.138-.16.246-.354z"></svg:path>`,
})
export class SolarRankingBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarReciveSquareBoldIcon],svg[solar-recive-square-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12m4.25 0c0 .414.336.75.75.75h5.19l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 1 0-1.06 1.06l1.72 1.72H7a.75.75 0 0 0-.75.75m11.5-4a.75.75 0 0 0-1.5 0v8a.75.75 0 0 0 1.5 0z" clip-rule="evenodd"></svg:path>`,
})
export class SolarReciveSquareBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarReciveTwiceSquareBoldIcon],svg[solar-recive-twice-square-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464M7 14.75a.75.75 0 0 0 0 1.5h4.929l-1.41 1.174a.75.75 0 0 0 .961 1.152l3-2.5a.75.75 0 0 0 0-1.152l-3-2.5a.75.75 0 0 0-.96 1.152l1.409 1.174zM6.25 8.5A.75.75 0 0 1 7 7.75h4.929l-1.41-1.174a.75.75 0 0 1 .961-1.152l3 2.5a.75.75 0 0 1 0 1.152l-3 2.5a.75.75 0 0 1-.96-1.152l1.409-1.174H7a.75.75 0 0 1-.75-.75M17.75 6a.75.75 0 0 0-1.5 0v12a.75.75 0 0 0 1.5 0z" clip-rule="evenodd"></svg:path>`,
})
export class SolarReciveTwiceSquareBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRecordBoldIcon],svg[solar-record-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="12" cy="12" r="10" fill="currentColor"></svg:circle>`,
})
export class SolarRecordBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRecordCircleBoldIcon],svg[solar-record-circle-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.25 12a1.75 1.75 0 1 1 3.5 0a1.75 1.75 0 0 1-3.5 0M8 13.75a1.75 1.75 0 1 0 0-3.5a1.75 1.75 0 0 0 0 3.5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10m1.26-8.25a3.25 3.25 0 1 1 2.74 1.5H8a3.25 3.25 0 1 1 2.74-1.5z" clip-rule="evenodd"></svg:path>`,
})
export class SolarRecordCircleBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRecordMinimalisticBoldIcon],svg[solar-record-minimalistic-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.889 16C3.74 16 2 14.21 2 12s1.741-4 3.889-4s3.889 1.79 3.889 4a4.06 4.06 0 0 1-.697 2.286h5.838A4.06 4.06 0 0 1 14.222 12c0-2.21 1.741-4 3.89-4C20.258 8 22 9.79 22 12s-1.741 4-3.889 4z"></svg:path>`,
})
export class SolarRecordMinimalisticBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRecordSquareBoldIcon],svg[solar-record-square-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.25 12a1.75 1.75 0 1 1 3.5 0a1.75 1.75 0 0 1-3.5 0M8 13.75a1.75 1.75 0 1 0 0-3.5a1.75 1.75 0 0 0 0 3.5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464m9.797 10.286a3.25 3.25 0 1 1 2.74 1.5H7.999a3.25 3.25 0 1 1 2.74-1.5z" clip-rule="evenodd"></svg:path>`,
})
export class SolarRecordSquareBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarReel2BoldIcon],svg[solar-reel-2-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 14.25a2.25 2.25 0 1 1 0-4.5a2.25 2.25 0 0 1 0 4.5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10a9.99 9.99 0 0 1-4.73 8.5h3.98a.75.75 0 0 1 0 1.5zm1-16.5a1 1 0 1 0-2 0a1 1 0 0 0 2 0M6.5 12a1 1 0 1 1-2 0a1 1 0 0 1 2 0m13 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0M12 17.5a1 1 0 1 1 0 2a1 1 0 0 1 0-2M8.25 12a3.75 3.75 0 1 0 7.5 0a3.75 3.75 0 0 0-7.5 0" clip-rule="evenodd"></svg:path>`,
})
export class SolarReel2BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarReelBoldIcon],svg[solar-reel-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 12c0 5.523 4.477 10 10 10h9.25a.75.75 0 0 0 0-1.5h-3.98A9.99 9.99 0 0 0 22 12c0-5.523-4.477-10-10-10S2 6.477 2 12m10-3a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m0 9a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m-4.5-7.5a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3M18 12a1.5 1.5 0 1 0-3 0a1.5 1.5 0 0 0 3 0" clip-rule="evenodd"></svg:path>`,
})
export class SolarReelBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRefreshBoldIcon],svg[solar-refresh-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.079 2.25c-4.794 0-8.734 3.663-9.118 8.333H2a.75.75 0 0 0-.528 1.283l1.68 1.666a.75.75 0 0 0 1.056 0l1.68-1.666a.75.75 0 0 0-.528-1.283h-.893c.38-3.831 3.638-6.833 7.612-6.833a7.66 7.66 0 0 1 6.537 3.643a.75.75 0 1 0 1.277-.786A9.16 9.16 0 0 0 12.08 2.25m8.761 8.217a.75.75 0 0 0-1.054 0L18.1 12.133a.75.75 0 0 0 .527 1.284h.899c-.382 3.83-3.651 6.833-7.644 6.833a7.7 7.7 0 0 1-6.565-3.644a.75.75 0 1 0-1.277.788a9.2 9.2 0 0 0 7.842 4.356c4.808 0 8.765-3.66 9.15-8.333H22a.75.75 0 0 0 .527-1.284z"></svg:path>`,
})
export class SolarRefreshBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRefreshCircleBoldIcon],svg[solar-refresh-circle-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10m-16.54-.917a6.59 6.59 0 0 1 6.55-5.833a6.59 6.59 0 0 1 5.242 2.592a.75.75 0 0 1-1.192.911a5.09 5.09 0 0 0-4.05-2.003a5.09 5.09 0 0 0-5.037 4.333h.364a.75.75 0 0 1 .53 1.281l-1.169 1.167a.75.75 0 0 1-1.06 0L4.47 12.364a.75.75 0 0 1 .53-1.28zm12.902-.614a.75.75 0 0 0-1.06 0l-1.168 1.167a.75.75 0 0 0 .53 1.28h.363a5.09 5.09 0 0 1-5.036 4.334a5.08 5.08 0 0 1-4.038-1.986a.75.75 0 0 0-1.188.916a6.58 6.58 0 0 0 5.226 2.57a6.59 6.59 0 0 0 6.549-5.833H19a.75.75 0 0 0 .53-1.281z" clip-rule="evenodd"></svg:path>`,
})
export class SolarRefreshCircleBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRefreshSquareBoldIcon],svg[solar-refresh-square-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464m1.997 7.62A6.59 6.59 0 0 1 12.01 5.25c1.982 0 3.76.875 4.967 2.257a.75.75 0 0 1-1.13.986A5.08 5.08 0 0 0 12.01 6.75a5.09 5.09 0 0 0-5.037 4.333h.364a.75.75 0 0 1 .53 1.281l-1.169 1.167a.75.75 0 0 1-1.06 0L4.47 12.364a.75.75 0 0 1 .53-1.28zm11.84-.615a.75.75 0 0 1 1.06 0l1.169 1.167a.75.75 0 0 1-.53 1.28h-.46a6.59 6.59 0 0 1-6.55 5.834a6.58 6.58 0 0 1-4.967-2.256a.75.75 0 0 1 1.13-.987a5.08 5.08 0 0 0 3.838 1.743a5.09 5.09 0 0 0 5.036-4.333h-.363a.75.75 0 0 1-.53-1.281z" clip-rule="evenodd"></svg:path>`,
})
export class SolarRefreshSquareBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRemoteController2BoldIcon],svg[solar-remote-controller-2-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.75 15.5a2.25 2.25 0 1 1 4.5 0a2.25 2.25 0 0 1-4.5 0"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M5.674 3.778C5 4.787 5 6.19 5 9v6c0 2.809 0 4.213.674 5.222a4 4 0 0 0 1.104 1.104C7.787 22 9.19 22 12 22s4.213 0 5.222-.674a4 4 0 0 0 1.104-1.104C19 19.213 19 17.81 19 15V9c0-2.809 0-4.213-.674-5.222a4 4 0 0 0-1.104-1.104C16.213 2 14.81 2 12 2s-4.213 0-5.222.674a4 4 0 0 0-1.104 1.104M12 11.75a3.75 3.75 0 1 0 0 7.5a3.75 3.75 0 0 0 0-7.5M11 9.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0M10 7a1 1 0 1 0 0-2a1 1 0 0 0 0 2m5 2.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0M14 7a1 1 0 1 0 0-2a1 1 0 0 0 0 2" clip-rule="evenodd"></svg:path>`,
})
export class SolarRemoteController2BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRemoteControllerBoldIcon],svg[solar-remote-controller-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.75 15.5a2.25 2.25 0 1 1 4.5 0a2.25 2.25 0 0 1-4.5 0"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M5.674 3.778C5 4.787 5 6.19 5 9v6c0 2.809 0 4.213.674 5.222a4 4 0 0 0 1.104 1.104C7.787 22 9.19 22 12 22s4.213 0 5.222-.674a4 4 0 0 0 1.104-1.104C19 19.213 19 17.81 19 15V9c0-2.809 0-4.213-.674-5.222a4 4 0 0 0-1.104-1.104C16.213 2 14.81 2 12 2s-4.213 0-5.222.674a4 4 0 0 0-1.104 1.104M12 11.75a3.75 3.75 0 1 0 0 7.5a3.75 3.75 0 0 0 0-7.5M8.25 5.5A.75.75 0 0 1 9 4.75h6a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75M9 10a1 1 0 1 0 0-2a1 1 0 0 0 0 2m4-1a1 1 0 1 1-2 0a1 1 0 0 1 2 0m2 1a1 1 0 1 0 0-2a1 1 0 0 0 0 2" clip-rule="evenodd"></svg:path>`,
})
export class SolarRemoteControllerBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRemoteControllerMinimalisticBoldIcon],svg[solar-remote-controller-minimalistic-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.75 11a2.25 2.25 0 1 1 4.5 0a2.25 2.25 0 0 1-4.5 0"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M5.674 3.778C5 4.787 5 6.19 5 9v6c0 2.809 0 4.213.674 5.222a4 4 0 0 0 1.104 1.104C7.787 22 9.19 22 12 22s4.213 0 5.222-.674a4 4 0 0 0 1.104-1.104C19 19.213 19 17.81 19 15V9c0-2.809 0-4.213-.674-5.222a4 4 0 0 0-1.104-1.104C16.213 2 14.81 2 12 2s-4.213 0-5.222.674a4 4 0 0 0-1.104 1.104M12 7.25a3.75 3.75 0 1 0 0 7.5a3.75 3.75 0 0 0 0-7.5M13 5a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-1 13a1 1 0 1 0 0-2a1 1 0 0 0 0 2" clip-rule="evenodd"></svg:path>`,
})
export class SolarRemoteControllerMinimalisticBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRemoveFolderBoldIcon],svg[solar-remove-folder-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.07 5.258C2 5.626 2 6.068 2 6.95V14c0 3.771 0 5.657 1.172 6.828S6.229 22 10 22h4c3.771 0 5.657 0 6.828-1.172S22 17.771 22 14v-2.202c0-2.632 0-3.949-.77-4.804a3 3 0 0 0-.224-.225C20.151 6 18.834 6 16.202 6h-.374c-1.153 0-1.73 0-2.268-.153a4 4 0 0 1-.848-.352C12.224 5.224 11.816 4.815 11 4l-.55-.55c-.274-.274-.41-.41-.554-.53a4 4 0 0 0-2.18-.903C7.53 2 7.336 2 6.95 2c-.883 0-1.324 0-1.692.07A4 4 0 0 0 2.07 5.257M9.25 13a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarRemoveFolderBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarReorderBoldIcon],svg[solar-reorder-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.464 20.536C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535M19 18.75a.75.75 0 0 0 0-1.5H5a.75.75 0 0 0 0 1.5zm.75-4.75a.75.75 0 0 1-.75.75H5a.75.75 0 0 1 0-1.5h14a.75.75 0 0 1 .75.75M19 10.75a.75.75 0 0 0 0-1.5H5a.75.75 0 0 0 0 1.5zM19.75 6a.75.75 0 0 1-.75.75H5a.75.75 0 0 1 0-1.5h14a.75.75 0 0 1 .75.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarReorderBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRepeatBoldIcon],svg[solar-repeat-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.47 2.47a.75.75 0 0 1 1.06 0l2 2A.75.75 0 0 1 11 5.75H9a6.25 6.25 0 1 0 0 12.5h.5a.75.75 0 0 1 0 1.5H9a7.75 7.75 0 0 1 0-15.5h.19l-.72-.72a.75.75 0 0 1 0-1.06M13.75 5a.75.75 0 0 1 .75-.75h.5a7.75 7.75 0 0 1 0 15.5h-.19l.72.72a.75.75 0 1 1-1.06 1.06l-2-2a.75.75 0 0 1 .53-1.28h2a6.25 6.25 0 1 0 0-12.5h-.5a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarRepeatBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRepeatOneBoldIcon],svg[solar-repeat-one-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.47 2.47a.75.75 0 0 1 1.06 0l2 2A.75.75 0 0 1 11 5.75H9a6.25 6.25 0 1 0 0 12.5h.5a.75.75 0 0 1 0 1.5H9a7.75 7.75 0 0 1 0-15.5h.19l-.72-.72a.75.75 0 0 1 0-1.06M13.75 5a.75.75 0 0 1 .75-.75h.5a7.75 7.75 0 0 1 0 15.5h-.19l.72.72a.75.75 0 1 1-1.06 1.06l-2-2a.75.75 0 0 1 .53-1.28h2a6.25 6.25 0 1 0 0-12.5h-.5a.75.75 0 0 1-.75-.75m-1.463 4.307a.75.75 0 0 1 .463.693v4a.75.75 0 0 1-1.5 0v-2.19l-.22.22a.75.75 0 1 1-1.06-1.06l1.5-1.5a.75.75 0 0 1 .817-.163" clip-rule="evenodd"></svg:path>`,
})
export class SolarRepeatOneBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRepeatOneMinimalisticBoldIcon],svg[solar-repeat-one-minimalistic-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.716 3.203a.7.7 0 0 1 .987 0l1.86 1.846c.2.198.26.496.151.754a.7.7 0 0 1-.644.428H9.21C5.997 6.23 3.394 8.814 3.394 12S6 17.77 9.21 17.77h.464c.386 0 .698.31.698.692a.695.695 0 0 1-.698.692H9.21C5.228 19.154 2 15.95 2 12s3.228-7.154 7.21-7.154h.175l-.669-.664a.69.69 0 0 1 0-.98m4.912 2.336c0-.382.312-.692.698-.692h.465C18.772 4.846 22 8.05 22 12s-3.228 7.154-7.21 7.154h-.175l.669.664a.69.69 0 0 1 0 .98a.7.7 0 0 1-.987 0l-1.86-1.847a.69.69 0 0 1-.151-.754a.7.7 0 0 1 .644-.428h1.86c3.212 0 5.815-2.583 5.815-5.769s-2.603-5.77-5.814-5.77h-.465a.695.695 0 0 1-.698-.692" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M5.488 12c0-2.04 1.666-3.692 3.721-3.692h5.582c2.055 0 3.72 1.653 3.72 3.692s-1.665 3.692-3.72 3.692H9.209c-2.055 0-3.72-1.653-3.72-3.692"></svg:path>`,
})
export class SolarRepeatOneMinimalisticBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarReply2BoldIcon],svg[solar-reply-2-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M19.5 6.25a.75.75 0 0 1 .75.75c0 2.244-.952 3.72-2.187 4.609c-1.196.861-2.61 1.141-3.563 1.141H6.31l3.72 3.72a.75.75 0 1 1-1.06 1.06l-5-5a.75.75 0 0 1 0-1.06l5-5a.75.75 0 1 1 1.06 1.06l-3.72 3.72h8.19c.713 0 1.8-.22 2.687-.859c.848-.61 1.563-1.635 1.563-3.391a.75.75 0 0 1 .75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarReply2BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarReplyBoldIcon],svg[solar-reply-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10.03 6.47a.75.75 0 0 1 0 1.06l-3.72 3.72h8.19c.953 0 2.367.28 3.563 1.141c1.235.89 2.187 2.365 2.187 4.609a.75.75 0 0 1-1.5 0c0-1.756-.715-2.78-1.563-3.391c-.887-.639-1.974-.859-2.687-.859H6.31l3.72 3.72a.75.75 0 1 1-1.06 1.06l-5-5a.75.75 0 0 1 0-1.06l5-5a.75.75 0 0 1 1.06 0" clip-rule="evenodd"></svg:path>`,
})
export class SolarReplyBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRestartBoldIcon],svg[solar-restart-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.258 3.508a.75.75 0 0 1 .463.693v4.243a.75.75 0 0 1-.75.75h-4.243a.75.75 0 0 1-.53-1.28L14.8 6.31a7.25 7.25 0 1 0 4.393 5.783a.75.75 0 0 1 1.488-.187A8.75 8.75 0 1 1 15.93 5.18l1.51-1.51a.75.75 0 0 1 .817-.162"></svg:path>`,
})
export class SolarRestartBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRestartCircleBoldIcon],svg[solar-restart-circle-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10m3.935-16.408a.75.75 0 0 1 .467.694v2.715a.75.75 0 0 1-.75.75H13a.75.75 0 0 1-.537-1.274l.762-.78a4.17 4.17 0 0 0-4.224 1.089c-1.668 1.707-1.668 4.483 0 6.19a4.17 4.17 0 0 0 5.998 0a4.4 4.4 0 0 0 1.208-2.472c.058-.418.39-.77.812-.77c.406 0 .742.325.703.729a5.9 5.9 0 0 1-1.65 3.562a5.67 5.67 0 0 1-8.144 0c-2.237-2.29-2.237-5.997 0-8.287a5.67 5.67 0 0 1 6.437-1.208l.75-.768a.75.75 0 0 1 .82-.17" clip-rule="evenodd"></svg:path>`,
})
export class SolarRestartCircleBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRestartSquareBoldIcon],svg[solar-restart-square-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12m13.935-6.408a.75.75 0 0 1 .467.694v2.715a.75.75 0 0 1-.75.75H13a.75.75 0 0 1-.537-1.274l.762-.78a4.17 4.17 0 0 0-4.224 1.089c-1.668 1.707-1.668 4.483 0 6.19a4.17 4.17 0 0 0 5.998 0a4.4 4.4 0 0 0 1.208-2.472c.058-.418.39-.77.812-.77c.406 0 .742.325.703.729a5.9 5.9 0 0 1-1.65 3.562a5.67 5.67 0 0 1-8.144 0c-2.237-2.29-2.237-5.997 0-8.287a5.67 5.67 0 0 1 6.437-1.208l.75-.768a.75.75 0 0 1 .82-.17" clip-rule="evenodd"></svg:path>`,
})
export class SolarRestartSquareBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRevoteBoldIcon],svg[solar-revote-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10.435.306A.75.75 0 0 1 10.9 1v.978l1.083-.001h.075c2.072 0 3.705 0 4.981.174c1.31.179 2.356.554 3.177 1.387c.82.832 1.187 1.89 1.363 3.214c.171 1.293.171 2.95.171 5.055v.113c0 2.105 0 3.761-.171 5.054c-.176 1.326-.543 2.382-1.363 3.214c-.82.834-1.866 1.209-3.177 1.388c-1.276.174-2.909.174-4.981.174h-.116c-2.072 0-3.705 0-4.981-.174c-1.31-.18-2.356-.554-3.177-1.388c-.82-.832-1.187-1.888-1.363-3.214c-.171-1.293-.171-2.949-.171-5.054v-.113c0-2.106 0-3.762.171-5.055c.176-1.325.543-2.382 1.363-3.214a.75.75 0 1 1 1.068 1.053c-.498.506-.79 1.195-.944 2.358c-.156 1.183-.158 2.74-.158 4.914c0 2.175.002 3.731.158 4.915c.154 1.162.446 1.852.944 2.358c.497.504 1.172.798 2.312.954c1.163.158 2.693.16 4.836.16s3.673-.002 4.836-.16c1.14-.156 1.815-.45 2.312-.954c.498-.506.79-1.196.944-2.358c.157-1.184.158-2.74.158-4.915s-.002-3.73-.158-4.914c-.154-1.163-.446-1.852-.944-2.358c-.497-.504-1.171-.798-2.312-.954c-1.163-.159-2.693-.16-4.836-.16h-1.1v1.077a.75.75 0 0 1-1.284.526l-1.75-1.777a.75.75 0 0 1 0-1.052L9.616.474a.75.75 0 0 1 .819-.168" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M16.03 10.03a.75.75 0 0 0-1.06-1.06l-4.47 4.47l-1.47-1.47a.75.75 0 1 0-1.06 1.06l2 2a.75.75 0 0 0 1.06 0z"></svg:path>`,
})
export class SolarRevoteBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRewind10SecondsBackBoldIcon],svg[solar-rewind-10-seconds-back-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M10.325 7.824a.75.75 0 0 1 .425.676v7a.75.75 0 0 1-1.5 0v-5.44l-1.281 1.026a.75.75 0 0 1-.937-1.172l2.5-2a.75.75 0 0 1 .793-.09M14.25 9.25a1 1 0 0 0-1 1v3.5a1 1 0 1 0 2 0v-3.5a1 1 0 0 0-1-1m-2.5 1a2.5 2.5 0 0 1 5 0v3.5a2.5 2.5 0 0 1-5 0z"></svg:path><svg:path d="M11.324 1.675A.75.75 0 0 1 12 1.25q1.104.002 2.15.215c4.906.996 8.6 5.333 8.6 10.535c0 5.937-4.813 10.75-10.75 10.75S1.25 17.937 1.25 12c0-4.41 2.655-8.197 6.45-9.855a.75.75 0 1 1 .6 1.374A9.25 9.25 0 1 0 21.25 12a9.255 9.255 0 0 0-6.5-8.834V4.5a.75.75 0 0 1-1.336.469l-2-2.5a.75.75 0 0 1-.09-.794"></svg:path></svg:g>`,
})
export class SolarRewind10SecondsBackBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRewind10SecondsForwardBoldIcon],svg[solar-rewind-10-seconds-forward-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M10.325 7.824a.75.75 0 0 1 .425.676v7a.75.75 0 0 1-1.5 0v-5.44l-1.281 1.026a.75.75 0 0 1-.937-1.172l2.5-2a.75.75 0 0 1 .793-.09M14.25 9.25a1 1 0 0 0-1 1v3.5a1 1 0 1 0 2 0v-3.5a1 1 0 0 0-1-1m-2.5 1a2.5 2.5 0 0 1 5 0v3.5a2.5 2.5 0 0 1-5 0z"></svg:path><svg:path d="M12.676 1.675A.75.75 0 0 0 12 1.25q-1.104.002-2.15.215C4.945 2.461 1.25 6.798 1.25 12c0 5.937 4.813 10.75 10.75 10.75S22.75 17.937 22.75 12c0-4.41-2.655-8.197-6.45-9.855a.75.75 0 0 0-.6 1.374A9.25 9.25 0 1 1 2.75 12a9.255 9.255 0 0 1 6.5-8.834V4.5a.75.75 0 0 0 1.336.469l2-2.5a.75.75 0 0 0 .09-.794"></svg:path></svg:g>`,
})
export class SolarRewind10SecondsForwardBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRewind15SecondsBackBoldIcon],svg[solar-rewind-15-seconds-back-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M10.325 7.824a.75.75 0 0 1 .425.676v7a.75.75 0 0 1-1.5 0v-5.44l-1.281 1.026a.75.75 0 0 1-.937-1.172l2.5-2a.75.75 0 0 1 .793-.09m2.35.78a1.25 1.25 0 0 1 1.185-.854h2.64a.75.75 0 0 1 0 1.5h-2.46l-.5 1.5h.96a2.75 2.75 0 1 1 0 5.5h-2a.75.75 0 0 1 0-1.5h2a1.25 1.25 0 1 0 0-2.5h-1.306a1.25 1.25 0 0 1-1.186-1.645z"></svg:path><svg:path d="M11.324 1.675A.75.75 0 0 1 12 1.25q1.104.002 2.15.215c4.906.996 8.6 5.333 8.6 10.535c0 5.937-4.813 10.75-10.75 10.75S1.25 17.937 1.25 12c0-4.41 2.655-8.197 6.45-9.855a.75.75 0 1 1 .6 1.374A9.25 9.25 0 1 0 21.25 12a9.255 9.255 0 0 0-6.5-8.834V4.5a.75.75 0 0 1-1.336.469l-2-2.5a.75.75 0 0 1-.09-.794"></svg:path></svg:g>`,
})
export class SolarRewind15SecondsBackBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRewind15SecondsForwardBoldIcon],svg[solar-rewind-15-seconds-forward-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M10.325 7.824a.75.75 0 0 1 .425.676v7a.75.75 0 0 1-1.5 0v-5.44l-1.281 1.026a.75.75 0 0 1-.937-1.172l2.5-2a.75.75 0 0 1 .793-.09m2.35.78a1.25 1.25 0 0 1 1.185-.854h2.64a.75.75 0 0 1 0 1.5h-2.46l-.5 1.5h.96a2.75 2.75 0 1 1 0 5.5h-2a.75.75 0 0 1 0-1.5h2a1.25 1.25 0 1 0 0-2.5h-1.306a1.25 1.25 0 0 1-1.186-1.645z"></svg:path><svg:path d="M12.676 1.675A.75.75 0 0 0 12 1.25q-1.104.002-2.15.215C4.945 2.461 1.25 6.798 1.25 12c0 5.937 4.813 10.75 10.75 10.75S22.75 17.937 22.75 12c0-4.41-2.655-8.197-6.45-9.855a.75.75 0 0 0-.6 1.374A9.25 9.25 0 1 1 2.75 12a9.255 9.255 0 0 1 6.5-8.834V4.5a.75.75 0 0 0 1.336.469l2-2.5a.75.75 0 0 0 .09-.794"></svg:path></svg:g>`,
})
export class SolarRewind15SecondsForwardBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRewind5SecondsBackBoldIcon],svg[solar-rewind-5-seconds-back-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M10.175 8.605a1.25 1.25 0 0 1 1.185-.855H14a.75.75 0 0 1 0 1.5h-2.46l-.5 1.5H12a2.75 2.75 0 1 1 0 5.5h-2a.75.75 0 0 1 0-1.5h2a1.25 1.25 0 1 0 0-2.5h-1.306a1.25 1.25 0 0 1-1.186-1.645z"></svg:path><svg:path d="M11.324 1.675A.75.75 0 0 1 12 1.25q1.104.002 2.15.215c4.906.996 8.6 5.333 8.6 10.535c0 5.937-4.813 10.75-10.75 10.75S1.25 17.937 1.25 12c0-4.41 2.655-8.197 6.45-9.855a.75.75 0 1 1 .6 1.374A9.25 9.25 0 1 0 21.25 12a9.255 9.255 0 0 0-6.5-8.834V4.5a.75.75 0 0 1-1.336.469l-2-2.5a.75.75 0 0 1-.09-.794"></svg:path></svg:g>`,
})
export class SolarRewind5SecondsBackBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRewind5SecondsForwardBoldIcon],svg[solar-rewind-5-seconds-forward-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M10.175 8.605a1.25 1.25 0 0 1 1.185-.855H14a.75.75 0 0 1 0 1.5h-2.46l-.5 1.5H12a2.75 2.75 0 1 1 0 5.5h-2a.75.75 0 0 1 0-1.5h2a1.25 1.25 0 1 0 0-2.5h-1.306a1.25 1.25 0 0 1-1.186-1.645z"></svg:path><svg:path d="M12.676 1.675A.75.75 0 0 0 12 1.25q-1.104.002-2.15.215C4.945 2.461 1.25 6.798 1.25 12c0 5.937 4.813 10.75 10.75 10.75S22.75 17.937 22.75 12c0-4.41-2.655-8.197-6.45-9.855a.75.75 0 0 0-.6 1.374A9.25 9.25 0 1 1 2.75 12a9.255 9.255 0 0 1 6.5-8.834V4.5a.75.75 0 0 0 1.336.469l2-2.5a.75.75 0 0 0 .09-.794"></svg:path></svg:g>`,
})
export class SolarRewind5SecondsForwardBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRewindBackBoldIcon],svg[solar-rewind-back-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 17.574V6.426c0-1.847-1.6-3.015-2.903-2.118L13 8.768V7.123c0-1.616-1.467-2.638-2.661-1.853L2.92 10.147c-1.228.807-1.228 2.899 0 3.706l7.418 4.877c1.194.785 2.661-.237 2.661-1.853v-1.645l6.097 4.46c1.302.897 2.903-.27 2.903-2.118"></svg:path>`,
})
export class SolarRewindBackBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRewindBackCircleBoldIcon],svg[solar-rewind-back-circle-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10M10.564 7.461a.75.75 0 1 1 .872 1.22l-3.222 2.302a1.25 1.25 0 0 0 0 2.034l3.222 2.301a.75.75 0 0 1-.872 1.22l-3.222-2.3a2.75 2.75 0 0 1 0-4.476zm5.936 7.67V8.87a1 1 0 0 0-1.555-.832l-4.697 3.131a1 1 0 0 0 0 1.664l4.697 3.132a1 1 0 0 0 1.555-.832" clip-rule="evenodd"></svg:path>`,
})
export class SolarRewindBackCircleBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRewindForwardBoldIcon],svg[solar-rewind-forward-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 17.574V6.426C2 4.58 3.6 3.411 4.903 4.308L11 8.768V7.123c0-1.616 1.467-2.638 2.661-1.853l7.417 4.877c1.229.807 1.229 2.899 0 3.706l-7.417 4.877c-1.194.785-2.661-.237-2.661-1.853v-1.645l-6.097 4.46C3.601 20.589 2 19.422 2 17.574"></svg:path>`,
})
export class SolarRewindForwardBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRewindForwardCircleBoldIcon],svg[solar-rewind-forward-circle-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10m1.436-14.539a.75.75 0 1 0-.872 1.22l3.222 2.302a1.25 1.25 0 0 1 0 2.034l-3.222 2.301a.75.75 0 0 0 .872 1.22l3.221-2.3a2.75 2.75 0 0 0 0-4.476zM7.5 15.131V8.87a1 1 0 0 1 1.555-.832l4.697 3.131a1 1 0 0 1 0 1.664l-4.697 3.132a1 1 0 0 1-1.555-.832" clip-rule="evenodd"></svg:path>`,
})
export class SolarRewindForwardCircleBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRocket2BoldIcon],svg[solar-rocket-2-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.774 12.481a.76.76 0 0 1 0 1.074l-.156.155a.34.34 0 0 0 0 .48a.34.34 0 0 0 .483 0l1.713-1.71a.76.76 0 0 1 1.072 1.075l-1.712 1.71a1.86 1.86 0 0 1-2.629 0a1.857 1.857 0 0 1 0-2.629l.156-.155a.76.76 0 0 1 1.073 0m4.913 1.009a.76.76 0 0 1 0 1.073l-2.143 2.143a.76.76 0 0 1-1.073-1.074l2.142-2.142a.76.76 0 0 1 1.074 0m2.809 2.805a.76.76 0 0 1 0 1.074l-2.128 2.128a.76.76 0 0 1-1.073-1.074l2.127-2.128a.76.76 0 0 1 1.074 0m-3.199.401c.293.3.288.78-.012 1.073l-1.73 1.692a.759.759 0 0 1-1.061-1.085l1.73-1.692a.76.76 0 0 1 1.073.012m4.184 1.422a.76.76 0 0 1 0 1.074l-1.713 1.71a.34.34 0 0 0 0 .48c.134.133.35.133.484 0l.156-.155A.759.759 0 0 1 11.48 22.3l-.155.155a1.86 1.86 0 0 1-2.63 0a1.857 1.857 0 0 1 0-2.629l1.713-1.71a.76.76 0 0 1 1.073.001" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M10.846 5.41L8.66 7.59c-.402.401-.771.769-1.063 1.101a5 5 0 0 0-.532.706l-.021-.022l-.081-.08a4.2 4.2 0 0 0-1.318-.864l-.106-.043l-.326-.129a.658.658 0 0 1-.223-1.077c.963-.961 2.12-2.114 2.679-2.346a2.9 2.9 0 0 1 1.537-.197c.47.07.915.311 1.641.77m3.735 11.484c.176.18.293.305.399.44q.21.268.373.567c.123.223.218.462.408.939c.155.388.67.491.969.193l.072-.072c.963-.96 2.12-2.114 2.353-2.671c.205-.49.273-1.021.197-1.533c-.07-.468-.312-.912-.772-1.636l-2.195 2.189c-.411.41-.788.786-1.13 1.08a5 5 0 0 1-.674.504"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="m15.502 14.367l5.03-5.014c.724-.722 1.087-1.083 1.277-1.543C22 7.351 22 6.84 22 5.82v-.49c0-1.57 0-2.355-.49-2.843C21.022 2 20.235 2 18.659 2h-.489c-1.024 0-1.537 0-1.997.19s-.823.551-1.547 1.274l-5.03 5.014c-.846.844-1.371 1.367-1.574 1.873c-.064.16-.097.317-.097.483c0 .69.557 1.245 1.671 2.356l.15.149l1.754-1.78a.645.645 0 0 1 .919.906l-1.76 1.785l.119.117c1.114 1.11 1.67 1.666 2.362 1.666q.228 0 .447-.081c.519-.191 1.048-.72 1.916-1.585m2.363-5.888c-.652.65-1.71.65-2.363 0a1.66 1.66 0 0 1 0-2.356c.653-.65 1.71-.65 2.363 0s.653 1.705 0 2.356" clip-rule="evenodd"></svg:path>`,
})
export class SolarRocket2BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRocketBoldIcon],svg[solar-rocket-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.034 5.963L6.491 8.5c-.467.466-.896.893-1.235 1.28a6 6 0 0 0-.619.82l-.024-.025l-.095-.094a4.9 4.9 0 0 0-1.532-1.004l-.123-.05l-.379-.15a.764.764 0 0 1-.259-1.252C3.345 6.907 4.69 5.566 5.34 5.297a3.4 3.4 0 0 1 1.788-.229c.546.081 1.063.362 1.907.895m4.342 13.35c.205.208.34.355.464.512q.243.311.434.658c.142.26.253.537.474 1.092a.69.69 0 0 0 1.126.224l.084-.083c1.12-1.117 2.465-2.458 2.735-3.105a3.35 3.35 0 0 0 .229-1.782c-.081-.545-.362-1.06-.897-1.902l-2.552 2.544c-.478.477-.916.914-1.313 1.256c-.237.206-.497.41-.784.586"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="m14.447 16.377l5.847-5.83c.842-.839 1.263-1.259 1.484-1.792S22 7.627 22 6.44v-.567c0-1.826 0-2.739-.569-3.306S19.947 2 18.116 2h-.57c-1.19 0-1.785 0-2.32.221c-.536.221-.957.641-1.8 1.48L7.58 9.531c-.984.98-1.594 1.589-1.83 2.176a1.5 1.5 0 0 0-.112.562c0 .802.647 1.448 1.942 2.739l.174.173l2.038-2.069a.75.75 0 1 1 1.069 1.053L8.816 16.24l.137.137c1.295 1.29 1.943 1.936 2.747 1.936c.178 0 .348-.031.519-.094c.603-.222 1.219-.836 2.228-1.842m2.747-6.846a1.946 1.946 0 0 1-2.747 0a1.93 1.93 0 0 1 0-2.738a1.946 1.946 0 0 1 2.747 0a1.93 1.93 0 0 1 0 2.738" clip-rule="evenodd"></svg:path>`,
})
export class SolarRocketBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRollingPinBoldIcon],svg[solar-rolling-pin-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13.157 17.013l3.855-3.856c1.454-1.454 2.182-2.181 2.182-3.085c0-.605-.327-1.131-.98-1.85a38 38 0 0 0-1.202-1.234c-.48-.48-.88-.881-1.234-1.203c-.719-.652-1.245-.979-1.85-.979c-.904 0-1.63.727-3.085 2.182l-3.856 3.855c-1.454 1.454-2.18 2.182-2.18 3.085c0 .605.326 1.131.978 1.85c.322.354.722.755 1.202 1.235s.88.88 1.235 1.202c.718.652 1.245.979 1.85.979c.903 0 1.63-.727 3.085-2.181m7.909-14.451c.041.037.09.086.188.184s.147.147.184.188a2.18 2.18 0 0 1-.262 3.17c-.044.034-.1.074-.213.155l-1.52 1.086l-.118-.132a39 39 0 0 0-1.232-1.266l-.04-.04a39 39 0 0 0-1.267-1.232l-.13-.118l1.085-1.52c.08-.113.12-.169.155-.213a2.18 2.18 0 0 1 3.17-.262M4.557 16.655l.118.131c.346.381.768.803 1.231 1.267l.041.04c.463.464.886.886 1.266 1.232l.132.118l-1.086 1.52a4 4 0 0 1-.156.213a2.18 2.18 0 0 1-3.169.262a6 6 0 0 1-.188-.184c-.098-.098-.147-.147-.184-.188a2.18 2.18 0 0 1 .262-3.17c.044-.034.1-.075.213-.155z"></svg:path>`,
})
export class SolarRollingPinBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRoundAltArrowDownBoldIcon],svg[solar-round-alt-arrow-down-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10m3.53-12.03a.75.75 0 0 1 0 1.06l-3 3a.75.75 0 0 1-1.06 0l-3-3a.75.75 0 1 1 1.06-1.06L12 12.44l2.47-2.47a.75.75 0 0 1 1.06 0" clip-rule="evenodd"></svg:path>`,
})
export class SolarRoundAltArrowDownBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRoundAltArrowLeftBoldIcon],svg[solar-round-alt-arrow-left-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10m2.03-13.53a.75.75 0 0 1 0 1.06L11.56 12l2.47 2.47a.75.75 0 1 1-1.06 1.06l-3-3a.75.75 0 0 1 0-1.06l3-3a.75.75 0 0 1 1.06 0" clip-rule="evenodd"></svg:path>`,
})
export class SolarRoundAltArrowLeftBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRoundAltArrowRightBoldIcon],svg[solar-round-alt-arrow-right-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10M9.97 8.47a.75.75 0 0 1 1.06 0l3 3a.75.75 0 0 1 0 1.06l-3 3a.75.75 0 1 1-1.06-1.06L12.44 12L9.97 9.53a.75.75 0 0 1 0-1.06" clip-rule="evenodd"></svg:path>`,
})
export class SolarRoundAltArrowRightBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRoundAltArrowUpBoldIcon],svg[solar-round-alt-arrow-up-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10m0-12.25a.75.75 0 0 1 .53.22l3 3a.75.75 0 1 1-1.06 1.06L12 11.56l-2.47 2.47a.75.75 0 0 1-1.06-1.06l3-3a.75.75 0 0 1 .53-.22" clip-rule="evenodd"></svg:path>`,
})
export class SolarRoundAltArrowUpBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRoundArrowDownBoldIcon],svg[solar-round-arrow-down-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 12c0 5.523 4.477 10 10 10s10-4.477 10-10S17.523 2 12 2S2 6.477 2 12m13.53.47a.75.75 0 0 1 0 1.06l-3 3a.75.75 0 0 1-1.06 0l-3-3a.75.75 0 1 1 1.06-1.06l1.72 1.72V8a.75.75 0 0 1 1.5 0v6.19l1.72-1.72a.75.75 0 0 1 1.06 0" clip-rule="evenodd"></svg:path>`,
})
export class SolarRoundArrowDownBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRoundArrowLeftBoldIcon],svg[solar-round-arrow-left-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10m-.47-13.53a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 0 0 0 1.06l3 3a.75.75 0 1 0 1.06-1.06l-1.72-1.72H16a.75.75 0 0 0 0-1.5H9.81l1.72-1.72a.75.75 0 0 0 0-1.06" clip-rule="evenodd"></svg:path>`,
})
export class SolarRoundArrowLeftBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRoundArrowLeftDownBoldIcon],svg[solar-round-arrow-left-down-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2m2.25 13a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 1 1.5 0v2.69l4.72-4.72a.75.75 0 1 1 1.06 1.06l-4.72 4.72h2.69a.75.75 0 0 1 .75.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarRoundArrowLeftDownBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRoundArrowLeftUpBoldIcon],svg[solar-round-arrow-left-up-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10m2.25-13a.75.75 0 0 0-.75-.75H9a.75.75 0 0 0-.75.75v4.5a.75.75 0 0 0 1.5 0v-2.69l4.72 4.72a.75.75 0 1 0 1.06-1.06l-4.72-4.72h2.69a.75.75 0 0 0 .75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarRoundArrowLeftUpBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRoundArrowRightBoldIcon],svg[solar-round-arrow-right-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10m.47-13.53a.75.75 0 0 1 1.06 0l3 3a.75.75 0 0 1 0 1.06l-3 3a.75.75 0 1 1-1.06-1.06l1.72-1.72H8a.75.75 0 0 1 0-1.5h6.19l-1.72-1.72a.75.75 0 0 1 0-1.06" clip-rule="evenodd"></svg:path>`,
})
export class SolarRoundArrowRightBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRoundArrowRightDownBoldIcon],svg[solar-round-arrow-right-down-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2M9.75 15c0 .414.336.75.75.75H15a.75.75 0 0 0 .75-.75v-4.5a.75.75 0 0 0-1.5 0v2.69L9.53 8.47a.75.75 0 0 0-1.06 1.06l4.72 4.72H10.5a.75.75 0 0 0-.75.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarRoundArrowRightDownBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRoundArrowRightUpBoldIcon],svg[solar-round-arrow-right-up-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10M9.75 9a.75.75 0 0 1 .75-.75H15a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-1.5 0v-2.69l-4.72 4.72a.75.75 0 0 1-1.06-1.06l4.72-4.72H10.5A.75.75 0 0 1 9.75 9" clip-rule="evenodd"></svg:path>`,
})
export class SolarRoundArrowRightUpBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRoundArrowUpBoldIcon],svg[solar-round-arrow-up-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10s10-4.477 10-10m-13.53-.47a.75.75 0 0 1 0-1.06l3-3a.75.75 0 0 1 1.06 0l3 3a.75.75 0 1 1-1.06 1.06l-1.72-1.72V16a.75.75 0 0 1-1.5 0V9.81l-1.72 1.72a.75.75 0 0 1-1.06 0" clip-rule="evenodd"></svg:path>`,
})
export class SolarRoundArrowUpBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRoundDoubleAltArrowDownBoldIcon],svg[solar-round-double-alt-arrow-down-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10M8.47 13.03a.75.75 0 1 1 1.06-1.06L12 14.44l2.47-2.47a.75.75 0 1 1 1.06 1.06l-3 3a.75.75 0 0 1-1.06 0zm0-5.06a.75.75 0 0 0 0 1.06l3 3a.75.75 0 0 0 1.06 0l3-3a.75.75 0 0 0-1.06-1.06L12 10.44L9.53 7.97a.75.75 0 0 0-1.06 0" clip-rule="evenodd"></svg:path>`,
})
export class SolarRoundDoubleAltArrowDownBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRoundDoubleAltArrowLeftBoldIcon],svg[solar-round-double-alt-arrow-left-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10m-7.03-3.53a.75.75 0 1 1 1.06 1.06L13.56 12l2.47 2.47a.75.75 0 1 1-1.06 1.06l-3-3a.75.75 0 0 1 0-1.06zm-2.94 0a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 0 0 0 1.06l3 3a.75.75 0 1 0 1.06-1.06L9.56 12l2.47-2.47a.75.75 0 0 0 0-1.06" clip-rule="evenodd"></svg:path>`,
})
export class SolarRoundDoubleAltArrowLeftBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRoundDoubleAltArrowRightBoldIcon],svg[solar-round-double-alt-arrow-right-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10m-8.97-3.53a.75.75 0 1 0-1.06 1.06L14.44 12l-2.47 2.47a.75.75 0 1 0 1.06 1.06l3-3a.75.75 0 0 0 0-1.06zm-5.06 0a.75.75 0 0 1 1.06 0l3 3a.75.75 0 0 1 0 1.06l-3 3a.75.75 0 0 1-1.06-1.06L10.44 12L7.97 9.53a.75.75 0 0 1 0-1.06" clip-rule="evenodd"></svg:path>`,
})
export class SolarRoundDoubleAltArrowRightBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRoundDoubleAltArrowUpBoldIcon],svg[solar-round-double-alt-arrow-up-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10M8.47 14.97a.75.75 0 1 0 1.06 1.06L12 13.56l2.47 2.47a.75.75 0 1 0 1.06-1.06l-3-3a.75.75 0 0 0-1.06 0zm0-2.94a.75.75 0 0 1 0-1.06l3-3a.75.75 0 0 1 1.06 0l3 3a.75.75 0 1 1-1.06 1.06L12 9.56l-2.47 2.47a.75.75 0 0 1-1.06 0" clip-rule="evenodd"></svg:path>`,
})
export class SolarRoundDoubleAltArrowUpBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRoundGraphBoldIcon],svg[solar-round-graph-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12m9.25-7a.75.75 0 0 1 .75-.75A7.75 7.75 0 1 1 4.25 12a.75.75 0 0 1 1.5 0A6.25 6.25 0 1 0 12 5.75a.75.75 0 0 1-.75-.75M12 7.25a.75.75 0 0 0 0 1.5a3.25 3.25 0 0 1 0 6.5a.75.75 0 0 0 0 1.5a4.75 4.75 0 1 0 0-9.5" clip-rule="evenodd"></svg:path>`,
})
export class SolarRoundGraphBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRoundSortHorizontalBoldIcon],svg[solar-round-sort-horizontal-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10m-8.245-.555a.75.75 0 0 0-1.01 1.11l1.315 1.195H8a.75.75 0 0 0 0 1.5h6.06l-1.315 1.195a.75.75 0 0 0 1.01 1.11l2.75-2.5a.75.75 0 0 0 0-1.11zm-2.45-4.95a.75.75 0 0 1-.05 1.06L9.94 8.75H16a.75.75 0 0 1 0 1.5H9.94l1.315 1.195a.75.75 0 0 1-1.01 1.11l-2.75-2.5a.75.75 0 0 1 0-1.11l2.75-2.5a.75.75 0 0 1 1.06.05" clip-rule="evenodd"></svg:path>`,
})
export class SolarRoundSortHorizontalBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRoundSortVerticalBoldIcon],svg[solar-round-sort-vertical-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10m-7.5-4.75a.75.75 0 0 1 .555.245l2.5 2.75a.75.75 0 0 1-1.11 1.01L15.25 9.94V16a.75.75 0 0 1-1.5 0V9.94l-1.195 1.315a.75.75 0 0 1-1.11-1.01l2.5-2.75a.75.75 0 0 1 .555-.245m-5 0a.75.75 0 0 1 .75.75v6.06l1.195-1.315a.75.75 0 0 1 1.11 1.01l-2.5 2.75a.75.75 0 0 1-1.11 0l-2.5-2.75a.75.75 0 0 1 1.11-1.01L8.75 14.06V8a.75.75 0 0 1 .75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarRoundSortVerticalBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRoundTransferDiagonalBoldIcon],svg[solar-round-transfer-diagonal-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22C6.477 22 2 17.523 2 12a9.98 9.98 0 0 1 3.676-7.747l7.652 8.257a.75.75 0 0 0 1.3-.51V7.5a.75.75 0 0 0-1.5 0v2.588l-6.21-6.702A9.95 9.95 0 0 1 12 2c5.523 0 10 4.477 10 10a9.98 9.98 0 0 1-3.68 7.75l-7.9-8.268A.75.75 0 0 0 9.129 12v4.5a.75.75 0 0 0 1.5 0v-2.63l6.447 6.748A9.95 9.95 0 0 1 12 22"></svg:path>`,
})
export class SolarRoundTransferDiagonalBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRoundTransferHorizontalBoldIcon],svg[solar-round-transfer-horizontal-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10M7 14.75h8l-1.93 1.685a.75.75 0 0 0 .986 1.13l3.437-3A.75.75 0 0 0 17 13.25H7a.75.75 0 0 0 0 1.5m4.003-8.243a.75.75 0 0 1-.072 1.058L9 9.25h8a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.493-1.315l3.437-3a.75.75 0 0 1 1.059.072" clip-rule="evenodd"></svg:path>`,
})
export class SolarRoundTransferHorizontalBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRoundTransferVerticalBoldIcon],svg[solar-round-transfer-vertical-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2m2.75 15V9l1.685 1.93a.75.75 0 0 0 1.13-.986l-3-3.437A.75.75 0 0 0 13.25 7v10a.75.75 0 0 0 1.5 0m-8.243-4.003a.75.75 0 0 1 1.058.072L9.25 15V7a.75.75 0 0 1 1.5 0v10a.75.75 0 0 1-1.315.493l-3-3.437a.75.75 0 0 1 .072-1.059" clip-rule="evenodd"></svg:path>`,
})
export class SolarRoundTransferVerticalBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRoundedMagniferBoldIcon],svg[solar-rounded-magnifer-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M17.82 19.7a1.77 1.77 0 0 1 1.9-1.917c.189.016.414.084.643.154l.066.02l.06.018c.211.063.42.126.58.212a1.786 1.786 0 0 1 .638 2.55c-.1.151-.255.307-.41.464l-.045.044l-.044.045c-.156.157-.31.313-.46.414a1.754 1.754 0 0 1-2.528-.643a3.3 3.3 0 0 1-.21-.585l-.018-.06l-.02-.067c-.07-.232-.137-.459-.153-.648" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M20.128 11.143c0 5.05-4.058 9.143-9.064 9.143S2 16.192 2 11.143S6.058 2 11.064 2s9.064 4.093 9.064 9.143"></svg:path>`,
})
export class SolarRoundedMagniferBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRoundedMagniferBugBoldIcon],svg[solar-rounded-magnifer-bug-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M17.82 19.7a1.77 1.77 0 0 1 1.9-1.917c.189.016.414.084.643.154l.066.02l.06.018c.211.063.42.126.58.212a1.786 1.786 0 0 1 .638 2.55c-.1.151-.255.307-.41.464l-.045.044l-.044.045c-.156.157-.31.313-.46.414a1.754 1.754 0 0 1-2.528-.643c-.085-.16-.147-.372-.21-.585l-.018-.06l-.02-.067c-.07-.232-.137-.459-.153-.648m2.309-8.558c0 5.05-4.058 9.143-9.064 9.143S2 16.192 2 11.143S6.058 2 11.064 2s9.064 4.093 9.064 9.143M8.19 7.86A3.57 3.57 0 0 1 11 6.5c1.14 0 2.157.532 2.81 1.36l.68-.338a.716.716 0 0 1 .958.318a.71.71 0 0 1-.319.953l-.679.338q.121.442.122.922v.236h.714c.394 0 .714.319.714.711s-.32.71-.714.71h-.714v.237q-.002.48-.122.922l.679.338a.71.71 0 0 1 .32.953a.716.716 0 0 1-.959.318l-.68-.338A3.57 3.57 0 0 1 11 15.5a3.57 3.57 0 0 1-2.81-1.36l-.68.338a.716.716 0 0 1-.958-.318a.71.71 0 0 1 .32-.953l.678-.338a3.5 3.5 0 0 1-.121-.922v-.236h-.715A.71.71 0 0 1 6 11c0-.392.32-.71.714-.71h.715v-.237q.001-.48.121-.922l-.679-.338a.71.71 0 0 1-.32-.953a.716.716 0 0 1 .959-.318z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M11.714 13.958v-3.195h1.429v1.184a2.13 2.13 0 0 1-1.429 2.01m-2.857-2.01v-1.184h1.429v3.195a2.13 2.13 0 0 1-1.429-2.01m.123-2.606A2.14 2.14 0 0 1 11 7.921c.933 0 1.727.593 2.021 1.421z"></svg:path>`,
})
export class SolarRoundedMagniferBugBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRoundedMagniferZoomInBoldIcon],svg[solar-rounded-magnifer-zoom-in-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="solarRoundedMagniferZoomInBold0"><svg:g fill="none"><svg:path fill="#fff" d="M20.128 11.143c0 5.05-4.058 9.143-9.064 9.143S2 16.192 2 11.143S6.058 2 11.064 2s9.064 4.093 9.064 9.143"></svg:path><svg:path fill="#000" fill-rule="evenodd" d="M11.064 8.35c.417 0 .755.34.755.761v1.27h1.26c.416 0 .754.341.754.762c0 .42-.338.762-.755.762H11.82v1.27c0 .42-.338.762-.755.762a.76.76 0 0 1-.755-.762v-1.27H9.05a.76.76 0 0 1-.755-.762a.76.76 0 0 1 .756-.762h1.259v-1.27c0-.42.338-.762.755-.762" clip-rule="evenodd"></svg:path><svg:path fill="#fff" fill-rule="evenodd" d="M17.82 19.7a1.77 1.77 0 0 1 1.9-1.917c.189.016.414.084.643.154l.066.02l.06.018c.211.063.42.126.58.212a1.786 1.786 0 0 1 .638 2.55c-.1.151-.255.307-.41.464l-.045.044l-.044.045c-.156.157-.31.313-.46.414a1.754 1.754 0 0 1-2.528-.643a3.3 3.3 0 0 1-.21-.585l-.018-.06l-.02-.067c-.07-.232-.137-.459-.153-.648" clip-rule="evenodd"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h24v24H0z" mask="url(#solarRoundedMagniferZoomInBold0)"></svg:path>`,
})
export class SolarRoundedMagniferZoomInBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRoundedMagniferZoomOutBoldIcon],svg[solar-rounded-magnifer-zoom-out-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="solarRoundedMagniferZoomOutBold0"><svg:g fill="none"><svg:path fill="#fff" d="M20.313 11.157a9.157 9.157 0 1 1-18.313 0a9.157 9.157 0 0 1 18.313 0"></svg:path><svg:path fill="#000" fill-rule="evenodd" d="M8.024 11.157c0-.4.324-.723.723-.723h4.82a.723.723 0 0 1 0 1.446h-4.82a.723.723 0 0 1-.723-.723" clip-rule="evenodd"></svg:path><svg:path fill="#fff" fill-rule="evenodd" d="M18.838 18.838a.723.723 0 0 1 1.023 0l1.927 1.928a.723.723 0 0 1-1.022 1.022l-1.928-1.927a.723.723 0 0 1 0-1.023" clip-rule="evenodd"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h24v24H0z" mask="url(#solarRoundedMagniferZoomOutBold0)"></svg:path>`,
})
export class SolarRoundedMagniferZoomOutBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRouteBoldIcon],svg[solar-route-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.142 6.142C8.904 3.381 10.284 2 12 2s3.096 1.38 5.858 4.142S22 10.284 22 12s-1.38 3.096-4.142 5.858S13.716 22 12 22s-3.096-1.38-5.858-4.142S2 13.716 2 12s1.38-3.096 4.142-5.858m7.704 2.31a.75.75 0 1 0-1.026 1.095l1.283 1.203h-3.436c-.555 0-1.378.15-2.087.628c-.748.505-1.33 1.357-1.33 2.622a.75.75 0 0 0 1.5 0c0-.735.307-1.133.67-1.378a2.37 2.37 0 0 1 1.247-.372h3.436l-1.283 1.203a.75.75 0 0 0 1.026 1.094l2.667-2.5a.75.75 0 0 0 0-1.094z" clip-rule="evenodd"></svg:path>`,
})
export class SolarRouteBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRouting2BoldIcon],svg[solar-routing-2-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M18.5 14c-1.933 0-3.5 1.458-3.5 3.257c0 1.785 1.117 3.868 2.86 4.613c.406.173.874.173 1.28 0c1.743-.745 2.86-2.828 2.86-4.613C22 15.458 20.433 14 18.5 14m0 4.5a1 1 0 1 0 0-2a1 1 0 0 0 0 2M5.5 2C3.567 2 2 3.458 2 5.257C2 7.042 3.117 9.125 4.86 9.87c.406.173.874.173 1.28 0C7.883 9.125 9 7.042 9 5.257C9 3.458 7.433 2 5.5 2m0 4.5a1 1 0 1 0 0-2a1 1 0 0 0 0 2M11.25 5a.75.75 0 0 1 .75-.75h4.132c2.751 0 3.797 3.593 1.476 5.07l-10.41 6.625c-1.056.672-.58 2.305.67 2.305h2.321l-.22-.22a.75.75 0 1 1 1.061-1.06l1.5 1.5a.75.75 0 0 1 0 1.06l-1.5 1.5a.75.75 0 1 1-1.06-1.06l.22-.22H7.867c-2.751 0-3.797-3.593-1.476-5.07l10.411-6.625c1.055-.672.58-2.305-.671-2.305H12a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarRouting2BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRouting3BoldIcon],svg[solar-routing-3-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="5" cy="5" r="3" fill="currentColor"></svg:circle><svg:circle cx="19" cy="19" r="3" fill="currentColor"></svg:circle><svg:path fill="currentColor" fill-rule="evenodd" d="M10.25 5a.75.75 0 0 1 .75-.75h5.132c2.751 0 3.797 3.593 1.476 5.07l-10.41 6.625c-1.056.672-.58 2.305.67 2.305h3.321l-.22-.22a.75.75 0 1 1 1.061-1.06l1.5 1.5a.75.75 0 0 1 0 1.06l-1.5 1.5a.75.75 0 1 1-1.06-1.06l.22-.22H7.867c-2.751 0-3.797-3.593-1.476-5.07l10.411-6.625c1.055-.672.58-2.305-.671-2.305H11a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarRouting3BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRoutingBoldIcon],svg[solar-routing-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.5 4.25a4.25 4.25 0 0 1 0 8.5h-9a2.75 2.75 0 1 0 0 5.5h10.69l-.72-.72a.75.75 0 1 1 1.06-1.06l2 2a.75.75 0 0 1 0 1.06l-2 2a.75.75 0 1 1-1.06-1.06l.72-.72H7.5a4.25 4.25 0 0 1 0-8.5h9a2.75 2.75 0 1 0 0-5.5H7.855a2 2 0 1 1 0-1.5z"></svg:path>`,
})
export class SolarRoutingBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRubleBoldIcon],svg[solar-ruble-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.5 11.25h-2.75V8.2l.001-.198l.002-.043a.25.25 0 0 1 .206-.206l.043-.002l.198-.001h2.3a1.75 1.75 0 1 1 0 3.5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10M8.25 14a.75.75 0 0 1 .75-.75h.25v-.5H9a.75.75 0 0 1 0-1.5h.25V8.162c0-.146 0-.297.022-.436a1.75 1.75 0 0 1 1.454-1.454c.139-.022.29-.022.435-.022H13.5a3.25 3.25 0 0 1 0 6.5h-2.75v.5H12a.75.75 0 0 1 0 1.5h-1.25V17a.75.75 0 0 1-1.5 0v-2.25H9a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarRubleBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRugbyBoldIcon],svg[solar-rugby-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.913 5.931a4.136 4.136 0 0 0-3.844-3.844a28 28 0 0 0-3.624-.05l7.519 7.518a28 28 0 0 0-.051-3.624M2.087 18.069a4.136 4.136 0 0 0 3.844 3.844c1.068.081 2.313.12 3.625.05l-7.52-7.52c-.07 1.313-.03 2.558.051 3.626"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M2.222 12.509c.369-2.593 1.262-5.232 3.159-7.128c1.896-1.897 4.536-2.79 7.128-3.159l9.269 9.269c-.369 2.592-1.262 5.232-3.159 7.128c-1.896 1.897-4.535 2.79-7.128 3.159zm9.72-4.349a.75.75 0 0 1 1.061 0l.888.888l.889-.888a.75.75 0 1 1 1.06 1.06l-.888.889l.888.888a.75.75 0 1 1-1.06 1.06l-.889-.888l-.83.831l.888.888a.75.75 0 0 1-1.06 1.06L12 13.062l-.83.83l.888.889a.75.75 0 1 1-1.061 1.06l-.888-.888l-.888.888a.75.75 0 0 1-1.06-1.06l.887-.889l-.888-.888a.75.75 0 1 1 1.06-1.06l.889.888l.83-.83l-.888-.889a.75.75 0 0 1 1.061-1.06l.888.887l.83-.83l-.887-.888a.75.75 0 0 1 0-1.06" clip-rule="evenodd"></svg:path>`,
})
export class SolarRugbyBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRulerAngularBoldIcon],svg[solar-ruler-angular-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.25 2H6c-1.886 0-2.828 0-3.414.586S2 4.114 2 6v2.25h3a.75.75 0 0 1 0 1.5H2v1.5h2a.75.75 0 0 1 0 1.5H2v1.5h3a.75.75 0 0 1 0 1.5H2v1.5h2a.75.75 0 0 1 0 1.5H2c.001 1.24.02 1.888.337 2.361a2 2 0 0 0 .552.552C3.393 22 4.096 22 5.5 22s2.107 0 2.611-.337a2 2 0 0 0 .552-.552C9 20.607 9 19.904 9 18.5V11c0-.943 0-1.414.293-1.707S10.057 9 11 9h7.5c1.404 0 2.107 0 2.611-.337a2 2 0 0 0 .552-.552C22 7.607 22 6.904 22 5.5s0-2.107-.337-2.611a2 2 0 0 0-.552-.552c-.473-.316-1.121-.336-2.361-.337v2a.75.75 0 0 1-1.5 0V2h-1.5v3a.75.75 0 0 1-1.5 0V2h-1.5v2a.75.75 0 0 1-1.5 0V2h-1.5v3a.75.75 0 0 1-1.5 0z"></svg:path>`,
})
export class SolarRulerAngularBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRulerBoldIcon],svg[solar-ruler-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 15.616c0 .847.682 1.529 2.045 2.892l1.447 1.447C6.855 21.318 7.537 22 8.384 22s1.53-.682 2.893-2.045l8.678-8.678C21.318 9.913 22 9.23 22 8.384s-.682-1.529-2.045-2.892l-1.447-1.447C17.145 2.682 16.463 2 15.616 2c-.754 0-1.376.54-2.464 1.618q.045.033.085.073l1.415 1.415a.75.75 0 1 1-1.061 1.06l-1.414-1.414a1 1 0 0 1-.074-.086L11.03 5.739q.045.033.086.074l2.121 2.121a.75.75 0 1 1-1.06 1.06l-2.122-2.12a1 1 0 0 1-.074-.087L8.91 7.86q.044.033.086.074l1.414 1.414a.75.75 0 0 1-1.06 1.06L7.933 8.996a1 1 0 0 1-.074-.086L6.787 9.98q.046.033.086.074l2.122 2.122a.75.75 0 0 1-1.061 1.06l-2.121-2.121a1 1 0 0 1-.074-.086l-1.073 1.073q.045.032.086.074l1.414 1.414a.75.75 0 0 1-1.06 1.06L3.69 13.238a1 1 0 0 1-.073-.085C2.539 14.24 2 14.862 2 15.616"></svg:path>`,
})
export class SolarRulerBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRulerCrossPenBoldIcon],svg[solar-ruler-cross-pen-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m4.045 5.492l1.447-1.447C6.855 2.682 7.537 2 8.384 2s1.53.682 2.893 2.045l-2.41 2.41l-4.822 4.822C2.682 9.913 2 9.23 2 8.384s.682-1.529 2.045-2.892m15.91 13.016l-1.447 1.447C17.145 21.318 16.463 22 15.616 22c-.848 0-1.53-.682-2.893-2.045l4.821-4.821l2.41-2.41C21.319 14.086 22 14.767 22 15.615s-.682 1.529-2.045 2.892m-8.555-.346l7.396-7.396a10.3 10.3 0 0 1-3.326-2.234a10.3 10.3 0 0 1-2.235-3.327L5.839 12.6c-.577.577-.866.866-1.114 1.184a6.6 6.6 0 0 0-.749 1.211c-.173.364-.302.752-.56 1.526l-1.362 4.083a1.06 1.06 0 0 0 1.342 1.342l4.083-1.362c.775-.258 1.162-.387 1.526-.56q.647-.308 1.211-.749c.318-.248.607-.537 1.184-1.114m9.448-9.448a3.932 3.932 0 0 0-5.561-5.561l-.887.887l.038.111a8.75 8.75 0 0 0 2.092 3.32a8.75 8.75 0 0 0 3.431 2.13z"></svg:path>`,
})
export class SolarRulerCrossPenBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRulerPenBoldIcon],svg[solar-ruler-pen-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.586 21.414C13.172 22 14.114 22 16 22h2c1.886 0 2.828 0 3.414-.586S22 19.886 22 18V6c0-1.886 0-2.828-.586-3.414S19.886 2 18 2h-2c-1.886 0-2.828 0-3.414.586c-.503.502-.574 1.267-.584 2.664H14a.75.75 0 0 1 0 1.5h-2v1.5h3a.75.75 0 0 1 0 1.5h-3v1.5h2a.75.75 0 0 1 0 1.5h-2v1.5h3a.75.75 0 0 1 0 1.5h-3v1.5h2a.75.75 0 0 1 0 1.5h-1.998c.01 1.397.081 2.162.584 2.664M8 15.194v-7.98a7.9 7.9 0 0 1-3 .59a7.9 7.9 0 0 1-3-.59v7.98c0 .622 0 .934.038 1.239a5 5 0 0 0 .25 1.057c.102.29.241.569.52 1.126l1.468 2.937a.809.809 0 0 0 1.448 0l1.468-2.937c.279-.557.418-.836.52-1.126a5 5 0 0 0 .25-1.057C8 16.128 8 15.816 8 15.193M8 5a3 3 0 0 0-6 0v.957l.08.04c.681.33 1.675.662 2.92.662a6.7 6.7 0 0 0 3-.702z"></svg:path>`,
})
export class SolarRulerPenBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRunning2BoldIcon],svg[solar-running-2-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.75 4.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="m13.437 6.661l.005.003A5.33 5.33 0 0 1 16.19 9.2a3.71 3.71 0 0 0 3.316 2.049h1.245a.75.75 0 0 1 0 1.5h-1.245a5.21 5.21 0 0 1-4.658-2.878a3.83 3.83 0 0 0-1.976-1.821c-1.364-.562-1.796-.72-2.62-.66c-1.143.083-2.193.66-4.695 2.082l-1.435.815a.75.75 0 1 1-.742-1.304l1.436-.815l.172-.098c2.274-1.293 3.634-2.066 5.155-2.176c1.218-.089 1.954.215 3.295.766m-.132 3.835a.75.75 0 0 1-.05 1.06l-.535.478c-.28.25-.551.49-.798.724a7 7 0 0 0-.471.48a1.5 1.5 0 0 0-.146.187a1.25 1.25 0 0 0 .044.973c.042.089.13.21.363.418c.238.212.568.463 1.055.832l.075.056c.56.425.949.719 1.244 1.09c.328.413.565.89.696 1.401c.118.46.118.947.118 1.65V22a.75.75 0 0 1-1.5 0v-2.061c0-.833-.005-1.117-.07-1.37a2.25 2.25 0 0 0-.418-.841c-.163-.205-.387-.382-1.05-.884l-.024-.019a20 20 0 0 1-1.123-.888c-.297-.264-.553-.543-.72-.894a2.75 2.75 0 0 1-.096-2.14c.092-.248.27-.476.419-.647c.163-.189.364-.39.573-.587c.26-.246.565-.518.861-.782c.172-.152.34-.302.493-.442a.75.75 0 0 1 1.06.05M9.23 16.424a.75.75 0 0 1 .096 1.056l-1 1.201l-.097.116c-.642.771-1.113 1.338-1.771 1.646s-1.395.308-2.4.307H2.75a.75.75 0 0 1 0-1.5h1.158c1.222 0 1.596-.017 1.913-.165c.318-.149.57-.426 1.352-1.364l1-1.201a.75.75 0 0 1 1.057-.096" clip-rule="evenodd"></svg:path>`,
})
export class SolarRunning2BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRunningBoldIcon],svg[solar-running-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.75 4.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M9.802 5.93a4 4 0 0 1 .721-.043q.12.006.273.02c2.383.248 4.15 2.036 5.328 3.802l.063.094a3.25 3.25 0 0 0 2.704 1.447h1.859a.75.75 0 0 1 0 1.5h-1.86a4.75 4.75 0 0 1-3.952-2.115l-.062-.094A11 11 0 0 0 14 9.39l-1.884 2.355c-.428.534-.714.894-.907 1.19c-.188.286-.241.445-.255.566c-.024.2.002.403.073.591c.044.114.135.256.386.487c.26.24.626.518 1.172.93l.095.073c.72.546 1.22.924 1.565 1.428c.197.287.352.6.463.93c.193.58.193 1.206.193 2.11V22a.75.75 0 0 1-1.5 0v-1.83c0-1.07-.01-1.435-.116-1.755a2.3 2.3 0 0 0-.277-.558c-.19-.278-.476-.505-1.33-1.152l-.028-.021c-.51-.386-.933-.707-1.252-1.001c-.334-.307-.611-.635-.772-1.056a2.75 2.75 0 0 1-.162-1.3c.052-.448.241-.835.49-1.214c.237-.362.569-.778.968-1.277l1.984-2.479c-.687-.523-1.444-.871-2.264-.956a3 3 0 0 0-.184-.014a2.5 2.5 0 0 0-.45.03c-1.065.148-2.132.74-4.45 2.057l-1.436.815a.75.75 0 1 1-.742-1.304l1.436-.815l.152-.087c2.12-1.204 3.449-1.96 4.835-2.151M9.23 16.425a.75.75 0 0 1 .096 1.056l-1 1.201l-.097.116c-.642.771-1.113 1.338-1.771 1.646s-1.395.308-2.4.307H2.75a.75.75 0 0 1 0-1.5h1.158c1.222 0 1.596-.017 1.913-.165c.318-.149.57-.426 1.352-1.364l1-1.201a.75.75 0 0 1 1.057-.096" clip-rule="evenodd"></svg:path>`,
})
export class SolarRunningBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarRunningRoundBoldIcon],svg[solar-running-round-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 4.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M8.972 5.81a3.7 3.7 0 0 1 2.846-.062c2.568 1 3.188 4.35 1.15 6.204l-1.04.946l-.06.054a1.25 1.25 0 0 0 .148 1.938l.004.002l.125.096a7.75 7.75 0 0 1 3.005 6.202V22a.75.75 0 0 1-1.5 0v-.951a6.25 6.25 0 0 0-2.54-4.964l-.006-.005l-.081-.062a2.75 2.75 0 0 1-.11-4.225l1.045-.95c1.215-1.105.845-3.102-.685-3.698a2.2 2.2 0 0 0-1.695.037l-.522.23c-.545.241-.797.352-1.042.474a12 12 0 0 0-1.2.683c-.23.148-.455.308-.94.654l-1.439 1.024a.75.75 0 1 1-.87-1.222L5.021 7.99c.464-.331.717-.511.978-.68q.653-.421 1.348-.767c.279-.138.563-.263 1.085-.493zm6.3 6.008a.75.75 0 0 1 .91-.546a7.5 7.5 0 0 0 3.636 0a.75.75 0 0 1 .364 1.456a9 9 0 0 1-4.364 0a.75.75 0 0 1-.546-.91M9.48 16.424a.75.75 0 0 1 .096 1.056l-.26.311A8.22 8.22 0 0 1 3 20.75a.75.75 0 0 1 0-1.5a6.72 6.72 0 0 0 5.164-2.419l.26-.311a.75.75 0 0 1 1.056-.096" clip-rule="evenodd"></svg:path>`,
})
export class SolarRunningRoundBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSadCircleBoldIcon],svg[solar-sad-circle-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10m3-10c.552 0 1-.672 1-1.5S15.552 9 15 9s-1 .672-1 1.5s.448 1.5 1 1.5m-5-1.5c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S8.448 9 9 9s1 .672 1 1.5m-1.603 6.947a.75.75 0 0 0 1.05.155A4.27 4.27 0 0 1 12 16.75a4.27 4.27 0 0 1 2.553.852a.75.75 0 1 0 .894-1.204A5.77 5.77 0 0 0 12 15.25a5.77 5.77 0 0 0-3.447 1.148a.75.75 0 0 0-.156 1.049" clip-rule="evenodd"></svg:path>`,
})
export class SolarSadCircleBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSadSquareBoldIcon],svg[solar-sad-square-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464m4.933 13.983a.75.75 0 0 0 1.05.155A4.27 4.27 0 0 1 12 16.75a4.27 4.27 0 0 1 2.553.852a.75.75 0 1 0 .894-1.204A5.77 5.77 0 0 0 12 15.25a5.77 5.77 0 0 0-3.447 1.148a.75.75 0 0 0-.156 1.049M16 10.5c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5s.448-1.5 1-1.5s1 .672 1 1.5M9 12c.552 0 1-.672 1-1.5S9.552 9 9 9s-1 .672-1 1.5s.448 1.5 1 1.5" clip-rule="evenodd"></svg:path>`,
})
export class SolarSadSquareBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSafe2BoldIcon],svg[solar-safe-2-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.75 12a3.25 3.25 0 0 1 2.5-3.163v1.041a2.25 2.25 0 0 0-1.495 2.268l-.958.41A3.3 3.3 0 0 1 8.75 12m4-2.122V8.837a3.25 3.25 0 0 1 2.453 3.72l-.958-.41q.005-.074.005-.147a2.25 2.25 0 0 0-1.5-2.122m.904 3.647l.957.41A3.25 3.25 0 0 1 12 15.25c-1.07 0-2.02-.517-2.611-1.315l.957-.41a2.246 2.246 0 0 0 3.308 0"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M7.808 5.853c-.734.099-1.122.28-1.399.556c-.277.277-.457.665-.556 1.4c-.101.754-.103 1.756-.103 3.191v2c0 1.435.002 2.437.103 3.192c.099.734.28 1.122.556 1.399c.277.277.665.457 1.4.556c.754.101 1.756.103 3.191.103h2c1.435 0 2.437-.002 3.192-.103c.734-.099 1.122-.28 1.399-.556c.277-.277.457-.665.556-1.4c.101-.754.103-1.756.103-3.191v-2c0-1.435-.002-2.437-.103-3.192c-.099-.734-.28-1.122-.556-1.399c-.277-.277-.665-.457-1.4-.556c-.754-.101-1.756-.103-3.191-.103h-2c-1.435 0-2.437.002-3.192.103M12 7.25a4.75 4.75 0 1 0 0 9.5a4.75 4.75 0 0 0 0-9.5" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12m11.055-7.75c1.367 0 2.47 0 3.337.117c.9.12 1.658.38 2.26.981c.602.602.86 1.36.982 2.26c.116.867.116 1.97.116 3.337v2.11c0 1.367 0 2.47-.116 3.337c-.122.9-.38 1.658-.982 2.26s-1.36.86-2.26.982c-.867.116-1.97.116-3.337.116h-2.11c-1.367 0-2.47 0-3.337-.116c-.9-.122-1.658-.38-2.26-.982a3 3 0 0 1-.634-.933A.75.75 0 0 1 3.75 17v-3a.75.75 0 0 1 .5-.707v-2.586a.75.75 0 0 1-.5-.707V7a.75.75 0 0 1 .964-.72a3 3 0 0 1 .634-.932c.602-.602 1.36-.86 2.26-.981c.867-.117 1.97-.117 3.337-.117z" clip-rule="evenodd"></svg:path>`,
})
export class SolarSafe2BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSafeCircleBoldIcon],svg[solar-safe-circle-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.75 12a1.25 1.25 0 1 1 2.5 0a1.25 1.25 0 0 1-2.5 0"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2M7.75 8a.75.75 0 0 0-1.5 0v8a.75.75 0 0 0 1.5 0zm3.78.47a.75.75 0 1 0-1.06 1.06l1 1q.065.065.14.11c-.23.401-.36.865-.36 1.36s.13.959.36 1.36a1 1 0 0 0-.14.11l-1 1a.75.75 0 1 0 1.06 1.06l1-1a1 1 0 0 0 .11-.14c.401.23.865.36 1.36.36s.959-.13 1.36-.36q.045.075.11.14l1 1a.75.75 0 1 0 1.06-1.06l-1-1a1 1 0 0 0-.14-.11c.23-.401.36-.865.36-1.36s-.13-.959-.36-1.36a1 1 0 0 0 .14-.11l1-1a.75.75 0 0 0-1.06-1.06l-1 1a1 1 0 0 0-.11.14A2.74 2.74 0 0 0 14 9.25c-.495 0-.959.13-1.36.36a1 1 0 0 0-.11-.14z" clip-rule="evenodd"></svg:path>`,
})
export class SolarSafeCircleBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSafeSquareBoldIcon],svg[solar-safe-square-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.75 12a2.25 2.25 0 1 1 4.5 0a2.25 2.25 0 0 1-4.5 0"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464M6.75 7a.75.75 0 0 0-1.5 0v10a.75.75 0 0 0 1.5 0zm3.78.47a.75.75 0 1 0-1.06 1.06l1.401 1.402A3.73 3.73 0 0 0 10.25 12c0 .764.229 1.475.621 2.068L9.47 15.47a.75.75 0 1 0 1.06 1.06l1.402-1.401A3.73 3.73 0 0 0 14 15.75c.764 0 1.475-.229 2.068-.621l1.402 1.401a.75.75 0 1 0 1.06-1.06l-1.401-1.402A3.73 3.73 0 0 0 17.75 12c0-.764-.229-1.475-.621-2.068L18.53 8.53a.75.75 0 0 0-1.06-1.06l-1.402 1.4A3.73 3.73 0 0 0 14 8.25c-.764 0-1.475.229-2.068.621z" clip-rule="evenodd"></svg:path>`,
})
export class SolarSafeSquareBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSaleBoldIcon],svg[solar-sale-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.592 3.2a6 6 0 0 1-.495.399c-.298.2-.633.338-.985.408c-.153.03-.313.043-.632.068c-.801.064-1.202.096-1.536.214a2.71 2.71 0 0 0-1.655 1.655c-.118.334-.15.735-.214 1.536a6 6 0 0 1-.068.632c-.07.352-.208.687-.408.985c-.087.13-.191.252-.399.495c-.521.612-.782.918-.935 1.238c-.353.74-.353 1.6 0 2.34c.153.32.414.626.935 1.238c.208.243.312.365.399.495c.2.298.338.633.408.985c.03.153.043.313.068.632c.064.801.096 1.202.214 1.536a2.71 2.71 0 0 0 1.655 1.655c.334.118.735.15 1.536.214c.319.025.479.038.632.068c.352.07.687.209.985.408c.13.087.252.191.495.399c.612.521.918.782 1.238.935c.74.353 1.6.353 2.34 0c.32-.153.626-.414 1.238-.935c.243-.208.365-.312.495-.399c.298-.2.633-.338.985-.408c.153-.03.313-.043.632-.068c.801-.064 1.202-.096 1.536-.214a2.71 2.71 0 0 0 1.655-1.655c.118-.334.15-.735.214-1.536c.025-.319.038-.479.068-.632c.07-.352.209-.687.408-.985c.087-.13.191-.252.399-.495c.521-.612.782-.918.935-1.238c.353-.74.353-1.6 0-2.34c-.153-.32-.414-.626-.935-1.238a6 6 0 0 1-.399-.495a2.7 2.7 0 0 1-.408-.985a6 6 0 0 1-.068-.632c-.064-.801-.096-1.202-.214-1.536a2.71 2.71 0 0 0-1.655-1.655c-.334-.118-.735-.15-1.536-.214a6 6 0 0 1-.632-.068a2.7 2.7 0 0 1-.985-.408a6 6 0 0 1-.495-.399c-.612-.521-.918-.782-1.238-.935a2.71 2.71 0 0 0-2.34 0c-.32.153-.626.414-1.238.935m6.239 4.97a.814.814 0 0 1 0 1.15L9.32 15.832a.814.814 0 1 1-1.15-1.15l6.51-6.511a.814.814 0 0 1 1.15 0m-.033 6.543a1.085 1.085 0 1 1-2.17 0a1.085 1.085 0 0 1 2.17 0m-6.51-4.34a1.085 1.085 0 1 0 0-2.17a1.085 1.085 0 0 0 0 2.17" clip-rule="evenodd"></svg:path>`,
})
export class SolarSaleBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSaleSquareBoldIcon],svg[solar-sale-square-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464M15.53 8.47a.75.75 0 0 1 0 1.06l-6 6a.75.75 0 0 1-1.06-1.06l6-6a.75.75 0 0 1 1.06 0M10.5 9.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0m4 6a1 1 0 1 0 0-2a1 1 0 0 0 0 2" clip-rule="evenodd"></svg:path>`,
})
export class SolarSaleSquareBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSatelliteBoldIcon],svg[solar-satellite-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m21.565 10.492l.266.067a6.001 6.001 0 0 0-8.399-8.384l.076.26l.284.854l.003.007l.017.045q.024.066.088.206c.084.187.225.47.44.829c.432.718 1.164 1.747 2.35 2.934c1.187 1.186 2.216 1.918 2.935 2.35c.359.215.642.356.828.44a4 4 0 0 0 .25.105l.006.002h.001zm-7.907 11.144l4.913-8.844a6 6 0 0 0 2.47-1.356l-6.072 10.928a.75.75 0 0 1-1.311-.728m-.337-9.896l2.849-2.849c1.053.98 1.98 1.633 2.683 2.055q.316.187.567.318l-.849 1.528a6 6 0 0 1-5.25-1.052m-1.061-1.06a6 6 0 0 0 1.06 1.06l-7.79 7.79a.75.75 0 0 1-1.06-1.06zm-1.052-5.25l1.528-.85q.13.251.319.567c.421.703 1.074 1.63 2.054 2.683l-2.85 2.85a6 6 0 0 1-1.05-5.25m0 0a6 6 0 0 1 1.356-2.47L1.636 9.031a.75.75 0 0 0 .728 1.311z" clip-rule="evenodd"></svg:path>`,
})
export class SolarSatelliteBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarScaleBoldIcon],svg[solar-scale-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.906 2c0 .414.336.75.75.75h3.533l-7.439 7.44V8a.75.75 0 0 0-1.5 0v4c0 .414.336.75.75.75h4a.75.75 0 0 0 0-1.5h-2.19l7.44-7.44v3.534a.75.75 0 0 0 1.5 0V2a.75.75 0 0 0-.75-.75h-5.344a.75.75 0 0 0-.75.75"></svg:path><svg:path fill="currentColor" d="M19.752 7.43a2.25 2.25 0 0 0 2.238 2.164C22 10.32 22 11.119 22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c.881 0 1.68 0 2.406.01a2.25 2.25 0 0 0 2.164 2.238l-2.623 2.623A2.25 2.25 0 0 0 9.75 8v4A2.25 2.25 0 0 0 12 14.25h4a2.25 2.25 0 0 0 1.129-4.197z"></svg:path>`,
})
export class SolarScaleBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarScanner2BoldIcon],svg[solar-scanner-2-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464m3.893 9.15a.75.75 0 0 0 1.283.776l.004-.005l.027-.04q.042-.062.136-.177c.128-.153.326-.363.6-.573c.543-.418 1.386-.845 2.593-.845s2.05.427 2.593.845c.274.21.472.42.6.573a3 3 0 0 1 .163.217l.004.005a.75.75 0 0 0 1.283-.776L16 13l.643-.386v-.001l-.002-.002l-.002-.004l-.006-.01a2 2 0 0 0-.076-.113a4 4 0 0 0-.212-.277a5.3 5.3 0 0 0-.838-.802c-.758-.582-1.914-1.155-3.507-1.155s-2.75.573-3.507 1.156c-.376.289-.653.58-.838.801a4 4 0 0 0-.288.39l-.006.01l-.002.004l-.001.002s-.001.001.642.387zM19 13.25a.75.75 0 0 1 .75.75v.054c0 1.133 0 2.058-.098 2.79c-.103.763-.325 1.425-.854 1.954s-1.19.751-1.955.854c-.73.098-1.656.098-2.79.098H14a.75.75 0 0 1 0-1.5c1.2 0 2.024-.002 2.643-.085c.598-.08.89-.224 1.094-.428s.348-.496.428-1.094c.083-.619.085-1.443.085-2.643a.75.75 0 0 1 .75-.75M5.75 14a.75.75 0 0 0-1.5 0v.054c0 1.133 0 2.058.098 2.79c.103.763.325 1.425.854 1.954s1.19.751 1.955.854c.73.098 1.656.098 2.79.098H10a.75.75 0 0 0 0-1.5c-1.2 0-2.024-.002-2.643-.085c-.598-.08-.89-.224-1.094-.428s-.348-.496-.428-1.094C5.752 16.024 5.75 15.2 5.75 14m4.196-9.75H10a.75.75 0 0 1 0 1.5c-1.2 0-2.024.002-2.643.085c-.598.08-.89.224-1.094.428s-.348.496-.428 1.094C5.752 7.976 5.75 8.8 5.75 10a.75.75 0 0 1-1.5 0v-.054c0-1.133 0-2.058.098-2.79c.103-.763.325-1.425.854-1.954s1.19-.751 1.955-.854c.73-.098 1.656-.098 2.79-.098M14 5.75c1.2 0 2.024.002 2.643.085c.598.08.89.224 1.094.428s.348.496.428 1.094c.083.619.085 1.443.085 2.643a.75.75 0 0 0 1.5 0v-.054c0-1.133 0-2.058-.098-2.79c-.103-.763-.325-1.425-.854-1.954s-1.19-.751-1.955-.854c-.73-.098-1.656-.098-2.79-.098H14a.75.75 0 0 0 0 1.5" clip-rule="evenodd"></svg:path>`,
})
export class SolarScanner2BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarScannerBoldIcon],svg[solar-scanner-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12m8.004-6.248a.75.75 0 1 0-.008-1.5c-1.082.005-1.98.03-2.713.158c-.752.132-1.395.382-1.922.884c-.455.433-.76.872-.925 1.503c-.15.571-.177 1.275-.184 2.197a.75.75 0 1 0 1.5.012c.008-.949.04-1.466.135-1.828c.08-.303.206-.51.509-.798c.242-.23.572-.392 1.145-.492c.592-.104 1.37-.13 2.463-.136m4-1.5a.75.75 0 0 0-.008 1.5c1.093.006 1.871.032 2.463.136c.573.1.903.262 1.145.492c.303.288.43.495.509.798c.095.362.128.879.135 1.828a.75.75 0 0 0 1.5-.012c-.007-.922-.034-1.626-.184-2.197c-.166-.63-.47-1.07-.925-1.503c-.527-.502-1.17-.752-1.922-.884c-.733-.128-1.631-.153-2.713-.158M5 11.25a.75.75 0 1 0 0 1.5h14a.75.75 0 0 0 0-1.5zm.752 3.744a.75.75 0 0 0-1.5.012c.007.923.034 1.626.184 2.197c.166.63.47 1.07.925 1.503c.527.502 1.17.752 1.922.884c.733.128 1.631.153 2.713.158a.75.75 0 0 0 .008-1.5c-1.093-.005-1.871-.032-2.463-.136c-.573-.1-.903-.261-1.145-.492c-.303-.288-.43-.495-.509-.798c-.095-.361-.127-.879-.135-1.828m13.996.012a.75.75 0 1 0-1.5-.012c-.008.95-.04 1.467-.135 1.828c-.08.303-.206.51-.509.798c-.242.23-.572.392-1.145.492c-.592.104-1.37.13-2.463.136a.75.75 0 0 0 .008 1.5c1.082-.005 1.98-.03 2.713-.158c.752-.132 1.395-.382 1.922-.884c.455-.433.76-.872.925-1.503c.15-.571.177-1.274.184-2.197" clip-rule="evenodd"></svg:path>`,
})
export class SolarScannerBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarScissorsBoldIcon],svg[solar-scissors-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.654 1.633a.75.75 0 0 0-1.308.735l5.794 10.304l-2.708 4.815a3.751 3.751 0 1 0-.136 3.303L12 14.202l3.704 6.588a3.75 3.75 0 1 0-.136-3.303l-2.708-4.815l5.794-10.304a.75.75 0 0 0-1.308-.735L12 11.142z"></svg:path>`,
})
export class SolarScissorsBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarScissorsSquareBoldIcon],svg[solar-scissors-square-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464M16.38 5.353a.75.75 0 0 0-1.026.268L12 11.346L8.647 5.62a.75.75 0 0 0-1.294.758l3.778 6.45l-1.111 1.899a2.66 2.66 0 0 0-2.145-1.078c-1.42 0-2.625 1.113-2.625 2.55s1.204 2.55 2.625 2.55c.992 0 1.88-.543 2.324-1.36L12 14.314l1.802 3.076a2.65 2.65 0 0 0 2.323 1.36c1.42 0 2.625-1.113 2.625-2.55s-1.204-2.55-2.625-2.55c-.873 0-1.664.42-2.144 1.078l-1.112-1.898l3.778-6.45a.75.75 0 0 0-.268-1.027" clip-rule="evenodd"></svg:path>`,
})
export class SolarScissorsSquareBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarScooterBoldIcon],svg[solar-scooter-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.864 5.783c-.313-.032-.72-.033-1.336-.033H12a.75.75 0 0 1 0-1.5h.565c.57 0 1.054 0 1.454.041c.425.044.819.14 1.19.37c.373.23.634.539.864.9c.202.318.406.72.64 1.189h1.155c.284 0 .545 0 .762.02c.235.02.49.069.738.21c.272.155.497.38.652.652c.141.248.19.503.21.738c.02.217.02.478.02.762v.093c0 .26.001.538-.083.802a1.8 1.8 0 0 1-.25.494c-.162.224-.386.389-.596.542l-.052.039l-.277.204l.487.974a3.75 3.75 0 1 1-4.154 4.47h-5.15a3.751 3.751 0 0 1-7.352-.009A1.75 1.75 0 0 1 1.25 14.92v-.057c0-.335 0-.548.015-.735a4.75 4.75 0 0 1 4.362-4.362c.187-.015.4-.015.735-.015h.69c.898 0 1.648 0 2.242.08c.628.084 1.195.27 1.65.726c.456.455.642 1.022.726 1.65c.08.594.08 1.344.08 2.242v.802h3.575a3.76 3.76 0 0 1 2.548-2.828l-2.438-4.875c-.276-.552-.458-.915-.628-1.18c-.16-.252-.274-.361-.386-.43c-.111-.07-.26-.123-.557-.154"></svg:path>`,
})
export class SolarScooterBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarScreenShareBoldIcon],svg[solar-screen-share-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.623 4.508c-1.471.027-2.318.151-2.89.725C3 5.965 3 7.143 3 9.5v5c0 2.357 0 3.536.732 4.268c.573.573 1.42.698 2.891.725c-.123-.918-.123-2.064-.123-3.394V7.902c0-1.33 0-2.477.123-3.394"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M8.879 2.879C8 3.757 8 5.172 8 8v8c0 2.828 0 4.243.879 5.121C9.757 22 11.172 22 14 22h1c2.828 0 4.243 0 5.121-.879C21 20.243 21 18.828 21 16V8c0-2.828 0-4.243-.879-5.121C19.243 2 17.828 2 15 2h-1c-2.828 0-4.243 0-5.121.879m6.151 4.59a.75.75 0 0 0-1.06 0l-2.5 2.5a.75.75 0 1 0 1.06 1.061l1.22-1.22V16a.75.75 0 0 0 1.5 0V9.81l1.22 1.22a.75.75 0 1 0 1.06-1.06z" clip-rule="evenodd"></svg:path>`,
})
export class SolarScreenShareBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarScreencast2BoldIcon],svg[solar-screencast-2-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.95 16.05c.93-.93 1.396-1.396 1.97-1.427q.08-.003.159 0c.574.03 1.04.496 1.971 1.427c2.026 2.026 3.039 3.039 2.755 3.913a1.5 1.5 0 0 1-.09.218C16.297 21 14.865 21 12 21s-4.298 0-4.715-.819a1.5 1.5 0 0 1-.09-.218c-.284-.874.729-1.887 2.755-3.913"></svg:path><svg:path fill="currentColor" d="M14 3h-4C6.229 3 4.343 3 3.172 4.172S2 7.229 2 11s0 5.657 1.172 6.828c.242.243.514.435.828.587c.481.234 1.06.375 1.77.459c.167-.533.473-.992.745-1.347c.532-.696 1.35-1.514 2.297-2.46l.13-.131c.42-.42.827-.827 1.207-1.122c.426-.331.977-.651 1.693-.689a3 3 0 0 1 .316 0c.716.038 1.267.358 1.693.69c.38.294.787.702 1.206 1.12l.13.131c.948.947 1.766 1.765 2.298 2.46c.272.356.577.815.744 1.348c.712-.084 1.29-.225 1.771-.459a3 3 0 0 0 .828-.587C22 16.657 22 14.771 22 11s0-5.657-1.172-6.828S17.771 3 14 3"></svg:path>`,
})
export class SolarScreencast2BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarScreencastBoldIcon],svg[solar-screencast-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.5 4H14c3.772 0 5.657 0 6.829 1.172S22 8.229 22 12s0 5.657-1.171 6.828c-1.1 1.1-3.708 1.168-7.141 1.172a.687.687 0 0 1-.688-.687C13 13.617 8.383 9 2.688 9a.685.685 0 0 1-.686-.688c.002-.31.007-.593.018-.704a4 4 0 0 1 3.588-3.589C5.804 4 6.036 4 6.5 4"></svg:path><svg:path fill="currentColor" d="M2 10.25a.75.75 0 0 0 0 1.5A8.25 8.25 0 0 1 10.25 20a.75.75 0 0 0 1.5 0A9.75 9.75 0 0 0 2 10.25"></svg:path><svg:path fill="currentColor" d="M2 13.25a.75.75 0 0 0 0 1.5c2.9 0 5.25 2.35 5.25 5.25a.75.75 0 0 0 1.5 0A6.75 6.75 0 0 0 2 13.25"></svg:path><svg:path fill="currentColor" d="M2 16.25a.75.75 0 0 0 0 1.5A2.25 2.25 0 0 1 4.25 20a.75.75 0 0 0 1.5 0A3.75 3.75 0 0 0 2 16.25"></svg:path>`,
})
export class SolarScreencastBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSdCardBoldIcon],svg[solar-sd-card-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 22c-4.714 0-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c.341 0 .512 0 .686.015a4.04 4.04 0 0 1 2.224.921c.133.112.257.236.504.483l5.167 5.167c.247.247.37.37.483.504c.522.623.85 1.415.92 2.224c.016.174.016.345.016.686c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22m1-16.75a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0V6a.75.75 0 0 1 .75-.75M10.75 6a.75.75 0 0 0-1.5 0v3a.75.75 0 0 0 1.5 0zM7 5.25a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0V6A.75.75 0 0 1 7 5.25" clip-rule="evenodd"></svg:path>`,
})
export class SolarSdCardBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSendSquareBoldIcon],svg[solar-send-square-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12m15.75 0a.75.75 0 0 1-.75.75h-5.19l1.72 1.72a.75.75 0 1 1-1.06 1.06l-3-3a.75.75 0 0 1 0-1.06l3-3a.75.75 0 1 1 1.06 1.06l-1.72 1.72H17a.75.75 0 0 1 .75.75m-10-4a.75.75 0 0 0-1.5 0v8a.75.75 0 0 0 1.5 0z" clip-rule="evenodd"></svg:path>`,
})
export class SolarSendSquareBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSendTwiceSquareBoldIcon],svg[solar-send-twice-square-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464M17 14.75a.75.75 0 0 1 0 1.5h-4.928l1.408 1.174a.75.75 0 0 1-.96 1.152l-3-2.5a.75.75 0 0 1 0-1.152l3-2.5a.75.75 0 0 1 .96 1.152l-1.408 1.174zm.75-6.25a.75.75 0 0 0-.75-.75h-4.928l1.408-1.174a.75.75 0 0 0-.96-1.152l-3 2.5a.75.75 0 0 0 0 1.152l3 2.5a.75.75 0 0 0 .96-1.152L12.072 9.25H17a.75.75 0 0 0 .75-.75M7.75 6a.75.75 0 0 0-1.5 0v12a.75.75 0 0 0 1.5 0z" clip-rule="evenodd"></svg:path>`,
})
export class SolarSendTwiceSquareBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarServer2BoldIcon],svg[solar-server-2-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.586 3.586C2 4.172 2 5.114 2 7s0 2.828.586 3.414S4.114 11 6 11h12c1.886 0 2.828 0 3.414-.586S22 8.886 22 7s0-2.828-.586-3.414S19.886 3 18 3H6c-1.886 0-2.828 0-3.414.586M9 8.75A.75.75 0 0 1 8.25 8V6a.75.75 0 0 1 1.5 0v2a.75.75 0 0 1-.75.75m4.5-2.5a.75.75 0 0 0 0 1.5H18a.75.75 0 0 0 0-1.5zM6 8.75A.75.75 0 0 1 5.25 8V6a.75.75 0 0 1 1.5 0v2a.75.75 0 0 1-.75.75m-3.414 4.836C2 14.172 2 15.114 2 17s0 2.828.586 3.414S4.114 21 6 21h12c1.886 0 2.828 0 3.414-.586S22 18.886 22 17s0-2.828-.586-3.414S19.886 13 18 13H6c-1.886 0-2.828 0-3.414.586M12.75 17a.75.75 0 0 1 .75-.75H18a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75m-7.5 1a.75.75 0 0 0 1.5 0v-2a.75.75 0 0 0-1.5 0zm3.75.75a.75.75 0 0 1-.75-.75v-2a.75.75 0 0 1 1.5 0v2a.75.75 0 0 1-.75.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarServer2BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarServerBoldIcon],svg[solar-server-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 7c0-1.886 0-2.828.586-3.414S4.114 3 6 3h12c1.886 0 2.828 0 3.414.586S22 5.114 22 7s0 2.828-.586 3.414S19.886 11 18 11H6c-1.886 0-2.828 0-3.414-.586S2 8.886 2 7m4-.75a.75.75 0 0 0 0 1.5h2a.75.75 0 0 0 0-1.5zm4.25.75a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5h-7a.75.75 0 0 1-.75-.75M2 17c0-1.886 0-2.828.586-3.414S4.114 13 6 13h12c1.886 0 2.828 0 3.414.586S22 15.114 22 17s0 2.828-.586 3.414S19.886 21 18 21H6c-1.886 0-2.828 0-3.414-.586S2 18.886 2 17m4-.75a.75.75 0 0 0 0 1.5h2a.75.75 0 0 0 0-1.5zm4.25.75a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5h-7a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarServerBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarServerMinimalisticBoldIcon],svg[solar-server-minimalistic-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.516 15.725c.271-.019.618-.02 1.116-.02h14.736c.498 0 .845.001 1.117.02c.266.018.422.052.54.102c.387.161.695.47.855.86c.049.119.083.275.101.543c.019.273.019.622.019 1.123c0 .5 0 .85-.019 1.123c-.018.268-.052.424-.101.544c-.16.389-.468.698-.855.86c-.118.049-.274.083-.54.101c-.272.019-.619.019-1.117.019H4.632c-.498 0-.845 0-1.116-.019c-.267-.018-.423-.053-.541-.102a1.58 1.58 0 0 1-.855-.86c-.049-.119-.083-.275-.101-.543A18 18 0 0 1 2 18.353c0-.5 0-.85.019-1.123c.018-.268.052-.424.101-.544c.16-.389.468-.698.855-.86c.118-.049.274-.083.54-.101m1.116 3.687c.58 0 1.052-.474 1.052-1.06c0-.584-.471-1.058-1.052-1.058s-1.053.474-1.053 1.059s.471 1.059 1.053 1.059m.001-11.118c-.498 0-.845 0-1.116-.019c-.267-.018-.423-.052-.541-.102a1.58 1.58 0 0 1-.855-.86c-.049-.119-.083-.275-.101-.543A18 18 0 0 1 2 5.647c0-.5 0-.85.019-1.123c.018-.268.052-.424.101-.544c.16-.389.468-.698.855-.86c.118-.049.274-.083.54-.101A18 18 0 0 1 4.633 3h14.736c.498 0 .845 0 1.117.019c.266.018.422.052.54.102c.387.161.695.47.855.86c.049.119.083.275.101.543c.019.274.019.622.019 1.123c0 .5 0 .85-.019 1.123c-.018.268-.052.424-.101.544c-.16.389-.468.698-.855.86c-.118.049-.274.083-.54.101a18 18 0 0 1-1.117.02zm0 1.059c-.498 0-.845 0-1.116.019c-.267.018-.423.052-.541.102a1.58 1.58 0 0 0-.855.86c-.049.119-.083.275-.101.543C2 11.15 2 11.5 2 12s0 .85.019 1.123c.018.268.052.424.101.544c.16.389.468.698.855.86c.118.049.274.083.54.101c.272.019.619.02 1.117.02h14.736c.498 0 .845-.001 1.117-.02c.266-.018.422-.052.54-.102a1.58 1.58 0 0 0 .855-.86c.049-.119.083-.275.101-.543C22 12.85 22 12.5 22 12s0-.85-.019-1.123c-.018-.268-.052-.424-.101-.544a1.58 1.58 0 0 0-.855-.86c-.118-.049-.274-.083-.54-.101a18 18 0 0 0-1.117-.02zM5.684 12c0 .585-.471 1.059-1.052 1.059A1.056 1.056 0 0 1 3.579 12c0-.585.471-1.059 1.053-1.059c.58 0 1.052.474 1.052 1.059M4.632 6.706c.58 0 1.052-.474 1.052-1.059s-.471-1.059-1.052-1.059s-1.053.474-1.053 1.06c0 .584.471 1.058 1.053 1.058" clip-rule="evenodd"></svg:path>`,
})
export class SolarServerMinimalisticBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarServerPathBoldIcon],svg[solar-server-path-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M22 18.21a.685.685 0 0 0-.698-.67h-7.577a1.83 1.83 0 0 0-1.027-.989v-2.814h5.814c1.54 0 2.79-1.202 2.79-2.684s-1.25-2.685-2.79-2.685c1.54 0 2.79-1.201 2.79-2.684c0-1.482-1.25-2.684-2.79-2.684H5.488c-1.54 0-2.79 1.202-2.79 2.684s1.25 2.684 2.79 2.684c-1.54 0-2.79 1.202-2.79 2.685c0 1.482 1.25 2.684 2.79 2.684h5.814v2.814c-.466.182-.838.54-1.027.989H2.698c-.386 0-.698.3-.698.67s.312.672.698.672h7.577A1.86 1.86 0 0 0 12 20c.78 0 1.45-.463 1.725-1.118h7.577c.386 0 .698-.3.698-.672M12.233 5.685c0-.37.312-.67.697-.67h5.582c.385 0 .697.3.697.67s-.312.671-.697.671H12.93a.685.685 0 0 1-.697-.67m0 5.369c0-.371.312-.671.697-.671h5.582c.385 0 .697.3.697.67s-.312.672-.697.672H12.93a.685.685 0 0 1-.697-.671M6.419 6.579c.513 0 .93-.4.93-.895c0-.494-.417-.895-.93-.895s-.93.401-.93.895s.416.895.93.895m0 5.368c.513 0 .93-.4.93-.894c0-.495-.417-.895-.93-.895s-.93.4-.93.895c0 .494.416.894.93.894" clip-rule="evenodd"></svg:path>`,
})
export class SolarServerPathBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarServerSquareBoldIcon],svg[solar-server-square-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.172 4.172C2 5.343 2 7.229 2 11v.25h20V11c0-3.771 0-5.657-1.172-6.828S17.771 3 14 3h-4C6.229 3 4.343 3 3.172 4.172M22 12.75H2V13c0 3.771 0 5.657 1.172 6.828S6.229 21 10 21h4c3.771 0 5.657 0 6.828-1.172S22 16.771 22 13zM5.25 17.5a.75.75 0 0 0 1.5 0v-2a.75.75 0 0 0-1.5 0zm3.75.75a.75.75 0 0 1-.75-.75v-2a.75.75 0 0 1 1.5 0v2a.75.75 0 0 1-.75.75m4.5-2.5a.75.75 0 0 0 0 1.5H18a.75.75 0 0 0 0-1.5zM9 9.25a.75.75 0 0 1-.75-.75v-2a.75.75 0 0 1 1.5 0v2a.75.75 0 0 1-.75.75M5.25 8.5a.75.75 0 0 0 1.5 0v-2a.75.75 0 0 0-1.5 0zm7.5-1a.75.75 0 0 1 .75-.75H18a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarServerSquareBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarServerSquareCloudBoldIcon],svg[solar-server-square-cloud-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:path id="solarServerSquareCloudBold0" fill="currentColor" d="M20.654 16.88c-.111-1.057-.958-1.88-1.987-1.88c-.845 0-1.568.555-1.861 1.34a2.22 2.22 0 0 0-.015 1.513a1.46 1.46 0 0 0-1.4.49A1.63 1.63 0 0 0 15 19.412c0 .877.672 1.588 1.5 1.588H20c1.105 0 2-.948 2-2.118c0-.927-.562-1.714-1.346-2.001"></svg:path></svg:defs><svg:path fill="currentColor" fill-rule="evenodd" d="M3.172 19.828C4.343 21 6.229 21 10 21h3.93a3.17 3.17 0 0 1-.43-1.588c0-.816.32-1.592.857-2.162H13.5a.75.75 0 0 1 0-1.5h1.928c.511-1.29 1.727-2.25 3.239-2.25c1.56 0 2.81 1.028 3.288 2.38l.014.01C22 15.074 22 14.12 22 13v-.25H2V13c0 3.771 0 5.657 1.172 6.828M6 18.25a.75.75 0 0 1-.75-.75v-2a.75.75 0 0 1 1.5 0v2a.75.75 0 0 1-.75.75m3 0a.75.75 0 0 1-.75-.75v-2a.75.75 0 0 1 1.5 0v2a.75.75 0 0 1-.75.75M3.172 4.172C2 5.343 2 7.229 2 11v.25h20V11c0-3.771 0-5.657-1.172-6.828S17.771 3 14 3h-4C6.229 3 4.343 3 3.172 4.172M9 9.25a.75.75 0 0 1-.75-.75v-2a.75.75 0 0 1 1.5 0v2a.75.75 0 0 1-.75.75M5.25 8.5a.75.75 0 0 0 1.5 0v-2a.75.75 0 0 0-1.5 0zm7.5-1a.75.75 0 0 1 .75-.75H18a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path><svg:use href="#solarServerSquareCloudBold0" fill-rule="evenodd" clip-rule="evenodd"></svg:use><svg:use href="#solarServerSquareCloudBold0"></svg:use>`,
})
export class SolarServerSquareCloudBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarServerSquareUpdateBoldIcon],svg[solar-server-square-update-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M3.172 19.828C4.343 21 6.229 21 10 21h3.89a5.47 5.47 0 0 1-.89-3q0-.452.07-.885a.75.75 0 0 1 .41-1.365a5.52 5.52 0 0 1 3.376-3H2V13c0 3.771 0 5.657 1.172 6.828M6 18.25a.75.75 0 0 1-.75-.75v-2a.75.75 0 0 1 1.5 0v2a.75.75 0 0 1-.75.75m3 0a.75.75 0 0 1-.75-.75v-2a.75.75 0 0 1 1.5 0v2a.75.75 0 0 1-.75.75M3.172 4.172C2 5.343 2 7.229 2 11v.25h20V11c0-3.771 0-5.657-1.172-6.828S17.771 3 14 3h-4C6.229 3 4.343 3 3.172 4.172M9 9.25a.75.75 0 0 1-.75-.75v-2a.75.75 0 0 1 1.5 0v2a.75.75 0 0 1-.75.75M5.25 8.5a.75.75 0 0 0 1.5 0v-2a.75.75 0 0 0-1.5 0zm7.5-1a.75.75 0 0 1 .75-.75H18a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75"></svg:path><svg:path d="M14.929 16.753c.389-1.497 1.924-2.503 3.576-2.503c1.277 0 2.44.58 3.106 1.515a.75.75 0 1 1-1.222.87c-.36-.505-1.048-.885-1.884-.885c-.967 0-1.687.482-2 1.08a.75.75 0 0 1 .15 1.24l-.583.5a.75.75 0 0 1-.976 0l-.584-.5a.75.75 0 0 1 .417-1.317m6 .677a.75.75 0 0 1 .975 0l.584.5a.75.75 0 0 1-.417 1.317c-.389 1.497-1.924 2.503-3.576 2.503c-1.277 0-2.44-.58-3.106-1.515a.75.75 0 1 1 1.222-.87c.36.505 1.048.885 1.884.885c.967 0 1.687-.482 2-1.08a.75.75 0 0 1-.151-1.24z"></svg:path></svg:g>`,
})
export class SolarServerSquareUpdateBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSettingsBoldIcon],svg[solar-settings-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14.279 2.152C13.909 2 13.439 2 12.5 2s-1.408 0-1.779.152a2 2 0 0 0-1.09 1.083c-.094.223-.13.484-.145.863a1.62 1.62 0 0 1-.796 1.353a1.64 1.64 0 0 1-1.579.008c-.338-.178-.583-.276-.825-.308a2.03 2.03 0 0 0-1.49.396c-.318.242-.553.646-1.022 1.453c-.47.807-.704 1.21-.757 1.605c-.07.526.074 1.058.4 1.479c.148.192.357.353.68.555c.477.297.783.803.783 1.361s-.306 1.064-.782 1.36c-.324.203-.533.364-.682.556a2 2 0 0 0-.399 1.479c.053.394.287.798.757 1.605s.704 1.21 1.022 1.453c.424.323.96.465 1.49.396c.242-.032.487-.13.825-.308a1.64 1.64 0 0 1 1.58.008c.486.28.774.795.795 1.353c.015.38.051.64.145.863c.204.49.596.88 1.09 1.083c.37.152.84.152 1.779.152s1.409 0 1.779-.152a2 2 0 0 0 1.09-1.083c.094-.223.13-.483.145-.863c.02-.558.309-1.074.796-1.353a1.64 1.64 0 0 1 1.579-.008c.338.178.583.276.825.308c.53.07 1.066-.073 1.49-.396c.318-.242.553-.646 1.022-1.453c.47-.807.704-1.21.757-1.605a2 2 0 0 0-.4-1.479c-.148-.192-.357-.353-.68-.555c-.477-.297-.783-.803-.783-1.361s.306-1.064.782-1.36c.324-.203.533-.364.682-.556a2 2 0 0 0 .399-1.479c-.053-.394-.287-.798-.757-1.605s-.704-1.21-1.022-1.453a2.03 2.03 0 0 0-1.49-.396c-.242.032-.487.13-.825.308a1.64 1.64 0 0 1-1.58-.008a1.62 1.62 0 0 1-.795-1.353c-.015-.38-.051-.64-.145-.863a2 2 0 0 0-1.09-1.083M12.5 15c1.67 0 3.023-1.343 3.023-3S14.169 9 12.5 9s-3.023 1.343-3.023 3s1.354 3 3.023 3" clip-rule="evenodd"></svg:path>`,
})
export class SolarSettingsBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSettingsMinimalisticBoldIcon],svg[solar-settings-minimalistic-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.428 2c-1.114 0-2.129.6-4.157 1.802l-.686.406C5.555 5.41 4.542 6.011 3.985 7c-.557.99-.557 2.19-.557 4.594v.812c0 2.403 0 3.605.557 4.594s1.57 1.59 3.6 2.791l.686.407C10.299 21.399 11.314 22 12.428 22s2.128-.6 4.157-1.802l.686-.407c2.028-1.2 3.043-1.802 3.6-2.791c.557-.99.557-2.19.557-4.594v-.812c0-2.403 0-3.605-.557-4.594s-1.572-1.59-3.6-2.792l-.686-.406C14.555 2.601 13.542 2 12.428 2m-3.75 10a3.75 3.75 0 1 1 7.5 0a3.75 3.75 0 0 1-7.5 0" clip-rule="evenodd"></svg:path>`,
})
export class SolarSettingsMinimalisticBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarShareBoldIcon],svg[solar-share-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.803 5.333c0-1.84 1.5-3.333 3.348-3.333A3.34 3.34 0 0 1 20.5 5.333c0 1.841-1.5 3.334-3.349 3.334a3.35 3.35 0 0 1-2.384-.994l-4.635 3.156a3.34 3.34 0 0 1-.182 1.917l5.082 3.34a3.35 3.35 0 0 1 2.12-.753a3.34 3.34 0 0 1 3.348 3.334C20.5 20.507 19 22 17.151 22a3.34 3.34 0 0 1-3.348-3.333a3.3 3.3 0 0 1 .289-1.356L9.05 14a3.35 3.35 0 0 1-2.202.821A3.34 3.34 0 0 1 3.5 11.487a3.34 3.34 0 0 1 3.348-3.333c1.064 0 2.01.493 2.623 1.261l4.493-3.059a3.3 3.3 0 0 1-.161-1.023" clip-rule="evenodd"></svg:path>`,
})
export class SolarShareBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarShareCircleBoldIcon],svg[solar-share-circle-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 6a3 3 0 1 0 6 0a3 3 0 0 0-6 0M2.5 18a3 3 0 1 0 6 0a3 3 0 0 0-6 0m16 3a3 3 0 1 1 0-6a3 3 0 0 1 0 6M7.205 7.562a.75.75 0 0 0-.993-1.124A8.73 8.73 0 0 0 3.25 13a.75.75 0 0 0 1.5 0a7.23 7.23 0 0 1 2.455-5.438m10.583-1.124a.75.75 0 0 0-.993 1.124A7.23 7.23 0 0 1 19.25 13a.75.75 0 0 0 1.5 0a8.73 8.73 0 0 0-2.962-6.562m-7.601 13.584a.75.75 0 1 0-.374 1.452a8.8 8.8 0 0 0 4.374 0a.75.75 0 1 0-.374-1.452A7.3 7.3 0 0 1 12 20.25a7.3 7.3 0 0 1-1.813-.228"></svg:path>`,
})
export class SolarShareCircleBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarShieldBoldIcon],svg[solar-shield-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.25 2.073c-.606.113-1.318.357-2.412.732L8.265 3c-3.007 1.03-4.51 1.544-4.887 2.082C3.008 5.608 3 7.15 3 10.21l8.25-2.75zm0 6.967L3 11.79v.201c0 5.638 4.239 8.374 6.899 9.536c.51.223.84.367 1.351.432zm1.5 12.92V9.04L21 11.79v.201c0 5.638-4.239 8.374-6.899 9.536c-.51.223-.84.367-1.351.432m0-14.499V2.072c.606.113 1.318.357 2.412.732l.573.196c3.007 1.029 4.51 1.543 4.887 2.081c.37.526.378 2.068.378 5.127z"></svg:path>`,
})
export class SolarShieldBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarShieldCheckBoldIcon],svg[solar-shield-check-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.378 5.082C3 5.62 3 7.22 3 10.417v1.574c0 5.638 4.239 8.375 6.899 9.536c.721.315 1.082.473 2.101.473c1.02 0 1.38-.158 2.101-.473C16.761 20.365 21 17.63 21 11.991v-1.574c0-3.198 0-4.797-.378-5.335c-.377-.537-1.88-1.052-4.887-2.081l-.573-.196C13.595 2.268 12.812 2 12 2s-1.595.268-3.162.805L8.265 3c-3.007 1.03-4.51 1.545-4.887 2.082M15.06 10.5a.75.75 0 0 0-1.12-.999l-3.011 3.374l-.87-.974a.75.75 0 0 0-1.118 1l1.428 1.6a.75.75 0 0 0 1.119 0z" clip-rule="evenodd"></svg:path>`,
})
export class SolarShieldCheckBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarShieldCrossBoldIcon],svg[solar-shield-cross-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.378 5.082C3 5.62 3 7.22 3 10.417v1.574c0 5.638 4.239 8.375 6.899 9.536c.721.315 1.082.473 2.101.473c1.02 0 1.38-.158 2.101-.473C16.761 20.365 21 17.63 21 11.991v-1.574c0-3.198 0-4.797-.378-5.335c-.377-.537-1.88-1.052-4.887-2.081l-.573-.196C13.595 2.268 12.812 2 12 2s-1.595.268-3.162.805L8.265 3c-3.007 1.03-4.51 1.545-4.887 2.082M10.03 8.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.97 1.97a.75.75 0 1 0 1.06 1.06L12 13.06l1.97 1.97a.75.75 0 0 0 1.06-1.06L13.06 12l1.97-1.97a.75.75 0 1 0-1.06-1.06L12 10.94z" clip-rule="evenodd"></svg:path>`,
})
export class SolarShieldCrossBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarShieldKeyholeBoldIcon],svg[solar-shield-keyhole-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.378 5.082C3 5.62 3 7.22 3 10.417v1.574c0 5.638 4.239 8.375 6.899 9.536c.721.315 1.082.473 2.101.473c1.02 0 1.38-.158 2.101-.473C16.761 20.365 21 17.63 21 11.991v-1.574c0-3.198 0-4.797-.378-5.335c-.377-.537-1.88-1.052-4.887-2.081l-.573-.196C13.595 2.268 12.812 2 12 2s-1.595.268-3.162.805L8.265 3c-3.007 1.03-4.51 1.545-4.887 2.082M13.5 15a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-1.401A2.999 2.999 0 0 1 12 8a3 3 0 0 1 1.5 5.599z" clip-rule="evenodd"></svg:path>`,
})
export class SolarShieldKeyholeBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarShieldKeyholeMinimalisticBoldIcon],svg[solar-shield-keyhole-minimalistic-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.875 8.552a2.245 2.245 0 0 1 3.073.823a2.245 2.245 0 0 1-.823 3.073a2.25 2.25 0 0 1-2.25-3.896"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M3.378 5.082C3 5.62 3 7.22 3 10.417v1.574c0 5.638 4.239 8.375 6.899 9.536c.721.315 1.082.473 2.101.473c1.02 0 1.38-.158 2.101-.473C16.761 20.365 21 17.63 21 11.991v-1.574c0-3.198 0-4.797-.378-5.335c-.377-.537-1.88-1.052-4.887-2.081l-.573-.196C13.595 2.268 12.812 2 12 2s-1.595.268-3.162.805L8.265 3c-3.007 1.03-4.51 1.545-4.887 2.082m9.07 1.696a3.75 3.75 0 0 0-1.199 7.396V16.5a.75.75 0 1 0 1.501 0v-2.325c.386-.079.765-.22 1.125-.428a3.745 3.745 0 0 0 1.372-5.122a3.75 3.75 0 0 0-2.798-1.847" clip-rule="evenodd"></svg:path>`,
})
export class SolarShieldKeyholeMinimalisticBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarShieldMinimalisticBoldIcon],svg[solar-shield-minimalistic-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 10.417c0-3.198 0-4.797.378-5.335c.377-.537 1.88-1.052 4.887-2.081l.573-.196C10.405 2.268 11.188 2 12 2s1.595.268 3.162.805l.573.196c3.007 1.029 4.51 1.544 4.887 2.081C21 5.62 21 7.22 21 10.417v1.574c0 5.638-4.239 8.375-6.899 9.536C13.38 21.842 13.02 22 12 22s-1.38-.158-2.101-.473C7.239 20.365 3 17.63 3 11.991z"></svg:path>`,
})
export class SolarShieldMinimalisticBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarShieldMinusBoldIcon],svg[solar-shield-minus-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.378 5.082C3 5.62 3 7.22 3 10.417v1.574c0 5.638 4.239 8.375 6.899 9.536c.721.315 1.082.473 2.101.473c1.02 0 1.38-.158 2.101-.473C16.761 20.365 21 17.63 21 11.991v-1.574c0-3.198 0-4.797-.378-5.335c-.377-.537-1.88-1.052-4.887-2.081l-.573-.196C13.595 2.268 12.812 2 12 2s-1.595.268-3.162.805L8.265 3c-3.007 1.03-4.51 1.545-4.887 2.082M15 12.75a.75.75 0 0 0 0-1.5H9a.75.75 0 0 0 0 1.5z" clip-rule="evenodd"></svg:path>`,
})
export class SolarShieldMinusBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarShieldNetworkBoldIcon],svg[solar-shield-network-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.944 7.768A.1.1 0 0 1 12 7.75c.004 0 .021 0 .056.018a.7.7 0 0 1 .17.134c.153.158.328.431.492.841c.162.404.296.901.39 1.466q.083.502.118 1.041h-2.452q.035-.539.118-1.04a7 7 0 0 1 .39-1.467c.164-.41.34-.683.492-.841a.7.7 0 0 1 .17-.134M9.271 11.25c.025-.439.073-.871.141-1.286a9 9 0 0 1 .415-1.617a4.25 4.25 0 0 0-2.01 2.903zm-1.454 1.5H9.27c.025.439.073.871.141 1.286a9 9 0 0 0 .415 1.617a4.25 4.25 0 0 1-2.01-2.903m8.367-1.5a4.25 4.25 0 0 0-2.01-2.903c.18.486.318 1.034.415 1.617c.068.415.116.847.14 1.286zm-1.454 1.5h1.454a4.25 4.25 0 0 1-2.01 2.903c.18-.486.318-1.034.415-1.617c.068-.415.116-.847.14-1.286m-1.502 0a11 11 0 0 1-.118 1.04a7 7 0 0 1-.39 1.467c-.164.41-.34.683-.492.841a.7.7 0 0 1-.17.134a.1.1 0 0 1-.056.018c-.004 0-.021 0-.056-.018a.7.7 0 0 1-.17-.134c-.153-.158-.328-.431-.492-.841a7 7 0 0 1-.39-1.466a11 11 0 0 1-.118-1.041z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M3.378 5.082C3 5.62 3 7.22 3 10.417v1.574c0 5.638 4.239 8.375 6.899 9.536c.721.315 1.082.473 2.101.473c1.02 0 1.38-.158 2.101-.473C16.761 20.365 21 17.63 21 11.991v-1.574c0-3.198 0-4.797-.378-5.335c-.377-.537-1.88-1.052-4.887-2.081l-.573-.196C13.595 2.268 12.812 2 12 2s-1.595.268-3.162.805L8.265 3c-3.007 1.03-4.51 1.545-4.887 2.082M6.25 12a5.75 5.75 0 1 1 11.5 0a5.75 5.75 0 0 1-11.5 0" clip-rule="evenodd"></svg:path>`,
})
export class SolarShieldNetworkBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarShieldPlusBoldIcon],svg[solar-shield-plus-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.378 5.082C3 5.62 3 7.22 3 10.417v1.574c0 5.638 4.239 8.375 6.899 9.536c.721.315 1.082.473 2.101.473c1.02 0 1.38-.158 2.101-.473C16.761 20.365 21 17.63 21 11.991v-1.574c0-3.198 0-4.797-.378-5.335c-.377-.537-1.88-1.052-4.887-2.081l-.573-.196C13.595 2.268 12.812 2 12 2s-1.595.268-3.162.805L8.265 3c-3.007 1.03-4.51 1.545-4.887 2.082M12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25z" clip-rule="evenodd"></svg:path>`,
})
export class SolarShieldPlusBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarShieldStarBoldIcon],svg[solar-shield-star-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.378 5.082C3 5.62 3 7.22 3 10.417v1.574c0 5.638 4.239 8.375 6.899 9.536c.721.315 1.082.473 2.101.473c1.02 0 1.38-.158 2.101-.473C16.761 20.365 21 17.63 21 11.991v-1.574c0-3.198 0-4.797-.378-5.335c-.377-.537-1.88-1.052-4.887-2.081l-.573-.196C13.595 2.268 12.812 2 12 2s-1.595.268-3.162.805L8.265 3c-3.007 1.03-4.51 1.545-4.887 2.082m7.483 3.281l-.13.235c-.145.259-.217.388-.329.473s-.252.117-.532.18l-.254.058c-.984.222-1.476.334-1.593.71c-.117.377.218.769.889 1.553l.174.203c.19.223.285.334.328.472s.029.287 0 .584l-.026.27c-.102 1.047-.152 1.57.154 1.803s.767.02 1.688-.403l.239-.11c.261-.12.392-.181.531-.181s.27.06.531.18l.239.11c.92.425 1.382.637 1.688.404s.256-.756.154-1.802l-.026-.271c-.029-.297-.043-.446 0-.584s.138-.25.328-.472l.174-.203c.67-.784 1.006-1.176.889-1.553c-.117-.376-.609-.488-1.593-.71l-.254-.058c-.28-.063-.42-.095-.532-.18s-.184-.214-.328-.473l-.131-.235C12.632 7.454 12.379 7 12 7s-.632.454-1.139 1.363" clip-rule="evenodd"></svg:path>`,
})
export class SolarShieldStarBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarShieldUpBoldIcon],svg[solar-shield-up-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.378 5.082C3 5.62 3 7.22 3 10.417v1.574c0 5.638 4.239 8.375 6.899 9.536c.721.315 1.082.473 2.101.473c1.02 0 1.38-.158 2.101-.473C16.761 20.365 21 17.63 21 11.991v-1.574c0-3.198 0-4.797-.378-5.335c-.377-.537-1.88-1.052-4.887-2.081l-.573-.196C13.595 2.268 12.812 2 12 2s-1.595.268-3.162.805L8.265 3c-3.007 1.03-4.51 1.545-4.887 2.082M16.45 10.95l-3.4-2.55a1.75 1.75 0 0 0-2.1 0l-3.4 2.55a.75.75 0 1 0 .9 1.2l3.4-2.55a.25.25 0 0 1 .3 0l3.4 2.55a.75.75 0 1 0 .9-1.2m-2 2.5l-2-1.5a.75.75 0 0 0-.9 0l-2 1.5a.75.75 0 1 0 .9 1.2L12 13.488l1.55 1.162a.75.75 0 1 0 .9-1.2" clip-rule="evenodd"></svg:path>`,
})
export class SolarShieldUpBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarShieldUserBoldIcon],svg[solar-shield-user-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3 10.417c0-3.198 0-4.797.378-5.335c.377-.537 1.88-1.052 4.887-2.081l.573-.196C10.405 2.268 11.188 2 12 2s1.595.268 3.162.805l.573.196c3.007 1.029 4.51 1.544 4.887 2.081C21 5.62 21 7.22 21 10.417v1.574c0 5.638-4.239 8.375-6.899 9.536C13.38 21.842 13.02 22 12 22s-1.38-.158-2.101-.473C7.239 20.365 3 17.63 3 11.991zM14 9a2 2 0 1 1-4 0a2 2 0 0 1 4 0m-2 8c4 0 4-.895 4-2s-1.79-2-4-2s-4 .895-4 2s0 2 4 2" clip-rule="evenodd"></svg:path>`,
})
export class SolarShieldUserBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarShieldWarningBoldIcon],svg[solar-shield-warning-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3 10.417c0-3.198 0-4.797.378-5.335c.377-.537 1.88-1.052 4.887-2.081l.573-.196C10.405 2.268 11.188 2 12 2s1.595.268 3.162.805l.573.196c3.007 1.029 4.51 1.544 4.887 2.081C21 5.62 21 7.22 21 10.417v1.574c0 5.638-4.239 8.375-6.899 9.536C13.38 21.842 13.02 22 12 22s-1.38-.158-2.101-.473C7.239 20.365 3 17.63 3 11.991zm9-3.167a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0V8a.75.75 0 0 1 .75-.75M12 16a1 1 0 1 0 0-2a1 1 0 0 0 0 2" clip-rule="evenodd"></svg:path>`,
})
export class SolarShieldWarningBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarShockAbsorberBoldIcon],svg[solar-shock-absorber-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M14 20a2 2 0 1 1-3.323-1.5h-.427a1.75 1.75 0 0 1-1-3.186V6H8c-.943 0-1.414 0-1.707-.293S6 4.943 6 4s0-1.414.293-1.707S7.057 2 8 2h8c.943 0 1.414 0 1.707.293S18 3.057 18 4s0 1.414-.293 1.707S16.943 6 16 6h-1.25v9.314a1.75 1.75 0 0 1-1 3.186h-.427c.415.366.677.903.677 1.5m-.75-14h-2.5v9h2.5z"></svg:path><svg:path d="M7.273 7.818a.75.75 0 0 1 .91-.545l8 2a.75.75 0 0 1-.365 1.455l-8-2a.75.75 0 0 1-.545-.91m0 3.5a.75.75 0 0 1 .91-.545l8 2a.75.75 0 0 1-.365 1.455l-8-2a.75.75 0 0 1-.545-.91m13.038-3.846a.75.75 0 0 1-.005 1.061l-.707.7a.75.75 0 1 1-1.055-1.066l.707-.7a.75.75 0 0 1 1.06.005m-16.622 0a.75.75 0 0 1 1.06-.005l.707.7a.75.75 0 1 1-1.055 1.066l-.707-.7a.75.75 0 0 1-.005-1.06M22 12.25h-2a.75.75 0 0 1 0-1.5h2a.75.75 0 0 1 0 1.5m-20.75-.748a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75m4.212 2.271a.75.75 0 0 1-.006 1.061l-.707.7a.75.75 0 1 1-1.055-1.066l.707-.7a.75.75 0 0 1 1.06.005m13.076 0a.75.75 0 0 1 1.06-.005l.708.7a.75.75 0 1 1-1.055 1.066l-.707-.7a.75.75 0 0 1-.006-1.06"></svg:path></svg:g>`,
})
export class SolarShockAbsorberBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarShop2BoldIcon],svg[solar-shop-2-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.528 2H7.472c-1.203 0-1.804 0-2.288.299c-.483.298-.752.836-1.29 1.912L2.491 7.76c-.325.82-.608 1.786-.062 2.479A2 2 0 0 0 6 9a2 2 0 1 0 4 0a2 2 0 1 0 4 0a2 2 0 1 0 4 0a2 2 0 0 0 3.571 1.238c.546-.693.262-1.659-.062-2.479l-1.404-3.548c-.538-1.076-.806-1.614-1.29-1.912C18.332 2 17.73 2 16.528 2"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M20 21.25h2a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1 0-1.5h2V12.5c.744 0 1.433-.232 2-.627a3.5 3.5 0 0 0 2 .627c.744 0 1.433-.232 2-.627a3.5 3.5 0 0 0 2 .627c.744 0 1.433-.232 2-.627a3.5 3.5 0 0 0 2 .627c.744 0 1.433-.232 2-.627a3.5 3.5 0 0 0 2 .627zm-10.5 0h5V18.5c0-.935 0-1.402-.201-1.75a1.5 1.5 0 0 0-.549-.55c-.348-.2-.815-.2-1.75-.2s-1.402 0-1.75.2a1.5 1.5 0 0 0-.549.55c-.201.348-.201.815-.201 1.75z" clip-rule="evenodd"></svg:path>`,
})
export class SolarShop2BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarShopBoldIcon],svg[solar-shop-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.778 3.655c-.181.36-.27.806-.448 1.696l-.598 2.99a3.06 3.06 0 1 0 6.043.904l.07-.69a3.167 3.167 0 1 0 6.307-.038l.073.728a3.06 3.06 0 1 0 6.043-.904l-.598-2.99c-.178-.89-.267-1.335-.448-1.696a3 3 0 0 0-1.888-1.548C17.944 2 17.49 2 16.582 2H7.418c-.908 0-1.362 0-1.752.107a3 3 0 0 0-1.888 1.548M18.269 13.5a4.53 4.53 0 0 0 2.231-.581V14c0 3.771 0 5.657-1.172 6.828c-.943.944-2.348 1.127-4.828 1.163V18.5c0-.935 0-1.402-.201-1.75a1.5 1.5 0 0 0-.549-.549C13.402 16 12.935 16 12 16s-1.402 0-1.75.201a1.5 1.5 0 0 0-.549.549c-.201.348-.201.815-.201 1.75v3.491c-2.48-.036-3.885-.22-4.828-1.163C3.5 19.657 3.5 17.771 3.5 14v-1.081a4.53 4.53 0 0 0 2.232.581a4.55 4.55 0 0 0 3.112-1.228A4.64 4.64 0 0 0 12 13.5a4.64 4.64 0 0 0 3.156-1.228a4.55 4.55 0 0 0 3.112 1.228"></svg:path>`,
})
export class SolarShopBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarShopMinimalisticBoldIcon],svg[solar-shop-minimalistic-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 14.25a.75.75 0 0 1 .75.75v6.25H21a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1 0-1.5h1.25V15a.75.75 0 0 1 1.5 0v6.25h12.5V15a.75.75 0 0 1 .75-.75M16.528 2H7.472c-1.203 0-1.804 0-2.287.299c-.484.298-.753.836-1.29 1.912L2.49 7.76c-.324.82-.608 1.786-.062 2.479A2 2 0 0 0 6 9a2 2 0 1 0 4 0a2 2 0 1 0 4 0a2 2 0 1 0 4 0a2 2 0 0 0 3.571 1.238c.546-.693.262-1.659-.062-2.479l-1.404-3.548c-.537-1.076-.806-1.614-1.29-1.912C18.332 2 17.731 2 16.528 2"></svg:path>`,
})
export class SolarShopMinimalisticBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarShuffleBoldIcon],svg[solar-shuffle-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 22c-4.714 0-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22m4.262-14.523a.75.75 0 0 1 1.06-.015l1.2 1.167a.75.75 0 0 1 0 1.075l-1.2 1.167a.75.75 0 0 1-1.146-.954h-.338c-.511 0-.844 0-1.1.025c-.242.023-.36.062-.444.109c-.084.046-.176.12-.318.307c-.152.2-.323.474-.586.902l-1.52 2.463c-.242.39-.45.729-.652.994c-.218.286-.46.532-.789.713c-.328.18-.666.254-1.025.288c-.336.032-.74.032-1.21.032H6a.75.75 0 0 1 0-1.5h2.162c.511 0 .844 0 1.1-.025c.243-.023.36-.062.444-.11c.084-.045.176-.12.318-.306c.152-.2.323-.475.586-.902l1.52-2.464c.242-.39.45-.728.652-.994c.218-.285.46-.531.789-.712c.328-.18.666-.255 1.025-.289c.336-.031.74-.031 1.21-.031h.37a.75.75 0 0 1 .086-.94M9.385 9.77c-.085-.017-.185-.02-.584-.02H6a.75.75 0 0 1 0-1.5h2.858c.313 0 .565 0 .806.045a2.56 2.56 0 0 1 1.405.775c.167.18.299.394.459.653l.03.05a.75.75 0 1 1-1.276.788c-.206-.334-.259-.413-.313-.472a1.06 1.06 0 0 0-.584-.32m3.301 3.26a.75.75 0 0 1 1.032.244c.206.333.259.412.313.471c.151.163.355.277.584.32c.085.016.186.02.584.02h.977a.75.75 0 0 1 1.147-.955l1.2 1.167a.75.75 0 0 1 0 1.075l-1.2 1.167a.75.75 0 0 1-1.147-.955h-1.034c-.313 0-.565 0-.806-.045a2.56 2.56 0 0 1-1.405-.775c-.167-.18-.299-.394-.459-.653l-.03-.05a.75.75 0 0 1 .244-1.032" clip-rule="evenodd"></svg:path>`,
})
export class SolarShuffleBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSidebarCodeBoldIcon],svg[solar-sidebar-code-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 11c0-3.771 0-5.657 1.172-6.828S6.229 3 10 3h4.25v18H10c-3.771 0-5.657 0-6.828-1.172S2 16.771 2 13zm13.75 9.994V3.006c2.636.027 4.104.191 5.078 1.166C22 5.343 22 7.229 22 11v2c0 3.771 0 5.657-1.172 6.828c-.974.975-2.442 1.139-5.078 1.166M9.97 15.47a.75.75 0 0 1 1.06 0l1 1a.75.75 0 0 1 0 1.06l-1 1a.75.75 0 1 1-1.06-1.06l.47-.47l-.47-.47a.75.75 0 0 1 0-1.06m-.268-1.207a.75.75 0 1 0-1.404-.526l-1.5 4a.75.75 0 0 0 1.404.526zM6.53 13.47a.75.75 0 0 1 0 1.06l-.47.47l.47.47a.75.75 0 1 1-1.06 1.06l-1-1a.75.75 0 0 1 0-1.06l1-1a.75.75 0 0 1 1.06 0" clip-rule="evenodd"></svg:path>`,
})
export class SolarSidebarCodeBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSidebarMinimalisticBoldIcon],svg[solar-sidebar-minimalistic-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.172 4.172C2 5.343 2 7.229 2 11v2c0 3.771 0 5.657 1.172 6.828S6.229 21 10 21h4.25V3H10C6.229 3 4.343 3 3.172 4.172M15.75 3.006v17.988c2.636-.027 4.104-.191 5.078-1.166C22 18.657 22 16.771 22 13v-2c0-3.771 0-5.657-1.172-6.828c-.974-.975-2.442-1.139-5.078-1.166" clip-rule="evenodd"></svg:path>`,
})
export class SolarSidebarMinimalisticBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSiderbarBoldIcon],svg[solar-siderbar-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 11v2c0 3.771 0 5.657-1.172 6.828c-.974.975-2.442 1.139-5.078 1.166V3.006c2.636.027 4.104.191 5.078 1.166C22 5.343 22 7.229 22 11"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M10 3h4.25v18H10c-3.771 0-5.657 0-6.828-1.172S2 16.771 2 13v-2c0-3.771 0-5.657 1.172-6.828S6.229 3 10 3m-5.25 7a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5h-6a.75.75 0 0 1-.75-.75m1 4a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarSiderbarBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSignpost2BoldIcon],svg[solar-signpost-2-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.75 2a.75.75 0 0 0-1.5 0v1.5H6.704c-.658 0-.986 0-1.288.098a2 2 0 0 0-.383.17c-.274.16-.494.404-.933.894c-.85.947-1.276 1.42-1.379 1.974a2 2 0 0 0 0 .728c.103.553.528 1.027 1.379 1.974c.44.49.659.734.933.893q.183.105.383.17c.302.099.63.099 1.288.099h4.546v2H6.5c-1.404 0-2.107 0-2.611.337a2 2 0 0 0-.552.552C3 13.893 3 14.596 3 16s0 2.107.337 2.611a2 2 0 0 0 .552.552c.504.337 1.207.337 2.611.337h4.75v1.75H10a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5h-1.25V19.5h4.546c.658 0 .986 0 1.288-.098q.2-.066.383-.17c.274-.16.494-.404.933-.894c.85-.947 1.276-1.42 1.379-1.974a2 2 0 0 0 0-.728c-.103-.553-.528-1.027-1.379-1.974c-.44-.49-.659-.734-.933-.893a2 2 0 0 0-.383-.17c-.302-.099-.63-.099-1.288-.099H12.75v-2h4.75c1.404 0 2.107 0 2.611-.337a2 2 0 0 0 .552-.552C21 9.107 21 8.404 21 7s0-2.107-.337-2.611a2 2 0 0 0-.552-.552C19.607 3.5 18.904 3.5 17.5 3.5h-4.75zM9 6.25a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5zM8.25 16a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarSignpost2BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSignpostBoldIcon],svg[solar-signpost-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.75 2a.75.75 0 0 0-1.5 0v1.5H6.704c-.658 0-.986 0-1.288.098a2 2 0 0 0-.383.17c-.274.16-.494.404-.933.894c-.85.947-1.276 1.42-1.379 1.974a2 2 0 0 0 0 .728c.103.553.528 1.027 1.379 1.974c.44.49.659.734.933.893q.183.105.383.17c.302.099.63.099 1.288.099h4.546v2H6.5c-1.404 0-2.107 0-2.611.337a2 2 0 0 0-.552.552C3 13.893 3 14.596 3 16s0 2.107.337 2.611a2 2 0 0 0 .552.552c.504.337 1.207.337 2.611.337h4.75v1.75H10a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5h-1.25V19.5h4.546c.658 0 .986 0 1.288-.098q.2-.066.383-.17c.274-.16.494-.404.933-.894c.85-.947 1.276-1.42 1.379-1.974a2 2 0 0 0 0-.728c-.103-.553-.528-1.027-1.379-1.974c-.44-.49-.659-.734-.933-.893a2 2 0 0 0-.383-.17c-.302-.099-.63-.099-1.288-.099H12.75v-2h4.75c1.404 0 2.107 0 2.611-.337a2 2 0 0 0 .552-.552C21 9.107 21 8.404 21 7s0-2.107-.337-2.611a2 2 0 0 0-.552-.552C19.607 3.5 18.904 3.5 17.5 3.5h-4.75z" clip-rule="evenodd"></svg:path>`,
})
export class SolarSignpostBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSimCardBoldIcon],svg[solar-sim-card-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 22c-4.714 0-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c.341 0 .512 0 .686.015a4.04 4.04 0 0 1 2.224.921c.133.112.257.236.504.483l5.167 5.167c.247.247.37.37.483.504c.522.623.85 1.415.92 2.224c.016.174.016.345.016.686c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22m-3.111-3.337C9.393 19 10.096 19 11.5 19v-7c-1.405 0-2.107 0-2.611.337a2 2 0 0 0-.552.552C8 13.393 8 14.096 8 15.5s0 2.107.337 2.611a2 2 0 0 0 .552.552m6.222 0C14.607 19 13.904 19 12.5 19v-3H16c-.005 1.079-.043 1.67-.337 2.111a2 2 0 0 1-.552.552M12.5 12c1.405 0 2.107 0 2.611.337c.218.146.406.334.552.552c.294.44.332 1.032.336 2.111H12.5z" clip-rule="evenodd"></svg:path>`,
})
export class SolarSimCardBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSimCardMinimalisticBoldIcon],svg[solar-sim-card-minimalistic-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 22c-4.714 0-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c.341 0 .512 0 .686.015a4.04 4.04 0 0 1 2.224.921c.133.112.257.236.504.483l5.167 5.167c.247.247.37.37.483.504c.522.623.85 1.415.92 2.224c.016.174.016.345.016.686c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22m-3.39-8.962C8.803 13 9.035 13 9.5 13h5c.465 0 .697 0 .89.038a2 2 0 0 1 1.572 1.572c.038.193.038.425.038.89s0 .697-.038.89a2 2 0 0 1-1.572 1.572c-.193.038-.425.038-.89.038h-5c-.465 0-.697 0-.89-.038a2 2 0 0 1-1.572-1.572C7 16.197 7 15.965 7 15.5s0-.697.038-.89a2 2 0 0 1 1.572-1.572" clip-rule="evenodd"></svg:path>`,
})
export class SolarSimCardMinimalisticBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSimCardsBoldIcon],svg[solar-sim-cards-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.828 16.828C22 15.657 22 13.771 22 10a3.86 3.86 0 0 0-1.136-2.731l-4.133-4.133A3.86 3.86 0 0 0 14 2c-3.771 0-5.657 0-6.83 1.172c-.377.377-.633.83-.807 1.395C7.371 4.5 8.55 4.5 9.896 4.5H10c1.427 0 2.789.571 3.792 1.575l4.133 4.133A5.36 5.36 0 0 1 19.5 14v.104c0 1.346 0 2.525-.067 3.532c.565-.174 1.018-.43 1.395-.808"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M10 22c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14s0-5.657 1.172-6.828S6.229 6 10 6a3.86 3.86 0 0 1 2.731 1.136l4.133 4.133A3.86 3.86 0 0 1 18 14c0 3.771 0 5.657-1.172 6.828S13.771 22 10 22m-2.707-3.293C7.586 19 8.057 19 9 19h.5v-5H9c-.943 0-1.414 0-1.707.293S7 15.057 7 16v1c0 .943 0 1.414.293 1.707m5.414 0C12.414 19 11.943 19 11 19h-.5v-2H13c0 .943 0 1.414-.293 1.707M11 14c.943 0 1.414 0 1.707.293S13 15.057 13 16h-2.5v-2z" clip-rule="evenodd"></svg:path>`,
})
export class SolarSimCardsBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSirenBoldIcon],svg[solar-siren-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4 21.25H2a.75.75 0 0 0 0 1.5h20a.75.75 0 0 0 0-1.5h-2V16c0-2.8 0-4.2-.545-5.27a5 5 0 0 0-2.185-2.185C16.2 8 14.8 8 12 8s-4.2 0-5.27.545a5 5 0 0 0-2.185 2.185C4 11.8 4 13.2 4 16zm9.5-3.75a1.5 1.5 0 0 1-.75 1.3v2.45h-1.5V18.8a1.5 1.5 0 1 1 2.25-1.3m1.5-7.435a.75.75 0 0 0 0 1.5c.842 0 1.464.638 1.436 1.408a.75.75 0 0 0 1.499.054c.061-1.69-1.317-2.962-2.935-2.962" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M12 1.25a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75m9.53 4.28l-1.5 1.5a.75.75 0 1 1-1.06-1.06l1.5-1.5a.75.75 0 1 1 1.06 1.06m-18-1.06a.75.75 0 0 0-1.06 1.06l1.5 1.5a.75.75 0 0 0 1.06-1.06z"></svg:path>`,
})
export class SolarSirenBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSirenRoundedBoldIcon],svg[solar-siren-rounded-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.75 2a.75.75 0 0 0-1.5 0v3a.75.75 0 0 0 1.5 0z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M2 21.25h2V16a8 8 0 1 1 16 0v5.25h2a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1 0-1.5m10.75-2.45a1.5 1.5 0 1 0-1.5 0v2.45h1.5zm.845-7.581a.75.75 0 0 1 .977-.414a4.76 4.76 0 0 1 2.623 2.623a.75.75 0 0 1-1.39.563a3.26 3.26 0 0 0-1.796-1.796a.75.75 0 0 1-.414-.976" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M21.53 5.47a.75.75 0 0 1 0 1.06l-1.5 1.5a.75.75 0 1 1-1.06-1.06l1.5-1.5a.75.75 0 0 1 1.06 0m-18 0a.75.75 0 0 0-1.06 1.06l1.5 1.5a.75.75 0 0 0 1.06-1.06z"></svg:path>`,
})
export class SolarSirenRoundedBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSkateboardBoldIcon],svg[solar-skateboard-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.584 6.376a.75.75 0 0 1 1.04.208l.813 1.219A3.25 3.25 0 0 0 6.14 9.25h11.718a3.25 3.25 0 0 0 2.704-1.447l.813-1.219a.75.75 0 0 1 1.248.832l-.812 1.219a4.75 4.75 0 0 1-3.953 2.115H6.141a4.75 4.75 0 0 1-3.952-2.115l-.813-1.219a.75.75 0 0 1 .208-1.04" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M9 15a2 2 0 1 1-4 0a2 2 0 0 1 4 0m10 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0"></svg:path>`,
})
export class SolarSkateboardBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSkateboardingBoldIcon],svg[solar-skateboarding-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 4a2 2 0 1 1-4 0a2 2 0 0 1 4 0m-9.668 1.345a2.49 2.49 0 0 1 2.298-.177c1.727.74 2.042 3.055.574 4.229l-.445.356l-.124.1a1.25 1.25 0 0 0 .115 1.98l.153.097l.01.006l.157.1a3.75 3.75 0 0 1 1.679 3.028l.001.175V16.5a.75.75 0 0 1-1.5 0v-1.396a2.25 2.25 0 0 0-1.008-1.817l-.093-.06q-.019-.01-.04-.025l-.018-.01q-.12-.074-.183-.117a2.75 2.75 0 0 1-.099-4.483l.458-.366a.987.987 0 0 0-1.14-1.609l-3.23 2.019a.75.75 0 0 1-.794-1.272z"></svg:path><svg:path fill="currentColor" d="M2.498 16.443a.75.75 0 0 1 1.06.055l1.204 1.338c.237.264.574.414.929.414h12.618c.355 0 .692-.15.93-.414l1.203-1.338a.75.75 0 1 1 1.116 1.004l-1.205 1.338a2.75 2.75 0 0 1-2.044.91H5.691a2.75 2.75 0 0 1-2.044-.91l-1.204-1.338a.75.75 0 0 1 .055-1.06M8 21a1 1 0 1 1-2 0a1 1 0 0 1 2 0m10 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0M15.772 9.818a.75.75 0 0 1 .91-.545a7.5 7.5 0 0 0 3.636 0a.75.75 0 1 1 .364 1.455a9 9 0 0 1-4.364 0a.75.75 0 0 1-.546-.91"></svg:path><svg:path fill="currentColor" d="M11.53 13.47a.75.75 0 0 1 0 1.06a5.87 5.87 0 0 1-4.151 1.72H7a.75.75 0 0 1 0-1.5h.379c1.159 0 2.27-.46 3.09-1.28a.75.75 0 0 1 1.061 0"></svg:path>`,
})
export class SolarSkateboardingBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSkateboardingRoundBoldIcon],svg[solar-skateboarding-round-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 4a2 2 0 1 1-4 0a2 2 0 0 1 4 0"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M10.21 6.047a5.02 5.02 0 0 1 4.637-.357a1.817 1.817 0 0 1 .569 2.955l-1.654 1.654a.84.84 0 0 0 .056 1.24l.997.83a2.6 2.6 0 0 1 .935 1.998V16.5a.75.75 0 0 1-1.5 0v-2.133a1.1 1.1 0 0 0-.396-.846l-.996-.83a2.34 2.34 0 0 1-.157-3.453l1.654-1.654a.317.317 0 0 0-.1-.516a3.52 3.52 0 0 0-3.25.25L8.898 8.637a.75.75 0 0 1-.795-1.272zM2.498 16.442a.75.75 0 0 1 1.06.056l.608.676A3.25 3.25 0 0 0 6.58 18.25h10.84a3.25 3.25 0 0 0 2.415-1.076l.608-.676a.75.75 0 1 1 1.116 1.004l-.609.676a4.75 4.75 0 0 1-3.53 1.572H6.58a4.75 4.75 0 0 1-3.53-1.572l-.608-.676a.75.75 0 0 1 .055-1.06" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M8 21a1 1 0 1 1-2 0a1 1 0 0 1 2 0m10 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0M16.5 9.25a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5zm-4.97 5.28a.75.75 0 1 0-1.06-1.06l-.622.621c-.476.477-.577.558-.682.602s-.234.057-.909.057H7a.75.75 0 0 0 0 1.5h1.361c.51 0 .961.002 1.379-.171c.417-.173.736-.493 1.095-.854l.074-.073z"></svg:path>`,
})
export class SolarSkateboardingRoundBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSkipNextBoldIcon],svg[solar-skip-next-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.66 14.647c1.787-1.154 1.787-4.14 0-5.294L5.87 2.385C4.135 1.264 2 2.724 2 5.033v13.934c0 2.31 2.134 3.769 3.87 2.648zM22.75 5a.75.75 0 0 0-1.5 0v14a.75.75 0 0 0 1.5 0z"></svg:path>`,
})
export class SolarSkipNextBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSkipPreviousBoldIcon],svg[solar-skip-previous-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.09 14.647c-1.787-1.154-1.787-4.14 0-5.294l10.79-6.968c1.736-1.121 3.87.339 3.87 2.648v13.934c0 2.31-2.134 3.769-3.87 2.648zM2 5a.75.75 0 0 1 1.5 0v14A.75.75 0 0 1 2 19z"></svg:path>`,
})
export class SolarSkipPreviousBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSkirtBoldIcon],svg[solar-skirt-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.108 2H7.892c-.969 0-1.453 0-1.754.293s-.3.764-.3 1.707v.75h12.324V4c0-.943 0-1.414-.3-1.707C17.56 2 17.077 2 16.108 2M2.08 17.953L5.612 6.25h3.423L7.147 21.407a1 1 0 0 0-.005.095C5.046 21.041 3.6 20.35 2.734 19.83c-.652-.391-.87-1.16-.653-1.876m6.512 3.812C9.606 21.912 10.74 22 12 22s2.393-.088 3.407-.235a1 1 0 0 1-.043-.172L13.454 6.25h-2.908l-1.91 15.343a1 1 0 0 1-.043.172M14.966 6.25l1.886 15.157a1 1 0 0 1 .006.096c2.096-.462 3.541-1.154 4.407-1.674c.653-.391.87-1.16.654-1.876L18.39 6.25z"></svg:path>`,
})
export class SolarSkirtBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSlashCircleBoldIcon],svg[solar-slash-circle-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10m2.018-14.635a.75.75 0 1 0-1.448-.389l-2.589 9.66a.75.75 0 0 0 1.45.388z" clip-rule="evenodd"></svg:path>`,
})
export class SolarSlashCircleBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSlashSquareBoldIcon],svg[solar-slash-square-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464m10.554 3.9a.75.75 0 1 0-1.448-.388l-2.589 9.66a.75.75 0 0 0 1.45.388z" clip-rule="evenodd"></svg:path>`,
})
export class SolarSlashSquareBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSledgehammerBoldIcon],svg[solar-sledgehammer-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.604 4.604C9.34 2.868 10.208 2 11.286 2c1.079 0 1.947.868 3.682 2.604l4.42 4.419c1.735 1.735 2.603 2.603 2.603 3.682s-.868 1.946-2.604 3.682s-2.604 2.604-3.682 2.604c-1.079 0-1.947-.868-3.682-2.604l-4.42-4.419C5.869 10.233 5 9.365 5 8.286s.868-1.946 2.604-3.682m-.32 9.166l-4.458 4.458c-.343.343-.514.514-.617.692a1.56 1.56 0 0 0 0 1.562c.103.178.274.35.617.692s.513.514.692.617a1.56 1.56 0 0 0 1.562 0c.178-.103.35-.275.692-.617l4.458-4.458z"></svg:path><svg:path fill="currentColor" d="m8.345 12.71l.004-.005l2.946 2.946l-.005.004zm11.324-5.527a1.56 1.56 0 0 0-.024-1.52c-.103-.178-.275-.349-.617-.691c-.342-.343-.514-.514-.692-.617a1.56 1.56 0 0 0-1.519-.024z"></svg:path>`,
})
export class SolarSledgehammerBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSleepingBoldIcon],svg[solar-sleeping-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.75 6a.75.75 0 0 0-1.5 0v12a.75.75 0 0 0 1.5 0v-1.25h18.392V18a.75.75 0 0 0 1.5 0v-2.357c0-1.995 0-2.992-.28-3.794a5 5 0 0 0-3.068-3.068c-.802-.28-1.8-.28-3.794-.28h-.002c-.798 0-1.838 0-2.159.111a2 2 0 0 0-1.227 1.227C12 10.16 12 10.56 12 11.357v3.893H2.75z"></svg:path><svg:path fill="currentColor" d="M7 13.5a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5"></svg:path>`,
})
export class SolarSleepingBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSleepingCircleBoldIcon],svg[solar-sleeping-circle-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M16.375 4.65a.75.75 0 1 1-.75-1.3l3.464-2a.75.75 0 0 1 1.1.844l-.996 3.715l1.896-1.094a.75.75 0 1 1 .75 1.299l-3.464 2a.75.75 0 0 1-1.1-.844l.996-3.715zm-3.702 1.5a.75.75 0 1 1 .75-1.3l1.732 1a.75.75 0 0 1-.181 1.374l-.983.264l.164.095a.75.75 0 1 1-.75 1.299l-1.732-1a.75.75 0 0 1 .18-1.374l.984-.264z"></svg:path><svg:path d="M13.285 3.262a2.253 2.253 0 0 0-2.483 2.096a2.25 2.25 0 0 0-.724 2.96c.194.352.482.653.845.863l1.732 1a2.25 2.25 0 0 0 3.357-1.662a2.25 2.25 0 0 0 3.113.894l.976-.563A10 10 0 0 1 21 13c0 5.523-4.477 10-10 10S1 18.523 1 13S5.477 3 11 3q1.18.002 2.285.262m-7.839 7.99a.75.75 0 0 1 .612.246c.464.518.964.752 1.442.752c.297 0 .604-.09.904-.284q.275-.175.538-.468a.75.75 0 1 1 1.116 1.004c-.67.743-1.548 1.248-2.558 1.248s-1.889-.505-2.558-1.248a.75.75 0 0 1 .504-1.25m7.612.246a.75.75 0 1 0-1.116 1.004c.67.743 1.548 1.248 2.558 1.248s1.889-.505 2.558-1.248a.75.75 0 0 0-1.116-1.004c-.465.518-.965.752-1.442.752s-.977-.234-1.442-.752M12 17a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path></svg:g>`,
})
export class SolarSleepingCircleBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSleepingSquareBoldIcon],svg[solar-sleeping-square-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M16.375 4.65a.75.75 0 1 1-.75-1.3l3.464-2a.75.75 0 0 1 1.1.844l-.996 3.715l1.896-1.094a.75.75 0 1 1 .75 1.299l-3.464 2a.75.75 0 0 1-1.1-.844l.996-3.715zm-3.702 1.5a.75.75 0 1 1 .75-1.3l1.732 1a.75.75 0 0 1-.181 1.374l-.983.264l.164.095a.75.75 0 1 1-.75 1.299l-1.732-1a.75.75 0 0 1 .18-1.374l.984-.264z"></svg:path><svg:path d="M13.975 3.02q-.087.18-.141.371a2.25 2.25 0 0 0-3.032 1.968a2.25 2.25 0 0 0 .12 3.822l1.733 1a2.25 2.25 0 0 0 3.357-1.663a2.25 2.25 0 0 0 3.113.894l1.782-1.028C21 9.61 21 11.116 21 13c0 4.714 0 7.071-1.465 8.535C18.072 23 15.715 23 11 23s-7.071 0-8.536-1.465C1 20.072 1 17.714 1 13s0-7.071 1.464-8.536C3.93 3 6.286 3 11 3c1.117 0 2.103 0 2.975.02m-.917 8.479a.75.75 0 1 0-1.116 1.002c.67.744 1.548 1.249 2.558 1.249s1.889-.505 2.558-1.248a.75.75 0 1 0-1.116-1.004c-.465.517-.965.752-1.442.752s-.977-.235-1.442-.751m-8.06-.057a.75.75 0 0 1 1.06.056c.465.517.965.752 1.442.752s.978-.235 1.442-.751a.75.75 0 1 1 1.116 1.002c-.67.744-1.548 1.249-2.558 1.249s-1.889-.505-2.558-1.248a.75.75 0 0 1 .056-1.06M12 17a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path></svg:g>`,
})
export class SolarSleepingSquareBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSliderHorizontalBoldIcon],svg[solar-slider-horizontal-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 6.419c2.828 0 4.243 0 5.121.817S22 9.369 22 12s0 3.947-.879 4.764c-.878.817-2.293.817-5.121.817H8c-2.828 0-4.243 0-5.121-.817S2 14.631 2 12s0-3.947.879-4.764c.878-.817 2.293-.817 5.121-.817zm.099-1.396H7.9c-.983 0-1.865 0-2.629.046q-.404.025-.764.069a8 8 0 0 0-.32.046c-.217.036-.42-.131-.401-.35c.037-.43.118-.82.317-1.183a3.15 3.15 0 0 1 1.42-1.321c.391-.186.81-.26 1.273-.296C7.245 2 7.795 2 8.469 2h7.062c.674 0 1.225 0 1.672.034c.463.035.882.11 1.273.296c.611.29 1.108.752 1.42 1.32c.199.364.28.753.317 1.184c.02.219-.184.386-.4.35a8 8 0 0 0-.321-.046q-.36-.044-.764-.069c-.764-.046-1.647-.046-2.63-.046M7.901 18.977H16.1c.982 0 1.865 0 2.629-.047q.405-.023.764-.068q.16-.02.32-.046c.217-.036.42.131.401.35c-.037.43-.118.82-.317 1.183a3.15 3.15 0 0 1-1.42 1.322c-.391.185-.81.26-1.273.295c-.447.034-.998.034-1.672.034H8.47c-.674 0-1.225 0-1.672-.034c-.463-.035-.882-.11-1.272-.296a3.15 3.15 0 0 1-1.42-1.32c-.2-.364-.28-.753-.318-1.184c-.02-.219.184-.386.4-.35q.16.026.321.046q.36.044.764.069c.764.046 1.646.046 2.63.046"></svg:path>`,
})
export class SolarSliderHorizontalBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSliderMinimalisticHorizontalBoldIcon],svg[solar-slider-minimalistic-horizontal-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 5.846c2.828 0 4.243 0 5.121.901C22 7.65 22 9.1 22 12s0 4.351-.879 5.253c-.878.9-2.293.9-5.121.9H8c-2.828 0-4.243 0-5.121-.9C2 16.35 2 14.9 2 12s0-4.351.879-5.253c.878-.9 2.293-.9 5.121-.9z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M20.25 2.77a.76.76 0 0 1-.75.768h-15a.76.76 0 0 1-.75-.769A.76.76 0 0 1 4.5 2h15a.76.76 0 0 1 .75.77m0 18.46a.76.76 0 0 1-.75.77h-15a.76.76 0 0 1-.75-.77a.76.76 0 0 1 .75-.768h15a.76.76 0 0 1 .75.769" clip-rule="evenodd"></svg:path>`,
})
export class SolarSliderMinimalisticHorizontalBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSliderVerticalBoldIcon],svg[solar-slider-vertical-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.419 8c0-2.828 0-4.243.817-5.121S9.369 2 12 2s3.947 0 4.764.879c.817.878.817 2.293.817 5.121v8c0 2.828 0 4.243-.817 5.121S14.631 22 12 22s-3.947 0-4.764-.879c-.817-.878-.817-2.293-.817-5.121zm-1.396-.099V16.1c0 .982 0 1.865.046 2.629q.025.405.069.764q.02.16.046.32c.036.217-.131.42-.35.401c-.43-.037-.82-.118-1.183-.317a3.15 3.15 0 0 1-1.321-1.42c-.186-.391-.26-.81-.296-1.273C2 16.756 2 16.205 2 15.531V8.47c0-.674 0-1.224.034-1.672c.035-.463.11-.882.296-1.272a3.15 3.15 0 0 1 1.32-1.42c.364-.2.753-.28 1.184-.318c.219-.02.386.184.35.4a8 8 0 0 0-.046.321q-.044.36-.069.764c-.046.764-.046 1.646-.046 2.63m13.954 8.196V7.9c0-.983 0-1.865-.047-2.629q-.023-.404-.068-.764a8 8 0 0 0-.046-.32c-.036-.217.131-.42.35-.401c.43.037.82.118 1.183.317a3.15 3.15 0 0 1 1.322 1.42c.185.391.26.81.295 1.273c.034.448.034.998.034 1.672v7.062c0 .674 0 1.225-.034 1.672c-.035.463-.11.882-.296 1.273a3.15 3.15 0 0 1-1.32 1.42c-.364.199-.753.28-1.184.317c-.219.02-.386-.184-.35-.4q.026-.16.046-.321q.044-.36.069-.764c.046-.764.046-1.647.046-2.63"></svg:path>`,
})
export class SolarSliderVerticalBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSliderVerticalMinimalisticBoldIcon],svg[solar-slider-vertical-minimalistic-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.846 8c0-2.828 0-4.243.901-5.121C7.65 2 9.1 2 12 2s4.351 0 5.253.879c.9.878.9 2.293.9 5.121v8c0 2.828 0 4.243-.9 5.121C16.35 22 14.9 22 12 22s-4.351 0-5.253-.879c-.9-.878-.9-2.293-.9-5.121z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M2.77 3.75a.76.76 0 0 1 .768.75v15a.76.76 0 0 1-.769.75A.76.76 0 0 1 2 19.5v-15a.76.76 0 0 1 .77-.75m18.46 0a.76.76 0 0 1 .77.75v15a.76.76 0 0 1-.77.75a.76.76 0 0 1-.768-.75v-15a.76.76 0 0 1 .769-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarSliderVerticalMinimalisticBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSmartHomeAngleBoldIcon],svg[solar-smart-home-angle-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.25 12.25A.75.75 0 0 1 3 11.5a9.75 9.75 0 0 1 9.75 9.75a.75.75 0 0 1-1.5 0A8.25 8.25 0 0 0 3 13a.75.75 0 0 1-.75-.75"></svg:path><svg:path fill="currentColor" d="M2.25 15.25A.75.75 0 0 1 3 14.5a6.75 6.75 0 0 1 6.75 6.75a.75.75 0 0 1-1.5 0C8.25 18.35 5.9 16 3 16a.75.75 0 0 1-.75-.75"></svg:path><svg:path fill="currentColor" d="M3 17.5A.75.75 0 0 0 3 19a2.25 2.25 0 0 1 2.25 2.25a.75.75 0 0 0 1.5 0A3.75 3.75 0 0 0 3 17.5m-.976-7.278C2.32 10.08 2.65 10 3 10c6.213 0 11.25 5.037 11.25 11.25q-.002.396-.128.749c2.782-.01 4.276-.104 5.329-1.01c1.175-1.013 1.419-2.706 1.906-6.094l.279-1.937c.38-2.637.57-3.956.029-5.083s-1.691-1.813-3.992-3.183l-1.385-.825C14.2 2.622 13.154 2 12 2s-2.199.622-4.288 1.867l-1.385.825c-2.3 1.37-3.451 2.056-3.992 3.183c-.31.648-.38 1.359-.31 2.347"></svg:path>`,
})
export class SolarSmartHomeAngleBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSmartHomeBoldIcon],svg[solar-smart-home-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.485 12.25a.75.75 0 0 1 .75-.75c5.39 0 9.758 4.365 9.758 9.75a.75.75 0 0 1-1.501 0c0-4.556-3.697-8.25-8.257-8.25a.75.75 0 0 1-.75-.75m.75 2.25a.75.75 0 1 0 0 1.5a5.25 5.25 0 0 1 5.254 5.25a.75.75 0 0 0 1.502 0a6.753 6.753 0 0 0-6.756-6.75m-.75 3.75a.75.75 0 0 1 .75-.75a3.75 3.75 0 0 1 3.753 3.75a.75.75 0 0 1-1.501 0A2.25 2.25 0 0 0 3.235 19a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M2 10.369c.355-.233.78-.369 1.235-.369c6.218 0 11.26 5.037 11.26 11.25c0 .263-.046.515-.129.75c3.527-.001 5.328-.04 6.462-1.212C22 19.576 22 17.626 22 13.725v-1.521c0-2.289 0-3.433-.52-4.381s-1.468-1.537-3.367-2.715L16.11 3.867C14.104 2.622 13.101 2 11.992 2s-2.112.622-4.12 1.867l-2 1.241c-1.9 1.178-2.849 1.766-3.368 2.715c-.358.653-.47 1.398-.504 2.545"></svg:path>`,
})
export class SolarSmartHomeBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSmartSpeaker2BoldIcon],svg[solar-smart-speaker-2-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.492 3.22c1.605-.447 3.095-.558 4.193-.406c.55.077.964.214 1.24.377c.272.16.367.315.397.432c.03.12.023.311-.14.6c-.165.29-.461.627-.903.98c-.881.706-2.227 1.383-3.831 1.83c-1.605.446-3.095.557-4.193.404c-.55-.076-.965-.214-1.241-.376c-.271-.16-.366-.315-.396-.432c-.031-.12-.023-.311.14-.6c.164-.29.46-.628.903-.98c.88-.706 2.227-1.383 3.831-1.83"></svg:path><svg:path fill="currentColor" d="M18.21 5.38a5.8 5.8 0 0 1-.994.995c-1.073.858-2.614 1.615-4.367 2.102c-1.752.488-3.453.633-4.8.446c-.673-.093-1.295-.275-1.796-.57a2.7 2.7 0 0 1-.532-.404l-.388 4.385l.445.446c.368.37 1.828 1.47 6.222 1.47c4.509 0 5.928-1.158 6.25-1.499l.47-.498z"></svg:path><svg:path fill="currentColor" d="m5.154 14.351l.012-.13c.973.709 2.943 1.53 6.834 1.53c3.933 0 5.903-.84 6.865-1.552l.018.241c.155 2.74.232 4.109-.267 5.148a4.3 4.3 0 0 1-1.665 1.834c-.97.578-2.292.578-4.935.578c-2.674 0-4.01 0-4.986-.587a4.3 4.3 0 0 1-1.667-1.858c-.494-1.052-.4-2.436-.209-5.204"></svg:path>`,
})
export class SolarSmartSpeaker2BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSmartSpeakerBoldIcon],svg[solar-smart-speaker-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.24 2.461a4.83 4.83 0 0 0-3.92 4.197l-.016.137a47 47 0 0 0-.296 6.268l.484.422c.436.38 1.637 1.381 4.427 1.916c.321-.805.776-1.458 1.421-1.918c.738-.524 1.637-.733 2.66-.733c1.022 0 1.92.209 2.658.733c.646.46 1.101 1.114 1.422 1.92a12.4 12.4 0 0 0 2.195-.616c1.284-.502 1.919-1.066 2.217-1.34l.497-.456c.044-2.15-.06-4.303-.313-6.443a4.7 4.7 0 0 0-3.809-4.066l-.323-.06a24.7 24.7 0 0 0-9.09 0zM8.488 4.98a.75.75 0 1 0-.978-1.138c-.467.402-.761 1-.761 1.57c0 1.013.767 1.71 1.653 2.114c.91.416 2.153.635 3.597.635s2.686-.22 3.597-.635c.886-.404 1.653-1.101 1.653-2.115c0-.623-.345-1.123-.761-1.48a.75.75 0 0 0-.978 1.137c.225.194.239.313.239.343c0 .14-.102.443-.776.75c-.649.296-1.657.5-2.974.5s-2.325-.204-2.974-.5c-.674-.307-.776-.61-.776-.75c0-.032.01-.101.054-.191a.8.8 0 0 1 .185-.24" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M12 15.75c-.94 0-1.783-.045-2.539-.124c.214-.426.466-.718.75-.92c.405-.288.965-.456 1.79-.456c.823 0 1.384.168 1.789.456c.284.202.535.495.75.921c-.753.078-1.596.123-2.54.123"></svg:path><svg:path fill="currentColor" d="M20.902 15.057c-.458.342-1.125.753-2.079 1.127c-1.498.586-3.673 1.066-6.823 1.066c-5.137 0-7.69-1.294-8.908-2.17q.076 1.204.213 2.404a4.714 4.714 0 0 0 4.105 4.137l1.016.126c.495.062.742.093.99.118c1.717.18 3.45.18 5.169 0c.247-.025.494-.056.989-.118l.906-.113a4.84 4.84 0 0 0 4.215-4.26l.017-.154q.12-1.08.19-2.163"></svg:path>`,
})
export class SolarSmartSpeakerBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSmartSpeakerMinimalisticBoldIcon],svg[solar-smart-speaker-minimalistic-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.24 2.461a4.83 4.83 0 0 0-3.92 4.197l-.016.137a47 47 0 0 0 0 10.69A4.714 4.714 0 0 0 7.41 21.62l1.016.126c.495.062.742.093.99.118c1.717.18 3.45.18 5.169 0c.247-.025.494-.056.989-.118l.906-.113a4.84 4.84 0 0 0 4.215-4.26l.017-.154a46.8 46.8 0 0 0-.035-10.672a4.7 4.7 0 0 0-3.809-4.066l-.323-.06a24.7 24.7 0 0 0-9.09 0zm-.815 3.057a.75.75 0 0 1 1.057-.093C8.059 5.908 9.676 6.75 12 6.75s3.941-.842 4.518-1.325a.75.75 0 1 1 .963 1.15C16.62 7.297 14.657 8.25 12 8.25s-4.62-.953-5.482-1.675a.75.75 0 0 1-.093-1.057" clip-rule="evenodd"></svg:path>`,
})
export class SolarSmartSpeakerMinimalisticBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSmartVacuumCleaner2BoldIcon],svg[solar-smart-vacuum-cleaner-2-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 6.5a2.25 2.25 0 1 0 0 4.5a2.25 2.25 0 0 0 0-4.5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M18.52 19.332A9.96 9.96 0 0 1 12 21.75a9.96 9.96 0 0 1-6.52-2.418L2.53 22.28a.75.75 0 0 1-1.06-1.06l2.948-2.95A9.96 9.96 0 0 1 2 11.75c0-5.523 4.477-10 10-10s10 4.477 10 10a9.96 9.96 0 0 1-2.418 6.52l2.948 2.95a.75.75 0 1 1-1.06 1.06zM8.25 8.75a3.75 3.75 0 1 1 7.5 0a3.75 3.75 0 0 1-7.5 0m4.5 7a.75.75 0 0 0-1.5 0v2a.75.75 0 0 0 1.5 0z" clip-rule="evenodd"></svg:path>`,
})
export class SolarSmartVacuumCleaner2BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSmartVacuumCleanerBoldIcon],svg[solar-smart-vacuum-cleaner-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.75 9a2.25 2.25 0 1 1 4.5 0a2.25 2.25 0 0 1-4.5 0"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M21.21 15.904A10 10 0 0 0 22 12c0-5.523-4.477-10-10-10S2 6.477 2 12a10 10 0 0 0 .79 3.904L2.706 16A3.75 3.75 0 0 0 8 21.295l.096-.086c1.2.51 2.519.791 3.904.791a10 10 0 0 0 3.904-.79l.096.085A3.75 3.75 0 0 0 21.295 16zm-.768 1.459a10.05 10.05 0 0 1-3.08 3.079a2.25 2.25 0 0 0 3.08-3.08m-13.805 3.08a10.05 10.05 0 0 1-3.08-3.08a2.25 2.25 0 0 0 3.08 3.08M12 5.25a3.75 3.75 0 1 0 0 7.5a3.75 3.75 0 0 0 0-7.5m0 10a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarSmartVacuumCleanerBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSmartphone2BoldIcon],svg[solar-smartphone-2-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.172 3.172C4 4.343 4 6.229 4 10v4c0 3.771 0 5.657 1.172 6.828S8.229 22 12 22s5.657 0 6.828-1.172S20 17.771 20 14v-4c0-3.771 0-5.657-1.172-6.828S15.771 2 12 2S6.343 2 5.172 3.172M9 4.25a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5zM12 19a2 2 0 1 0 0-4a2 2 0 0 0 0 4" clip-rule="evenodd"></svg:path>`,
})
export class SolarSmartphone2BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSmartphoneBoldIcon],svg[solar-smartphone-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.052 2h-.104c-1.68 0-3.01 0-4.052.142c-1.072.147-1.94.456-2.624 1.152s-.988 1.58-1.132 2.67C4 7.024 4 8.378 4 10.087v3.826c0 1.71 0 3.064.14 4.123c.144 1.09.448 1.974 1.132 2.67s1.552 1.005 2.624 1.152C8.937 22 10.268 22 11.948 22h.104c1.68 0 3.01 0 4.052-.142c1.072-.147 1.94-.456 2.624-1.152s.988-1.58 1.132-2.67c.14-1.06.14-2.414.14-4.123v-3.826c0-1.71 0-3.064-.14-4.123c-.144-1.09-.448-1.974-1.132-2.67s-1.552-1.005-2.624-1.152C15.063 2 13.732 2 12.052 2m-3.48 16.512a.69.69 0 0 1 .685-.698h5.486c.379 0 .686.312.686.698a.69.69 0 0 1-.686.697H9.257a.69.69 0 0 1-.686-.697" clip-rule="evenodd"></svg:path>`,
})
export class SolarSmartphoneBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSmartphoneRotate2BoldIcon],svg[solar-smartphone-rotate-2-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 9.626c0 1.192.96 2.151 2.878 4.07l5.426 5.426C12.223 21.041 13.182 22 14.374 22s2.151-.96 4.07-2.878l.678-.678C21.041 16.526 22 15.566 22 14.374s-.96-2.151-2.878-4.07l-5.426-5.426C11.777 2.959 10.818 2 9.626 2s-2.151.96-4.07 2.878l-.678.678C2.959 7.475 2 8.434 2 9.626m7.478-3.539a.75.75 0 0 0-1.06-1.06l-3.392 3.39a.75.75 0 0 0 1.06 1.062zm7.27 10.662a1.44 1.44 0 1 0-2.035-2.035a1.44 1.44 0 0 0 2.035 2.035M16.26 1.874a.75.75 0 0 1 .866-.613c3.2.544 5.624 3.36 5.624 6.74a.75.75 0 0 1-1.17.62l-1.5-1.014a.75.75 0 1 1 .84-1.242l.1.067c-.577-1.91-2.18-3.358-4.146-3.693a.75.75 0 0 1-.613-.865M7.74 22.126a.75.75 0 0 1-.866.613C3.674 22.196 1.25 19.38 1.25 16a.75.75 0 0 1 1.17-.621l1.5 1.014a.75.75 0 0 1-.84 1.242l-.1-.067c.577 1.91 2.18 3.358 4.146 3.693a.75.75 0 0 1 .613.865" clip-rule="evenodd"></svg:path>`,
})
export class SolarSmartphoneRotate2BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSmartphoneRotateAngleBoldIcon],svg[solar-smartphone-rotate-angle-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M19 9v5.934c0 .66-.353 1.268-.925 1.595a12.24 12.24 0 0 1-12.15 0A1.84 1.84 0 0 1 5 14.934V9c0-2.809 0-4.213.674-5.222a4 4 0 0 1 1.104-1.104C7.787 2 9.19 2 12 2s4.213 0 5.222.674a4 4 0 0 1 1.104 1.104C19 4.787 19 6.19 19 9M9 4.25a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5z"></svg:path><svg:path d="M3.627 14.534a.75.75 0 0 1-.122 1.054c-.573.454-.755.855-.755 1.162c0 .267.134.6.547.984c.414.385 1.053.766 1.907 1.102c1.21.477 2.775.833 4.546.998v-.459a.75.75 0 0 1 1.244-.564l1.5 1.312a.75.75 0 0 1 0 1.129l-1.5 1.312A.75.75 0 0 1 9.75 22v-.66c-1.944-.17-3.7-.558-5.096-1.108c-.956-.377-1.781-.843-2.38-1.4c-.598-.558-1.024-1.261-1.024-2.082c0-.95.567-1.738 1.324-2.338a.75.75 0 0 1 1.053.122m16.746 0a.75.75 0 0 1 1.053-.122c.757.6 1.324 1.388 1.324 2.338c0 1.378-1.168 2.41-2.547 3.101c-1.441.723-3.412 1.234-5.627 1.459a.75.75 0 1 1-.152-1.493c2.098-.212 3.877-.69 5.107-1.307c1.294-.648 1.719-1.303 1.719-1.76c0-.307-.182-.708-.755-1.162a.75.75 0 0 1-.122-1.054"></svg:path></svg:g>`,
})
export class SolarSmartphoneRotateAngleBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSmartphoneRotateOrientationBoldIcon],svg[solar-smartphone-rotate-orientation-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.847 3.57C2 4.417 2 5.78 2 8.506v7.71c0 2.727 0 4.09.847 4.937S5.057 22 7.783 22h.964c2.726 0 4.09 0 4.936-.847s.847-2.21.847-4.936v-7.71c0-2.727 0-4.09-.847-4.937s-2.21-.847-4.936-.847h-.964c-2.726 0-4.09 0-4.936.847m3.008 1.322a.723.723 0 1 0 0 1.445h4.82a.723.723 0 0 0 0-1.445zm2.41 14.216a1.446 1.446 0 1 0 0-2.891a1.446 1.446 0 0 0 0 2.891m13.012-2.891c0 2.726 0 4.089-.847 4.936c-.451.45-1.682.664-2.982.765c-.89.069-1.336.103-1.645-.183s-.309-.755-.309-1.691v-7.642c0-.937 0-1.405.308-1.691s.754-.253 1.646-.187c1.3.097 2.531.305 2.982.756c.847.847.847 2.21.847 4.937m-2.169-1.928a.723.723 0 1 0-1.445 0v3.856a.723.723 0 1 0 1.445 0zM15.745 2.602a.723.723 0 0 1 .834-.592C19.663 2.535 22 5.25 22 8.506a.723.723 0 0 1-1.128.599l-1.445-.977a.723.723 0 1 1 .81-1.198l.095.065c-.556-1.84-2.1-3.237-3.995-3.56a.723.723 0 0 1-.592-.833" clip-rule="evenodd"></svg:path>`,
})
export class SolarSmartphoneRotateOrientationBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSmartphoneUpdateBoldIcon],svg[solar-smartphone-update-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M2.796 5.045C3.13 2.798 4.924 1 7.199 1c1.363 0 2.567.656 3.374 1.66a.757.757 0 0 1-.118 1.066a.76.76 0 0 1-1.068-.117c-.55-.684-1.334-1.093-2.188-1.093c-1.343 0-2.553 1.043-2.863 2.534a.757.757 0 0 1 .465 1.263l-.74.81a.76.76 0 0 1-1.122 0l-.74-.81a.757.757 0 0 1 .597-1.268m8.344-.81a.76.76 0 0 1 .561.247l.74.809a.757.757 0 0 1-.597 1.269c-.333 2.246-2.127 4.044-4.403 4.044c-1.268 0-2.4-.568-3.2-1.456a.757.757 0 0 1 .056-1.07a.76.76 0 0 1 1.074.056c.54.6 1.274.954 2.07.954c1.343 0 2.553-1.042 2.863-2.534a.757.757 0 0 1-.465-1.263l.74-.809a.76.76 0 0 1 .561-.247"></svg:path><svg:path d="M21 11.868v4.044c0 3.813 0 5.72-1.187 6.904S16.715 24 12.893 24s-5.732 0-6.92-1.184c-1.186-1.185-1.186-3.091-1.186-6.904V14.18c0-.269 0-.403.025-.514a1.01 1.01 0 0 1 .763-.76c.11-.026.246-.026.515-.026c1.614 0 2.42 0 3.087-.151a6.07 6.07 0 0 0 4.578-4.568c.152-.665.152-1.469.152-3.077c0-.266 0-.4.026-.512a1.02 1.02 0 0 1 .78-.762c.112-.024.242-.021.5-.016c2.332.047 3.682.255 4.6 1.17C21 6.15 21 8.056 21 11.869m-11.147 8.34a.76.76 0 1 0 0 1.517h6.08a.759.759 0 1 0 0-1.516z"></svg:path></svg:g>`,
})
export class SolarSmartphoneUpdateBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSmartphoneVibrationBoldIcon],svg[solar-smartphone-vibration-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.879 2.879C5 3.757 5 5.172 5 8v8c0 2.828 0 4.243.879 5.121S8.172 22 11 22h2c2.829 0 4.243 0 5.122-.879C19 20.243 19 18.828 19 16V8c0-2.828 0-4.243-.878-5.121C17.242 2 15.829 2 13 2h-2c-2.828 0-4.242 0-5.121.879M9.5 18.25a.75.75 0 0 0 0 1.5h5a.75.75 0 0 0 0-1.5zM1.665 5.33a.75.75 0 0 1 1.006.335l.776 1.552a1.75 1.75 0 0 1 0 1.566l-.552 1.105a.25.25 0 0 0 0 .224l.552 1.105a1.75 1.75 0 0 1 0 1.566l-.552 1.105a.25.25 0 0 0 0 .224l.552 1.105a1.75 1.75 0 0 1 0 1.566l-.776 1.552a.75.75 0 1 1-1.342-.67l.777-1.553a.25.25 0 0 0 0-.224l-.553-1.105a1.75 1.75 0 0 1 0-1.566l.553-1.105a.25.25 0 0 0 0-.224l-.553-1.105a1.75 1.75 0 0 1 0-1.566l.553-1.105a.25.25 0 0 0 0-.224l-.777-1.553a.75.75 0 0 1 .336-1.006m20.67 0a.75.75 0 0 1 .336 1.005l-.776 1.553a.25.25 0 0 0 0 .224l.552 1.105a1.75 1.75 0 0 1 0 1.566l-.552 1.105a.25.25 0 0 0 0 .224l.552 1.105a1.75 1.75 0 0 1 0 1.566l-.552 1.105a.25.25 0 0 0 0 .224l.776 1.553a.75.75 0 1 1-1.342.67l-.776-1.552a1.75 1.75 0 0 1 0-1.566l.553-1.105a.25.25 0 0 0 0-.224l-.553-1.105a1.75 1.75 0 0 1 0-1.566l.553-1.105a.25.25 0 0 0 0-.224l-.553-1.105a1.75 1.75 0 0 1 0-1.566l.776-1.552a.75.75 0 0 1 1.007-.336" clip-rule="evenodd"></svg:path>`,
})
export class SolarSmartphoneVibrationBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSmileCircleBoldIcon],svg[solar-smile-circle-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10m-3.603-6.447a.75.75 0 0 1 1.05-.155c.728.54 1.607.852 2.553.852s1.825-.313 2.553-.852a.75.75 0 1 1 .894 1.204A5.77 5.77 0 0 1 12 17.75a5.77 5.77 0 0 1-3.447-1.148a.75.75 0 0 1-.156-1.049M16 10.5c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5s.448-1.5 1-1.5s1 .672 1 1.5M9 12c.552 0 1-.672 1-1.5S9.552 9 9 9s-1 .672-1 1.5s.448 1.5 1 1.5" clip-rule="evenodd"></svg:path>`,
})
export class SolarSmileCircleBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSmileSquareBoldIcon],svg[solar-smile-square-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464M15 12c.552 0 1-.672 1-1.5S15.552 9 15 9s-1 .672-1 1.5s.448 1.5 1 1.5m-5-1.5c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S8.448 9 9 9s1 .672 1 1.5m-1.603 5.053a.75.75 0 0 1 1.05-.155c.728.54 1.607.852 2.553.852s1.825-.313 2.553-.852a.75.75 0 1 1 .894 1.204A5.77 5.77 0 0 1 12 17.75a5.77 5.77 0 0 1-3.447-1.148a.75.75 0 0 1-.156-1.049" clip-rule="evenodd"></svg:path>`,
})
export class SolarSmileSquareBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSnowflakeBoldIcon],svg[solar-snowflake-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 1.25a.75.75 0 0 1 .75.75v2.19l1.72-1.72a.75.75 0 0 1 1.06 1.06l-2.78 2.78v4.391l3.802-2.195l1.018-3.798a.75.75 0 1 1 1.449.388l-.63 2.35l1.896-1.095a.75.75 0 0 1 .75 1.299L19.14 8.744l2.35.63a.75.75 0 0 1-.389 1.449l-3.798-1.018L13.5 12l3.802 2.195l3.798-1.018a.75.75 0 0 1 .388 1.45l-2.349.629l1.896 1.095a.75.75 0 1 1-.75 1.299l-1.896-1.095l.63 2.349a.75.75 0 0 1-1.449.388l-1.018-3.798L12.75 13.3v4.39l2.78 2.78a.75.75 0 1 1-1.06 1.061l-1.72-1.72V22a.75.75 0 0 1-1.5 0v-2.19l-1.72 1.72a.75.75 0 0 1-1.06-1.06l2.78-2.78v-4.391l-3.802 2.195l-1.018 3.798a.75.75 0 1 1-1.449-.388l.63-2.35l-1.896 1.096a.75.75 0 1 1-.75-1.3l1.896-1.094l-2.35-.63a.75.75 0 1 1 .389-1.448l3.798 1.017L10.5 12L6.698 9.805L2.9 10.823a.75.75 0 1 1-.388-1.45l2.349-.629L2.965 7.65a.75.75 0 0 1 .75-1.3L5.61 7.446l-.63-2.349a.75.75 0 0 1 1.45-.388l1.017 3.798L11.25 10.7V6.31L8.47 3.53a.75.75 0 0 1 1.06-1.06l1.72 1.72V2a.75.75 0 0 1 .75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarSnowflakeBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSocketBoldIcon],svg[solar-socket-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M6.75 12a5.25 5.25 0 0 1 4.5-5.197V7.5a.75.75 0 0 0 1.5 0v-.697a5.251 5.251 0 0 1 0 10.394V16.5a.75.75 0 0 0-1.5 0v.697A5.25 5.25 0 0 1 6.75 12M15 12a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-5 1a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path><svg:path d="M3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464M12 5.25a6.75 6.75 0 1 0 0 13.5a6.75 6.75 0 0 0 0-13.5"></svg:path></svg:g>`,
})
export class SolarSocketBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSofa2BoldIcon],svg[solar-sofa-2-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 13v-1a3 3 0 0 0-2.993-3c.008-.328.027-.566.07-.78A4 4 0 0 1 7.22 5.077C7.606 5 8.07 5 9 5h2.25v8zm5.75 0H17v-1a3 3 0 0 1 2.993-3a4.6 4.6 0 0 0-.07-.78a4 4 0 0 0-3.143-3.143C16.394 5 15.93 5 15 5h-2.25z"></svg:path><svg:path fill="currentColor" d="M18.444 18H5.556a3.6 3.6 0 0 1-.806-.092V19a.75.75 0 0 1-1.5 0v-1.849A3.55 3.55 0 0 1 2 14.444V12a2 2 0 1 1 4 0v1.2a.8.8 0 0 0 .8.8h10.4a.8.8 0 0 0 .8-.8V12a2 2 0 1 1 4 0v2.444a3.55 3.55 0 0 1-1.25 2.707V19a.75.75 0 0 1-1.5 0v-1.092a3.6 3.6 0 0 1-.806.092"></svg:path>`,
})
export class SolarSofa2BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSofa3BoldIcon],svg[solar-sofa-3-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.75 12.75c.967-3.884 1.396-5.903.384-7.322a4 4 0 0 0-.215-.275C18.722 3.75 16.481 3.75 12 3.75s-6.72 0-7.918 1.403q-.114.133-.215.275c-1.012 1.42-.583 3.438.384 7.322zm-15 5v2a.75.75 0 0 1-1.5 0v-2.145A2 2 0 0 1 4 13.75h16a2 2 0 0 1 .75 3.855v2.145a.75.75 0 0 1-1.5 0v-2z"></svg:path>`,
})
export class SolarSofa3BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSofaBoldIcon],svg[solar-sofa-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 12v1h10v-1a3 3 0 0 1 2.993-3a4.6 4.6 0 0 0-.07-.78a4 4 0 0 0-3.143-3.143C16.394 5 15.93 5 15 5H9c-.93 0-1.394 0-1.78.077A4 4 0 0 0 4.077 8.22a4.6 4.6 0 0 0-.07.78A3 3 0 0 1 7 12"></svg:path><svg:path fill="currentColor" d="M18.444 18H5.556a3.6 3.6 0 0 1-.806-.092V19a.75.75 0 0 1-1.5 0v-1.849A3.55 3.55 0 0 1 2 14.444V12a2 2 0 1 1 4 0v1.2a.8.8 0 0 0 .8.8h10.4a.8.8 0 0 0 .8-.8V12a2 2 0 1 1 4 0v2.444a3.55 3.55 0 0 1-1.25 2.707V19a.75.75 0 0 1-1.5 0v-1.092a3.6 3.6 0 0 1-.806.092"></svg:path>`,
})
export class SolarSofaBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSortBoldIcon],svg[solar-sort-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.464 20.536C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535M14.75 16a.75.75 0 0 1-.75.75h-4a.75.75 0 0 1 0-1.5h4a.75.75 0 0 1 .75.75M16 12.75a.75.75 0 0 0 0-1.5H8a.75.75 0 0 0 0 1.5zM18.75 8a.75.75 0 0 1-.75.75H6a.75.75 0 0 1 0-1.5h12a.75.75 0 0 1 .75.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarSortBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSortByAlphabetBoldIcon],svg[solar-sort-by-alphabet-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.25 7A.75.75 0 0 1 3 6.25h10a.75.75 0 0 1 0 1.5H3A.75.75 0 0 1 2.25 7m14.25-.75a.75.75 0 0 1 .684.442l4.5 10a.75.75 0 1 1-1.368.616l-1.437-3.194H14.12l-1.437 3.194a.75.75 0 1 1-1.368-.616l4.5-10a.75.75 0 0 1 .684-.442m-1.704 6.364h3.408L16.5 8.828zM2.25 12a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75m0 5a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarSortByAlphabetBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSortByTimeBoldIcon],svg[solar-sort-by-time-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.25 7A.75.75 0 0 1 2 6.25h8a.75.75 0 0 1 0 1.5H2A.75.75 0 0 1 1.25 7m0 5a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75m0 5a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75M17 17a5 5 0 1 0 0-10a5 5 0 0 0 0 10m.75-7a.75.75 0 0 0-1.5 0v1.846c0 .18.065.355.183.491l1 1.154a.75.75 0 0 0 1.134-.982l-.817-.943z" clip-rule="evenodd"></svg:path>`,
})
export class SolarSortByTimeBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSortFromBottomToTopBoldIcon],svg[solar-sort-from-bottom-to-top-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M16.763 3.289a.75.75 0 0 1 .837.261l3 4a.75.75 0 1 1-1.2.9l-1.65-2.2V20a.75.75 0 1 1-1.5 0V4a.75.75 0 0 1 .513-.711M3.25 8A.75.75 0 0 1 4 7.25h9a.75.75 0 0 1 0 1.5H4A.75.75 0 0 1 3.25 8m2 5a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75m2 5a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarSortFromBottomToTopBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSortFromTopToBottomBoldIcon],svg[solar-sort-from-top-to-bottom-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M17 3.25a.75.75 0 0 1 .75.75v13.75l1.65-2.2a.75.75 0 1 1 1.2.9l-3 4a.75.75 0 0 1-1.35-.45V4a.75.75 0 0 1 .75-.75M7.25 6A.75.75 0 0 1 8 5.25h5a.75.75 0 0 1 0 1.5H8A.75.75 0 0 1 7.25 6m-2 5a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75m-2 5a.75.75 0 0 1 .75-.75h9a.75.75 0 0 1 0 1.5H4a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarSortFromTopToBottomBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSortHorizontalBoldIcon],svg[solar-sort-horizontal-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.125 12a.75.75 0 0 1 1.272-.538l4.125 4a.75.75 0 0 1 0 1.076l-4.125 4A.75.75 0 0 1 13.125 20v-3.25H6a.75.75 0 0 1 0-1.5h7.125z"></svg:path><svg:path fill="currentColor" d="M10.875 4a.75.75 0 0 0-1.272-.538l-4.125 4a.75.75 0 0 0 0 1.076l4.125 4A.75.75 0 0 0 10.875 12V8.75H18a.75.75 0 0 0 0-1.5h-7.125z"></svg:path>`,
})
export class SolarSortHorizontalBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSortVerticalBoldIcon],svg[solar-sort-vertical-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 13.125a.75.75 0 0 1 .538 1.272l-4 4.125a.75.75 0 0 1-1.076 0l-4-4.125A.75.75 0 0 1 4 13.125h3.25V6a.75.75 0 1 1 1.5 0v7.125z"></svg:path><svg:path fill="currentColor" d="M20 10.875a.75.75 0 0 0 .538-1.272l-4-4.125a.75.75 0 0 0-1.076 0l-4 4.125A.75.75 0 0 0 12 10.875h3.25V18a.75.75 0 0 0 1.5 0v-7.125z"></svg:path>`,
})
export class SolarSortVerticalBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSoundwaveBoldIcon],svg[solar-soundwave-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 3.25a.75.75 0 0 1 .75.75v16a.75.75 0 0 1-1.5 0V4a.75.75 0 0 1 .75-.75m-4 3a.75.75 0 0 1 .75.75v10a.75.75 0 0 1-1.5 0V7A.75.75 0 0 1 8 6.25m8 0a.75.75 0 0 1 .75.75v10a.75.75 0 0 1-1.5 0V7a.75.75 0 0 1 .75-.75m-12 4a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75m16 0a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarSoundwaveBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSoundwaveCircleBoldIcon],svg[solar-soundwave-circle-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2m.75 5a.75.75 0 0 0-1.5 0v10a.75.75 0 0 0 1.5 0zm-5 2a.75.75 0 0 0-1.5 0v6a.75.75 0 0 0 1.5 0zm10 1a.75.75 0 0 0-1.5 0v4a.75.75 0 0 0 1.5 0z" clip-rule="evenodd"></svg:path>`,
})
export class SolarSoundwaveCircleBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSoundwaveSquareBoldIcon],svg[solar-soundwave-square-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464M12.75 7a.75.75 0 0 0-1.5 0v10a.75.75 0 0 0 1.5 0zm-5 2a.75.75 0 0 0-1.5 0v6a.75.75 0 0 0 1.5 0zm10 1a.75.75 0 0 0-1.5 0v4a.75.75 0 0 0 1.5 0z" clip-rule="evenodd"></svg:path>`,
})
export class SolarSoundwaveSquareBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSpeakerBoldIcon],svg[solar-speaker-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 6.25a1.25 1.25 0 1 0 0 2.5a1.25 1.25 0 0 0 0-2.5M9.75 15.5a2.25 2.25 0 1 1 4.5 0a2.25 2.25 0 0 1-4.5 0"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M4 10c0-3.771 0-5.657 1.172-6.828S8.229 2 12 2s5.657 0 6.828 1.172S20 6.229 20 10v4c0 3.771 0 5.657-1.172 6.828S15.771 22 12 22s-5.657 0-6.828-1.172S4 17.771 4 14zm5.25-2.5a2.75 2.75 0 1 1 5.5 0a2.75 2.75 0 0 1-5.5 0M12 11.75a3.75 3.75 0 1 0 0 7.5a3.75 3.75 0 0 0 0-7.5" clip-rule="evenodd"></svg:path>`,
})
export class SolarSpeakerBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSpeakerMinimalisticBoldIcon],svg[solar-speaker-minimalistic-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 10.75a3.25 3.25 0 1 0 0 6.5a3.25 3.25 0 0 0 0-6.5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M4 10c0-3.771 0-5.657 1.172-6.828S8.229 2 12 2s5.657 0 6.828 1.172S20 6.229 20 10v4c0 3.771 0 5.657-1.172 6.828S15.771 22 12 22s-5.657 0-6.828-1.172S4 17.771 4 14zm3.25 4a4.75 4.75 0 1 1 9.5 0a4.75 4.75 0 0 1-9.5 0M10 5.25a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"></svg:path>`,
})
export class SolarSpeakerMinimalisticBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSpecialEffectsBoldIcon],svg[solar-special-effects-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464M6.75 11.25H10a.75.75 0 0 1 0 1.5H6.75V16a.75.75 0 0 1-1.5 0V8A.75.75 0 0 1 6 7.25h4a.75.75 0 0 1 0 1.5H6.75zm4.8-3.85a.75.75 0 0 1 1.05.15l2.4 3.2l2.4-3.2a.75.75 0 1 1 1.2.9L15.937 12l2.663 3.55a.75.75 0 1 1-1.2.9l-2.4-3.2l-2.4 3.2a.75.75 0 1 1-1.2-.9L14.062 12L11.4 8.45a.75.75 0 0 1 .15-1.05" clip-rule="evenodd"></svg:path>`,
})
export class SolarSpecialEffectsBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSpedometerLowBoldIcon],svg[solar-spedometer-low-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.752 3.975a.752.752 0 0 1-1.504 0V2A10 10 0 0 0 5.46 4.394l1.556 1.553A.75.75 0 1 1 5.953 7.01L4.397 5.456A9.96 9.96 0 0 0 2 11.236h1.978a.752.752 0 1 1 0 1.501H2a9.96 9.96 0 0 0 2.397 5.78l1.556-1.554a.753.753 0 0 1 1.064 0a.75.75 0 0 1 0 1.062L5.46 19.578A10 10 0 0 0 12 22a10 10 0 0 0 6.54-2.422l-1.556-1.553a.75.75 0 0 1 0-1.062a.753.753 0 0 1 1.063 0l1.556 1.553A9.96 9.96 0 0 0 22 12.737h-1.978a.752.752 0 1 1 0-1.502H22a9.96 9.96 0 0 0-2.397-5.779L18.047 7.01a.75.75 0 1 1-1.064-1.062l1.556-1.554A10 10 0 0 0 12.752 2zm1.059 6.157a3 3 0 0 1 0 4.249c-.447.446-1.375.757-2.353.972c-1.462.322-2.194.482-2.776-.1c-.582-.58-.422-1.311-.1-2.772c.215-.976.528-1.903.974-2.349a3.01 3.01 0 0 1 4.255 0" clip-rule="evenodd"></svg:path>`,
})
export class SolarSpedometerLowBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSpedometerMaxBoldIcon],svg[solar-spedometer-max-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.752 3.975a.752.752 0 0 1-1.504 0V2A10 10 0 0 0 5.46 4.394l1.556 1.553A.75.75 0 1 1 5.953 7.01L4.397 5.456A9.96 9.96 0 0 0 2 11.236h1.978a.752.752 0 1 1 0 1.501H2a9.96 9.96 0 0 0 2.397 5.78l1.556-1.554a.753.753 0 0 1 1.064 0a.75.75 0 0 1 0 1.062L5.46 19.578A10 10 0 0 0 12 22a10 10 0 0 0 6.54-2.422l-1.556-1.553a.75.75 0 0 1 0-1.062a.753.753 0 0 1 1.063 0l1.556 1.553A9.96 9.96 0 0 0 22 12.737h-1.978a.752.752 0 1 1 0-1.502H22a9.96 9.96 0 0 0-2.397-5.779L18.047 7.01a.75.75 0 1 1-1.064-1.062l1.556-1.554A10 10 0 0 0 12.752 2zm-2.637 6.13a3 3 0 0 0 0 4.248c.447.446 1.374.758 2.352.973c1.463.32 2.194.481 2.777-.1c.582-.582.421-1.312.1-2.773c-.216-.976-.528-1.903-.975-2.349a3.01 3.01 0 0 0-4.254 0" clip-rule="evenodd"></svg:path>`,
})
export class SolarSpedometerMaxBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSpedometerMiddleBoldIcon],svg[solar-spedometer-middle-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.752 3.975a.752.752 0 0 1-1.504 0V2A10 10 0 0 0 5.46 4.394l1.556 1.553A.75.75 0 1 1 5.953 7.01L4.397 5.456A9.96 9.96 0 0 0 2 11.236h1.978a.752.752 0 1 1 0 1.501H2a9.96 9.96 0 0 0 2.397 5.78l1.556-1.554a.753.753 0 0 1 1.064 0a.75.75 0 0 1 0 1.062L5.46 19.578A10 10 0 0 0 12 22a10 10 0 0 0 6.54-2.422l-1.556-1.553a.75.75 0 0 1 0-1.062a.753.753 0 0 1 1.063 0l1.556 1.553A9.96 9.96 0 0 0 22 12.737h-1.978a.752.752 0 1 1 0-1.502H22a9.96 9.96 0 0 0-2.397-5.779L18.047 7.01a.75.75 0 1 1-1.064-1.062l1.556-1.554A10 10 0 0 0 12.752 2zm-.724 12.044a3.006 3.006 0 0 1-3.009-3.004c0-.63.436-1.506.975-2.349c.807-1.26 1.21-1.89 2.034-1.89s1.227.63 2.033 1.89c.54.843.975 1.718.975 2.35a3.006 3.006 0 0 1-3.008 3.003" clip-rule="evenodd"></svg:path>`,
})
export class SolarSpedometerMiddleBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSquareAcademicCap2BoldIcon],svg[solar-square-academic-cap-2-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.217 3.5a5.17 5.17 0 0 0-4.434 0L5.489 5.512a2.25 2.25 0 0 1 .647 4.306l-1.076.461c-.534.23-.837.362-1.042.467l-.003.05L9.783 13.5a5.17 5.17 0 0 0 4.434 0l6.691-3.137c1.456-.682 1.456-3.044 0-3.726z"></svg:path><svg:path fill="currentColor" d="M5 12.915v3.71c0 1.008.503 1.952 1.385 2.44C7.854 19.88 10.204 21 12 21s4.146-1.121 5.615-1.934c.881-.489 1.385-1.433 1.385-2.44v-3.711l-4.146 1.944a6.67 6.67 0 0 1-5.708 0zm.545-4.475a.75.75 0 0 0-.59-1.38l-1.112.477c-.557.239-1.03.441-1.4.65c-.395.222-.734.482-.989.868c-.254.386-.36.8-.408 1.25C1 10.729 1 11.243 1 11.85v2.901a.75.75 0 0 0 1.5 0v-2.862c0-.656.001-1.088.037-1.421c.034-.315.093-.47.17-.586c.075-.115.195-.231.471-.387c.292-.164.689-.335 1.292-.593z"></svg:path>`,
})
export class SolarSquareAcademicCap2BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSquareAcademicCapBoldIcon],svg[solar-square-academic-cap-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.217 3.5a5.17 5.17 0 0 0-4.434 0L3.092 6.637c-1.076.504-1.357 1.927-.842 2.91V14.5a.75.75 0 0 0 1.5 0v-3.828L9.783 13.5a5.17 5.17 0 0 0 4.434 0l6.691-3.137c1.456-.682 1.456-3.044 0-3.726z"></svg:path><svg:path fill="currentColor" d="M5 12.915v3.71c0 1.008.503 1.952 1.385 2.44C7.854 19.88 10.204 21 12 21s4.146-1.121 5.615-1.934c.882-.489 1.385-1.433 1.385-2.44v-3.711l-4.146 1.944a6.67 6.67 0 0 1-5.708 0z"></svg:path>`,
})
export class SolarSquareAcademicCapBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSquareAltArrowDownBoldIcon],svg[solar-square-alt-arrow-down-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464M8.47 9.97a.75.75 0 0 1 1.06 0L12 12.44l2.47-2.47a.75.75 0 1 1 1.06 1.06l-3 3a.75.75 0 0 1-1.06 0l-3-3a.75.75 0 0 1 0-1.06" clip-rule="evenodd"></svg:path>`,
})
export class SolarSquareAltArrowDownBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSquareAltArrowLeftBoldIcon],svg[solar-square-alt-arrow-left-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M20.536 3.464C19.07 2 16.714 2 12 2S4.929 2 3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536M14.03 8.47a.75.75 0 0 1 0 1.06L11.56 12l2.47 2.47a.75.75 0 1 1-1.06 1.06l-3-3a.75.75 0 0 1 0-1.06l3-3a.75.75 0 0 1 1.06 0" clip-rule="evenodd"></svg:path>`,
})
export class SolarSquareAltArrowLeftBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSquareAltArrowRightBoldIcon],svg[solar-square-alt-arrow-right-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.464 20.536C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535M9.97 15.53a.75.75 0 0 1 0-1.06L12.44 12L9.97 9.53a.75.75 0 0 1 1.06-1.06l3 3a.75.75 0 0 1 0 1.06l-3 3a.75.75 0 0 1-1.06 0" clip-rule="evenodd"></svg:path>`,
})
export class SolarSquareAltArrowRightBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSquareAltArrowUpBoldIcon],svg[solar-square-alt-arrow-up-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.464 20.536C2 19.07 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465M8.47 14.03a.75.75 0 0 0 1.06 0L12 11.56l2.47 2.47a.75.75 0 1 0 1.06-1.06l-3-3a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 0 0 0 1.06" clip-rule="evenodd"></svg:path>`,
})
export class SolarSquareAltArrowUpBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSquareArrowDownBoldIcon],svg[solar-square-arrow-down-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464M12 7.25a.75.75 0 0 1 .75.75v6.19l1.72-1.72a.75.75 0 1 1 1.06 1.06l-3 3a.75.75 0 0 1-1.06 0l-3-3a.75.75 0 1 1 1.06-1.06l1.72 1.72V8a.75.75 0 0 1 .75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarSquareArrowDownBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSquareArrowLeftBoldIcon],svg[solar-square-arrow-left-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M20.536 3.464C19.07 2 16.714 2 12 2S4.929 2 3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536M16.75 12a.75.75 0 0 1-.75.75H9.81l1.72 1.72a.75.75 0 1 1-1.06 1.06l-3-3a.75.75 0 0 1 0-1.06l3-3a.75.75 0 1 1 1.06 1.06l-1.72 1.72H16a.75.75 0 0 1 .75.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarSquareArrowLeftBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSquareArrowLeftDownBoldIcon],svg[solar-square-arrow-left-down-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464m5.708 12.114a.75.75 0 0 1-.75-.75v-4.242a.75.75 0 0 1 1.5 0v2.432l4.376-4.377a.75.75 0 0 1 1.06 1.06l-4.376 4.377h2.432a.75.75 0 0 1 0 1.5z" clip-rule="evenodd"></svg:path>`,
})
export class SolarSquareArrowLeftDownBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSquareArrowLeftUpBoldIcon],svg[solar-square-arrow-left-up-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.464 20.536C2 19.07 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465M9.172 8.421a.75.75 0 0 0-.75.75v4.242a.75.75 0 0 0 1.5 0v-2.432l4.376 4.377a.75.75 0 0 0 1.06-1.06l-4.376-4.377h2.432a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"></svg:path>`,
})
export class SolarSquareArrowLeftUpBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSquareArrowRightBoldIcon],svg[solar-square-arrow-right-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.464 20.536C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535M7.25 12a.75.75 0 0 1 .75-.75h6.19l-1.72-1.72a.75.75 0 0 1 1.06-1.06l3 3a.75.75 0 0 1 0 1.06l-3 3a.75.75 0 1 1-1.06-1.06l1.72-1.72H8a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarSquareArrowRightBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSquareArrowRightDownBoldIcon],svg[solar-square-arrow-right-down-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M20.536 3.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464m-5.708 12.114a.75.75 0 0 0 .75-.75v-4.242a.75.75 0 0 0-1.5 0v2.432L9.702 8.64a.75.75 0 0 0-1.06 1.06l4.376 4.377h-2.432a.75.75 0 0 0 0 1.5z" clip-rule="evenodd"></svg:path>`,
})
export class SolarSquareArrowRightDownBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSquareArrowRightUpBoldIcon],svg[solar-square-arrow-right-up-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M20.536 20.536C22 19.07 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465M14.827 8.421a.75.75 0 0 1 .75.75v4.242a.75.75 0 0 1-1.5 0v-2.432L9.702 15.36a.75.75 0 1 1-1.06-1.06l4.376-4.377h-2.432a.75.75 0 0 1 0-1.5z" clip-rule="evenodd"></svg:path>`,
})
export class SolarSquareArrowRightUpBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSquareArrowUpBoldIcon],svg[solar-square-arrow-up-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.464 20.536C2 19.07 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465M12 16.75a.75.75 0 0 0 .75-.75V9.81l1.72 1.72a.75.75 0 1 0 1.06-1.06l-3-3a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 1 0 1.06 1.06l1.72-1.72V16c0 .414.336.75.75.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarSquareArrowUpBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSquareBottomDownBoldIcon],svg[solar-square-bottom-down-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.75 21a.75.75 0 0 1-.75.75H3a.75.75 0 0 1-.75-.75v-6a.75.75 0 0 1 1.5 0v4.19l6.72-6.72a.75.75 0 1 1 1.06 1.06l-6.72 6.72H9a.75.75 0 0 1 .75.75" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M2 12.984A2.25 2.25 0 0 1 5.25 15v.568l4.159-4.159a2.25 2.25 0 1 1 3.182 3.182L8.432 18.75H9A2.25 2.25 0 0 1 11.016 22H12c4.714 0 7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464C2 4.93 2 7.286 2 12z"></svg:path>`,
})
export class SolarSquareBottomDownBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSquareBottomUpBoldIcon],svg[solar-square-bottom-up-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m5.568 15.25l-3.205 3.205C2 16.991 2 14.961 2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22c-2.96 0-4.991 0-6.455-.363l3.205-3.205V19a2.25 2.25 0 0 0 4.5 0v-6A2.25 2.25 0 0 0 11 10.75H5a2.25 2.25 0 0 0 0 4.5z"></svg:path><svg:path fill="currentColor" d="M5 12.25a.75.75 0 0 0 0 1.5h4.19l-6.72 6.72a.75.75 0 1 0 1.06 1.06l6.72-6.72V19a.75.75 0 0 0 1.5 0v-6a.75.75 0 0 0-.75-.75z"></svg:path>`,
})
export class SolarSquareBottomUpBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[solarSquareDoubleAltArrowDownBoldIcon],svg[solar-square-double-alt-arrow-down-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 22c-4.714 0-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22M8.47 7.97a.75.75 0 0 0 0 1.06l3 3a.75.75 0 0 0 1.06 0l3-3a.75.75 0 0 0-1.06-1.06L12 10.44L9.53 7.97a.75.75 0 0 0-1.06 0m0 4a.75.75 0 0 0 0 1.06l3 3a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06L12 14.44l-2.47-2.47a.75.75 0 0 0-1.06 0" clip-rule="evenodd"></svg:path>`,
})
export class SolarSquareDoubleAltArrowDownBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
